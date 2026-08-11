interface StoryCardProps {
  challenge: string;
  approach: string;
  solution: string;
  outcome: string;
  outcomeStat?: string;
  /** Every story on the website is illustrative until real case studies exist.
   *  This badge is mandatory, not optional — see Brand Book Do's & Don'ts. */
  indicative?: boolean;
}

export function StoryCard({
  challenge,
  approach,
  solution,
  outcome,
  outcomeStat,
  indicative = true,
}: StoryCardProps) {
  return (
    <div className="relative border border-soft-grey p-8">
      {indicative && (
        <span className="absolute right-6 top-6 rounded-sm border border-accent-300 px-2 py-1 text-xs font-bold uppercase tracking-eyebrow text-accent-500">
          Indicative Example
        </span>
      )}
      <div className="grid gap-6 sm:grid-cols-4">
        <div>
          <p className="mb-1 text-xs font-bold uppercase tracking-eyebrow text-accent-500">Challenge</p>
          <p className="text-sm leading-body text-near-black">{challenge}</p>
        </div>
        <div>
          <p className="mb-1 text-xs font-bold uppercase tracking-eyebrow text-accent-500">Approach</p>
          <p className="text-sm leading-body text-near-black">{approach}</p>
        </div>
        <div>
          <p className="mb-1 text-xs font-bold uppercase tracking-eyebrow text-accent-500">Solution</p>
          <p className="text-sm leading-body text-near-black">{solution}</p>
        </div>
        <div>
          <p className="mb-1 text-xs font-bold uppercase tracking-eyebrow text-accent-500">
            Business Outcome
          </p>
          {outcomeStat && (
            <p className="text-2xl font-bold text-near-black">{outcomeStat}</p>
          )}
          <p className="text-sm leading-body text-near-black">{outcome}</p>
        </div>
      </div>
    </div>
  );
}
