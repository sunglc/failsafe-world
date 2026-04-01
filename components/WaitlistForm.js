'use client'
import { useState } from 'react'

export default function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async () => {
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email')
      return
    }
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        const data = await res.json()
        setError(data.error || 'Something went wrong')
      }
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div style={{
        background: 'rgba(0, 212, 170, 0.08)',
        border: '1px solid rgba(0, 212, 170, 0.3)',
        borderRadius: 12, padding: '20px 28px',
        display: 'flex', alignItems: 'center', gap: 12,
      }}>
        <span style={{ fontSize: 22 }}>✓</span>
        <div>
          <p style={{ margin: 0, fontWeight: 600, color: 'var(--green-dark)', fontSize: 15 }}>
            You're on the list!
          </p>
          <p style={{ margin: '4px 0 0', color: 'var(--text-soft)', fontSize: 13 }}>
            We'll notify you when Failsafe launches.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div style={{ display: 'flex', gap: 10, maxWidth: 460 }}>
        <input
          type="email" value={email}
          onChange={(e) => { setEmail(e.target.value); setError('') }}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
          placeholder="you@email.com"
          style={{
            flex: 1, padding: '14px 18px',
            border: '1px solid var(--border)',
            borderRadius: 10, fontSize: 15,
            outline: 'none', color: 'var(--text)',
            transition: 'border-color 0.2s',
            fontFamily: 'inherit',
          }}
          onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
          onBlur={(e) => e.target.style.borderColor = ''}
        />
        <button
          onClick={handleSubmit}
          disabled={loading}
          style={{
            background: loading ? 'var(--text-muted)' : 'var(--accent)',
            color: '#fff', border: 'none',
            borderRadius: 10, padding: '14px 26px',
            fontSize: 15, fontWeight: 600,
            cursor: loading ? 'wait' : 'pointer',
            fontFamily: 'inherit',
            transition: 'all 0.2s',
            boxShadow: '0 4px 14px rgba(99, 91, 255, 0.25)',
            whiteSpace: 'nowrap',
          }}
        >
          {loading ? 'Joining...' : 'Join Waitlist →'}
        </button>
      </div>
      {error && (
        <p style={{ marginTop: 8, fontSize: 13, color: 'var(--red)' }}>{error}</p>
      )}
    </div>
  )
}
