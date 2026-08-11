import { SectionHeader, StoryCard } from '../ui';

/**
 * Section 08. "Illustrative Engagement" — renamed from "Transformation
 * Stories" for honesty, per Homepage Copy Draft. Launches with exactly ONE
 * anonymised pilot/demo, never multiple placeholder cards. Replace this
 * single entry with real case studies as they become available — do not
 * add more illustrative cards to fill space.
 */
export function Stories() {
  return (
    <section className="bg-white px-6 py-16 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeader headline="What an engagement actually looks like." />
        <StoryCard
          challenge="A mid-sized professional services firm was losing an estimated 15 hours a week to manual client intake and follow-up."
          approach="Discovery and diagnosis identified intake as the highest-leverage, lowest-effort opportunity."
          solution="An AI Receptionist and workflow automation handled intake, qualification, and follow-up scheduling."
          outcome="reduction in manual admin time within the first month of adoption."
          outcomeStat="~40%"
          indicative
        />
      </div>
    </section>
  );
}
