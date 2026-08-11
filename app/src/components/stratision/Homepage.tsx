import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Reality } from './components/Reality/Reality';
import { WhyAIFails } from './components/WhyAIFails/WhyAIFails';
import { Methodology } from './components/Methodology/Methodology';
import { Assessment } from './components/Assessment/Assessment';
import { BreathingSpace } from './components/BreathingSpace/BreathingSpace';
import { Solutions } from './components/Solutions/Solutions';
import { Industries } from './components/Industries/Industries';
import { Stories } from './components/Stories/Stories';
import { WhyStratision } from './components/WhyStratision/WhyStratision';
import { Insights } from './components/Insights/Insights';
import { CTA } from './components/CTA/CTA';
import { Footer } from './components/Footer/Footer';

/**
 * Stratision Homepage — composes the 11-section narrative locked in the
 * Homepage Copy Draft v1. This file should stay purely compositional: no
 * layout logic, no styling, no copy. If a section needs to change, edit that
 * section's own component — never inline a fix here.
 *
 * ctaContext is 'general' by default. Pass 'workforce-intelligence' on
 * Middle East / Workforce Intelligence Platform™ routes so Header and CTA
 * both switch to the alternate CTA copy automatically.
 */
export function Homepage({ ctaContext = 'general' as const }) {
  return (
    <>
      <Header ctaContext={ctaContext} />
      <main>
        <Hero />
        <Reality />
        <WhyAIFails />
        <Methodology />
        <Assessment />
        <BreathingSpace />
        <Solutions />
        <Industries />
        <Stories />
        <WhyStratision />
        <Insights />
        <CTA ctaContext={ctaContext} />
      </main>
      <Footer />
    </>
  );
}
