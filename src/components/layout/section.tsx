import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/container";

const backgroundVariants = {
  default: "bg-surface-cream",
  white: "bg-surface-white",
  cream: "bg-surface-cream-2",
  beige: "bg-surface-beige",
  "beige-2": "bg-surface-beige-2",
  gray: "bg-surface-gray",
  dark: "bg-surface-dark text-text-on-dark",
} as const;

const spacingVariants = {
  default: "py-[var(--section-y)]",
  lg: "py-[var(--section-y-lg)]",
  sm: "py-12 md:py-16",
  none: "",
} as const;

export type SectionBackground = keyof typeof backgroundVariants;
export type SectionSpacing = keyof typeof spacingVariants;

export type SectionProps = HTMLAttributes<HTMLElement> & {
  as?: "section" | "div";
  background?: SectionBackground;
  spacing?: SectionSpacing;
  containerSize?: "default" | "narrow" | "wide";
  contained?: boolean;
};

export function Section({
  as: Component = "section",
  background = "default",
  spacing = "default",
  containerSize = "default",
  contained = true,
  className,
  children,
  ...props
}: SectionProps) {
  const content = contained ? (
    <Container size={containerSize}>{children}</Container>
  ) : (
    children
  );

  return (
    <Component
      className={cn(
        backgroundVariants[background],
        spacingVariants[spacing],
        className,
      )}
      {...props}
    >
      {content}
    </Component>
  );
}
