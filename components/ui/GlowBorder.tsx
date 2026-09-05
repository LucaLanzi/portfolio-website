import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type GlowBorderProps = {
  children: ReactNode;
  tone?: "blue" | "red";
  className?: string;
};

/** Wraps content in a soft gradient-glow frame — used sparingly for featured cards. */
export function GlowBorder({ children, tone = "blue", className }: GlowBorderProps) {
  return (
    <div
      className={cn(
        "relative rounded-lg p-px",
        tone === "blue"
          ? "bg-gradient-to-br from-nasa-blue/70 via-space-500/40 to-transparent"
          : "bg-gradient-to-br from-nasa-red/70 via-space-500/40 to-transparent",
        className
      )}
    >
      <div className="rounded-lg bg-space-900">{children}</div>
    </div>
  );
}
