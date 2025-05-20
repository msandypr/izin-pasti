import WhatsappLogo from "@/components/etc/WhatsappLogo";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import ContactSection from "@/components/homepage/contact-section";

const pembuatanDokumen = [
    {
        title: "Perubahan Data Perseroan",
        image: "/images/jasa-legalitas/pembuatan-dokumen/perubahan-data-perseroan.png",
        price: "Rp. 3.000.000",
        description: "Pergantian atau Perpanjangan Jabatan Direksi dan Komisaris"
    },
    {
        title: "Perubahan Anggaran Dasar (Pasal 1 - 4)",
        image: "/images/jasa-legalitas/pembuatan-dokumen/anggaran-dasar-1.png",
        price: "Rp. 5.000.000",
        description: "Untuk Anda yang berencana melakukan perubahan pada Anggaran Dasar (Pasal 1-4), seperti nama perusahaan, lokasi kedudukan, bidang usaha, atau modal."
    },
    {
        title: "Perubahan Anggaran Dasar (Selain Pasal 1 - 4)",
        image: "/images/jasa-legalitas/pembuatan-dokumen/anggaran-dasar-2.png",
        price: "Rp. 3.000.000",
        description: "Untuk Anda yang ingin melakukan perubahan pada Anggaran Dasar di luar Pasal 1-4."
    },
    {
        title: "Perubahan Anggaran Dasar Dan Data Perseroan",
        image: "/images/jasa-legalitas/pembuatan-dokumen/anggaran-dasar-3.png",
        price: "Rp. 7.000.000",
        description: "Perubahan pada Anggaran Dasar atau Data Perusahaan."
    },
    {
        title: "Pembuatan Cabang Perusahaan",
        image: "/images/jasa-legalitas/pembuatan-dokumen/cabang-usaha.png",
        price: "Rp. 3.000.000",
        description: "Jasa pembuatan akta khusus untuk pendirian cabang."
    },
    {
        title: "Perubahan Data Perusahaan Asing (PMA)",
        image: "/images/jasa-legalitas/pembuatan-dokumen/data-usaha-asing.png",
        price: "Rp. 7.000.000",
        description: "Perubahan Data khusus Perusahaan Modal Asing (PMA)"
    },
    {
        title: "Akta Jual Beli",
        image: "/images/jasa-legalitas/pembuatan-dokumen/akta-jual-beli.png",
        price: "Rp. 4.000.000",
        description: "Dokumen legal yang memuat kesepakatan antara penjual dan pembeli atas suatu objek, sebagai bukti sah peralihan hak."
    },
    {
        title: "Akta Perjanjian Pra-Nikah",
        image: "/images/jasa-legalitas/pembuatan-dokumen/wedding.png",
        price: "Rp. 4.000.000",
        description: "Kesepakatan tertulis antara calon suami dan istri yang mengatur hak dan kewajiban harta sebelum dan selama pernikahan."
    },
    {
        title: "Pengumuman Koran",
        image: "/images/jasa-legalitas/pembuatan-dokumen/news.png",
        price: "Rp. 2.000.000",
        description: "Layanan publikasi resmi di media cetak untuk keperluan hukum atau administratif."
    },
    {
        title: "Berita Negara Republik Indonesia (BNRI)",
        image: "/images/jasa-legalitas/pembuatan-dokumen/news-2.png",
        price: "Rp. 2.000.000",
        description: "Platform resmi yang dikeluarkan oleh Pemerintah Indonesia untuk mempublikasikan pengumuman resmi terkait pendirian badan hukum."
    },
    {
        title: "Perjanjian Pisah Harta",
        image: "/images/jasa-legalitas/pembuatan-dokumen/divorce.png",
        price: "Rp. 4.000.000",
        description: "Bagi Anda yang ingin menyusun Perjanjian Pra atau Pasca Nikah yang mengatur pemisahan harta dan utang antara pasangan suami istri."
    },
];

export default function PembuatanDokumenPage() {
    return (
        <>
            <section className="w-full pt-4 pb-8 md:pt-8 md:pb-16 lg:pb-24 bg-gradient-to-b from-[#2CBCC4]/10 to-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col items-center justify-center py-10 md:py-16">
                        <div className="inline-flex items-center gap-2 bg-[#2CBCC4]/20 px-3 py-1 rounded-full text-[#2CBCC4] font-medium text-sm">
                            <Link href="/layanan/jasa-legalitas" className="flex items-center gap-2">
                                <ArrowLeft className="h-4 w-4 fill-[#2CBCC4] text-[#2CBCC4]" />
                                <span>Kembali Ke Halaman Sebelumnya</span>
                            </Link>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold py-4 text-center">
                            Paket Pembuatan <span className="gradient-text">Dokumen dan Akta Perusahaan</span>
                        </h1>
                        <p className="text-md text-black text-center">
                            Kami siap membantu segala kebutuhan Pembuatan Dokumen dan Akta Perusahaan yang Anda perlukan dengan layanan profesional dan terpercaya.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:flex lg:flex-wrap lg:justify-center">
                        {pembuatanDokumen.map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-gradient-to-br from-[#e0f7fa] to-[#c8e6f8] p-6 rounded-2xl shadow border border-[#2CBCC4]/10 flex flex-col lg:w-[30%]">
                                <h2 className="text-2xl font-bold text-[#2CBCC4] mb-2 text-center min-h-[72px]">
                                    {item.title}
                                </h2>
                                <p className="font-light text-sm text-black mb-4 text-center min-h-[72px]">
                                    {item.description}
                                </p>
                                <div className="mb-4 flex justify-center">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="h-48 w-auto object-contain"
                                    />
                                </div>
                                <div className="text-center mb-4">
                                    <p className="font-light text-sm text-black">Mulai dari</p>
                                    <p className="font-bold text-2xl text-[#2CBCC4]">{item.price}</p>
                                </div>
                                <div className="mt-auto">
                                    <a
                                        href={`https://wa.me/6285935000364?text=Halo!%2C%20Saya%20ingin%20konsultasi%20terkait%20Pembuatan%20Dokumen%20-%20${encodeURIComponent(item.title)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex px-6 py-2 rounded-full bg-[#2CBCC4] text-white font-semibold hover:bg-[#239ba0] transition text-center items-center justify-center gap-2 w-full"
                                    >
                                        <WhatsappLogo className="h-5 w-5" style={{ fill: "white" }} />
                                        Konsultasikan Sekarang
                                    </a>
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