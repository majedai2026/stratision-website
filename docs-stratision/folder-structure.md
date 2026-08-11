# Folder Structure

```
app/src/
├── styles/
│   ├── tokens.ts                    # Single source of truth: colour, type, spacing, motion, seam
│   └── tailwind.config.extension.js # Merge into the repo's tailwind.config.js
├── components/
│   ├── ui/                          # Reusable primitives — Button, Card, SectionHeader, etc.
│   │   └── index.ts                 # Barrel export — import from here, not individual files
│   ├── Header/
│   ├── Hero/
│   ├── Reality/
│   ├── WhyAIFails/
│   ├── Methodology/
│   ├── Assessment/
│   ├── BreathingSpace/
│   ├── Solutions/
│   ├── Industries/
│   ├── Stories/
│   ├── WhyStratision/
│   ├── Insights/
│   ├── CTA/
│   └── Footer/                      # One folder per homepage section
└── Homepage.tsx                     # Pure composition — imports and orders sections, nothing else
```

## The rule this structure enforces

**Primitives are reused. Sections are not.** If you find yourself copying markup from `Assessment/Assessment.tsx` into a new page, stop — that markup belongs in `components/ui/` as a new primitive instead. Sections compose primitives; they don't duplicate each other.

## Adding a new page

1. Create a new top-level file (e.g. `app/src/WorkforceIntelligencePlatform.tsx`), following `Homepage.tsx`'s pattern: import `Header`, `Footer`, and whatever section components the page needs.
2. If the page needs a section that doesn't exist yet, create it as a new folder under `components/`, matching the naming and structure of the existing ones.
3. Compose only from `components/ui/` primitives inside that new section — don't write raw Tailwind classes for things a primitive already handles (buttons, cards, section headers, etc.).
4. Update this file and `component-library.md` if the new section introduces a new primitive.

This is what makes "every future page inherits the design language automatically" actually true, rather than aspirational.
