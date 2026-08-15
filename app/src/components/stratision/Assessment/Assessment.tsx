import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Section 05 — Motion Phase 1, GSAP ScrollTrigger implementation.
 * Approved concept: ONE persistent document (fixed frame, never resizes or
 * jumps between stages) with five internal states crossfading as the
 * visitor scrolls. Not five cards — one artefact with five faces.
 *
 * - Document frame has an EXPLICIT fixed height (not content-driven) so
 *   stage 2/3/4/5 can never cause a layout jump, per the explicit
 *   engineering rule from the concept review.
 * - Section is pinned via ScrollTrigger while the visitor scrolls through
 *   an extended scroll range; content crossfades (opacity only, no
 *   transform/resize) between the five stages, scrubbed to scroll position.
 * - "01 / 05" indicator updates automatically from scroll progress — no
 *   manual buttons, per the explicit "scroll position = progress" decision.
 * - Pin releases cleanly at the end of the range via ScrollTrigger's
 *   built-in behaviour — no manual pin-release logic needed.
 * - Respects prefers-reduced-motion: if set, all five stages render
 *   statically stacked instead of pinning/crossfading, so the content is
 *   never hidden from a reduced-motion visitor.
 */

const SCORE_ROWS = [
  { label: 'Knowledge Retention', score: 2 },
  { label: 'Process Consistency', score: 3 },
  { label: 'Technology Utilisation', score: 2 },
  { label: 'Decision-Making Visibility', score: 1 },
];

function ScoreDots({ score, max = 5 }: { score: number; max?: number }) {
  return (
    <span className="flex gap-1">
      {Array.from({ length: max }).map((_, i) => (
        <span key={i} className={`h-[10px] w-[10px] rounded-sm ${i < score ? 'bg-accent-500' : 'bg-[#e0e0e0]'}`} />
      ))}
    </span>
  );
}

