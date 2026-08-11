import { SectionHeader } from '../ui';

/**
 * Section 09. Rewritten from a generic "Why us" feature list into philosophy
 * statements pulled from the Company Bible's operating principles, per
 * Brand Book Section 12 (The Stratision Test) — this is the section that
 * should feel most distinctly Stratision. Keep this wording in sync with the
 * Company Bible if either changes; consistency between internal docs and
 * public copy matters more here than anywhere else on the site.
 */
const PRINCIPLES = [
  'We diagnose before we recommend.',
  "We simplify complexity — we don't add to it.",
  'We build for adoption, not just deployment.',
  'We measure outcomes, not activity.',
  'We protect long-term trust over short-term revenue.',
];

export function WhyStratision() {
  return (
    <section id="why-stratision" className="bg-graphite px-6 py-16 text-white lg:px-20 lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeader dark headline="Our principles never change." />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PRINCIPLES.map((principle) => (
            <li key={principle} className="border-l-2 border-accent-500 py-1 pl-4 text-base text-accent-200">
              {principle}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
