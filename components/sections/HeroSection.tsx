'use client';

export default function HeroSection() {
  return (
    <section id="features" aria-label="Hero" style={{
      minHeight: '85vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '6rem 2rem',
      position: 'relative',
      background: 'radial-gradient(circle at 50% 20%, rgba(255, 200, 1, 0.05) 0%, transparent 50%), var(--oceanic-noir, #172B36)',
      overflow: 'hidden'
    }}>
      {/* Structural Minimalist Grid Pattern Layer */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(rgba(209, 232, 226, 0.04) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '850px', position: 'relative', zIndex: 1 }}>
        {/* Animated Badge Indicator */}
        <div className="animate-1" style={{
          display: 'inline-flex',
          alignItems: 'center',
          background: 'rgba(17, 76, 90, 0.4)',
          border: '1px solid rgba(209, 232, 226, 0.1)',
          borderRadius: '9999px',
          padding: '0.4rem 1.2rem',
          fontSize: '0.75rem',
          color: 'var(--mystic-mint, #D9E8E2)',
          marginBottom: '2rem',
          fontFamily: 'var(--font-mono, monospace)',
          fontWeight: 600,
          letterSpacing: '0.05em',
        }}>
          <span style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: 'var(--forsythia, #FFC801)',
            marginRight: '8px',
            boxShadow: '0 0 8px var(--forsythia)'
          }} />
          SYSTEM STATUS: PUBLIC BETA ACCELERATOR ACTIVE
        </div>

        {/* Hero Main Heading */}
        <h1 className="animate-2" style={{
          fontFamily: 'var(--font-mono, monospace)',
          fontWeight: 700,
          fontSize: 'clamp(2.5rem, 6vw, 4.2rem)',
          lineHeight: 1.1,
          marginBottom: '1.5rem',
          color: 'var(--arctic-powder, #F1F6F4)',
          letterSpacing: '-0.03em',
        }}>
          Automate Data Workflows With <span style={{
            color: 'transparent',
            WebkitTextStroke: '1px var(--arctic-powder, #F1F6F4)',
            backgroundImage: 'linear-gradient(135deg, var(--forsythia) 0%, var(--deep-saffron) 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text'
          }}>AI Precision</span>
        </h1>

        {/* Hero Paragraph Subtitle */}
        <p className="animate-2" style={{
          color: 'var(--mystic-mint, #D9E8E2)',
          fontSize: 'clamp(1rem, 2vw, 1.2rem)',
          lineHeight: 1.6,
          maxWidth: '640px',
          margin: '0 auto 3rem',
          opacity: 0.85,
        }}>
          Connect over 200+ native data tools. Eliminate pipeline latency automatically with machine-learning event loops. Enterprise-grade security out of the box.
        </p>

        {/* Modern Interactive Actions Row */}
        <div className="animate-3" style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}>
          <a href="#pricing" style={{
            background: 'var(--forsythia, #FFC801)',
            color: 'var(--oceanic-noir, #172B36)',
            padding: '0.9rem 2.2rem',
            borderRadius: '0.5rem',
            fontWeight: 600,
            fontSize: '0.95rem',
            textDecoration: 'none',
            fontFamily: 'var(--font-mono, monospace)',
            boxShadow: '0 4px 20px rgba(255, 200, 1, 0.15)',
            transition: 'transform 150ms ease-out, background 150ms ease-out',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--deep-saffron, #FF9932)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'var(--forsythia, #FFC801)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            Initialize Matrix
          </a>

          <a href="#features" style={{
            background: 'rgba(17, 76, 90, 0.2)',
            border: '1px solid rgba(209, 232, 226, 0.15)',
            color: 'var(--arctic-powder, #F1F6F4)',
            padding: '0.9rem 2.2rem',
            borderRadius: '0.5rem',
            fontWeight: 600,
            fontSize: '0.95rem',
            textDecoration: 'none',
            transition: 'all 150ms ease-out',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--forsythia, #FFC801)'; e.currentTarget.style.background = 'rgba(17, 76, 90, 0.4)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(209, 232, 226, 0.15)'; e.currentTarget.style.background = 'rgba(17, 76, 90, 0.2)'; }}
          >
            Documentation →
          </a>
        </div>

        {/* Trust Stats Row */}
        <div className="animate-3" style={{
          display: 'flex',
          gap: '4rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginTop: '5rem',
          paddingTop: '3rem',
          borderTop: '1px solid rgba(209, 232, 226, 0.06)',
        }}>
          {[
            ['200+', 'Connectors'],
            ['99.99%', 'Uptime SLA'],
            ['<10ms', 'Core Latency'],
          ].map(([num, label]) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: 'var(--font-mono, monospace)',
                fontSize: '1.75rem',
                fontWeight: 700,
                color: 'var(--forsythia, #FFC801)',
              }}>{num}</div>
              <div style={{
                fontSize: '0.75rem',
                color: 'var(--mystic-mint, #D9E8E2)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginTop: '0.25rem',
                opacity: 0.7
              }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}