"use client"
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, ArrowRight as ArrowRightIcon } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from "react";
import { WalletMinimal } from "lucide-react";

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
            image: "/images/jasa-legalitas/pendirian-perusahaan.png",
            description: "Membantu Anda mendirikan perusahaan dengan proses cepat, transparan, dan bebas repot.",
            buttonText: "Pesan Sekarang"
        },
        {
            title: "Penanaman Modal Asing (PMA)",
            price: "4.500.000",
            image: "/images/jasa-legalitas/pendirian-perusahaan/penanaman-modal-asing.png",
            description: "Layanan profesional untuk mendirikan perusahaan PMA yang sesuai dengan regulasi terbaru.",
            buttonText: "Pesan Sekarang",
            featured: true
        },
        {
            title: "Pembuatan Perjanjian",
            price: "500.000",
            image: "/images/jasa-legalitas/pendirian-perusahaan.png",
            description: "Perjanjian Anda akan dirancang untuk melindungi hak dan kewajiban secara maksimal.",
            buttonText: "Pesan Sekarang"
        },
        {
            title: "Perizinan Usaha",
            price: "3.000.000",
            image: "/images/jasa-legalitas/pendirian-perusahaan.png",
            description: "Pengurusan berbagai izin usaha sesuai dengan regulasi yang berlaku.",
            buttonText: "Pesan Sekarang"
        },
        {
            title: "Konsultasi Hukum",
            price: "750.000",
            image: "/images/jasa-legalitas/pendirian-perusahaan.png",
            description: "Konsultasi dengan tim ahli hukum kami untuk berbagai masalah legal bisnis.",
            buttonText: "Pesan Sekarang"
        }
    ];

    return (
        <section className="w-full bg-gradient-to-t from-white to-[#2CBCC4]/10 py-16 md:py-24" id="pricing">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 bg-[#2CBCC4]/20 px-3 py-1 rounded-full text-[#2CBCC4] font-medium text-sm">
                        <WalletMinimal className="h-4 w-4 fill-[#2CBCC4] text-[#2CBCC4]" />
                        <span>Layanan Legalitas Kami</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Pilih Layanan yang <span className="gradient-text">Anda Butuhkan</span>
                    </h2>
                    <p className="text-md text-black">
                        Temukan layanan yang paling sesuai untuk kebutuhan bisnis Anda dan hubungi kami untuk konsultasi lebih lanjut.
                    </p>
                </div>

                <div className="relative">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex gap-8 px-4">
                            {packages.map((pkg, index) => (
                                <div
                                    key={index}
                                    className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
                                    <div
                                        className={
                                            `rounded-2xl p-6 flex flex-col items-center h-full transition-all duration-300
                                            ${selectedIndex === index
                                                ? "scale-100 z-10 bg-[#2CBCC4] border-4 border-[#2CBCC4] shadow-2xl"
                                                : "scale-75 bg-white border-2 border-[#2CBCC4]/50 shadow-lg"
                                            }`
                                        }>
                                        <h2 className={`text-2xl font-bold mb-2 text-center ${selectedIndex === index ? "text-white" : "text-[#2CBCC4]"}`}>{pkg.title}</h2>
                                        {pkg.image && (
                                            <img
                                                src={pkg.image}
                                                alt={pkg.title}
                                                className="w-full aspect-square object-cover rounded-xl mb-4"
                                            />
                                        )}
                                        <span className={`text-4xl font-bold mb-2 ${selectedIndex === index ? "text-white" : "text-[#2CBCC4]"}`}>Rp. {pkg.price}</span>
                                        <p className={`text-sm text-center mb-4 ${selectedIndex === index ? "text-white/90" : "text-black"}`}>{pkg.description}</p>
                                        <Button
                                            className={`mt-auto w-full rounded-full font-semibold transition
                                                 ${selectedIndex === index
                                                    ? "bg-white text-[#2CBCC4] hover:bg-white/90"
                                                    : "bg-[#2CBCC4] text-white hover:bg-[#239ba0]"
                                                }`}>
                                            {pkg.buttonText}
                                            <ArrowRightIcon className="ml-2 h-5 w-5" />
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <Button
                        onClick={scrollPrev}
                        variant="outline"
                        size="icon"
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 rounded-full">
                        <ArrowLeft className="h-4 w-4" />
                    </Button>

                    <Button
                        onClick={scrollNext}
                        variant="outline"
                        size="icon"
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 rounded-full">
                        <ArrowRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </section>
    );
}