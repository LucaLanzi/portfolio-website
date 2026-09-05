import Link from "next/link";
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
import { Mail } from "lucide-react";
import { siteConfig } from "@/content/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-space-700/60 bg-space-black">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-star-white">
            {siteConfig.name}
          </p>
          <p className="mt-2 max-w-xs font-body text-sm text-star-dim">
            {siteConfig.tagline}
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <p className="font-mono text-xs uppercase tracking-widest text-star-dim">
            Sections
          </p>
          <nav className="flex flex-col gap-2">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-sm text-star-dim transition hover:text-nasa-red"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-3">
          <p className="font-mono text-xs uppercase tracking-widest text-star-dim">
            Connect
          </p>
          <div className="flex items-center gap-4">
            <Link
              href={`https://github.com/${siteConfig.githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-star-dim transition hover:text-nasa-red"
            >
              <FaGithub size={20} />
            </Link>
            <Link
              href={siteConfig.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-star-dim transition hover:text-nasa-red"
            >
              <FaLinkedin size={20} />
            </Link>
            <span
              title={`Discord: ${siteConfig.discordUsername}`}
              className="text-star-dim"
            >
              <FaDiscord size={20} />
            </span>
            <Link
              href={`mailto:${siteConfig.email}`}
              aria-label="Email"
              className="text-star-dim transition hover:text-nasa-red"
            >
              <Mail size={20} />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-space-700/60 px-6 py-4">
        <p className="mx-auto max-w-6xl font-mono text-xs text-star-dim">
          © {year} {siteConfig.name}. Built with Next.js.
        </p>
      </div>
    </footer>
  );
}
