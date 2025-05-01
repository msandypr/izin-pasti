"use client"
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, ArrowRight as ArrowRightIcon } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from "react";

export default function PricingSection() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: 'center',
        loop: true,
        skipSnaps: false,
        dragFree: true,
    });

    const [selectedIndex, setSelectedIndex] = useState(0);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;

        const onSelect = () => {
            setSelectedIndex(emblaApi.selectedScrollSnap());
        };

        emblaApi.on('select', onSelect);
        onSelect();

        return () => {
            emblaApi.off('select', onSelect);
        };
    }, [emblaApi]);

    useEffect(() => {
        if (emblaApi) {
            const autoplay = setInterval(() => {
                emblaApi.scrollNext();
            }, 4000);

            return () => clearInterval(autoplay);
        }
    }, [emblaApi]);

    const packages = [
        {
            title: "Pendirian Perusahaan",
            price: "4.000.000",
            description: "Membantu Anda mendirikan perusahaan dengan proses cepat, transparan, dan bebas repot.",
            buttonText: "Pesan Sekarang"
        },
        {
            title: "Penanaman Modal Asing (PMA)",
            price: "4.500.000",
            description: "Layanan profesional untuk mendirikan perusahaan PMA yang sesuai dengan regulasi terbaru.",
            buttonText: "Pesan Sekarang",
            featured: true
        },
        {
            title: "Pembuatan Perjanjian",
            price: "500.000",
            description: "Perjanjian Anda akan dirancang untuk melindungi hak dan kewajiban secara maksimal.",
            buttonText: "Pesan Sekarang"
        },
        {
            title: "Perizinan Usaha",
            price: "3.000.000",
            description: "Pengurusan berbagai izin usaha sesuai dengan regulasi yang berlaku.",
            buttonText: "Pesan Sekarang"
        },
        {
            title: "Konsultasi Hukum",
            price: "750.000",
            description: "Konsultasi dengan tim ahli hukum kami untuk berbagai masalah legal bisnis.",
            buttonText: "Pesan Sekarang"
        }
    ];

    return (
        <section className="w-full bg-gradient-to-t from-white to-[#2CBCC4]/10 py-16 md:py-24" id="pricing">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Pilih Paket Yang <span className="gradient-text">Anda Butuhkan</span>
                    </h2>
                    <p className="text-lg text-[#2CBCC4]/70">
                        Pilih paket yang cocok dengan kebutuhan anda, dan silakan hubungi kami
                    </p>
                </div>

                <div className="relative">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex gap-8 px-4">
                            {packages.map((pkg, index) => (
                                <div
                                    key={index}
                                    className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                                >
                                    <div
                                        className={`h-full p-8 rounded-3xl border transition-all duration-300 ${
                                            selectedIndex === index
                                                ? 'bg-[#2CBCC4] text-white shadow-lg'
                                                : 'bg-white hover:shadow-lg'
                                        }`}
                                    >
                                        <div className="space-y-6">
                                            <h3 className="text-2xl font-bold">{pkg.title}</h3>
                                            <div className="space-y-2">
                                                <p className={`text-sm ${selectedIndex === index ? 'text-white/70' : 'text-[#2CBCC4]'}`}>
                                                    Mulai Dari
                                                </p>
                                                <div className="flex items-baseline">
                                                    <span className="text-4xl font-bold">Rp. {pkg.price}</span>
                                                </div>
                                            </div>
                                            <p className={selectedIndex === index ? 'text-white/90' : 'text-gray-600'}>
                                                {pkg.description}
                                            </p>
                                            <Button
                                                className={`w-full rounded-full ${
                                                    selectedIndex === index
                                                        ? 'bg-white text-[#2CBCC4] hover:bg-white/90'
                                                        : 'bg-[#2CBCC4]/10 hover:bg-[#2CBCC4]/20 text-[#2CBCC4]'
                                                }`}
                                            >
                                                {pkg.buttonText}
                                                <ArrowRightIcon className="ml-2 h-5 w-5" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <Button
                        onClick={scrollPrev}
                        variant="outline"
                        size="icon"
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 rounded-full hidden md:flex">
                        <ArrowLeft className="h-4 w-4" />
                    </Button>

                    <Button
                        onClick={scrollNext}
                        variant="outline"
                        size="icon"
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 rounded-full hidden md:flex">
                        <ArrowRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </section>
    );
}