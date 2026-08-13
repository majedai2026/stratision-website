/**
 * QA FIX: breakpoint architecture corrected to match the HTML master's
 * exact pixel thresholds (1024px, 680px) instead of Tailwind's default `lg`
 * mobile-first assumption. The 2-column grid now persists through tablet,
 * only dropping to 1 column at the mobile breakpoint — matching the lab
 * exactly, where the previous version collapsed a full breakpoint too early.
 */
export function Reality() {
  return (
    <section className="bg-off-white px-6 py-16 lg:px-20 lg:py-28">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-14 grid grid-cols-[2fr_1fr] items-end gap-16 max-[1024px]:grid-cols-1 max-[1024px]:gap-5">
          <h2 className="font-serif text-[44px] font-normal leading-[1.2] text-near-black max-[680px]:text-[30px]">
            AI isn't the challenge.
          </h2>
          <p className="text-[15px] leading-body text-[#4A5A6C]">Choosing where AI creates value is.</p>
        </div>

        <div className="grid grid-cols-2 gap-px bg-black/10 max-[680px]:grid-cols-1">
          <div className="bg-off-white p-8 lg:p-10">
            <span className="font-serif mb-6 block text-sm text-accent-500">01</span>
            <h3 className="font-serif mb-3 text-2xl font-medium text-near-black">Sales teams overwhelmed</h3>
            <p className="max-w-[360px] text-sm leading-body text-[#4A5A6C]">Stop losing opportunities to slow response times.</p>
          </div>
          <div className="bg-off-white p-8 lg:p-10">
            <span className="font-serif mb-6 block text-sm text-accent-500">02</span>
            <h3 className="font-serif mb-3 text-2xl font-medium text-near-black">Knowledge disappearing</h3>
            <p className="max-w-[360px] text-sm leading-body text-[#4A5A6C]">Make sure what your business knows doesn't walk out the door.</p>
          </div>
          <div className="bg-off-white p-8 lg:p-10">
            <span className="font-serif mb-6 block text-sm text-accent-500">03</span>
            <h3 className="font-serif mb-3 text-2xl font-medium text-near-black">Manual processes</h3>
            <p className="max-w-[360px] text-sm leading-body text-[#4A5A6C]">Give your team back the hours lost to repetitive work.</p>
          </div>
          <div className="bg-off-white p-8 lg:p-10">
            <span className="font-serif mb-6 block text-sm text-accent-500">04</span>
            <h3 className="font-serif mb-3 text-2xl font-medium text-near-black">Disconnected systems</h3>
            <p className="max-w-[360px] text-sm leading-body text-[#4A5A6C]">Your tools should talk to each other, so your people don't have to.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
