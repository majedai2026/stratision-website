import { useState } from 'react';

interface Industry {
  name: string;
  problem: string;
  approach: string;
  outcome: string;
}

interface IndustrySelectorProps {
  industries: Industry[];
  /** Controlled mode — when provided, the scroll-pin (or any parent) drives
   *  the active tab; clicks call onSelect instead of internal state. */
  activeIndex?: number;
  onSelect?: (index: number) => void;
}

/**
 * Pass 3: supports controlled mode so the scroll-pinned Industries section
 * can drive the active tab from scroll position while tabs stay clickable
 * and keyboard-navigable. Uncontrolled behaviour (own state) is unchanged
 * for any other usage.
 */
export function IndustrySelector({ industries, activeIndex: controlled, onSelect }: IndustrySelectorProps) {
  const [internal, setInternal] = useState(0);
  const activeIndex = controlled ?? internal;
  const active = industries[activeIndex];
  const select = (i: number) => (onSelect ? onSelect(i) : setInternal(i));

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
            onClick={() => select(i)}
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
