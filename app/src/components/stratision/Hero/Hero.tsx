import { Button } from '../ui';

/**
 * Section 01 (Hero) + 01b (Trust Bar). Pass 2: restrained geometric accent
 * using the Signature Seam motif (thin precision lines), not generic AI
 * imagery — per Brand Book Section 17 (no robots/circuits/glowing dashboards)
 * and the explicit "systems thinking, not AI illustration" direction.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-20 pt-24 text-center lg:px-20 lg:pt-32">
      {/* Precision line accents — pure CSS, no imagery, echoes the Signature Seam */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <div className="absolute left-[8%] top-0 h-full w-px bg-accent-500" />
        <div className="absolute right-[8%] top-0 h-full w-px bg-accent-500" />
        <div className="absolute left-0 top-1/2 h-px w-full bg-accent-500" />
      </div>

      <div className="relative">
        <h1 className="mx-auto max-w-4xl text-5xl font-bold leading-display text-near-black lg:text-7xl">
          <span className="strat-hero-line strat-hero-line-1 block">
            The future won't replace businesses.
          </span>
          <span className="strat-hero-line strat-hero-line-2 block">
            Businesses using AI will.
          </span>
        </h1>

        <p className="strat-hero-line strat-hero-sub mx-auto mt-6 max-w-xl text-lg leading-body text-[#444444]">
          Stratision helps organisations identify, prioritise and implement practical AI
          solutions that deliver measurable business value.
        </p>

        <div className="strat-hero-line strat-hero-cta mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button variant="primary">Book an AI Strategy Session</Button>
          <a
            href="#methodology"
            className="text-sm font-medium text-near-black underline decoration-accent-500 decoration-1 underline-offset-4 hover:text-accent-500"
          >
            Explore Our Method →
          </a>
        </div>

        <div className="strat-hero-line strat-hero-trust mx-auto mt-16 flex max-w-lg items-center justify-center gap-3">
          <span aria-hidden="true" className="h-px w-8 bg-accent-500" />
          <p className="text-sm text-[#777777]">
            Built for leadership teams serious about long-term operational transformation —
            not short-term automation.
          </p>
          <span aria-hidden="true" className="h-px w-8 bg-accent-500" />
        </div>
      </div>
    </section>
  );
}
