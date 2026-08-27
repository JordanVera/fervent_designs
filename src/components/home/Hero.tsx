"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { COMPANY } from "@/lib/data";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen min-h-[600px] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        <Image
          src="/gallery/weddings/01.jpg"
          alt="Fervent Designs wedding planning"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#ee85d4] text-xs tracking-[0.4em] uppercase mb-6"
        >
          Houston Wedding Planner · Event Designer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="font-serif text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight max-w-4xl"
        >
          Personalizing Your{" "}
          <em className="italic text-[#ee85d4]">Party</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-6 text-white/75 text-base sm:text-lg max-w-xl leading-relaxed"
        >
          Full-service wedding planning and event design in Houston and
          destination weddings abroad. {COMPANY.motto}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/contact"
            className="px-8 py-3.5 bg-[#ee85d4] text-black text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#f5a8e8] transition-colors duration-200"
          >
            Book a Consultation
          </Link>
          <Link
            href="/gallery"
            className="px-8 py-3.5 border border-white/50 text-white text-xs tracking-[0.2em] uppercase hover:border-[#ee85d4] hover:text-[#ee85d4] transition-all duration-200"
          >
            View Gallery
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={22} className="text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
