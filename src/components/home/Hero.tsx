'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  motion,
  useAnimationControls,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { ChevronDown, Pause, Play } from 'lucide-react';
import { COMPANY } from '@/lib/data';
import { cn } from '@/lib/utils';

const SLIDE_DURATION_MS = 9000;
const FADE_DURATION_S = 1.6;
const KEN_BURNS_DURATION_S = SLIDE_DURATION_MS / 1000 + FADE_DURATION_S;

const HERO_SLIDES = [
  {
    src: '/gallery/weddings/08.jpg',
    alt: 'Silhouetted newlyweds touching foreheads under a glowing LOVE marquee',
    from: { scale: 1.08, x: '0%', y: '0%' },
    to: { scale: 1.24, x: '1.5%', y: '-3%' },
  },
  {
    src: '/gallery/weddings/04.jpg',
    alt: 'Wedding party in tuxedos and cowboy hats lined up at a Southern estate',
    from: { scale: 1.22, x: '-4%', y: '1%' },
    to: { scale: 1.12, x: '4%', y: '-1%' },
  },
  {
    src: '/gallery/weddings/13.jpg',
    alt: 'Newlyweds sharing a kiss in front of a grand estate',
    from: { scale: 1.06, x: '0%', y: '5%' },
    to: { scale: 1.22, x: '0%', y: '-4%' },
  },
] as const;

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const prefersReducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((index: number) => {
    setActiveIndex((index + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || paused) return;

    const id = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % HERO_SLIDES.length);
    }, SLIDE_DURATION_MS);

    return () => window.clearTimeout(id);
  }, [activeIndex, paused, prefersReducedMotion]);

  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[600px] overflow-hidden"
      aria-roledescription="carousel"
      aria-label="Featured Fervent Designs wedding photography"
    >
      <motion.div style={{ y }} className="absolute inset-0">
        {HERO_SLIDES.map((slide, index) => (
          <KenBurnsSlide
            key={slide.src}
            slide={slide}
            isActive={index === activeIndex}
            reducedMotion={!!prefersReducedMotion}
            priority={index === 0}
          />
        ))}
        <div className="absolute inset-0 z-1 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#ee85d4] text-xs tracking-[0.4em] uppercase mb-6"
        >
          Houston Wedding Planner · Event Designer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="font-serif text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight max-w-4xl"
        >
          Personalizing Your <em className="italic text-[#ee85d4]">Party</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-6 text-white/75 text-base sm:text-lg max-w-xl leading-relaxed"
        >
          Full-service wedding planning and event design in Houston and
          destination weddings abroad. {COMPANY.motto}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/contact"
            className="px-8 py-3.5 bg-[#ee85d4] text-black text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#f5a8e8] transition-colors duration-200"
          >
            Book a Consultation
          </Link>
          <Link
            href="/gallery"
            className="px-8 py-3.5 border border-white/50 text-white text-xs tracking-[0.2em] uppercase hover:border-[#ee85d4] hover:text-[#ee85d4] transition-all duration-200"
          >
            View Gallery
          </Link>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-5">
        <div className="flex items-center gap-3">
          <div
            className="flex items-center gap-2"
            role="tablist"
            aria-label="Hero slides"
          >
            {HERO_SLIDES.map((slide, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={slide.src}
                  type="button"
                  role="tab"
                  aria-label={`Show slide ${index + 1} of ${HERO_SLIDES.length}`}
                  aria-selected={isActive}
                  onClick={() => goTo(index)}
                  className={cn(
                    'relative h-1.5 overflow-hidden rounded-full transition-all duration-500',
                    isActive
                      ? 'w-10 bg-white/25'
                      : 'w-1.5 bg-white/40 hover:bg-white/70',
                  )}
                >
                  {isActive && !paused && prefersReducedMotion !== true && (
                    <motion.span
                      key={activeIndex}
                      className="absolute inset-y-0 left-0 bg-[#ee85d4]"
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{
                        duration: SLIDE_DURATION_MS / 1000,
                        ease: 'linear',
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => setPaused((current) => !current)}
            aria-label={paused ? 'Play slideshow' : 'Pause slideshow'}
            className="flex h-7 w-7 items-center justify-center rounded-full border border-white/30 text-white/70 hover:border-[#ee85d4] hover:text-[#ee85d4] transition-colors duration-200"
          >
            {paused ? (
              <Play size={11} fill="currentColor" />
            ) : (
              <Pause size={11} />
            )}
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={22} className="text-white/50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function KenBurnsSlide({
  slide,
  isActive,
  reducedMotion,
  priority,
}: {
  slide: (typeof HERO_SLIDES)[number];
  isActive: boolean;
  reducedMotion: boolean;
  priority?: boolean;
}) {
  const controls = useAnimationControls();

  useEffect(() => {
    if (reducedMotion) {
      controls.set({ scale: 1.1, x: '0%', y: '0%' });
      return;
    }

    if (!isActive) return;

    controls.set(slide.from);
    void controls.start({
      ...slide.to,
      transition: { duration: KEN_BURNS_DURATION_S, ease: 'linear' },
    });
  }, [controls, isActive, reducedMotion, slide]);

  return (
    <motion.div
      className="absolute inset-0"
      initial={false}
      animate={{ opacity: isActive ? 1 : 0 }}
      transition={{ duration: FADE_DURATION_S, ease: 'easeInOut' }}
      aria-hidden={!isActive}
    >
      <motion.div
        className="absolute inset-0 will-change-transform"
        initial={slide.from}
        animate={controls}
      >
        <Image
          src={slide.src}
          alt={slide.alt}
          fill
          priority={priority}
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>
    </motion.div>
  );
}
