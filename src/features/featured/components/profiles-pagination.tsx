"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ProfilesPaginationProps = {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

function getPageNumbers(page: number, totalPages: number) {
  if (totalPages <= 5) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  if (page <= 3) {
    return [1, 2, 3, "ellipsis", totalPages] as const;
  }

  if (page >= totalPages - 2) {
    return [1, "ellipsis", totalPages - 2, totalPages - 1, totalPages] as const;
  }

  return [1, "ellipsis", page, "ellipsis", totalPages] as const;
}

export function ProfilesPagination({
  page,
  totalPages,
  onPageChange,
}: ProfilesPaginationProps) {
  const pages = getPageNumbers(page, totalPages);

  return (
    <nav aria-label="Profile results pagination" className="flex justify-center">
      <ul className="flex items-center gap-2">
        <li>
          <button
            type="button"
            aria-label="Previous page"
            disabled={page <= 1}
            onClick={() => onPageChange(page - 1)}
            className={cn(
              "flex size-10 items-center justify-center rounded-full border border-border bg-surface-white text-text-secondary",
              "transition-colors hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-40",
            )}
          >
            <ChevronLeft className="size-4" />
          </button>
        </li>

        {pages.map((item, index) =>
          item === "ellipsis" ? (
            <li key={`ellipsis-${index}`} className="px-1 text-text-muted" aria-hidden="true">
              …
            </li>
          ) : (
            <li key={item}>
              <button
                type="button"
                aria-label={`Page ${item}`}
                aria-current={page === item ? "page" : undefined}
                onClick={() => onPageChange(item)}
                className={cn(
                  "flex size-10 items-center justify-center rounded-full border text-sm font-medium transition-colors",
                  page === item
                    ? "border-primary bg-primary text-text-on-dark"
                    : "border-border bg-surface-white text-text-secondary hover:border-primary hover:text-primary",
                )}
              >
                {item}
              </button>
            </li>
          ),
        )}

        <li>
          <button
            type="button"
            aria-label="Next page"
            disabled={page >= totalPages}
            onClick={() => onPageChange(page + 1)}
            className={cn(
              "flex size-10 items-center justify-center rounded-full border border-border bg-surface-white text-text-secondary",
              "transition-colors hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-40",
            )}
          >
            <ChevronRight className="size-4" />
          </button>
        </li>
      </ul>
    </nav>
  );
}
