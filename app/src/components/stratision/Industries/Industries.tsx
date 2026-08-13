/**
 * QA FIX: breakpoint architecture corrected. Ghosted numeral size now
 * steps through three states matching the master exactly: 96px desktop,
 * 56px tablet (1024px), 40px mobile (680px) — the previous version only
 * had a desktop/mobile split via `lg:`, missing the tablet step entirely.
 */
const INDUSTRIES = [
  { name: 'Training & Workforce Development', problem: "The Workforce Intelligence Platform™ makes what your organisation knows permanently accessible — so training investment doesn't fade within weeks of the course ending." },
  { name: 'Professional Services', problem: 'Workflow automation and AI assistants handle the repetitive admin, freeing billable hours for the work that actually needs a professional.' },
  { name: 'Recruitment', problem: 'AI Receptionist and CRM automation ensure every enquiry gets a fast, consistent response — without adding headcount.' },
];

export function Industries() {
  return (
    <section id="industries" className="bg-deep-blue px-6 py-16 text-white lg:px-20 lg:py-28">
      <div className="mx-auto max-w-[1440px]">
        <p className="mb-4 text-xs font-bold uppercase tracking-eyebrow text-accent-300">Industries</p>
        <h2 className="font-serif mb-16 max-w-[600px] text-[34px] font-normal max-[680px]:text-[26px]">
          Built around how your industry actually works.
        </h2>

        <div>
          {INDUSTRIES.map((industry, i) => (
            <div
              key={industry.name}
              className="grid grid-cols-[220px_1fr] items-center gap-0 border-t border-white/[0.12] py-11 last:border-b
                min-[681px]:max-[1024px]:grid-cols-[120px_1fr]
                max-[680px]:grid-cols-1 max-[680px]:gap-3 max-[680px]:py-8"
            >
              <span className="font-serif text-[96px] font-light leading-none text-white/[0.14]
                min-[681px]:max-[1024px]:text-[56px] max-[680px]:text-[40px]">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="font-serif mb-2.5 text-[28px] font-normal">{industry.name}</h3>
                <p className="max-w-[640px] text-sm leading-[1.65] text-[#93a3b5]">{industry.problem}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
