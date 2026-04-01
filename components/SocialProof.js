export default function SocialProof() {
  const stats = [
    { num: '73%', label: 'of founders rely on a single identity provider' },
    { num: '4.2M', label: 'Google accounts suspended in 2025' },
    { num: '~18', label: 'average services tied to one account' },
  ]

  return (
    <section style={{ background: 'var(--primary)', padding: '28px 32px' }}>
      <div style={{
        maxWidth: 1140, margin: '0 auto',
        display: 'flex', justifyContent: 'center', gap: 48, flexWrap: 'wrap',
        alignItems: 'center',
      }}>
        {stats.map((stat, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 28, fontWeight: 800, color: 'var(--green)' }}>
              {stat.num}
            </div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', marginTop: 4 }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
