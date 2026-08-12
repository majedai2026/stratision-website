import { Button } from '../ui';

/**
 * Section 01 — Editorial Intelligence system (locked). Deep Blue background
 * (was white), Fraunces italic on the second headline line, real Core Belief
 * statement beneath the CTAs (locked copy, no fabricated stat bar). Same
 * exact headline/copy/CTA text as approved — only the visual system changed.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0E1B2E] px-6 pb-24 pt-24 lg:px-20 lg:pt-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.08]">
        <div
          className="absolute right-0 top-[28%] h-px w-[45%] origin-right bg-accent-300"
          style={{ transform: 'rotate(-4deg)' }}
        />
        <div className="absolute right-0 top-[28%] h-px w-[45%] bg-accent-300" />
        <div
          className="absolute right-0 top-[28%] h-px w-[45%] origin-right bg-accent-300"
          style={{ transform: 'rotate(4deg)' }}
        />
      </div>

      <div className="relative mx-auto max-w-4xl">
        <p className="strat-hero-line strat-hero-line-1 mb-7 text-xs font-semibold uppercase tracking-eyebrow text-accent-200">
          Strategy&nbsp;&middot;&nbsp;Vision&nbsp;&middot;&nbsp;Intelligence
        </p>

        <h1 className="font-serif strat-hero-line strat-hero-line-2 text-4xl font-normal leading-[1.12] text-white sm:text-5xl lg:text-6xl">
          The future won't replace businesses.
          <br />
          <span className="italic font-light text-accent-200">Businesses using AI will.</span>
        </h1>

        <p className="strat-hero-line strat-hero-sub mt-7 max-w-xl text-lg leading-body text-accent-200">
          Stratision helps organisations identify, prioritise and implement practical AI
          solutions that deliver measurable business value.
        </p>

        <div className="strat-hero-line strat-hero-cta mt-9 flex flex-wrap items-center gap-7">
          <Button variant="primary">Book an AI Strategy Session</Button>
          <a
            href="#methodology"
            className="text-sm font-medium text-white underline decoration-accent-300 decoration-1 underline-offset-4 hover:text-accent-200"
          >
            Explore Our Method →
          </a>
        </div>

        <p className="font-serif strat-hero-line strat-hero-trust mt-20 max-w-lg text-xl italic font-light leading-snug text-accent-300">
          Built for leadership teams serious about long-term operational transformation —
          not short-term automation.
        </p>
      </div>
    </section>
  );
}
