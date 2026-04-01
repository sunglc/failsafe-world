export default function OriginStory() {
  return (
    <section style={{
      padding: '80px 32px',
      background: 'linear-gradient(135deg, var(--primary) 0%, #1a3a5c 100%)',
    }}>
      <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ fontSize: 40, marginBottom: 20, opacity: 0.9 }}>💬</div>
        <p style={{
          fontSize: 20, lineHeight: 1.8, color: 'rgba(255,255,255,0.85)',
          fontStyle: 'italic', margin: '0 0 24px',
          fontFamily: "'DM Serif Display', serif",
        }}>
          "My Google account got banned overnight. Claude, Vercel, Stripe
          dashboard — everything went dark. My entire startup was paralyzed.
          That's why I built Failsafe."
        </p>
        <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>
          — Cliff, Founder
        </div>
      </div>
    </section>
  )
}
