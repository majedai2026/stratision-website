import { useState } from 'react';

interface Industry {
  name: string;
  problem: string;
  approach: string;
  outcome: string;
}

interface IndustrySelectorProps {
  industries: Industry[];
  activeIndex?: number;
  onSelect?: (index: number) => void;
  /** Editorial Intelligence system: Industries now sits on a Deep Blue
   *  panel, not white — this switches text colours accordingly. */
  dark?: boolean;
}

export function IndustrySelector({ industries, activeIndex: controlled, onSelect, dark = false }: IndustrySelectorProps) {
  const [internal, setInternal] = useState(0);
  const activeIndex = controlled ?? internal;
  const active = industries[activeIndex];
  const select = (i: number) => (onSelect ? onSelect(i) : setInternal(i));

  const borderColor = dark ? 'border-white/15' : 'border-soft-grey';
  const activeText = dark ? 'text-white' : 'text-near-black';
  const inactiveText = dark ? 'text-accent-300 hover:text-white' : 'text-accent-300 hover:text-accent-500';
  const bodyText = dark ? 'text-accent-100' : 'text-near-black';

  return (
    <div>
      <div role="tablist" aria-label="Industries" className={`flex flex-wrap gap-1 border-b ${borderColor}`}>
        {industries.map((industry, i) => (
          <button
            key={industry.name}
            role="tab"
            aria-selected={i === activeIndex}
            aria-controls={`industry-panel-${i}`}
            id={`industry-tab-${i}`}
            onClick={() => select(i)}
            className={`flex items-center gap-2 px-5 py-4 text-left text-sm font-medium transition-colors duration-[120ms]
              ${i === activeIndex ? `border-b-2 border-accent-300 ${activeText}` : inactiveText}`}
          >
            <span className="font-serif text-xs text-accent-300">{String(i + 1).padStart(2, '0')}</span>
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
          <p className="mb-2 text-xs font-bold uppercase tracking-eyebrow text-accent-300">The Problem</p>
          <p className={`text-base leading-body ${bodyText}`}>{active.problem}</p>
        </div>
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-eyebrow text-accent-300">The Approach</p>
          <p className={`text-base leading-body ${bodyText}`}>{active.approach}</p>
        </div>
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-eyebrow text-accent-300">Illustrative Outcome</p>
          <p className={`text-base leading-body ${bodyText}`}>{active.outcome}</p>
        </div>
      </div>
    </div>
  );
}
