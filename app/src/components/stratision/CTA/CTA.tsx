/**
 * Section 11 — Production Pass 3. Faithful port of the approved HTML lab
 * (v6). Exact locked headline, echoing Methodology's "engineered outcomes"
 * line as originally designed. Copy unchanged.
 */
interface CTAProps {
  ctaContext?: 'general' | 'workforce-intelligence';
}

export function CTA({ ctaContext = 'general' }: CTAProps) {
  const ctaLabel =
    ctaContext === 'workforce-intelligence'
      ? 'Book a Workforce Intelligence Strategy Session'
      : 'Book an AI Strategy Session';

  return (
    <section className="bg-deep-blue px-6 py-24 text-center text-white lg:px-20 lg:py-[180px]">
      <h2 className="font-serif max-w-[640px] mx-auto text-3xl font-normal leading-[1.25] lg:text-5xl">
        Great outcomes don't happen by accident.
      </h2>
      <p className="font-serif mt-4 text-lg italic font-light text-accent-300 lg:mt-5 lg:text-xl">
        Let's engineer yours.
      </p>
      <a
        href="#"
        className="mt-10 inline-block rounded-md bg-accent-500 px-7 py-3.5 text-sm font-medium text-white hover:bg-accent-600 lg:mt-11"
      >
        {ctaLabel}
      </a>
    </section>
  );
}
