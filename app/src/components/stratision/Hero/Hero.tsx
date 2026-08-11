import { Button } from '../ui';

/**
 * Section 01 (Hero) + 01b (Trust Bar) from Homepage Copy Draft v1.
 * Pass 1: final layout, no motion. Pass 3 wires the word-stagger reveal
 * (motion.heroReveal from tokens.ts) and the subtle parallax-on-first-scroll.
 */
export function Hero() {
  return (
    <section className="bg-white px-6 pb-20 pt-24 text-center lg:px-20 lg:pt-32">
      <h1 className="mx-auto max-w-4xl text-5xl font-bold leading-display text-near-black lg:text-7xl">
        The future won't replace businesses.
        <br />
        Businesses using AI will.
      </h1>

      <p className="mx-auto mt-6 max-w-xl text-lg leading-body text-[#444444]">
        Stratision helps organisations identify, prioritise and implement practical AI
        solutions that deliver measurable business value.
      </p>

      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <Button variant="primary">Book an AI Strategy Session</Button>
        <a
          href="#methodology"
          className="text-sm font-medium text-near-black underline decoration-accent-500 decoration-1 underline-offset-4 hover:text-accent-500"
        >
          Explore Our Method →
        </a>
      </div>

      {/* 01b — Trust Bar: understated, no logos, signals fit not proof */}
      <p className="mx-auto mt-16 max-w-lg text-sm text-[#777777]">
        Built for leadership teams serious about long-term operational transformation —
        not short-term automation.
      </p>
    </section>
  );
}
