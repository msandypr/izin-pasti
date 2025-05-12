import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[#2CBCC4]/5 border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image src="/images/nusantara_legalitasku_logo.png" alt="Nusantara Legalitasku Logo" width={150} height={50} className="h-auto" />
            </div>
            <p className="text-[#2CBCC4]">
              Nusantara Legalitasku, solusi lengkap untuk legalitas dan perlindungan bisnis Anda. Profesional, cepat, dan terpercaya.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Facebook className="h-5 w-5 text-[#2CBCC4]" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Twitter className="h-5 w-5 text-[#2CBCC4]" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Instagram className="h-5 w-5 text-[#2CBCC4]" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Youtube className="h-5 w-5 text-[#2CBCC4]" />
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg text-[#2CBCC4]">Navigasi</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-[#2CBCC4] hover:text-[#2CBCC4]/70">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#2CBCC4] hover:text-[#2CBCC4]/70">
                  Layanan
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#2CBCC4] hover:text-[#2CBCC4]/70">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#2CBCC4] hover:text-[#2CBCC4]/70">
                  Hubungi Kami
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg text-[#2CBCC4]">Layanan</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-[#2CBCC4] hover:text-[#2CBCC4]/70">
                  Jasa Legalitas
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#2CBCC4] hover:text-[#2CBCC4]/70">
                  Jasa Pengacara
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#2CBCC4] hover:text-[#2CBCC4]/70">
                  Virtual Office
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg text-[#2CBCC4]">Kontak</h3>
            <p className="text-[#2CBCC4]">
              Kota Semarang, Kecamatan Pedurungan
              <br />
              Kelurahan Palebon, Jl. Kalicari Timur I
              <br />
              No.5, RT 005, RW 009, Jawa Tengah
            </p>
            <p className="text-[#2CBCC4]">
              Email: info@nusantaralegalitasku.com
              <br />
              Telp: +62 859 3500 0364
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#2CBCC4]/20 text-center text-[#2CBCC4]/70">
          <p>© {new Date().getFullYear()} Nusantara Legalitasku. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}