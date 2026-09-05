import { FaLinkedin } from "react-icons/fa";
import { Card } from "@/components/ui/Card";
import { siteConfig } from "@/content/site-config";

export function LinkedInCard() {
  return (
    <Card hoverGlow="blue" className="flex flex-col items-start gap-4">
      <FaLinkedin size={32} className="text-nasa-blue" />
      <div>
        <p className="font-mono text-xs uppercase tracking-widest text-star-dim">
          Network
        </p>
        <h3 className="mt-1 font-display text-lg font-bold uppercase text-star-white">
          LinkedIn
        </h3>
      </div>
      <p className="font-body text-sm text-star-dim">
        Connect with me for internships, collaborations, and career updates.
      </p>
      <a
        href={siteConfig.linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex items-center justify-center rounded-md border border-nasa-blue px-4 py-2 font-body text-xs font-semibold uppercase tracking-wide text-star-white transition hover:bg-nasa-blue/20 hover:shadow-glow-blue"
      >
        Connect on LinkedIn
      </a>
    </Card>
  );
}
