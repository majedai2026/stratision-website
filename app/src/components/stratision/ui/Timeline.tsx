interface TimelineStage {
  label: string;
  detail: string;
}

interface TimelineProps {
  stages: TimelineStage[];
  activeIndex?: number;
}

/**
 * Horizontal stage progression — used by Methodology (6 client-facing stages)
 * and reusable for any future step-based process. Pass 1: static grid layout,
 * all stages visible with the detail line shown beneath each (not hidden
 * behind hover, since Pass 1 has no motion). Pass 3 wires the scroll-linked
 * sticky/pinned reveal per Design System Section 8.
 */
export function Timeline({ stages, activeIndex }: TimelineProps) {
  return (
    <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6" role="list">
      {stages.map((stage, i) => {
        const isActive = activeIndex === i;
        return (
          <li key={stage.label} className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold
                  ${isActive ? 'bg-accent-500 text-white' : 'bg-soft-grey text-accent-300'}`}
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <span className="text-sm font-medium text-near-black">{stage.label}</span>
            </div>
            <p className="text-xs leading-body text-[#666666]">{stage.detail}</p>
          </li>
        );
      })}
    </ol>
  );
}
