import WhatsappLogo from "@/components/etc/WhatsappLogo";
import { ArrowLeft, Eye } from "lucide-react";
import Link from "next/link";

const subLayananPendirian = [
    {
        title: "Paket Pendirian PT",
        image: "/images/jasa-legalitas/pendirian-perusahaan/pendirian-pt.png",
        subtitle: "Solusi lengkap pendirian Perseroan Terbatas (PT) untuk bisnis Anda.",
        link: "/layanan/jasa-legalitas/pendirian-perusahaan/pendirian-pt"
    },
    {
        title: "Paket Pendirian CV",
        image: "/images/jasa-legalitas/pendirian-perusahaan/pendirian-cv.png",
        subtitle: "Layanan profesional untuk pendirian Commanditaire Vennootschap (CV).",
        link: "/layanan/jasa-legalitas/pendirian-perusahaan/paket-pendirian-cv"
    },
    {
        title: "Paket Pendirian Firma",
        image: "/images/jasa-legalitas/pendirian-perusahaan/pendirian-firma.png",
        subtitle: "Bantuan legal untuk pendirian Firma secara mudah dan cepat.",
        link: "/layanan/jasa-legalitas/paket-pendirian-firma"
    },
    {
        title: "Persekutuan Perdata",
        image: "/images/jasa-legalitas/pendirian-perusahaan/persekutuan-perdata.png",
        subtitle: "Pendampingan pendirian Persekutuan Perdata sesuai regulasi.",
        link: "#"
    },
    {
        title: "Penanaman Modal Asing (PMA)",
        image: "/images/jasa-legalitas/pendirian-perusahaan/penanaman-modal-asing.png",
        subtitle: "Layanan pendirian perusahaan PMA untuk investor asing.",
        link: "#"
    },
    {
        title: "Pendirian Yayasan",
        image: "/images/jasa-legalitas/pendirian-perusahaan/pendirian-yayasan.png",
        subtitle: "Proses pendirian Yayasan yang legal dan terpercaya sesuai aturan hukum.",
        link: "#"
    },
    {
        title: "Pendirian Koperasi",
        image: "/images/jasa-legalitas/pendirian-perusahaan/pendirian-koperasi.png",
        subtitle: "Layanan lengkap untuk pendirian Koperasi, legal dan terpercaya.",
        link: "#"
    },
    {
        title: "Pendirian Perkumpulan",
        image: "/images/jasa-legalitas/pendirian-perusahaan/pendirian-perkumpulan.png",
        subtitle: "Bantuan legal untuk pendirian Perkumpulan secara hukum.",
        link: "#"
    },
    {
        title: "Properti Pertahanan Bangunan",
        image: "/images/jasa-legalitas/pendirian-perusahaan/properti-pertahanan-bangunan.png",
        subtitle: "Konsultasi dan pengurusan legalitas properti dan bangunan.",
        link: "#"
    }
];

export default function PendirianPerusahaanPage() {
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
                            Pilihan <span className="gradient-text">Pendirian Perusahaan</span> untuk <span className="gradient-text">Bisnis Anda</span>
                        </h1>
                        <p className="text-md text-black text-center">
                            Kami siap membantu segala kebutuhan pendirian perusahaan Anda dengan layanan profesional dan terpercaya.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:flex lg:flex-wrap lg:justify-center">
                        {subLayananPendirian.map((item, idx) => (
                            <div key={idx} className="bg-white rounded-2xl shadow p-6 border border-[#2CBCC4]/10 flex flex-col items-center lg:w-[30%]">
                                <h2 className="text-2xl font-bold text-[#2CBCC4] mb-2 text-center">{item.title}</h2>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full aspect-square object-cover rounded-xl mb-4"
                                />
                                <p className="text-black text-sm text-center mb-4">{item.subtitle}</p>
                                <div className="flex flex-col gap-2 w-full mt-auto">
                                    <a
                                        href={item.link}
                                        className="flex px-6 py-2 rounded-full bg-[#2CBCC4] text-white font-semibold hover:bg-[#239ba0] transition text-center items-center justify-center gap-2"
                                    >
                                        <Eye className="h-5 w-5" />
                                        Lihat Layanan
                                    </a>
                                    {/* <a
                                        href={`https://wa.me/6285299084723?text=Halo%2C%20saya%20ingin%20konsultasi%20tentang%20Pendirian%20Perusahaan%20-%20${encodeURIComponent(item.title)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block px-6 py-2 rounded-full border-2 border-[#2CBCC4] text-[#2CBCC4] font-semibold hover:bg-[#2CBCC4]/10 transition text-center flex items-center justify-center gap-2"
                                    >
                                        <WhatsappLogo className="h-5 w-5" style={{ fill: "#2CBCC4" }} />
                                        Konsultasikan Sekarang
                                    </a> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
// ... existing code ...