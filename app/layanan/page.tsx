"use client";
import ContactSection from "@/components/homepage/contact-section";
import { Eye } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const layanan = [
  {
    title: "Jasa Legalitas",
    image: "/images/layanan/jasa-legalitas.png",
    link: "/layanan/jasa-legalitas",
    subtitle: "Urus dokumen dan perizinan bisnis mudah dan cepat."
  },
  {
    title: "Jasa Pengacara",
    image: "/images/layanan/jasa-pengacara.png",
    link: "/layanan/jasa-pengacara",
    subtitle: "Solusi hukum profesional untuk perlindungan hak Anda."
  },
  {
    title: "Virtual Office",
    image: "/images/layanan/virtual-office.png",
    link: "/layanan/virtual-office",
    subtitle: "Alamat bisnis virtual dan layanan kantor tanpa sewa mahal."
  }
];

export default function LayananPage() {
  return (
    <>
      <motion.section
        className="w-full pt-4 pb-16 md:pt-8 md:pb-4  bg-gradient-to-b from-[#83A46D]/10 to-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="flex flex-col items-center justify-center py-10 md:py-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h1 className="text-3xl md:text-4xl font-bold py-4 text-center">
              Temukan Solusi <span className="gradient-text">Legal Terbaik</span> untuk <span className="gradient-text">Bisnis Anda</span>
            </h1>
            <p className="text-md text-black text-center">
              Kami menyediakan layanan legal terpercaya dengan tim profesional yang siap membantu mengembangkan bisnis Anda
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:flex lg:flex-wrap lg:justify-center">
            {layanan.map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-2xl shadow p-6 border border-[#83A46D]/10 flex flex-col items-center lg:w-[30%]"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 * idx }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-[#83A46D] mb-2 text-center">{item.title}</h2>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full aspect-square object-cover rounded-xl mb-4"
                />
                <p className="text-black text-sm text-center mb-4">{item.subtitle}</p>
                <div className="mt-auto w-full">
                  <Link
                    href={item.link}
                    className="flex px-6 py-2 rounded-full bg-[#83A46D] text-white font-semibold hover:bg-[#239ba0] transition text-center items-center justify-center gap-2"
                  >
                    <Eye className="h-5 w-5" />
                    Lihat Layanan
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section >
      <ContactSection />
    </>
  );
}