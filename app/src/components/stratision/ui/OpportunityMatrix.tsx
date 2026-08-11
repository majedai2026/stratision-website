interface QuadrantContent {
  label: string;
  placeholder: string;
}

interface OpportunityMatrixProps {
  highImpactLowEffort: QuadrantContent;
  highImpactHighEffort: QuadrantContent;
  lowImpactLowEffort: QuadrantContent;
  lowImpactHighEffort: QuadrantContent;
}

/**
 * The Impact vs Effort 2x2 from the Business Intelligence Assessment.
 * Same layout logic as the docx template's table version — kept visually
 * consistent between the website preview and the actual client deliverable.
 */
export function OpportunityMatrix({
  highImpactLowEffort,
  highImpactHighEffort,
  lowImpactLowEffort,
  lowImpactHighEffort,
}: OpportunityMatrixProps) {
  const Quadrant = ({ content }: { content: QuadrantContent }) => (
    <div className="border border-soft-grey p-6">
      <p className="mb-2 text-xs font-bold uppercase tracking-eyebrow text-accent-500">
        {content.label}
      </p>
      <p className="text-sm italic text-accent-300">{content.placeholder}</p>
    </div>
  );

  return (
    <div className="grid grid-cols-[auto_1fr_1fr] gap-px bg-soft-grey">
      <div />
      <div className="bg-graphite p-3 text-center text-xs font-bold uppercase tracking-eyebrow text-white">
        Low Effort
      </div>
      <div className="bg-graphite p-3 text-center text-xs font-bold uppercase tracking-eyebrow text-white">
        High Effort
      </div>

      <div className="flex items-center bg-soft-grey p-3 text-xs font-bold uppercase tracking-eyebrow text-near-black [writing-mode:vertical-rl]">
        High Impact
      </div>
      <Quadrant content={highImpactLowEffort} />
      <Quadrant content={highImpactHighEffort} />

      <div className="flex items-center bg-soft-grey p-3 text-xs font-bold uppercase tracking-eyebrow text-near-black [writing-mode:vertical-rl]">
        Low Impact
      </div>
      <Quadrant content={lowImpactLowEffort} />
      <Quadrant content={lowImpactHighEffort} />
    </div>
  );
}
