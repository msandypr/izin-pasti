import WhatsappLogo from "@/components/etc/WhatsappLogo";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import ContactSection from "@/components/homepage/contact-section";

const perizinanMikro = [
    {
        title: "Nomor Pokok Wajib Pajak (NPWP)",
        image: "/images/jasa-legalitas/pengurusan-perizinan-usaha.png",
        price: "Rp. 500.000",
        features: [
            "NPWP Perorangan",
            "NPWP Perusahaan",
        ]
    },
    {
        title: "OSS (Online Single Submission)",
        image: "/images/jasa-legalitas/pengurusan-perizinan-usaha.png",
        price: "Rp. 2.700.000",
        features: [
            "NIB (Nomor Induk Berusaha)",
            "IUP (Izin Usaha Perdagangan)",
            "Izin Lokasi",
        ]
    },
];

const perizinanMakro = [
    {
        title: "Izin Usaha Mikro Menengah (IUMK)",
        image: "/images/jasa-legalitas/pengurusan-perizinan-usaha.png",
        price: "Rp. 1.000.000",
        features: [
            "IUMK Perorangan",
            "NIB Perorangan",
        ]
    },
    {
        title: "NIB Ekspor dan Impor",
        image: "/images/jasa-legalitas/pengurusan-perizinan-usaha.png",
        price: "Rp. 5.000.000",
        features: [
            "API-U",
            "Hak Akses Kepabeanan",
        ]
    },
];

export default function PengurusanPerizinanUsahaPage() {
    return (
        <>
            <section className="w-full pt-4 md:pt-8 bg-gradient-to-t from-[#2CBCC4]/10 to-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col items-center justify-center py-10 md:py-16">
                        <div className="inline-flex items-center gap-2 bg-[#2CBCC4]/20 px-3 py-1 rounded-full text-[#2CBCC4] font-medium text-sm">
                            <Link href="/layanan/jasa-legalitas" className="flex items-center gap-2">
                                <ArrowLeft className="h-4 w-4 fill-[#2CBCC4] text-[#2CBCC4]" />
                                <span>Kembali Ke Halaman Sebelumnya</span>
                            </Link>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold py-4 text-center">
                            Paket Pengurusan <span className="gradient-text">Perizinan Usaha</span>
                        </h1>
                        <p className="text-md text-black text-center">
                            Kami siap membantu segala kebutuhan Pengurusan Perizinan Usaha Anda dengan layanan profesional dan terpercaya.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:flex lg:flex-wrap lg:justify-center">
                        {perizinanMikro.map((item, idx) => (
                            <div key={idx} className="bg-gradient-to-br from-[#e0f7fa] to-[#c8e6f8] p-6 rounded-2xl shadow border border-[#2CBCC4]/10 flex flex-col items-center lg:w-[30%]">
                                <h2 className="text-2xl font-bold text-[#2CBCC4] mb-2 text-center min-h-[72px]">{item.title}</h2>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full aspect-square object-cover rounded-xl mb-4"
                                />
                                <p className="font-light text-sm text-black text-center">Mulai dari</p>
                                <p className="font-bold text-2xl text-[#2CBCC4] text-center mb-2">{item.price}</p>
                                <ul className="text-black text-sm text-center mb-4 list-disc list-inside">
                                    {item.features.map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                </ul>
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
            <section className="w-full pb-8 md:pt-8 md:pb-16 lg:pb-24 bg-gradient-to-b from-[#2CBCC4]/10 to-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:flex lg:flex-wrap lg:justify-center">
                        {perizinanMakro.map((item, idx) => (
                            <div key={idx} className="bg-gradient-to-br from-[#e0f7fa] to-[#c8e6f8] p-6 rounded-2xl shadow border border-[#2CBCC4]/10 flex flex-col items-center lg:w-[30%]">
                                <h2 className="text-2xl font-bold text-[#2CBCC4] mb-2 text-center min-h-[72px]">{item.title}</h2>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full aspect-square object-cover rounded-xl mb-4"
                                />
                                <p className="font-light text-sm text-black text-center">Mulai dari</p>
                                <p className="font-bold text-2xl text-[#2CBCC4] text-center mb-2">{item.price}</p>
                                <ul className="text-black text-sm text-center mb-4 list-disc list-inside">
                                    {item.features.map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                </ul>
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
// ... existing code ...