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
 * Pass 2: visually elevated (larger type, numbered indices, more deliberate
 * spacing) while remaining the same accessible tab interface as Pass 1 —
 * real <button role="tab">, keyboard navigable. The scroll-pinned upgrade
 * (matching CustomAI Studio's sticky-scroll pattern) is Pass 3 motion work,
 * not done here — see Design System Section 19 / motion-rules.md.
 */
export function IndustrySelector({ industries }: IndustrySelectorProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = industries[activeIndex];

  return (
    <div>
      <div role="tablist" aria-label="Industries" className="flex flex-wrap gap-1 border-b border-soft-grey">
        {industries.map((industry, i) => (
          <button
            key={industry.name}
            role="tab"
            aria-selected={i === activeIndex}
            aria-controls={`industry-panel-${i}`}
            id={`industry-tab-${i}`}
            onClick={() => setActiveIndex(i)}
            className={`flex items-center gap-2 px-5 py-4 text-left text-sm font-medium transition-colors duration-[120ms]
              ${i === activeIndex
                ? 'border-b-2 border-accent-500 text-near-black'
                : 'text-accent-300 hover:text-accent-500'}`}
          >
            <span className="text-xs font-bold text-accent-300">{String(i + 1).padStart(2, '0')}</span>
            {industry.name}
          </button>
        ))}
      </div>
      <div
        role="tabpanel"
        id={`industry-panel-${activeIndex}`}
        aria-labelledby={`industry-tab-${activeIndex}`}
        className="grid gap-10 py-12 sm:grid-cols-3"
      >
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-eyebrow text-accent-500">The Problem</p>
          <p className="text-base leading-body text-near-black">{active.problem}</p>
        </div>
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-eyebrow text-accent-500">The Approach</p>
          <p className="text-base leading-body text-near-black">{active.approach}</p>
        </div>
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-eyebrow text-accent-500">
            Illustrative Outcome
          </p>
          <p className="text-base leading-body text-near-black">{active.outcome}</p>
        </div>
      </div>
    </div>
  );
}
