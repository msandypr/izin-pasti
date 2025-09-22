import WhatsappLogo from "@/components/etc/WhatsappLogo";
import Link from "next/link";

export default function FloatingWhatsappButton() {
  return (
    <Link
      href="https://wa.me/6285935000364?text=Halo!%20Saya%20ingin%20Berkonsultasi%20terkait%20layanan%20di%Izin%Pasti."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 right-4 bottom-4 group"
      aria-label="Butuh Konsultasi WhatsApp"
    >
      <div className="flex items-center">
        {/* <span className="opacity-0 group-hover:opacity-100 transition-all duration-200 bg-[#25D267] text-white border border-[#25D267] px-4 py-2 rounded-full shadow-lg text-sm font-medium whitespace-nowrap absolute right-16">
          Konsultasi Sekarang!
        </span> */}
        <div className="bg-white hover:bg-[#25D267] border border-[#25D267] rounded-full shadow-lg w-14 h-14 flex items-center justify-center transition-all duration-200 relative z-10">
          <WhatsappLogo width={28} height={28} className="fill-[#25D267] group-hover:fill-white transition-colors duration-200" />
        </div>
      </div>
    </Link>
  );
}