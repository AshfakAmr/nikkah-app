import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export type LoadingStateProps = {
  label?: string;
  fullScreen?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizeClasses = {
  sm: "size-5",
  md: "size-8",
  lg: "size-12",
} as const;

export function LoadingState({
  label = "Loading…",
  fullScreen = false,
  className,
  size = "md",
}: LoadingStateProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy="true"
      className={cn(
        "flex flex-col items-center justify-center gap-3 text-text-secondary",
        fullScreen && "min-h-[50vh]",
        className,
      )}
    >
      <Loader2
        className={cn("animate-spin text-primary", sizeClasses[size])}
        aria-hidden="true"
      />
      <p className="text-sm">{label}</p>
    </div>
  );
}
