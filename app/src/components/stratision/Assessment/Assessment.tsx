/**
 * Section 05 — Production Pass 2. Faithful port of the approved HTML lab
 * (v6): bordered white document frame on Off-White, retaining the
 * executive-report treatment exactly. Deliberately kept distinct from
 * Stories (Pass 3) per the review — this stays a "document," Stories
 * becomes a "spread." Score data remains illustrative and labelled.
 * Copy unchanged.
 */
const SCORE_ROWS = [
  { label: 'Knowledge Retention', score: 2 },
  { label: 'Process Consistency', score: 3 },
  { label: 'Technology Utilisation', score: 2 },
  { label: 'Decision-Making Visibility', score: 1 },
];

function ScoreDots({ score, max = 5 }: { score: number; max?: number }) {
  return (
    <span className="flex gap-1">
      {Array.from({ length: max }).map((_, i) => (
        <span
          key={i}
          className={`h-[9px] w-[9px] rounded-sm ${i < score ? 'bg-accent-500' : 'bg-[#e0e0e0]'}`}
        />
      ))}
    </span>
  );
}

export function Assessment() {
  return (
    <section id="assessment" className="bg-off-white px-6 pb-16 lg:px-20 lg:pb-28">
      <div className="mx-auto max-w-[1440px]">
        <div className="border border-black/15 bg-white">
          <div className="flex flex-col gap-2.5 border-b border-black/10 px-6 py-6 lg:flex-row lg:items-baseline lg:justify-between lg:px-12 lg:py-9">
            <div>
              <span className="text-[11px] uppercase tracking-eyebrow text-[#7C8A9A]">
                Business Intelligence Assessment™ — Executive Report
              </span>
              <h2 className="font-serif mt-2 text-2xl font-normal text-near-black lg:text-[32px]">
                The first step isn't a sales call.
              </h2>
            </div>
            <span className="text-[11px] uppercase tracking-eyebrow text-[#7C8A9A]">Sample Exhibit</span>
          </div>

          <div className="grid grid-cols-1 gap-9 px-6 py-6 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-12">
            <div>
              <p className="text-base leading-[1.7] text-[#333]">
                It's a structured business assessment designed to identify where AI creates
                measurable value — and where it doesn't. You'll leave with clear priorities,
                practical recommendations and a roadmap tailored to your business.
              </p>
              <a
                href="#"
                className="mt-6 inline-block text-sm text-near-black underline decoration-accent-500 decoration-1 underline-offset-4"
              >
                Learn about the Assessment →
              </a>
            </div>
            <div>
              <p className="mb-5 text-[11px] uppercase tracking-eyebrow text-accent-500">
                Exhibit A — Business Intelligence Score
              </p>
              {SCORE_ROWS.map((row) => (
                <div key={row.label} className="flex items-center justify-between border-b border-black/[0.08] py-3 text-sm">
                  <span>{row.label}</span>
                  <ScoreDots score={row.score} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
