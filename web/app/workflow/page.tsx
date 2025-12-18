'use client'

import { useCallback, useState } from 'react'
import ReactFlow, {
  Node,
  Edge,
  addEdge,
  Background,
  Controls,
  MiniMap,
  Connection,
  useNodesState,
  useEdgesState,
} from 'reactflow'
import 'reactflow/dist/style.css'

const initialNodes: Node[] = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Patient Input' },
    position: { x: 250, y: 0 },
  },
  {
    id: '2',
    data: { label: 'Symptom Analyzer' },
    position: { x: 250, y: 100 },
  },
  {
    id: '3',
    data: { label: 'Medical KB Retrieval' },
    position: { x: 100, y: 200 },
  },
  {
    id: '4',
    data: { label: 'LLM Response' },
    position: { x: 400, y: 200 },
  },
  {
    id: '5',
    type: 'output',
    data: { label: 'Final Response' },
    position: { x: 250, y: 300 },
  },
]

const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e2-3', source: '2', target: '3' },
  { id: 'e2-4', source: '2', target: '4' },
  { id: 'e3-5', source: '3', target: '5' },
  { id: 'e4-5', source: '4', target: '5' },
]

export default function WorkflowPage() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  )

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <h1 className="text-2xl font-bold text-gray-900">Workflow Builder</h1>
        <p className="text-sm text-gray-600">Design visual workflows for health AI processes</p>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r border-gray-200 p-4">
          <h3 className="font-semibold text-gray-900 mb-4">Nodes</h3>
          <div className="space-y-2">
            <div className="p-3 bg-gray-50 border border-gray-300 rounded-lg cursor-move hover:bg-gray-100">
              <div className="font-medium text-sm">LLM Node</div>
              <div className="text-xs text-gray-600">AI model inference</div>
            </div>
            <div className="p-3 bg-gray-50 border border-gray-300 rounded-lg cursor-move hover:bg-gray-100">
              <div className="font-medium text-sm">Knowledge Retrieval</div>
              <div className="text-xs text-gray-600">RAG search</div>
            </div>
            <div className="p-3 bg-gray-50 border border-gray-300 rounded-lg cursor-move hover:bg-gray-100">
              <div className="font-medium text-sm">Condition</div>
              <div className="text-xs text-gray-600">If/else logic</div>
            </div>
            <div className="p-3 bg-gray-50 border border-gray-300 rounded-lg cursor-move hover:bg-gray-100">
              <div className="font-medium text-sm">Code Block</div>
              <div className="text-xs text-gray-600">Custom logic</div>
            </div>
            <div className="p-3 bg-gray-50 border border-gray-300 rounded-lg cursor-move hover:bg-gray-100">
              <div className="font-medium text-sm">API Call</div>
              <div className="text-xs text-gray-600">External request</div>
            </div>
          </div>

          <div className="mt-6">
            <button className="w-full px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 text-sm">
              Save Workflow
            </button>
            <button className="w-full mt-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm">
              Run Workflow
            </button>
          </div>
        </div>

        {/* Canvas */}
        <div className="flex-1">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            fitView
          >
            <Background />
            <Controls />
            <MiniMap />
          </ReactFlow>
        </div>
      </div>
    </div>
  )
}
