import React from "react";

export default function LayananPage() {
  const layanan = [
    {
      title: "Pendirian Perusahaan",
      description: "Membantu Anda mendirikan perusahaan dengan proses cepat, transparan, dan bebas repot."
    },
    {
      title: "Penanaman Modal Asing (PMA)",
      description: "Layanan profesional untuk mendirikan perusahaan PMA yang sesuai dengan regulasi terbaru."
    },
    {
      title: "Pembuatan Perjanjian",
      description: "Perjanjian Anda akan dirancang untuk melindungi hak dan kewajiban secara maksimal."
    },
    {
      title: "Perizinan Usaha",
      description: "Pengurusan berbagai izin usaha sesuai dengan regulasi yang berlaku."
    },
    {
      title: "Konsultasi Hukum",
      description: "Konsultasi dengan tim ahli hukum kami untuk berbagai masalah legal bisnis."
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-[#2CBCC4]/10 to-white min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#2CBCC4]">Layanan Kami</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {layanan.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow p-6 border border-[#2CBCC4]/10">
              <h2 className="text-xl font-semibold text-[#2CBCC4] mb-2">{item.title}</h2>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}