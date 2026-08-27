'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Star } from 'lucide-react';
import { COMPANY, GOOGLE_REVIEWS } from '@/lib/data';

const PREVIEW_CHARS = 240;

export default function GoogleReviews() {
  return (
    <section className="bg-background px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-[10px] uppercase tracking-[0.35em] text-[#ee85d4]"
          >
            Google Reviews
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl text-foreground sm:text-5xl"
          >
            Loved by Houston Couples
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 flex max-w-2xl flex-col items-center gap-5 border border-border bg-card px-8 py-8 sm:flex-row sm:justify-between"
        >
          <div className="flex items-center gap-4">
            <GoogleMark className="h-10 w-10 shrink-0" />
            <div>
              <div className="flex items-baseline gap-2">
                <p className="font-serif text-4xl text-foreground">
                  {COMPANY.googleRating}
                </p>
                <p className="text-xs uppercase tracking-[0.18em] text-foreground/40">
                  out of 5
                </p>
              </div>
              <div className="mt-1 flex items-center gap-2">
                <StarRow rating={5} />
                <p className="text-xs text-foreground/50">
                  {COMPANY.googleReviewCount} Google reviews
                </p>
              </div>
            </div>
          </div>

          <a
            href={COMPANY.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border px-5 py-3 text-[10px] uppercase tracking-[0.2em] text-foreground transition-all duration-200 hover:border-[#ee85d4] hover:text-[#ee85d4]"
          >
            View all on Google
            <ExternalLink size={12} />
          </a>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {GOOGLE_REVIEWS.map((review, i) => (
            <motion.blockquote
              key={review.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="flex flex-col gap-4 border border-border bg-card p-8"
            >
              <div className="flex items-start justify-between gap-3">
                <StarRow rating={review.rating} />
                <GoogleMark className="h-5 w-5 opacity-80" />
              </div>

              <ReviewText text={review.text} />

              <footer className="mt-auto flex items-center gap-3 border-t border-border pt-4">
                <span
                  aria-hidden
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fce4f7] text-xs font-medium tracking-wide text-[#ee85d4]"
                >
                  {initials(review.name)}
                </span>
                <div>
                  <p className="font-serif text-lg text-foreground">
                    {review.name}
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-foreground/40">
                    {review.event}
                  </p>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href={COMPANY.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-foreground/60 transition-colors hover:text-[#ee85d4]"
          >
            Read more Google reviews
            <ExternalLink size={12} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function ReviewText({ text }: { text: string }) {
  const [expanded, setExpanded] = useState(false);
  const needsTruncate = text.length > PREVIEW_CHARS;
  const shown =
    !needsTruncate || expanded
      ? text
      : `${text.slice(0, PREVIEW_CHARS).trimEnd()}…`;

  return (
    <div className="flex-1">
      <p className="text-sm leading-relaxed text-foreground/65">
        &ldquo;{shown}&rdquo;
      </p>
      {needsTruncate ? (
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          className="mt-2 text-[10px] uppercase tracking-[0.2em] text-[#ee85d4] transition-colors hover:text-[#f5a8e8]"
        >
          {expanded ? 'Show less' : 'Read more'}
        </button>
      ) : null}
    </div>
  );
}

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, j) => {
        const filled = j + 1 <= rating;
        const partial = !filled && j < rating;
        return (
          <Star
            key={j}
            size={14}
            className={
              filled
                ? 'fill-[#ee85d4] text-[#ee85d4]'
                : partial
                  ? 'fill-[#ee85d4]/45 text-[#ee85d4]/45'
                  : 'text-[#ee85d4]/25'
            }
          />
        );
      })}
    </div>
  );
}

function initials(name: string) {
  const parts = name.replace(/\./g, '').trim().split(/\s+/);
  const first = parts[0]?.[0] ?? '';
  const last = parts.length > 1 ? (parts[parts.length - 1][0] ?? '') : '';
  return `${first}${last}`.toUpperCase();
}

function GoogleMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden
      focusable="false"
    >
      <path
        fill="#4285F4"
        d="M23.49 12.27c0-.79-.07-1.54-.2-2.27H12v4.3h6.46a5.52 5.52 0 0 1-2.4 3.62v3.01h3.88c2.27-2.09 3.55-5.17 3.55-8.66Z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.96-1.07 7.95-2.91l-3.88-3.01c-1.08.72-2.45 1.15-4.07 1.15-3.13 0-5.78-2.11-6.73-4.96H1.26v3.11A12 12 0 0 0 12 24Z"
      />
      <path
        fill="#FBBC05"
        d="M5.27 14.27A7.21 7.21 0 0 1 4.89 12c0-.79.14-1.55.38-2.27V6.62H1.26A12 12 0 0 0 0 12c0 1.94.46 3.78 1.26 5.38l4.01-3.11Z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.76 0 3.35.61 4.6 1.8l3.45-3.45C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.69 1.26 6.62l4.01 3.11C6.22 6.86 8.87 4.75 12 4.75Z"
      />
    </svg>
  );
}
