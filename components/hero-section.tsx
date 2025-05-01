"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Scale, Phone } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

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
              <Scale className="h-4 w-4 fill-[#2CBCC4] text-[#2CBCC4]" />
              <span>Layanan Legalitas Bisnis Terkemuka di Indonesia</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Semua Kebutuhan <span className="gradient-text">Jasa Legalitas </span><br></br>Untuk <span className="gradient-text">Bisnis Anda</span>
            </h1>

            <p className="text-lg md:text-xl text-[#2CBCC4]/70">
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
              width={400}
              height={500}
              className="w-full max-w-md rounded-2xl border-[#2CBCC4]/20 relative"
              priority
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}