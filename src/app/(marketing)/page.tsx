import { HeroSection } from './_components/HeroSection';
import { TrustedCompaniesSection } from './_components/TrustedCompaniesSection';
import { PricingSection } from './_components/PricingSection';
import { Footer } from './_components/Footer';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustedCompaniesSection />
      <PricingSection />
      <Footer />
    </>
  );
}
