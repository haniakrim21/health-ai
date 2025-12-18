'use client'

export default function APIDocsPage() {
  const endpoints = [
    {
      method: 'POST',
      path: '/api/chat',
      description: 'Send a chat message and get AI response',
      example: '{ "message": "What are symptoms of flu?" }',
    },
    {
      method: 'POST',
      path: '/api/workflow/run',
      description: 'Execute a workflow with input data',
      example: '{ "workflow_id": "123", "inputs": {...} }',
    },
    {
      method: 'POST',
      path: '/api/rag/search',
      description: 'Search knowledge base using RAG',
      example: '{ "query": "treatment for headache", "top_k": 5 }',
    },
    {
      method: 'POST',
      path: '/api/agent/run',
      description: 'Execute an AI agent task',
      example: '{ "agent_id": "456", "task": "Analyze symptoms" }',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <h1 className="text-2xl font-bold text-gray-900">API Documentation</h1>
        <p className="text-sm text-gray-600">RESTful API reference for Health AI</p>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Authentication</h2>
          <p className="text-gray-700 mb-4">
            All API requests require authentication using a Bearer token in the Authorization header:
          </p>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
            <code>Authorization: Bearer YOUR_API_KEY</code>
          </pre>
        </div>

        <div className="space-y-6">
          {endpoints.map((endpoint, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center space-x-3 mb-3">
                <span className={`px-3 py-1 text-xs font-semibold rounded ${
                  endpoint.method === 'POST' ? 'bg-green-100 text-green-800' :
                  endpoint.method === 'GET' ? 'bg-blue-100 text-blue-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {endpoint.method}
                </span>
                <code className="text-sm font-mono text-gray-900">{endpoint.path}</code>
              </div>
              <p className="text-gray-700 mb-4">{endpoint.description}</p>
              <div>
                <div className="text-sm font-semibold text-gray-700 mb-2">Example Request:</div>
                <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-xs">
                  <code>{endpoint.example}</code>
                </pre>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Base URL</h2>
          <code className="text-sm bg-gray-100 px-3 py-2 rounded">http://localhost:5001</code>
          <p className="text-sm text-gray-600 mt-4">
            For production deployment, replace with your actual domain.
          </p>
        </div>
      </div>
    </div>
  )
}
