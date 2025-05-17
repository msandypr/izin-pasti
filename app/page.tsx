"use client";
import HeroSection from "@/components/homepage/hero-section";
import FeaturesSection from "@/components/homepage/features-section";
import PricingSection from "@/components/homepage/pricing-section";
import ContactSection from "@/components/homepage/contact-section";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Home() {
  const featuresControls = useAnimation();
  const pricingControls = useAnimation();
  const contactControls = useAnimation();

  const featuresRef = useRef(null);
  const pricingRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === featuresRef.current) {
              featuresControls.start({ opacity: 1, y: 0 });
            } else if (entry.target === pricingRef.current) {
              pricingControls.start({ opacity: 1, y: 0 });
            } else if (entry.target === contactRef.current) {
              contactControls.start({ opacity: 1, y: 0 });
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (featuresRef.current) observer.observe(featuresRef.current);
    if (pricingRef.current) observer.observe(pricingRef.current);
    if (contactRef.current) observer.observe(contactRef.current);

    return () => {
      if (featuresRef.current) observer.unobserve(featuresRef.current);
      if (pricingRef.current) observer.unobserve(pricingRef.current);
      if (contactRef.current) observer.unobserve(contactRef.current);
    };
  }, [featuresControls, pricingControls, contactControls]);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <HeroSection />
      </motion.div>
      <motion.div
        ref={featuresRef}
        initial={{ opacity: 0, y: -30 }}
        animate={featuresControls}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <FeaturesSection />
      </motion.div>
      <motion.div
        ref={pricingRef}
        initial={{ opacity: 0, y: -50 }}
        animate={pricingControls}
        transition={{ duration: 1, ease: "easeIn" }}
      >
        <PricingSection />
      </motion.div>
      <motion.div
        ref={contactRef}
        initial={{ opacity: 0, y: -70 }}
        animate={contactControls}
        transition={{ duration: 1.2, ease: "easeIn" }}
      >
        <ContactSection />
      </motion.div>
    </div>
  );
}