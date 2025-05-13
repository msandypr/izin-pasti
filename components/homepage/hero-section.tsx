"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Scale } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import WhatsappLogo from "@/components/etc/WhatsappLogo";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="w-full bg-gradient-to-b from-[#2CBCC4]/10 to-white py-16 md:py-24" id="home">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 bg-[#2CBCC4]/20 px-3 py-1 rounded-full text-[#2CBCC4] font-medium text-sm">
              <Scale className="h-4 w-4 fill-white text-[#2CBCC4]" />
              <span>Layanan Legalitas Terkemuka di Indonesia</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Semua Kebutuhan <span className="gradient-text">Jasa Legalitas </span><br></br>Untuk <span className="gradient-text">Bisnis Anda</span>
            </h1>

            <p className="text-md md:text-md text-black">
              Serahkan semua kebutuhan legalitas Anda kepada kami, dan rasakan kemudahan dalam memastikan bisnis Anda legal dan terlindung
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/layanan" className="w-full sm:w-auto">
                <Button size="lg" className="rounded-full blue-gradient w-full">
                  Lihat Layanan
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <a
                href="https://wa.me/6285935000364?text=Halo!%20Saya%20ingin%20Berkonsultasi%20dengan%20Nusantara%20Legalitasku."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full w-full flex items-center justify-center border-2 border-[#2CBCC4] text-[#2CBCC4]"
                >
                  <WhatsappLogo className="h-5 w-5" style={{ fill: "#2CBCC4" }} />
                  Konsultasi WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>

          <motion.div
            className="relative flex justify-center lg:justify-end items-center self-center lg:pl-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <div className="absolute -z-10 inset-0 bg-[#2CBCC4]/20 rounded-full blur-3xl opacity-30"></div>
            <Image
              src="/images/hero-section-image-law.png"
              alt="Hero Lawyer"
              width={720}
              height={720}
              className="w-full max-w-md rounded-2xl border-[#2CBCC4]/20 relative"
              priority
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}