import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { projects } from "@/content/projects";

export function PortfolioGrid() {
  return (
    <SectionContainer id="portfolio">
      <Reveal>
        <SectionHeading
          eyebrow="Featured Work"
          title="Portfolio"
          description="Hand-picked projects with more detail than a repo README can give — including non-code EE work."
        />
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={Math.min(i * 0.08, 0.3)}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}
