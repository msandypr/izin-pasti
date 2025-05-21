import WhatsappLogo from "@/components/etc/WhatsappLogo";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import ContactSection from "@/components/homepage/contact-section";

const hakiOne = [
    {
        title: "Pendaftaran Merek",
        image: "/images/jasa-legalitas/haki/merek-1.png",
        description: "Pendaftaran identitas dagang yang menjadi ciri khas perusahaan, biasanya berupa logo perusahaan.",
        price: "Rp. 4.000.000",
        features: [
            "Pengecekan Merek",
            "Pengajuan Pendaftaran",
            "Pemantauan Proses Pendaftaran",
            "Sertifikat Merek",
            "Konsultasi terkait Pendaftaran Merek dengan Konsultan Terdaftar",
        ]
    },
    {
        title: "Perpanjangan Merek",
        image: "/images/jasa-legalitas/haki/merek-2.png",
        description: "Perpanjangan hak merek terdaftar.",
        price: "Rp. 4.500.000",
        features: [
            "Sebelum masa berlaku habis",
            "Setelah masa berlaku habis hingga 6 bulan",
        ]
    },
    {
        title: "Pengalihan Merek",
        image: "/images/jasa-legalitas/haki/merek-3.png",
        description: "Transfer hak atas merek terdaftar kepada pihak lain.",
        price: "Rp. 3.200.000",
        features: [

        ]
    },
];

const hakiTwo = [
    {
        title: "Pendaftaran Hak Paten",
        image: "/images/jasa-legalitas/haki/merek-4.png",
        description: "Pendaftaran hak kekayaan intelektual untuk teknologi terbaru",
        price: "Rp. 4.000.000",
        features: [
            "Konsultasi Pendaftaran Paten",
            "Pemeriksaan Kelayakan Patentabilitas",
            "Persiapan Dokumen Pendaftaran",
            "Pemantauan Proses Pendaftaran",
            "Sertifikat Paten",
        ]
    },
    {
        title: "Pendaftaran Hak Cipta",
        image: "/images/jasa-legalitas/haki/merek-5.png",
        description: "Pendaftaran hak kekayaan intelektual untuk karya seni seperti musik dan sejenisnya.",
        price: "Rp. 3.000.000",
        features: [
            "Persiapan Dokumen Pendaftaran Hak Cipta",
            "Pengajuan Permohonan Hak Cipta",
            "Pemantauan Proses Pendaftaran Hak Cipta",
            "Penerbitan Sertifikat Hak Cipta",
            "Konsultasi terkait Pendaftaran Hak Cipta dengan Konsultan Terdaftar",
        ]
    },
    {
        title: "Pendaftaran Desain Industri",
        image: "/images/jasa-legalitas/haki/merek-6.png",
        description: "Pendaftaran hak kekayaan intelektual untuk kreasi desain khusus.",
        price: "Rp. 4.300.000",
        features: [
            "Pemeriksaan Desain Industri",
            "Pengajuan Pendaftaran Desain Industri",
            "Pemantauan Proses Pendaftaran Desain Industri",
            "Penerbitan Sertifikat Desain Industri",
            "Konsultasi terkait Pendaftaran Hak Desain Industri dengan Konsultan Terdaftar",
        ]
    },
];

const hakiThree = [
    {
        title: "Hak Cipta Program Komputer",
        image: "/images/jasa-legalitas/haki/merek-7.png",
        description: "Pendaftaran hak kekayaan intelektual untuk perangkat lunak komputer.",
        price: "Rp. 4.000.000",
        features: [
            "Persiapan Dokumen Pendaftaran Hak Cipta",
            "Pengajuan Permohonan Hak Cipta",
            "Pemantauan Proses Pendaftaran Hak Cipta",
            "Penerbitan Sertifikat Hak Cipta",
            "Konsultasi terkait Pendaftaran Hak Cipta dengan Konsultan Terdaftar",
        ]
    },
    {
        title: "Pendaftaran Rahasia Dagang",
        image: "/images/jasa-legalitas/haki/merek-8.png",
        description: "Rahasia dagang adalah aset berharga yang membuat bisnis Anda unik dan unggul. Jangan biarkan ide, formula, atau strategi bisnis Anda jatuh ke tangan yang salah. Daftarkan rahasia dagang Anda sekarang bersama Nusantara Legalitasku",
        price: "Rp. 4.300.000",
        features: [
            
        ]
    },
];

