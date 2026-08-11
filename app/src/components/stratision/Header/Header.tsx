import { Button } from '../ui';

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
 * Pass 2: real wordmark treatment — offset hairline seam through the "A"
 * (46%, not dead-centre, per Brand Book v1.4 / Design System Section 16),
 * tightened tracking, tagline lockup beneath at reduced opacity so it never
 * competes with the wordmark. Matches the locked Identity System exactly.
 */
export function Header({ ctaContext = 'general' }: HeaderProps) {
  const ctaLabel =
    ctaContext === 'workforce-intelligence'
      ? 'Book a Workforce Intelligence Strategy Session'
      : 'Book an AI Strategy Session';

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-graphite">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 lg:px-20">
        <a href="/" className="flex flex-col leading-none">
          <span className="text-lg font-medium tracking-wordmark text-white">
            STR
            <span className="relative inline-block">
              A
              <span
                aria-hidden="true"
                className="absolute bottom-[12%] top-[12%] w-px bg-graphite"
                style={{ left: '46%' }}
              />
            </span>
            TISION
          </span>
          <span className="mt-0.5 text-[9px] font-bold uppercase tracking-eyebrow text-accent-300 opacity-70">
            Strategy&nbsp;&middot;&nbsp;Vision&nbsp;&middot;&nbsp;Intelligence
          </span>
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
