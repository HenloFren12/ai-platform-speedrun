'use client';
import { useState, useEffect, useRef } from 'react';

const FEATURES = [
  {
    title: 'Neural Data Sync',
    body: 'Real-time bidirectional sync across 200+ platforms with zero data loss guarantee.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="12" stroke="#FFC801" strokeWidth="2"/>
        <path d="M9 14h10M14 9l5 5-5 5" stroke="#FFC801" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    span: 2,
  },
  {
    title: 'Predictive Flows',
    body: 'AI triggers automation before events occur using pattern recognition.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M4 20l6-8 4 4 4-6 6 10" stroke="#FFC801" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    span: 1,
  },
  {
    title: 'Zero-Latency API',
    body: 'Sub-10ms response times with globally distributed edge endpoints.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 4v8l5 3" stroke="#FFC801" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="14" cy="14" r="10" stroke="#FFC801" strokeWidth="2"/>
      </svg>
    ),
    span: 1,
  },
  {
    title: 'Audit Shield',
    body: 'Complete SOC2 + GDPR audit trail on every automated action.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 4l8 4v8c0 5-8 8-8 8S6 21 6 16V8l8-4z" stroke="#FFC801" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M10 14l3 3 5-5" stroke="#FFC801" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    span: 2,
  },
];

const BREAKPOINT = 768;

export default function FeatureSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [isMobile, setIsMobile] = useState(false);
  const hoveredRef = useRef<number | null>(null);

  useEffect(() => {
    const check = () => {
      const mobile = window.innerWidth < BREAKPOINT;
      setIsMobile(mobile);
    };
    check();

    const onResize = () => {
      const mobile = window.innerWidth < BREAKPOINT;
      if (mobile && !isMobile) {
        // Context lock: transfer hovered bento index to accordion
        if (hoveredRef.current !== null) {
          setActiveIndex(hoveredRef.current);
        }
      }
      setIsMobile(mobile);
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [isMobile]);

  return (
    <section id="features" aria-label="Platform features" style={{
      padding: '6rem 2rem',
      background: 'linear-gradient(180deg, var(--oceanic-noir) 0%, var(--nocturnal) 100%)',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <h2 style={{
          fontFamily: 'var(--font-mono)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
          textAlign: 'center', marginBottom: '1rem', color: '#F1F6F4',
        }}>
          Built for Automation <span style={{ color: '#FFC801' }}>at Scale</span>
        </h2>
        <p style={{ textAlign: 'center', color: '#D9E8E2', marginBottom: '3rem', fontSize: '1.05rem' }}>
          Everything your team needs to automate, monitor, and scale intelligent workflows.
        </p>

        {/* ── DESKTOP: BENTO ── */}
        {!isMobile && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.25rem',
          }} role="list">
            {FEATURES.map((f, i) => (
              <div
                key={f.title}
                role="listitem"
                tabIndex={0}
                aria-label={f.title}
                onMouseEnter={() => { hoveredRef.current = i; setActiveIndex(i); }}
                onMouseLeave={() => { hoveredRef.current = null; setActiveIndex(null); }}
                onFocus={() => { hoveredRef.current = i; setActiveIndex(i); }}
                onBlur={() => { hoveredRef.current = null; setActiveIndex(null); }}
                style={{
                  gridColumn: `span ${f.span}`,
                  padding: '2rem',
                  borderRadius: '1rem',
                  background: activeIndex === i
                    ? 'rgba(255,200,1,0.08)'
                    : 'rgba(209,232,226,0.04)',
                  border: activeIndex === i
                    ? '1px solid rgba(255,200,1,0.4)'
                    : '1px solid rgba(209,232,226,0.1)',
                  cursor: 'pointer',
                  transition: 'background 200ms ease-out, border-color 200ms ease-out, transform 200ms ease-out',
                  transform: activeIndex === i ? 'translateY(-4px)' : 'translateY(0)',
                }}
              >
                <div style={{ marginBottom: '1rem' }}>{f.icon}</div>
                <h3 style={{
                  fontFamily: 'var(--font-mono)', fontSize: '1.1rem',
                  color: '#F1F6F4', marginBottom: '0.6rem',
                }}>{f.title}</h3>
                <p style={{ color: '#D9E8E2', fontSize: '0.9rem', lineHeight: 1.6 }}>{f.body}</p>
              </div>
            ))}
          </div>
        )}

        {/* ── MOBILE: ACCORDION ── */}
        {isMobile && (
          <div role="list" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {FEATURES.map((f, i) => {
              const isOpen = activeIndex === i;
              return (
                <div key={f.title} role="listitem" style={{
                  border: isOpen ? '1px solid rgba(255,200,1,0.4)' : '1px solid rgba(209,232,226,0.1)',
                  borderRadius: '0.75rem',
                  overflow: 'hidden',
                  transition: 'border-color 200ms ease-out',
                }}>
                  <h3 style={{ margin: 0 }}>
                    <button
                      aria-expanded={isOpen}
                      aria-controls={`panel-${i}`}
                      id={`header-${i}`}
                      onClick={() => setActiveIndex(isOpen ? null : i)}
                      style={{
                        width: '100%', display: 'flex', alignItems: 'center',
                        justifyContent: 'space-between', padding: '1.1rem 1.25rem',
                        background: isOpen ? 'rgba(255,200,1,0.06)' : 'rgba(209,232,226,0.03)',
                        border: 'none', cursor: 'pointer', color: '#F1F6F4',
                        fontFamily: 'var(--font-mono)', fontSize: '0.95rem',
                        transition: 'background 200ms ease-out',
                        textAlign: 'left',
                      }}
                    >
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        {f.icon}{f.title}
                      </span>
                      <span style={{
                        color: '#FFC801', fontSize: '1.2rem',
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 300ms ease-in-out',
                        display: 'inline-block',
                      }}>▾</span>
                    </button>
                  </h3>
                  <div
                    id={`panel-${i}`}
                    role="region"
                    aria-labelledby={`header-${i}`}
                    style={{
                      maxHeight: isOpen ? '200px' : '0px',
                      overflow: 'hidden',
                      transition: 'max-height 300ms ease-in-out',
                    }}
                  >
                    <p style={{
                      padding: '0 1.25rem 1.25rem',
                      color: '#D9E8E2', fontSize: '0.9rem', lineHeight: 1.6,
                    }}>{f.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}