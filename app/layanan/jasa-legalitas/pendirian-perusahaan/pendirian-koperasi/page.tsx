"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import ContactSection from "@/components/homepage/contact-section";
import CardPendirian from "@/components/layanan/card-pendirian";
import { motion } from "framer-motion";

export default function PendirianKoperasiPage() {
    const requirements = [
        {
            title: "Jumlah Anggota Pendiri",
            desc: "Koperasi primer wajib didirikan oleh minimal 20 orang, sedangkan koperasi sekunder harus dibentuk oleh setidaknya 3 koperasi sebagai anggotanya.",
        },
        {
            title: "Dokumen Pendirian",
            desc: "Para pendiri harus menyerahkan dokumen-dokumen penting, seperti akta pendirian, berita acara rapat pendirian, bukti setoran modal awal, dan rencana kegiatan usaha awal.",
        },
        {
            title: "Rapat Pendirian",
            desc: "Para pendiri wajib mengadakan rapat pendirian koperasi. Dalam rapat ini, dibahas dan disetujui Anggaran Dasar (AD) koperasi, tujuan, nama koperasi, dan jenis koperasi yang akan dibentuk.",
        },
        {
            title: "Persetujuan Nama Koperasi",
            desc: "Nama koperasi harus mendapatkan persetujuan melalui sistem administrasi OSS/SIINBKUD sebelum melanjutkan proses pengesahan.",
        },
        {
            title: "Penyusunan Anggaran Dasar (AD)",
            desc: "Dalam rapat pendirian, para pendiri menyusun dan menyetujui Anggaran Dasar (AD) koperasi, yang memuat informasi penting seperti nama, tujuan, dan struktur organisasi.",
        },
        {
            title: "Pengesahan Badan Hukum",
            desc: "Akta pendirian koperasi disampaikan ke Kemenkop melalui sistem administrasi SIINBKUD untuk mendapatkan pengesahan badan hukum koperasi.",
        },
        {
            title: "Penggunaan Jasa Notaris",
            desc: "Akta dan dokumen pendirian koperasi perlu ditandatangani oleh notaris untuk memenuhi persyaratan legalitas dan administratif.",
        },
        {
            title: "Koperasi Sekunder",
            desc: "Untuk koperasi sekunder, diperlukan tambahan dokumen dan syarat seperti akta dari koperasi anggota, surat kuasa, serta NPWP aktif dari koperasi anggota.",
        },
    ];
    return (
        <>
            <section className="w-full pt-4 pb-8 md:pt-8 md:pb-16 lg:pb-24 bg-gradient-to-t from-[#83A46D]/10 to-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="flex flex-col items-center justify-center py-10 md:py-16"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="inline-flex items-center gap-2 bg-[#83A46D]/20 px-3 py-1 rounded-full text-[#83A46D] font-medium text-sm">
                            <Link href="/layanan/jasa-legalitas/pendirian-perusahaan" className="flex items-center gap-2">
                                <ArrowLeft className="h-4 w-4 fill-[#83A46D] text-[#83A46D]" />
                                <span>Kembali Ke Halaman Sebelumnya</span>
                            </Link>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold py-4 text-center">
                            Paket Pendirian <span className="gradient-text">Koperasi</span>
                        </h1>
                        <p className="text-md text-black text-center">
                            Kami siap membantu segala kebutuhan Pendirian Koperasi Anda dengan layanan profesional dan terpercaya.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <CardPendirian
                            title="Pendirian Koperasi"
                            price="Rp. 5.000.000"
                            image="/images/jasa-legalitas/pendirian-perusahaan/pendirian-Koperasi.png"
                            features={[
                                "Pengecekan dan Pemesanan Nama Koperasi",
                                "Akta Pendirian Koperasi",
                                "SK Kemenkum",
                                "Akun OSS RBA",
                                "Nomor Induk Berusaha (NIB) atau Izin Usaha",
                                "Nomor Pokok Wajib Pajak (NPWP)",
                            ]}
                            note=""
                            ctaText="Konsultasikan Sekarang"
                            onCtaClick={() => window.open("https://wa.me/6285935000364?text=Halo! Saya ingin konsultasi terkait Pendirian Koperasi", "_blank")}
                        />
                    </motion.div>
                </div>
            </section>
            <section className="w-full pt-4 pb-8 md:pt-8 md:pb-16 lg:pb-24 bg-gradient-to-b from-[#83A46D]/10 to-white">
                <div className="container mx-auto px-4">
                    <motion.h2
                        className="text-3xl font-bold text-center text-[#83A46D] mb-10"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        Persyaratan Pendirian Koperasi
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                        {requirements.map((req, idx) => (
                            <motion.div
                                key={idx}
                                className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.12 * idx }}
                            >
                                <div className="flex-shrink-0">
                                    <div className="w-10 h-10 bg-[#83A46D] rounded-full flex items-center justify-center text-white font-bold text-lg">
                                        {idx + 1}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-[#83A46D] font-semibold mb-1">{req.title}</h3>
                                    <p className="text-sm text-black">{req.desc}</p>
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