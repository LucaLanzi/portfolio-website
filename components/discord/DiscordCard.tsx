"use client";

import { useState } from "react";
import { FaDiscord } from "react-icons/fa";
import { Check, Copy } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { siteConfig } from "@/content/site-config";

export function DiscordCard() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(siteConfig.discordUsername);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard API unavailable — no-op, user can select the text manually
    }
  }

  return (
    <Card hoverGlow="blue" className="flex flex-col items-start gap-4">
      <FaDiscord size={32} className="text-nasa-blue" />
      <div>
        <p className="font-mono text-xs uppercase tracking-widest text-star-dim">
          Chat
        </p>
        <h3 className="mt-1 font-display text-lg font-bold uppercase text-star-white">
          Discord
        </h3>
      </div>
      <p className="font-body text-sm text-star-dim">
        Reach out directly on Discord.
      </p>
      <button
        type="button"
        onClick={handleCopy}
        className="mt-auto inline-flex items-center justify-center gap-2 rounded-md border border-nasa-blue px-4 py-2 font-mono text-xs font-semibold text-star-white transition hover:bg-nasa-blue/20 hover:shadow-glow-blue"
      >
        {copied ? <Check size={14} /> : <Copy size={14} />}
        {siteConfig.discordUsername}
      </button>
    </Card>
  );
}
