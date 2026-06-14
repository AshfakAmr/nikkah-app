import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const badgeVariants = {
  default: "bg-primary text-text-on-dark",
  secondary: "bg-secondary text-text-on-dark",
  premium: "bg-premium text-text-on-dark",
  gold: "bg-badge-gold text-badge-gold-text",
  outline: "border border-primary text-primary bg-transparent",
  muted: "bg-surface-gray text-text-secondary",
} as const;

export type BadgeVariant = keyof typeof badgeVariants;

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
};

export function Badge({
  className,
  variant = "default",
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2 py-0.5 text-xs font-semibold uppercase tracking-wide",
        badgeVariants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
