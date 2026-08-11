import { SectionHeader, InsightCard } from '../ui';

/**
 * Section 10. Section name is still TBD per Homepage Copy Draft ("The
 * Journal" was rejected as overused; candidates: Executive Briefing, Field
 * Notes, Perspectives, The Review). Using "Executive Insights" as the
 * interim heading — update once a final name is chosen; it's a one-line
 * change here, not a restructure.
 *
 * The fourth article intentionally echoes the signature belief statement
 * (third appearance, after WhyAIFails and BreathingSpace) — repetition is
 * the mechanism that makes it recognisable as Stratision's, not decoration.
 */
const ARTICLES = [
  {
    title: 'The Biggest AI Mistakes CEOs Are Making',
    excerpt: 'Why the most common AI investments fail to move the numbers leadership actually cares about.',
    href: '/insights/biggest-ai-mistakes-ceos-are-making',
  },
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
    excerpt: 'Technology isn\'t ready is rarely the real reason. Understanding the business problem first is.',
    href: '/insights/why-most-ai-projects-fail',
  },
];

export function Insights() {
  return (
    <section id="insights" className="bg-white px-6 py-16 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeader headline="Executive Insights" />
        <div>
          {ARTICLES.map((article) => (
            <InsightCard key={article.href} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
}
