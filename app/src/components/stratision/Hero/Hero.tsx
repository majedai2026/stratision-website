/**
 * Production QA fix. Restores the approved staggered entrance animation
 * (stratision-motion.css classes, already shipped in an earlier pass) onto
 * the asymmetric layout — this was dropped when Hero was rebuilt for the
 * Editorial Intelligence composition and never re-added. Layout, copy, and
 * structure are otherwise UNCHANGED from the approved version.
 * Respects prefers-reduced-motion via the existing global CSS rule in
 * stratision-motion.css (.strat-hero-line { animation: none; opacity: 1; }
 * under the @media (prefers-reduced-motion: reduce) block) — no new logic
 * needed here since that guard already applies to any element using these
 * classes; this component just needed to use them again.
 */
export function Hero() {
  return (
    <section className="bg-deep-blue px-6 pb-0 pt-16 lg:px-20">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-8 border-b border-white/[0.08] pb-16 lg:grid-cols-[280px_1fr] lg:gap-16 lg:pb-28">
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
          <h1 className="strat-hero-line strat-hero-line-2 font-serif text-[34px] font-normal leading-[1.15] text-white lg:text-[66px]">
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
