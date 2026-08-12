import { useEffect, useRef, useState } from 'react';
import { SectionHeader, IndustrySelector } from '../ui';

const INDUSTRIES = [
  {
    name: 'Training & Workforce Development',
    problem: "Training investment doesn't translate into lasting capability — knowledge fades within weeks.",
    approach: 'The Workforce Intelligence Platform™ makes what your organisation knows permanently accessible.',
    outcome: 'A workforce that retains and applies what it learns, not just completes courses.',
  },
  {
    name: 'Professional Services',
    problem: 'Billable hours lost to manual admin and inconsistent client communication.',
    approach: 'Workflow automation and AI assistants handle the repetitive work.',
    outcome: 'More time for the work that actually needs a professional.',
  },
  {
    name: 'Recruitment',
    problem: 'High enquiry volume, slow response times, opportunities lost to competitors.',
    approach: 'AI Receptionist and CRM automation ensure every enquiry gets a fast, consistent response.',
    outcome: 'Faster response times without adding headcount.',
  },
];

/**
 * Section 07 — Pass 3: scroll-pinned on desktop (the CustomAI Studio
 * pattern). The section occupies extra scroll length; the content pins and
 * the active industry advances with scroll position. Scroll-linked, not
 * time-linked, per motion-rules.md. Tabs remain clickable (click jumps the
 * scroll to that industry's segment). Falls back to the plain accessible
 * tab interface on mobile and for prefers-reduced-motion — the pin is an
 * enhancement, never a requirement.
 */
export function Industries() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [pinEnabled, setPinEnabled] = useState(false);
  const outerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wide = window.matchMedia('(min-width: 1024px)');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setPinEnabled(wide.matches && !reduced.matches);
    update();
    wide.addEventListener('change', update);
    reduced.addEventListener('change', update);
    return () => {
      wide.removeEventListener('change', update);
      reduced.removeEventListener('change', update);
    };
  }, []);

  useEffect(() => {
    if (!pinEnabled) return;
    const onScroll = () => {
      const outer = outerRef.current;
      if (!outer) return;
      const rect = outer.getBoundingClientRect();
      const scrollable = outer.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const progress = Math.min(1, Math.max(0, -rect.top / scrollable));
      const index = Math.min(
        INDUSTRIES.length - 1,
        Math.floor(progress * INDUSTRIES.length),
      );
      setActiveIndex(index);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [pinEnabled]);

  const handleSelect = (i: number) => {
    setActiveIndex(i);
    if (pinEnabled && outerRef.current) {
      const outer = outerRef.current;
      const scrollable = outer.offsetHeight - window.innerHeight;
      const targetProgress = (i + 0.5) / INDUSTRIES.length;
      const top = outer.offsetTop + targetProgress * scrollable;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const content = (
    <div className="mx-auto max-w-[1440px]">
      <SectionHeader dark headline="Built around how your industry actually works." />
      <div className="bg-[#14283F] p-2">
        <IndustrySelector
          industries={INDUSTRIES}
          activeIndex={activeIndex}
          onSelect={handleSelect}
          dark
        />
      </div>
    </div>
  );

  if (!pinEnabled) {
    return (
      <section id="industries" className="bg-[#0E1B2E] px-6 py-20 text-white lg:px-20 lg:py-28">
        {content}
      </section>
    );
  }

  return (
    <section id="industries" aria-label="Industries">
      <div ref={outerRef} className="relative" style={{ height: '220vh' }}>
        <div className="sticky top-0 flex min-h-screen items-center bg-[#0E1B2E] px-6 text-white lg:px-20">
          <div className="w-full">{content}</div>
        </div>
      </div>
    </section>
  );
}
