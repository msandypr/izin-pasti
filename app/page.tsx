import HeroSection from "@/components/homepage/hero-section";
import FeaturesSection from "@/components/homepage/features-section";
import PricingSection from "@/components/homepage/pricing-section";
import ContactSection from "@/components/homepage/contact-section";

export const metadata = {
  title: "Izin Pasti - Semua Kebutuhan Jasa Legalitas Untuk Bisnis Anda Se-Indonesia",
  description: "Izin Pasti menawarkan berbagai layanan, mulai dari pendirian perusahaan, pengurusan izin usaha, pembuatan dan pengesahan kontrak hukum, hingga konsultasi legal. Didukung oleh tim profesional yang berkompeten, kami berkomitmen memberikan solusi yang cepat, akurat, dan transparan.",
  openGraph: {
    title: "Izin Pasti - Semua Kebutuhan Jasa Legalitas Untuk Bisnis Anda Se-Indonesia",
    description: "Izin Pasti menawarkan berbagai layanan, mulai dari pendirian perusahaan, pengurusan izin usaha, pembuatan dan pengesahan kontrak hukum, hingga konsultasi legal. Didukung oleh tim profesional yang berkompeten, kami berkomitmen memberikan solusi yang cepat, akurat, dan transparan.",
    url: "https://izinpasti.com/",
    images: [
      {
        url: "https://izinpasti.com/images/graph.png",
        width: 1280,
        height: 720,
        alt: "Izin Pasti Website"
      }
    ],
    type: "website"
  }
};

export default function Home() {
  return (
    <div>
      <div>
        <HeroSection />
      </div>
      <div>
        <FeaturesSection />
      </div>
      <div>
        <PricingSection />
      </div>
      <div>
        <ContactSection />
      </div>
    </div>
  );
}