export function Assessment() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const stageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [pageLabel, setPageLabel] = useState('01 / 05');
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = () => setReducedMotion(mq.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (reducedMotion) return; // static stacked fallback rendered instead, no GSAP
    if (!wrapperRef.current || !pinRef.current) return;

    const ctx = gsap.context(() => {
      const stages = stageRefs.current.filter(Boolean) as HTMLDivElement[];
      if (stages.length !== 5) return;

      // Start: all stages except the first are invisible.
      gsap.set(stages.slice(1), { autoAlpha: 0 });
      gsap.set(stages[0], { autoAlpha: 1 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: 'top top',
          end: '+=400%',
          scrub: 0.6,
          pin: pinRef.current,
          pinSpacing: true,
          onUpdate: (self) => {
            const stageIndex = Math.min(4, Math.floor(self.progress * 5));
            setPageLabel(`0${stageIndex + 1} / 05`);
          },
        },
      });

      // Crossfade between each consecutive pair, four transitions for five stages.
      for (let i = 0; i < 4; i++) {
        tl.to(stages[i], { autoAlpha: 0, duration: 0.5 }, i)
          .to(stages[i + 1], { autoAlpha: 1, duration: 0.5 }, i);
      }
    }, wrapperRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  const stageContent = [
    // 01 — Cover
    <div key="1" className="flex h-full flex-col items-center justify-center text-center">
      <p className="text-[11px] uppercase tracking-eyebrow text-accent-500">Confidential · Sample Exhibit</p>
      <h3 className="font-serif mt-4 text-3xl font-normal text-near-black">The first step isn't a sales call.</h3>
      <p className="mt-5 text-sm text-[#7C8A9A]">Prepared for [Client Company Name]</p>
    </div>,
    // 02 — Score
    <div key="2" className="h-full">
      <p className="mb-6 text-[11px] uppercase tracking-eyebrow text-accent-500">Exhibit A — Business Intelligence Score</p>
      {SCORE_ROWS.map((row) => (
        <div key={row.label} className="flex items-center justify-between border-b border-black/[0.08] py-3.5 text-[15px]">
          <span>{row.label}</span>
          <ScoreDots score={row.score} />
        </div>
      ))}
    </div>,
    // 03 — Matrix
    <div key="3" className="h-full">
      <p className="mb-6 text-[11px] uppercase tracking-eyebrow text-accent-500">Exhibit B — Opportunity Matrix</p>
      <div className="grid grid-cols-[120px_1fr_1fr]">
        <div className="border border-black/10" />
        <div className="border border-black/10 bg-near-black p-4 text-center text-[10px] uppercase text-white">Low Effort</div>
        <div className="border border-black/10 bg-near-black p-4 text-center text-[10px] uppercase text-white">High Effort</div>
        <div className="border border-black/10 bg-near-black p-4 text-center text-[10px] uppercase text-white">High Impact</div>
        <div className="border border-black/10 p-4 text-xs text-[#555]">Priority findings</div>
        <div className="border border-black/10 p-4 text-xs text-[#555]">Strategic bets</div>
        <div className="border border-black/10 bg-near-black p-4 text-center text-[10px] uppercase text-white">Low Impact</div>
        <div className="border border-black/10 p-4 text-xs text-[#555]">Quick wins</div>
        <div className="border border-black/10 p-4 text-xs text-[#555]">Deprioritise</div>
      </div>
    </div>,
    // 04 — Recommendations
    <div key="4" className="h-full">
      <p className="mb-6 text-[11px] uppercase tracking-eyebrow text-accent-500">Exhibit C — Executive Recommendations</p>
      {[
        { label: 'Do First', width: '70%' },
        { label: 'Do Next', width: '45%' },
        { label: 'Deliberately Not Recommended', width: '20%', muted: true },
      ].map((rec) => (
        <div key={rec.label} className="mb-6">
          <p className="text-sm font-semibold text-near-black">{rec.label}</p>
          <div className="my-2 h-px bg-black/[0.08]" />
          <div className={`h-[5px] rounded ${rec.muted ? 'bg-[#ccc]' : 'bg-accent-500'}`} style={{ width: rec.width }} />
        </div>
      ))}
    </div>,
    // 05 — Next Steps
    <div key="5" className="flex h-full flex-col items-center justify-center text-center">
      <p className="text-[11px] uppercase tracking-eyebrow text-accent-500">Next Steps</p>
      <h3 className="font-serif mt-4 text-2xl font-normal text-near-black">Ready to move from diagnosis to delivery.</h3>
      <p className="mt-5 text-sm text-[#7C8A9A]">Stratision · Strategy · Vision · Intelligence</p>
    </div>,
  ];

  if (reducedMotion) {
    // Static fallback: all five stages stacked and fully visible, no pin/scrub.
    return (
      <section id="assessment" className="bg-off-white px-6 py-16 lg:px-20 lg:py-28">
        <div className="mx-auto max-w-[800px] text-center">
          <p className="text-[11px] uppercase tracking-eyebrow text-[#7C8A9A]">Business Intelligence Assessment™</p>
          <p className="font-serif mt-1 text-sm text-near-black">Executive Report</p>
        </div>
        <div className="mx-auto mt-8 flex max-w-[800px] flex-col gap-6">
          {stageContent.map((content, i) => (
            <div key={i} className="min-h-[400px] border border-black/[0.18] bg-white p-10 lg:p-14">
              {content}
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id="assessment" ref={wrapperRef} className="relative">
      <div ref={pinRef} className="bg-off-white px-6 py-16 lg:px-20 lg:py-28">
        <div className="mx-auto max-w-[800px] text-center">
          <p className="text-[11px] uppercase tracking-eyebrow text-[#7C8A9A]">Business Intelligence Assessment™</p>
          <p className="font-serif mt-1 text-sm text-near-black">Executive Report</p>
        </div>
        <p className="mt-6 text-center text-[11px] tracking-wide text-accent-500">{pageLabel}</p>

        {/* Fixed-height document frame — this dimension NEVER changes between stages */}
        <div className="relative mx-auto mt-6 min-h-[520px] max-w-[800px] border border-black/[0.18] bg-white p-10 shadow-[0_30px_60px_rgba(0,0,0,0.08)] lg:p-14">
          {stageContent.map((content, i) => (
            <div
              key={i}
              ref={(el) => { stageRefs.current[i] = el; }}
              className="absolute inset-0 p-10 lg:p-14"
            >
              {content}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
