"use client";
import { FiMail, FiPhone, FiUsers, FiMapPin } from 'react-icons/fi';
import ContactSection from "@/components/homepage/contact-section";
import Image from "next/image";
import WhatsappLogo from "@/components/etc/WhatsappLogo";

export default function PerjanjianPage() {
  return (
    <>
      <section className="w-full pt-4 pb-8 md:pt-24 md:pb-16 bg-gradient-to-t from-[#2CBCC4]/10 to-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-[#e0f7fa] to-[#c8e6f8] p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto space-y-6 md:space-y-0 md:space-x-6">
            <div className="flex-shrink-0">
              <Image
                src="/images/layanan/virtual-office.png"
                alt="Virtual Office"
                width={320}
                height={320}
                className="rounded-md object-cover"
              />
            </div>
            <div className="flex-1">
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
            </div>
          </div>
        </div>
      </section>
      <section className="w-full pt-4 pb-16 md:pb-8 bg-gradient-to-b from-[#2CBCC4]/10 to-white">
        <div className="container mx-auto px-4 flex justify-center">
          <div className="w-full max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-[#2CBCC4] mb-8">Fasilitas Virtual Office</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-2 border-[#2CBCC4] rounded-lg p-6 bg-white">
                <div className="flex items-center gap-2 mb-2 min-h-[36px]">
                  <FiMail className="text-[#2CBCC4] w-6 h-6" />
                  <span className="text-xl font-bold">Pengelolaan Surat-Menyurat</span>
                </div>
                <p>Semua surat dan paket yang diterima akan dikelola oleh resepsionis profesional, yang akan memberi tahu Anda setiap kali ada kiriman yang tiba.</p>
              </div>
              <div className="border-2 border-[#2CBCC4] rounded-lg p-6 bg-white">
                <div className="flex items-center gap-2 mb-2 min-h-[36px]">
                  <FiPhone className="text-[#2CBCC4] w-6 h-6" />
                  <span className="text-xl font-bold">Dedicated Phone Number</span>
                </div>
                <p>Nomor telepon eksklusif untuk perusahaan Anda yang dikelola oleh tim call center berpengalaman untuk menerima, meneruskan, dan menyampaikan informasi dari panggilan masuk.</p>
              </div>
              <div className="border-2 border-[#2CBCC4] rounded-lg p-6 bg-white">
                <div className="flex items-center gap-2 mb-2 min-h-[36px]">
                  <FiUsers className="text-[#2CBCC4] w-6 h-6" />
                  <span className="text-xl font-bold">Meeting Room</span>
                </div>
                <p>Anda dapat memanfaatkan fasilitas ruang rapat untuk mengadakan pertemuan dengan tim, pelanggan, atau rekan kerja.</p>
              </div>
              <div className="border-2 border-[#2CBCC4] rounded-lg p-6 bg-white">
                <div className="flex items-center gap-2 mb-2 min-h-[36px]">
                  <FiMapPin className="text-[#2CBCC4] w-6 h-6" />
                  <span className="text-xl font-bold">Penggunaan Alamat Prestisius untuk Keperluan Legalitas.</span>
                </div>
                <p>Alamat bisnis Anda terletak di lokasi strategis dan gedung terkenal, menciptakan kesan profesional bagi rekan serta pelanggan Anda.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}