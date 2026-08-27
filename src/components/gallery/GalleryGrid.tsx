"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import {
  GALLERY_IMAGES,
  GALLERY_CATEGORIES,
  type GalleryCategory,
} from "@/lib/data";
import { cn } from "@/lib/utils";

type GalleryGridProps = {
  initialCategory?: GalleryCategory;
};

export default function GalleryGrid({
  initialCategory = "all",
}: GalleryGridProps) {
  const [category, setCategory] = useState<GalleryCategory>(initialCategory);
  const [selected, setSelected] = useState<number | null>(null);

  const filtered =
    category === "all"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === category);

  const openAt = (index: number) => setSelected(index);
  const close = () => setSelected(null);
  const prev = () =>
    setSelected((s) =>
      s !== null ? (s - 1 + filtered.length) % filtered.length : 0,
    );
  const next = () =>
    setSelected((s) => (s !== null ? (s + 1) % filtered.length : 0));

  const categoryLabel = (cat: string) =>
    GALLERY_CATEGORIES.find((c) => c.id === cat)?.label ?? cat;

  return (
    <>
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {GALLERY_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => {
              setCategory(cat.id);
              setSelected(null);
            }}
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

      <p className="text-center text-foreground/40 text-xs tracking-[0.12em] uppercase mb-8">
        {filtered.length} photograph{filtered.length === 1 ? "" : "s"}
      </p>

      <div className="columns-2 md:columns-3 gap-3 space-y-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((img, i) => (
            <motion.div
              key={img.id}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
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
                    {categoryLabel(img.category)}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

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
                    {filtered[selected].alt}
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
                        src={filtered[selected].src}
                        alt={filtered[selected].alt}
                        width={1200}
                        height={900}
                        className="w-full h-auto object-contain max-h-[80vh]"
                        priority
                      />
                      <div className="mt-4 text-center">
                        <p className="text-white/50 text-xs tracking-[0.2em] uppercase">
                          {categoryLabel(filtered[selected].category)}
                        </p>
                        <p className="text-white/30 text-xs mt-1">
                          {selected + 1} / {filtered.length}
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
