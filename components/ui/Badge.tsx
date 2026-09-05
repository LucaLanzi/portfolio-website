import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: "blue" | "red" | "neutral";
};

const tones = {
  blue: "border-nasa-blue/60 text-star-white bg-nasa-blue/15",
  red: "border-nasa-red/60 text-star-white bg-nasa-red/15",
  neutral: "border-space-500 text-star-dim bg-space-700/60",
} as const;

export function Badge({ tone = "neutral", className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 font-mono text-xs uppercase tracking-wider",
        tones[tone],
        className
      )}
      {...props}
    />
  );
}
