"use client";
import ContactSection from "@/components/homepage/contact-section";
import { User, Award, Clock, CheckCircle, Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Budi Santoso",
    role: "Direktur PT Maju Jaya",
    testimonial: "Pelayanan hukum dari Izin Pasti sangat profesional dan responsif. Saya merasa aman dan terbantu dalam setiap proses bisnis kami.",
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
          <motion.div
            className="flex flex-col items-center justify-center py-10 md:py-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-[#2CBCC4]/20 px-3 py-1 rounded-full text-[#2CBCC4] font-medium text-sm"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <User className="h-4 w-4 fill-[#2CBCC4] text-[#2CBCC4]" />
              <span>Tentang Kami</span>
            </motion.div>
            <motion.h1
              className="text-3xl md:text-4xl font-bold py-4 text-center"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Izin <span className="gradient-text">Pasti</span>
            </motion.h1>
            <motion.p
              className="text-md text-black text-center max-w-4xl mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Kami adalah mitra terpercaya dalam menyediakan layanan legalitas bisnis yang dirancang untuk membantu pengusaha dan perusahaan menjalankan operasionalnya sesuai dengan ketentuan hukum. Dengan pengalaman luas di bidang legalitas, kami memahami pentingnya mendukung kelancaran dan keamanan bisnis Anda.
            </motion.p>
            <motion.p
              className="text-md text-black text-center max-w-4xl mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
            Kami menawarkan berbagai layanan, mulai dari pendirian perusahaan, pengurusan izin usaha, pembuatan dan pengesahan kontrak hukum, hingga konsultasi legal. Didukung oleh tim profesional yang berkompeten, kami berkomitmen memberikan solusi yang cepat, akurat, dan transparan.
            </motion.p>
            <motion.p
              className="text-md text-black text-center max-w-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
            Kepercayaan Anda adalah prioritas utama kami. Oleh karena itu, kami memastikan setiap proses berjalan dengan mudah, efisien, dan bebas hambatan. Percayakan kebutuhan legalitas bisnis Anda kepada kami, sehingga Anda dapat fokus sepenuhnya pada pengembangan usaha Anda.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="w-full bg-gradient-to-t from-[#2CBCC4]/10 to-white">
        <div className="container mx-auto px-4 py-12">
          <motion.h2
            className="text-3xl font-bold text-center mb-2 text-black"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Kenapa <span className="gradient-text">Harus</span> Memilih <span className="gradient-text">Kami ?</span>
          </motion.h2>
          <motion.p
            className="text-md text-black text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Karena kami menyediakan layanan legalitas bisnis yang beberapa keunggulan.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Terunggul */}
            <motion.div
              className="bg-white border border-[#2CBCC4] rounded-xl p-6 flex items-start gap-4 shadow"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex-shrink-0 mt-1">
                <Award className="w-9 h-9 text-[#2CBCC4]" strokeWidth={2} />
              </div>
              <div>
                <div className="font-bold text-lg text-black mb-1">Terunggul</div>
                <div className="text-gray-700 text-sm">
                  Kami didukung oleh tim profesional berpengalaman di bidang legalitas dan hukum bisnis. Kami berkomitmen untuk menyediakan layanan yang tepat, dapat diandalkan, dan sepenuhnya sesuai dengan ketentuan hukum yang berlaku.
                </div>
              </div>
            </motion.div>
            {/* Tepat Waktu */}
            <motion.div
              className="bg-white border border-[#2CBCC4] rounded-xl p-6 flex items-start gap-4 shadow"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex-shrink-0 mt-1">
                <Clock className="w-9 h-9 text-[#2CBCC4]" strokeWidth={2} />
              </div>
              <div>
                <div className="font-bold text-lg text-black mb-1">Tepat Waktu</div>
                <div className="text-gray-700 text-sm">
                  Kecepatan adalah salah satu keunggulan kami. Kami memastikan pengurusan dokumen legalitas Anda selesai tepat waktu tanpa mengorbankan kualitas.
                </div>
              </div>
            </motion.div>
            {/* Teraman */}
            <motion.div
              className="bg-white border border-[#2CBCC4] rounded-xl p-6 flex items-start gap-4 shadow"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex-shrink-0 mt-1">
                <CheckCircle className="w-9 h-9 text-[#2CBCC4]" strokeWidth={2} />
              </div>
              <div>
                <div className="font-bold text-lg text-black mb-1">Teraman</div>
                <div className="text-gray-700 text-sm">
                  Keamanan data klien adalah prioritas utama kami. Seluruh informasi yang Anda berikan akan dijaga kerahasiaannya dengan standar keamanan terbaik.
                </div>
              </div>
            </motion.div>
            {/* Mudah & Lengkap */}
            <motion.div
              className="bg-white border border-[#2CBCC4] rounded-xl p-6 flex items-start gap-4 shadow"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex-shrink-0 mt-1">
                <Star className="w-9 h-9 text-[#2CBCC4]" strokeWidth={2} />
              </div>
              <div>
                <div className="font-bold text-lg text-black mb-1">Mudah & Lengkap</div>
                <div className="text-gray-700 text-sm">
                  Kami menyediakan berbagai layanan legalitas bisnis, mulai dari pendirian perusahaan, pengurusan izin usaha, pembuatan kontrak, hingga konsultasi hukum. Semua kebutuhan Anda dapat kami tangani dengan mudah dan efisien.
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="w-full bg-gradient-to-b from-[#2CBCC4]/10 to-white pb-12">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-2 text-black"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Testimoni <span className="gradient-text">Klien</span>
          </motion.h2>
          <motion.p
            className="text-md text-black text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
              Apa kata mereka tentang Izin Pasti?
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white border border-[#2CBCC4] rounded-xl p-6 flex flex-col items-center text-center shadow"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * idx }}
                viewport={{ once: true }}
              >
                <img src={item.image} alt={item.name} className="w-16 h-16 rounded-full mb-4 object-cover border border-[#2CBCC4]" />
                <p className="text-gray-700 italic mb-4 min-h-[96px]">"{item.testimonial}"</p>
                <div className="font-semibold text-[#2CBCC4]">{item.name}</div>
                <div className="text-sm text-gray-500">{item.role}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}