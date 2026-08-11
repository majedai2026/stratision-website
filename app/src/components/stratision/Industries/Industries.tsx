import { SectionHeader, IndustrySelector } from '../ui';

/**
 * Section 07. Launching with 3 industries only (not 7) — the remaining four
 * (Automotive, Enterprise, Hospitality, Real Estate) stay in the Idea Vault
 * until they have equivalent documented ideal-client detail. Ordered to lead
 * with Training & Workforce Development, the Workforce Intelligence
 * Platform™ differentiator, per the "own your hero product" direction.
 */
const INDUSTRIES = [
  {
    name: 'Training & Workforce Development',
    problem: 'Training investment doesn\'t translate into lasting capability — knowledge fades within weeks.',
    approach: 'The Workforce Intelligence Platform™ makes what your organisation knows permanently accessible.',
    outcome: 'A workforce that retains and applies what it learns, not just completes courses.',
  },
  {
    name: 'Professional Services',
    problem: 'Billable hours lost to manual admin and inconsistent client communication.',
    approach: 'Workflow automation and AI assistants handle the repetitive work.',
    outcome: 'More time for the work that actually needs a professional.',
  },
  {
    name: 'Recruitment',
    problem: 'High enquiry volume, slow response times, opportunities lost to competitors.',
    approach: 'AI Receptionist and CRM automation ensure every enquiry gets a fast, consistent response.',
    outcome: 'Faster response times without adding headcount.',
  },
];

export function Industries() {
  return (
    <section id="industries" className="bg-soft-grey px-6 py-16 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeader headline="Built around how your industry actually works." />
        <div className="bg-white p-2">
          <IndustrySelector industries={INDUSTRIES} />
        </div>
      </div>
    </section>
  );
}
