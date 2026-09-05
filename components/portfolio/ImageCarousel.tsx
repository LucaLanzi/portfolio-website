"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";

type ImageCarouselProps = {
  images: string[];
  alt: string;
  /** "cover" crops to fill (compact card thumbnails); "contain" letterboxes so the full image is always visible (detail view). */
  fit?: "cover" | "contain";
  /** Tailwind classes for the outer frame — controls aspect ratio/height. */
  className?: string;
  initialIndex?: number;
};

const SWIPE_THRESHOLD = 60;

export function ImageCarousel({
  images,
  alt,
  fit = "cover",
  className = "aspect-[8/5]",
  initialIndex = 0,
}: ImageCarouselProps) {
  const [index, setIndex] = useState(initialIndex);
  const hasMultiple = images.length > 1;

  function go(delta: number) {
    setIndex((i) => (i + delta + images.length) % images.length);
  }

  function handleDragEnd(_: unknown, info: PanInfo) {
    if (info.offset.x < -SWIPE_THRESHOLD) go(1);
    else if (info.offset.x > SWIPE_THRESHOLD) go(-1);
  }

  return (
    <div className={cn("group relative w-full overflow-hidden", className)}>
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          drag={hasMultiple ? "x" : false}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragEnd={handleDragEnd}
        >
          <Image
            src={images[index]}
            alt={`${alt} — image ${index + 1} of ${images.length}`}
            fill
            sizes={fit === "contain" ? "(max-width: 1024px) 100vw, 900px" : "(max-width: 768px) 100vw, 50vw"}
            className={fit === "contain" ? "object-contain bg-space-900" : "object-cover"}
            draggable={false}
          />
        </motion.div>
      </AnimatePresence>

      {hasMultiple ? (
        <>
          <button
            type="button"
            aria-label="Previous image"
            onClick={() => go(-1)}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-space-black/60 p-1.5 text-star-white opacity-0 transition group-hover:opacity-100"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={() => go(1)}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-space-black/60 p-1.5 text-star-white opacity-0 transition group-hover:opacity-100"
          >
            <ChevronRight size={18} />
          </button>

          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((image, i) => (
              <button
                key={image}
                type="button"
                aria-label={`Go to image ${i + 1}`}
                onClick={() => setIndex(i)}
                className={cn(
                  "h-1.5 w-1.5 rounded-full transition",
                  i === index ? "bg-nasa-red" : "bg-star-white/40"
                )}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
