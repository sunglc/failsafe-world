'use client'
import { useState } from 'react'
import WaitlistForm from './WaitlistForm'

const AUDIENCES = [
  {
    id: 'agents',
    icon: '🤖',
    label: 'AI Agents',
    headline: <>Your agents run on<br /><span style={{ color: 'var(--accent)' }}>50+ credentials.</span><br />We make sure they never break.</>,
    desc: 'Failsafe monitors every API key, OAuth token, and session your agents depend on. When a credential expires, gets revoked, or a platform goes down — we auto-failover to backup paths in milliseconds. Zero downtime. Zero manual intervention.',
    features: [
      { icon: '🔑', text: 'Credential health monitoring across all agents' },
      { icon: '🔀', text: 'Auto-failover to backup auth paths in <200ms' },
      { icon: '📡', text: 'Agent dependency graph visualization' },
      { icon: '🔄', text: 'Zero-downtime credential rotation' },
    ],
    tagline: 'Your agents stay online even when platforms go down',
    badge: 'AI AGENTS',
  },
  {
    id: 'founders',
    icon: '🚀',
    label: 'Founders',
    headline: <>Your startup runs on<br /><span style={{ color: 'var(--accent)' }}>one Google account.</span><br />What if it disappears tomorrow?</>,
    desc: 'Failsafe maps every service tied to your identity, quantifies your platform dependency risk, and continuously backs up what matters. When a ban hits, recovery takes minutes — not weeks of scrambling.',
    features: [
      { icon: '💥', text: 'Blast radius map for every identity provider' },
      { icon: '📊', text: 'Platform dependency risk score + action plan' },
      { icon: '🔐', text: 'Continuous backup to storage you control' },
      { icon: '⚡', text: 'One-click migration when disaster strikes' },
    ],
    tagline: 'No single platform can shut down your business',
    badge: 'FOUNDERS',
  },
  {
    id: 'indie',
    icon: '👨‍💻',
    label: 'Indie Devs',
    headline: <>You build alone.<br /><span style={{ color: 'var(--accent)' }}>You can't afford downtime.</span><br />We've got your back.</>,
    desc: 'No IT department. No backup admin. Just you and your stack. Failsafe protects indie developers by scanning your OAuth chains, backing up critical data, and making sure one platform ban doesn\'t erase years of work.',
    features: [
      { icon: '🔍', text: 'Scan every OAuth connection in 2 minutes' },
      { icon: '🛡️', text: 'Automatic backup of code, docs, and configs' },
      { icon: '🔔', text: 'Alerts when tokens expire or risk score rises' },
      { icon: '💾', text: 'Self-sovereign storage — your data, your servers' },
    ],
    tagline: 'Ship with confidence knowing your stack is protected',
    badge: 'INDIE DEVS',
  },
  {
    id: 'teams',
    icon: '👥',
    label: 'Teams',
    headline: <>Your team shares<br /><span style={{ color: 'var(--accent)' }}>one set of credentials.</span><br />That's a single point of failure.</>,
    desc: 'Small teams share OAuth logins, API keys, and admin accounts across members. If the wrong person\'s account gets banned, the whole team loses access. Failsafe maps team-wide dependencies and ensures redundancy across every critical service.',
    features: [
      { icon: '👤', text: 'Multi-member dependency mapping' },
      { icon: '🔑', text: 'Shared credential health dashboard' },
      { icon: '🚨', text: 'Instant alerts when team access is at risk' },
      { icon: '🔄', text: 'Seamless ownership transfer on account loss' },
    ],
    tagline: 'Keep your team operational no matter what happens',
    badge: 'TEAMS',
  },
]

