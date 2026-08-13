import { Header } from './Header/Header';
import { Hero } from './Hero/Hero';
import { Reality } from './Reality/Reality';
import { Methodology } from './Methodology/Methodology';
import { WhyAIFails } from './WhyAIFails/WhyAIFails';
import { Solutions } from './Solutions/Solutions';
import { Assessment } from './Assessment/Assessment';
import { BreathingSpace } from './BreathingSpace/BreathingSpace';
import { Industries } from './Industries/Industries';
import { Stories } from './Stories/Stories';
import { WhyStratision } from './WhyStratision/WhyStratision';
import { Insights } from './Insights/Insights';
import { CTA } from './CTA/CTA';
import { Footer } from './Footer/Footer';
import { Reveal } from './ui';
import '../stratision-motion.css';

/**
 * QA FIX (confirmed against the approved HTML v6 master, checked directly
 * rather than inferred): section order corrected to match production
 * master exactly —
 * Hero → Reality → Methodology → Why AI Fails → Solutions → Assessment →
 * Breathing Space → Industries → Stories → Why Stratision → Journal → CTA.
 * This replaces the older Homepage Copy Draft ordering (which had Why AI
 * Fails before Methodology, and Assessment before Solutions). No component
 * implementation changed — only the order they're composed in here, plus
 * matching import order for readability. Reveal wrappers unchanged from
 * the previous fix (Industries included, per the earlier stale-exclusion
 * correction).
 */
export function Homepage({ ctaContext = 'general' as const }) {
  return (
    <>
      <Header ctaContext={ctaContext} />
      <main>
        <Hero />
        <Reveal><Reality /></Reveal>
        <Reveal><Methodology /></Reveal>
        <Reveal><WhyAIFails /></Reveal>
        <Reveal><Solutions /></Reveal>
        <Reveal><Assessment /></Reveal>
        <Reveal><BreathingSpace /></Reveal>
        <Reveal><Industries /></Reveal>
        <Reveal><Stories /></Reveal>
        <Reveal><WhyStratision /></Reveal>
        <Reveal><Insights /></Reveal>
        <Reveal><CTA ctaContext={ctaContext} /></Reveal>
      </main>
      <Footer />
    </>
  );
}
