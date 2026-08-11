import { useState } from 'react';

interface Industry {
  name: string;
  problem: string;
  approach: string;
  outcome: string;
}

interface IndustrySelectorProps {
  industries: Industry[];
}

/**
 * Pass 1: accessible tab interface (real <button role="tab">, keyboard
 * navigable, content swaps on click). This is the honest, functional version
 * of what CustomAI Studio's sticky-scroll section does — Pass 3 upgrades the
 * interaction to scroll-pinned per Design System Section 19, but the content
 * and accessibility contract stay identical.
 */
export function IndustrySelector({ industries }: IndustrySelectorProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = industries[activeIndex];

  return (
    <div>
      <div role="tablist" aria-label="Industries" className="flex flex-wrap gap-2 border-b border-soft-grey">
        {industries.map((industry, i) => (
          <button
            key={industry.name}
            role="tab"
            aria-selected={i === activeIndex}
            aria-controls={`industry-panel-${i}`}
            id={`industry-tab-${i}`}
            onClick={() => setActiveIndex(i)}
            className={`px-4 py-3 text-sm font-medium transition-colors duration-[120ms]
              ${i === activeIndex
                ? 'border-b-2 border-accent-500 text-near-black'
                : 'text-accent-300 hover:text-accent-500'}`}
          >
            {industry.name}
          </button>
        ))}
      </div>
      <div
        role="tabpanel"
        id={`industry-panel-${activeIndex}`}
        aria-labelledby={`industry-tab-${activeIndex}`}
        className="grid gap-6 py-8 sm:grid-cols-3"
      >
        <div>
          <p className="mb-1 text-xs font-bold uppercase tracking-eyebrow text-accent-500">Problem</p>
          <p className="text-sm leading-body text-near-black">{active.problem}</p>
        </div>
        <div>
          <p className="mb-1 text-xs font-bold uppercase tracking-eyebrow text-accent-500">Approach</p>
          <p className="text-sm leading-body text-near-black">{active.approach}</p>
        </div>
        <div>
          <p className="mb-1 text-xs font-bold uppercase tracking-eyebrow text-accent-500">
            Illustrative Outcome
          </p>
          <p className="text-sm leading-body text-near-black">{active.outcome}</p>
        </div>
      </div>
    </div>
  );
}
