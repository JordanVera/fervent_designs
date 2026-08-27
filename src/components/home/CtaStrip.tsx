'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { COMPANY } from '@/lib/data';

export default function CtaStrip() {
  return (
    <section className="relative py-24 px-6 lg:px-8 bg-[#ee85d4] overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute top-0 bottom-0 w-px bg-black"
            style={{ left: `${(i + 1) * 12.5}%` }}
          />
        ))}
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-black/50 text-[10px] tracking-[0.4em] uppercase mb-4"
        >
          Ready to Begin
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-black text-4xl sm:text-5xl md:text-6xl leading-tight mb-6"
        >
          Let&apos;s Plan Your <em className="italic">Perfect Event</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-black/65 text-base sm:text-lg max-w-xl mx-auto mb-10"
        >
          Book a consultation to discuss how Fervent Designs can bless you —
          from your first meeting to the final celebration.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/contact"
            className="px-8 py-3.5 bg-black text-white text-xs tracking-[0.2em] uppercase hover:bg-[#1a1a1a] transition-colors duration-200"
          >
            Book a Consultation
          </Link>
          <a
            href={`tel:${COMPANY.phoneHref}`}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-black/30 text-black text-xs tracking-[0.2em] uppercase hover:bg-black/10 transition-colors duration-200"
          >
            <Phone size={13} />
            {COMPANY.phone}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
