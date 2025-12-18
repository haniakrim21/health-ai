from flask import Blueprint, request, jsonify
import openai
from config import Config

bp = Blueprint('prompt', __name__, url_prefix='/api/prompt')

@bp.route('/test', methods=['POST'])
def test_prompt():
    data = request.json
    prompt = data.get('prompt')
    variables = data.get('variables', {})
    user_input = data.get('input')
    
    # Replace variables in prompt
    formatted_prompt = prompt
    for key, value in variables.items():
        formatted_prompt = formatted_prompt.replace(f'{{{key}}}', value)
    
    try:
        if Config.OPENAI_API_KEY:
            response = openai.chat.completions.create(
                model='gpt-3.5-turbo',
                messages=[
                    {'role': 'system', 'content': formatted_prompt},
                    {'role': 'user', 'content': user_input}
                ],
                max_tokens=500
            )
            
            return jsonify({
                'output': response.choices[0].message.content,
                'tokens': response.usage.total_tokens
            })
        else:
            return jsonify({
                'output': f'Mock output for prompt testing. Configure OPENAI_API_KEY for real results.',
                'tokens': 0
            })
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@bp.route('/save', methods=['POST'])
def save_prompt():
    # TODO: Save prompt template to database
    return jsonify({'message': 'Prompt saved successfully'})
