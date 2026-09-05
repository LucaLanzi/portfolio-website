"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import type { GalleryImage } from "@/lib/types";

export function Gallery({ images }: { images: GalleryImage[] }) {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {images.map((image, i) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setIndex(i)}
            className="group relative aspect-square overflow-hidden rounded-lg border border-space-500 transition hover:border-nasa-red hover:shadow-glow-red"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 50vw, 33vw"
              className="object-cover transition duration-300 group-hover:scale-105"
            />
            {image.caption ? (
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-space-black/90 to-transparent px-3 pb-2 pt-6">
                <p className="truncate text-left font-mono text-xs text-star-white">
                  {image.caption}
                </p>
              </div>
            ) : null}
          </button>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={images.map((image) => ({
          src: image.src,
          alt: image.alt,
          description: image.caption,
        }))}
        styles={{ container: { backgroundColor: "rgba(10, 14, 23, 0.95)" } }}
      />
    </>
  );
}
