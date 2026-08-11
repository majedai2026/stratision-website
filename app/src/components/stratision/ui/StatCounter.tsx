interface StatCounterProps {
  value: string;
  label: string;
  dark?: boolean;
}

/**
 * Pass 1: renders the final value statically (correct, accessible, real
 * content). Pass 3 (Higgsfield enhancement) wires the count-from-0-on-scroll
 * animation using motion.counter from tokens.ts — once per session, respecting
 * prefers-reduced-motion. Do not fake progress with a skeleton/placeholder;
 * ship the real number now, animate the reveal later.
 */
export function StatCounter({ value, label, dark = false }: StatCounterProps) {
  return (
    <div className="flex flex-col items-start">
      <span className={`text-4xl font-bold ${dark ? 'text-white' : 'text-near-black'}`}>
        {value}
      </span>
      <span className={`mt-1 text-sm ${dark ? 'text-accent-200' : 'text-accent-500'}`}>
        {label}
      </span>
    </div>
  );
}
