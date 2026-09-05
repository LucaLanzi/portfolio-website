import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SkillGroupList } from "@/components/about/SkillBadge";
import { siteConfig } from "@/content/site-config";

export function About() {
  return (
    <SectionContainer id="about">
      <Reveal>
        <SectionHeading eyebrow="Mission Profile" title="About Me" />
      </Reveal>

      <div className="grid gap-12 md:grid-cols-2">
        <Reveal delay={0.1}>
          <div className="flex flex-col gap-4">
            {siteConfig.bio.map((paragraph) => (
              <p key={paragraph} className="font-body text-star-dim">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <SkillGroupList groups={siteConfig.skills} />
        </Reveal>
      </div>
    </SectionContainer>
  );
}
