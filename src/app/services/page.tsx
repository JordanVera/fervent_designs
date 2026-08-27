import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import CtaStrip from '@/components/home/CtaStrip';
import { COMPANY } from '@/lib/data';
import { SERVICE_PAGES } from '@/lib/services';

export const metadata: Metadata = {
  title: `Services | ${COMPANY.name}`,
  description:
    'Wedding planning, party rentals, Houston DJ, and live saxophone from Fervent Designs — the one-stop shop for weddings and events.',
};

export default function ServicesIndexPage() {
  return (
    <>
      <section className="relative h-64 overflow-hidden sm:h-80">
        <Image
          src="/services/planning/01.jpg"
          alt="Fervent Designs wedding planning and event services"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 pt-20 text-center">
          <p className="mb-4 text-[10px] uppercase tracking-[0.4em] text-[#ee85d4]">
            The One-Stop Shop
          </p>
          <h1 className="font-serif text-5xl text-white sm:text-6xl">
            Our Services
          </h1>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-base leading-relaxed text-foreground/65 sm:text-lg">
            Start with wedding planning or wedding management, then add on DJ,
            sax, backdrops, and decor — one team, one vision, and only one
            retainer.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-7xl gap-6 md:grid-cols-2">
          {SERVICE_PAGES.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group overflow-hidden border border-border bg-card transition-colors hover:border-[#ee85d4]/50"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.previewImage}
                  alt={service.heroAlt}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="p-7">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#ee85d4]">
                  {service.subtitle}
                </p>
                <h2 className="mt-3 font-serif text-3xl text-foreground">
                  {service.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-foreground/60">
                  {service.shortDescription}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#ee85d4] transition-all group-hover:gap-3">
                  View {service.navLabel}
                  <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
