export type Currency = 'USD' | 'EUR' | 'INR';
export type Billing  = 'monthly' | 'annual';

export const TIERS = [
  { name: 'Starter',    base: 29,  features: ['1,000 automations/mo','3 connectors','Email support'] },
  { name: 'Pro',        base: 79,  features: ['10,000 automations/mo','20 connectors','Priority support'] },
  { name: 'Enterprise', base: 199, features: ['Unlimited automations','All connectors','Dedicated CSM'] },
];

const TARIFF: Record<Currency, number> = { USD: 1, EUR: 0.92, INR: 83.5 };
const SYMBOL: Record<Currency, string> = { USD: '$', EUR: '€', INR: '₹' };

export function computePrice(base: number, currency: Currency, billing: Billing): string {
  const cycle  = billing === 'annual' ? 0.80 : 1;
  const amount = base * cycle * TARIFF[currency];
  const fmt    = currency === 'INR'
    ? Math.round(amount).toLocaleString('en-IN')
    : amount.toFixed(2);
  return `${SYMBOL[currency]}${fmt}`;
}