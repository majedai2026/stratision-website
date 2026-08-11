import { Button } from '../ui';

interface CTAProps {
  ctaContext?: 'general' | 'workforce-intelligence';
}

/**
 * Section 11. Rewritten (not the placeholder "Ready to find your direction?")
 * to echo Section 04's "Great outcomes aren't accidental. They're engineered."
 * — the page opens and closes on the same idea rather than introducing a new
 * one at the last second. Huge whitespace, matches Section 05b's restraint.
 */
export function CTA({ ctaContext = 'general' }: CTAProps) {
  const ctaLabel =
    ctaContext === 'workforce-intelligence'
      ? 'Book a Workforce Intelligence Strategy Session'
      : 'Book an AI Strategy Session';

  return (
    <section className="bg-white px-6 py-24 text-center lg:py-40">
      <h2 className="text-3xl font-bold leading-display text-near-black lg:text-4xl">
        Great outcomes don't happen by accident.
      </h2>
      <p className="mt-3 text-lg text-accent-500">Let's engineer yours.</p>
      <div className="mt-10">
        <Button variant="primary">{ctaLabel}</Button>
      </div>
    </section>
  );
}
