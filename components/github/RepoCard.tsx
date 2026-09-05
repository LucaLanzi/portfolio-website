"use client";

import { useState } from "react";
import { ChevronDown, ExternalLink, Star, GitFork } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { RepoReadme } from "@/components/github/RepoReadme";
import type { RepoWithReadme } from "@/lib/github-types";
import { cn } from "@/lib/cn";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function RepoCard({ repo }: { repo: RepoWithReadme }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card hoverGlow="blue" className="flex flex-col gap-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-star-dim">
            {repo.language ?? "Repository"} · Updated {formatDate(repo.pushedAt)}
          </p>
          <h3 className="mt-1 font-display text-lg font-bold text-star-white">
            {repo.name}
          </h3>
        </div>
        <a
          href={repo.htmlUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${repo.name} on GitHub`}
          className="shrink-0 text-star-dim transition hover:text-nasa-red"
        >
          <ExternalLink size={18} />
        </a>
      </div>

      {repo.description ? (
        <p className="font-body text-sm text-star-dim">{repo.description}</p>
      ) : null}

      {repo.topics.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {repo.topics.slice(0, 5).map((topic) => (
            <Badge key={topic} tone="blue">
              {topic}
            </Badge>
          ))}
        </div>
      ) : null}

      <div className="flex items-center gap-4 font-mono text-xs text-star-dim">
        <span className="flex items-center gap-1">
          <Star size={14} /> {repo.stargazersCount}
        </span>
        <span className="flex items-center gap-1">
          <GitFork size={14} /> {repo.forksCount}
        </span>
      </div>

      {repo.readme ? (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="flex items-center justify-center gap-2 rounded-md border border-space-500 py-2 font-mono text-xs uppercase tracking-widest text-star-dim transition hover:border-nasa-red hover:text-star-white"
        >
          {expanded ? "Hide README" : "View README"}
          <ChevronDown
            size={14}
            className={cn("transition-transform", expanded && "rotate-180")}
          />
        </button>
      ) : null}

      {expanded && repo.readme ? (
        <div className="border-t border-space-600 pt-4">
          <RepoReadme
            markdown={repo.readme}
            owner={repo.owner}
            repo={repo.name}
            defaultBranch={repo.defaultBranch}
          />
        </div>
      ) : null}
    </Card>
  );
}
