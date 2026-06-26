import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'DataFlow AI — Next-Gen Automation Platform',
  description: 'Automate your data workflows with AI-powered precision. Connect 200+ tools, zero latency, enterprise-grade security.',
  openGraph: {
    title: 'DataFlow AI — Next-Gen Automation Platform',
    description: 'Automate your data workflows with AI-powered precision.',
    url: 'https://ai-platform.vercel.app',
    siteName: 'DataFlow AI',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DataFlow AI — Next-Gen Automation Platform',
    description: 'Automate your data workflows with AI-powered precision.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
