'use client'

export default function Footer() {
  const socials = [
    { label: 'Twitter', href: 'https://x.com/climber_sun', icon: '𝕏' },
    { label: 'GitHub', href: 'https://github.com/sunglc', icon: 'GH' },
    { label: 'Telegram', href: 'https://t.me/qxq100', icon: 'TG' },
    { label: 'Email', href: 'mailto:climberglc@gmail.com', icon: '✉' },
  ]

  return (
    <footer style={{
      padding: '48px 32px 40px',
      borderTop: '1px solid var(--border)',
      background: 'var(--bg)',
    }}>
      <div style={{
        maxWidth: 1140, margin: '0 auto',
      }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: 24, marginBottom: 24,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{
              width: 24, height: 24, borderRadius: 6,
              background: 'linear-gradient(135deg, var(--accent), var(--green))',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff', fontSize: 11, fontWeight: 800,
            }}>F</div>
            <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-muted)' }}>
              Failsafe
            </span>
          </div>

          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.label}
                style={{
                  width: 36, height: 36, borderRadius: 8,
                  border: '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 13, fontWeight: 700,
                  color: 'var(--text-soft)',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = 'var(--accent)'
                  e.target.style.color = 'var(--accent)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = ''
                  e.target.style.color = 'var(--text-soft)'
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: 12,
          paddingTop: 20, borderTop: '1px solid var(--border)',
        }}>
          <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>
            Your digital life deserves a backup plan. © 2026
          </span>
          <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>
            Built by <a href="https://x.com/climber_sun" target="_blank" rel="noopener noreferrer"
              style={{ color: 'var(--accent)', textDecoration: 'none' }}>Cliff</a>
          </span>
        </div>
      </div>
    </footer>
  )
}
