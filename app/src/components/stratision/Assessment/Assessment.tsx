import { SectionHeader, ScoreBar, OpportunityMatrix, Card } from '../ui';

const SCORE_ROWS = [
  { label: 'Knowledge Retention', score: 2 },
  { label: 'Process Consistency', score: 3 },
  { label: 'Technology Utilisation', score: 2 },
  { label: 'Decision-Making Visibility', score: 1 },
  { label: 'Operational Efficiency', score: 3 },
];

const DELIVERABLE_CARDS = [
  { title: 'Business Intelligence Score', body: 'Understand your current AI maturity.' },
  { title: 'Opportunity Matrix', body: 'See where AI will create the greatest business value.' },
  { title: 'Transformation Roadmap', body: 'Know exactly what to do first, second and third.' },
  { title: 'Executive Recommendations', body: 'A prioritised action plan for leadership.' },
];

/**
 * Section 05. "This is a diagnostic, not a sales call." Score data below is
 * illustrative — labelled as such per the mandatory trust/legal treatment.
 * Business Intelligence Assessment™ is one of exactly two ™ marks used
 * site-wide (Brand Book Section 11).
 */
export function Assessment() {
  return (
    <section id="assessment" className="bg-soft-grey px-6 py-16 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeader
          headline="The first step isn't a sales call."
          supporting="It's a structured business assessment designed to identify where AI creates measurable value — and where it doesn't. You'll leave with clear priorities, practical recommendations and a roadmap tailored to your business."
        />

        <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {DELIVERABLE_CARDS.map((card) => (
            <Card key={card.title} className="bg-white">
              <h3 className="mb-2 text-sm font-semibold text-near-black">{card.title}</h3>
              <p className="text-sm leading-body text-[#555555]">{card.body}</p>
            </Card>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="bg-white p-8">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-eyebrow text-accent-500">
              Business Intelligence Score
            </h3>
            {SCORE_ROWS.map((row) => (
              <ScoreBar key={row.label} label={row.label} score={row.score} illustrative />
            ))}
          </div>

          <OpportunityMatrix
            highImpactLowEffort={{ label: 'Priority', placeholder: 'Priority findings — act first' }}
            highImpactHighEffort={{ label: 'Strategic', placeholder: 'Strategic bets — plan carefully' }}
            lowImpactLowEffort={{ label: 'Quick Win', placeholder: 'Quick wins — worth doing, not urgent' }}
            lowImpactHighEffort={{ label: 'Deprioritise', placeholder: 'Deprioritise — do not recommend' }}
          />
        </div>
      </div>
    </section>
  );
}
