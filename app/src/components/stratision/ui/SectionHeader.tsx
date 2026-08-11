import type { ReactNode } from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  headline: ReactNode;
  supporting?: ReactNode;
  dark?: boolean;
  /** Heading level for correct document outline — sections are h2 by default */
  as?: 'h1' | 'h2' | 'h3';
}

/**
 * The recurring "01 — Headline" + Signature Seam underline pattern used at
 * the top of Sections 04-10. The seam is a design token (1px, offset 46%),
 * not a one-off logo flourish — see Brand Book Section 16.
 */
export function SectionHeader({
  eyebrow,
  headline,
  supporting,
  dark = false,
  as: Heading = 'h2',
}: SectionHeaderProps) {
  const eyebrowColor = dark ? 'text-accent-200' : 'text-accent-500';
  const textColor = dark ? 'text-white' : 'text-near-black';
  const supportingColor = dark ? 'text-accent-200' : 'text-[#333333]';

  return (
    <div className="mb-8">
      {eyebrow && (
        <p className={`mb-2 text-sm font-bold tracking-eyebrow uppercase ${eyebrowColor}`}>
          {eyebrow}
        </p>
      )}
      <Heading
        className={`relative pb-6 text-4xl font-bold leading-display ${textColor}
          after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-accent-500`}
      >
        {headline}
      </Heading>
      {supporting && (
        <p className={`mt-4 max-w-2xl text-base leading-body ${supportingColor}`}>{supporting}</p>
      )}
    </div>
  );
}
