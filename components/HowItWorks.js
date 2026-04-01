const STEPS = [
  { step: '01', title: 'Scan your digital footprint', desc: 'Answer a guided questionnaire or connect accounts directly. Failsafe maps every OAuth connection, login method, and data dependency.', color: '#635BFF' },
  { step: '02', title: 'See your blast radius', desc: 'An interactive map shows exactly what breaks if each provider cuts you off. Services are color-coded by severity: red (instant death), orange (degraded), green (unaffected).', color: '#FFB347' },
  { step: '03', title: 'Follow your action plan', desc: 'Prioritized steps with tutorials: add backup login methods, create redundant admin accounts, diversify your identity chain.', color: '#00D4AA' },
  { step: '04', title: 'Enable continuous backup', desc: 'Set it and forget it. Failsafe incrementally syncs your critical data to storage you own. When a ban happens, recovery takes minutes.', color: '#635BFF' },
]

export default function HowItWorks() {
  return (
    <section id="how" style={{ padding: '100px 32px', background: 'var(--bg-soft)' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{
          fontSize: 38, fontWeight: 800, color: 'var(--primary)',
          margin: '0 0 60px', letterSpacing: '-1px', textAlign: 'center',
        }}>
          How it works
        </h2>

        {STEPS.map((item, i) => (
          <div key={i} style={{
            display: 'flex', gap: 28, marginBottom: 48, alignItems: 'flex-start',
          }}>
            <div style={{
              minWidth: 52, height: 52, borderRadius: 14,
              background: `${item.color}14`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 18, fontWeight: 800, color: item.color,
            }}>{item.step}</div>
            <div>
              <h3 style={{ margin: '0 0 8px', fontSize: 20, fontWeight: 700, color: 'var(--primary)' }}>
                {item.title}
              </h3>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.7, color: 'var(--text-soft)', maxWidth: 560 }}>
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
