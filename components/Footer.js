export default function Footer() {
  return (
    <footer style={{
      padding: '40px 32px',
      borderTop: '1px solid var(--border)',
      background: 'var(--bg)',
    }}>
      <div style={{
        maxWidth: 1140, margin: '0 auto',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: 16,
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
        <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>
          Your digital life deserves a backup plan. © 2026
        </span>
      </div>
    </footer>
  )
}
