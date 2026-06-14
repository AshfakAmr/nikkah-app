"use client";

import { Search, SlidersHorizontal } from "lucide-react";
import { searchBarCopy } from "@/features/featured/data/featured-filters.config";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

type SearchBarSectionProps = {
  query: string;
  onQueryChange: (query: string) => void;
  onSubmit: () => void;
  onOpenFilters?: () => void;
  className?: string;
};

export function SearchBarSection({
  query,
  onQueryChange,
  onSubmit,
  onOpenFilters,
  className,
}: SearchBarSectionProps) {
  return (
    <section className={cn("border-b border-border bg-surface-gray py-6 md:py-8", className)}>
      <Container>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            onSubmit();
          }}
        >
          <div className="flex h-14 items-center gap-2 rounded-pill border border-border bg-surface-white px-3 shadow-subtle sm:gap-3 sm:px-4">
            <Search
              className="size-5 shrink-0 text-text-muted"
              aria-hidden="true"
            />
            <input
              type="search"
              value={query}
              onChange={(event) => onQueryChange(event.target.value)}
              placeholder={searchBarCopy.placeholder}
              aria-label="Search profiles"
              className="min-w-0 flex-1 bg-transparent text-sm text-text-primary placeholder:text-text-muted/70 focus:outline-none"
            />
            <button
              type="button"
              onClick={onOpenFilters}
              className="inline-flex shrink-0 items-center gap-1.5 rounded-pill px-2 py-1.5 text-xs font-medium text-text-secondary transition-colors hover:text-primary sm:gap-2 sm:px-3 sm:text-sm lg:hidden"
            >
              <SlidersHorizontal className="size-4" />
              <span className="hidden sm:inline">{searchBarCopy.advancedLabel}</span>
            </button>
            <button
              type="button"
              className="hidden shrink-0 items-center gap-2 rounded-pill px-3 py-1.5 text-sm font-medium text-text-secondary transition-colors hover:text-primary lg:inline-flex"
            >
              <SlidersHorizontal className="size-4" />
              {searchBarCopy.advancedLabel}
            </button>
            <Button
              type="submit"
              size="md"
              className="h-10 shrink-0 px-5 sm:px-6"
            >
              {searchBarCopy.submitLabel}
            </Button>
          </div>
        </form>
      </Container>
    </section>
  );
}
