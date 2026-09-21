import Hero from './sections/Hero';
import Trust from './sections/Trust';
import Features from './sections/Features';
import Tracks from './sections/Tracks';
import Stats from './sections/Stats';
import HowItWorks from './sections/HowItWorks';
import Testmonials from './sections/Testmonials';
import FAQ from './sections/FAQ';
import CTA from './sections/CTA';

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white font-sans dark:bg-slate-950">
      <Hero />
      <Trust />
      <Features />
      <Tracks />
      <Stats />
      <HowItWorks />
      <Testmonials />
      <FAQ />
      <CTA />
    </main>
  );
}
