import { SectionHeader } from '../ui';

const FAILURE_PATH = ['Buy AI', 'Deploy AI', 'Hope for results', 'Low adoption', 'Poor ROI'];
const SUCCESS_PATH = ['Understand', 'Assess', 'Prioritise', 'Implement', 'Optimise'];

function PathRow({ steps, active }: { steps: string[]; active: boolean }) {
  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-3">
      {steps.map((step, i) => (
        <span key={step} className="flex items-center gap-2">
          <span
            className={`rounded-sm px-3 py-1.5 text-sm font-medium ${
              active ? 'bg-accent-500 text-white' : 'bg-soft-grey text-[#777777] line-through'
            }`}
          >
            {step}
          </span>
          {i < steps.length - 1 && <span aria-hidden="true" className="text-accent-300">→</span>}
        </span>
      ))}
    </div>
  );
}

/**
 * Section 03 — the signature belief statement lives here first, then repeats
 * at 05b and again in Insights (10), per the repetition strategy in the
 * Homepage Copy Draft. Do not reword between appearances.
 */
export function WhyAIFails() {
  return (
    <section className="bg-white px-6 py-16 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeader headline="Most companies do this:" />
        <PathRow steps={FAILURE_PATH} active={false} />

        <p className="my-8 text-center text-sm font-medium uppercase tracking-eyebrow text-accent-500">
          Stratision does this instead:
        </p>

        <PathRow steps={SUCCESS_PATH} active />

        <p className="mt-12 text-lg leading-body text-near-black">
          Businesses don't fail with AI because the technology isn't ready. They fail because
          they implement tools before understanding the business problem. We start with the
          problem — every time.
        </p>
      </div>
    </section>
  );
}
