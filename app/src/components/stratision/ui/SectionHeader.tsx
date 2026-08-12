import type { ReactNode } from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  headline: ReactNode;
  supporting?: ReactNode;
  dark?: boolean;
  as?: 'h1' | 'h2' | 'h3';
}

/**
 * Editorial Intelligence system (locked). Headline uses Fraunces (font-serif),
 * everything else stays Archivo (the default). This is the single place that
 * change lives — every section inherits it automatically.
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
  const supportingColor = dark ? 'text-accent-200' : 'text-[#4A5A6C]';

  return (
    <div className="mb-8">
      {eyebrow && (
        <p className={`mb-2 text-sm font-bold tracking-eyebrow uppercase ${eyebrowColor}`}>
          {eyebrow}
        </p>
      )}
      <Heading
        className={`font-serif relative pb-6 text-4xl font-normal leading-[1.15] ${textColor}
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
