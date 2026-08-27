'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/data';

type TestimonialsSectionProps = {
  limit?: number;
};

export default function TestimonialsSection({
  limit,
}: TestimonialsSectionProps) {
  const reviews = limit ? TESTIMONIALS.slice(0, limit) : TESTIMONIALS;

  return (
    <section className="py-24 px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#ee85d4] text-[10px] tracking-[0.35em] uppercase mb-4"
          >
            Client Love
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-foreground text-4xl sm:text-5xl"
          >
            Testimonials
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.blockquote
              key={review.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="flex flex-col gap-4 bg-card border border-border p-8"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    className="text-[#ee85d4] fill-[#ee85d4]"
                  />
                ))}
              </div>
              <p className="text-foreground/65 text-sm leading-relaxed flex-1">
                &ldquo;{review.text}&rdquo;
              </p>
              <footer className="border-t border-border pt-4">
                <p className="font-serif text-foreground text-lg">
                  {review.name}
                </p>
                <p className="text-[10px] tracking-[0.2em] uppercase text-foreground/40 mt-0.5">
                  {review.event}
                </p>
              </footer>
            </motion.blockquote>
          ))}
        </div>

        {limit && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              href="/testimonials"
              className="inline-flex text-sm text-foreground/60 hover:text-[#ee85d4] transition-colors text-xs tracking-[0.2em] uppercase"
            >
              View all testimonials
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
