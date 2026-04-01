'use client'
import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(255,255,255,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      transition: 'all 0.3s ease',
      padding: '0 32px',
    }}>
      <div style={{
        maxWidth: 1140, margin: '0 auto',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        height: 64,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="navGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#635BFF"/>
                <stop offset="100%" stopColor="#00D4AA"/>
              </linearGradient>
            </defs>
            <path d="M16 1.5L27.5 5.8V16.5C27.5 23.2 22.4 28.6 16 30.5C9.6 28.6 4.5 23.2 4.5 16.5V5.8L16 1.5Z" fill="url(#navGrad)"/>
            <rect x="11" y="9" width="2.5" height="14" rx="0.5" fill="white"/>
            <rect x="11" y="9" width="9.5" height="2.5" rx="0.5" fill="white"/>
            <rect x="11" y="14.5" width="7" height="2.5" rx="0.5" fill="white"/>
          </svg>
          <span style={{ fontSize: 18, fontWeight: 700, color: 'var(--primary)', letterSpacing: '-0.3px' }}>
            Failsafe
          </span>
        </div>
        <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
          <a href="#features" style={{ fontSize: 14, color: 'var(--text-soft)', fontWeight: 500 }}>Features</a>
          <a href="#agents" style={{ fontSize: 14, color: 'var(--text-soft)', fontWeight: 500 }}>For Agents</a>
          <a href="#how" style={{ fontSize: 14, color: 'var(--text-soft)', fontWeight: 500 }}>How It Works</a>
          <a href="#waitlist" style={{
            fontSize: 13, fontWeight: 600, color: '#fff',
            background: 'var(--accent)', padding: '8px 18px',
            borderRadius: 8,
          }}>Get Early Access</a>
        </div>
      </div>
    </nav>
  )
}
