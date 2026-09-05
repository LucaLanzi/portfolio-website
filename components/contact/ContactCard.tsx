"use client";

import { useState } from "react";
import { Mail, Check, Copy } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { siteConfig } from "@/content/site-config";

export function ContactCard() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard API unavailable — no-op, user can select the text manually
    }
  }

  return (
    <Card hoverGlow="red" className="flex flex-col items-start gap-4">
      <Mail size={32} className="text-nasa-red" />
      <div>
        <p className="font-mono text-xs uppercase tracking-widest text-star-dim">
          Direct Line
        </p>
        <h3 className="mt-1 font-display text-lg font-bold uppercase text-star-white">
          Email
        </h3>
      </div>
      <p className="font-body text-sm text-star-dim">
        The fastest way to reach me about opportunities or questions.
      </p>
      <div className="mt-auto flex flex-wrap gap-3">
        <a
          href={`mailto:${siteConfig.email}`}
          className="inline-flex items-center justify-center rounded-md bg-nasa-red px-4 py-2 font-body text-xs font-semibold uppercase tracking-wide text-star-white shadow-glow-red transition hover:brightness-110"
        >
          Send an Email
        </a>
        <button
          type="button"
          onClick={handleCopy}
          aria-label="Copy email address"
          className="inline-flex items-center justify-center gap-2 rounded-md border border-space-500 px-4 py-2 font-mono text-xs text-star-dim transition hover:text-star-white"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
          {siteConfig.email}
        </button>
      </div>
    </Card>
  );
}
