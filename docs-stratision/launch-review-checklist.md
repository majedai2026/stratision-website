# Launch Review Checklist

Run this against the live build, not the code. Every page must pass before it ships. Don't check boxes from memory — verify each one in an actual browser.

## Visual

- [ ] Typography matches Brand Book (Geist, correct weights — 400 body/500 UI/600–700 headlines only)
- [ ] Spacing uses the 8px scale only — no arbitrary pixel values
- [ ] Colour uses tokens only — no raw hex values, no colours outside the locked palette
- [ ] Logo placement and clear space match the (eventual) production vector wordmark spec
- [ ] Border radius is consistent (4–8px) everywhere — no stray heavy rounding
- [ ] Brand Midnight appears only in hero/presentation contexts, never in UI chrome
- [ ] Accent-500 never used as text/icon colour on dark backgrounds (check against the contrast rule in `design-tokens.md`)

## UX

- [ ] Mobile: every section readable and usable at 375px width
- [ ] Tablet: layout doesn't break or feel abandoned at ~768px
- [ ] Desktop: content doesn't feel lost in whitespace at 1440px+
- [ ] Primary CTA is reachable without excessive scrolling on every viewport
- [ ] Context-aware CTA logic actually switches correctly (general vs. Workforce Intelligence Platform™ pages)
- [ ] Scroll behaviour feels intentional, not accidental — nothing jumps or jitters
- [ ] Industries tab interaction works via mouse, touch, and keyboard alike

## Accessibility

- [ ] Full keyboard navigation — tab order is logical, nothing is a mouse trap
- [ ] Visible focus rings on every interactive element (Accent-300, 2px offset)
- [ ] Colour contrast passes WCAG AA on every text/background combination actually used
- [ ] Heading hierarchy is correct (one h1, logical h2/h3 nesting) — check with a screen reader or the browser's accessibility tree, not just visually
- [ ] `prefers-reduced-motion` is respected once Pass 3 motion is wired
- [ ] All images have meaningful alt text (or empty alt for decorative images)

## Performance

- [ ] Lighthouse score 95+ across Performance, Accessibility, Best Practices, SEO
- [ ] Images optimised and appropriately sized, not just compressed
- [ ] Below-the-fold content lazy-loaded
- [ ] No layout shift (CLS) as content loads
- [ ] Font loading doesn't cause a visible flash of unstyled/fallback text

## Brand — The Stratision Test

Ask this of every section, not just the page as a whole:
- [ ] Does this build trust?
- [ ] Does this simplify complexity?
- [ ] Does this feel executive?
- [ ] Could this belong to McKinsey, Bain, or Oliver Wyman?

If any answer is no, it goes back for a fix before launch — not a "we'll revisit post-launch" note.

## Content integrity

- [ ] No placeholder/bracketed content remains anywhere on a page marked as ready to ship
- [ ] Every illustrative example (Stories section, Assessment score data) is visibly labelled as such
- [ ] Trademark usage is correct — exactly two ™ marks site-wide, nowhere else
- [ ] No banned words present (see `brand-principles.md`)
