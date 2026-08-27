import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import FaqAccordion from '@/components/faq/FaqAccordion';
import { COMPANY } from '@/lib/data';
import { FAQ_CATEGORY } from '@/lib/faq';

export const metadata: Metadata = {
  title: `F.A.Q.s | ${COMPANY.name}`,
  description:
    'Frequently asked questions about Fervent Designs wedding planning, wedding management, micro weddings, and event services in Houston, TX.',
};

export default function FaqPage() {
  return (
    <>
      <section className="relative h-64 overflow-hidden sm:h-80">
        <Image
          src="/gallery/home-02.jpg"
          alt="Fervent Designs frequently asked questions"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 pt-20 text-center">
          <p className="mb-4 text-[10px] uppercase tracking-[0.4em] text-[#ee85d4]">
            Houston Wedding Planning & Event Design
          </p>
          <h1 className="font-serif text-4xl text-white sm:text-5xl md:text-6xl">
            Frequently Asked Questions
          </h1>
        </div>
      </section>

      <section className="bg-background px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 grid items-center gap-10 md:grid-cols-[220px_1fr]">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[220px] overflow-hidden">
              <Image
                src="/owner.jpg"
                alt={`${COMPANY.founderFullName}, ${COMPANY.founderTitle}`}
                fill
                className="object-cover object-top"
                sizes="220px"
              />
            </div>
            <div className="text-center md:text-left">
              <p className="mb-3 text-[10px] uppercase tracking-[0.35em] text-[#ee85d4]">
                Fervent Designs Frequently Asked Questions
              </p>
              <h2 className="font-serif text-3xl text-foreground sm:text-4xl">
                {FAQ_CATEGORY}
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-foreground/60 md:text-base">
                Answers to the questions couples ask most about planning,
                coordination, destination weddings, and booking with Fervent
                Designs.
              </p>
            </div>
          </div>

          <FaqAccordion />

          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-flex bg-[#ee85d4] px-8 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-black transition-colors duration-200 hover:bg-[#f5a8e8]"
            >
              Schedule a Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
