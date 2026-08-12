import { Button } from '../ui';

interface CTAProps {
  ctaContext?: 'general' | 'workforce-intelligence';
}

/**
 * Section 11 — Editorial Intelligence system. Exact same locked headline
 * (echoes Methodology's "engineered outcomes" line — that repetition stays
 * intentional and unchanged). Deep Blue, Fraunces display.
 */
export function CTA({ ctaContext = 'general' }: CTAProps) {
  const ctaLabel =
    ctaContext === 'workforce-intelligence'
      ? 'Book a Workforce Intelligence Strategy Session'
      : 'Book an AI Strategy Session';

  return (
    <section className="bg-[#0E1B2E] px-6 py-28 text-center lg:py-44">
      <h2 className="font-serif text-3xl font-normal leading-[1.2] text-white lg:text-4xl">
        Great outcomes don't happen by accident.
      </h2>
      <p className="font-serif mt-3 text-lg italic font-light text-accent-300">Let's engineer yours.</p>
      <div className="mt-10">
        <Button variant="primary">{ctaLabel}</Button>
      </div>
    </section>
  );
}
