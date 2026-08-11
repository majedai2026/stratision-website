import { Button } from '../ui';

/**
 * Section 01 (Hero) — Pass 3.5. Editorial asymmetric composition, extracted
 * from the 21st.dev "Editorial Hero" (#19075) interaction/composition
 * pattern, fully rebuilt native to this codebase: no framer-motion, no new
 * dependencies. Uses only the existing Pass 3 CSS stagger classes
 * (stratision-motion.css). Copy, CTA, and headline are unchanged from the
 * approved version — only the layout composition changed.
 *
 * Left column: restrained supporting statement (the "editorial tagline").
 * Right column: headline, description, CTAs. Asymmetric 4/8 grid on desktop,
 * stacks to a single column on mobile. Substantial negative space is
 * deliberate — typography carries the section, per Brand Book Section 13.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-20 pt-24 lg:px-20 lg:pt-32">
      {/* Precision line system — evolved: hairlines radiating from a single
          origin at the far right, echoing the Signature Seam. Near-invisible
          (6% opacity), pure CSS, no imagery. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <div className="absolute left-[8%] top-0 h-full w-px bg-accent-500" />
        <div className="absolute right-[8%] top-0 h-full w-px bg-accent-500" />
        <div
          className="absolute right-0 top-[30%] h-px w-[45%] origin-right bg-accent-500"
          style={{ transform: 'rotate(-4deg)' }}
        />
        <div className="absolute right-0 top-[30%] h-px w-[45%] bg-accent-500" />
        <div
          className="absolute right-0 top-[30%] h-px w-[45%] origin-right bg-accent-500"
          style={{ transform: 'rotate(4deg)' }}
        />
      </div>

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
        {/* Left: restrained supporting statement */}
        <div className="strat-hero-line strat-hero-line-1 flex items-end lg:col-span-4">
          <p className="max-w-[220px] text-sm font-semibold uppercase leading-relaxed tracking-eyebrow text-accent-500">
            Practical AI.
            <br />
            Consultant's discipline.
            <br />
            Not a vendor's pitch.
          </p>
        </div>

        {/* Right: headline, copy, CTAs */}
        <div className="flex flex-col items-start lg:col-span-8">
          <h1 className="strat-hero-line strat-hero-line-2 text-4xl font-semibold leading-[1.15] tracking-tight text-near-black sm:text-[2.6rem] lg:text-[3.4rem]">
            The future won't replace businesses.
            <br />
            Businesses using AI will.
          </h1>

          <p className="strat-hero-line strat-hero-sub mt-7 max-w-xl text-lg leading-body text-[#444444]">
            Stratision helps organisations identify, prioritise and implement practical AI
            solutions that deliver measurable business value.
          </p>

          <div className="strat-hero-line strat-hero-cta mt-8 flex flex-wrap items-center gap-6">
            <Button variant="primary">Book an AI Strategy Session</Button>
            <a
              href="#methodology"
              className="text-sm font-medium text-near-black underline decoration-accent-500 decoration-1 underline-offset-4 hover:text-accent-500"
            >
              Explore Our Method →
            </a>
          </div>
        </div>
      </div>

      <div className="strat-hero-line strat-hero-trust relative mx-auto mt-20 flex max-w-lg items-center justify-center gap-3">
        <span aria-hidden="true" className="h-px w-8 bg-accent-500" />
        <p className="text-sm text-[#777777]">
          Built for leadership teams serious about long-term operational transformation —
          not short-term automation.
        </p>
        <span aria-hidden="true" className="h-px w-8 bg-accent-500" />
      </div>
    </section>
  );
}
