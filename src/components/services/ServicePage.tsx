import Image from 'next/image';
import Link from 'next/link';
import { SERVICE_PAGES, type ServiceContent } from '@/lib/services';
import CtaStrip from '@/components/home/CtaStrip';

function PhotoGrid({ photos }: { photos: ServiceContent['photos'] }) {
  if (photos.length === 1) {
    const photo = photos[0];
    return (
      <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden bg-[#161410]">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          className="object-cover object-top"
          sizes="28rem"
        />
      </div>
    );
  }

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {photos.map((photo, index) => (
        <div
          key={photo.src}
          className={
            index === 0
              ? 'relative aspect-[4/5] overflow-hidden bg-[#f7eef4] sm:col-span-2 sm:aspect-[16/10] lg:col-span-2'
              : 'relative aspect-[4/5] overflow-hidden bg-[#f7eef4]'
          }
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            className="object-cover object-center"
            sizes={
              index === 0
                ? '(max-width: 640px) 100vw, 66vw'
                : '(max-width: 640px) 100vw, 33vw'
            }
          />
        </div>
      ))}
    </div>
  );
}

export default function ServicePage({ service }: { service: ServiceContent }) {
  const otherServices = SERVICE_PAGES.filter(
    (item) => item.slug !== service.slug,
  );

  return (
    <>
      <section className="relative h-64 overflow-hidden sm:h-80">
        <Image
          src={service.heroImage}
          alt={service.heroAlt}
          fill
          priority
          className={
            service.heroPosition === 'object-top'
              ? 'object-cover object-top'
              : 'object-cover object-center'
          }
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 pt-20 text-center">
          <p className="mb-4 text-[10px] uppercase tracking-[0.4em] text-[#ee85d4]">
            {service.eyebrow}
          </p>
          <h1 className="font-serif text-4xl text-white sm:text-5xl md:text-6xl">
            {service.title}
          </h1>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
          <div>
            <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-[#ee85d4]">
              {service.subtitle}
            </p>
            <h2 className="mb-8 font-serif text-3xl leading-tight text-foreground sm:text-4xl">
              {service.shortDescription}
            </h2>
            <div className="flex flex-col gap-5">
              {service.intro.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 48)}
                  className="text-base leading-relaxed text-foreground/65 sm:text-[17px]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <Link
              href="/contact"
              className="mt-10 inline-flex bg-[#ee85d4] px-8 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-black transition-colors duration-200 hover:bg-[#f5a8e8]"
            >
              Schedule a Consultation
            </Link>
          </div>

          <div>
            <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-[#ee85d4]">
              What We Offer
            </p>
            <ul className="flex flex-wrap gap-2">
              {service.highlights.map((item) => (
                <li
                  key={item}
                  className="border border-border px-3 py-2 text-[11px] uppercase tracking-[0.16em] text-foreground/70"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#0e0c08] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-[#ee85d4]">
              {service.pricingEyebrow}
            </p>
            <h2 className="font-serif text-3xl text-white sm:text-4xl">
              {service.pricingTitle}
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {service.prices.map((price) => (
              <article
                key={price.name}
                className="border border-white/10 bg-[#161410] p-7"
              >
                <p className="font-serif text-3xl text-[#ee85d4]">
                  {price.price}
                </p>
                <h3 className="mt-4 font-serif text-xl text-white">
                  {price.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  {price.details}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-white/45">
            {service.bookingNote}
          </p>
        </div>
      </section>

      {service.people ? (
        <section className="px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-[#ee85d4]">
              The Talent
            </p>
            <h2 className="mb-12 font-serif text-3xl text-foreground sm:text-4xl">
              {service.peopleTitle}
            </h2>
            <div
              className={
                service.people.length > 1
                  ? 'grid gap-12 md:grid-cols-2'
                  : 'mx-auto grid max-w-4xl gap-10 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:items-center'
              }
            >
              {service.people.map((person) => (
                <article key={person.name} className="flex flex-col gap-6">
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#f7eef4]">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-3xl text-foreground">
                      {person.name}
                    </h3>
                    <p className="mt-1.5 text-[10px] uppercase tracking-[0.25em] text-[#ee85d4]">
                      {person.role}
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-foreground/65">
                      {person.bio}
                    </p>
                    <p className="mt-4 font-serif italic text-foreground">
                      — {person.credit}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {service.genres ? (
        <section className="border-y border-border bg-[#fdf5fb] px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-[#ee85d4]">
              The Sound
            </p>
            <h2 className="mb-8 font-serif text-3xl text-foreground">
              {service.genresTitle}
            </h2>
            <ul className="flex flex-wrap gap-2">
              {service.genres.map((genre) => (
                <li
                  key={genre}
                  className="bg-white px-4 py-2.5 text-sm text-foreground/70"
                >
                  {genre}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {service.photos.length > 1 || !service.people ? (
        <section className="px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-[#ee85d4]">
                  From Our Work
                </p>
                <h2 className="font-serif text-3xl text-foreground sm:text-4xl">
                  Photos
                </h2>
              </div>
              <Link
                href="/gallery"
                className="text-xs uppercase tracking-[0.2em] text-[#ee85d4] hover:underline underline-offset-4"
              >
                View Full Gallery
              </Link>
            </div>
            <PhotoGrid photos={service.photos} />
          </div>
        </section>
      ) : null}

      {service.quotes ? (
        <section className="bg-[#fdf5fb] px-6 py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
            {service.quotes.map((quote) => (
              <blockquote key={quote.name}>
                <p className="font-serif text-2xl leading-snug text-foreground">
                  &ldquo;{quote.text}&rdquo;
                </p>
                <footer className="mt-6">
                  <p className="font-serif text-xl text-foreground">
                    {quote.name}
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-foreground/40">
                    {quote.event}
                  </p>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>
      ) : null}

      <section className="border-t border-border px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-8 text-[10px] uppercase tracking-[0.35em] text-[#ee85d4]">
            More Services
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {otherServices.map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="group border border-border p-6 transition-colors hover:border-[#ee85d4]"
              >
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#ee85d4]">
                  {item.subtitle}
                </p>
                <h3 className="mt-2 font-serif text-2xl text-foreground group-hover:text-[#ee85d4]">
                  {item.navLabel}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
