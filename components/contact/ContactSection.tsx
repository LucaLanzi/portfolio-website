import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { LinkedInCard } from "@/components/linkedin/LinkedInCard";
import { DiscordCard } from "@/components/discord/DiscordCard";
import { ContactCard } from "@/components/contact/ContactCard";

export function ContactSection() {
  return (
    <SectionContainer id="contact">
      <Reveal>
        <SectionHeading eyebrow="Mission Control" title="Get In Touch" />
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Reveal delay={0}>
          <LinkedInCard />
        </Reveal>
        <Reveal delay={0.1}>
          <DiscordCard />
        </Reveal>
        <Reveal delay={0.2}>
          <ContactCard />
        </Reveal>
      </div>
    </SectionContainer>
  );
}
