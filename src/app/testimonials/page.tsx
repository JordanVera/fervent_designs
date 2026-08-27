import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import TestimonialsSection from '@/components/testimonials/TestimonialsSection';
import AwardsGrid from '@/components/testimonials/AwardsGrid';
import { COMPANY } from '@/lib/data';

export const metadata: Metadata = {
  title: `Testimonials & Awards | ${COMPANY.name}`,
  description:
    'Read client reviews and see awards earned by Fervent Designs — award-winning Houston wedding planner and event designer.',
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="relative h-64 sm:h-80 overflow-hidden">
        <Image
          src="/gallery/weddings/05.jpg"
          alt="Fervent Designs testimonials"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <p className="text-[#ee85d4] text-[10px] tracking-[0.4em] uppercase mb-4">
            Client Love
          </p>
          <h1 className="font-serif text-white text-5xl sm:text-6xl">
            Testimonials
          </h1>
        </div>
      </section>

      <TestimonialsSection />
      <AwardsGrid />

      <section className="py-16 px-6 lg:px-8 bg-background border-t border-border">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-foreground/60 leading-relaxed mb-8">
            Featured in Wedding Rule&apos;s Top 25 Wedding Florists in Houston
            and recognized on The Knot. Leave us a review — we&apos;d love to
            hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={COMPANY.knotUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center px-8 py-3.5 border border-border text-foreground text-xs tracking-[0.2em] uppercase hover:border-[#ee85d4] hover:text-[#ee85d4] transition-all duration-200"
            >
              Review on The Knot
            </a>
            <Link
              href="/contact"
              className="inline-flex justify-center px-8 py-3.5 bg-[#ee85d4] text-black text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#f5a8e8] transition-colors duration-200"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
