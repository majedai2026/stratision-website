import { SectionHeader, Timeline } from '../ui';

const STAGES = [
  { label: 'Discover', detail: "We start by understanding your business, not by pitching a tool." },
  { label: 'Diagnose', detail: "We tell you what's worth fixing first — and what isn't worth fixing at all." },
  { label: 'Architect', detail: 'A plan built around your operations, your team, and your constraints.' },
  { label: 'Deliver', detail: 'Implementation handled end-to-end, with clear milestones throughout.' },
  { label: 'Adopt', detail: "The project isn't finished when it's built — it's finished when your team relies on it." },
  { label: 'Optimise', detail: 'Every engagement ends with a clear view of what to do next.' },
];

/**
 * Section 04. Internal 8-stage Consultancy Methodology collapsed to 6
 * client-facing stages — full detail stays in the Company Bible, not here.
 * No trademark symbol on "Consultancy Methodology" per the 2-mark cap.
 */
export function Methodology() {
  return (
    <section id="methodology" className="bg-white px-6 py-16 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeader
          eyebrow="How we work"
          headline="Great outcomes aren't accidental. They're engineered."
          supporting="Every engagement follows a proven methodology designed to reduce risk, accelerate adoption and deliver measurable business value."
        />
        <Timeline stages={STAGES} />
      </div>
    </section>
  );
}
