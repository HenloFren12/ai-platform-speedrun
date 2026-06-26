'use client';

import { useState } from 'react';
import { Billing } from '@/lib/pricing';

interface BillingToggleProps {
  onChange: (value: Billing) => void;
}

export default function BillingToggle({ onChange }: BillingToggleProps) {
  const [active, setActive] = useState<Billing>('monthly');

  const handleToggle = (type: Billing) => {
    setActive(type);
    onChange(type);
  };

  return (
    <div 
      dir="ltr"
      style={{
        display: 'inline-flex',
        position: 'relative',
        background: 'rgba(17, 76, 90, 0.3)',
        border: '1px solid rgba(209, 232, 226, 0.1)',
        padding: '4px',
        borderRadius: '9999px',
        cursor: 'pointer',
        userSelect: 'none',
      }}
      role="radiogroup"
      aria-label="Billing cycle selection"
    >
      {/* Sliding Active Background Layer */}
      <div 
        style={{
          position: 'absolute',
          top: '4px',
          left: '4px',
          width: 'calc(50% - 4px)',
          height: 'calc(100% - 8px)',
          background: 'var(--forsythia, #FFC801)',
          borderRadius: '9999px',
          transition: 'transform 250ms cubic-bezier(0.16, 1, 0.3, 1)',
          transform: active === 'annual' ? 'translateX(100%)' : 'translateX(0%)',
          zIndex: 0,
        }}
      />

      {/* Monthly Option */}
      <button
        type="button"
        role="radio"
        aria-checked={active === 'monthly'}
        onClick={() => handleToggle('monthly')}
        style={{
          position: 'relative',
          zIndex: 1,
          padding: '0.5rem 1.5rem',
          borderRadius: '9999px',
          border: 'none',
          background: 'transparent',
          fontFamily: 'var(--font-mono, monospace)',
          fontSize: '0.85rem',
          fontWeight: 600,
          color: active === 'monthly' ? 'var(--oceanic-noir, #172B36)' : 'var(--mystic-mint, #D9E8E2)',
          cursor: 'pointer',
          outline: 'none',
          transition: 'color 150ms ease-out',
        }}
      >
        Monthly
      </button>

      {/* Annual Option */}
      <button
        type="button"
        role="radio"
        aria-checked={active === 'annual'}
        onClick={() => handleToggle('annual')}
        style={{
          position: 'relative',
          zIndex: 1,
          padding: '0.5rem 1.5rem',
          borderRadius: '9999px',
          border: 'none',
          background: 'transparent',
          fontFamily: 'var(--font-mono, monospace)',
          fontSize: '0.85rem',
          fontWeight: 600,
          color: active === 'annual' ? 'var(--oceanic-noir, #172B36)' : 'var(--mystic-mint, #D9E8E2)',
          cursor: 'pointer',
          outline: 'none',
          transition: 'color 150ms ease-out',
        }}
      >
        Annual
        <span style={{
          marginLeft: '6px',
          fontSize: '0.75rem',
          color: active === 'annual' ? 'var(--oceanic-noir, #172B36)' : 'var(--deep-saffron, #FF9932)',
          fontWeight: 700
        }}>
          -20%
        </span>
      </button>
    </div>
  );
}