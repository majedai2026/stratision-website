# Brand Principles (Engineer's Version)

Condensed from the full Stratision Brand Book (v1.4) — read the full document for context and rationale; this is the fast-reference version for anyone touching code who needs the rules without the philosophy essay.

## The one-line filter

*"Stratision should feel like a global strategy consultancy that just happens to specialise in AI."* Not an AI agency. Not a software company. Not a startup. When in doubt on any visual or interaction decision, measure it against this.

## The Stratision Test

Before shipping anything:
- Does this build trust?
- Does this simplify complexity?
- Does this help a business leader make a better decision?
- Could this have been written/built by any generic AI agency?

If the answer to the last one is yes — rewrite it.

## Hard rules for anyone touching this codebase

1. **Colour tokens only.** Never a raw hex value in a component — import from `tokens.ts`.
2. **No AI clichés, ever.** No robots, brains, circuits, hexagons, neural-network graphics, glowing nodes. This applies to icons, illustrations, and photography alike.
3. **No navigation/star imagery.** Leftover from the old "North Star" working name — not relevant to Stratision.
4. **Maximum two ™ marks site-wide:** Business Intelligence Assessment™ and Workforce Intelligence Platform™. Nothing else gets the symbol.
5. **Banned words:** revolutionary, cutting-edge, game-changing, disruptive, next-generation, seamless, unlock (as a value verb), supercharge, turbocharge, AI-powered.
6. **Minimal, small, consistent border radius** (4–8px). Heavy rounding (16px+) reads as consumer app, not executive tool.
7. **Illustrative content must be visibly labelled as such** — "Indicative Example" badges, illustrative score data clearly marked. Never let placeholder content look like real client data.
8. **The Signature Seam is always 1px**, offset 46% (not dead-centre). Reused across dividers, underlines, progress indicators — not confined to the logo.

## Tone of voice (for any copy, error messages, empty states, etc.)

Strategic, calm, consultative. Confident without needing to prove it. Precise over verbose. Business-first language — lead with the problem or outcome, never the technology.
