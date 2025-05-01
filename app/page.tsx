import HeroSection from "@/components/homepage/hero-section";
import FeaturesSection from "@/components/homepage/features-section";
import PricingSection from "@/components/homepage/pricing-section";
import ContactSection from "@/components/homepage/contact-section";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <ContactSection />
    </div>
  );
}
