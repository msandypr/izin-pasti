"use client";
import WhatsappLogo from "@/components/etc/WhatsappLogo";
import { Instagram, ThumbsUp, Shield, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function HubungiKamiPage() {
  return (
    <>
      <section className="min-h-screen bg-gradient-to-br from-[#e0f7fa] via-white to-[#b2ebf2] flex flex-col justify-center py-10">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16 space-y-4"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Perlu Bantuan <span className="gradient-text">Jasa Legalitas ?</span>
            </h2>
            <p className="text-md text-black">
              Silahkan hubungi kami melalui Nomor Telepon atau Email untuk mendapatkan bantuan jasa legalitas yang sesuai dengan kebutuhan Anda.
            </p>
          </motion.div>
          <div className="flex flex-col md:flex-row gap-8 items-stretch justify-center min-h-[480px]">
            {/* Form */}
            <motion.div
              className="w-full md:w-1/2 flex-1 bg-white rounded-2xl shadow-lg p-8"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <form className="flex flex-col gap-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium mb-1">Nama Lengkap *</label>
                    <input type="text" placeholder="Ex. Firmansyah" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2CBCC4] transition" required />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium mb-1">Email*</label>
                    <input type="email" placeholder="example@gmail.com" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2CBCC4] transition" required />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Nomor Whatsapp*</label>
                  <input type="text" placeholder="Ex. 0821xxxxxxx" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2CBCC4] transition" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Subject*</label>
                  <input type="text" placeholder="Enter Subject" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2CBCC4] transition" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Pesan Anda*</label>
                  <textarea placeholder="Tulis disini" className="w-full border border-gray-300 rounded-lg px-3 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#2CBCC4] transition" required />
                </div>
                <button type="submit" className="mt-2 bg-[#2CBCC4] text-white rounded-lg px-6 py-2 font-semibold hover:bg-[#229ca1] transition">Kirim Pesan</button>
              </form>
            </motion.div>
            {/* Info Card */}
            <motion.div
              className="w-full md:w-1/2 flex-1 bg-[#2CBCC4] rounded-2xl shadow-lg p-8 text-white flex flex-col justify-between min-h-[420px]"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div>
                <div className="text-2xl font-bold mb-2">Alamat</div>
                <div className="mb-4 leading-relaxed">
                  Kota Semarang, Kecamatan Pedurungan, Kelurahan Palebon,<br />
                  Jalan Kalicari Timur I No. 5 Rukun Tetangga 005, Rukun Warga 009
                </div>
                <div className="text-2xl font-bold mb-2">Kontak</div>
                <div className="flex items-center gap-2 mb-2">
                  <WhatsappLogo className="w-5 h-5" />
                  <span className="text-base">082229415818 / 082220008954</span>
                </div>
                <div className="flex items-center gap-2 mb-6">
                  <Instagram className="w-5 h-5" />
                  <a href="https://instagram.com/nusantaralegalitasku"><span className="text-base">@nusantaralegalitasku</span></a>
                </div>
                <iframe
                  title="Lokasi Kantor"
                  src="https://www.google.com/maps?q=-6.971547,110.474678&hl=id&z=16&output=embed"
                  width="100%"
                  height="280"
                  className="rounded-xl border-0 w-full"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>
          </div>
          {/* Bottom Feature */}
          <motion.div
            className="flex flex-row justify-center items-center gap-8 mt-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <div className="flex flex-col items-center">
              <ThumbsUp className="w-8 h-8 text-black mb-1" />
              <span className="font-semibold text-black text-lg text-center">Terpercaya</span>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="w-8 h-8 text-black mb-1" />
              <span className="font-semibold text-black text-lg text-center leading-tight">Aman &amp; Handal</span>
            </div>
            <div className="flex flex-col items-center">
              <BadgeCheck className="w-8 h-8 text-black mb-1" />
              <span className="font-semibold text-black text-lg text-center">Profesional</span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}