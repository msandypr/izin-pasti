"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import ContactSection from "@/components/homepage/contact-section";
import CardPendirian from "@/components/layanan/card-pendirian";

export default function PersekutuanPerdataPage() {
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
                            Paket <span className="gradient-text">Persekutuan Perdata</span>
                        </h1>
                        <p className="text-md text-black text-center">
                            Kami siap membantu segala kebutuhan Persekutuan Perdata Anda dengan layanan profesional dan terpercaya.
                        </p>
                    </div>
                    <CardPendirian
                        title="Persekutuan Perdata"
                        price="Rp. 3.500.000"
                        image="/images/jasa-legalitas/pendirian-perusahaan/persekutuan-perdata.png"
                        features={[
                            "Akta Pendirian untuk Persekutuan Perdata",
                            "NPWP dan Surat Keterangan Terdaftar (SKT)",
                            "Nomor Induk Berusaha (NIB) untuk Persekutuan Perdata",
                        ]}
                        note=""
                        ctaText="Konsultasikan Sekarang"
                        onCtaClick={() => window.open("https://wa.me/6285935000364?text=Halo! Saya ingin konsultasi terkait Persekutuan Perdata", "_blank")}
                    />
                </div>
            </section>
            <section className="w-full pt-4 pb-8 md:pt-8 md:pb-16 lg:pb-24 bg-gradient-to-b from-[#2CBCC4]/10 to-white">
                <div className="container mx-auto px-4 flex justify-center">
                    <div className="w-full max-w-2xl">
                        <h2 className="text-3xl font-bold text-center text-[#2CBCC4] mb-8">Persyaratan Persekutuan Perdata</h2>
                        <div className="flex flex-col gap-6">
                            {[
                                "KTP dan NPWP Sekutu Persekutuan Perdata",
                                "Informasi Kontak Perusahaan (Nomor Telepon dan Email)",
                                "Formulir Pendaftaran Persekutuan Perdata",
                                "Pengesahan dengan Tanda Tangan Notaris"
                            ].map((requirement, index) => (
                                <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md">
                                    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-[#2CBCC4] text-white font-bold rounded-full">
                                        {index + 1}
                                    </div>
                                    <p className="text-black text-lg">{requirement}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <ContactSection />
        </>
    );
}