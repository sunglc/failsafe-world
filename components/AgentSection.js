'use client'

export default function AgentSection() {
  return (
    <section id="agents" style={{
      padding: '80px 32px',
      background: 'linear-gradient(180deg, #0A2540 0%, #0d1b2a 100%)',
    }}>
      <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{
          fontSize: 32, fontWeight: 800, color: '#fff',
          margin: '0 0 16px', letterSpacing: '-0.8px',
        }}>
          The identity layer your agents are missing
        </h2>
        <p style={{
          fontSize: 16, color: 'rgba(255,255,255,0.55)',
          margin: '0 auto 48px', maxWidth: 560, lineHeight: 1.7,
        }}>
          Failsafe sits between your agents and their identity providers. Primary
          fails? Auto-route to backup. Zero downtime. Zero manual intervention.
        </p>

        {/* Architecture flow */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: 0, flexWrap: 'wrap',
          padding: '36px 28px',
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 16,
        }}>
          {/* Agents */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center', minWidth: 120 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Your Agents</span>
            {['Agent 1', 'Agent 2', 'Agent 3'].map(a => (
              <div key={a} style={{
                padding: '6px 16px', borderRadius: 8,
                background: 'rgba(255,179,71,0.12)', border: '1px solid rgba(255,179,71,0.25)',
                fontSize: 12, fontWeight: 600, color: '#FFB347',
              }}>{a}</div>
            ))}
          </div>

          {/* Arrow */}
          <div style={{ padding: '0 20px', color: 'rgba(255,255,255,0.2)', fontSize: 24 }}>→</div>

          {/* Failsafe */}
          <div style={{
            padding: '20px 28px', borderRadius: 14,
            background: 'rgba(99, 91, 255, 0.12)',
            border: '1.5px solid rgba(99, 91, 255, 0.4)',
            textAlign: 'center', minWidth: 180,
          }}>
            <div style={{ fontSize: 20, fontWeight: 800, color: '#7A73FF', marginBottom: 4 }}>Failsafe</div>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 }}>
              Monitor · Failover · Rotate
            </div>
          </div>

          {/* Arrow */}
          <div style={{ padding: '0 20px', color: 'rgba(255,255,255,0.2)', fontSize: 24 }}>→</div>

          {/* Providers */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center', minWidth: 120 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Providers</span>
            {['Google', 'GitHub', 'OpenAI', 'AWS'].map(p => (
              <div key={p} style={{
                padding: '6px 16px', borderRadius: 8,
                background: 'rgba(0,212,170,0.1)', border: '1px solid rgba(0,212,170,0.2)',
                fontSize: 12, fontWeight: 600, color: '#00D4AA',
              }}>{p}</div>
            ))}
          </div>
        </div>

        {/* Tagline */}
        <p style={{
          marginTop: 24, fontSize: 13,
          color: 'rgba(255,255,255,0.35)',
        }}>
          Like Cloudflare for DNS, but for identity. Route around bans, outages, and revocations.
        </p>
      </div>
    </section>
  )
}
