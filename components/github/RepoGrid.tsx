import { ExternalLink } from "lucide-react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { RepoCard } from "@/components/github/RepoCard";
import { getFeaturedRepos } from "@/lib/github";
import { featuredRepos } from "@/content/featured-repos";
import { siteConfig } from "@/content/site-config";

export async function RepoGrid() {
  const repos = await getFeaturedRepos(featuredRepos);

  return (
    <SectionContainer id="github">
      <Reveal>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Live Feed"
            title="GitHub Repositories"
            description="Expand any repo to read its README without leaving the page."
            align="left"
          />
          <a
            href={`https://github.com/${siteConfig.githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-10 inline-flex items-center gap-2 rounded-md border border-nasa-blue px-5 py-2.5 font-body text-xs font-semibold uppercase tracking-wide text-star-white transition hover:bg-nasa-blue/20 hover:shadow-glow-blue"
          >
            View Full Profile <ExternalLink size={14} />
          </a>
        </div>
      </Reveal>

      {repos.length === 0 ? (
        <p className="font-body text-sm text-star-dim">
          No repositories could be loaded right now — check the entries in{" "}
          <code className="rounded bg-space-700 px-1.5 py-0.5 font-mono text-xs">
            content/featured-repos.ts
          </code>{" "}
          and the GitHub API rate limit.
        </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {repos.map((repo, i) => (
            <Reveal key={repo.id} delay={Math.min(i * 0.05, 0.3)}>
              <RepoCard repo={repo} />
            </Reveal>
          ))}
        </div>
      )}
    </SectionContainer>
  );
}
