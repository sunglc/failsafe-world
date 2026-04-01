'use client'
import { useState } from 'react'
import WaitlistForm from './WaitlistForm'

const USE_CASES = [
  { id: 'agents', icon: '🤖', label: 'AI Agents', color: '#635BFF' },
  { id: 'founders', icon: '🚀', label: 'Founders', color: '#FF5C5C' },
  { id: 'teams', icon: '👥', label: 'Teams', color: '#FFB347' },
]

const HEADLINES = {
  agents: {
    line1: 'Your agents run on',
    highlight: '50+ credentials.',
    line2: 'We make sure they never break.',
    desc: 'Failsafe monitors every API key, OAuth token, and session your agents depend on. When a credential expires, gets revoked, or a platform goes down — we auto-failover to backup paths in milliseconds. Zero downtime. Zero manual intervention.',
  },
  founders: {
    line1: 'Your startup runs on',
    highlight: 'one Google account.',
    line2: "We make sure that's not a death sentence.",
    desc: 'Failsafe maps every service tied to your identity, scores your platform dependency risk, and continuously backs up your critical data. When a platform bans you — recovery takes minutes, not weeks.',
  },
  teams: {
    line1: 'Your team shares',
    highlight: 'one identity chain.',
    line2: "We make sure it's unbreakable.",
    desc: "One admin account controls your Vercel, Stripe, GitHub, and Slack. If that account gets compromised or banned, your entire team is locked out. Failsafe adds redundancy to your identity layer — so no single point of failure can stop your business.",
  },
}

const CAPABILITIES = {
  agents: [
    { icon: '🔑', text: 'Credential health monitoring across all agents' },
    { icon: '🔀', text: 'Auto-failover to backup auth paths in <200ms' },
    { icon: '📡', text: 'Agent dependency graph visualization' },
    { icon: '🔄', text: 'Zero-downtime credential rotation' },
  ],
  founders: [
    { icon: '🔍', text: 'Scan your OAuth dependencies in 2 minutes' },
    { icon: '📊', text: 'Get a quantified risk score + action plan' },
    { icon: '💾', text: 'Continuous backup to storage you control' },
    { icon: '⚡', text: 'One-click migration when disaster strikes' },
  ],
  teams: [
    { icon: '🛡️', text: 'Multi-member identity redundancy' },
    { icon: '🔔', text: 'Real-time alerts on credential anomalies' },
    { icon: '📋', text: 'Team dependency audit dashboard' },
    { icon: '🔐', text: 'Shared credential vault with failover' },
  ],
}

const BOTTOM_STATS = {
  agents: '→ Your agents stay online even when platforms go down',
  founders: '→ 73% of founders depend on a single identity provider',
  teams: '→ One admin ban = entire team locked out of every tool',
}

