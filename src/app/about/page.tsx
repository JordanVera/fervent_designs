import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Star } from 'lucide-react';
import AwardsGrid from '@/components/testimonials/AwardsGrid';
import CtaStrip from '@/components/home/CtaStrip';
import { ABOUT_CONTENT, COMPANY, TESTIMONIALS } from '@/lib/data';

const wingateReview = TESTIMONIALS.find(
  (review) => review.name === 'Mrs. Wingate',
);

export const metadata: Metadata = {
  title: `About | ${COMPANY.name}`,
  description:
    'Meet Richandra Nickerson-Ukpong, founder of Fervent Designs — Houston wedding planner and award-winning full-service event design firm.',
};

export default function AboutPage() {
  return (
    <>
      <section className="relative h-64 sm:h-80 overflow-hidden">
        <Image
          src="/gallery/home-02.jpg"
          alt="About Fervent Designs"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <p className="text-[#ee85d4] text-[10px] tracking-[0.4em] uppercase mb-4">
            {ABOUT_CONTENT.pageEyebrow}
          </p>
          <h1 className="font-serif text-white text-5xl sm:text-6xl">
            About Us
          </h1>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-12 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-28">
            <div className="relative aspect-267/350 w-full max-w-sm mx-auto lg:max-w-none overflow-hidden bg-[#f7eef4] shadow-[0_24px_60px_-24px_rgba(14,12,8,0.35)]">
              <Image
                src="/owner.jpg"
                alt={`${COMPANY.founderFullName}, founder and owner of ${COMPANY.legalName}`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 24rem, 420px"
              />
            </div>
            <div className="mt-5 text-center lg:text-left">
              <p className="font-serif text-foreground text-2xl">
                {COMPANY.founderFullName}
              </p>
              <p className="text-[#ee85d4] text-[10px] tracking-[0.25em] uppercase mt-1.5">
                {COMPANY.founderTitle}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <p className="text-[#ee85d4] text-[10px] tracking-[0.35em] uppercase mb-4">
                Our Story
              </p>
              <h2 className="font-serif text-foreground text-4xl sm:text-5xl leading-tight">
                {ABOUT_CONTENT.pageTitle}
              </h2>
            </div>

            {ABOUT_CONTENT.story.map((paragraph) => (
              <p
                key={paragraph.slice(0, 48)}
                className="text-foreground/65 leading-relaxed text-base sm:text-[17px]"
              >
                {paragraph}
              </p>
            ))}

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/#services"
                className="inline-flex justify-center px-8 py-3.5 bg-[#ee85d4] text-black text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#f5a8e8] transition-colors duration-200"
              >
                View Our Offerings
              </Link>
              <Link
                href="/contact"
                className="inline-flex justify-center px-8 py-3.5 border border-border text-foreground text-xs tracking-[0.2em] uppercase hover:border-[#ee85d4] hover:text-[#ee85d4] transition-all duration-200"
              >
                Schedule a Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8 bg-[#0e0c08]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#ee85d4] text-[10px] tracking-[0.35em] uppercase mb-4">
              The Team
            </p>
            <h2 className="font-serif text-white text-3xl sm:text-4xl">
              Meet the Fervent Designs Family
            </h2>
          </div>
          <div className="relative aspect-540/358 overflow-hidden bg-[#161410]">
            <Image
              src="/team.jpg"
              alt="Fervent Designs team — Houston wedding planners and one-stop shop for weddings and events"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 64rem"
            />
          </div>
          <p className="mt-6 text-center text-white/50 text-sm tracking-wide">
            Houston Wedding Planners · One-Stop Shop for Weddings &amp; Events
          </p>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          <div>
            <p className="text-[#ee85d4] text-[10px] tracking-[0.35em] uppercase mb-4">
              The Meaning
            </p>
            <h2 className="font-serif text-foreground text-4xl sm:text-5xl leading-tight mb-8">
              {ABOUT_CONTENT.ourName.title}
            </h2>
            <blockquote className="border-l-2 border-[#ee85d4] pl-6 mb-6">
              <p className="font-serif italic text-foreground text-2xl sm:text-3xl leading-snug">
                {ABOUT_CONTENT.ourName.definition}
              </p>
            </blockquote>
            <p className="text-foreground/50 text-sm tracking-wide mb-6">
              {ABOUT_CONTENT.ourName.synonyms}
            </p>
            <p className="text-foreground/65 leading-relaxed text-base sm:text-[17px]">
              {ABOUT_CONTENT.ourName.body}
            </p>
          </div>

          <div>
            <p className="text-[#ee85d4] text-[10px] tracking-[0.35em] uppercase mb-4">
              Our Promise
            </p>
            <h2 className="font-serif text-foreground text-4xl sm:text-5xl leading-tight mb-8">
              {ABOUT_CONTENT.whyChooseUs.title}
            </h2>
            <div className="flex flex-col gap-5">
              {ABOUT_CONTENT.whyChooseUs.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 48)}
                  className="text-foreground/65 leading-relaxed text-base sm:text-[17px]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <p className="font-serif italic text-foreground text-xl mt-10">
              — {ABOUT_CONTENT.whyChooseUs.signature}
            </p>
          </div>
        </div>
      </section>

      {wingateReview ? (
        <section className="py-20 px-6 lg:px-8 bg-[#fdf5fb]">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center gap-0.5 mb-8">
              {Array.from({ length: wingateReview.rating }).map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className="text-[#ee85d4] fill-[#ee85d4]"
                />
              ))}
            </div>
            <blockquote className="font-serif text-foreground text-2xl sm:text-3xl leading-snug">
              &ldquo;{wingateReview.text}&rdquo;
            </blockquote>
            <footer className="mt-8">
              <p className="font-serif text-foreground text-xl">
                {wingateReview.name}
              </p>
              <p className="text-[10px] tracking-[0.2em] uppercase text-foreground/40 mt-1">
                {wingateReview.event}
              </p>
            </footer>
            <Link
              href="/testimonials"
              className="inline-flex mt-10 text-[#ee85d4] text-xs tracking-[0.2em] uppercase hover:underline underline-offset-4"
            >
              More Love Notes
            </Link>
          </div>
        </section>
      ) : null}

      <AwardsGrid />
      <CtaStrip />
    </>
  );
}
