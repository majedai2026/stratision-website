import { SectionHeader } from '../ui';

const FEATURED = {
  title: 'The Biggest AI Mistakes CEOs Are Making',
  excerpt: 'Why the most common AI investments fail to move the numbers leadership actually cares about.',
  href: '/insights/biggest-ai-mistakes-ceos-are-making',
};

const REST = [
  {
    title: 'How Estate Agencies Can Save 20 Hours a Week',
    excerpt: 'A practical breakdown of where automation creates real time savings in property services.',
    href: '/insights/estate-agencies-save-20-hours-a-week',
  },
  {
    title: 'Where AI Delivers ROI First',
    excerpt: 'Not every AI investment pays back at the same speed. Here is where it actually does.',
    href: '/insights/where-ai-delivers-roi-first',
  },
  {
    title: 'Why Most AI Projects Fail — And What We Do Differently',
    excerpt: "Technology isn't ready is rarely the real reason. Understanding the business problem first is.",
    href: '/insights/why-most-ai-projects-fail',
  },
];

const TOTAL = REST.length + 1;

/**
 * Section 10. Pass 2: editorial layout — one large featured piece, numbered
 * "01 / 04" style indices instead of a flat article list, per the "executive
 * publication, not a blog" positioning. Section name remains "Executive
 * Insights" as interim (see component-library.md — final name still TBD).
 */
export function Insights() {
  return (
    <section id="insights" className="bg-white px-6 py-16 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeader headline="Executive Insights" />

        <a href={FEATURED.href} className="group mb-12 block border-b border-soft-grey pb-12">
          <div className="flex items-baseline gap-4">
            <span className="text-xs font-bold text-accent-300">01 / {String(TOTAL).padStart(2, '0')}</span>
            <span className="text-xs font-bold uppercase tracking-eyebrow text-accent-500">Featured</span>
          </div>
          <h3 className="mt-4 max-w-2xl text-4xl font-bold leading-display text-near-black group-hover:text-accent-500">
            {FEATURED.title}
          </h3>
          <p className="mt-4 max-w-xl text-base leading-body text-[#555555]">{FEATURED.excerpt}</p>
        </a>

        <div className="grid gap-8 sm:grid-cols-3">
          {REST.map((article, i) => (
            <a key={article.href} href={article.href} className="group flex flex-col gap-3">
              <span className="text-xs font-bold text-accent-300">
                {String(i + 2).padStart(2, '0')} / {String(TOTAL).padStart(2, '0')}
              </span>
              <h3 className="text-lg font-semibold leading-display text-near-black group-hover:text-accent-500">
                {article.title}
              </h3>
              <p className="text-sm leading-body text-[#666666]">{article.excerpt}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
