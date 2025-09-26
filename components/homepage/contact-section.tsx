"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays } from "lucide-react";
import ShareButtons from "../etc/ShareButtons";
import { motion } from "framer-motion";

export default function ContactSection() {
    return (
        <motion.div
            className="w-full bg-gradient-to-t from-[#83A46D]/10 to-white md:py-24 flex justify-center pb-8"
            id="contact"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
        >
            <div className="container flex flex-col items-center justify-center">
                <motion.div
                    className="w-full max-w-7xl bg-white/90 rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row items-stretch"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    {/* Gambar */}
                    <motion.div
                        className="relative w-full lg:w-1/2 min-h-[220px] md:min-h-[280px] lg:min-h-[420px]"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <Image
                            src="/images/contact-section.png"
                            alt="Contact Izin Pasti"
                            fill
                            className="object-contain w-full h-full"
                            priority
                        />
                    </motion.div>

                    {/* Konten */}
                    <motion.div
                        className="w-full lg:w-1/2 flex flex-col justify-center items-center text-center px-6 md:px-12 py-8 md:py-12 space-y-5"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl md:text-3xl font-bold leading-snug">
                            Konsultasikan kebutuhan <span className="text-[#83A46D]">Legalitas</span> anda dengan <span className="text-[#83A46D]">Kami</span>
                        </h2>
                        <p className="text-base md:text-md text-black">
                            Tim kami siap membantu segala kebutuhan legalitas bisnis Anda. Jadwalkan konsultasi online dengan mudah dan cepat.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center">
                            <Link
                                href="https://wa.me/6285935000364?text=Halo!%20Saya%20ingin%20Berkonsultasi%20dengan%20Izin%20Pasti."
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button size="lg" className="rounded-full blue-gradient">
                                    <CalendarDays className="h-5 w-5" />
                                    Jadwalkan Konsultasi Online
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Share Buttons */}
                <motion.div
                    className="mt-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <ShareButtons />
                </motion.div>
            </div>
        </motion.div>
    );
}