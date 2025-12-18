'use client'

import Link from 'next/link'
import { ChatBubbleLeftRightIcon, DocumentTextIcon, CubeTransparentIcon, BookOpenIcon, CpuChipIcon, ChartBarIcon, Cog6ToothIcon, BeakerIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Chat Interface',
    description: 'Real-time conversations with AI models for health insights and patient support',
    icon: ChatBubbleLeftRightIcon,
    href: '/chat',
    color: 'bg-blue-500',
  },
  {
    name: 'Prompt IDE',
    description: 'Design and test prompts for optimal health AI responses',
    icon: DocumentTextIcon,
    href: '/prompt',
    color: 'bg-purple-500',
  },
  {
    name: 'Workflow Builder',
    description: 'Visual workflow creation for complex health AI processes',
    icon: CubeTransparentIcon,
    href: '/workflow',
    color: 'bg-green-500',
  },
  {
    name: 'RAG Pipeline',
    description: 'Knowledge retrieval from medical documents and research',
    icon: BookOpenIcon,
    href: '/rag',
    color: 'bg-yellow-500',
  },
  {
    name: 'Agent Framework',
    description: 'Autonomous AI agents for health task automation',
    icon: CpuChipIcon,
    href: '/agent',
    color: 'bg-red-500',
  },
  {
    name: 'Model Providers',
    description: 'Connect to 100+ LLM providers (OpenAI, Anthropic, etc.)',
    icon: BeakerIcon,
    href: '/models',
    color: 'bg-indigo-500',
  },
  {
    name: 'LLMOps Monitoring',
    description: 'Track performance, logs, and analytics for health AI',
    icon: ChartBarIcon,
    href: '/monitor',
    color: 'bg-pink-500',
  },
  {
    name: 'API Backend',
    description: 'RESTful APIs for integrating Health AI capabilities',
    icon: Cog6ToothIcon,
    href: '/api-docs',
    color: 'bg-teal-500',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-4xl font-bold text-gray-900">Health AI</h1>
          <p className="mt-2 text-lg text-gray-600">LLM-Powered Health Insights Platform</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Build Powerful Health AI Applications
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            All-in-one platform for creating intelligent health assistants, workflows, and knowledge systems
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Link
              key={feature.name}
              href={feature.href}
              className="group relative bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
            >
              <div>
                <span className={`inline-flex p-3 rounded-lg ${feature.color} text-white`}>
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600">
                  {feature.name}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </p>
              </div>
              <span className="absolute top-6 right-6 text-gray-400 group-hover:text-primary-600">
                →
              </span>
            </Link>
          ))}
        </div>

        {/* Quick Start Section */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Start</h3>
          <div className="prose max-w-none">
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Configure your LLM providers in the <Link href="/models" className="text-primary-600 hover:underline">Models</Link> section</li>
              <li>Start chatting with AI in the <Link href="/chat" className="text-primary-600 hover:underline">Chat Interface</Link></li>
              <li>Upload medical documents in the <Link href="/rag" className="text-primary-600 hover:underline">RAG Pipeline</Link></li>
              <li>Build custom workflows in the <Link href="/workflow" className="text-primary-600 hover:underline">Workflow Builder</Link></li>
              <li>Monitor performance in <Link href="/monitor" className="text-primary-600 hover:underline">LLMOps</Link></li>
            </ol>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-500 text-sm">
            Health AI MVP - Inspired by Dify | Built with Next.js, React, and Flask
          </p>
        </div>
      </footer>
    </div>
  )
}
