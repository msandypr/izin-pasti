import HeroSection from "@/components/homepage/hero-section";
import FeaturesSection from "@/components/homepage/features-section";
import PricingSection from "@/components/homepage/pricing-section";
import ContactSection from "@/components/homepage/contact-section";

export const metadata = {
  title: "Nusantara Legalitasku - Semua Kebutuhan Jasa Legalitas Untuk Bisnis Anda Se-Indonesia",
  description: "Nusantara Legalitasku menawarkan berbagai layanan, mulai dari pendirian perusahaan, pengurusan izin usaha, pembuatan dan pengesahan kontrak hukum, hingga konsultasi legal. Didukung oleh tim profesional yang berkompeten, kami berkomitmen memberikan solusi yang cepat, akurat, dan transparan.",
  openGraph: {
    title: "Nusantara Legalitasku - Semua Kebutuhan Jasa Legalitas Untuk Bisnis Anda Se-Indonesia",
    description: "Nusantara Legalitasku menawarkan berbagai layanan, mulai dari pendirian perusahaan, pengurusan izin usaha, pembuatan dan pengesahan kontrak hukum, hingga konsultasi legal. Didukung oleh tim profesional yang berkompeten, kami berkomitmen memberikan solusi yang cepat, akurat, dan transparan.",
    url: "https://nusantaralegalitasku.com/",
    images: [
      {
        url: "/public/images/nusantara_legalitasku_logo.png",
        width: 1200,
        height: 630,
        alt: "Nusantara Legalitasku Logo"
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