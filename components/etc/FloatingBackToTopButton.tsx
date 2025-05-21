"use client"
import { FiArrowUp } from "react-icons/fi";
import { useEffect, useState } from "react";

export default function FloatingBackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed z-50 right-4 bottom-20 group bg-white hover:bg-[#2CBCC4] border border-[#2CBCC4] rounded-full shadow-lg w-14 h-14 flex items-center justify-center transition-all duration-200"
      aria-label="Back to Top"
    >
      <FiArrowUp className="text-[#2CBCC4] group-hover:text-white w-7 h-7 transition-colors duration-200" />
    </button>
  );
}