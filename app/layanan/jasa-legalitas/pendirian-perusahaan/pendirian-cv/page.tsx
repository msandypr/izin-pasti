import WhatsappLogo from "@/components/etc/WhatsappLogo";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import ContactSection from "@/components/homepage/contact-section";

const pendirianCV = [
    {
        title: "Pendirian CV",
        image: "/images/jasa-legalitas/pendirian-perusahaan/pendirian-cv.png",
        price: "Rp. 2.500.000",
        features: [
            "Verifikasi Nama Perusahaan",
            "Konsultasi Proses Pendirian Perusahaan",
            "Penyusunan Akta Perusahaan",
            "Akta dan Surat Keputusan Kemenkumham",
            "Pembuatan NPWP dan Surat Keterangan Terdaftar (SKT)",
            "Nomor Induk Berusaha (NIB), Sertifikat Standar, dan Persetujuan Kesesuaian Kegiatan Pemanfaatan Ruang (PKKPR)"
        ]
    }
];

export default function PendirianCvPage() {
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
                            Paket Pendirian <span className="gradient-text">Commanditaire Vennootschap (CV)</span>
                        </h1>
                        <p className="text-md text-black text-center">
                            Kami siap membantu segala kebutuhan Pendirian CV Anda dengan layanan profesional dan terpercaya.
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                        {pendirianCV.map((item, idx) => (
                            <div key={idx} className="bg-white rounded-2xl shadow p-6 border border-[#2CBCC4]/10 flex flex-col md:flex-row items-center w-full md:w-auto">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full md:w-1/2 aspect-square object-cover rounded-xl mb-4 md:mb-0"
                                />
                                <div className="flex flex-col justify-between md:w-1/2 p-4">
                                    <h1 className="text-3xl font-bold text-[#2CBCC4] mb-16 text-center">{item.title}</h1>
                                    <p className="font-light text-sm text-black text-center">Mulai dari</p>
                                    <p className="font-bold text-3xl text-[#2CBCC4] text-center mb-12">{item.price}</p>
                                    <ul className="text-black text-sm text-left mb-4 list-disc list-inside">
                                        <p className="font-light text-sm text-black mb-1">Benefit yang anda dapatkan:</p>
                                        {item.features.map((feature, i) => (
                                            <li key={i}>{feature}</li>
                                        ))}
                                    </ul>
                                    <div className="flex flex-col gap-2 w-full mt-16">
                                        <a
                                            href={`https://wa.me/6285299084723?text=Halo!%2C%20Saya%20ingin%20konsultasi%20terkait%20Pendirian%20Perusahaan%20-%20${encodeURIComponent(item.title)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex px-6 py-2 rounded-full bg-[#2CBCC4] text-white font-semibold hover:bg-[#239ba0] transition text-center items-center justify-center gap-2"
                                        >
                                            <WhatsappLogo className="h-5 w-5" style={{ fill: "white" }} />
                                            Konsultasikan Sekarang
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="w-full pt-4 pb-8 md:pt-8 md:pb-16 lg:pb-24 bg-gradient-to-b from-[#2CBCC4]/10 to-white">
                <div className="container mx-auto px-4 flex justify-center">
                    <div className="w-full max-w-2xl">
                        <h2 className="text-3xl font-bold text-center text-[#2CBCC4] mb-8">Persyaratan Pendirian CV</h2>
                        <div className="flex flex-col gap-6">
                            {[
                                "Fotocopy Identitas Diri (KTP) untuk Persero Aktif dan Pasif",
                                "Fotocopy Nomor Pokok Wajib Pajak (NPWP) untuk Persero Aktif dan Pasif",
                                "Stempel Perusahaan"
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