'use client';
import { useRef, useEffect } from 'react';
import { TIERS, computePrice, Currency, Billing } from '@/lib/pricing';
import { useState } from 'react';
import BillingToggle from '../ui/BillingToggle';
import CurrencySwitcher from '../ui/CurrencySwitcher';

export default function PricingSection() {
  const [billing, setBilling] = useState<Billing>('monthly');
  const [currency, setCurrency] = useState<Currency>('USD');
  const priceRefs = useRef<(HTMLSpanElement | null)[]>([]);

  // Imperatively update ONLY the price text nodes — zero parent re-render
  const updatePrices = (c: Currency, b: Billing) => {
    TIERS.forEach((tier, i) => {
      if (priceRefs.current[i]) {
        priceRefs.current[i]!.textContent = computePrice(tier.base, c, b);
      }
    });
  };

  const handleBilling = (b: Billing) => {
    setBilling(b);
    updatePrices(currency, b);
  };

  const handleCurrency = (c: Currency) => {
    setCurrency(c);
    updatePrices(c, billing);
  };

  return (
    <section id="pricing" aria-label="Pricing plans" style={{
      padding: '6rem 2rem',
      background: 'var(--oceanic-noir)',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <h2 style={{
          fontFamily: 'var(--font-mono)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
          textAlign: 'center', marginBottom: '1rem', color: '#F1F6F4',
        }}>
          Simple, <span style={{ color: '#FFC801' }}>Transparent</span> Pricing
        </h2>
        <p style={{ textAlign: 'center', color: '#D9E8E2', marginBottom: '2.5rem' }}>
          No hidden fees. Cancel anytime.
        </p>

        {/* ── Controls ── */}
        <div style={{
          display: 'flex', justifyContent: 'center',
          alignItems: 'center', gap: '1.5rem',
          flexWrap: 'wrap', marginBottom: '3rem',
        }}>

          {/* Billing Toggle */}
          <div role="group" aria-label="Billing cycle" style={{
            display: 'flex', background: 'rgba(209,232,226,0.06)',
            borderRadius: '0.5rem', padding: '4px', border: '1px solid rgba(209,232,226,0.1)',
          }}>
            {(['monthly', 'annual'] as Billing[]).map(b => (
              <button
                key={b}
                aria-pressed={billing === b}
                onClick={() => handleBilling(b)}
                style={{
                  padding: '0.5rem 1.2rem',
                  borderRadius: '0.35rem',
                  border: 'none', cursor: 'pointer',
                  fontFamily: 'var(--font-mono)', fontSize: '0.85rem',
                  background: billing === b ? '#FFC801' : 'transparent',
                  color: billing === b ? '#172B36' : '#D9E8E2',
                  fontWeight: billing === b ? 700 : 400,
                  transition: 'background 150ms ease-out, color 150ms ease-out',
                }}
              >
                {b === 'annual' ? 'Annual −20%' : 'Monthly'}
              </button>
            ))}
          </div>

          {/* Currency Switcher */}
          <select
            aria-label="Select currency"
            value={currency}
            onChange={e => handleCurrency(e.target.value as Currency)}
            style={{
              padding: '0.55rem 1rem',
              background: 'rgba(209,232,226,0.06)',
              border: '1px solid rgba(209,232,226,0.1)',
              borderRadius: '0.5rem',
              color: '#F1F6F4', fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem', cursor: 'pointer',
            }}
          >
            <option value="USD">USD ($)</option>
            <option value="EUR">EUR (€)</option>
            <option value="INR">INR (₹)</option>
          </select>
        </div>

        {/* ── Pricing Cards ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
        }} role="list">
          {TIERS.map((tier, i) => {
            const isMiddle = i === 1;
            return (
              <article
                key={tier.name}
                role="listitem"
                style={{
                  padding: '2rem',
                  borderRadius: '1rem',
                  background: isMiddle
                    ? 'linear-gradient(135deg, rgba(255,200,1,0.12), rgba(255,153,50,0.08))'
                    : 'rgba(209,232,226,0.04)',
                  border: isMiddle
                    ? '1px solid rgba(255,200,1,0.5)'
                    : '1px solid rgba(209,232,226,0.1)',
                  position: 'relative',
                  transition: 'transform 200ms ease-out, box-shadow 200ms ease-out',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                }}
              >
                {isMiddle && (
                  <div style={{
                    position: 'absolute', top: '-1px', left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#FFC801', color: '#172B36',
                    padding: '0.2rem 1rem', borderRadius: '0 0 0.5rem 0.5rem',
                    fontSize: '0.75rem', fontFamily: 'var(--font-mono)', fontWeight: 700,
                  }}>MOST POPULAR</div>
                )}

                <h3 style={{
                  fontFamily: 'var(--font-mono)', fontSize: '1.1rem',
                  color: '#F1F6F4', marginBottom: '1rem',
                }}>{tier.name}</h3>

                <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'baseline', gap: '0.25rem' }}>
                  {/* THIS is the isolated text node — never re-rendered by React */}
                  <span
                    ref={el => { priceRefs.current[i] = el; }}
                    aria-live="polite"
                    aria-label={`${tier.name} price`}
                    style={{
                      fontFamily: 'var(--font-mono)', fontSize: '2.2rem',
                      fontWeight: 700, color: isMiddle ? '#FFC801' : '#F1F6F4',
                    }}
                  >
                    {computePrice(tier.base, 'USD', 'monthly')}
                  </span>
                  <span style={{ color: '#D9E8E2', fontSize: '0.9rem' }}>/mo</span>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                  {tier.features.map(f => (
                    <li key={f} style={{
                      display: 'flex', alignItems: 'center', gap: '0.6rem',
                      color: '#D9E8E2', fontSize: '0.9rem',
                      padding: '0.4rem 0',
                      borderBottom: '1px solid rgba(209,232,226,0.06)',
                    }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <circle cx="8" cy="8" r="7" stroke="#FFC801" strokeWidth="1.5"/>
                        <path d="M5 8l2.5 2.5L11 5.5" stroke="#FFC801" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <a href="#" style={{
                  display: 'block', textAlign: 'center',
                  padding: '0.75rem',
                  borderRadius: '0.5rem',
                  background: isMiddle ? '#FFC801' : 'transparent',
                  border: isMiddle ? 'none' : '1px solid rgba(209,232,226,0.25)',
                  color: isMiddle ? '#172B36' : '#F1F6F4',
                  fontFamily: 'var(--font-mono)', fontWeight: 600,
                  textDecoration: 'none', fontSize: '0.9rem',
                  transition: 'background 150ms ease-out, transform 150ms ease-out',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = isMiddle ? '#FF9932' : 'rgba(209,232,226,0.1)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = isMiddle ? '#FFC801' : 'transparent';
                }}
                >
                  {isMiddle ? 'Start Free Trial' : 'Get Started'}
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}