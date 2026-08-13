/**
 * Section 09 — Production Pass 3. Faithful port of the approved HTML lab
 * (v6): quiet, centred, dark manifesto — no cards, no icons, no grid.
 * Deliberately the most restrained section on the page besides Breathing
 * Space. Copy unchanged, sourced from the Company Bible's operating
 * principles per Brand Book Section 9.
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
    <section id="why-stratision" className="bg-deep-blue px-6 py-16 text-center text-white lg:px-20 lg:py-28">
      <div className="mx-auto max-w-[1440px]">
        <h2 className="font-serif mb-16 text-2xl font-normal italic lg:mb-[72px] lg:text-4xl">
          "Our principles never change."
        </h2>
        <div className="mx-auto flex max-w-[640px] flex-col gap-7 lg:gap-8">
          {PRINCIPLES.map((principle) => (
            <p key={principle} className="font-serif text-lg font-normal leading-[1.4] text-[#dbe3ea] lg:text-[22px]">
              {principle}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
