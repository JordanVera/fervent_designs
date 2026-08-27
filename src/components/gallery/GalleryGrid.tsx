"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import {
  GALLERY_IMAGES,
  GALLERY_CATEGORIES,
  WEDDING_STYLES,
  type GalleryCategory,
  type WeddingStyle,
} from "@/lib/data";
import { cn } from "@/lib/utils";

const PAGE_SIZE = 36;

type GalleryGridProps = {
  initialCategory?: GalleryCategory;
};

export default function GalleryGrid({
  initialCategory = "all",
}: GalleryGridProps) {
  const [category, setCategory] = useState<GalleryCategory>(initialCategory);
  const [style, setStyle] = useState<WeddingStyle>("all");
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [selected, setSelected] = useState<number | null>(null);

  const filtered = useMemo(() => {
    const byCategory =
      category === "all"
        ? GALLERY_IMAGES
        : GALLERY_IMAGES.filter((img) => img.category === category);

    if (category !== "wedding" || style === "all") return byCategory;

    return byCategory.filter(
      (img) => "style" in img && img.style === style,
    );
  }, [category, style]);

  const shown = filtered.slice(0, visible);
  const hasMore = visible < filtered.length;
  const lightbox = filtered;

  const setFilter = (next: GalleryCategory) => {
    setCategory(next);
    setStyle("all");
    setSelected(null);
    setVisible(PAGE_SIZE);
  };

  const setWeddingStyle = (next: WeddingStyle) => {
    setStyle(next);
    setSelected(null);
    setVisible(PAGE_SIZE);
  };

  const openAt = (index: number) => setSelected(index);
  const close = () => setSelected(null);
  const prev = () =>
    setSelected((s) =>
      s !== null ? (s - 1 + lightbox.length) % lightbox.length : 0,
    );
  const next = () =>
    setSelected((s) => (s !== null ? (s + 1) % lightbox.length : 0));

  const labelFor = (img: (typeof GALLERY_IMAGES)[number]) => {
    if ("style" in img && img.style) {
      const match = WEDDING_STYLES.find((s) => s.id === img.style);
      return match?.label ?? img.category;
    }
    return img.category;
  };

  return (
    <>
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {GALLERY_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setFilter(cat.id)}
            className={cn(
              "px-4 py-2 text-[10px] tracking-[0.2em] uppercase transition-all duration-200 border",
              category === cat.id
                ? "bg-[#ee85d4] text-black border-[#ee85d4]"
                : "bg-transparent text-foreground/60 border-border hover:border-[#ee85d4]/50 hover:text-[#ee85d4]",
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {category === "wedding" && (
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {WEDDING_STYLES.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setWeddingStyle(item.id)}
              className={cn(
                "px-3 py-1.5 text-[10px] tracking-[0.16em] uppercase transition-all duration-200 border",
                style === item.id
                  ? "bg-foreground text-background border-foreground"
                  : "bg-transparent text-foreground/50 border-border hover:border-foreground/40 hover:text-foreground",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

      {category !== "wedding" && <div className="mb-8" />}

      <p className="text-center text-foreground/40 text-xs tracking-[0.12em] uppercase mb-8">
        {filtered.length} photograph{filtered.length === 1 ? "" : "s"}
      </p>

      <div className="columns-2 md:columns-3 gap-3 space-y-3">
        {shown.map((img, i) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: Math.min(i % PAGE_SIZE, 12) * 0.03 }}
            className="relative group cursor-pointer break-inside-avoid overflow-hidden"
            onClick={() => openAt(i)}
          >
            <div className="relative overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={450}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <ZoomIn
                  size={24}
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div className="absolute bottom-0 inset-x-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-white text-[10px] tracking-[0.2em] uppercase bg-black/70 px-3 py-1.5">
                  {labelFor(img)}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {hasMore && (
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => setVisible((count) => count + PAGE_SIZE)}
            className="inline-flex px-8 py-3.5 border border-[#ee85d4] text-[#ee85d4] text-xs tracking-[0.2em] uppercase hover:bg-[#ee85d4] hover:text-black transition-colors duration-200"
          >
            Load more photos
          </button>
        </div>
      )}

      <Dialog.Root open={selected !== null} onOpenChange={(o) => !o && close()}>
        <AnimatePresence>
          {selected !== null && (
            <Dialog.Portal forceMount>
              <Dialog.Overlay asChild>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm"
                />
              </Dialog.Overlay>

              <Dialog.Content asChild>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="fixed inset-0 z-50 flex items-center justify-center p-4"
                >
                  <Dialog.Title className="sr-only">
                    {lightbox[selected].alt}
                  </Dialog.Title>

                  <Dialog.Close className="absolute top-5 right-5 text-white/60 hover:text-white transition-colors z-10">
                    <X size={22} />
                  </Dialog.Close>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      prev();
                    }}
                    className="absolute left-4 md:left-8 text-white/60 hover:text-white transition-colors z-10 p-2"
                  >
                    <ChevronLeft size={28} />
                  </button>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selected}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                      className="relative max-w-4xl w-full max-h-[80vh]"
                    >
                      <Image
                        src={lightbox[selected].src}
                        alt={lightbox[selected].alt}
                        width={1200}
                        height={900}
                        className="w-full h-auto object-contain max-h-[80vh]"
                        priority
                      />
                      <div className="mt-4 text-center">
                        <p className="text-white/70 text-sm">
                          {lightbox[selected].alt}
                        </p>
                        <p className="text-white/50 text-xs tracking-[0.2em] uppercase mt-2">
                          {labelFor(lightbox[selected])}
                        </p>
                        <p className="text-white/30 text-xs mt-1">
                          {selected + 1} / {lightbox.length}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      next();
                    }}
                    className="absolute right-4 md:right-8 text-white/60 hover:text-white transition-colors z-10 p-2"
                  >
                    <ChevronRight size={28} />
                  </button>
                </motion.div>
              </Dialog.Content>
            </Dialog.Portal>
          )}
        </AnimatePresence>
      </Dialog.Root>
    </>
  );
}
