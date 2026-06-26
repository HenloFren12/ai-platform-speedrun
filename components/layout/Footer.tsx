'use client';
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      background: '#0f1e26',
      borderTop: '1px solid rgba(209,232,226,0.08)',
      padding: '4rem 2rem 2rem',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '2.5rem',
          marginBottom: '3rem',
        }}>
          {/* Brand */}
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)', fontWeight: 700,
              fontSize: '1.2rem', color: '#F1F6F4', marginBottom: '0.75rem',
            }}>
              SpeedRun<span style={{ color: '#FFC801' }}>AI</span>
            </div>
            <p style={{ color: '#D9E8E2', fontSize: '0.85rem', lineHeight: 1.6 }}>
              Next-generation AI data automation for modern engineering teams.
            </p>
          </div>

          {/* Nav columns */}
          {[
            { heading: 'Product',  links: ['Features', 'Pricing', 'Changelog', 'Roadmap'] },
            { heading: 'Company',  links: ['About', 'Blog', 'Careers', 'Press'] },
            { heading: 'Legal',    links: ['Privacy', 'Terms', 'Security', 'Cookies'] },
          ].map(col => (
            <nav key={col.heading} aria-label={col.heading}>
              <h3 style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.8rem',
                textTransform: 'uppercase', letterSpacing: '0.1em',
                color: '#FFC801', marginBottom: '1rem',
              }}>{col.heading}</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {col.links.map(link => (
                  <li key={link}>
                    <a href="#" style={{
                      color: '#D9E8E2', textDecoration: 'none', fontSize: '0.875rem',
                      transition: 'color 150ms ease-out',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#FFC801')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#D9E8E2')}
                    >{link}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(209,232,226,0.08)',
          paddingTop: '1.5rem',
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', flexWrap: 'wrap', gap: '1rem',
        }}>
          <small style={{ color: '#D9E8E2', fontSize: '0.8rem' }}>
            © {year} SpeedRun AI, Inc. All rights reserved.
          </small>
          <address style={{ fontStyle: 'normal' }}>
            <a href="mailto:hello@SpeedRunai.com" style={{
              color: '#D9E8E2', fontSize: '0.8rem', textDecoration: 'none',
              transition: 'color 150ms ease-out',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#FFC801')}
            onMouseLeave={e => (e.currentTarget.style.color = '#D9E8E2')}
            >hello@SpeedRunai.com</a>
          </address>
        </div>
      </div>
    </footer>
  );
}