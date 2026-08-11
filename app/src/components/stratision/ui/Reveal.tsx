import { useEffect, useRef, type ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
}

/**
 * Scroll-triggered reveal, Pass 3. Progressive enhancement, SSR-safe:
 * - Server render / no JS / reduced motion → content is simply visible.
 * - After hydration, elements still BELOW the viewport get the hidden class
 *   (invisible to the user at that moment, so no flash), then reveal on
 *   scroll — once per session, no re-trigger on scroll-back.
 */
export function Reveal({ children, className = '' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Only hide elements that are currently below the viewport.
    const rect = el.getBoundingClientRect();
    if (rect.top >= window.innerHeight * 0.9) {
      el.classList.add('strat-reveal');
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              el.classList.add('strat-in');
              observer.disconnect();
            }
          }
        },
        { rootMargin: '0px 0px -10% 0px' },
      );
      observer.observe(el);
      return () => observer.disconnect();
    }
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
