import { useState } from 'react';
import { SectionHeader } from '../ui';

const OUTCOMES = [
  {
    title: 'Increase Revenue',
    hook: 'Stop losing opportunities to slow response times.',
    services: ['AI Receptionist', 'Sales Automation'],
  },
  {
    title: 'Improve Productivity',
    hook: 'Give your team back the hours lost to repetitive work.',
    services: ['Workflow Automation', 'AI Assistants'],
  },
  {
    title: 'Protect Knowledge',
    hook: "Make sure what your business knows doesn't walk out the door.",
    services: ['Workforce Intelligence Platform™'],
  },
  {
    title: 'Improve Customer Experience',
    hook: 'Answer faster, more consistently, without adding headcount.',
    services: ['Customer Support AI', 'Knowledge Assistants'],
  },
  {
    title: 'Better Decision Making',
    hook: "See what's actually happening in your business, not what you assume is happening.",
    services: ['Executive dashboards and reporting'],
  },
];

/**
 * Section 06. Grouped by business outcome, not product name — executives
 * think in outcomes. Accordion expands in place (not a modal), reinforcing
 * "everything connects" per Homepage Copy Draft motion notes.
 */
export function Solutions() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="solutions" className="bg-white px-6 py-16 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeader headline="The outcomes that matter most." />
        <div className="divide-y divide-soft-grey border-y border-soft-grey">
          {OUTCOMES.map((outcome, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={outcome.title}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`outcome-panel-${i}`}
                  className="flex w-full items-center justify-between py-6 text-left"
                >
                  <span>
                    <span className="block text-xl font-semibold text-near-black">{outcome.title}</span>
                    <span className="mt-1 block text-sm text-[#666666]">{outcome.hook}</span>
                  </span>
                  <span aria-hidden="true" className="text-accent-500">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && (
                  <div id={`outcome-panel-${i}`} className="flex flex-wrap items-center gap-3 pb-6 pl-1">
                    <span aria-hidden="true" className="h-px w-6 bg-accent-500" />
                    {outcome.services.map((service, si) => (
                      <span key={service} className="flex items-center gap-3">
                        {si > 0 && <span aria-hidden="true" className="h-px w-3 bg-accent-300" />}
                        <span className="rounded-sm border border-accent-300 px-3 py-1.5 text-sm text-accent-500">
                          {service}
                        </span>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
