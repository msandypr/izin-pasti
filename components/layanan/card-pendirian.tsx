import Image from "next/image";
import WhatsappLogo from "../etc/WhatsappLogo";

interface ServiceHighlightCardProps {
  title: string;
  price: string;
  image: string;
  features: string[];
  note?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

export default function ServiceHighlightCard({
  title,
  price,
  image,
  features,
  note,
  ctaText = "Dirikan Sekarang",
  onCtaClick,
}: ServiceHighlightCardProps) {
  return (
    <div className="bg-gradient-to-br from-[#e0f7fa] to-[#c8e6f8] p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto space-y-6 md:space-y-0 md:space-x-6">
      {/* Ilustrasi */}
      <div className="flex-shrink-0">
        <Image
          src={image}
          alt={`Ilustrasi ${title}`}
          width={320}
          height={320}
          className="rounded-md object-cover"
        />
      </div>

      {/* Konten */}
      <div className="flex-1 text-[#2CBCC4]">
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="text-sm font-light text-black mt-2">Mulai dari</p>
        <p className="text-2xl font-bold text-[#2CBCC4]">{price}</p>
        <ul className="mt-4 list-disc list-inside space-y-1 text-sm text-gray-700">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        {note && (
          <p className="text-xs text-gray-600 mt-2 italic">{note}</p>
        )}

        <button
          onClick={onCtaClick}
          className="flex px-6 py-2 rounded-full bg-[#2CBCC4] text-white font-semibold hover:bg-[#239ba0] transition text-center items-center justify-center gap-2 mt-4"
        >
         <WhatsappLogo/> {ctaText}
        </button>
      </div>
    </div>
  );
}
