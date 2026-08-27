import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ABOUT_CONTENT,
  COMPANY,
  PACKAGES,
  SERVICE_OFFERINGS,
} from '@/lib/data';

export const metadata: Metadata = {
  title: `About | ${COMPANY.name}`,
  description:
    'Meet Richandra and the Fervent Designs team — award-winning full-service wedding planners and event designers in Houston, TX.',
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
            Our Story
          </p>
          <h1 className="font-serif text-white text-5xl sm:text-6xl">About</h1>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0 overflow-hidden">
            <Image
              src="/about.jpg"
              alt={`${COMPANY.founder}, ${COMPANY.founderTitle}`}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 80vw, 400px"
            />
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <p className="text-[#ee85d4] text-[10px] tracking-[0.35em] uppercase mb-4">
                Meet {COMPANY.founder}
              </p>
              <h2 className="font-serif text-foreground text-4xl sm:text-5xl leading-tight">
                {COMPANY.founderTitle}
              </h2>
              <p className="text-[#ee85d4] text-sm tracking-[0.15em] uppercase mt-2">
                {COMPANY.legalName}
              </p>
            </div>

            <p className="text-foreground/65 leading-relaxed text-base sm:text-lg">
              {ABOUT_CONTENT.intro}
            </p>

            <p className="text-foreground/65 leading-relaxed text-base sm:text-lg">
              {ABOUT_CONTENT.body}
            </p>

            <p className="text-foreground/65 leading-relaxed text-base sm:text-lg">
              {ABOUT_CONTENT.story}
            </p>

            <p className="text-foreground/65 leading-relaxed text-base sm:text-lg">
              {ABOUT_CONTENT.closing}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/contact"
                className="inline-flex justify-center px-8 py-3.5 bg-[#ee85d4] text-black text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#f5a8e8] transition-colors duration-200"
              >
                Book a Consultation
              </Link>
              <Link
                href="/gallery"
                className="inline-flex justify-center px-8 py-3.5 border border-border text-foreground text-xs tracking-[0.2em] uppercase hover:border-[#ee85d4] hover:text-[#ee85d4] transition-all duration-200"
              >
                View Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8 bg-[#0e0c08]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#ee85d4] text-[10px] tracking-[0.35em] uppercase mb-4">
              Planning Packages
            </p>
            <h2 className="font-serif text-white text-3xl sm:text-4xl">
              Wedding Planning Options
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.name}
                className="border border-white/10 p-6 flex flex-col gap-3"
              >
                <p className="text-[#ee85d4] font-serif text-xl">{pkg.price}</p>
                <h3 className="text-white text-sm font-medium leading-snug">
                  {pkg.name}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed flex-1">
                  {pkg.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mb-8">
            <h3 className="font-serif text-white text-2xl mb-4">
              What We Offer
            </h3>
          </div>
          <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {SERVICE_OFFERINGS.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 border border-white/10 px-4 py-3 text-sm text-white/70"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#ee85d4] flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
