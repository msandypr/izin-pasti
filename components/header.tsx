"use client"
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import WhatsappLogo from "@/components/etc/WhatsappLogo";

export default function Header() {
  const [layananOpen, setLayananOpen] = React.useState(false);

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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="text-[#2CBCC4]/90 hover:text-[#2CBCC4] font-bold flex items-center gap-1 focus:outline-none">
                Layanan
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="bg-white rounded-xl shadow-lg border border-[#2CBCC4]/10 mt-2 min-w-[200px] z-50">
              <DropdownMenuItem asChild>
                <Link href="/layanan/jasa-legalitas" className="block px-6 py-3 text-[#2CBCC4]/90 hover:bg-[#2CBCC4]/10 hover:text-[#2CBCC4] font-semibold rounded-t-xl transition">
                  Jasa Legalitas
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/layanan/jasa-pengacara" className="block px-6 py-3 text-[#2CBCC4]/90 hover:bg-[#2CBCC4]/10 hover:text-[#2CBCC4] font-semibold transition">
                  Jasa Pengacara
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/layanan/virtual-office" className="block px-6 py-3 text-[#2CBCC4]/90 hover:bg-[#2CBCC4]/10 hover:text-[#2CBCC4] font-semibold rounded-b-xl transition">
                  Virtual Office
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/tentang-kami" className="text-[#2CBCC4]/90 hover:text-[#2CBCC4] font-bold">
            Tentang Kami
          </Link>
          <Link href="/hubungi-kami" className="text-[#2CBCC4]/90 hover:text-[#2CBCC4] font-bold">
            Kontak
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="https://wa.me/6285935000364?text=Halo!%20Saya%20ingin%20Berkonsultasi%20dengan%20Nusantara%20Legalitasku."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="group rounded-full bg-white text-[#25D267] border border-[#25D267] hover:bg-[#25D267] hover:text-white flex items-center gap-2">
              <WhatsappLogo className="h-5 w-5 transition-colors duration-200 group-hover:fill-white fill-[#25D267]" />
              Konsultasi Sekarang!
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
              <div>
                <span
                  className="flex items-center text-[#2CBCC4]/90 hover:text-[#2CBCC4] font-semibold text-lg cursor-pointer select-none py-2"
                  onClick={() => setLayananOpen((prev) => !prev)}
                  tabIndex={0}
                  onKeyDown={e => { if (e.key === "Enter" || e.key === " ") setLayananOpen(prev => !prev); }}
                  role="button"
                  aria-expanded={layananOpen}
                >
                  Layanan
                  <ChevronDown className={`ml-2 transition-transform ${layananOpen ? "rotate-180" : ""}`} size={18} />
                </span>
                {layananOpen && (
                  <div className="ml-4 flex flex-col gap-2 mt-2">
                    <SheetClose asChild>
                      <Link href="/layanan/jasa-legalitas" className="text-[#2CBCC4]/90 hover:text-[#2CBCC4] font-semibold py-1">
                        Jasa Legalitas
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href="/layanan/jasa-pengacara" className="text-[#2CBCC4]/90 hover:text-[#2CBCC4] font-semibold py-1">
                        Jasa Pengacara
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href="/layanan/virtual-office" className="text-[#2CBCC4]/90 hover:text-[#2CBCC4] font-semibold py-1">
                        Virtual Office
                      </Link>
                    </SheetClose>
                  </div>
                )}
              </div>
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
                  href="https://wa.me/6285935000364?text=Halo!%20Saya%20ingin%20berkonsultasi%20terkait%20Layanan%20yang%20ada%20di%20Nusantara%20Legalitasku"
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