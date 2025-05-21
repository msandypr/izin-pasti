"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import ContactSection from "@/components/homepage/contact-section";
import CardPendirian from "@/components/layanan/card-pendirian";
import { motion } from "framer-motion";

export default function PendirianYayasanPage() {
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
                            Paket Pendirian <span className="gradient-text">Yayasan</span>
                        </motion.h1>
                        <motion.p
                            className="text-md text-black text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.22 }}
                            viewport={{ once: true }}
                        >
                            Kami siap membantu segala kebutuhan Pendirian Yayasan Anda dengan layanan profesional dan terpercaya.
                        </motion.p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <CardPendirian
                            title="Pendirian Yayasan"
                            price="Rp. 5.500.000"
                            image="/images/jasa-legalitas/pendirian-perusahaan/pendirian-yayasan.png"
                            features={[
                                "Akta Pendirian untuk Yayasan",
                                "NPWP dan Surat Keterangan Terdaftar (SKT)",
                                "Nomor Induk Berusaha (NIB)"
                            ]}
                            note=""
                            ctaText="Konsultasikan Sekarang"
                            onCtaClick={() => window.open("https://wa.me/6285935000364?text=Halo! Saya ingin konsultasi terkait Pendirian Yayasan", "_blank")}
                        />
                    </motion.div>
                </div>
            </section>
            <section className="w-full pt-4 pb-8 md:pt-8 md:pb-16 lg:pb-24 bg-gradient-to-b from-[#2CBCC4]/10 to-white">
                <div className="container mx-auto px-4 flex justify-center">
                    <div className="w-full max-w-2xl">
                        <motion.h2
                            className="text-3xl font-bold text-center text-[#2CBCC4] mb-8"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                        >
                            Persyaratan Pendirian Yayasan
                        </motion.h2>
                        <div className="flex flex-col gap-6">
                            {[
                                "KTP dan NPWP Pengurus Yayasan",
                                "Informasi Kontak Perusahaan (Nomor Telepon dan Email)",
                                "Formulir Pendaftaran Pendirian Yayasan",
                                "Pengesahan dengan Tanda Tangan Notaris"
                            ].map((requirement, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.12 * index }}
                                    viewport={{ once: true }}
                                >
                                    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-[#2CBCC4] text-white font-bold rounded-full">
                                        {index + 1}
                                    </div>
                                    <p className="text-black text-lg">{requirement}</p>
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