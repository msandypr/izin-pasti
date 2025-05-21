"use client";
import { FiMail, FiPhone, FiUsers, FiMapPin } from 'react-icons/fi';
import ContactSection from "@/components/homepage/contact-section";
import Image from "next/image";
import WhatsappLogo from "@/components/etc/WhatsappLogo";
import { motion } from "framer-motion";

const facilities = [
  {
    icon: <FiMail className="text-[#2CBCC4] w-6 h-6" />,
    title: "Pengelolaan Surat-Menyurat",
    desc: "Semua surat dan paket yang diterima akan dikelola oleh resepsionis profesional, yang akan memberi tahu Anda setiap kali ada kiriman yang tiba.",
  },
  {
    icon: <FiPhone className="text-[#2CBCC4] w-6 h-6" />,
    title: "Dedicated Phone Number",
    desc: "Nomor telepon eksklusif untuk perusahaan Anda yang dikelola oleh tim call center berpengalaman untuk menerima, meneruskan, dan menyampaikan informasi dari panggilan masuk.",
  },
  {
    icon: <FiUsers className="text-[#2CBCC4] w-6 h-6" />,
    title: "Meeting Room",
    desc: "Anda dapat memanfaatkan fasilitas ruang rapat untuk mengadakan pertemuan dengan tim, pelanggan, atau rekan kerja.",
  },
  {
    icon: <FiMapPin className="text-[#2CBCC4] w-6 h-6" />,
    title: "Penggunaan Alamat Prestisius untuk Keperluan Legalitas.",
    desc: "Alamat bisnis Anda terletak di lokasi strategis dan gedung terkenal, menciptakan kesan profesional bagi rekan serta pelanggan Anda.",
  },
];

export default function PerjanjianPage() {
  return (
    <>
      <section className="w-full pt-4 pb-8 md:pt-24 md:pb-16 bg-gradient-to-t from-[#2CBCC4]/10 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-br from-[#e0f7fa] to-[#c8e6f8] p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto space-y-6 md:space-y-0 md:space-x-6"
          >
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex-shrink-0"
            >
              <Image
                src="/images/layanan/virtual-office.png"
                alt="Virtual Office"
                width={320}
                height={320}
                className="rounded-md object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex-1"
            >
              <h2 className="text-3xl font-bold text-[#2CBCC4]">Virtual Office</h2>
              <p className="mt-4 text-sm text-black max-w-4xl">
                Virtual Office adalah solusi bisnis modern yang memungkinkan perusahaan atau profesional independen memiliki keberadaan kantor tanpa harus memiliki ruang secara fisik.
              </p>
              <p className="text-sm font-light text-black mt-4">Mulai dari</p>
              <p className="text-2xl font-bold text-[#2CBCC4]">Rp. 3.500.000</p>
              <button
                onClick={() => {
                  window.open("https://wa.me/6285935000364?text=Halo! Saya ingin memesan Layanan Virtual Office!", "_blank");
                }}
                className="flex px-6 py-2 rounded-full bg-[#2CBCC4] text-white font-semibold hover:bg-[#239ba0] transition text-center items-center justify-center gap-2 mt-4"
              >
                <WhatsappLogo /> Pesan Sekarang
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <section className="w-full pt-4 pb-16 md:pb-8 bg-gradient-to-b from-[#2CBCC4]/10 to-white">
        <div className="container mx-auto px-4 flex justify-center">
          <div className="w-full max-w-6xl">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-2xl md:text-3xl font-bold text-center text-[#2CBCC4] mb-8"
            >
              Fasilitas Virtual Office
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {facilities.map((facility, idx) => (
                <motion.div
                  key={facility.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 * idx }}
                  className="border-2 border-[#2CBCC4] rounded-lg p-6 bg-white"
                >
                  <div className="flex items-center gap-2 mb-2 min-h-[36px]">
                    {facility.icon}
                    <span className="text-xl font-bold">{facility.title}</span>
                  </div>
                  <p>{facility.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  );
}