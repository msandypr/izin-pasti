import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import PricingSection from "@/components/pricing-section";
import ContactSection from "@/components/contact-section";

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
