import type React from "react";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FloatingWhatsappButton from "@/components/etc/FloatingWhatsappButton";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plusjakartasans",
});

export const metadata: Metadata = {
  title: "Izin Pasti - Layanan Legalitas Bisnis Terkemuka di Indonesia",
  description: "Izin Pasti menawarkan berbagai layanan, mulai dari pendirian perusahaan, pengurusan izin usaha, pembuatan dan pengesahan kontrak hukum, hingga konsultasi legal. Didukung oleh tim profesional yang berkompeten, kami berkomitmen memberikan solusi yang cepat, akurat, dan transparan.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${plusJakartaSans.variable} font-plusjakartasans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <FloatingBackToTopButton />
            <FloatingWhatsappButton />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";import FloatingBackToTopButton from "@/components/etc/FloatingBackToTopButton";

