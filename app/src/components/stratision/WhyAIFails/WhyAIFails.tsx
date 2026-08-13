/**
 * Section 03 — Production Pass 2. Faithful port of the approved HTML lab
 * (v6): two-column diagnostic LEDGER — no pills, no rounded chips, no
 * arrow-between-badges UI. Dark Deep Blue. The closing statement is
 * deliberately subordinate (small caption, not a manifesto) per the
 * explicit review decision that Breathing Space alone owns the full
 * cinematic treatment of this repeated belief. Copy unchanged.
 */
const ROWS = [
  { fail: 'Buy AI', success: 'Understand' },
  { fail: 'Deploy AI', success: 'Assess' },
  { fail: 'Hope for results', success: 'Prioritise' },
  { fail: 'Low adoption', success: 'Implement' },
  { fail: 'Poor ROI', success: 'Optimise' },
];

export function WhyAIFails() {
  return (
    <section className="bg-deep-blue px-6 py-16 text-white lg:px-20 lg:py-28">
      <div className="mx-auto max-w-[820px]">
        <h2 className="font-serif mb-14 text-center text-[26px] font-normal lg:text-[34px]">
          Most companies do this:
        </h2>

        <div className="mx-auto max-w-[760px] border-t border-white/15">
          <div className="hidden grid-cols-[1fr_60px_1fr] pb-3.5 lg:grid">
            <span className="text-right text-[11px] uppercase tracking-eyebrow text-accent-300">The common path</span>
            <span />
            <span className="text-[11px] uppercase tracking-eyebrow text-accent-300">The Stratision path</span>
          </div>

          {ROWS.map((row) => (
            <div
              key={row.fail}
              className="grid grid-cols-1 gap-1 border-b border-white/10 py-3 lg:grid-cols-[1fr_60px_1fr] lg:items-center lg:gap-0 lg:py-[18px]"
            >
              <span className="text-[13px] text-[#5C6B7E] lg:text-right lg:text-[15px]">{row.fail}</span>
              <span className="hidden text-center text-[11px] text-accent-300 lg:block">→</span>
              <span className="text-[15px] font-medium text-white">{row.success}</span>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-[520px] text-center text-sm leading-[1.7] text-accent-300">
          Businesses don't fail with AI because the technology isn't ready. They fail because
          they implement tools before understanding the business problem. We start with the
          problem — every time.
        </p>
      </div>
    </section>
  );
}
