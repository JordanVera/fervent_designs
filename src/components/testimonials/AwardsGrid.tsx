'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { AWARDS } from '@/lib/data';

export default function AwardsGrid() {
  return (
    <section className="py-16 px-6 lg:px-8 bg-[#0e0c08]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#ee85d4] text-[10px] tracking-[0.35em] uppercase mb-4"
          >
            Recognition
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-white text-3xl sm:text-4xl"
          >
            Awards & Accolades
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center justify-items-center">
          {AWARDS.map((award, i) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-center justify-center"
            >
              <Image
                src={award.src}
                alt={award.alt}
                width={120}
                height={120}
                className="object-contain max-h-24 w-auto opacity-80 hover:opacity-100 transition-opacity"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
