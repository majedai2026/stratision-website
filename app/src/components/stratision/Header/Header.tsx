import { useEffect, useState } from 'react';
import { Button } from '../ui';
import logoLockup from './logo-lockup.png';

interface HeaderProps {
  ctaContext?: 'general' | 'workforce-intelligence';
}

const NAV_ITEMS = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'Industries', href: '#industries' },
  { label: 'Methodology', href: '#methodology' },
  { label: 'Insights', href: '#insights' },
  { label: 'About', href: '#why-stratision' },
];

/**
 * Editorial Intelligence system. Nav labels UNCHANGED (locked IA) — only
 * visually refined: smaller, lighter, more generously spaced. Background
 * stays #020C21 (the actual logo file's own background colour) rather than
 * the locked #0E1B2E section colour, so the logo blends with zero visible
 * edge — the one deliberate exception to the single-hex Deep Blue rule.
 */
export function Header({ ctaContext = 'general' }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const ctaLabel =
    ctaContext === 'workforce-intelligence'
      ? 'Book a Workforce Intelligence Strategy Session'
      : 'Book an AI Strategy Session';

  return (
    <header className={`strat-header sticky top-0 z-50 bg-[#020C21] ${scrolled ? 'strat-scrolled' : ''}`}>
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-3.5 lg:px-20">
        <a href="/" className="flex items-center" aria-label="Stratision — home">
          <img
            src={logoLockup}
            alt="Stratision — Strategy, Vision, Intelligence"
            className="h-11 w-auto lg:h-12"
          />
        </a>

        <nav aria-label="Primary" className="hidden gap-10 lg:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] font-medium tracking-wide text-accent-200 transition-colors duration-[120ms] hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Button variant="primary" className="hidden text-xs sm:inline-flex">
          {ctaLabel}
        </Button>

        <button
          className="inline-flex h-10 w-10 items-center justify-center text-white lg:hidden"
          aria-label="Open menu"
        >
          <span aria-hidden="true">☰</span>
        </button>
      </div>
    </header>
  );
}
