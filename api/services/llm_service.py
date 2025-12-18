"""LLM Service for unified model provider interface"""
import litellm
from config import Config

class LLMService:
    def __init__(self):
        self.api_keys = {
            'openai': Config.OPENAI_API_KEY,
            'anthropic': Config.ANTHROPIC_API_KEY,
        }
    
    def generate(self, model: str, messages: list, **kwargs):
        """Generate completion using any supported provider"""
        try:
            response = litellm.completion(
                model=model,
                messages=messages,
                **kwargs
            )
            return response
        except Exception as e:
            raise Exception(f"LLM generation failed: {str(e)}")
    
    def get_available_models(self):
        """Return list of configured models"""
        models = []
        if self.api_keys['openai']:
            models.extend(['gpt-4', 'gpt-3.5-turbo'])
        if self.api_keys['anthropic']:
            models.extend(['claude-3-opus', 'claude-3-sonnet'])
        return models
