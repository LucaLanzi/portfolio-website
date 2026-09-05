import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionContainerProps = {
  id: string;
  children: ReactNode;
  className?: string;
};

export function SectionContainer({ id, children, className }: SectionContainerProps) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-space-700/60 py-20">
      <div className={cn("mx-auto w-full max-w-6xl px-6", className)}>{children}</div>
    </section>
  );
}
