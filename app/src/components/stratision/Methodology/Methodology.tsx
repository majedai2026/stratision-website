import { SectionHeader } from '../ui';

const STAGES = [
  { label: 'Discover', detail: "We start by understanding your business, not by pitching a tool." },
  { label: 'Diagnose', detail: "We tell you what's worth fixing first — and what isn't worth fixing at all." },
  { label: 'Architect', detail: 'A plan built around your operations, your team, and your constraints.' },
  { label: 'Deliver', detail: 'Implementation handled end-to-end, with clear milestones throughout.' },
  { label: 'Adopt', detail: "The project isn't finished when it's built — it's finished when your team relies on it." },
  { label: 'Optimise', detail: 'Every engagement ends with a clear view of what to do next.' },
];

/**
 * Section 04 — Editorial Intelligence system. Same locked copy/structure,
 * restyled as a continuous hairline-divided editorial strip (Fraunces
 * numerals + labels) instead of a small card grid — all six stages remain
 * visible at once, per Majed's explicit decision to keep this non-carousel.
 */
export function Methodology() {
  return (
    <section id="methodology" className="bg-[#F7F5F0] px-6 py-20 lg:px-20 lg:py-28">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeader
          eyebrow="How we work"
          headline="Great outcomes aren't accidental. They're engineered."
          supporting="Every engagement follows a proven methodology designed to reduce risk, accelerate adoption and deliver measurable business value."
        />
        <div className="grid grid-cols-1 gap-px bg-[#14140F]/10 sm:grid-cols-2 lg:grid-cols-6">
          {STAGES.map((stage) => (
            <div key={stage.label} className="bg-[#F7F5F0] pt-8">
              <span className="font-serif mb-14 block text-sm text-accent-500">
                {String(STAGES.indexOf(stage) + 1).padStart(2, '0')}
              </span>
              <h3 className="font-serif mb-2 text-xl font-medium text-near-black">{stage.label}</h3>
              <p className="text-[13px] leading-body text-[#4A5A6C]">{stage.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
