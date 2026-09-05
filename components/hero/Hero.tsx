"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { siteConfig } from "@/content/site-config";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden px-6 text-center"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero/nasa-predock.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-space-black/40 via-space-black/70 to-space-black" />
      </div>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-mono text-xs uppercase tracking-[0.35em] text-nasa-red"
      >
        {siteConfig.school}
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="mt-4 font-display text-5xl font-extrabold uppercase tracking-wide text-star-white sm:text-7xl"
      >
        {siteConfig.name}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-6 max-w-2xl font-body text-lg text-star-dim"
      >
        {siteConfig.role} building hardware, embedded systems, and projects
        worth documenting.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        <a
          href="#portfolio"
          className="inline-flex items-center justify-center rounded-md bg-nasa-red px-6 py-3 font-body text-sm font-semibold uppercase tracking-wide text-star-white shadow-glow-red transition hover:brightness-110"
        >
          View Portfolio
        </a>
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-md border border-nasa-blue px-6 py-3 font-body text-sm font-semibold uppercase tracking-wide text-star-white transition hover:bg-nasa-blue/20 hover:shadow-glow-blue"
        >
          Get In Touch
        </a>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-10 text-star-dim transition hover:text-star-white"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="block"
        >
          <ChevronDown size={28} />
        </motion.span>
      </motion.a>
    </section>
  );
}
