import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import WhatsappLogo from "@/components/etc/WhatsappLogo";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-gradient-to-b from-[#2CBCC4]/10 to-white backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <Image src="/images/nusantara_legalitasku_logo.png" alt="Nusantara Legalitasku Logo" width={100} height={35} className="h-auto" />
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-[#2CBCC4]/90 hover:text-[#2CBCC4] font-bold">
            Beranda
          </Link>
          <Link href="/layanan" className="text-[#2CBCC4]/90 hover:text-[#2CBCC4] font-bold">
            Layanan
          </Link>
          <Link href="/tentang-kami" className="text-[#2CBCC4]/90 hover:text-[#2CBCC4] font-bold">
            Tentang Kami
          </Link>
          <Link href="/hubungi-kami" className="text-[#2CBCC4]/90 hover:text-[#2CBCC4] font-bold">
            Kontak
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="https://wa.me/6285299084723?text=Halo!%20Saya%20ingin%20berkonsultasi%20terkait%20Layanan%20yang%20ada%20di%20Nusantara%20Legalitasku"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="rounded-full blue-gradient">
              <WhatsappLogo className="h-5 w-5" />
              WhatsApp
            </Button>
          </Link>
        </div>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-4 mt-8">
              <SheetHeader>
                <SheetTitle />
                <div className="flex justify-center mb-4">
                  <Image src="/images/nusantara_legalitasku_logo.png" alt="Nusantara Legalitasku Logo" width={150} height={50} className="h-auto" />
                </div>
              </SheetHeader>
              <div className="border-t border-[#2CBCC4]/20"></div>
              <SheetClose asChild>
                <Link href="/" className="text-[#2CBCC4]/90 hover:text-[#2CBCC4] font-semibold text-lg">
                  Beranda
                </Link>
              </SheetClose>
              <div className="border-t border-[#2CBCC4]/20"></div>
              <SheetClose asChild>
                <Link href="/layanan" className="text-[#2CBCC4]/90 hover:text-[#2CBCC4] font-semibold text-lg">
                  Layanan
                </Link>
              </SheetClose>
              <div className="border-t border-[#2CBCC4]/20"></div>
              <SheetClose asChild>
                <Link href="/tentang-kami" className="text-[#2CBCC4]/90 hover:text-[#2CBCC4] font-semibold text-lg">
                  Tentang Kami
                </Link>
              </SheetClose>
              <div className="border-t border-[#2CBCC4]/20"></div>
              <SheetClose asChild>
                <Link href="/hubungi-kami" className="text-[#2CBCC4]/90 hover:text-[#2CBCC4] font-semibold text-lg">
                  Hubungi Kami
                </Link>
              </SheetClose>
              <div className="border-t border-[#2CBCC4]/20"></div>
              <div className="flex flex-col gap-2">
                <Link
                  href="https://wa.me/6285299084723?text=Halo!%20Saya%20ingin%20berkonsultasi%20terkait%20Layanan%20yang%20ada%20di%20Nusantara%20Legalitasku"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="rounded-full blue-gradient w-full flex items-center justify-center">
                    <WhatsappLogo className="h-5 w-5" />
                    WhatsApp
                  </Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}