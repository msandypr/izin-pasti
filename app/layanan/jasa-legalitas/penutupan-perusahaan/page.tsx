"use client";
import WhatsappLogo from "@/components/etc/WhatsappLogo";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import ContactSection from "@/components/homepage/contact-section";
import { motion } from "framer-motion";

const penutupanPerusahaan = [
    {
        title: "Penutupan PT",
        image: "/images/jasa-legalitas/pendirian-perusahaan/pendirian-pt.png",
        price: "Rp. 10.000.000",
    },
    {
        title: "Penutupan CV",
        image: "/images/jasa-legalitas/pendirian-perusahaan/pendirian-cv.png",
        price: "Rp. 5.000.000",
    },
    {
        title: "Penutupan PMA",
        image: "/images/jasa-legalitas/pendirian-perusahaan/penanaman-modal-asing.png",
        price: "Rp. 15.000.000",
    },
];

const faqs = [
    {
        id: 'pt',
        title: 'Syarat Penutupan PT',
        content: (
            <ol className="list-none list-inside space-y-2 text-sm text-justify md:text-base text-black">
                <li><strong>Rapat Umum Pemegang Saham (RUPS)</strong>: Pemegang saham diwajibkan mengadakan RUPS untuk mengambil keputusan mengenai pembubaran perusahaan. Keputusan rapat harus dicatat dalam berita acara dan disahkan oleh notaris. Pembubaran ini biasanya dilakukan jika perusahaan berhenti beroperasi, mengalami kebangkrutan, atau karena alasan bisnis lainnya.</li>
                <li><strong>Pembentukan Tim Likuidator</strong>:  Setelah keputusan pembubaran dibuat, perusahaan wajib menunjuk likuidator untuk menyelesaikan urusan kewajiban dan aset. Likuidator bertanggung jawab atas pelikuidasian aset, pelunasan utang, serta pemenuhan hak karyawan dan kreditur.</li>
                <li><strong>Pengumuman Pembubaran</strong>: Likuidator harus mengumumkan pembubaran perusahaan melalui surat kabar dan Berita Negara Republik Indonesia (BNRI) dalam waktu 30 hari setelah keputusan RUPS.</li>
                <li><strong>Pelunasan Kewajiban</strong>: Likuidator menyelesaikan seluruh kewajiban perusahaan, termasuk pembayaran utang kepada kreditur, kewajiban perpajakan, dan hak-hak karyawan. Sisa aset yang ada akan dibagikan kepada pemegang saham sesuai proporsi kepemilikan saham.</li>
                <li><strong>Penyampaian Laporan Likuidasi</strong>: Setelah proses likuidasi selesai, likuidator harus menyusun laporan keuangan yang menjelaskan rincian pelunasan kewajiban dan pembubaran perusahaan. Laporan ini akan disampaikan kepada RUPS untuk mendapatkan persetujuan.</li>
                <li><strong>Penghapusan dari Daftar Perseroan</strong>: Setelah laporan likuidasi disetujui, perusahaan harus mengajukan permohonan ke Kementerian Hukum dan HAM untuk menghapus status badan hukum. Kementerian akan menerbitkan keputusan resmi tentang pembubaran perusahaan dan pencabutan status badan hukum.</li>
                <li><strong>Pelaporan ke Instansi Lain</strong>: Penutupan perusahaan juga harus dilaporkan ke instansi terkait, seperti Direktorat Jenderal Pajak (DJP), BPJS Ketenagakerjaan, dan BPJS Kesehatan, untuk menonaktifkan NPWP serta kepesertaan BPJS.</li>
                <li><strong>Penyelesaian Pajak</strong>: Sebelum perusahaan ditutup, seluruh kewajiban pajak harus dilunasi, termasuk pengajuan laporan pajak terakhir. Pengajuan penutupan NPWP juga harus dilakukan di kantor pajak.</li>
                <li><strong>Dokumentasi Penutupan</strong>: Semua dokumen terkait proses penutupan perusahaan, seperti berita acara RUPS, laporan likuidasi, surat dari Kementerian Hukum dan HAM, serta dokumen perpajakan, harus disimpan sebagai arsip resmi perusahaan.</li>
            </ol>
        ),
    },
    {
        id: 'cv',
        title: 'Syarat Penutupan CV',
        content: (
            <ol className="list-none list-inside space-y-2 text-sm text-justify md:text-base text-black">
                <li><strong>Kesepakatan di Antara Para Sekutu</strong>: Penutupan CV harus didasarkan pada persetujuan bersama dari seluruh sekutu aktif dan pasif melalui rapat internal. Keputusan ini biasanya diambil karena berbagai alasan, seperti berakhirnya masa perjanjian, kondisi ekonomi yang sulit, atau kendala operasional lainnya.</li>
                <li><strong>Penyelesaian Kewajiban kepada Kreditur</strong>: CV wajib menyelesaikan semua kewajiban finansialnya, termasuk pelunasan utang kepada kreditur. Proses penutupan tidak dapat dilanjutkan jika masih ada utang atau tanggungan yang belum diselesaikan.</li>
                <li><strong>Pemenuhan Hak Karyawan</strong>: Hak-hak karyawan, seperti gaji tertunda, pesangon, atau kompensasi lain yang diatur dalam perjanjian kerja, harus dilunasi sepenuhnya sebelum proses penutupan selesai.</li>
                <li><strong>Pengumuman Pembubaran</strong>: Meskipun tidak diwajibkan secara hukum, disarankan untuk mengumumkan pembubaran CV melalui media atau surat kabar. Hal ini bertujuan agar pihak ketiga, termasuk kreditur, mengetahui bahwa CV sedang menjalani proses pembubaran.</li>
                <li><strong>Pengurusan Kewajiban Perpajakan</strong>: Semua kewajiban pajak CV harus diselesaikan, termasuk pengajuan laporan pajak terakhir. Setelahnya, CV perlu mengajukan permohonan penutupan NPWP ke kantor pajak sebagai bagian dari proses administrasi.</li>
                <li><strong>Penghapusan dari Daftar Badan Usaha</strong>: Jika CV terdaftar dalam Sistem Administrasi Badan Usaha (SABU), penghapusan dari daftar perusahaan harus diajukan ke instansi terkait, seperti Kantor Perdagangan atau Kantor Wilayah Hukum dan HAM, untuk memastikan CV secara resmi tidak lagi aktif sebagai badan usaha.</li>
                <li><strong>Pembagian Sisa Aset</strong>: Apabila masih terdapat sisa aset setelah semua kewajiban terpenuhi, aset tersebut harus dibagi di antara sekutu berdasarkan kesepakatan yang telah ditetapkan dalam perjanjian pendirian CV.</li>
                <li><strong>Penyimpanan Dokumentasi Penutupan</strong>: Semua dokumen terkait penutupan, seperti laporan pelunasan utang, pengumuman pembubaran, dan surat resmi dari kantor pajak, harus disimpan sebagai arsip untuk keperluan di masa mendatang.</li>
                <li><strong>Pemberitahuan kepada Instansi Terkait</strong>: Instansi yang terkait dengan operasional CV, seperti BPJS, perlu diberi notifikasi mengenai penutupan untuk menonaktifkan keanggotaan dan menghentikan kewajiban administrasi atau pembayaran bulanan.</li>
            </ol>
        ),
    },
    {
        id: 'pma',
        title: 'Syarat Penutupan PMA',
        content: (
            <ol className="list-none list-inside space-y-2 text-sm text-justify md:text-base text-black">
                <li><strong>Rapat Umum Pemegang Saham (RUPS)</strong>: Langkah awal pembubaran PT PMA adalah mengadakan RUPS untuk menetapkan keputusan pembubaran. Keputusan ini harus disetujui oleh mayoritas suara sesuai dengan ketentuan Anggaran Dasar perusahaan dan disahkan dalam bentuk Akta Pembubaran oleh notaris.</li>
                <li><strong>Penunjukkan Likuidator</strong>: Setelah keputusan pembubaran disahkan, perusahaan wajib menunjuk likuidator yang bertugas menyelesaikan seluruh kewajiban perusahaan. Likuidator akan melaksanakan likuidasi aset, melunasi utang kepada kreditur, menyelesaikan hak-hak karyawan, dan memenuhi kewajiban perpajakan.</li>
                <li><strong>Pengumuman Pembubaran</strong>: Likuidator wajib mengumumkan pembubaran perusahaan melalui surat kabar nasional dan Berita Negara Republik Indonesia (BNRI). Pengumuman ini harus dilakukan dalam kurun waktu 30 hari sejak keputusan pembubaran RUPS.</li>
                <li><strong>Penyelesaian Kewajiban</strong>: Perusahaan harus menyelesaikan seluruh kewajiban berikut:</li>
                <ul>
                    <li> - Kewajiban perpajakan, termasuk pelaporan pajak terakhir dan pembayaran tunggakan.</li>
                    <li> - Kewajiban kreditur, baik lokal maupun internasional.</li>
                    <li> - Hak-hak karyawan, termasuk gaji yang belum dibayar dan pesangon sesuai undang-undang.</li>
                </ul>
                <li><strong>Pelaporan kepada Badan Koordinasi Penanaman Modal (BKPM)</strong>: Keputusan pembubaran wajib dilaporkan kepada BKPM untuk mencabut izin usaha, izin prinsip, dan izin operasional yang telah diterbitkan sebelumnya.</li>
                <li><strong>Penghapusan dari Sistem OSS</strong>: PT PMA perlu melaporkan penutupan melalui Sistem OSS agar perusahaan resmi dicabut dari sistem dan tidak lagi terdaftar sebagai entitas aktif.</li>
                <li><strong>Laporan Likuidasi</strong>: Setelah proses likuidasi selesai, likuidator menyusun laporan yang merinci penyelesaian utang, kewajiban pajak, dan pembagian aset kepada pemegang saham. Laporan ini harus disetujui dalam RUPS.</li>
                <li><strong>Pencabutan Izin Badan Hukum dari Kementerian Hukum dan HAM</strong>: Setelah laporan likuidasi disetujui, perusahaan harus mengajukan pencabutan status badan hukum ke Kementerian Hukum dan HAM. Keputusan resmi dari Kemenkumham akan menghapus PT PMA dari daftar badan hukum.</li>
                <li><strong>Penutupan NPWP</strong>: Setelah semua kewajiban perpajakan terpenuhi, perusahaan perlu mengajukan permohonan penutupan NPWP ke kantor pajak.</li>
                <li><strong>Pemenuhan Hak Karyawan</strong>: Karyawan yang terdampak pembubaran harus menerima hak mereka sesuai dengan peraturan ketenagakerjaan, seperti pembayaran gaji yang belum dibayarkan dan pesangon.</li>
                <li><strong>Dokumentasi Penutupan</strong>: Semua dokumen terkait proses penutupan, seperti akta pembubaran, laporan likuidasi, dokumen pencabutan izin, dan dokumen perpajakan, harus disimpan dengan baik sebagai arsip perusahaan.</li>
            </ol>
        ),
    },
]

