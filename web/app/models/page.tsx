'use client'

import { useState } from 'react'

export default function ModelsPage() {
  const [providers, setProviders] = useState([
    { name: 'OpenAI', configured: true, models: ['gpt-4', 'gpt-3.5-turbo'] },
    { name: 'Anthropic', configured: false, models: ['claude-3-opus', 'claude-3-sonnet'] },
    { name: 'Local (Ollama)', configured: false, models: ['llama2', 'mistral'] },
  ])

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <h1 className="text-2xl font-bold text-gray-900">Model Providers</h1>
        <p className="text-sm text-gray-600">Configure LLM providers and models</p>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="space-y-4">
          {providers.map((provider, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <h3 className="text-lg font-semibold text-gray-900">{provider.name}</h3>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      provider.configured
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {provider.configured ? 'Configured' : 'Not Configured'}
                    </span>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {provider.models.map((model, midx) => (
                      <span key={midx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        {model}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="px-4 py-2 bg-primary-600 text-white text-sm rounded-lg hover:bg-primary-700">
                  {provider.configured ? 'Edit' : 'Configure'}
                </button>
              </div>

              {provider.configured && (
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <div className="text-xs font-mono text-gray-600">
                    API Key: sk-••••••••••••••••••••••••••••••••
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Add New Provider</h3>
          <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
            + Add Provider
          </button>
        </div>
      </div>
    </div>
  )
}
