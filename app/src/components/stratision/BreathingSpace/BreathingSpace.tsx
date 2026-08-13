/**
 * Section 05b — Production Pass 3. Faithful port of the approved HTML lab
 * (v6): deliberately the sparsest section on the page — 220px vertical
 * padding on desktop, nothing but the statement and a small tag line. This
 * is the ONLY full-weight appearance of the signature belief statement;
 * Why AI Fails carries a subordinate, smaller version. Copy unchanged.
 */
export function BreathingSpace() {
  return (
    <section className="bg-deep-blue px-6 py-28 text-center text-white lg:px-20 lg:py-[220px]">
      <p className="font-serif mx-auto max-w-[680px] text-2xl font-light italic leading-[1.5] text-[#f2f4f6] lg:text-[34px]">
        Businesses don't fail with AI because the technology isn't ready.
        <br />
        They fail because they implement tools before understanding the business problem.
      </p>
      <p className="mt-7 text-[13px] tracking-wide text-accent-300 lg:mt-8">
        Every transformation begins with understanding.
      </p>
    </section>
  );
}
