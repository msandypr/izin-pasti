import { Button } from "@/components/ui/button";
import { ArrowRight, Scale, Phone } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="w-full bg-gradient-to-b from-blue-50 to-white py-16 md:py-24" id="home">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-blue-100 px-3 py-1 rounded-full text-blue-500 font-medium text-sm">
              <Scale className="h-4 w-4 fill-blue-500 text-blue-500" />
              <span>Layanan Legalitas Bisnis Terkemuka di Indonesia</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Semua Kebutuhan <span className="gradient-text">Jasa Legalitas </span><br></br>Untuk <span className="gradient-text">Bisnis Anda</span>
            </h1>

            <p className="text-lg md:text-xl text-blue-900/70">
              Serahkan semua kebutuhan legalitas Anda kepada kami, dan rasakan kemudahan dalam memastikan bisnis Anda legal dan terlindung
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="rounded-full blue-gradient">
                Pilih Layanan
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full">
                <Phone></Phone>Tanya Kami
              </Button>
            </div>
          </div>

          <div className="relative flex justify-center items-center self-center">
            <div className="absolute -z-10 inset-0 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
            <Image
              src="/images/hero-lawyer-1.png"
              alt="Hero Lawyer"
              width={400}
              height={500}
              className="w-full max-w-md rounded-2xl border-blue-100 relative"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
