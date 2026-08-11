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
