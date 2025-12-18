'use client'

import { useState } from 'react'

export default function MonitorPage() {
  const metrics = [
    { label: 'Total Requests', value: '12,543', change: '+12%' },
    { label: 'Avg Response Time', value: '1.2s', change: '-5%' },
    { label: 'Success Rate', value: '98.5%', change: '+2%' },
    { label: 'Token Usage', value: '2.4M', change: '+18%' },
  ]

  const recentLogs = [
    { time: '2 min ago', user: 'patient@health.ai', query: 'What are symptoms of flu?', status: 'success', tokens: 450 },
    { time: '5 min ago', user: 'doctor@health.ai', query: 'Analyze patient lab results', status: 'success', tokens: 1200 },
    { time: '8 min ago', user: 'admin@health.ai', query: 'Generate health report', status: 'success', tokens: 890 },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <h1 className="text-2xl font-bold text-gray-900">LLMOps Monitoring</h1>
        <p className="text-sm text-gray-600">Analytics and performance monitoring</p>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="text-sm text-gray-600 mb-1">{metric.label}</div>
              <div className="text-3xl font-bold text-gray-900">{metric.value}</div>
              <div className={`text-sm mt-2 ${
                metric.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
              }`}>
                {metric.change} from last week
              </div>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Request Volume</h3>
            <div className="h-64 flex items-end justify-around space-x-2">
              {[40, 65, 45, 80, 55, 90, 70].map((height, idx) => (
                <div key={idx} className="flex-1 bg-primary-500 rounded-t" style={{ height: `${height}%` }}></div>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-xs text-gray-600">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Response Time Trend</h3>
            <div className="h-64 flex items-center">
              <svg className="w-full h-full" viewBox="0 0 400 200">
                <polyline
                  points="0,100 50,80 100,90 150,60 200,70 250,40 300,50 350,30 400,45"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Recent Logs */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Time</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">User</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Query</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Tokens</th>
                </tr>
              </thead>
              <tbody>
                {recentLogs.map((log, idx) => (
                  <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm text-gray-600">{log.time}</td>
                    <td className="py-3 px-4 text-sm text-gray-900">{log.user}</td>
                    <td className="py-3 px-4 text-sm text-gray-700">{log.query}</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                        {log.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">{log.tokens}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
