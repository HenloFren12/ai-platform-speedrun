import Header from '@/components/layout/Header';
import HeroSection from '@/components/sections/HeroSection';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
      </main>
    </>
  );
}

import FeatureSection from '@/components/sections/FeatureSection';
// Add inside <main> after <HeroSection />
<FeatureSection />