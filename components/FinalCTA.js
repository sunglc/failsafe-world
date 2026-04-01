'use client'
import WaitlistForm from './WaitlistForm'

export default function FinalCTA() {
  return (
    <section id="waitlist" style={{ padding: '100px 32px', background: 'var(--bg-soft)' }}>
      <div style={{ maxWidth: 560, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{
          fontSize: 36, fontWeight: 800, color: 'var(--primary)',
          margin: '0 0 14px', letterSpacing: '-0.8px',
        }}>
          Don't wait for the ban.
        </h2>
        <p style={{
          fontSize: 17, color: 'var(--text-soft)', margin: '0 0 32px',
          lineHeight: 1.7,
        }}>
          Join the waitlist and be the first to scan your digital dependencies.
          It takes 2 minutes. The peace of mind lasts forever.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <WaitlistForm />
        </div>
      </div>
    </section>
  )
}
