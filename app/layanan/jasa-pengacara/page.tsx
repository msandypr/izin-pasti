"use client";
import { useState } from "react";
import ContactSection from "@/components/homepage/contact-section";
import { Users } from "lucide-react";

const litigasi = [
  {
    id: 'pidana',
    title: 'Pidana',
    content: (
      <p className="space-y-2 text-sm text-justify md:text-base text-black">
        Memberikan pendampingan dan pembelaan dalam perkara pidana, baik yang bersifat umum maupun khusus, mulai dari tahap penyidikan, penuntutan, hingga proses persidangan di Pengadilan. Kami juga melakukan langkah-langkah hukum di tingkat banding, kasasi, hingga peninjauan kembali.
      </p>
    ),
  },
  {
    id: 'perdata',
    title: 'Perdata',
    content: (
      <p className="space-y-2 text-sm text-justify md:text-base text-black">
        Mewakili dan membela dalam perkara perdata, termasuk yang berkaitan dengan pertanahan, perbankan, utang piutang, bisnis, jual beli, dan berbagai masalah hukum lainnya. Kami juga melakukan langkah-langkah hukum di tingkat banding, kasasi, hingga peninjauan kembali.
      </p>
    ),
  },
  {
    id: 'hukumkeluarga',
    title: 'Hukum Keluarga',
    content: (
      <p className="space-y-2 text-sm text-justify md:text-base text-black">
        Hukum Keluarga mencakup perkara seperti perceraian, warisan, pembagian harta gono-gini, hak asuh anak, dispensasi nikah, dan berbagai masalah hukum keluarga lainnya.
      </p>
    ),
  },
  {
    id: 'tatausahanegara',
    title: 'Tata Usaha Negara',
    content: (
      <p className="space-y-2 text-sm text-justify md:text-base text-black">
        Mendampingi, mewakili, dan memberikan pembelaan dalam perkara tata usaha negara, seperti sengketa surat-menyurat, sengketa terhadap keputusan pemerintah, serta keputusan yang dikeluarkan oleh instansi pemerintah.
      </p>
    ),
  },
  {
    id: 'kepailitan',
    title: 'Kepailitan',
    content: (
      <p className="space-y-2 text-sm text-justify md:text-base text-black">
        Kami memberikan pelayanan terbaik dalam menangani kasus hukum kepailitan. Secara profesional, kami mendampingi klien, baik korporasi maupun individu, yang ingin mengajukan kepailitan. Tim spesialis kepailitan kami memiliki keahlian mendalam di bidang ini dan menguasai aturan serta prosedur peradilan yang berlaku.
      </p>
    ),
  },
]

const nonLitigasi = [
  {
    id: 'legalopinion',
    title: 'Legal Opinion',
    content: (
      <p className="space-y-2 text-sm text-justify md:text-base text-black">
        Kami dapat memberikan pandangan serta pendapat hukum yang didasarkan pada bukti-bukti yang telah disampaikan dan diperlihatkan kepada kami untuk dianalisis. Bukti tersebut bisa berasal dari klien maupun pihak-pihak lain yang terkait dengan posisi klien dalam masalah hukum ini.
      </p>
    ),
  },
  {
    id: 'legaldrafting',
    title: 'Legal Drafting',
    content: (
      <p className="space-y-2 text-sm text-justify md:text-base text-black">
        Kami dapat menyusun, memeriksa, merevisi, serta menyempurnakan draf kontrak dan dokumen lain yang memiliki konsekuensi hukum antara klien dan pihak rekanan atau pihak ketiga lainnya.
      </p>
    ),
  },
  {
    id: 'somasi',
    title: 'Somasi',
    content: (
      <p className="space-y-2 text-sm text-justify md:text-base text-black">
        Kami dapat memberikan surat teguran dan peringatan secara tertulis terhadap kelalaian atau tindakan sengaja yang dilakukan oleh pihak lain yang merugikan hak-hak dan kepentingan klien, akibat tidak dipenuhinya suatu kewajiban.
      </p>
    ),
  },
  {
    id: 'legaladvice',
    title: 'Legal Advice',
    content: (
      <p className="space-y-2 text-sm text-justify md:text-base text-black">
        Kami dapat memberikan konsultasi dan nasihat hukum, baik secara lisan maupun tertulis, terkait permasalahan hukum. Hal ini dapat diberikan kepada individu maupun badan hukum perusahaan, terutama yang berkaitan dengan aspek hukum sebelum atau setelah kebijakan perusahaan dilaksanakan.
      </p>
    ),
  },
  {
    id: 'negosiasi',
    title: 'Negosiasi',
    content: (
      <p className="space-y-2 text-sm text-justify md:text-base text-black">
        Kami dapat melakukan pendekatan secara persuasif untuk mencapai kesepakatan di luar Pengadilan, sebagai bagian dari alternatif penyelesaian sengketa hukum di luar pengadilan.
      </p>
    ),
  },
]

export default function JasaPengacaraPage() {
  const [activeId, setActiveId] = useState<string | null>(null)

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
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Layanan <span className="gradient-text">Kami</span>
            </h2>
            <p className="text-md text-black">
              Kami menyediakan berbagai layanan hukum yang dirancang untuk membantu Anda menyelesaikan persoalan hukum dengan cepat, profesional, dan tepat sasaran. Dengan pengalaman serta integritas tinggi, kami hadir mendampingi Anda dalam setiap langkah proses hukum.
            </p>
            <div className="w-full pt-16">
              <h2 className="text-2xl md:text-3xl font-bold text-center grad mb-8">
                Liti<span className="gradient-text">gasi</span>
              </h2>
              <div className="space-y-4">
                {litigasi.map((faq) => (
                  <div key={faq.id} className="border border-[#2CBCC4] rounded-lg overflow-hidden shadow">
                    <button
                      onClick={() => setActiveId(activeId === faq.id ? null : faq.id)}
                      className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50 transition"
                    >
                      <span className="font-semibold text-black">{faq.title}</span>
                      <svg
                        className={`w-5 h-5 transition-transform ${activeId === faq.id ? 'rotate-180' : ''
                          }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {activeId === faq.id && (
                      <div className="p-4 bg-white border-t">{faq.content}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full pt-16">
              <h2 className="text-2xl md:text-3xl font-bold text-center grad mb-8">
                Non-<span className="gradient-text">Litigasi</span>
              </h2>
              <div className="space-y-4">
                {nonLitigasi.map((faq) => (
                  <div key={faq.id} className="border border-[#2CBCC4] rounded-lg overflow-hidden shadow">
                    <button
                      onClick={() => setActiveId(activeId === faq.id ? null : faq.id)}
                      className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50 transition"
                    >
                      <span className="font-semibold text-black">{faq.title}</span>
                      <svg
                        className={`w-5 h-5 transition-transform ${activeId === faq.id ? 'rotate-180' : ''
                          }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {activeId === faq.id && (
                      <div className="p-4 bg-white border-t">{faq.content}</div>
                    )}
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