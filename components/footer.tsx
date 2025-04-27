import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-blue-50 border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image src="/images/nusantara_legalitasku_logo.png" alt="Nusantara Legalitasku Logo" width={150} height={50} className="h-auto" />
            </div>
            <p className="text-blue-900/70">
              Nusantara Legalitasku, solusi lengkap untuk legalitas dan perlindungan bisnis Anda. Profesional, cepat, dan terpercaya.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Facebook className="h-5 w-5 text-blue-500" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Twitter className="h-5 w-5 text-blue-500" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Instagram className="h-5 w-5 text-blue-500" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Youtube className="h-5 w-5 text-blue-500" />
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg text-blue-900">Navigasi</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-blue-900/70 hover:text-blue-500">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-900/70 hover:text-blue-500">
                  Layanan
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-900/70 hover:text-blue-500">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-900/70 hover:text-blue-500">
                  Hubungi Kami
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg text-blue-900">Layanan</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-blue-900/70 hover:text-blue-500">
                  Perizinan Usaha
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-900/70 hover:text-blue-500">
                  Pembuatan Dokumen dan Surat
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-900/70 hover:text-blue-500">
                  Pendaftaran Hak Kekayaan Intelektual
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-900/70 hover:text-blue-500">
                  Virtual Office
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg text-blue-900">Kontak</h3>
            <p className="text-blue-900/70">
              Jl. Ngoding Mulu No. 404
              <br />
              Kota Maya, Indonesia
            </p>
            <p className="text-blue-900/70">
              Email: info@nusantaralegalitasku.com
              <br />
              Telp: +62 813 6969 6969
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-blue-200 text-center text-blue-900/70">
          <p>© {new Date().getFullYear()} Nusantara Legalitasku. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}
