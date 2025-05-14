"use client";
import ContactSection from "@/components/homepage/contact-section";
import { Shield, Scale, Clock, Users, User } from "lucide-react";

const features = [
  {
    icon: <Shield className="h-8 w-8 text-[#2CBCC4]" />,
    title: "Perlindungan Hukum",
    description: "Tim ahli hukum kami siap memberikan perlindungan legal yang komprehensif untuk bisnis Anda"
  },
  {
    icon: <Scale className="h-8 w-8 text-[#2CBCC4]" />,
    title: "Layanan Legal Berkualitas",
    description: "Solusi legal yang profesional dan sesuai dengan regulasi terkini di Indonesia"
  },
  {
    icon: <Clock className="h-8 w-8 text-[#2CBCC4]" />,
    title: "Proses Cepat & Efisien",
    description: "Pengurusan dokumen legal yang cepat dan efisien dengan sistem yang terdigitalisasi"
  },
  {
    icon: <Users className="h-8 w-8 text-[#2CBCC4]" />,
    title: "Tim Profesional",
    description: "Didukung oleh tim legal yang berpengalaman dan profesional di bidangnya"
  }
];

export default function TentangKamiPage() {
  return (
    <>
      <section className="w-full bg-gradient-to-b from-[#2CBCC4]/10 to-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center py-10 md:py-16">
            <div className="inline-flex items-center gap-2 bg-[#2CBCC4]/20 px-3 py-1 rounded-full text-[#2CBCC4] font-medium text-sm">
              <User className="h-4 w-4 fill-[#2CBCC4] text-[#2CBCC4]" />
              <span>Tentang Kami</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold py-4 text-center">
              Nusantara <span className="gradient-text">Maju Luhur</span>
            </h1>
            <p className="text-md text-black text-center max-w-2xl">
              Nusantara Maju Luhur adalah firma hukum yang berkomitmen memberikan layanan hukum profesional, terpercaya, dan solutif untuk kebutuhan bisnis maupun personal Anda. Dengan pengalaman dan integritas tinggi, kami siap menjadi mitra strategis dalam setiap permasalahan hukum yang Anda hadapi.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-gradient-to-br from-[#2CBCC4] to-[#2CBCC4]/50 py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:items-start gap-10">
          <div className="flex-1 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Kenapa Harus Kami?</h2>
            <div className="w-16 h-1 bg-white mb-6"></div>
            <p className="text-white/80 text-md mb-8">
              Kami berkomitmen memberikan layanan hukum terbaik dengan integritas, profesionalisme, dan pengalaman yang telah terbukti. Kepercayaan klien adalah prioritas utama kami.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col items-center">
                <div className="bg-white/10 rounded-full p-4 mb-2">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <span className="text-3xl font-bold text-white">48+</span>
                <span className="text-white/80 text-sm mt-1">Partner Bisnis</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-white/10 rounded-full p-4 mb-2">
                  <Scale className="h-8 w-8 text-white" />
                </div>
                <span className="text-3xl font-bold text-white">500+</span>
                <span className="text-white/80 text-sm mt-1">Kasus Berhasil</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-white/10 rounded-full p-4 mb-2">
                  <User className="h-8 w-8 text-white" />
                </div>
                <span className="text-3xl font-bold text-white">500+</span>
                <span className="text-white/80 text-sm mt-1">Klien</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-white/10 rounded-full p-4 mb-2">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <span className="text-3xl font-bold text-white">10+</span>
                <span className="text-white/80 text-sm mt-1">Penghargaan</span>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src="/images/tentang-kami.jpg"
              alt="Law Firm Meeting"
              className="rounded-xl shadow-lg w-full object-contain"
            />
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  );
}