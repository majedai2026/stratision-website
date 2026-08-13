/**
 * QA FIX: breakpoint architecture corrected. Sticky positioning on the stat
 * block correctly drops at exactly 1024px (matches lab's `position:static`
 * tablet override), and the stat font-size now steps through three states
 * (110px → 80px → 56px) instead of a single desktop/mobile split.
 */
export function Stories() {
  return (
    <section className="bg-off-white px-6 py-16 lg:px-20 lg:py-28">
      <div className="mx-auto max-w-[1440px]">
        <p className="mb-10 text-xs font-bold uppercase tracking-eyebrow text-accent-500 lg:mb-0">
          Illustrative Engagement
        </p>

        <div className="grid grid-cols-[1fr_1.4fr] gap-16 max-[1024px]:grid-cols-1 max-[1024px]:gap-10">
          <div className="sticky top-32 self-start max-[1024px]:static">
            <div className="font-serif text-[110px] font-light leading-[0.9] text-accent-500
              min-[681px]:max-[1024px]:text-[80px] max-[680px]:text-[56px]">
              ~40%
            </div>
            <p className="mt-6 max-w-[260px] text-sm leading-[1.5] text-[#4A5A6C]">
              Reduction in manual admin time within the first month of adoption.{' '}
              <em className="italic">(Indicative example.)</em>
            </p>
          </div>

          <div>
            <h2 className="font-serif mb-9 max-w-[520px] text-4xl font-normal leading-[1.25] text-near-black max-[680px]:text-[26px]">
              What an engagement actually looks like.
            </h2>

            <div className="mb-7 border-b border-black/[0.08] pb-7">
              <p className="mb-2 text-[11px] font-bold uppercase tracking-eyebrow text-accent-500">Challenge</p>
              <p className="max-w-[480px] text-[15px] leading-[1.65] text-[#333]">
                A mid-sized professional services firm was losing an estimated 15 hours a week
                to manual client intake and follow-up.
              </p>
            </div>
            <div className="mb-7 border-b border-black/[0.08] pb-7">
              <p className="mb-2 text-[11px] font-bold uppercase tracking-eyebrow text-accent-500">Approach</p>
              <p className="max-w-[480px] text-[15px] leading-[1.65] text-[#333]">
                Discovery and diagnosis identified intake as the highest-leverage, lowest-effort
                opportunity.
              </p>
            </div>
            <div className="mb-7 border-b border-black/[0.08] pb-7">
              <p className="mb-2 text-[11px] font-bold uppercase tracking-eyebrow text-accent-500">Solution</p>
              <p className="max-w-[480px] text-[15px] leading-[1.65] text-[#333]">
                An AI Receptionist and workflow automation handled intake, qualification, and
                follow-up scheduling.
              </p>
            </div>
            <div>
              <p className="mb-2 text-[11px] font-bold uppercase tracking-eyebrow text-accent-500">Business Outcome</p>
              <p className="max-w-[480px] text-[15px] leading-[1.65] text-[#333]">
                Faster response times, less admin burden, and measurable time recovered within
                a month.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
