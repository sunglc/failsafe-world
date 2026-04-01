'use client'
import { useState } from 'react'

const NODES = [
  { id: 'google', label: 'Google Account', x: 50, y: 50, type: 'root', risk: 'critical' },
  { id: 'claude', label: 'Claude AI', x: 22, y: 22, type: 'leaf', risk: 'critical' },
  { id: 'vercel', label: 'Vercel', x: 78, y: 18, type: 'leaf', risk: 'critical' },
  { id: 'notion', label: 'Notion', x: 15, y: 55, type: 'leaf', risk: 'high' },
  { id: 'stripe', label: 'Stripe', x: 85, y: 50, type: 'leaf', risk: 'critical' },
  { id: 'slack', label: 'Slack', x: 25, y: 82, type: 'leaf', risk: 'high' },
  { id: 'github', label: 'GitHub', x: 75, y: 82, type: 'leaf', risk: 'medium' },
  { id: 'figma', label: 'Figma', x: 50, y: 90, type: 'leaf', risk: 'medium' },
]

const RISK_COLOR = { critical: '#FF5C5C', high: '#FFB347', medium: '#FFD93D' }

export default function BlastRadiusDemo() {
  const [hoveredNode, setHoveredNode] = useState(null)
  const [isExploded, setIsExploded] = useState(false)

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: 500, aspectRatio: '1', margin: '0 auto' }}>
      <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
        {NODES.filter(n => n.type === 'leaf').map(node => (
          <line
            key={`line-${node.id}`}
            x1="50" y1="50" x2={node.x} y2={node.y}
            stroke={isExploded ? RISK_COLOR[node.risk] : '#E6EBF1'}
            strokeWidth={isExploded ? 0.6 : 0.3}
            strokeDasharray={isExploded ? '2 1' : 'none'}
            style={{ transition: 'all 0.6s ease' }}
          />
        ))}

        {isExploded && (
          <>
            <circle cx="50" cy="50" r="42" fill="none" stroke="#FF5C5C" strokeWidth="0.3" strokeDasharray="2 2" opacity="0.5">
              <animate attributeName="r" values="20;42" dur="0.8s" fill="freeze" />
              <animate attributeName="opacity" values="0;0.5" dur="0.8s" fill="freeze" />
            </circle>
            <circle cx="50" cy="50" r="42" fill="rgba(255,92,92,0.03)">
              <animate attributeName="r" values="20;42" dur="0.8s" fill="freeze" />
            </circle>
          </>
        )}

        {NODES.map(node => {
          const isRoot = node.type === 'root'
          const r = isRoot ? 5 : 3.5
          const fillColor = isExploded
            ? (isRoot ? '#FF5C5C' : RISK_COLOR[node.risk])
            : (isRoot ? '#635BFF' : '#FFFFFF')
          const strokeColor = isExploded
            ? (isRoot ? '#FF5C5C' : RISK_COLOR[node.risk])
            : (isRoot ? '#635BFF' : '#E6EBF1')

          return (
            <g key={node.id}
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
              style={{ cursor: 'pointer' }}
            >
              {(hoveredNode === node.id || (isExploded && isRoot)) && (
                <circle cx={node.x} cy={node.y} r={r + 3}
                  fill={isExploded ? 'rgba(255,92,92,0.12)' : 'rgba(99,91,255,0.12)'}
                />
              )}
              <circle cx={node.x} cy={node.y} r={r}
                fill={fillColor} stroke={strokeColor} strokeWidth="0.5"
                style={{ transition: 'all 0.4s ease' }}
              />
              {isRoot && (
                <text x={node.x} y={node.y + 0.5} textAnchor="middle" dominantBaseline="middle"
                  fill="white" fontSize="2.8" fontWeight="700" fontFamily="system-ui">
                  {isExploded ? '✕' : 'G'}
                </text>
              )}
              <text x={node.x} y={node.y + (isRoot ? 8 : 6)} textAnchor="middle"
                fill={isExploded ? (RISK_COLOR[node.risk] || '#425466') : '#425466'}
                fontSize="2.2" fontFamily="system-ui" fontWeight="500"
                style={{ transition: 'fill 0.4s ease' }}
              >
                {node.label}
              </text>
            </g>
          )
        })}
      </svg>

      <button
        onClick={() => setIsExploded(!isExploded)}
        style={{
          position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)',
          background: isExploded ? '#00D4AA' : '#FF5C5C',
          color: '#fff', border: 'none', borderRadius: 24,
          padding: '8px 20px', fontSize: 13, fontWeight: 600,
          cursor: 'pointer', fontFamily: "'DM Sans', system-ui",
          transition: 'all 0.3s ease',
          boxShadow: isExploded ? '0 4px 14px rgba(0,212,170,0.25)' : '0 4px 14px rgba(255,92,92,0.25)',
        }}
      >
        {isExploded ? '↺ Recover with Failsafe' : 'Simulate: Google Bans You'}
      </button>
    </div>
  )
}
