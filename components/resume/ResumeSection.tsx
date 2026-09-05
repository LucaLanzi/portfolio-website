import { Download, ExternalLink } from "lucide-react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/content/site-config";

export function ResumeSection() {
  return (
    <SectionContainer id="resume">
      <Reveal>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="Flight Record" title="Resume" align="left" />
          <div className="mb-10 flex gap-3">
            <a
              href={siteConfig.resumePath}
              download
              className="inline-flex items-center gap-2 rounded-md bg-nasa-red px-5 py-2.5 font-body text-xs font-semibold uppercase tracking-wide text-star-white shadow-glow-red transition hover:brightness-110"
            >
              <Download size={14} /> Download
            </a>
            <a
              href={siteConfig.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-nasa-blue px-5 py-2.5 font-body text-xs font-semibold uppercase tracking-wide text-star-white transition hover:bg-nasa-blue/20 hover:shadow-glow-blue"
            >
              <ExternalLink size={14} /> Open in New Tab
            </a>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="overflow-hidden rounded-lg border border-space-500 bg-space-800/60">
          <iframe
            src={siteConfig.resumePath}
            title={`${siteConfig.name} — Resume`}
            className="h-[80vh] w-full"
          />
        </div>
      </Reveal>
    </SectionContainer>
  );
}
