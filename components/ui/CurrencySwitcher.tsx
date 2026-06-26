'use client';

import { ChangeEvent } from 'react';
import { Currency } from '@/lib/pricing';

interface CurrencySwitcherProps {
  onChange: (value: Currency) => void;
}

export default function CurrencySwitcher({ onChange }: CurrencySwitcherProps) {
  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value as Currency);
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <label htmlFor="currency-select" style={{
        position: 'absolute',
        width: '1px',
        height: '1px',
        padding: '0',
        margin: '-1px',
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        border: '0'
      }}>
        Choose billing currency
      </label>
      
      <select
        id="currency-select"
        onChange={handleSelect}
        defaultValue="USD"
        style={{
          appearance: 'none',
          WebkitAppearance: 'none',
          MozAppearance: 'none',
          background: 'rgba(17, 76, 90, 0.3)',
          border: '1px solid rgba(209, 232, 226, 0.1)',
          borderRadius: '0.5rem',
          padding: '0.5rem 2.5rem 0.5rem 1rem',
          fontFamily: 'var(--font-mono, monospace)',
          fontSize: '0.85rem',
          color: 'var(--arctic-powder, #F1F6F4)',
          fontWeight: 600,
          cursor: 'pointer',
          outline: 'none',
          transition: 'border-color 150ms ease-out, background 150ms ease-out',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'rgba(255, 200, 1, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'rgba(209, 232, 226, 0.1)';
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = 'var(--forsythia, #FFC801)';
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = 'rgba(209, 232, 226, 0.1)';
        }}
      >
        <option value="USD" style={{ background: '#172B36', color: '#F1F6F4' }}>USD ($)</option>
        <option value="EUR" style={{ background: '#172B36', color: '#F1F6F4' }}>EUR (€)</option>
        <option value="INR" style={{ background: '#172B36', color: '#F1F6F4' }}>INR (₹)</option>
      </select>

      {/* Premium SVG Chevron Indicator */}
      <div style={{
        position: 'absolute',
        right: '12px',
        top: '50%',
        transform: 'translateY(-50%)',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        color: 'var(--forsythia, #FFC801)',
      }}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </div>
  );
}