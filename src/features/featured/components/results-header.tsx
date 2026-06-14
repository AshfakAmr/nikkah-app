"use client";

import { sortFilterOptions } from "@/features/featured/data/featured-filters.config";
import type { ProfileSortOption } from "@/features/featured/types/profile";
import { Select } from "@/components/ui/select";

type ResultsHeaderProps = {
  total: number;
  sort: ProfileSortOption;
  onSortChange: (sort: ProfileSortOption) => void;
};

export function ResultsHeader({ total, sort, onSortChange }: ResultsHeaderProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm text-text-secondary">
        Showing{" "}
        <span className="font-semibold text-primary">{total.toLocaleString()}</span> premium
        profiles
      </p>
      <div className="w-full sm:w-56">
        <Select
          label="Sort by"
          options={sortFilterOptions}
          value={sort}
          onChange={(event) => onSortChange(event.target.value as ProfileSortOption)}
        />
      </div>
    </div>
  );
}
