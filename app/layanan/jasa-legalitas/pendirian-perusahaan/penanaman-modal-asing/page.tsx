"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import ContactSection from "@/components/homepage/contact-section";
import CardPendirian from "@/components/layanan/card-pendirian";
import { motion } from "framer-motion";

const pmaText = [
    {
        title: "Pendiri Perorangan (WNI)",
        image: "/images/jasa-legalitas/pendirian-perusahaan/penanaman-modal-asing-2.png",
        features: [
            "Foto/Scan KTP",
            "Foto/Scan NPWP Aktif",
        ]
    },
    {
        title: "Pendiri Perorangan (WNA)",
        image: "/images/jasa-legalitas/pendirian-perusahaan/penanaman-modal-asing-3.png",
        features: [
            "Foto/Scan Passport",
            "Foto/Scan NPWP Aktif",
        ]
    },
    {
        title: "Pendiri Badan Usaha",
        image: "/images/jasa-legalitas/pendirian-perusahaan/penanaman-modal-asing-4.png",
        features: [
            "Scan Akta Perusahaan",
            "Scan SK Pendirian",
            "Foto/Scan KTP Para Pendiri",
            "Foto/Scan NPWP Para Pendiri",
            "Foto/Scan NPWP Perusahaan ",
        ]
    },
];

export default function PersekutuanPerdataPage() {
    return (
        <>
            <section className="w-full pt-4 pb-8 md:pt-8 md:pb-16 lg:pb-24 bg-gradient-to-t from-[#2CBCC4]/10 to-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="flex flex-col items-center justify-center py-10 md:py-16"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            className="inline-flex items-center gap-2 bg-[#2CBCC4]/20 px-3 py-1 rounded-full text-[#2CBCC4] font-medium text-sm"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Link href="/layanan/jasa-legalitas/pendirian-perusahaan" className="flex items-center gap-2">
                                <ArrowLeft className="h-4 w-4 fill-[#2CBCC4] text-[#2CBCC4]" />
                                <span>Kembali Ke Halaman Sebelumnya</span>
                            </Link>
                        </motion.div>
                        <motion.h1
                            className="text-3xl md:text-4xl font-bold py-4 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.15 }}
                            viewport={{ once: true }}
                        >
                            Paket <span className="gradient-text">Penanaman Modal Asing</span>
                        </motion.h1>
                        <motion.p
                            className="text-md text-black text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.22 }}
                            viewport={{ once: true }}
                        >
                            Kami siap membantu segala kebutuhan Penanaman Modal Asing Anda dengan layanan profesional dan terpercaya.
                        </motion.p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <CardPendirian
                            title="Penanaman Modal Asing"
                            price="Rp. 10.000.000"
                            image="/images/jasa-legalitas/pendirian-perusahaan/penanaman-modal-asing.png"
                            features={[]}
                            note=""
                            ctaText="Konsultasikan Sekarang"
                            onCtaClick={() => window.open("https://wa.me/6285935000364?text=Halo! Saya ingin konsultasi terkait Penanaman Modal Asing", "_blank")}
                        />
                    </motion.div>
                </div>
            </section>
            <section className="w-full pt-4 pb-8 md:pt-8 md:pb-16 lg:pb-24 bg-gradient-to-b from-[#2CBCC4]/10 to-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="flex flex-col items-center justify-center py-10 md:py-16"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <motion.h2
                            className="text-3xl font-bold text-center text-[#2CBCC4] mb-8"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                        >
                            Persyaratan Penanaman Modal Asing (PMA)
                        </motion.h2>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:flex lg:flex-wrap lg:justify-center">
                        {pmaText.map((item, idx) => (
                            <motion.div
                                key={idx}
                                className="bg-white p-6 rounded-2xl shadow border border-[#2CBCC4] flex flex-col items-center lg:w-[30%]"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.15 * idx }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-2xl font-bold text-[#2CBCC4] mb-2 text-center">{item.title}</h2>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full aspect-square object-cover rounded-xl mb-4"
                                />
                                <ul className="text-black text-sm font-bold text-left mb-4 list-none list-inside">
                                    {item.features.map((feature, i) => (
                                        <li key={i} className="flex items-start">
                                            <p className="mr-2">✅</p>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <ContactSection />
        </>
    );
}