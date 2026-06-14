import { type ReactNode } from "react";
import { Inbox } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button, type ButtonProps } from "@/components/ui/button";

export type EmptyStateProps = {
  icon?: ReactNode;
  title: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
  actionVariant?: ButtonProps["variant"];
  className?: string;
};

export function EmptyState({
  icon,
  title,
  description,
  actionLabel,
  onAction,
  actionVariant = "primary",
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-4 px-6 py-16 text-center",
        className,
      )}
    >
      <div className="flex size-14 items-center justify-center rounded-full bg-surface-gray text-primary">
        {icon ?? <Inbox className="size-6" aria-hidden="true" />}
      </div>
      <div className="flex max-w-md flex-col gap-2">
        <h3 className="font-serif text-xl text-text-primary">{title}</h3>
        {description ? (
          <p className="text-sm text-text-secondary">{description}</p>
        ) : null}
      </div>
      {actionLabel && onAction ? (
        <Button variant={actionVariant} onClick={onAction}>
          {actionLabel}
        </Button>
      ) : null}
    </div>
  );
}
