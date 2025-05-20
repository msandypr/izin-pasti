"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import ContactSection from "@/components/homepage/contact-section";
import CardPendirian from "@/components/layanan/card-pendirian";

export default function PendirianKoperasiPage() {
    return (
        <>
            <section className="w-full pt-4 pb-8 md:pt-8 md:pb-16 lg:pb-24 bg-gradient-to-t from-[#2CBCC4]/10 to-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col items-center justify-center py-10 md:py-16">
                        <div className="inline-flex items-center gap-2 bg-[#2CBCC4]/20 px-3 py-1 rounded-full text-[#2CBCC4] font-medium text-sm">
                            <Link href="/layanan/jasa-legalitas/pendirian-perusahaan" className="flex items-center gap-2">
                                <ArrowLeft className="h-4 w-4 fill-[#2CBCC4] text-[#2CBCC4]" />
                                <span>Kembali Ke Halaman Sebelumnya</span>
                            </Link>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold py-4 text-center">
                            Paket Pendirian <span className="gradient-text">Koperasi</span>
                        </h1>
                        <p className="text-md text-black text-center">
                            Kami siap membantu segala kebutuhan Pendirian Koperasi Anda dengan layanan profesional dan terpercaya.
                        </p>
                    </div>
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
                </div>
            </section>
            <section className="w-full pt-4 pb-8 md:pt-8 md:pb-16 lg:pb-24 bg-gradient-to-b from-[#2CBCC4]/10 to-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-[#2CBCC4] mb-10">
                        Persyaratan Pendirian Koperasi
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                        <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md">
                            <div className="flex-shrink-0">
                                <div className="w-10 h-10 bg-[#2CBCC4] rounded-full flex items-center justify-center text-white font-bold text-lg">
                                    1
                                </div>
                            </div>
                            <div>
                                <h3 className="text-[#2CBCC4] font-semibold mb-1">Jumlah Anggota Pendiri</h3>
                                <p className="text-sm text-black">
                                    Koperasi primer wajib didirikan oleh minimal 20 orang, sedangkan koperasi sekunder harus dibentuk oleh setidaknya 3 koperasi sebagai anggotanya.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md">
                            <div className="flex-shrink-0">
                                <div className="w-10 h-10 bg-[#2CBCC4] rounded-full flex items-center justify-center text-white font-bold text-lg">
                                    2
                                </div>
                            </div>
                            <div>
                                <h3 className="text-[#2CBCC4] font-semibold mb-1">Dokumen Pendirian</h3>
                                <p className="text-sm text-black">
                                    Para pendiri harus menyerahkan dokumen-dokumen penting, seperti akta pendirian, berita acara rapat pendirian, bukti setoran modal awal, dan rencana kegiatan usaha awal.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md">
                            <div className="flex-shrink-0">
                                <div className="w-10 h-10 bg-[#2CBCC4] rounded-full flex items-center justify-center text-white font-bold text-lg">
                                    3
                                </div>
                            </div>
                            <div>
                                <h3 className="text-[#2CBCC4] font-semibold mb-1">Rapat Pendirian</h3>
                                <p className="text-sm text-black">
                                    Para pendiri wajib mengadakan rapat pendirian koperasi. Dalam rapat ini, dibahas dan disetujui Anggaran Dasar (AD) koperasi, tujuan, nama koperasi, dan jenis koperasi yang akan dibentuk.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md">
                            <div className="flex-shrink-0">
                                <div className="w-10 h-10 bg-[#2CBCC4] rounded-full flex items-center justify-center text-white font-bold text-lg">
                                    4
                                </div>
                            </div>
                            <div>
                                <h3 className="text-[#2CBCC4] font-semibold mb-1">Persetujuan Nama Koperasi</h3>
                                <p className="text-sm text-black">
                                    Nama koperasi harus mendapatkan persetujuan melalui sistem administrasi OSS/SIINBKUD sebelum melanjutkan proses pengesahan.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md">
                            <div className="flex-shrink-0">
                                <div className="w-10 h-10 bg-[#2CBCC4] rounded-full flex items-center justify-center text-white font-bold text-lg">
                                    5
                                </div>
                            </div>
                            <div>
                                <h3 className="text-[#2CBCC4] font-semibold mb-1">Penyusunan Anggaran Dasar (AD)</h3>
                                <p className="text-sm text-black">
                                    Dalam rapat pendirian, para pendiri menyusun dan menyetujui Anggaran Dasar (AD) koperasi, yang memuat informasi penting seperti nama, tujuan, dan struktur organisasi.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md">
                            <div className="flex-shrink-0">
                                <div className="w-10 h-10 bg-[#2CBCC4] rounded-full flex items-center justify-center text-white font-bold text-lg">
                                    6
                                </div>
                            </div>
                            <div>
                                <h3 className="text-[#2CBCC4] font-semibold mb-1">Pengesahan Badan Hukum</h3>
                                <p className="text-sm text-black">
                                    Akta pendirian koperasi disampaikan ke Kemenkop melalui sistem administrasi SIINBKUD untuk mendapatkan pengesahan badan hukum koperasi.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md">
                            <div className="flex-shrink-0">
                                <div className="w-10 h-10 bg-[#2CBCC4] rounded-full flex items-center justify-center text-white font-bold text-lg">
                                    7
                                </div>
                            </div>
                            <div>
                                <h3 className="text-[#2CBCC4] font-semibold mb-1">Penggunaan Jasa Notaris</h3>
                                <p className="text-sm text-black">
                                    Akta dan dokumen pendirian koperasi perlu ditandatangani oleh notaris untuk memenuhi persyaratan legalitas dan administratif.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md">
                            <div className="flex-shrink-0">
                                <div className="w-10 h-10 bg-[#2CBCC4] rounded-full flex items-center justify-center text-white font-bold text-lg">
                                    8
                                </div>
                            </div>
                            <div>
                                <h3 className="text-[#2CBCC4] font-semibold mb-1">Koperasi Sekunder</h3>
                                <p className="text-sm text-black">
                                    Untuk koperasi sekunder, diperlukan tambahan dokumen dan syarat seperti akta dari koperasi anggota, surat kuasa, serta NPWP aktif dari koperasi anggota.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <ContactSection />
        </>
    );
}