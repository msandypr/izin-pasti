"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import ContactSection from "@/components/homepage/contact-section";
import Image from "next/image";
import WhatsappLogo from "@/components/etc/WhatsappLogo";
import { motion } from "framer-motion";

export default function PerjanjianPage() {
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
                                src="/images/jasa-legalitas/perjanjian.png"
                                alt="Ilustrasi Pendirian PT"
                                width={320}
                                height={320}
                                className="rounded-md object-cover"
                            />
                        </div>
                        <div className="flex-1">
                            <h2 className="text-3xl font-bold text-[#83A46D]">Pembuatan dan Peninjauan Perjanjian</h2>
                            <p className="mt-4 text-sm text-black max-w-4xl">
                                Buat perjanjian tertulis yang jelas dan mengikat dalam bisnis dan kerja sama untuk memastikan hak dan kewajiban setiap pihak dapat terpenuhi dengan baik.
                            </p>
                            <p className="text-md font-semibold text-black mt-4">Mulai dari</p>
                            <p className="text-2xl font-bold text-[#83A46D]">Rp. 300.000</p>
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
                            Apa Saja Layanan Kami?
                        </motion.h2>

                        <div className="flex flex-col gap-4">
                            {[
                                "Surat Kuasa",
                                "Surat Pernyataan",
                                "Surat Jawaban",
                                "Perjanjian Sewa",
                                "Perjanjian Pinjam Pakai",
                                "Perjanjian Kerja Waktu Tertentu",
                                "Perjanjian Kerja Waktu Tidak Tertentu",
                                "Perjanjian Kerja Freelance",
                                "Perjanjian Pendiri (Founder Agreement)",
                                "Perjanjian Pemegang Saham (Shareholder Agreement)",
                                "Perjanjian Hutang Pemegang Saham (Shareholder Loan Agreement)",
                                "Perjanjian Investasi",
                                "Perjanjian Kepemilikan Saham Karyawan (Employment Stock Ownership Plan Agreement)",
                                "Perjanjian Kerjasama Bagi Hasil (Profit Sharing Agreement)",
                                "Perjanjian Kerjasama",
                                "Perjanjian Joint Venture",
                                "Perjanjian Distributor (Distributor Agreement)",
                                "Perjanjian Pemasok Barang (Supplier Agreement)",
                                "Perjanjian Penyedia Jasa",
                                "Perjanjian Hutang Piutang",
                                "Perjanjian Pengalihan Hak",
                                "Perjanjian Lisensi",
                                "Perjanjian Pengalihan HKI",
                                "Perjanjian Waralaba",
                                "Perjanjian Sponsor",
                                "Perjanjian Jual Beli",
                                "Terms & Conditions",
                                "Kebijakan Privasi Penyelenggaraan Platform Digital (Privacy Policy)",
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
