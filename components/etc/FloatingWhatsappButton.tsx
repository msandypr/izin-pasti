import WhatsappLogo from "@/components/etc/WhatsappLogo";
import Link from "next/link";

export default function FloatingWhatsappButton() {
  return (
    <Link
      href="https://wa.me/6285299084723?text=Halo%20saya%20butuh%20konsultasi"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 right-4 bottom-4 group"
      aria-label="Butuh Konsultasi WhatsApp"
    >
      <div className="flex items-center">
        <span className="opacity-0 group-hover:opacity-100 transition-all duration-200 bg-[#2CBCC4] text-white px-4 py-2 rounded-full shadow-lg text-sm font-medium whitespace-nowrap absolute right-16">
          Konsultasi Sekarang!
        </span>
        <div className="bg-[#2CBCC4] hover:bg-[#229fa7] text-white rounded-full shadow-lg w-14 h-14 flex items-center justify-center transition-all duration-200 relative z-10">
          <WhatsappLogo width={28} height={28} />
        </div>
      </div>
    </Link>
  );
}