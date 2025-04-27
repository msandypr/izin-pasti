import { Button } from "@/components/ui/button";
import { Menu, Phone } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <Image src="/images/nusantara_legalitasku_logo.png" alt="Nusantara Legalitasku Logo" width={100} height={35} className="h-auto" />
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-blue-900 hover:text-blue-500 font-medium">
            Beranda
          </Link>
          <Link href="/layanan" className="text-blue-900 hover:text-blue-500 font-medium">
            Layanan
          </Link>
          <Link href="/tentang-kami" className="text-blue-900 hover:text-blue-500 font-medium">
            Tentang Kami
          </Link>
          <Link href="/hubungi-kami" className="text-blue-900 hover:text-blue-500 font-medium">
            Hubungi Kami
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          {/* <Button variant="outline" className="rounded-full">
            Masuk
          </Button> */}
          <Button className="rounded-full blue-gradient"><Phone></Phone>WhatsApp</Button>
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
              <SheetClose asChild>
                <Link href="/" className="text-blue-900 hover:text-blue-500 font-medium text-lg">
                  Beranda
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/layanan" className="text-blue-900 hover:text-blue-500 font-medium text-lg">
                  Layanan
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/tentang-kami" className="text-blue-900 hover:text-blue-500 font-medium text-lg">
                  Tentang Kami
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/hubungi-kami" className="text-blue-900 hover:text-blue-500 font-medium text-lg">
                  Hubungi Kami
                </Link>
              </SheetClose>
              <div className="flex flex-col gap-2 mt-4">
                <Button variant="outline" className="rounded-full">
                  Masuk
                </Button>
                <Button className="rounded-full blue-gradient">Gabung Sekarang</Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
