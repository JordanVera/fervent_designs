'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Star } from 'lucide-react';
import {
  COMPANY,
  GOOGLE_RATING,
  GOOGLE_REVIEWS,
} from '@/lib/data';

function GoogleLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden
    >
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function RatingStars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          size={14}
          className={
            index < rating
              ? 'text-[#ee85d4] fill-[#ee85d4]'
              : 'text-foreground/15'
          }
        />
      ))}
    </div>
  );
}

type TestimonialsSectionProps = {
  limit?: number;
  showGoogleHeader?: boolean;
};

export default function TestimonialsSection({
  limit,
  showGoogleHeader = true,
}: TestimonialsSectionProps) {
  const reviews = limit ? GOOGLE_REVIEWS.slice(0, limit) : GOOGLE_REVIEWS;
  const remainingCount = GOOGLE_RATING.reviewCount - reviews.length;

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
            Google Reviews
          </motion.h2>
        </div>

        {showGoogleHeader && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mb-12 flex flex-col sm:flex-row items-center justify-between gap-6 border border-border bg-card p-6 sm:p-8"
          >
            <div className="flex items-center gap-4">
              <GoogleLogo className="h-8 w-8 shrink-0" />
              <div>
                <p className="font-serif text-foreground text-2xl sm:text-3xl">
                  {GOOGLE_RATING.rating}{' '}
                  <span className="text-[#ee85d4]">★</span>
                </p>
                <p className="text-sm text-foreground/50 mt-0.5">
                  Based on {GOOGLE_RATING.reviewCount} Google reviews
                </p>
              </div>
            </div>
            <a
              href={COMPANY.googleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground text-xs tracking-[0.2em] uppercase hover:border-[#ee85d4] hover:text-[#ee85d4] transition-all duration-200"
            >
              View on Google
              <ExternalLink size={14} />
            </a>
          </motion.div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.blockquote
              key={review.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="flex flex-col gap-4 bg-card border border-border p-8"
            >
              <div className="flex items-center justify-between gap-3">
                <RatingStars rating={review.rating} />
                <span className="inline-flex items-center gap-1.5 text-[10px] tracking-[0.15em] uppercase text-foreground/40">
                  <GoogleLogo className="h-3.5 w-3.5" />
                  Google
                </span>
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

        {limit && remainingCount > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <a
              href={COMPANY.googleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-[#ee85d4] transition-colors"
            >
              Read all {GOOGLE_RATING.reviewCount} reviews on Google
              <ExternalLink size={14} />
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
