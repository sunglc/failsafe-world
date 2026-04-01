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
          <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="navBg" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#4B44CC"/>
                <stop offset="100%" stopColor="#00D4AA"/>
              </linearGradient>
              <linearGradient id="navText" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="rgba(255,255,255,0.75)"/>
                <stop offset="100%" stopColor="white"/>
              </linearGradient>
            </defs>
            <rect width="32" height="32" rx="8" fill="url(#navBg)"/>
            <text x="16" y="25" textAnchor="middle" fontFamily="Georgia, 'Times New Roman', serif" fontSize="27" fontWeight="700" fill="url(#navText)">S</text>
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
