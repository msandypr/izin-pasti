import { Eye } from "lucide-react";

const jasaLegalitas = [
  {
    title: "Pendirian Perusahaan",
    image: "/images/jasa-legalitas/pendirian-perusahaan.png",
    subtitle: "Layanan lengkap untuk mendirikan berbagai bentuk badan usaha.",
    link: "/layanan/jasa-legalitas/pendirian-perusahaan",
  },
  {
    title: "Penutupan Perusahaan",
    image: "/images/jasa-legalitas/penutupan-perusahaan.png",
    subtitle: "Proses penutupan perusahaan yang legal dan sesuai regulasi.",
    link: "/layanan/jasa-legalitas/penutupan-perusahaan",
  },
  {
    title: "Pembuatan Dokumen dan Akta Perusahaan",
    image: "/images/jasa-legalitas/dokumen-akta-perusahaan.png",
    subtitle: "Pembuatan dokumen dan akta penting untuk kebutuhan perusahaan Anda.",
    link: "/layanan/jasa-legalitas/pembuatan-dokumen-dan-akta-perusahaan",
  },
  {
    title: "Perizinan",
    image: "/images/jasa-legalitas/perizinan.png",
    subtitle: "Pengurusan berbagai perizinan usaha secara profesional.",
    link: "/layanan/jasa-legalitas/perizinan",
  },
  {
    title: "Pengurusan Perizinan Usaha",
    image: "/images/jasa-legalitas/pengurusan-perizinan-usaha.png",
    subtitle: "Layanan pengurusan izin usaha dari awal hingga selesai.",
    link: "/layanan/jasa-legalitas/pengurusan-perizinan-usaha",
  },
  {
    title: "HAKI",
    image: "/images/jasa-legalitas/haki.png",
    subtitle: "Pendaftaran dan perlindungan Hak Kekayaan Intelektual (HAKI).",
    link: "/layanan/jasa-legalitas/haki",
  },
  {
    title: "Pembuatan dan Peninjauan Perjanjian",
    image: "/images/jasa-legalitas/perjanjian.png",
    subtitle: "Pembuatan serta review perjanjian bisnis dan kontrak hukum.",
    link: "/layanan/jasa-legalitas/perjanjian",
  },
  {
    title: "Properti Pertanahan Bangunan",
    image: "/images/jasa-legalitas/pendirian-perusahaan/properti-pertahanan-bangunan.png",
    subtitle: "Konsultasi dan pengurusan legalitas properti dan bangunan.",
    link: "/layanan/jasa-legalitas/properti-pertanahan-bangunan",
  },
];

export default function JasaLegalitasPage() {
  return (
    <>
      <section className="w-full pt-4 pb-8 md:pt-8 md:pb-16 lg:pb-24 bg-gradient-to-b from-[#2CBCC4]/10 to-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center py-10 md:py-16">
            <h1 className="text-3xl md:text-4xl font-bold py-4 text-center">
              Melayani <span className="gradient-text">Jasa Legalitas</span> untuk <span className="gradient-text">Bisnis Anda</span>
            </h1>
            <p className="text-md text-black text-center">
              Kami siap membantu segala kebutuhan legalitas perusahaan Anda dengan layanan profesional dan terpercaya.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:flex lg:flex-wrap lg:justify-center">
            {jasaLegalitas.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow p-6 border border-[#2CBCC4]/10 flex flex-col items-center lg:w-[30%]">
                <h2 className="text-2xl font-bold text-[#2CBCC4] mb-2 text-center min-h-[72px]">{item.title}</h2>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full aspect-square object-cover rounded-xl mb-4"
                />
                <p className="text-black text-sm text-center mb-4">{item.subtitle}</p>
                <div className="mt-auto w-full">
                  <a
                    href={item.link}
                    className="flex px-6 py-2 rounded-full bg-[#2CBCC4] text-white font-semibold hover:bg-[#239ba0] transition text-center items-center justify-center gap-2"
                  >
                    <Eye className="h-5 w-5" />
                    Lihat Layanan
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}