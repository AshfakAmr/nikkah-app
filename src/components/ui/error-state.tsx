import { AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button, type ButtonProps } from "@/components/ui/button";

export type ErrorStateProps = {
  title?: string;
  message: string;
  retryLabel?: string;
  onRetry?: () => void;
  actionVariant?: ButtonProps["variant"];
  className?: string;
};

export function ErrorState({
  title = "Something went wrong",
  message,
  retryLabel = "Try again",
  onRetry,
  actionVariant = "outline",
  className,
}: ErrorStateProps) {
  return (
    <div
      role="alert"
      className={cn(
        "flex flex-col items-center justify-center gap-4 px-6 py-16 text-center",
        className,
      )}
    >
      <div className="flex size-14 items-center justify-center rounded-full bg-error/10 text-error">
        <AlertCircle className="size-6" aria-hidden="true" />
      </div>
      <div className="flex max-w-md flex-col gap-2">
        <h3 className="font-serif text-xl text-text-primary">{title}</h3>
        <p className="text-sm text-text-secondary">{message}</p>
      </div>
      {onRetry ? (
        <Button variant={actionVariant} onClick={onRetry}>
          {retryLabel}
        </Button>
      ) : null}
    </div>
  );
}
