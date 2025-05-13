"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import ContactSection from "@/components/homepage/contact-section";
import CardPendirian from "@/components/layanan/card-pendirian";

export default function PendirianPerkumpulanPage() {
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
                            Paket Pendirian <span className="gradient-text">Perkumpulan</span>
                        </h1>
                        <p className="text-md text-black text-center">
                            Kami siap membantu segala kebutuhan Pendirian Perkumpulan Anda dengan layanan profesional dan terpercaya.
                        </p>
                    </div>
                    <CardPendirian
                        title="Pendirian Perkumpulan"
                        price="Rp. 5.000.000"
                        image="/images/jasa-legalitas/pendirian-perusahaan/pendirian-perkumpulan.png"
                        features={[
                            "Akta Pendirian Perkumpulan",
                            "KTP dan NPWP Pendiri",
                            "Nomor Induk Berusaha (NIB) atau Izin Usaha",
                        ]}
                        note=""
                        ctaText="Konsultasikan Sekarang"
                        onCtaClick={() => window.open("https://wa.me/6285935000364?text=Halo! Saya ingin konsultasi terkait Pendirian Perkumpulan", "_blank")}
                    />
                </div>
            </section>
            <section className="w-full pt-4 pb-8 md:pt-8 md:pb-16 lg:pb-24 bg-gradient-to-b from-[#2CBCC4]/10 to-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-[#2CBCC4] mb-10">
                        Persyaratan Pendirian Perkumpulan
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                        {[
                            {
                                title: "Akta Pendirian",
                                desc: "Dibuat oleh notaris dalam bahasa Indonesia yang memuat maksud dan tujuan, kegiatan, serta susunan kepengurusan."
                            },
                            {
                                title: "Fotokopi KTP dan NPWP Pendiri",
                                desc: "Setiap pendiri wajib menyertakan fotokopi identitas diri dan NPWP sebagai bukti identitas hukum."
                            },
                            {
                                title: "Susunan Pengurus",
                                desc: "Melampirkan susunan pengurus lengkap dengan jabatan dan domisili setiap pengurus yang terlibat."
                            },
                            {
                                title: "Domisili Perkumpulan",
                                desc: "Surat keterangan domisili dari kelurahan atau perjanjian sewa tempat usaha sebagai bukti tempat kedudukan."
                            },
                            {
                                title: "Surat Pernyataan Tidak Keberatan",
                                desc: "Jika domisili berada di lingkungan perumahan, wajib melampirkan surat tidak keberatan dari warga sekitar."
                            },
                            {
                                title: "Maksud dan Tujuan yang Sah",
                                desc: "Harus sesuai dengan peraturan perundang-undangan dan tidak boleh bertentangan dengan hukum."
                            },
                            {
                                title: "Permohonan Pengesahan",
                                desc: "Permohonan diajukan secara online ke Kemenkumham melalui AHU Online untuk memperoleh status badan hukum."
                            },
                            {
                                title: "Pembayaran PNBP",
                                desc: "Pembayaran Penerimaan Negara Bukan Pajak (PNBP) sesuai ketentuan yang berlaku sebagai syarat akhir pengesahan."
                            }
                        ].map((item, index) => (
                            <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md">
                                <div className="flex-shrink-0">
                                    <div className="w-10 h-10 bg-[#2CBCC4] rounded-full flex items-center justify-center text-white font-bold text-lg">
                                        {index + 1}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-[#2CBCC4] font-semibold mb-1">{item.title}</h3>
                                    <p className="text-sm text-black">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <ContactSection />
        </>
    );
}