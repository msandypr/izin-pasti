"use client";
import ContactSection from "@/components/homepage/contact-section";
import { Scale, Users, User, Award, Clock, CheckCircle, Star } from "lucide-react";
import Image from "next/image";

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
      <section className="w-full bg-gradient-to-b from-[#2CBCC4]/20 to-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center py-10 md:py-16">
            <div className="inline-flex items-center gap-2 bg-[#2CBCC4]/20 px-3 py-1 rounded-full text-[#2CBCC4] font-medium text-sm">
              <User className="h-4 w-4 fill-[#2CBCC4] text-[#2CBCC4]" />
              <span>Tentang Kami</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold py-4 text-center">
              Nusantara <span className="gradient-text">Legalitasku</span>
            </h1>
            <p className="text-md text-black text-center max-w-4xl mb-4">
              Kami adalah mitra terpercaya dalam menyediakan layanan legalitas bisnis yang dirancang untuk membantu pengusaha dan perusahaan menjalankan operasionalnya sesuai dengan ketentuan hukum. Dengan pengalaman luas di bidang legalitas, kami memahami pentingnya mendukung kelancaran dan keamanan bisnis Anda.
            </p>
            <p className="text-md text-black text-center max-w-4xl mb-4">
            Kami menawarkan berbagai layanan, mulai dari pendirian perusahaan, pengurusan izin usaha, pembuatan dan pengesahan kontrak hukum, hingga konsultasi legal. Didukung oleh tim profesional yang berkompeten, kami berkomitmen memberikan solusi yang cepat, akurat, dan transparan.
            </p>
            <p className="text-md text-black text-center max-w-4xl">
            Kepercayaan Anda adalah prioritas utama kami. Oleh karena itu, kami memastikan setiap proses berjalan dengan mudah, efisien, dan bebas hambatan. Percayakan kebutuhan legalitas bisnis Anda kepada kami, sehingga Anda dapat fokus sepenuhnya pada pengembangan usaha Anda.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-gradient-to-t from-[#2CBCC4]/10 to-white">
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-center mb-2 text-black">Kenapa <span className="gradient-text">Harus</span> Memilih <span className="gradient-text">Kami ?</span></h2>
          <p className="text-md text-black text-center mb-12">
            Karena kami menyediakan layanan legalitas bisnis yang beberapa keunggulan.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Terunggul */}
            <div className="bg-white border border-[#2CBCC4] rounded-xl p-6 flex items-start gap-4 shadow">
              <div className="flex-shrink-0 mt-1">
                <Award className="w-9 h-9 text-[#2CBCC4]" strokeWidth={2} />
              </div>
              <div>
                <div className="font-bold text-lg text-black mb-1">Terunggul</div>
                <div className="text-gray-700 text-sm">
                  Kami didukung oleh tim profesional berpengalaman di bidang legalitas dan hukum bisnis. Kami berkomitmen untuk menyediakan layanan yang tepat, dapat diandalkan, dan sepenuhnya sesuai dengan ketentuan hukum yang berlaku.
                </div>
              </div>
            </div>
            {/* Tepat Waktu */}
            <div className="bg-white border border-[#2CBCC4] rounded-xl p-6 flex items-start gap-4 shadow">
              <div className="flex-shrink-0 mt-1">
                <Clock className="w-9 h-9 text-[#2CBCC4]" strokeWidth={2} />
              </div>
              <div>
                <div className="font-bold text-lg text-black mb-1">Tepat Waktu</div>
                <div className="text-gray-700 text-sm">
                  Kecepatan adalah salah satu keunggulan kami. Kami memastikan pengurusan dokumen legalitas Anda selesai tepat waktu tanpa mengorbankan kualitas.
                </div>
              </div>
            </div>
            {/* Teraman */}
            <div className="bg-white border border-[#2CBCC4] rounded-xl p-6 flex items-start gap-4 shadow">
              <div className="flex-shrink-0 mt-1">
                <CheckCircle className="w-9 h-9 text-[#2CBCC4]" strokeWidth={2} />
              </div>
              <div>
                <div className="font-bold text-lg text-black mb-1">Teraman</div>
                <div className="text-gray-700 text-sm">
                  Keamanan data klien adalah prioritas utama kami. Seluruh informasi yang Anda berikan akan dijaga kerahasiaannya dengan standar keamanan terbaik.
                </div>
              </div>
            </div>
            {/* Mudah & Lengkap */}
            <div className="bg-white border border-[#2CBCC4] rounded-xl p-6 flex items-start gap-4 shadow">
              <div className="flex-shrink-0 mt-1">
                <Star className="w-9 h-9 text-[#2CBCC4]" strokeWidth={2} />
              </div>
              <div>
                <div className="font-bold text-lg text-black mb-1">Mudah & Lengkap</div>
                <div className="text-gray-700 text-sm">
                  Kami menyediakan berbagai layanan legalitas bisnis, mulai dari pendirian perusahaan, pengurusan izin usaha, pembuatan kontrak, hingga konsultasi hukum. Semua kebutuhan Anda dapat kami tangani dengan mudah dan efisien.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-gradient-to-b from-[#2CBCC4]/10 to-white pb-12">
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