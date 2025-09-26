import Link from "next/link";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbProps {
    title: string;
    items: BreadcrumbItem[];
}

export default function Breadcrumb({ title, items }: BreadcrumbProps) {
    return (
      <section className="relative h-48 flex items-center justify-center bg-gradient-to-r from-[#83A46D] to-[#83A46D]/50 bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-[#83A46D] to-[#83A46D]/50" />
        <div className="relative z-10 flex flex-col items-center">
          <nav className="flex items-center text-sm text-white/80" aria-label="Breadcrumb">
            <ol className="flex space-x-2">
              {items.map((item, idx) => (
                <li key={idx} className={idx === items.length - 1 ? "text-white font-semibold" : undefined}>
                  {item.href && idx !== items.length - 1 ? (
                    <>
                      <Link href={item.href} className="hover:underline">{item.label}</Link>
                      <span className="mx-2">/</span>
                    </>
                  ) : (
                    item.label
                  )}
                </li>
              ))}
            </ol>
          </nav>
          <h1 className="text-3xl font-bold text-white mt-4">{title}</h1>
        </div>
      </section>
    );
  }