export default function Hero() {
  const [activeId, setActiveId] = useState('agents')
  const active = AUDIENCES.find(a => a.id === activeId)

  return (
    <section style={{
      paddingTop: 140, paddingBottom: 80,
      background: 'linear-gradient(180deg, var(--bg-soft) 0%, var(--bg) 100%)',
    }}>
      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 32px' }}>

        {/* Audience tabs */}
        <div style={{
          display: 'flex', justifyContent: 'center', gap: 10,
          marginBottom: 48, flexWrap: 'wrap',
        }}>
          {AUDIENCES.map(a => (
            <button
              key={a.id}
              onClick={() => setActiveId(a.id)}
              style={{
                background: activeId === a.id ? 'var(--accent)' : 'transparent',
                color: activeId === a.id ? '#fff' : 'var(--text-soft)',
                border: `1.5px solid ${activeId === a.id ? 'var(--accent)' : 'var(--border)'}`,
                borderRadius: 24, padding: '10px 22px',
                cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8,
                fontSize: 14, fontWeight: 600,
                transition: 'all 0.25s ease',
                fontFamily: 'inherit',
              }}
            >
              <span style={{ fontSize: 16 }}>{a.icon}</span>
              {a.label}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 48, alignItems: 'flex-start', flexWrap: 'wrap' }}>

          {/* Left */}
          <div style={{ flex: '1 1 480px', minWidth: 320 }}>
            <h1
              key={activeId}
              style={{
                fontSize: 'clamp(32px, 4.5vw, 48px)',
                fontWeight: 800, lineHeight: 1.15,
                color: 'var(--primary)', margin: '0 0 24px',
                letterSpacing: '-1.2px',
                animation: 'fadeUp 0.4s ease both',
              }}
            >
              {active.headline}
            </h1>

            <p
              key={`desc-${activeId}`}
              style={{
                fontSize: 16, lineHeight: 1.75, color: 'var(--text-soft)',
                margin: '0 0 32px', maxWidth: 520,
                animation: 'fadeUp 0.4s ease 0.1s both',
              }}
            >
              {active.desc}
            </p>

            <WaitlistForm />

            <p style={{ marginTop: 14, fontSize: 12, color: 'var(--text-muted)' }}>
              Free dependency scan · No credit card · Works for humans and agents
            </p>
          </div>

          {/* Right — feature card */}
          <div
            key={`card-${activeId}`}
            style={{
              flex: '1 1 380px', minWidth: 300,
              background: 'var(--bg-card)',
              borderRadius: 20,
              border: '1px solid var(--border)',
              padding: '28px 24px',
              boxShadow: '0 20px 60px rgba(10, 37, 64, 0.08)',
              animation: 'fadeUp 0.4s ease 0.15s both',
            }}
          >
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              marginBottom: 20,
            }}>
              <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--primary)' }}>
                What Failsafe does
              </span>
              <span style={{
                fontSize: 10, fontWeight: 700, color: 'var(--accent)',
                background: 'rgba(99, 91, 255, 0.08)',
                padding: '4px 10px', borderRadius: 6,
                textTransform: 'uppercase', letterSpacing: '0.5px',
              }}>{active.badge}</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {active.features.map((f, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 14,
                    padding: '14px 16px',
                    background: 'var(--bg-soft)',
                    borderRadius: 12,
                    animation: 'fadeUp 0.35s ease both',
                    animationDelay: `${0.2 + i * 0.08}s`,
                  }}
                >
                  <span style={{ fontSize: 18 }}>{f.icon}</span>
                  <span style={{ fontSize: 14, fontWeight: 500, color: 'var(--text)', lineHeight: 1.4 }}>
                    {f.text}
                  </span>
                </div>
              ))}
            </div>

            <div style={{
              marginTop: 16, padding: '12px 16px',
              background: 'rgba(0, 212, 170, 0.06)',
              border: '1px solid rgba(0, 212, 170, 0.15)',
              borderRadius: 10,
              fontSize: 13, fontWeight: 600, color: 'var(--green-dark)',
              display: 'flex', alignItems: 'center', gap: 8,
            }}>
              <span>→</span>
              {active.tagline}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
