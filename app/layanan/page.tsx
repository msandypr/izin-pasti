import React from "react";
import Breadcrumb from "@/components/breadcrumb";
import ContactSection from "@/components/homepage/contact-section";

const layanan = [
  {
    title: "Jasa Legalitas",
    image: "/images/layanan-jasa-legalitas.png",
    link: "/layanan/jasa-legalitas",
    subtitle: "Urus dokumen dan perizinan bisnis dengan mudah dan cepat."
  },
  {
    title: "Jasa Pengacara",
    image: "/images/layanan-jasa-pengacara.png",
    link: "/layanan/jasa-pengacara",
    subtitle: "Solusi hukum profesional untuk perlindungan hak Anda."
  },
  {
    title: "Virtual Office",
    image: "/images/layanan-virtual-office.png",
    link: "/layanan/virtual-office",
    subtitle: "Alamat bisnis strategis dan layanan kantor tanpa sewa mahal."
  }
];

export default function LayananPage() {
  return (
    <>
      <Breadcrumb
        title="Layanan"
        items={[
          { label: "Home", href: "/" },
          { label: "Layanan" }
        ]}
      />
      <section className="w-full pt-4 pb-8 md:pt-8 md:pb-12 lg:pb-24 bg-gradient-to-b from-[#2CBCC4]/10 to-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center py-10 md:py-16">
            <h1 className="text-3xl md:text-4xl font-bold py-4 text-center">
              Temukan Solusi <span className="gradient-text">Legal Terbaik</span> untuk <span className="gradient-text">Bisnis Anda</span>
            </h1>
            <p className="text-md text-black text-center">
              Kami menyediakan layanan legal terpercaya dengan tim profesional yang siap membantu mengembangkan bisnis Anda
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {layanan.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow p-6 border border-[#2CBCC4]/10 flex flex-col items-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full aspect-square object-cover rounded-xl mb-4"
                />
                <h2 className="text-xl font-bold text-[#2CBCC4] mb-2 text-center">{item.title}</h2>
                {/* <p className="text-black text-sm text-center mb-4">{item.subtitle}</p> */}
                <a
                  href={item.link}
                  className="mt-auto inline-block px-6 py-2 rounded-full bg-[#2CBCC4] text-white font-semibold hover:bg-[#239ba0] transition"
                >
                  Lihat Layanan
                </a>
              </div>
            ))}
          </div>
        </div>
      </section >
      <ContactSection />
    </>
  );
}