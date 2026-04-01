'use client'
import { useState, useEffect, useRef } from 'react'

function AnimatedNumber({ target, duration = 1500 }) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0
          const step = target / (duration / 16)
          const timer = setInterval(() => {
            start += step
            if (start >= target) { setValue(target); clearInterval(timer) }
            else setValue(Math.floor(start))
          }, 16)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, duration])

  return <span ref={ref}>{value}%</span>
}

function RiskBar({ label, pct, color }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} style={{ marginBottom: 16 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
        <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)' }}>{label}</span>
        <span style={{ fontSize: 13, fontWeight: 700, color }}>{pct}%</span>
      </div>
      <div style={{ height: 6, borderRadius: 3, background: 'var(--bg-soft)' }}>
        <div style={{
          height: '100%', borderRadius: 3, background: color,
          width: visible ? `${pct}%` : '0%',
          transition: 'width 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
        }} />
      </div>
    </div>
  )
}

export default function RiskScore() {
  return (
    <section style={{ padding: '100px 32px', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1140, margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: 60, alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 400px', minWidth: 300 }}>
            <h2 style={{ fontSize: 36, fontWeight: 800, color: 'var(--primary)', margin: '0 0 16px', letterSpacing: '-0.8px' }}>
              Your risk score,
              <br />quantified
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--text-soft)', margin: '0 0 24px' }}>
              Most founders don't realize how fragile their digital setup is until it's too late.
              Failsafe gives you a concrete number — and a concrete plan to bring it down.
            </p>
            <a href="#waitlist" style={{
              display: 'inline-block', fontSize: 14, fontWeight: 600,
              color: 'var(--accent)',
              borderBottom: '2px solid var(--accent)',
              paddingBottom: 2,
            }}>Get your free risk score →</a>
          </div>

          <div style={{
            flex: '1 1 400px', minWidth: 300,
            background: 'var(--bg-card)', borderRadius: 20,
            border: '1px solid var(--border)', padding: 32,
            boxShadow: '0 20px 60px rgba(10, 37, 64, 0.06)',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 28 }}>
              <div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Platform Dependency Score
                </div>
                <div style={{ fontSize: 48, fontWeight: 800, color: 'var(--red)', lineHeight: 1.1, marginTop: 4 }}>
                  <AnimatedNumber target={78} />
                </div>
              </div>
              <span style={{
                fontSize: 11, fontWeight: 700, color: 'var(--red)',
                background: 'rgba(255,92,92,0.08)', padding: '5px 12px',
                borderRadius: 6, textTransform: 'uppercase', letterSpacing: '0.5px',
              }}>High Risk</span>
            </div>

            <RiskBar label="Google Dependency" pct={73} color="var(--red)" />
            <RiskBar label="GitHub Dependency" pct={45} color="var(--orange)" />
            <RiskBar label="Apple Dependency" pct={22} color="var(--yellow)" />
            <RiskBar label="Backup Coverage" pct={12} color="var(--green)" />

            <div style={{
              marginTop: 20, padding: '14px 18px',
              background: 'var(--bg-soft)', borderRadius: 10,
              fontSize: 13, color: 'var(--text-soft)', lineHeight: 1.6,
            }}>
              ⚡ <strong style={{ color: 'var(--primary)' }}>Top action:</strong> Add email/password login
              to Vercel and Stripe as backup authentication method. This alone drops your score by 15 points.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
