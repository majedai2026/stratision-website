import { Header } from './Header/Header';
import { Hero } from './Hero/Hero';
import { Reality } from './Reality/Reality';
import { WhyAIFails } from './WhyAIFails/WhyAIFails';
import { Methodology } from './Methodology/Methodology';
import { Assessment } from './Assessment/Assessment';
import { BreathingSpace } from './BreathingSpace/BreathingSpace';
import { Solutions } from './Solutions/Solutions';
import { Industries } from './Industries/Industries';
import { Stories } from './Stories/Stories';
import { WhyStratision } from './WhyStratision/WhyStratision';
import { Insights } from './Insights/Insights';
import { CTA } from './CTA/CTA';
import { Footer } from './Footer/Footer';
import { Reveal } from './ui';
import '../stratision-motion.css';

/**
 * Pass 3: sections below the fold are wrapped in Reveal (scroll-triggered
 * fade, once per session, reduced-motion safe). Hero animates on load via
 * its own stagger classes. Industries manages its own scroll-pin and is NOT
 * wrapped — a Reveal transform would break position:sticky.
 */
export function Homepage({ ctaContext = 'general' as const }) {
  return (
    <>
      <Header ctaContext={ctaContext} />
      <main>
        <Hero />
        <Reveal><Reality /></Reveal>
        <Reveal><WhyAIFails /></Reveal>
        <Reveal><Methodology /></Reveal>
        <Reveal><Assessment /></Reveal>
        <Reveal><BreathingSpace /></Reveal>
        <Reveal><Solutions /></Reveal>
        <Industries />
        <Reveal><Stories /></Reveal>
        <Reveal><WhyStratision /></Reveal>
        <Reveal><Insights /></Reveal>
        <Reveal><CTA ctaContext={ctaContext} /></Reveal>
      </main>
      <Footer />
    </>
  );
}
