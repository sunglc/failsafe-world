'use client'
import WaitlistForm from './WaitlistForm'
import BlastRadiusDemo from './BlastRadiusDemo'

export default function Hero() {
  return (
    <section style={{
      paddingTop: 140, paddingBottom: 80,
      background: 'linear-gradient(180deg, var(--bg-soft) 0%, var(--bg) 100%)',
    }}>
      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ display: 'flex', gap: 60, alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 460px', minWidth: 320 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(255,92,92,0.08)', borderRadius: 20,
              padding: '6px 14px', marginBottom: 24,
            }}>
              <span style={{
                width: 7, height: 7, borderRadius: '50%', background: 'var(--red)',
                animation: 'pulse 2s infinite',
              }} />
              <span style={{
                fontSize: 12, fontWeight: 600, color: 'var(--red)',
                letterSpacing: '0.5px', textTransform: 'uppercase',
              }}>
                Platform Risk is Real
              </span>
            </div>

            <h1 style={{
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 800, lineHeight: 1.1,
              color: 'var(--primary)', margin: '0 0 20px',
              letterSpacing: '-1.5px',
            }}>
              Your Google account
              <br />gets banned.
              <br /><span style={{ color: 'var(--accent)' }}>What happens next?</span>
            </h1>

            <p style={{
              fontSize: 18, lineHeight: 1.7, color: 'var(--text-soft)',
              margin: '0 0 32px', maxWidth: 480,
            }}>
              Failsafe maps every service tied to your identity, shows you the blast
              radius of a platform ban, and backs up what matters — so no single
              company can shut down your life.
            </p>

            <WaitlistForm />

            <p style={{ marginTop: 14, fontSize: 12, color: 'var(--text-muted)' }}>
              Free risk scan. No credit card required.
            </p>
          </div>

          <div style={{ flex: '1 1 400px', minWidth: 320 }}>
            <div style={{
              background: 'var(--bg-card)',
              borderRadius: 20,
              border: '1px solid var(--border)',
              padding: '32px 24px 16px',
              boxShadow: '0 20px 60px rgba(10, 37, 64, 0.08)',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--primary)' }}>Blast Radius Map</span>
                <span style={{
                  fontSize: 11, fontWeight: 600, color: 'var(--red)',
                  background: 'rgba(255,92,92,0.08)', padding: '4px 10px', borderRadius: 6,
                }}>INTERACTIVE DEMO</span>
              </div>
              <BlastRadiusDemo />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
