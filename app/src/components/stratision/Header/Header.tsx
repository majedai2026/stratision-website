import { useEffect, useRef, useState } from 'react';
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
 * QA FIX: mobile nav accessibility.
 * - Focus moves to the first link when the overlay opens.
 * - Focus returns to the trigger button when it closes (close button, link
 *   click, and Escape key all trigger this).
 * - Escape key closes the overlay.
 * - Basic focus trap: Tab/Shift+Tab cycle within the overlay while open.
 * Visual design is unchanged from the previous version.
 */
export function Header({ ctaContext = 'general' }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    if (menuOpen) {
      firstLinkRef.current?.focus();
    } else {
      triggerRef.current?.focus();
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        return;
      }
      if (e.key !== 'Tab' || !overlayRef.current) return;
      const focusable = overlayRef.current.querySelectorAll<HTMLElement>('a, button');
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  const ctaLabel =
    ctaContext === 'workforce-intelligence'
      ? 'Book a Workforce Intelligence Strategy Session'
      : 'Book a Strategy Session';

  return (
    <>
      <header className="relative z-[60] bg-deep-blue px-6 pt-8 lg:px-20">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between">
          <a href="/" className="flex items-center" aria-label="Stratision — home">
            <img src={logoLockup} alt="Stratision — Strategy, Vision, Intelligence" className="h-7 w-auto opacity-95" />
          </a>

          <nav aria-label="Primary" className="hidden gap-10 lg:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs font-medium tracking-wide text-accent-200/65 transition-colors duration-150 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#"
            className="hidden text-xs font-medium text-accent-200/85 transition-colors duration-150 hover:text-white sm:inline lg:inline"
          >
            {ctaLabel}
          </a>

          <button
            ref={triggerRef}
            onClick={() => setMenuOpen(true)}
            className="relative z-[70] text-xl text-white lg:hidden"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-overlay"
          >
            ☰
          </button>
        </div>
      </header>

      {menuOpen && (
        <div
          ref={overlayRef}
          id="mobile-nav-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Primary navigation"
          className="fixed inset-0 z-[65] flex flex-col items-center justify-center gap-8 bg-deep-blue"
        >
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute right-6 top-8 text-xl text-white"
            aria-label="Close menu"
          >
            ✕
          </button>
          {NAV_ITEMS.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              ref={i === 0 ? firstLinkRef : undefined}
              onClick={() => setMenuOpen(false)}
              className="font-serif text-3xl font-normal text-white"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#"
            onClick={() => setMenuOpen(false)}
            className="mt-4 rounded-md bg-accent-500 px-7 py-3.5 text-sm font-medium text-white"
          >
            {ctaLabel}
          </a>
        </div>
      )}
    </>
  );
}
