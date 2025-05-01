"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays } from "lucide-react";

export default function ContactSection() {
    return (
        <div className="w-full bg-gradient-to-b from-[#2CBCC4]/10 to-white py-16 md:py-24 flex justify-center" id="contact">
            <div className="container flex justify-center">
                <div className="w-full max-w-5xl bg-white/90 rounded-2xl shadow-lg overflow-hidden flex flex-col lg:flex-row items-stretch">
                    {/* Kiri - Gambar Full Height */}
                    <div className="relative w-full lg:w-1/2 min-h-[220px] md:min-h-[300px] lg:min-h-[340px]">
                        <Image
                            src="/images/contact-section-image-law.jpg"
                            alt="Customer Support Team"
                            fill
                            className="object-cover w-full h-full"
                            priority
                        />
                    </div>
                    {/* Kanan - Konten */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center items-center text-center px-6 md:px-12 py-8 md:py-12 space-y-5">
                        <h2 className="text-2xl md:text-3xl font-bold leading-snug">
                            Konsultasikan kebutuhan <span className="text-[#2CBCC4]">Hukum</span> anda dengan <span className="text-[#2CBCC4]">Kami</span>
                        </h2>
                        <p className="text-base md:text-sm text-black">
                            Tim kami siap membantu segala kebutuhan legalitas bisnis Anda. Jadwalkan konsultasi online dengan mudah dan cepat.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center">
                            <Link
                                href="https://wa.me/6285299084723?text=Halo!%20ingin%20berkonsultasi%20blabla"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button size="lg" className="rounded-full blue-gradient">
                                    <CalendarDays className="h-5 w-5" />
                                    Jadwalkan Konsultasi Online
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}