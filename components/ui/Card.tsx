import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  hoverGlow?: "blue" | "red" | "none";
};

export function Card({ className, hoverGlow = "blue", children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-space-500 bg-space-800/60 p-6 backdrop-blur-sm transition duration-200",
        hoverGlow === "blue" && "hover:border-nasa-blue hover:shadow-glow-blue",
        hoverGlow === "red" && "hover:border-nasa-red hover:shadow-glow-red",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
