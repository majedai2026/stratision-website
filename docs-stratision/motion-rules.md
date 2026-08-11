# Motion Rules

For whoever builds Pass 3 (the Higgsfield enhancement phase). This is the contract — read it before wiring any animation.

## The governing principle

**Motion should guide attention. Never distract.** If an animation doesn't direct the eye toward something that matters, it doesn't ship. This is Behaviour Principle #1 in the Brand Book and it overrides every other instinct about "making it feel alive."

## Timing reference (from `tokens.ts`)

| Interaction | Duration | Easing | Notes |
|---|---|---|---|
| Hero text reveal | 600–800ms, staggered 80ms/line | ease-out | Word/line stagger, not character-by-character (too gimmicky) |
| Section scroll-in | 400–500ms | ease-out | Fade + 16px translateY, triggered ~20% into viewport |
| Card hover | 150–200ms | ease-in-out | Lift + border colour shift only, no shadow |
| Button hover | 120ms | ease-in-out | Background colour shift only |
| Sticky/pinned scroll sections (Industries, Methodology) | Scroll-linked, not time-linked | linear (scroll-driven) | Position tied directly to scroll offset, not autoplay |
| Animated counters (StatCounter) | 1200–1600ms | ease-out | Count from 0 on scroll into view, **once per session only** — don't re-trigger on scroll back up and down again |

## Hard rules

1. **Nothing animates on page load except the hero.** Every other section's motion is scroll-triggered.
2. **Respect `prefers-reduced-motion`.** Scroll-driven sections (Industries, Methodology) must degrade to simple fades or the static Pass 1 layout for users with this preference set — don't just disable everything and leave broken layout.
3. **The Signature Seam is always exactly 1px.** If a Pass 3 implementation wants a "thicker seam for emphasis," that's the wrong instinct — vary opacity or colour instead.
4. **The Industries tab interaction upgrades to scroll-pinned, but the accessibility contract doesn't change.** The Pass 1 version (`IndustrySelector`) is a real, keyboard-navigable tab interface — whatever scroll-pinned version replaces it must remain keyboard-navigable and screen-reader coherent, not just visually impressive.
5. **No motion for its own sake.** Every animation should be traceable to one of: guiding attention, explaining a process, or reinforcing hierarchy. "It looks cool" is not on that list.

## What's specifically NOT wired in Pass 1 (by design)

- Hero word-stagger reveal — currently renders instantly, correctly.
- Scroll-triggered section fades — currently renders instantly, correctly.
- StatCounter count-up — currently renders the final value statically.
- Methodology timeline's scroll-linked stage progression — currently a static grid, all stages visible at once.
- Industries section's sticky/pinned behaviour — currently a standard (non-sticky) tab interface.

None of these are bugs. They're correct, accessible, real-content implementations waiting for their motion layer.
