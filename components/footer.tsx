import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Mail, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import WhatsappLogo from "./etc/WhatsappLogo"

export default function Footer() {
  return (
    <footer className="bg-[#83A46D]/5 border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image src="/images/izinpasti_logo.png" alt="Izin Pasti Logo" width={64} height={32} className="h-auto" />
            </div>
            <p className="text-[#83A46D]">
              Izin Pasti, solusi lengkap untuk legalitas dan perlindungan bisnis Anda. Profesional, cepat, dan terpercaya.
            </p>
            <div className="flex gap-4">
              <Button asChild variant="ghost" size="icon" className="rounded-full">
                <a href="https://facebook.com/izinpasti" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-5 w-5 text-[#83A46D]" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon" className="rounded-full">
                <a href="https://instagram.com/izinpasti" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5 text-[#83A46D]" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon" className="rounded-full">
                <a href="https://wa.me/6285935000364" target="_blank" rel="noopener noreferrer">
                  <Phone className="h-5 w-5 text-[#83A46D]" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon" className="rounded-full">
                <a href="mailto:izinpasti@gmail.com">
                  <Mail className="h-5 w-5 text-[#83A46D]" />
                </a>
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg text-[#83A46D]">Navigasi</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-[#83A46D] hover:text-[#83A46D]/70">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/layanan" className="text-[#83A46D] hover:text-[#83A46D]/70">
                  Layanan
                </Link>
              </li>
              <li>
                <Link href="/tentang-kami" className="text-[#83A46D] hover:text-[#83A46D]/70">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/hubungi-kami" className="text-[#83A46D] hover:text-[#83A46D]/70">
                  Hubungi Kami
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg text-[#83A46D]">Layanan</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/layanan/jasa-legalitas" className="text-[#83A46D] hover:text-[#83A46D]/70">
                  Jasa Legalitas
                </Link>
              </li>
              <li>
                <Link href="/layanan/jasa-pengacara" className="text-[#83A46D] hover:text-[#83A46D]/70">
                  Jasa Pengacara
                </Link>
              </li>
              <li>
                <Link href="layanan/virtual-office" className="text-[#83A46D] hover:text-[#83A46D]/70">
                  Virtual Office
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg text-[#83A46D]">Kontak</h3>
            <p className="text-[#83A46D]">
              Kota Semarang, Kecamatan Pedurungan
              <br />
              Kelurahan Palebon, Jl. Kalicari Timur I
              <br />
              No.5, RT 005, RW 009, Jawa Tengah
            </p>
            <p className="text-[#83A46D]">
              Email: izinpasti@gmail.com
              <br />
              Telp: +62 859 3500 0364
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#83A46D]/20 text-center text-[#83A46D]/70">
          <p>© {new Date().getFullYear()} Izin Pasti. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}