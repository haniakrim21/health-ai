'use client'

import { useState } from 'react'
import { PlayIcon } from '@heroicons/react/24/solid'

export default function PromptPage() {
  const [promptText, setPromptText] = useState('You are a helpful health AI assistant. Provide accurate, empathetic responses to health questions.')
  const [variables, setVariables] = useState<Record<string, string>>({
    user_name: 'Patient',
    condition: 'general health',
  })
  const [testInput, setTestInput] = useState('What are some tips for better sleep?')
  const [output, setOutput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleTest = async () => {
    setIsLoading(true)
    try {
      // TODO: Replace with actual API call
      const response = await fetch('/api/prompt/test', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: promptText,
          variables,
          input: testInput,
        }),
      })

      const data = await response.json()
      setOutput(data.output || 'Mock response: Here are some tips for better sleep:\n1. Maintain a consistent sleep schedule\n2. Create a relaxing bedtime routine\n3. Keep your bedroom cool and dark\n4. Avoid screens before bed')
    } catch (error) {
      setOutput('Error: Could not connect to API. Please ensure the backend is running.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <h1 className="text-2xl font-bold text-gray-900">Prompt IDE</h1>
        <p className="text-sm text-gray-600">Design and test prompts for optimal AI responses</p>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Panel - Prompt Editor */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">System Prompt</h2>
              <textarea
                value={promptText}
                onChange={(e) => setPromptText(e.target.value)}
                className="w-full h-40 px-4 py-3 border border-gray-300 rounded-lg font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Enter your system prompt..."
              />
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Variables</h2>
              <div className="space-y-3">
                {Object.entries(variables).map(([key, value]) => (
                  <div key={key} className="flex items-center space-x-3">
                    <input
                      type="text"
                      value={key}
                      readOnly
                      className="w-1/3 px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-sm"
                    />
                    <input
                      type="text"
                      value={value}
                      onChange={(e) => setVariables({ ...variables, [key]: e.target.value })}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Test Input</h2>
              <textarea
                value={testInput}
                onChange={(e) => setTestInput(e.target.value)}
                className="w-full h-24 px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Enter test message..."
              />
              <button
                onClick={handleTest}
                disabled={isLoading}
                className="mt-4 w-full px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:opacity-50 flex items-center justify-center space-x-2"
              >
                <PlayIcon className="h-5 w-5" />
                <span>{isLoading ? 'Testing...' : 'Test Prompt'}</span>
              </button>
            </div>
          </div>

          {/* Right Panel - Output */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Output</h2>
              <div className="bg-gray-50 rounded-lg p-4 min-h-[400px] font-mono text-sm whitespace-pre-wrap">
                {output || 'Test output will appear here...'}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Model Settings</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Model</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
                    <option>gpt-4</option>
                    <option>gpt-3.5-turbo</option>
                    <option>claude-3-opus</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Temperature: 0.7</label>
                  <input type="range" min="0" max="2" step="0.1" defaultValue="0.7" className="w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Max Tokens</label>
                  <input type="number" defaultValue="2048" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
