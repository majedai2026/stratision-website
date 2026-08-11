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
 * Pass 3: uses the locked, approved Stratision logo lockup (raster asset —
 * see Brand Book note: production vector pass by a type designer still
 * recommended for print/small-size use; this asset is the approved on-screen
 * lockup). Header background is #020C21 — the logo image's exact background
 * colour, sampled from the approved file — so the mark blends seamlessly.
 * On scroll: hairline border + subtle shadow appear (strat-header CSS).
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
    <header
      className={`strat-header sticky top-0 z-50 bg-[#020C21] ${scrolled ? 'strat-scrolled' : ''}`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-3 lg:px-20">
        <a href="/" className="flex items-center" aria-label="Stratision — home">
          <img
            src={logoLockup}
            alt="Stratision — Strategy, Vision, Intelligence"
            className="h-12 w-auto lg:h-14"
          />
        </a>

        <nav aria-label="Primary" className="hidden gap-8 lg:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-accent-200 transition-colors duration-[120ms] hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Button variant="primary" className="hidden sm:inline-flex">
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
