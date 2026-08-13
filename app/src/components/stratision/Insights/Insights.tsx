/**
 * QA FIX: breakpoint architecture corrected. Featured article drops to
 * single column at exactly 1024px (was previously only breaking at the
 * default `lg:` boundary via a different mechanism), and the supporting
 * grid changes from 3 columns → 2 columns (tablet) → 1 column (mobile) —
 * a genuine 3-state step matching the master, replacing the earlier
 * `sm:grid-cols-3` approximation.
 */
const FEATURED = {
  title: 'The Biggest AI Mistakes CEOs Are Making',
  excerpt: 'Why the most common AI investments fail to move the numbers leadership actually cares about.',
  href: '/insights/biggest-ai-mistakes-ceos-are-making',
};

const REST = [
  { title: 'How Estate Agencies Can Save 20 Hours a Week', excerpt: 'A practical breakdown of where automation creates real time savings in property services.', href: '/insights/estate-agencies-save-20-hours-a-week' },
  { title: 'Where AI Delivers ROI First', excerpt: 'Not every AI investment pays back at the same speed. Here is where it actually does.', href: '/insights/where-ai-delivers-roi-first' },
  { title: 'Why Most AI Projects Fail — And What We Do Differently', excerpt: "Understanding the business problem first is the real reason, not \"the technology isn't ready.\"", href: '/insights/why-most-ai-projects-fail' },
];

export function Insights() {
  return (
    <section id="insights" className="bg-off-white px-6 py-16 lg:px-20 lg:py-28">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-14 flex items-baseline justify-between">
          <h2 className="font-serif text-[34px] font-normal text-near-black max-[680px]:text-[26px]">Executive Insights</h2>
          <span className="text-xs tracking-wide text-accent-300 max-[680px]:hidden">01 — 04</span>
        </div>

        <a
          href={FEATURED.href}
          className="group mb-12 grid grid-cols-[2fr_1fr] items-end gap-12 border-b border-black/10 pb-12 max-[1024px]:grid-cols-1"
        >
          <div>
            <p className="mb-4 text-[11px] uppercase tracking-eyebrow text-accent-300">Featured</p>
            <h3 className="font-serif text-[42px] font-normal leading-[1.15] text-near-black group-hover:text-accent-500 max-[680px]:text-[28px]">
              {FEATURED.title}
            </h3>
          </div>
          <p className="text-[15px] leading-body text-[#4A5A6C]">{FEATURED.excerpt}</p>
        </a>

        <div className="grid grid-cols-3 gap-12 min-[681px]:max-[1024px]:grid-cols-2 max-[680px]:grid-cols-1">
          {REST.map((article, i) => (
            <a key={article.href} href={article.href} className="group flex flex-col gap-2.5">
              <span className="text-[11px] tracking-wide text-accent-300">{String(i + 2).padStart(2, '0')}</span>
              <h3 className="font-serif text-[19px] font-medium leading-[1.3] text-near-black group-hover:text-accent-500">
                {article.title}
              </h3>
              <p className="text-[13px] leading-[1.5] text-[#4A5A6C]">{article.excerpt}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
