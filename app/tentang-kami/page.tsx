"use client";
import ContactSection from "@/components/homepage/contact-section";
import { Scale, Users, User, Award } from "lucide-react";
import Image from "next/image";

const kenapaHarusKami = {
  title: "Kenapa Harus Kami?",
  description:
    "Kami berkomitmen memberikan layanan hukum terbaik dengan integritas, profesionalisme, dan pengalaman yang telah terbukti. Kepercayaan klien adalah prioritas utama kami.",
  stats: [
    { icon: "user", label: "Partner Bisnis", value: "30+" },
    { icon: "scale", label: "Kasus Berhasil", value: "500+" },
    { icon: "users", label: "Klien", value: "500+" },
    { icon: "award", label: "Penghargaan", value: "10+" },
  ],
};

const iconKenapaHarusKami = {
  user: <User className="w-6 h-6 text-white" />,
  users: <Users className="w-6 h-6 text-white" />,
  award: <Award className="w-6 h-6 text-white" />,
  scale: <Scale className="w-6 h-6 text-white" />,
};

const testimonials = [
  {
    name: "Budi Santoso",
    role: "Direktur PT Maju Jaya",
    testimonial: "Pelayanan hukum dari Nusantara Maju Luhur sangat profesional dan responsif. Saya merasa aman dan terbantu dalam setiap proses bisnis kami.",
    image: "/images/tentang-kami/testimoni-1.jpg"
  },
  {
    name: "Siti Aminah",
    role: "Owner UMKM",
    testimonial: "Timnya ramah dan sangat membantu. Semua permasalahan hukum saya diselesaikan dengan cepat dan jelas.",
    image: "/images/tentang-kami/testimoni-2.jpg"
  },
  {
    name: "Andi Wijaya",
    role: "Pengusaha",
    testimonial: "Rekomendasi terbaik untuk urusan legalitas bisnis. Konsultasi mudah dan hasil memuaskan!",
    image: "/images/tentang-kami/testimoni-3.jpeg"
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

      <section className="w-full flex flex-col lg:flex-row mb-8">
        <div className="bg-[#2CBCC4] text-white py-20 lg:py-32 px-10 lg:px-16 w-full lg:w-1/2 flex flex-col justify-center pl-8 md:pl-12">
          <h2 className="text-3xl font-bold mb-4">
            {kenapaHarusKami.title}
          </h2>
          <div className="w-16 h-1 bg-white mb-6" />
          <p className="text-lg mb-10">{kenapaHarusKami.description}</p>
          <div className="grid grid-cols-2 gap-x-8 gap-y-6">
            {kenapaHarusKami.stats.map((item, idx) => (
              <div key={idx} className="flex items-center gap-x-4">
                <div className="bg-white/10 rounded-full p-4 flex-shrink-0 flex items-center justify-center">
                  {iconKenapaHarusKami[item.icon as keyof typeof iconKenapaHarusKami]}
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-semibold leading-tight">{item.value}</span>
                  <span className="text-sm leading-tight">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-96 lg:h-auto relative">
          <Image
            src="/images/tentang-kami.jpg"
            alt="Why choose us"
            layout="fill"
            objectFit="cover"
            className="brightness-100"
          />
        </div>
      </section>

      <section className="w-full bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2 text-black">Testimoni <span className="gradient-text">Klien</span></h2>
          <p className="text-md text-black text-center mb-12">
              Apa kata mereka tentang Nusantara Legalitasku?
            </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item, idx) => (
              <div key={idx} className="bg-white border border-[#2CBCC4] rounded-xl p-6 flex flex-col items-center text-center shadow">
                <img src={item.image} alt={item.name} className="w-16 h-16 rounded-full mb-4 object-cover border border-[#2CBCC4]" />
                <p className="text-gray-700 italic mb-4 min-h-[96px]">"{item.testimonial}"</p>
                <div className="font-semibold text-[#2CBCC4]">{item.name}</div>
                <div className="text-sm text-gray-500">{item.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}