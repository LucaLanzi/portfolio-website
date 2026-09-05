"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { ImageCarousel } from "@/components/portfolio/ImageCarousel";
import { getYouTubeEmbedUrl } from "@/lib/youtube";
import { cn } from "@/lib/cn";
import type { Project } from "@/lib/types";

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const videoEmbedUrl = project.videoUrl ? getYouTubeEmbedUrl(project.videoUrl) : null;

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return createPortal(
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-space-black/90 backdrop-blur-sm p-4 sm:p-8"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.98 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className="relative my-4 w-full max-w-4xl overflow-hidden rounded-lg border border-space-500 bg-space-800 shadow-glow-blue"
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-3 top-3 z-10 rounded-full bg-space-black/70 p-2 text-star-white transition hover:bg-nasa-red"
          >
            <X size={18} />
          </button>

          <ImageCarousel
            images={project.images}
            alt={project.title}
            fit="contain"
            className="aspect-[4/3] sm:aspect-[16/9] bg-space-900"
          />

          <div className="flex flex-col gap-4 p-6 sm:p-8">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} tone="red">
                  {tag}
                </Badge>
              ))}
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-star-dim">
                {project.org}
              </p>
              <h3 className="mt-1 font-display text-2xl font-bold uppercase text-star-white">
                {project.title}
              </h3>
            </div>

            <div className="flex flex-col gap-3">
              {project.description.map((paragraph) => (
                <p key={paragraph} className="font-body text-sm leading-relaxed text-star-dim">
                  {paragraph}
                </p>
              ))}
            </div>

            {videoEmbedUrl ? (
              <div
                className={cn(
                  "mx-auto w-full overflow-hidden rounded-md border border-space-600",
                  project.videoAspect === "portrait" ? "max-w-xs aspect-[9/16]" : "aspect-video"
                )}
              >
                <iframe
                  src={videoEmbedUrl}
                  title={`${project.title} video`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
            ) : null}

            {project.repos.length > 0 ? (
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-star-dim">
                  Repositories
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.repos.map((repo) => (
                    <a
                      key={repo.url}
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-md border border-space-500 px-3 py-1.5 font-mono text-xs text-star-dim transition hover:border-nasa-blue hover:text-star-white"
                    >
                      <FaGithub size={12} /> {repo.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : null}

            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 self-start font-mono text-xs uppercase tracking-widest text-nasa-blue hover:text-nasa-red"
              >
                View Live <ExternalLink size={12} />
              </a>
            ) : null}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}
