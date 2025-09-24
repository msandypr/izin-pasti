"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export default function PopupAd() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setShowPopup(true);
  }, []);

  const whatsappUrl = "https://wa.me/6285935000364?text=Halo!%20Saya%20ingin%20Berkonsultasi%20dengan%Izin%Pasti.";

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={() => setShowPopup(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative w-[360px] rounded-2xl bg-white shadow-2xl p-4"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex flex-col items-center">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/popup_izinpasti.png"
                  alt="Izin Pasti Promo"
                  width={340}
                  height={450}
                  className="rounded-xl cursor-pointer transition hover:scale-105"
                />
              </a>
              <button
                className="mt-4 w-full rounded-lg bg-gray-200 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300 transition"
                onClick={() => setShowPopup(false)}
              >
                Tutup
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
