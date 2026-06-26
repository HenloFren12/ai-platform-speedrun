'use client';

import { useRef } from 'react';
import { TIERS, computePrice, Currency, Billing } from '@/lib/pricing';

export default function PricingSection() {
  // 1. NO useState. Pure ref tracking to bypass the React reconciler.
  const currentBilling = useRef<Billing>('monthly');
  const currentCurrency = useRef<Currency>('USD');
  
  const priceRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const btnMonthlyRef = useRef<HTMLButtonElement>(null);
  const btnAnnualRef = useRef<HTMLButtonElement>(null);

  // Imperatively updates only the text nodes
  const updatePrices = () => {
    TIERS.forEach((tier, i) => {
      if (priceRefs.current[i]) {
        priceRefs.current[i]!.textContent = computePrice(tier.base, currentCurrency.current, currentBilling.current);
      }
    });
  };

  // Pure DOM mutation for the buttons
  const handleBilling = (b: Billing) => {
    if (currentBilling.current === b) return;
    currentBilling.current = b;
    updatePrices();
    
    if (btnMonthlyRef.current && btnAnnualRef.current) {
      if (b === 'monthly') {
        btnMonthlyRef.current.style.background = 'var(--forsythia, #FFC801)';
        btnMonthlyRef.current.style.color = 'var(--oceanic-noir, #172B36)';
        btnMonthlyRef.current.style.fontWeight = '700';

        btnAnnualRef.current.style.background = 'transparent';
        btnAnnualRef.current.style.color = 'var(--mystic-mint, #D9E8E2)';
        btnAnnualRef.current.style.fontWeight = '400';
      } else {
        btnAnnualRef.current.style.background = 'var(--forsythia, #FFC801)';
        btnAnnualRef.current.style.color = 'var(--oceanic-noir, #172B36)';
        btnAnnualRef.current.style.fontWeight = '700';

        btnMonthlyRef.current.style.background = 'transparent';
        btnMonthlyRef.current.style.color = 'var(--mystic-mint, #D9E8E2)';
        btnMonthlyRef.current.style.fontWeight = '400';
      }
    }
  };

  const handleCurrency = (e: React.ChangeEvent<HTMLSelectElement>) => {
    currentCurrency.current = e.target.value as Currency;
    updatePrices();
  };

  return (
    <section id="pricing" aria-label="Pricing plans" style={{
      padding: '7rem 2rem',
      background: 'var(--oceanic-noir, #172B36)',
      position: 'relative'
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* Section Heading Group */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{
            fontFamily: 'var(--font-mono, monospace)',
            fontWeight: 700,
            fontSize: '2.2rem',
            color: 'var(--arctic-powder, #F1F6F4)',
            marginBottom: '1rem',
            letterSpacing: '-0.02em'
          }}>
            Predictable, Matrixed Resource Pricing
          </h2>
          <p style={{ color: 'var(--mystic-mint, #D9E8E2)', opacity: 0.8, fontSize: '0.95rem' }}>
            Scale linearly based on computational ingestion. Zero hidden provisioning surcharges.
          </p>

          {/* Premium Control Center Wrapper (Your nice pill design!) */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.5rem',
            marginTop: '2.5rem',
            background: 'rgba(17, 76, 90, 0.15)',
            padding: '0.5rem 1.5rem',
            borderRadius: '9999px',
            border: '1px solid rgba(209, 232, 226, 0.06)',
            flexWrap: 'wrap'
          }}>
            
            {/* Inlined the toggle to maintain pure DOM control */}
            <div role="group" aria-label="Billing cycle" style={{ display: 'flex', gap: '4px' }}>
              <button
                ref={btnMonthlyRef}
                onClick={() => handleBilling('monthly')}
                style={{
                  padding: '0.5rem 1.2rem', borderRadius: '9999px',
                  border: 'none', cursor: 'pointer',
                  fontFamily: 'var(--font-mono, monospace)', fontSize: '0.85rem',
                  background: 'var(--forsythia, #FFC801)', color: 'var(--oceanic-noir, #172B36)', fontWeight: 700,
                  transition: 'background 150ms ease-out, color 150ms ease-out',
                }}
              >
                Monthly
              </button>
              <button
                ref={btnAnnualRef}
                onClick={() => handleBilling('annual')}
                style={{
                  padding: '0.5rem 1.2rem', borderRadius: '9999px',
                  border: 'none', cursor: 'pointer',
                  fontFamily: 'var(--font-mono, monospace)', fontSize: '0.85rem',
                  background: 'transparent', color: 'var(--mystic-mint, #D9E8E2)', fontWeight: 400,
                  transition: 'background 150ms ease-out, color 150ms ease-out',
                }}
              >
                Annual −20%
              </button>
            </div>

            <div style={{ width: '1px', height: '24px', background: 'rgba(209,232,226,0.1)' }} />
            
            <select
              aria-label="Select currency"
              defaultValue="USD"
              onChange={handleCurrency}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--arctic-powder, #F1F6F4)', 
                fontFamily: 'var(--font-mono, monospace)',
                fontSize: '0.9rem', cursor: 'pointer',
                outline: 'none'
              }}
            >
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (€)</option>
              <option value="INR">INR (₹)</option>
            </select>

          </div>
        </div>

        {/* Plan Grid System */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          alignItems: 'stretch',
        }}>
          {TIERS.map((tier, i) => {
            const isMiddle = i === 1;
            return (
              <div 
                key={tier.name}
                style={{
                  background: 'rgba(17, 76, 90, 0.15)',
                  border: isMiddle ? '1px solid var(--forsythia, #FFC801)' : '1px solid rgba(209, 232, 226, 0.08)',
                  borderRadius: '1rem',
                  padding: '2.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  boxShadow: isMiddle ? '0 0 40px rgba(255, 200, 1, 0.05)' : 'none',
                  transition: 'transform 200ms ease-out',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                {isMiddle && (
                  <span style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'var(--forsythia, #FFC801)',
                    color: 'var(--oceanic-noir, #172B36)',
                    fontSize: '0.7rem',
                    fontFamily: 'var(--font-mono, monospace)',
                    fontWeight: 700,
                    padding: '0.25rem 0.75rem',
                    borderRadius: '9999px',
                    letterSpacing: '0.05em'
                  }}>
                    MOST POPULAR
                  </span>
                )}

                <div style={{ marginBottom: '1.5rem' }}>
                  <h3 style={{
                    fontFamily: 'var(--font-mono, monospace)',
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: 'var(--arctic-powder, #F1F6F4)',
                    marginBottom: '0.5rem'
                  }}>{tier.name}</h3>
                  
                  {/* Dynamic Pricing Text Node Injection Hook */}
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem', marginTop: '1rem' }}>
                    <span 
                      ref={el => { priceRefs.current[i] = el; }}
                      style={{
                        fontFamily: 'var(--font-mono, monospace)',
                        fontSize: '2.5rem',
                        fontWeight: 700,
                        color: 'var(--arctic-powder, #F1F6F4)'
                      }}
                    >
                      {computePrice(tier.base, 'USD', 'monthly')}
                    </span>
                    <span style={{ color: 'var(--mystic-mint, #D9E8E2)', fontSize: '0.85rem', opacity: 0.6 }}>
                      /mo
                    </span>
                  </div>
                </div>

                {/* Features List Layout */}
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2.5rem 0', flexGrow: 1 }}>
                  {tier.features.map(f => (
                    <li key={f} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      color: 'var(--mystic-mint, #D9E8E2)',
                      fontSize: '0.9rem',
                      marginBottom: '0.85rem',
                      opacity: 0.9
                    }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
                        <circle cx="8" cy="8" r="7" stroke="var(--forsythia, #FFC801)" strokeWidth="1.5"/>
                        <path d="M5 8l2.5 2.5L11 5.5" stroke="var(--forsythia, #FFC801)" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Action Call to Action */}
                <a href="#" style={{
                  display: 'block',
                  textAlign: 'center',
                  padding: '0.85rem',
                  borderRadius: '0.5rem',
                  background: isMiddle ? 'var(--forsythia, #FFC801)' : 'rgba(17, 76, 90, 0.2)',
                  border: isMiddle ? 'none' : '1px solid rgba(209, 232, 226, 0.15)',
                  color: isMiddle ? 'var(--oceanic-noir, #172B36)' : 'var(--arctic-powder, #F1F6F4)',
                  fontFamily: 'var(--font-mono, monospace)',
                  fontWeight: 600,
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  transition: 'all 150ms ease-out',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = isMiddle ? 'var(--deep-saffron, #FF9932)' : 'rgba(17, 76, 90, 0.4)';
                  if(!isMiddle) e.currentTarget.style.borderColor = 'var(--forsythia, #FFC801)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = isMiddle ? 'var(--forsythia, #FFC801)' : 'rgba(17, 76, 90, 0.2)';
                  if(!isMiddle) e.currentTarget.style.borderColor = 'rgba(209, 232, 226, 0.15)';
                }}
                >
                  Authorize Provisioning
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}