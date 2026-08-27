'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { VIDEO_TESTIMONIALS } from '@/lib/data';

export default function VideoTestimonials() {
  const [playingId, setPlayingId] = useState<number | null>(null);

  return (
    <section className="bg-[#0e0c08] px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-[10px] uppercase tracking-[0.35em] text-[#ee85d4]"
          >
            Hear From Our Couples
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl text-white sm:text-4xl"
          >
            Video Testimonials
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/55"
          >
            Real clients, in their own words — the joy, the details, and the day
            Fervent Designs brought to life.
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {VIDEO_TESTIMONIALS.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              <VideoCard
                video={video}
                isActive={playingId === video.id}
                onPlay={() => setPlayingId(video.id)}
                onStop={() =>
                  setPlayingId((current) =>
                    current === video.id ? null : current,
                  )
                }
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoCard({
  video,
  isActive,
  onPlay,
  onStop,
}: {
  video: (typeof VIDEO_TESTIMONIALS)[number];
  isActive: boolean;
  onPlay: () => void;
  onStop: () => void;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (isActive) return;
    const el = ref.current;
    if (!el || el.paused) return;
    el.pause();
  }, [isActive]);

  function handlePlayClick() {
    void ref.current?.play();
  }

  return (
    <figure className="flex flex-col gap-4">
      <div className="relative aspect-video overflow-hidden bg-black">
        <video
          ref={ref}
          src={video.src}
          poster={video.poster}
          playsInline
          preload="metadata"
          controls={playing}
          className="h-full w-full object-cover"
          onPlay={() => {
            setPlaying(true);
            onPlay();
          }}
          onPause={() => {
            setPlaying(false);
            onStop();
          }}
          onEnded={() => {
            setPlaying(false);
            onStop();
          }}
        >
          Your browser does not support the video tag.
        </video>

        {playing ? null : (
          <button
            type="button"
            onClick={handlePlayClick}
            aria-label={`Play video: ${video.title}`}
            className="absolute inset-0 flex items-center justify-center bg-black/25 transition-colors hover:bg-black/40"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#ee85d4] text-black shadow-lg shadow-black/30 transition-transform duration-200 hover:scale-105">
              <Play size={22} fill="currentColor" className="ml-0.5" />
            </span>
          </button>
        )}
      </div>
      <figcaption>
        <p className="font-serif text-xl text-white">{video.title}</p>
        <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/40">
          {video.caption}
        </p>
      </figcaption>
    </figure>
  );
}
