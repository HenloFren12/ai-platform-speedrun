const TESTIMONIALS = [
  {
    quote: "DataFlow AI cut our pipeline setup time from weeks to hours. Absolutely transformative.",
    name: "Sarah Chen",
    role: "CTO, Nexus Labs",
    avatar: "SC",
  },
  {
    quote: "The predictive automation engine caught issues before they even happened. Unreal product.",
    name: "Marcus Webb",
    role: "Head of Eng, Orbit Systems",
    avatar: "MW",
  },
  {
    quote: "We replaced 4 tools with DataFlow AI. Our infra bill dropped 60% in the first month.",
    name: "Priya Nair",
    role: "VP Engineering, Stackr",
    avatar: "PN",
  },
];

const LOGOS = ['Nexus', 'Orbit', 'Stackr', 'Veltix', 'Corevo', 'Synapse'];

export default function SocialProof() {
  return (
    <section id="social-proof" aria-label="Customer testimonials" style={{
      padding: '6rem 2rem',
      background: 'linear-gradient(180deg, var(--nocturnal) 0%, var(--oceanic-noir) 100%)',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <p style={{
          textAlign: 'center', color: '#D9E8E2',
          fontSize: '0.85rem', letterSpacing: '0.1em',
          textTransform: 'uppercase', marginBottom: '1.5rem',
          fontFamily: 'var(--font-mono)',
        }}>Trusted by engineering teams worldwide</p>

        {/* Logo Strip */}
        <div style={{
          display: 'flex', flexWrap: 'wrap',
          justifyContent: 'center', gap: '1rem',
          marginBottom: '4rem',
        }} role="list" aria-label="Customer logos">
          {LOGOS.map(name => (
            <div key={name} role="listitem" style={{
              padding: '0.6rem 1.6rem',
              border: '1px solid rgba(209,232,226,0.12)',
              borderRadius: '0.5rem',
              fontFamily: 'var(--font-mono)', fontSize: '0.9rem',
              color: '#D9E8E2',
              background: 'rgba(209,232,226,0.03)',
              transition: 'border-color 150ms ease-out, color 150ms ease-out',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,200,1,0.4)';
              (e.currentTarget as HTMLElement).style.color = '#FFC801';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(209,232,226,0.12)';
              (e.currentTarget as HTMLElement).style.color = '#D9E8E2';
            }}
            >{name}</div>
          ))}
        </div>

        <h2 style={{
          fontFamily: 'var(--font-mono)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
          textAlign: 'center', marginBottom: '3rem', color: '#F1F6F4',
        }}>
          Loved by <span style={{ color: '#FFC801' }}>50,000+ teams</span>
        </h2>

        {/* Testimonial Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}>
          {TESTIMONIALS.map(t => (
            <article key={t.name} style={{
              padding: '2rem',
              background: 'rgba(209,232,226,0.04)',
              border: '1px solid rgba(209,232,226,0.1)',
              borderRadius: '1rem',
              transition: 'border-color 200ms ease-out, transform 200ms ease-out',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,200,1,0.3)';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(209,232,226,0.1)';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
            }}
            >
              {/* Stars */}
              <div style={{ marginBottom: '1rem', color: '#FFC801', fontSize: '1rem' }} aria-label="5 stars">
                {'★★★★★'}
              </div>

              <blockquote style={{
                color: '#D9E8E2', fontSize: '0.95rem',
                lineHeight: 1.7, marginBottom: '1.5rem',
                fontStyle: 'italic', borderLeft: 'none', padding: 0,
              }}>
                "{t.quote}"
              </blockquote>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{
                  width: 40, height: 40, borderRadius: '50%',
                  background: 'linear-gradient(135deg, #FFC801, #FF9932)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-mono)', fontWeight: 700,
                  color: '#172B36', fontSize: '0.8rem',
                  flexShrink: 0,
                }} aria-hidden="true">{t.avatar}</div>
                <div>
                  <div style={{ color: '#F1F6F4', fontWeight: 600, fontSize: '0.9rem' }}>{t.name}</div>
                  <div style={{ color: '#D9E8E2', fontSize: '0.8rem' }}>{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}