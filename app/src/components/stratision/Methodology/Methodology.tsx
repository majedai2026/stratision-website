/**
 * QA FIX: breakpoint architecture corrected. Master shows THREE distinct
 * states — 6 columns desktop, 3 columns tablet (exactly at 1024px), 2
 * columns mobile (680px) — a genuine 3-way step the previous `lg:`/base
 * split couldn't represent (it only had 2 states). Using exclusive tablet
 * range (min-[681px]:max-[1024px]) plus a separate mobile override so the
 * three states can't collide.
 */
const STAGES = [
  { label: 'Discover', code: '01 — DISCOVER', detail: "We start by understanding your business, not by pitching a tool." },
  { label: 'Diagnose', code: '02 — DIAGNOSE', detail: "We tell you what's worth fixing first — and what isn't." },
  { label: 'Architect', code: '03 — ARCHITECT', detail: 'A plan built around your operations, team and constraints.' },
  { label: 'Deliver', code: '04 — DELIVER', detail: 'Implementation handled end-to-end, with clear milestones.' },
  { label: 'Adopt', code: '05 — ADOPT', detail: "Finished when your team relies on it — not when it's built." },
  { label: 'Optimise', code: '06 — OPTIMISE', detail: "Every engagement ends with a clear view of what's next." },
];

export function Methodology() {
  return (
    <section id="methodology" className="bg-off-white px-6 pt-14 pb-14 lg:px-20 lg:pt-20 lg:pb-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-11 flex flex-row items-baseline justify-between gap-8 border-b border-black/15 pb-6 max-[680px]:flex-col max-[680px]:gap-3 max-[680px]:pb-4">
          <h2 className="font-serif max-w-[520px] text-[30px] font-normal leading-[1.25] text-near-black max-[680px]:text-2xl">
            Great outcomes aren't accidental. They're engineered.
          </h2>
          <p className="max-w-[220px] text-right text-[13px] text-[#4A5A6C] max-[680px]:max-w-none max-[680px]:text-left">
            Reduces risk, accelerates adoption, delivers measurable value.
          </p>
        </div>

        <div className="grid grid-cols-6 border-t border-black/15 min-[681px]:max-[1024px]:grid-cols-3 max-[680px]:grid-cols-2">
          {STAGES.map((stage, i) => (
            <div
              key={stage.label}
              className={`border-black/10 px-4 pt-5 pb-6
                ${(i + 1) % 6 !== 0 ? 'border-r' : ''}
              `}
            >
              <span className="mb-9 block text-[11px] font-bold text-accent-500">{stage.code}</span>
              <h3 className="font-serif mb-2 text-base font-medium text-near-black">{stage.label}</h3>
              <p className="text-xs leading-[1.45] text-[#4A5A6C]">{stage.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
