'use client'
import { useState, useEffect, useRef } from 'react'

function FeatureCard({ icon, title, desc, index }) {
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
      transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.12}s`,
    }}>
      <div style={{
        width: 48, height: 48, borderRadius: 12,
        background: 'var(--accent-glow)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 22, marginBottom: 20,
      }}>{icon}</div>
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
  { icon: '🔍', title: 'Dependency Scanner', desc: 'Connect your accounts and instantly see every service chained to each identity. Visualize the cascade — what breaks if Google, GitHub, or Apple locks you out.' },
  { icon: '📊', title: 'Risk Score & Action Plan', desc: 'Get a quantified risk score with prioritized steps to reduce it. "Do these 5 things to cut your blast radius by 40%." Each recommendation is one concrete action.' },
  { icon: '🔄', title: 'Continuous Backup', desc: 'Incremental sync of emails, contacts, documents, and configs to storage you control — S3, R2, or local NAS. Not a dead snapshot; a live safety net.' },
  { icon: '🔔', title: 'Risk Monitoring', desc: 'Monthly reports track new OAuth connections, expiring backup tokens, and rising dependency scores. Know when you\'re drifting back into danger.' },
  { icon: '⚡', title: 'One-Click Migration', desc: 'When disaster strikes, restore your email to ProtonMail, docs to Notion, and identity links to backup providers. Minutes, not days.' },
  { icon: '🔐', title: 'Self-Sovereign Storage', desc: 'Your backups live where you choose. We never hold your data hostage — that would defeat the entire point.' },
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
            Two layers of protection
          </h2>
          <p style={{ fontSize: 17, color: 'var(--text-soft)', maxWidth: 520, margin: '0 auto' }}>
            Know your risk. Then eliminate it.
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
