import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import { COMPANY, WEDDING_VIDEOS } from '@/lib/data';

export const metadata: Metadata = {
  title: `Gallery | ${COMPANY.name}`,
  description:
    'Browse Fervent Weddings, featured events, and wedding video highlights by Fervent Designs in Houston, TX.',
};

export default function GalleryPage() {
  return (
    <>
      <section className="relative h-64 sm:h-80 overflow-hidden">
        <Image
          src="/gallery/weddings/02.jpg"
          alt="Fervent Designs gallery"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <p className="text-[#ee85d4] text-[10px] tracking-[0.4em] uppercase mb-4">
            Our Work
          </p>
          <h1 className="font-serif text-white text-5xl sm:text-6xl">
            Gallery
          </h1>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-foreground/60 leading-relaxed">
            Photos from Fervent Weddings, featured events, and wedding video
            highlights — curated from our portfolio across Houston and
            destination celebrations.
          </p>
        </div>

        <GalleryGrid />

        <div className="mt-20 border-t border-border pt-16">
          <div className="text-center mb-10">
            <p className="text-[#ee85d4] text-[10px] tracking-[0.35em] uppercase mb-3">
              Wedding Videos
            </p>
            <h2 className="font-serif text-foreground text-3xl sm:text-4xl">
              Highlight Reels
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {WEDDING_VIDEOS.map((video) => (
              <div key={video.id} className="group">
                <div className="relative aspect-video overflow-hidden mb-3">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <span className="w-12 h-12 rounded-full bg-[#ee85d4]/90 flex items-center justify-center text-black text-lg pl-0.5">
                      ▶
                    </span>
                  </div>
                </div>
                <h3 className="font-serif text-foreground text-lg">
                  {video.title}
                </h3>
                <p className="text-foreground/50 text-xs mt-1">{video.date}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-flex px-8 py-3.5 bg-[#ee85d4] text-black text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#f5a8e8] transition-colors duration-200"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </>
  );
}
