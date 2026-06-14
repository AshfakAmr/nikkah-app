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
          className="flex flex-col gap-3 lg:flex-row lg:items-center"
          onSubmit={(event) => {
            event.preventDefault();
            onSubmit();
          }}
        >
          <div className="relative flex flex-1 items-center">
            <Search
              className="pointer-events-none absolute left-4 size-5 text-text-muted"
              aria-hidden="true"
            />
            <input
              type="search"
              value={query}
              onChange={(event) => onQueryChange(event.target.value)}
              placeholder={searchBarCopy.placeholder}
              aria-label="Search profiles"
              className="h-14 w-full rounded-pill border border-border bg-surface-white pr-4 pl-12 text-sm text-text-primary shadow-subtle placeholder:text-text-muted/70 focus:border-primary focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenFilters}
              className="inline-flex h-11 items-center gap-2 rounded-pill px-4 text-sm font-medium text-text-secondary transition-colors hover:text-primary lg:hidden"
            >
              <SlidersHorizontal className="size-4" />
              {searchBarCopy.advancedLabel}
            </button>
            <button
              type="button"
              className="hidden h-11 items-center gap-2 rounded-pill px-4 text-sm font-medium text-text-secondary transition-colors hover:text-primary lg:inline-flex"
            >
              <SlidersHorizontal className="size-4" />
              {searchBarCopy.advancedLabel}
            </button>
            <Button type="submit" size="lg" className="min-w-[120px]">
              {searchBarCopy.submitLabel}
            </Button>
          </div>
        </form>
      </Container>
    </section>
  );
}
