'use client'; // <-- This single line fixes the entire error!

export default function HeroSection() {
  return (
    <section id="hero" aria-label="Hero" style={{
      minHeight: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      textAlign: 'center', padding: '4rem 2rem',
      background: 'radial-gradient(ellipse at 50% 0%, rgba(255,200,1,0.08) 0%, transparent 70%)',
    }}>
      <div style={{ maxWidth: 800 }}>
        <div className="animate-1" style={{
          display: 'inline-block',
          background: 'rgba(255,200,1,0.1)', border: '1px solid rgba(255,200,1,0.3)',
          borderRadius: '2rem', padding: '0.3rem 1rem',
          fontSize: '0.8rem', color: '#FFC801', marginBottom: '1.5rem',
          fontFamily: 'var(--font-mono)',
        }}>
          ⚡ Now in Public Beta
        </div>

        <h1 className="animate-2" style={{
          fontFamily: 'var(--font-mono)', fontWeight: 700,
          fontSize: 'clamp(2.2rem, 5vw, 4rem)',
          lineHeight: 1.15, marginBottom: '1.5rem',
          color: '#F1F6F4',
        }}>
          Automate Everything.<br />
          <span style={{ color: '#FFC801' }}>Ship Faster.</span>
        </h1>

        <p className="animate-2" style={{
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          color: '#D9E8E2', lineHeight: 1.7,
          marginBottom: '2.5rem', maxWidth: 600, margin: '0 auto 2.5rem',
        }}>
          The next-generation AI data automation platform. Connect 200+ tools,
          trigger intelligent workflows, and move data at the speed of thought.
        </p>

        <div className="animate-3" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#pricing" style={{
            background: '#FFC801', color: '#172B36',
            padding: '0.85rem 2rem', borderRadius: '0.5rem',
            fontWeight: 700, fontFamily: 'var(--font-mono)', textDecoration: 'none',
            fontSize: '1rem', transition: 'background 150ms ease-out, transform 150ms ease-out',
          }}
          onMouseEnter={e => { e.currentTarget.style.background='#FF9932'; e.currentTarget.style.transform='translateY(-2px)'; }}
          onMouseLeave={e => { e.currentTarget.style.background='#FFC801'; e.currentTarget.style.transform='translateY(0)'; }}
          >Start Free Trial</a>

          <a href="#features" style={{
            border: '1px solid rgba(209,232,226,0.3)', color: '#D9E8E2',
            padding: '0.85rem 2rem', borderRadius: '0.5rem',
            fontWeight: 500, textDecoration: 'none', fontSize: '1rem',
            transition: 'border-color 150ms ease-out, transform 150ms ease-out',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor='#FFC801'; e.currentTarget.style.transform='translateY(-2px)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(209,232,226,0.3)'; e.currentTarget.style.transform='translateY(0)'; }}
          >See How It Works →</a>
        </div>

        {/* Stats row */}
        <div className="animate-3" style={{
          display: 'flex', gap: '3rem', justifyContent: 'center', flexWrap: 'wrap',
          marginTop: '4rem', paddingTop: '3rem',
          borderTop: '1px solid rgba(209,232,226,0.1)',
        }}>
          {[['200+','Integrations'],['99.9%','Uptime SLA'],['<10ms','API Latency'],['50k+','Teams']].map(([num, label]) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.8rem', fontWeight: 700, color: '#FFC801' }}>{num}</div>
              <div style={{ fontSize: '0.85rem', color: '#D9E8E2', marginTop: '0.25rem' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}