/**
 * Motion Phase 1 — Hero. Approved concept: quiet precision-drawing lines
 * (NOT a full website grid), one blue axis line with tick marks acting as
 * a measurement reference rather than decoration. CSS/React motion only —
 * no GSAP dependency here, per the explicit "Hero shouldn't need the whole
 * animation library" decision. Headline/copy/CTA structure and the
 * existing strat-hero-line reveal classes are unchanged.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-deep-blue px-6 pb-0 pt-16 lg:px-20">
      {/* Precision lines — sparse, varied length, asymmetric. Not a grid. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-[12%] top-[15%] h-[180px] w-px bg-accent-300 opacity-[0.14]" />
        <div className="absolute left-[12%] top-[15%] h-px w-[120px] bg-accent-300 opacity-[0.14]" />
        <div className="absolute bottom-[10%] right-[8%] h-[90px] w-px bg-accent-300 opacity-[0.14]" />

        {/* The single blue axis — a measurement line, not an effect */}
        <div className="absolute left-[9%] top-[8%] h-[280px] w-px bg-accent-500 opacity-70" />
        <div className="absolute left-[6%] top-[8%] h-px w-1.5 bg-accent-500 opacity-70" />
        <div className="absolute left-[6%] top-[calc(8%+280px)] h-px w-1.5 bg-accent-500 opacity-70" />
      </div>

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 gap-8 border-b border-white/[0.08] pb-16 lg:grid-cols-[280px_1fr] lg:gap-16 lg:pb-28">
        <div className="strat-hero-line strat-hero-line-1 flex flex-col justify-between pt-0 lg:pt-3">
          <p className="text-xs font-semibold uppercase tracking-eyebrow text-accent-300 lg:leading-loose">
            Strategy
            <br className="hidden lg:block" />
            <span className="lg:hidden">&nbsp;·&nbsp;</span>
            Vision
            <br className="hidden lg:block" />
            <span className="lg:hidden">&nbsp;·&nbsp;</span>
            Intelligence
          </p>
          <p className="font-serif mt-6 text-base font-light italic leading-relaxed text-accent-300 lg:mt-56 lg:text-[19px]">
            Built for leadership teams serious about long-term operational transformation —
            not short-term automation.
          </p>
        </div>

        <div>
          <h1 className="font-serif strat-hero-line strat-hero-line-2 text-[34px] font-normal leading-[1.15] text-white lg:text-[66px]">
            The future won't replace businesses.
            <br />
            <span className="italic font-light text-accent-200">Businesses using AI will.</span>
          </h1>

          <p className="strat-hero-line strat-hero-sub mt-7 max-w-[460px] text-base leading-body text-accent-200 lg:mt-8 lg:text-lg">
            Stratision helps organisations identify, prioritise and implement practical AI
            solutions that deliver measurable business value.
          </p>

          <div className="strat-hero-line strat-hero-cta mt-8 flex flex-wrap items-center gap-7">
            <a
              href="#"
              className="inline-block rounded-md bg-accent-500 px-7 py-3.5 text-sm font-medium text-white hover:bg-accent-600"
            >
              Book an AI Strategy Session
            </a>
            <a
              href="#methodology"
              className="text-sm font-medium text-white underline decoration-accent-300 decoration-1 underline-offset-4 hover:text-accent-200"
            >
              Explore Our Method →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
