from flask import Blueprint, request, jsonify
import openai
from config import Config

bp = Blueprint('chat', __name__, url_prefix='/api/chat')

openai.api_key = Config.OPENAI_API_KEY

@bp.route('', methods=['POST'])
def chat():
    data = request.json
    message = data.get('message')
    
    if not message:
        return jsonify({'error': 'Message is required'}), 400
    
    try:
        # For MVP: Simple OpenAI API call
        # TODO: Implement conversation history, token tracking, etc.
        if Config.OPENAI_API_KEY:
            response = openai.chat.completions.create(
                model='gpt-3.5-turbo',
                messages=[
                    {'role': 'system', 'content': 'You are a helpful health AI assistant.'},
                    {'role': 'user', 'content': message}
                ],
                max_tokens=500
            )
            
            return jsonify({
                'response': response.choices[0].message.content,
                'tokens': response.usage.total_tokens
            })
        else:
            # Mock response when no API key
            return jsonify({
                'response': f'Mock response to: {message}. Please configure OPENAI_API_KEY to use real LLM.',
                'tokens': 0
            })
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@bp.route('/history/<conversation_id>', methods=['GET'])
def get_history(conversation_id):
    # TODO: Fetch conversation history from database
    return jsonify({'messages': []})
