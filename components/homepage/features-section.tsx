"use client";
import { BadgeCheck, Shield, Scale, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function FeaturesSection() {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-[#83A46D]" />,
      title: "Perlindungan Hukum",
      description: "Tim ahli hukum kami siap memberikan perlindungan legal yang komprehensif untuk bisnis Anda"
    },
    {
      icon: <Scale className="h-8 w-8 text-[#83A46D]" />,
      title: "Layanan Legal Berkualitas",
      description: "Solusi legal yang profesional dan sesuai dengan regulasi terkini di Indonesia"
    },
    {
      icon: <Clock className="h-8 w-8 text-[#83A46D]" />,
      title: "Proses Cepat & Efisien",
      description: "Pengurusan dokumen legal yang cepat dan efisien dengan sistem yang terdigitalisasi"
    },
    {
      icon: <Users className="h-8 w-8 text-[#83A46D]" />,
      title: "Tim Profesional",
      description: "Didukung oleh tim legal yang berpengalaman dan profesional di bidangnya"
    }
  ];

  return (
    <section className="w-full bg-gradient-to-t from-[#83A46D]/10 to-white py-16 md:py-24" id="features">
      <div className="container">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-[#83A46D]/20 px-3 py-1 rounded-full text-[#83A46D] font-medium text-sm">
            <BadgeCheck className="h-4 w-4 fill-[#83A46D] text-white" />
            <span>Mengapa Anda Harus Memilih Kami</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold">
            Solusi <span className="gradient-text">Legal Terbaik</span> untuk <span className="gradient-text">Bisnis Anda</span>
          </h2>

          <p className="text-md text-black">
            Kami menyediakan layanan legal terpercaya dengan tim profesional yang siap membantu mengembangkan bisnis Anda
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center justify-items-center">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-2xl border border-[#83A46D]/20 hover:shadow-lg transition-all duration-300 bg-white flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 * index }}
              viewport={{ once: true }}
            >
              <div className="h-12 w-12 rounded-full bg-[#83A46D]/10 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-[#83A46D] mb-2">{feature.title}</h3>
              <p className="text-sm text-black">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}