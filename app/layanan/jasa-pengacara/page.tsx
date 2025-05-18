import ContactSection from "@/components/homepage/contact-section";
import { Users } from "lucide-react";

export default function JasaPengacaraPage() {
  return (
    <>
      <section className="w-full bg-gradient-to-b from-[#2CBCC4]/10 to-white pt-16 md:pt-24">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#2CBCC4]/20 px-3 py-1 rounded-full text-[#2CBCC4] font-medium text-sm">
              <Users className="h-4 w-4 fill-[#2CBCC4] text-[#2CBCC4]" />
              <span>Temui Para Pengacara Kami</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold">
              Kami Menyediakan <span className="gradient-text">Pengacara Profesional</span> untuk <span className="gradient-text">Membantu Anda</span>
            </h2>

            <p className="text-md text-black">
              Kami memenuhi syarat untuk keberhasilan klien kami & sebagai firma hukum profesional. Jadi para pengacara profesional ini masih di sini di sisi Anda dengan kebaikan, integritas, dan kesetiaan untuk membantu di saat-saat terburuk dalam hidup Anda.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full bg-gradient-to-t from-[#2CBCC4]/10 to-white pb-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "AGUNG HERMANSYAH, S.H.",
                image: "/images/jasa-pengacara/lawyer-1.jpg",
                whatsapp: "6285935000364",
              },
              {
                name: "FAKHRI ROZI, S.H.",
                image: "/images/jasa-pengacara/lawyer-2.jpg",
                whatsapp: "6285935000364",
              },
              {
                name: "MUSTAQIM ALMOND, S.H., M.H.",
                image: "/images/jasa-pengacara/lawyer-3.jpg",
                whatsapp: "6285935000364",
              },
            ].map((lawyer) => (
              <div
                key={lawyer.name}
                className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-[#2CBCC4] group h-[512px] flex items-end"
                style={{
                  backgroundImage: `url(${lawyer.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10 transition-opacity duration-300 group-hover:from-black/80"></div>

                <div className="relative z-10 p-6 text-center w-full">
                  <h3 className="text-white font-bold text-lg mb-4">{lawyer.name}</h3>
                  <a
                    href={`https://wa.me/${lawyer.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-5 py-2 rounded-full bg-[#2CBCC4] text-white text-sm font-semibold shadow-md hover:bg-[#229ca1] transition"
                  >
                    Konsultasi Sekarang
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full bg-gradient-to-b from-[#2CBCC4]/10 to-white pt-16">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text">
              Layanan Kami
            </h2>
            <p className="text-md text-black">
              Kami menyediakan berbagai layanan hukum yang dirancang untuk membantu Anda menyelesaikan persoalan hukum dengan cepat, profesional, dan tepat sasaran. Dengan pengalaman serta integritas tinggi, kami hadir mendampingi Anda dalam setiap langkah proses hukum.
            </p>
            <div className="w-full pt-16">
              <h2 className="text-2xl md:text-3xl font-bold text-center grad mb-8">
                Liti<span className="gradient-text">gasi</span>
              </h2>
              <div className="flex flex-col gap-4">
                {[
                  "Pidana",
                  "Perdata",
                  "Hukum Keluarga",
                  "Tata Usaha Negara",
                  "Kepailitan",
                ].map((requirement) => (
                  <div
                    key={requirement}
                    className="flex items-center justify-center p-4 bg-white rounded-xl shadow-md border border-[#2CBCC4]"
                  >
                    <p className="text-black text-lg font-bold text-center">{requirement}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full pt-16">
              <h2 className="text-2xl md:text-3xl font-bold text-center grad mb-8">
                Non-<span className="gradient-text">Litigasi</span>
              </h2>
              <div className="flex flex-col gap-4">
                {[
                  "Legal Opinion",
                  "Legal Drafting",
                  "Somasi",
                  "Legal Advice",
                  "Negosiasi",
                ].map((requirement) => (
                  <div
                    key={requirement}
                    className="flex items-center justify-center p-4 bg-white rounded-xl shadow-md border border-[#2CBCC4]"
                  >
                    <p className="text-black text-lg font-bold text-center">{requirement}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  );
}