# Design Tokens

Source of truth: `app/src/styles/tokens.ts`. This file is the human-readable explanation of what's in there and why — if the two ever disagree, `tokens.ts` wins and this file needs updating.

## Colour

**Core Interface** — accessible, everyday use (website, documents, dashboards, proposals):
- Pure White `#FFFFFF`, Soft Grey `#F5F5F7`, Graphite `#1C1C1E`, Near Black `#111111`

**Brand Presentation** — reserved for hero/emotional moments only (logo presentations, hero sections, LinkedIn banners, pitch deck covers). Never use in UI chrome:
- Brand Midnight `#0E1B2E`

**Why two dark backgrounds exist:** Graphite is the functional, everywhere-colour. Brand Midnight is reserved for entrance moments. Using Midnight everywhere dilutes it; using Graphite for hero moments loses the emotional weight it's there for. Keep the split intentional.

**Accent scale** (Slate Blue, base `#2F4F6F`): a 7-step scale from `100` (lightest tint) to `700` (deepest shade). **Hard rule: `accent.500` must never be used as text/icon colour directly on Graphite, Near Black, or Brand Midnight** — it fails WCAG AA contrast (~2.0:1, needs 3:1 minimum). Use `accent.200` or `accent.300` for text/icons on dark backgrounds instead.

## Typography

Typeface: **Geist**, locked after comparison against Space Grotesk (too product/startup-leaning at scale) and IBM Plex Sans (safer but less distinctive). Full weight range 300–700. Wordmark tracking: `0.074em`.

## The Signature Seam

A 1px hairline, offset to 46% rather than dead-centre (50%) — this reads as manufactured precision rather than an obvious design trick. First applied as a custom cut through the "A" in the wordmark, then reused system-wide: section dividers, link underlines, progress bars, section transition rules. **Always exactly 1px regardless of context — vary opacity or colour for emphasis, never thickness.** This consistency is what makes it recognisable over time, the same mechanism as Stripe's gradient or Linear's glow.

## Motion

Defined as a fixed vocabulary in `tokens.ts` even though Pass 1 ships with no animation wired — this locks the timing values now so Pass 3 doesn't have to invent them. Key rule: **nothing animates on page load except the hero.** Everything else is scroll-triggered, once per session, and must respect `prefers-reduced-motion`.

## Spacing

8px base unit scale. Section vertical rhythm: minimum 96px padding top/bottom on desktop between major sections, never less than 64px even on dense sections.

## Trademark discipline

Hard cap: exactly two ™ marks used site-wide — **Business Intelligence Assessment™** and **Workforce Intelligence Platform™**. Everything else (Consultancy Methodology, Opportunity Matrix, Transformation Roadmap, etc.) is a capitalised proper noun without the symbol. This is enforced as a constant (`trademarks` in `tokens.ts`) specifically so it doesn't drift as new pages get built.
