export default function SocialProof() {
  const stats = [
    { num: '39.2M', label: 'Google accounts suspended in 2024 alone' },
    { num: '73%', label: 'of founders rely on a single identity provider' },
    { num: '~50', label: 'credentials per AI agent on average' },
  ]

  return (
    <section style={{ background: 'var(--bg-soft)', padding: '28px 32px' }}>
      <div style={{
        maxWidth: 1140, margin: '0 auto',
        display: 'flex', justifyContent: 'center', gap: 48, flexWrap: 'wrap',
        alignItems: 'center',
      }}>
        {stats.map((stat, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 28, fontWeight: 800, color: 'var(--accent)' }}>
              {stat.num}
            </div>
            <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 4 }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
