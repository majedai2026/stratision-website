# Component Library

If you're new to this codebase: read this file, `design-tokens.md`, and `folder-structure.md` — that's the whole system in one afternoon, as intended.

## UI Primitives (`app/src/components/ui/`)

Reusable building blocks. Every future page composes from these — don't write one-off styled markup inside a page component. If you need something new, it becomes a new primitive here, not an inline style somewhere else.

| Component | Purpose | Key props |
|---|---|---|
| `Button` | Primary/secondary CTA, matches Design System component states | `variant: 'primary' \| 'secondary'` |
| `Card` | Standard bordered container with hover lift | `interactive?: boolean` |
| `SectionHeader` | Eyebrow + headline + Signature Seam underline, used at the top of every homepage section | `eyebrow?`, `headline`, `supporting?`, `dark?`, `as?` |
| `ScoreBar` | 0–5 maturity rating (filled/unfilled squares), shared between the website and the BIA docx template | `label`, `score`, `max?`, `illustrative?` |
| `StatCounter` | A labelled number — static in Pass 1, count-up animation wired in Pass 3 | `value`, `label`, `dark?` |
| `Timeline` | Horizontal stage progression (used by Methodology, reusable for any step-based process) | `stages: {label, detail}[]`, `activeIndex?` |
| `IndustrySelector` | Accessible tab interface for the Industries section content switcher | `industries: {name, problem, approach, outcome}[]` |
| `OpportunityMatrix` | Impact-vs-effort 2×2 grid, visually consistent with the BIA docx version | 4 quadrant content props |
| `StoryCard` | Challenge → Approach → Solution → Outcome card, with mandatory "Indicative Example" badge | `challenge`, `approach`, `solution`, `outcome`, `outcomeStat?`, `indicative?` |
| `InsightCard` | Large editorial article card | `title`, `excerpt`, `href` |

Import from the barrel: `import { Button, Card } from '../ui'`.

## Section Components (`app/src/components/*/`)

One folder per homepage section, matching the locked Homepage Copy Draft v1 exactly. Each is self-contained — copy, layout, and any section-specific logic live in that folder alone.

| Folder | Homepage section | Notes |
|---|---|---|
| `Header/` | Navigation | Context-aware CTA via `ctaContext` prop |
| `Hero/` | 01 + 01b (Trust Bar) | |
| `Reality/` | 02 | Four business-pain cards |
| `WhyAIFails/` | 03 | First appearance of the signature belief statement |
| `Methodology/` | 04 | 6 client-facing stages (internal Bible has 8 — not exposed here) |
| `Assessment/` | 05 | Flagship section — Business Intelligence Assessment™ |
| `BreathingSpace/` | 05b | Second appearance of the signature belief statement — must stay word-for-word identical to WhyAIFails |
| `Solutions/` | 06 | Outcome-grouped accordion |
| `Industries/` | 07 | 3 launch industries only — see Idea Vault for the rest |
| `Stories/` | 08 | "Illustrative Engagement" — exactly one example, badged |
| `WhyStratision/` | 09 | "Our Principles Never Change" — keep in sync with Company Bible |
| `Insights/` | 10 | Section name still TBD ("Executive Insights" is interim) |
| `CTA/` | 11 | Third appearance-adjacent — echoes Methodology's "engineered outcomes" line |
| `Footer/` | — | |

## Composition rule

`Homepage.tsx` is purely compositional — it imports and orders section components, nothing else. If a section needs a copy or layout change, edit that section's own file. Never patch a section from the Homepage file.

Future pages (AI Receptionist, Workforce Intelligence Platform™, About, Contact) should follow the same pattern: a page-level file that composes from `components/ui/` and any new page-specific section components, following this same folder convention.
