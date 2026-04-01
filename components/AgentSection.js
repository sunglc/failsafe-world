'use client'
import { useState, useEffect, useRef } from 'react'

function AgentFeature({ icon, title, desc, index }) {
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
      display: 'flex', gap: 20, alignItems: 'flex-start',
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
      transition: `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s`,
    }}>
      <div style={{
        minWidth: 44, height: 44, borderRadius: 10,
        background: 'rgba(99, 91, 255, 0.1)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 20,
      }}>{icon}</div>
      <div>
        <h4 style={{ margin: '0 0 6px', fontSize: 16, fontWeight: 700, color: '#fff' }}>
          {title}
        </h4>
        <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,0.6)' }}>
          {desc}
        </p>
      </div>
    </div>
  )
}

export default function AgentSection() {
  return (
    <section id="agents" style={{
      padding: '100px 32px',
      background: 'linear-gradient(180deg, #0A2540 0%, #0d1b2a 100%)',
    }}>
      <div style={{ maxWidth: 1140, margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: 60, alignItems: 'center', flexWrap: 'wrap' }}>

          {/* Left - narrative */}
          <div style={{ flex: '1 1 460px', minWidth: 300 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(99, 91, 255, 0.15)', borderRadius: 20,
              padding: '6px 14px', marginBottom: 24,
            }}>
              <span style={{
                fontSize: 12, fontWeight: 600, color: '#7A73FF',
                letterSpacing: '0.5px', textTransform: 'uppercase',
              }}>
                Coming Soon
              </span>
            </div>

            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 800, lineHeight: 1.15,
              color: '#fff', margin: '0 0 20px',
              letterSpacing: '-1px',
            }}>
              Built for the
              <br /><span style={{ color: '#7A73FF' }}>Agent Economy</span>
            </h2>

            <p style={{
              fontSize: 16, lineHeight: 1.7, color: 'rgba(255,255,255,0.6)',
              margin: '0 0 16px', maxWidth: 480,
            }}>
              Humans lose access to 17 services when a platform bans them.
              An AI agent running 50+ automated workflows with dozens of API keys
              and OAuth tokens? The blast radius is catastrophic.
            </p>

            <p style={{
              fontSize: 16, lineHeight: 1.7, color: 'rgba(255,255,255,0.6)',
              margin: '0 0 36px', maxWidth: 480,
            }}>
              Failsafe for Agents monitors every credential your agents depend on,
              detects failures before they cascade, and routes to backup
              authentication paths automatically. Your agents never go dark.
            </p>

            <a href="#waitlist" style={{
              display: 'inline-block',
              background: '#635BFF', color: '#fff',
              padding: '12px 24px', borderRadius: 10,
              fontSize: 14, fontWeight: 600,
              textDecoration: 'none',
              boxShadow: '0 4px 14px rgba(99, 91, 255, 0.3)',
              transition: 'all 0.2s',
            }}>
              Get Early Access for Agents →
            </a>
          </div>

          {/* Right - feature list */}
          <div style={{ flex: '1 1 400px', minWidth: 300, display: 'flex', flexDirection: 'column', gap: 28 }}>
            <AgentFeature
              index={0}
              icon="🔑"
              title="Credential Health Monitoring"
              desc="Real-time monitoring of every API key, OAuth token, and session across all your agents. Detect expiration, revocation, and anomalies before your workflows break."
            />
            <AgentFeature
              index={1}
              icon="🔀"
              title="Automatic Failover Routing"
              desc="When a primary authentication path fails, Failsafe routes to a backup credential in milliseconds. Your agent never sees the outage."
            />
            <AgentFeature
              index={2}
              icon="📡"
              title="Agent Dependency Graph"
              desc="Visualize which agents depend on which credentials, and which credentials depend on which identity providers. See the full blast radius of any single failure."
            />
            <AgentFeature
              index={3}
              icon="🛡️"
              title="Zero-Downtime Credential Rotation"
              desc="Rotate API keys and tokens without stopping your agents. Failsafe handles the handoff, so your workflows keep running during rotation."
            />
          </div>
        </div>

        {/* Architecture diagram - text version */}
        <div style={{
          marginTop: 80, padding: '32px 36px',
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 16,
        }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.4)', marginBottom: 20, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Architecture
          </div>
          <div style={{
            fontFamily: "'DM Sans', monospace", fontSize: 14,
            color: 'rgba(255,255,255,0.7)', lineHeight: 2.2,
            textAlign: 'center',
          }}>
            <span style={{ color: '#FFB347' }}>Your Agents</span>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}> → </span>
            <span style={{
              color: '#7A73FF', fontWeight: 700,
              padding: '4px 16px',
              border: '1px solid rgba(99, 91, 255, 0.4)',
              borderRadius: 8,
            }}>Failsafe Identity Layer</span>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}> → </span>
            <span style={{ color: '#00D4AA' }}>Google</span>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}> | </span>
            <span style={{ color: '#00D4AA' }}>GitHub</span>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}> | </span>
            <span style={{ color: '#00D4AA' }}>OpenAI</span>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}> | </span>
            <span style={{ color: '#00D4AA' }}>Stripe</span>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}> | </span>
            <span style={{ color: '#00D4AA' }}>AWS</span>

            <br />

            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>
              Primary fails? Failsafe auto-routes to backup. Zero downtime. Zero manual intervention.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
