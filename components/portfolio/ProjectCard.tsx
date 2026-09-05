"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { ImageCarousel } from "@/components/portfolio/ImageCarousel";
import { ProjectModal } from "@/components/portfolio/ProjectModal";
import type { Project } from "@/lib/types";

export function ProjectCard({ project }: { project: Project }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.015 }}
        transition={{ duration: 0.2 }}
        className="overflow-hidden rounded-lg border border-space-500 bg-space-800/60 backdrop-blur-sm transition duration-200 hover:border-nasa-red hover:shadow-glow-red"
      >
        <ImageCarousel images={project.images} alt={project.title} />

        <div className="flex flex-col gap-3 p-6">
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
            <h3 className="mt-1 font-display text-lg font-bold uppercase text-star-white">
              {project.title}
            </h3>
          </div>
          <p className="font-body text-sm text-star-dim">{project.summary}</p>

          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="mt-1 flex items-center gap-2 self-start font-mono text-xs uppercase tracking-widest text-nasa-blue transition hover:text-nasa-red"
          >
            Read more
            <ChevronRight size={14} />
          </button>
        </div>
      </motion.div>

      {modalOpen ? (
        <ProjectModal project={project} onClose={() => setModalOpen(false)} />
      ) : null}
    </>
  );
}