export default function HakiPage() {
    return (
        <>
            <section className="w-full pt-4 md:pt-8 bg-gradient-to-b from-[#2CBCC4]/20 to-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col items-center justify-center py-10 md:py-16">
                        <div className="inline-flex items-center gap-2 bg-[#2CBCC4]/20 px-3 py-1 rounded-full text-[#2CBCC4] font-medium text-sm">
                            <Link href="/layanan/jasa-legalitas" className="flex items-center gap-2">
                                <ArrowLeft className="h-4 w-4 fill-[#2CBCC4] text-[#2CBCC4]" />
                                <span>Kembali Ke Halaman Sebelumnya</span>
                            </Link>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold py-4 text-center">
                            Paket Pengurusan <span className="gradient-text">Hak Kekayaan Intelektual</span>
                        </h1>
                        <p className="text-md text-black text-center">
                            Kami siap membantu segala kebutuhan Pengurusan Hak Kekayaan Intelektual Anda dengan layanan profesional dan terpercaya.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:flex lg:flex-wrap lg:justify-center">
                        {hakiOne.map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-gradient-to-br from-[#e0f7fa] to-[#c8e6f8] p-6 rounded-2xl shadow border border-[#2CBCC4]/10 flex flex-col items-center lg:w-[30%] h-full"
                                style={{ minHeight: 580 }}
                            >
                                <h2 className="text-2xl font-bold text-[#2CBCC4] text-center">{item.title}</h2>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full aspect-square object-cover rounded-xl"
                                />
                                <p className="font-light text-sm text-black mb-1 min-h-[48px] text-center">
                                    {item.description}
                                </p>
                                <ul className="text-black text-sm mb-4 list-disc list-inside min-h-[140px] flex flex-col justify-start">
                                    {item.features.map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                </ul>
                                <p className="font-semibold text-md text-black text-center">Mulai dari</p>
                                <p className="font-bold text-2xl text-[#2CBCC4] text-center mb-4">{item.price}</p>
                                <div className="flex flex-col gap-2 w-full mt-auto">
                                    <a
                                        href={`https://wa.me/6285935000364?text=Halo!%2C%20Saya%20ingin%20konsultasi%20terkait%20Pendirian%20Perusahaan%20-%20${encodeURIComponent(item.title)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex px-6 py-2 rounded-full bg-[#2CBCC4] text-white font-semibold hover:bg-[#239ba0] transition text-center items-center justify-center gap-2"
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
            <section className="w-full pt-8 bg-gradient-to-t from-[#2CBCC4]/10 to-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:flex lg:flex-wrap lg:justify-center">
                        {hakiTwo.map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-gradient-to-br from-[#e0f7fa] to-[#c8e6f8] p-6 rounded-2xl shadow border border-[#2CBCC4]/10 flex flex-col items-center lg:w-[30%] h-full"
                                style={{ minHeight: 580 }}
                            >
                                <h2 className="text-2xl font-bold text-[#2CBCC4] text-center">{item.title}</h2>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full aspect-square object-cover rounded-xl"
                                />
                                <p className="font-light text-sm text-black mb-1 min-h-[48px] text-center">
                                    {item.description}
                                </p>
                                <ul className="text-black text-sm mb-4 list-disc list-inside min-h-[140px] flex flex-col justify-start">
                                    {item.features.map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                </ul>
                                <p className="font-semibold text-md text-black text-center">Mulai dari</p>
                                <p className="font-bold text-2xl text-[#2CBCC4] text-center mb-4">{item.price}</p>
                                <div className="flex flex-col gap-2 w-full mt-auto">
                                    <a
                                        href={`https://wa.me/6285935000364?text=Halo!%2C%20Saya%20ingin%20konsultasi%20terkait%20Pendirian%20Perusahaan%20-%20${encodeURIComponent(item.title)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex px-6 py-2 rounded-full bg-[#2CBCC4] text-white font-semibold hover:bg-[#239ba0] transition text-center items-center justify-center gap-2"
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

            <section className="w-full pt-8 pb-8 md:pb-0 bg-gradient-to-b from-[#2CBCC4]/10 to-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:flex lg:flex-wrap lg:justify-center">
                        {hakiThree.map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-gradient-to-br from-[#e0f7fa] to-[#c8e6f8] p-6 rounded-2xl shadow border border-[#2CBCC4]/10 flex flex-col items-center lg:w-[30%] h-full"
                                style={{ minHeight: 580 }}
                            >
                                <h2 className="text-2xl font-bold text-[#2CBCC4] text-center">{item.title}</h2>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full aspect-square object-cover rounded-xl"
                                />
                                <p className="font-light text-sm text-black mb-1 min-h-[100px] text-center">
                                    {item.description}
                                </p>
                                <ul className="text-black text-sm mb-4 list-disc list-inside min-h-[140px] flex flex-col justify-start">
                                    {item.features.map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                </ul>
                                <p className="font-semibold text-md text-black text-center">Mulai dari</p>
                                <p className="font-bold text-2xl text-[#2CBCC4] text-center mb-4">{item.price}</p>
                                <div className="flex flex-col gap-2 w-full mt-auto">
                                    <a
                                        href={`https://wa.me/6285935000364?text=Halo!%2C%20Saya%20ingin%20konsultasi%20terkait%20Pendirian%20Perusahaan%20-%20${encodeURIComponent(item.title)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex px-6 py-2 rounded-full bg-[#2CBCC4] text-white font-semibold hover:bg-[#239ba0] transition text-center items-center justify-center gap-2"
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