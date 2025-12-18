'use client'

import { useState } from 'react'

export default function AgentPage() {
  const [isRunning, setIsRunning] = useState(false)
  const [logs, setLogs] = useState<string[]>([])

  const handleRun = () => {
    setIsRunning(true)
    setLogs([
      '[Agent] Starting health diagnosis agent...',
      '[Agent] Analyzing patient symptoms...',
      '[Agent] Searching medical knowledge base...',
      '[Agent] Calling external API for drug interactions...',
      '[Agent] Generating treatment recommendations...',
      '[Agent] Task completed successfully!',
    ])
    setTimeout(() => setIsRunning(false), 3000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <h1 className="text-2xl font-bold text-gray-900">Agent Framework</h1>
        <p className="text-sm text-gray-600">Configure autonomous AI agents for health tasks</p>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Agent Configuration */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Agent Configuration</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Agent Name</label>
                  <input
                    type="text"
                    defaultValue="Health Diagnosis Agent"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Agent Type</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
                    <option>ReAct Agent</option>
                    <option>Function Calling Agent</option>
                    <option>Plan-and-Execute Agent</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">System Prompt</label>
                  <textarea
                    defaultValue="You are a medical diagnosis agent. Analyze patient symptoms, search medical databases, and provide evidence-based recommendations."
                    className="w-full h-32 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Max Iterations</label>
                  <input
                    type="number"
                    defaultValue="10"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Available Tools</h2>
              
              <div className="space-y-2">
                {[
                  'Medical Knowledge Search',
                  'Drug Interaction Checker',
                  'Symptom Analyzer',
                  'Treatment Recommender',
                  'External API Caller',
                ].map((tool, idx) => (
                  <div key={idx} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <input type="checkbox" defaultChecked className="rounded" />
                    <span className="text-sm text-gray-700">{tool}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Agent Execution */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Test Agent</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Input Task</label>
                  <textarea
                    defaultValue="Patient presents with fever, headache, and fatigue for 3 days. Analyze and recommend treatment."
                    className="w-full h-24 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                <button
                  onClick={handleRun}
                  disabled={isRunning}
                  className="w-full px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:opacity-50"
                >
                  {isRunning ? 'Running...' : 'Run Agent'}
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Execution Logs</h2>
              
              <div className="bg-gray-900 text-green-400 rounded-lg p-4 h-80 overflow-y-auto font-mono text-xs">
                {logs.length === 0 ? (
                  <div className="text-gray-500">No execution logs yet...</div>
                ) : (
                  logs.map((log, idx) => (
                    <div key={idx} className="mb-1">
                      {log}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
