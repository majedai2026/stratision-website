import { SectionHeader, ScoreBar, OpportunityMatrix } from '../ui';

const SCORE_ROWS = [
  { label: 'Knowledge Retention', score: 2 },
  { label: 'Process Consistency', score: 3 },
  { label: 'Technology Utilisation', score: 2 },
  { label: 'Decision-Making Visibility', score: 1 },
  { label: 'Operational Efficiency', score: 3 },
];

const DELIVERABLES = [
  { index: '01', title: 'Business Intelligence Score', body: 'Understand your current AI maturity.' },
  { index: '02', title: 'Opportunity Matrix', body: 'See where AI will create the greatest business value.' },
  { index: '03', title: 'Transformation Roadmap', body: 'Know exactly what to do first, second and third.' },
  { index: '04', title: 'Executive Recommendations', body: 'A prioritised action plan for leadership.' },
];

/**
 * Section 05. Pass 2: restyled to read as an excerpt from a real executive
 * report (document border, "EXHIBIT" framing, near-black headers, numbered
 * deliverables) rather than generic SaaS dashboard cards — matches the
 * visual language already established in the BIA docx template, so the
 * website preview and the actual client deliverable feel like the same
 * artifact rather than two different products.
 */
export function Assessment() {
  return (
    <section id="assessment" className="bg-soft-grey px-6 py-16 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeader
          headline="The first step isn't a sales call."
          supporting="It's a structured business assessment designed to identify where AI creates measurable value — and where it doesn't. You'll leave with clear priorities, practical recommendations and a roadmap tailored to your business."
        />

        {/* Document frame — echoes the BIA docx cover treatment */}
        <div className="border border-accent-300/40 bg-white">
          <div className="flex items-center justify-between border-b border-soft-grey px-8 py-4">
            <span className="text-xs font-bold uppercase tracking-eyebrow text-accent-500">
              Business Intelligence Assessment — Executive Report
            </span>
            <span className="text-xs font-bold uppercase tracking-eyebrow text-[#999999]">
              Sample Exhibit
            </span>
          </div>

          <div className="grid divide-y divide-soft-grey lg:grid-cols-4 lg:divide-x lg:divide-y-0">
            {DELIVERABLES.map((item) => (
              <div key={item.title} className="p-8">
                <span className="text-xs font-bold text-accent-300">{item.index}</span>
                <h3 className="mt-2 mb-2 text-sm font-semibold text-near-black">{item.title}</h3>
                <p className="text-sm leading-body text-[#555555]">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-px bg-soft-grey lg:grid-cols-2">
            <div className="bg-white p-8">
              <h3 className="mb-4 text-xs font-bold uppercase tracking-eyebrow text-accent-500">
                Exhibit A — Business Intelligence Score
              </h3>
              {SCORE_ROWS.map((row) => (
                <ScoreBar key={row.label} label={row.label} score={row.score} illustrative />
              ))}
            </div>

            <div className="bg-white p-8">
              <h3 className="mb-4 text-xs font-bold uppercase tracking-eyebrow text-accent-500">
                Exhibit B — Opportunity Matrix
              </h3>
              <OpportunityMatrix
                highImpactLowEffort={{ label: 'Priority', placeholder: 'Priority findings — act first' }}
                highImpactHighEffort={{ label: 'Strategic', placeholder: 'Strategic bets — plan carefully' }}
                lowImpactLowEffort={{ label: 'Quick Win', placeholder: 'Quick wins — worth doing, not urgent' }}
                lowImpactHighEffort={{ label: 'Deprioritise', placeholder: 'Deprioritise — do not recommend' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