export default function PenutupanPerusahaanPage() {
    const [activeId, setActiveId] = useState<string | null>(null)

    return (
        <>
            <section className="w-full pt-4 pb-8 md:pt-8 md:pb-16 lg:pb-24 bg-gradient-to-t from-[#83A46D]/10 to-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="flex flex-col items-center justify-center py-10 md:py-16"
                    >
                        <div className="inline-flex items-center gap-2 bg-[#83A46D]/20 px-3 py-1 rounded-full text-[#83A46D] font-medium text-sm">
                            <Link href="/layanan/jasa-legalitas" className="flex items-center gap-2">
                                <ArrowLeft className="h-4 w-4 fill-[#83A46D] text-[#83A46D]" />
                                <span>Kembali Ke Halaman Sebelumnya</span>
                            </Link>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold py-4 text-center">
                            Paket <span className="gradient-text">Penutupan Perusahaan</span>
                        </h1>
                        <p className="text-md text-black text-center">
                            Kami siap membantu segala kebutuhan Penutupan Perusahaan Anda dengan layanan profesional dan terpercaya.
                        </p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:flex lg:flex-wrap lg:justify-center">
                        {penutupanPerusahaan.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.15 }}
                                className="bg-gradient-to-br from-[#e0f7fa] to-[#c8e6f8] p-6 rounded-2xl shadow border border-[#83A46D]/10 flex flex-col items-center lg:w-[30%]"
                            >
                                <h2 className="text-2xl font-bold text-[#83A46D] mb-2 text-center">{item.title}</h2>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full aspect-square object-cover rounded-xl mb-4"
                                />
                                <p className="font-semibold text-md text-black text-center">Mulai dari</p>
                                <p className="font-bold text-2xl text-[#83A46D] text-center mb-2">{item.price}</p>
                                <div className="flex flex-col gap-2 w-full mt-auto">
                                    <a
                                        href={`https://wa.me/6285935000364?text=Halo!%2C%20Saya%20ingin%20konsultasi%20terkait%20Penutupan%20Perusahaan%20-%20${encodeURIComponent(item.title)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex px-6 py-2 rounded-full bg-[#83A46D] text-white font-semibold hover:bg-[#239ba0] transition text-center items-center justify-center gap-2"
                                    >
                                        <WhatsappLogo className="h-5 w-5" style={{ fill: "white" }} />
                                        Konsultasikan Sekarang
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="w-full bg-gradient-to-b from-[#83A46D]/10 to-white py-10 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-[#83A46D] mb-8">
                        Syarat Penutupan Perusahaan
                    </h2>
                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <motion.div
                                key={faq.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                className="border rounded-lg overflow-hidden shadow"
                            >
                                <button
                                    onClick={() => setActiveId(activeId === faq.id ? null : faq.id)}
                                    className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50 transition"
                                >
                                    <span className="font-semibold text-[#83A46D]">{faq.title}</span>
                                    <svg
                                        className={`w-5 h-5 transition-transform ${activeId === faq.id ? 'rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {activeId === faq.id && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4 }}
                                        className="p-4 bg-white border-t"
                                    >
                                        {faq.content}
                                    </motion.div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <ContactSection />
        </>
    );
}