import { Button } from '../ui';

interface HeaderProps {
  /** Context-aware CTA per Design System — Middle East / Workforce Intelligence
   *  Platform pages use the alternate CTA copy. Default is the general one. */
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
 * Pass 1: solid Graphite background, always-on (not transparent-over-hero
 * transitioning to solid). The scroll-triggered transparency/blur transition
 * is a Pass 3 enhancement — ships now as a correct, accessible, static header
 * rather than an animation stub.
 */
export function Header({ ctaContext = 'general' }: HeaderProps) {
  const ctaLabel =
    ctaContext === 'workforce-intelligence'
      ? 'Book a Workforce Intelligence Strategy Session'
      : 'Book an AI Strategy Session';

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-graphite">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 lg:px-20">
        <a href="/" className="text-lg font-medium tracking-wordmark text-white">
          STRATISION
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

        {/* Mobile nav trigger — Pass 2 wires the actual menu panel */}
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
