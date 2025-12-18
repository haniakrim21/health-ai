'use client'

import { useState } from 'react'
import { DocumentArrowUpIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export default function RAGPage() {
  const [documents, setDocuments] = useState<string[]>([
    'Medical Guidelines 2024.pdf',
    'Patient Care Best Practices.docx',
    'Clinical Research Summary.pdf',
  ])
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<any[]>([])

  const handleSearch = async () => {
    // TODO: Implement actual RAG search
    setSearchResults([
      {
        id: 1,
        document: 'Medical Guidelines 2024.pdf',
        content: 'Patient care should follow evidence-based protocols...',
        score: 0.95,
      },
      {
        id: 2,
        document: 'Clinical Research Summary.pdf',
        content: 'Recent studies show that early intervention...',
        score: 0.87,
      },
    ])
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <h1 className="text-2xl font-bold text-gray-900">RAG Pipeline</h1>
        <p className="text-sm text-gray-600">Upload and search medical knowledge base</p>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Document Upload */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Documents</h2>
              
              <div className="mb-4">
                <label className="flex flex-col items-center px-4 py-6 bg-gray-50 text-primary-600 rounded-lg border-2 border-dashed border-gray-300 cursor-pointer hover:bg-gray-100">
                  <DocumentArrowUpIcon className="h-8 w-8" />
                  <span className="mt-2 text-sm">Upload Document</span>
                  <input type="file" className="hidden" accept=".pdf,.docx,.txt" />
                </label>
              </div>

              <div className="space-y-2">
                {documents.map((doc, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-700">{doc}</span>
                    </div>
                    <button className="text-red-600 hover:text-red-800 text-xs">Delete</button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Search & Results */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Knowledge Search</h2>
              
              <div className="flex space-x-2 mb-6">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search medical knowledge base..."
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <button
                  onClick={handleSearch}
                  className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 flex items-center space-x-2"
                >
                  <MagnifyingGlassIcon className="h-5 w-5" />
                  <span>Search</span>
                </button>
              </div>

              {/* Search Results */}
              <div className="space-y-4">
                {searchResults.length === 0 ? (
                  <div className="text-center py-12 text-gray-500">
                    <MagnifyingGlassIcon className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                    <p>Enter a query to search the knowledge base</p>
                  </div>
                ) : (
                  searchResults.map((result) => (
                    <div key={result.id} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="flex items-start justify-between mb-2">
                        <div className="font-medium text-gray-900">{result.document}</div>
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                          {(result.score * 100).toFixed(0)}% match
                        </span>
                      </div>
                      <p className="text-sm text-gray-700">{result.content}</p>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Settings */}
            <div className="mt-6 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">RAG Settings</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Chunk Size</label>
                  <input type="number" defaultValue="500" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Top K Results</label>
                  <input type="number" defaultValue="5" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Embedding Model</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                    <option>text-embedding-ada-002</option>
                    <option>text-embedding-3-small</option>
                    <option>text-embedding-3-large</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
