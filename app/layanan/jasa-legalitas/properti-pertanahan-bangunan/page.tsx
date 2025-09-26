"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import ContactSection from "@/components/homepage/contact-section";
import Image from "next/image";
import WhatsappLogo from "@/components/etc/WhatsappLogo";
import { motion } from "framer-motion";

export default function PropertiPertanahanBangunanPage() {
    return (
        <>
            <section className="w-full pt-4 pb-8 md:pt-8 md:pb-16 bg-gradient-to-t from-[#83A46D]/10 to-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex flex-col items-center justify-center py-10 md:py-16"
                    >
                        <div className="inline-flex items-center gap-2 bg-[#83A46D]/20 px-3 py-1 rounded-full text-[#83A46D] font-medium text-sm">
                            <Link href="/layanan/jasa-legalitas" className="flex items-center gap-2">
                                <ArrowLeft className="h-4 w-4 fill-[#83A46D] text-[#83A46D]" />
                                <span>Kembali Ke Halaman Sebelumnya</span>
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        className="bg-gradient-to-br from-[#e0f7fa] to-[#c8e6f8] p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto space-y-6 md:space-y-0 md:space-x-6"
                    >
                        <div className="flex-shrink-0">
                            <Image
                                src="/images/jasa-legalitas/pendirian-perusahaan/properti-pertahanan-bangunan.png"
                                alt="Ilustrasi Pendirian PT"
                                width={320}
                                height={320}
                                className="rounded-md object-cover"
                            />
                        </div>
                        <div className="flex-1">
                            <h2 className="text-3xl font-bold text-[#83A46D]">Properti Pertanahan Bangunan</h2>
                            <p className="mt-4 text-sm text-black max-w-4xl">
                                Kami menyediakan solusi lengkap untuk mengurus seluruh kebutuhan legalitas terkait tanah dan properti. Tim kami siap membantu Anda dalam berbagai proses, mulai dari perhitungan biaya pajak dan notaris untuk transaksi jual beli, hibah, atau warisan properti, hingga pengurusan balik nama serta peningkatan status hak guna bangunan.
                            </p>
                            <button
                                onClick={() => {
                                    window.open("https://wa.me/6285935000364", "_blank");
                                }}
                                className="flex px-6 py-2 rounded-full bg-[#83A46D] text-white font-semibold hover:bg-[#239ba0] transition text-center items-center justify-center gap-2 mt-4"
                            >
                                <WhatsappLogo /> Konsultasi Sekarang!
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="w-full pt-4 pb-16 md:pb-8 bg-gradient-to-b from-[#83A46D]/10 to-white">
                <div className="container mx-auto px-4 flex justify-center">
                    <div className="w-full max-w-3xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="text-2xl md:text-3xl font-bold text-center text-[#83A46D] mb-8"
                        >
                            Apa Saja Properti Pertanahan Bangunan?
                        </motion.h2>

                        <div className="flex flex-col gap-4">
                            {[
                                "Perhitungan Biaya Pajak dan Notaris.",
                                "Estimasi Biaya Pajak dan Notaris Kalkulator Pajak Properti",
                                "Pengecekan ke BPN",
                                "Pengurusan Akta Balik Nama",
                                "Pengelolaan Pajak untuk Penjual dan Pembeli.",
                                "Pengurusan Akta Jual-Beli",
                                "Proses Pengalihan Nama di BPN.",
                                "Peningkatan Hak Guna Bangunan",
                                "Pengurusan Ahli Waris Tanah",
                                "Notaris & PPAT",
                            ].map((requirement, i) => (
                                <motion.div
                                    key={requirement}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.05 }}
                                    className="flex items-center p-4 bg-white rounded-xl shadow-md border border-[#83A46D]"
                                >
                                    <p className="text-black text-lg font-bold">{requirement}</p>
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
