'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(23, 43, 54, 0.8)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(209, 232, 226, 0.08)',
    }}>
      <nav style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0.85rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        
        {/* Brand Logo */}
        <Link 
          href="/" 
          aria-label="SpeedRun AI home" 
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}
        >
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <rect width="32" height="32" rx="8" fill="var(--forsythia, #FFC801)"/>
            <path d="M8 16h4l3-8 4 16 3-8h4" stroke="var(--oceanic-noir, #172B36)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span style={{
            fontFamily: 'var(--font-mono, monospace)',
            fontWeight: 700,
            fontSize: '1.1rem',
            color: 'var(--arctic-powder, #F1F6F4)',
            letterSpacing: '-0.02em'
          }}>
            SpeedRun<span style={{ color: 'var(--forsythia, #FFC801)' }}>AI</span>
          </span>
        </Link>

        {/* Navigation Links */}
        <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
          {['Features', 'Pricing', 'Docs', 'Blog'].map(item => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase()}`} 
                style={{
                  color: 'var(--mystic-mint, #D9E8E2)',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  transition: 'color 150ms ease-out',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--forsythia, #FFC801)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--mystic-mint, #D9E8E2)')}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Premium CTA Button */}
        <a 
          href="#pricing"
          style={{
            background: 'rgba(255, 200, 1, 0.1)',
            border: '1px solid rgba(255, 200, 1, 0.3)',
            color: 'var(--forsythia, #FFC801)',
            padding: '0.5rem 1rem',
            borderRadius: '9999px',
            fontSize: '0.8rem',
            fontFamily: 'var(--font-mono, monospace)',
            fontWeight: 600,
            textDecoration: 'none',
            transition: 'all 200ms ease-out',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'var(--forsythia, #FFC801)';
            e.currentTarget.style.color = 'var(--oceanic-noir, #172B36)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'rgba(255, 200, 1, 0.1)';
            e.currentTarget.style.color = 'var(--forsythia, #FFC801)';
          }}
        >
          Deploy Console
        </a>
      </nav>
    </header>
  );
}