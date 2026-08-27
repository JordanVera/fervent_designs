'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Music, Music2, ArrowRight } from 'lucide-react';
import { SERVICES } from '@/lib/data';

const icons = {
  heart: Heart,
  sparkles: Sparkles,
  music: Music,
  music2: Music2,
};

export default function ServicesPreview() {
  return (
    <section id="services" className="scroll-mt-24 py-24 bg-[#0e0c08]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[#ee85d4] text-[10px] tracking-[0.35em] uppercase mb-4"
          >
            What We Do
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-white text-4xl sm:text-5xl"
          >
            Our Services
          </motion.h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {SERVICES.map((service, i) => {
            const Icon = icons[service.icon as keyof typeof icons];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="group relative overflow-hidden bg-[#161410] border border-white/5 hover:border-[#ee85d4]/40 transition-all duration-500"
              >
                <Link href={service.href} className="block">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#161410] via-[#161410]/20 to-transparent" />
                  </div>

                  <div className="p-7">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full border border-[#ee85d4]/30 flex items-center justify-center">
                        <Icon size={14} className="text-[#ee85d4]" />
                      </div>
                      <span className="text-[#ee85d4] text-[10px] tracking-[0.3em] uppercase">
                        {service.subtitle}
                      </span>
                    </div>
                    <h3 className="font-serif text-white text-2xl mb-3">
                      {service.title}
                    </h3>
                    <p className="text-white/55 text-sm leading-relaxed line-clamp-4">
                      {service.description}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#ee85d4] transition-all duration-200 group-hover:gap-3">
                      View Service
                      <ArrowRight
                        size={12}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#ee85d4] hover:underline underline-offset-4"
          >
            View All Services
            <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </section>
  );
}
