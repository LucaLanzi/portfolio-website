import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-10 max-w-3xl", align === "center" && "mx-auto text-center")}>
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-nasa-red">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-wide text-star-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 font-body text-star-dim">{description}</p>
      ) : null}
    </div>
  );
}
