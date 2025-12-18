from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from config import Config
import os

app = Flask(__name__)
app.config.from_object(Config)
CORS(app)

db = SQLAlchemy(app)

# Import routes
from routes import auth, chat, prompt, workflow, rag, agent, monitor

app.register_blueprint(auth.bp)
app.register_blueprint(chat.bp)
app.register_blueprint(prompt.bp)
app.register_blueprint(workflow.bp)
app.register_blueprint(rag.bp)
app.register_blueprint(agent.bp)
app.register_blueprint(monitor.bp)

@app.route('/')
def index():
    return jsonify({
        'name': 'Health AI API',
        'version': '1.0.0',
        'status': 'running'
    })

@app.route('/health')
def health():
    return jsonify({'status': 'healthy'})

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(host='0.0.0.0', port=5001, debug=True)