export default function Hero() {
  const [activeId, setActiveId] = useState('agents')
  const headline = HEADLINES[activeId]
  const caps = CAPABILITIES[activeId]
  const activeUseCase = USE_CASES.find(u => u.id === activeId)

  return (
    <section style={{
      paddingTop: 130, paddingBottom: 90,
      background: 'linear-gradient(180deg, #0A2540 0%, #0d1f35 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle grid background */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: 'linear-gradient(rgba(99,91,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(99,91,255,0.03) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 32px', position: 'relative' }}>

        {/* Use case tabs */}
        <div style={{
          display: 'flex', gap: 8, marginBottom: 48, justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          {USE_CASES.map(uc => (
            <button
              key={uc.id}
              onClick={() => setActiveId(uc.id)}
              style={{
                background: activeId === uc.id ? uc.color + '20' : 'rgba(255,255,255,0.05)',
                border: '1.5px solid ' + (activeId === uc.id ? uc.color : 'rgba(255,255,255,0.1)'),
                borderRadius: 24,
                padding: '10px 20px',
                cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: 8,
                transition: 'all 0.25s ease',
                fontFamily: 'inherit',
              }}
            >
              <span style={{ fontSize: 16 }}>{uc.icon}</span>
              <span style={{
                fontSize: 14, fontWeight: 600,
                color: activeId === uc.id ? uc.color : 'rgba(255,255,255,0.5)',
              }}>{uc.label}</span>
            </button>
          ))}
        </div>

        {/* Main content */}
        <div style={{ display: 'flex', gap: 60, alignItems: 'center', flexWrap: 'wrap' }}>

          {/* Left - headline */}
          <div style={{ flex: '1 1 500px', minWidth: 320 }}>
            <h1
              key={activeId}
              style={{
                fontSize: 'clamp(32px, 4.5vw, 52px)',
                fontWeight: 800, lineHeight: 1.15,
                color: '#fff', margin: '0 0 24px',
                letterSpacing: '-1.5px',
                animation: 'fadeUp 0.4s ease',
              }}
            >
              {headline.line1}
              <br />
              <span style={{ color: activeUseCase.color }}>{headline.highlight}</span>
              <br />
              <span style={{ fontSize: 'clamp(24px, 3.5vw, 38px)', color: 'rgba(255,255,255,0.85)' }}>
                {headline.line2}
              </span>
            </h1>

            <p
              key={'desc-' + activeId}
              style={{
                fontSize: 16, lineHeight: 1.75,
                color: 'rgba(255,255,255,0.55)',
                margin: '0 0 36px', maxWidth: 520,
                animation: 'fadeUp 0.4s ease 0.1s both',
              }}
            >
              {headline.desc}
            </p>

            <div style={{ animation: 'fadeUp 0.4s ease 0.2s both' }}>
              <WaitlistForm dark />
            </div>

            <p style={{
              marginTop: 14, fontSize: 12,
              color: 'rgba(255,255,255,0.3)',
            }}>
              Free dependency scan · No credit card · Works for humans and agents
            </p>
          </div>

          {/* Right - capability cards */}
          <div style={{ flex: '1 1 400px', minWidth: 300 }}>
            <div style={{
              background: 'rgba(255,255,255,0.03)',
              borderRadius: 20,
              border: '1px solid rgba(255,255,255,0.08)',
              padding: '28px 24px',
            }}>
              <div style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                marginBottom: 24,
              }}>
                <span style={{ fontSize: 14, fontWeight: 700, color: 'rgba(255,255,255,0.8)' }}>
                  What Failsafe does
                </span>
                <span style={{
                  fontSize: 11, fontWeight: 700, color: activeUseCase.color,
                  background: activeUseCase.color + '15',
                  padding: '4px 10px', borderRadius: 6,
                  textTransform: 'uppercase', letterSpacing: '0.5px',
                }}>
                  {activeUseCase.label}
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {caps.map((cap, i) => (
                  <div
                    key={activeId + '-' + i}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 14,
                      padding: '14px 16px',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: 12,
                      animation: 'fadeUp 0.4s ease both',
                      animationDelay: (i * 0.08) + 's',
                    }}
                  >
                    <span style={{ fontSize: 20, minWidth: 28 }}>{cap.icon}</span>
                    <span style={{
                      fontSize: 14, fontWeight: 500,
                      color: 'rgba(255,255,255,0.75)',
                    }}>
                      {cap.text}
                    </span>
                  </div>
                ))}
              </div>

              <div style={{
                marginTop: 20, padding: '14px 16px',
                background: activeUseCase.color + '08',
                border: '1px solid ' + activeUseCase.color + '20',
                borderRadius: 12,
                textAlign: 'center',
              }}>
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>
                  {BOTTOM_STATS[activeId]}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust bar */}
        <div style={{
          marginTop: 64, paddingTop: 32,
          borderTop: '1px solid rgba(255,255,255,0.06)',
          display: 'flex', justifyContent: 'center', gap: 40,
          flexWrap: 'wrap',
        }}>
          {[
            { label: 'Credentials Monitored', value: 'API Keys · OAuth · Sessions' },
            { label: 'Platforms Covered', value: 'Google · GitHub · AWS · Stripe · more' },
            { label: 'Recovery Time', value: 'Minutes, not weeks' },
          ].map((item, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: 12, color: 'rgba(255,255,255,0.3)',
                textTransform: 'uppercase', letterSpacing: '0.5px',
                marginBottom: 6,
              }}>{item.label}</div>
              <div style={{ fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,0.7)' }}>
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
