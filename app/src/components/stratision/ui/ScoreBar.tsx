interface ScoreBarProps {
  label: string;
  score: number; // 0-5
  max?: number;
  illustrative?: boolean;
}

/**
 * Used by the Business Intelligence Score display (Section 04/Assessment) and
 * reusable anywhere a 0-5 maturity rating needs showing. Renders as filled/
 * unfilled squares per the BIA docx template, for visual consistency across
 * the website and the client-facing report.
 */
export function ScoreBar({ label, score, max = 5, illustrative = false }: ScoreBarProps) {
  const clamped = Math.max(0, Math.min(score, max));

  return (
    <div className="flex items-center justify-between border-b border-soft-grey py-3">
      <span className="text-sm text-near-black">{label}</span>
      <div className="flex items-center gap-3">
        <div className="flex gap-1" role="img" aria-label={`${clamped} out of ${max}`}>
          {Array.from({ length: max }).map((_, i) => (
            <span
              key={i}
              className={`h-3 w-3 rounded-sm ${i < clamped ? 'bg-accent-500' : 'bg-soft-grey border border-accent-300'}`}
              aria-hidden="true"
            />
          ))}
        </div>
        {illustrative && <span className="text-xs italic text-accent-300">illustrative</span>}
      </div>
    </div>
  );
}
