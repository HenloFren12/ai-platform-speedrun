import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import FeatureSection from '@/components/sections/FeatureSection';
import PricingSection from '@/components/sections/PricingSection';
import SocialProof from '@/components/sections/SocialProof';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeatureSection />
        <PricingSection />
        <SocialProof />
      </main>
      <Footer />
    </>
  );
}