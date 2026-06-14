import { cn } from "@/lib/utils";

type PlaceholderImageProps = {
  label: string;
  variant?: "profile" | "couple";
  className?: string;
};

const variantStyles = {
  profile: "from-primary/20 via-secondary/10 to-primary-light/30",
  couple: "from-secondary/20 via-primary/15 to-surface-beige-2",
} as const;

export function PlaceholderImage({
  label,
  variant = "profile",
  className,
}: PlaceholderImageProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "flex items-center justify-center bg-linear-to-br font-serif text-3xl font-semibold text-primary/40",
        variantStyles[variant],
        className,
      )}
    >
      {label}
    </div>
  );
}
