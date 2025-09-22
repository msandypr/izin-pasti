"use client";
import WhatsappLogo from "@/components/etc/WhatsappLogo";
import { Instagram, ThumbsUp, Shield, BadgeCheck, Facebook } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function HubungiKamiPage() {

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const nama = formData.get('nama') || '';
    const email = formData.get('email') || '';
    const whatsapp = formData.get('whatsapp') || '';
    const perihal = formData.get('perihal') || '';
    const pesan = formData.get('pesan') || '';
    const message =
      `Halo Izin Pasti, Ada Pesan Masuk:\nNama: ${nama}\nEmail: ${email}\nNo. Whatsapp: ${whatsapp}\nPerihal: ${perihal}\nPesan: ${pesan}`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/6285935000364?text=${encoded}`, '_blank');
  };

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
              <form ref={formRef} className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium mb-1">Nama Lengkap <span className="text-red-600">*</span></label>
                    <input name="nama" type="text" placeholder="Contoh: Ahmad" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2CBCC4] transition" required />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium mb-1">Email <span className="text-red-600">*</span></label>
                    <input name="email" type="email" placeholder="Contoh: example@gmail.com" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2CBCC4] transition" required />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Nomor Whatsapp <span className="text-red-600">*</span></label>
                  <input name="whatsapp" type="text" placeholder="Contoh: 0812xxxxxxx" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2CBCC4] transition" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Perihal <span className="text-red-600">*</span></label>
                  <input name="perihal" type="text" placeholder="Tulis Perihal Pesan..." className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2CBCC4] transition" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Pesan Anda <span className="text-red-600">*</span></label>
                  <textarea name="pesan" placeholder="Tulis Pesan Anda..." className="w-full border border-gray-300 rounded-lg px-3 py-2 h-48 resize-none focus:outline-none focus:ring-2 focus:ring-[#2CBCC4] transition" required />
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
                  <Facebook className="w-5 h-5" />
                  <a href="https://www.facebook.com/izinpasti" target="_blank"><span className="text-base">Izin Pasti</span></a>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <Instagram className="w-5 h-5" />
                  <a href="https://instagram.com/izinpasti" target="_blank"><span className="text-base">@izinpasti</span></a>
                </div>
                <div className="flex items-center gap-2 mb-6">
                  <WhatsappLogo className="w-5 h-5" />
                  <a href="https://api.whatsapp.com/send?phone=6285935000364&text=Halo!%20Saya%20ingin%20Berkonsultasi%20dengan%Izin%Pasti." target="_blank"><span className="text-base">+62 859-3500-0364</span></a>
                </div>
                <iframe
                  title="Lokasi Kantor"
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3960.10239030777!2d110.46003607499716!3d-6.997221993003952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwNTknNTAuMCJTIDExMMKwMjcnNDUuNCJF!5e0!3m2!1sid!2sid!4v1747555187031!5m2!1sid!2sid"
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