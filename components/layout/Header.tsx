import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-noir/85 backdrop-blur-md border-b border-mint/10">
      <nav className="max-w-[1200px] mx-auto px-8 py-4 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link 
          href="/" 
          aria-label="DataFlow AI home" 
          className="flex items-center gap-2 no-underline"
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <rect width="32" height="32" rx="8" className="fill-forsythia"/>
            <path d="M8 16h4l3-8 4 16 3-8h4" className="stroke-noir" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="font-mono font-bold text-lg text-arctic">
            DataFlow<span className="text-forsythia">AI</span>
          </span>
        </Link>

        {/* Navigation Links */}
        <ul className="flex gap-8 list-none m-0">
          {['Features', 'Pricing', 'Docs', 'Blog'].map(item => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase()}`} 
                className="text-mint no-underline text-sm transition-colors duration-150 ease-out hover:text-forsythia"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a 
          href="#pricing" 
          className="bg-forsythia text-noir px-6 py-2 rounded-lg font-semibold text-sm no-underline font-mono transition-colors duration-150 ease-out hover:bg-saffron"
        >
          Get Started
        </a>
        
      </nav>
    </header>
  );
}