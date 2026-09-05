import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 font-body text-sm font-semibold uppercase tracking-wide transition duration-200";

const variants = {
  primary: "bg-nasa-red text-star-white shadow-glow-red hover:brightness-110",
  secondary:
    "border border-nasa-blue text-star-white hover:bg-nasa-blue/20 hover:shadow-glow-blue",
  ghost: "text-star-dim hover:text-star-white",
} as const;

type Variant = keyof typeof variants;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

export function Button({ variant = "primary", className, ...props }: ButtonProps) {
  return (
    <button className={cn(base, variants[variant], className)} {...props} />
  );
}

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  href: string;
  external?: boolean;
};

export function LinkButton({
  variant = "primary",
  className,
  href,
  external,
  ...props
}: LinkButtonProps) {
  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Link
      href={href}
      className={cn(base, variants[variant], className)}
      {...externalProps}
      {...props}
    />
  );
}
