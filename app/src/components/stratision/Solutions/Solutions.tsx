/**
 * QA FIX: breakpoint architecture corrected. Master shows the number column
 * disappearing entirely at mobile (680px) while surviving at tablet
 * (1024px), and services stacking full-width only at mobile — a genuine
 * 3-state difference the previous version didn't represent.
 */
const OUTCOMES = [
  { title: 'Increase Revenue', hook: 'Stop losing opportunities to slow response times.', services: ['AI Receptionist', 'Sales Automation'] },
  { title: 'Improve Productivity', hook: 'Give your team back the hours lost to repetitive work.', services: ['Workflow Automation', 'AI Assistants'] },
  { title: 'Protect Knowledge', hook: "Make sure what your business knows doesn't walk out the door.", services: ['Workforce Intelligence Platform™'] },
  { title: 'Improve Customer Experience', hook: 'Answer faster, more consistently, without adding headcount.', services: ['Customer Support AI', 'Knowledge Assistants'] },
  { title: 'Better Decision Making', hook: "See what's actually happening in your business, not what you assume is happening.", services: ['Executive Dashboards & Reporting'] },
];

export function Solutions() {
  return (
    <section id="solutions" className="bg-off-white px-6 py-16 lg:px-20 lg:py-28">
      <div className="mx-auto max-w-[1440px]">
        <h2 className="font-serif mb-16 max-w-[600px] text-[44px] font-normal text-near-black max-[680px]:text-[30px]">
          The outcomes that matter most.
        </h2>

        <div>
          {OUTCOMES.map((outcome, i) => (
            <div
              key={outcome.title}
              className="grid grid-cols-[60px_1fr_1fr] gap-10 border-t border-black/10 py-10 last:border-b
                min-[681px]:max-[1024px]:grid-cols-[40px_1fr]
                max-[680px]:grid-cols-1 max-[680px]:gap-3.5 max-[680px]:py-8"
            >
              <span className="font-serif text-[15px] text-accent-500 max-[680px]:hidden">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="min-[681px]:max-[1024px]:col-span-1">
                <h3 className="font-serif mb-2 text-[28px] font-normal text-near-black max-[680px]:text-[22px]">{outcome.title}</h3>
                <p className="max-w-[320px] text-sm leading-body text-[#4A5A6C]">{outcome.hook}</p>
              </div>
              <div className="flex flex-col gap-3.5 pt-1 min-[681px]:max-[1024px]:col-span-2 min-[681px]:max-[1024px]:pl-[40px] max-[680px]:pl-0">
                {outcome.services.map((service) => (
                  <div key={service} className="flex items-baseline gap-4">
                    <span aria-hidden="true" className="h-px w-6 shrink-0 bg-accent-500" />
                    <span className="font-serif text-[15px] italic text-near-black">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
