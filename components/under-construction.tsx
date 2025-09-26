"use client"
import { motion } from "framer-motion";
import { Hammer, HardHat, Construction } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function UnderConstruction() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#83A46D]/10 to-white flex items-center justify-center py-8 md:py-16">
      <div className="container">
        <div className="text-center space-y-8 max-w-3xl mx-auto">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center gap-4"
          >
            <Construction className="h-16 w-16 text-[#83A46D]" />
            <HardHat className="h-16 w-16 text-[#83A46D]" />
            <Hammer className="h-16 w-16 text-[#83A46D]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Halaman Sedang <span className="gradient-text">Dalam Pengembangan</span>
            </h1>
            <p className="text-lg text-[#83A46D]/70 mb-8">
              Kami sedang bekerja keras untuk memberikan layanan terbaik untuk Anda. 
              Silakan kembali dalam beberapa waktu.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              size="lg" 
              variant="outline" 
              className="rounded-full"
              onClick={() => window.location.href = '/'}
            >
              Ke Beranda
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-12 text-[#83A46D]/50 text-sm"
          >
            Estimasi Waktu Pengembangan: Segera
          </motion.div>
        </div>
      </div>
    </div>
  );
}