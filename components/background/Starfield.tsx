"use client";

import { useEffect, useRef } from "react";
import { themeColors } from "@/lib/theme-colors";

type Star = {
  x: number;
  y: number;
  radius: number;
  baseAlpha: number;
  twinkleSpeed: number;
  twinklePhase: number;
  driftSpeed: number;
};

const LAYERS = [
  { count: 160, radius: [0.4, 0.9], drift: [1, 3], alpha: [0.25, 0.5] },
  { count: 120, radius: [0.7, 1.4], drift: [3, 6], alpha: [0.4, 0.7] },
  { count: 70, radius: [1.1, 2], drift: [6, 11], alpha: [0.6, 1] },
] as const;

function createStars(width: number, height: number): Star[] {
  const stars: Star[] = [];
  for (const layer of LAYERS) {
    for (let i = 0; i < layer.count; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius:
          layer.radius[0] + Math.random() * (layer.radius[1] - layer.radius[0]),
        baseAlpha:
          layer.alpha[0] + Math.random() * (layer.alpha[1] - layer.alpha[0]),
        twinkleSpeed: 0.4 + Math.random() * 0.8,
        twinklePhase: Math.random() * Math.PI * 2,
        driftSpeed:
          layer.drift[0] + Math.random() * (layer.drift[1] - layer.drift[0]),
      });
    }
  }
  return stars;
}

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    let stars: Star[] = [];
    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      if (!canvas || !ctx) return;
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      stars = createStars(width, height);
    }

    function drawStatic() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      for (const star of stars) {
        ctx.beginPath();
        ctx.fillStyle = hexToRgba(themeColors.starWhite, star.baseAlpha);
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    let rafId = 0;
    let running = false;

    function animate(time: number) {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      for (const star of stars) {
        star.y += star.driftSpeed * 0.006;
        if (star.y > height + 4) {
          star.y = -4;
          star.x = Math.random() * width;
        }
        const twinkle =
          0.5 + 0.5 * Math.sin(time * 0.001 * star.twinkleSpeed + star.twinklePhase);
        const alpha = star.baseAlpha * (0.6 + 0.4 * twinkle);
        ctx.beginPath();
        ctx.fillStyle = hexToRgba(themeColors.starWhite, alpha);
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      }
      rafId = requestAnimationFrame(animate);
    }

    function start() {
      if (running) return;
      running = true;
      if (reducedMotionQuery.matches) {
        drawStatic();
      } else {
        rafId = requestAnimationFrame(animate);
      }
    }

    function stop() {
      running = false;
      cancelAnimationFrame(rafId);
    }

    function handleVisibility() {
      if (document.hidden) {
        stop();
      } else {
        start();
      }
    }

    function handleMotionPreferenceChange() {
      stop();
      start();
    }

    resize();
    start();

    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", handleVisibility);
    reducedMotionQuery.addEventListener("change", handleMotionPreferenceChange);

    return () => {
      stop();
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibility);
      reducedMotionQuery.removeEventListener(
        "change",
        handleMotionPreferenceChange
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10"
    />
  );
}

function hexToRgba(hex: string, alpha: number): string {
  const value = hex.replace("#", "");
  const r = parseInt(value.substring(0, 2), 16);
  const g = parseInt(value.substring(2, 4), 16);
  const b = parseInt(value.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
