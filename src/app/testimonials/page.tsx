import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import VideoTestimonials from '@/components/testimonials/VideoTestimonials';
import GoogleReviews from '@/components/testimonials/GoogleReviews';
import AwardsGrid from '@/components/testimonials/AwardsGrid';
import { COMPANY } from '@/lib/data';

export const metadata: Metadata = {
  title: `Testimonials & Awards | ${COMPANY.name}`,
  description:
    'Watch video testimonials and read Google reviews from Houston couples who planned their weddings with Fervent Designs.',
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="relative h-64 overflow-hidden sm:h-80">
        <Image
          src="/gallery/weddings/05.jpg"
          alt="Fervent Designs testimonials"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 pt-20 text-center">
          <p className="mb-4 text-[10px] uppercase tracking-[0.4em] text-[#ee85d4]">
            Client Love
          </p>
          <h1 className="font-serif text-5xl text-white sm:text-6xl">
            Testimonials
          </h1>
        </div>
      </section>

      <VideoTestimonials />
      <GoogleReviews />
      <AwardsGrid />

      <section className="border-t border-border bg-background px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-8 leading-relaxed text-foreground/60">
            Featured in Wedding Rule&apos;s Top 25 Wedding Florists in Houston
            and recognized on The Knot. Leave us a review — we&apos;d love to
            hear from you.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={COMPANY.googleWriteReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center border border-border px-8 py-3.5 text-xs uppercase tracking-[0.2em] text-foreground transition-all duration-200 hover:border-[#ee85d4] hover:text-[#ee85d4]"
            >
              Review on Google
            </a>
            <a
              href={COMPANY.knotUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center border border-border px-8 py-3.5 text-xs uppercase tracking-[0.2em] text-foreground transition-all duration-200 hover:border-[#ee85d4] hover:text-[#ee85d4]"
            >
              Review on The Knot
            </a>
            <Link
              href="/contact"
              className="inline-flex justify-center bg-[#ee85d4] px-8 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-black transition-colors duration-200 hover:bg-[#f5a8e8]"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
