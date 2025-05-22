"use client"
import WhatsappLogo from "@/components/etc/WhatsappLogo";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import ContactSection from "@/components/homepage/contact-section";
import { motion } from "framer-motion";

const pembuatanDokumen = [
    {
        title: "Izin Usaha Jasa Pertambangan",
        image: "/images/jasa-legalitas/izin/mine.png",
        price: "Harga Spesial",
    },
    {
        title: "Sertifikasi Badan Usaha Jasa Konstruksi",
        image: "/images/jasa-legalitas/izin/construct.png",
        price: "Rp. 5.000.000",
    },
    {
        title: "Izin Penyalur Alat Kesehatan",
        image: "/images/jasa-legalitas/izin/medical-kit.png",
        price: "Rp. 9.000.000",
    },
    {
        title: "Industri Makanan Rumah Tangga",
        image: "/images/jasa-legalitas/izin/home-cook.png",
        price: "Rp. 5.000.000",
    },
    {
        title: "Izin Halal",
        image: "/images/jasa-legalitas/izin/halal.png",
        price: "Rp. 4.000.000",
    },
    {
        title: "Izin Reklame dan Pemasan",
        image: "/images/jasa-legalitas/izin/ads.png",
        price: "Rp. 5.000.000",
    },
    {
        title: "Izin Ekspor, Impor dan Logistik",
        image: "/images/jasa-legalitas/izin/logistic.png",
        price: "Rp. 9.000.000",
    },
    {
        title: "Izin Klinik",
        image: "/images/jasa-legalitas/izin/hospital.png",
        price: "Rp. 5.000.000",
    },
];

export default function PerizinanPage() {
    return (
        <>
            <section className="w-full pt-4 pb-8 md:pt-8 md:pb-16 lg:pb-24 bg-gradient-to-b from-[#2CBCC4]/10 to-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="flex flex-col items-center justify-center py-10 md:py-16"
                    >
                        <div className="inline-flex items-center gap-2 bg-[#2CBCC4]/20 px-3 py-1 rounded-full text-[#2CBCC4] font-medium text-sm">
                            <Link href="/layanan/jasa-legalitas" className="flex items-center gap-2">
                                <ArrowLeft className="h-4 w-4 fill-[#2CBCC4] text-[#2CBCC4]" />
                                <span>Kembali Ke Halaman Sebelumnya</span>
                            </Link>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold py-4 text-center">
                            Paket <span className="gradient-text">Perizinan</span>
                        </h1>
                        <p className="text-md text-black text-center">
                            Kami siap membantu segala kebutuhan Perizinan yang Anda perlukan dengan layanan profesional dan terpercaya.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:flex lg:flex-wrap lg:justify-center">
                        {pembuatanDokumen.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.15 }}
                                className="bg-gradient-to-br from-[#e0f7fa] to-[#c8e6f8] p-6 rounded-2xl shadow border border-[#2CBCC4]/10 flex flex-col lg:w-[30%]"
                            >
                                <h2 className="text-2xl font-bold text-[#2CBCC4] mb-2 text-center min-h-[72px]">
                                    {item.title}
                                </h2>
                                <div className="mb-4 flex justify-center">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="h-48 w-auto object-contain"
                                    />
                                </div>
                                <div className="text-center mb-4">
                                    <p className="font-semibold text-md text-black">Mulai dari</p>
                                    <p className="font-bold text-2xl text-[#2CBCC4]">{item.price}</p>
                                </div>
                                <div className="mt-auto">
                                    <Link
                                        href={`https://wa.me/6285935000364?text=Halo!%2C%20Saya%20ingin%20konsultasi%20terkait%20Pembuatan%20Dokumen%20-%20${encodeURIComponent(item.title)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex px-6 py-2 rounded-full bg-[#2CBCC4] text-white font-semibold hover:bg-[#239ba0] transition text-center items-center justify-center gap-2 w-full"
                                    >
                                        <WhatsappLogo className="h-5 w-5" style={{ fill: "white" }} />
                                        Konsultasikan Sekarang
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <ContactSection />
        </>
    );
}
