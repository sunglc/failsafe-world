'use client'
import { useState, useEffect, useRef } from 'react'

function FeatureCard({ icon, title, desc, index, accent }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} style={{
      background: 'var(--bg-card)',
      border: '1px solid var(--border)',
      borderRadius: 16, padding: '36px 28px',
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
      transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s`,
    }}>
      <div style={{
        width: 48, height: 48, borderRadius: 12,
        background: accent ? 'rgba(99, 91, 255, 0.1)' : 'rgba(0, 212, 170, 0.1)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 22, marginBottom: 20,
      }}>{icon}</div>
      {accent && (
        <span style={{
          display: 'inline-block', fontSize: 10, fontWeight: 700,
          color: 'var(--accent)', background: 'rgba(99, 91, 255, 0.08)',
          padding: '3px 8px', borderRadius: 4, marginBottom: 10,
          textTransform: 'uppercase', letterSpacing: '0.5px',
        }}>Agents</span>
      )}
      <h3 style={{ margin: '0 0 10px', fontSize: 19, fontWeight: 700, color: 'var(--primary)' }}>
        {title}
      </h3>
      <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: 'var(--text-soft)' }}>
        {desc}
      </p>
    </div>
  )
}

const FEATURES = [
  { icon: '🔑', title: 'Credential Health Monitoring', desc: 'Real-time monitoring of every API key, OAuth token, and session across all your agents. Detect expiration, revocation, and anomalies before your workflows break.', accent: true },
  { icon: '🔀', title: 'Automatic Failover Routing', desc: 'When a primary auth path fails, Failsafe routes to a backup credential in milliseconds. Your agent never sees the outage. Zero downtime, zero manual intervention.', accent: true },
  { icon: '🔄', title: 'Zero-Downtime Credential Rotation', desc: 'Rotate API keys and tokens without stopping your agents. Failsafe handles the handoff seamlessly so your workflows keep running during rotation.', accent: true },
  { icon: '🔍', title: 'Dependency Scanner', desc: 'Map every service chained to each identity — human or agent. Visualize the cascade: what breaks if Google, GitHub, or any provider goes down.', accent: false },
  { icon: '📊', title: 'Risk Score & Action Plan', desc: 'Get a quantified risk score with prioritized steps. "Do these 5 things to cut your blast radius by 40%." Each recommendation is one concrete action.', accent: false },
  { icon: '🔐', title: 'Continuous Backup', desc: 'Incremental sync of emails, contacts, documents, and configs to storage you control — S3, R2, or local NAS. Not a dead snapshot; a live safety net.', accent: false },
]

export default function Features() {
  return (
    <section id="features" style={{ padding: '100px 32px', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1140, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <h2 style={{
            fontSize: 38, fontWeight: 800, color: 'var(--primary)',
            margin: '0 0 14px', letterSpacing: '-1px',
          }}>
            Resilience for agents and humans
          </h2>
          <p style={{ fontSize: 17, color: 'var(--text-soft)', maxWidth: 560, margin: '0 auto' }}>
            Monitor credentials. Map dependencies. Auto-recover from failures.
            Whether you're running 50 agents or managing one Google account.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 20,
        }}>
          {FEATURES.map((f, i) => <FeatureCard key={i} {...f} index={i} />)}
        </div>
      </div>
    </section>
  )
}
