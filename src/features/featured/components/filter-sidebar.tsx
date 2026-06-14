"use client";

import type { ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import {
  industryFilterOptions,
  locationFilterOptions,
  sectFilterOptions,
} from "@/features/featured/data/featured-filters.config";
import type { ProfileFiltersState } from "@/features/featured/types/profile";
import { Select } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { SavedProfilesCard } from "@/features/featured/components/saved-profiles-card";

type FilterSidebarProps = {
  filters: ProfileFiltersState;
  onFiltersChange: (next: Partial<ProfileFiltersState>) => void;
  className?: string;
};

function FilterCheckbox({
  id,
  label,
  checked,
  onChange,
}: {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <label
      htmlFor={id}
      className="flex cursor-pointer items-center gap-3 text-sm text-text-secondary"
    >
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        className="size-4 rounded border-border text-primary focus:ring-primary"
      />
      {label}
    </label>
  );
}

function FilterSection({
  title,
  children,
  defaultOpen = true,
}: {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}) {
  return (
    <details open={defaultOpen} className="group border-b border-border pb-4">
      <summary className="flex cursor-pointer list-none items-center justify-between py-2 text-xs font-semibold tracking-[0.12em] text-text-muted uppercase [&::-webkit-details-marker]:hidden">
        {title}
        <ChevronDown className="size-4 transition-transform group-open:rotate-180" />
      </summary>
      <div className="mt-3 space-y-3">{children}</div>
    </details>
  );
}

export function FilterSidebar({
  filters,
  onFiltersChange,
  className,
}: FilterSidebarProps) {
  const toggleLocation = (locationId: string, checked: boolean) => {
    const next = checked
      ? [...new Set([...filters.locations, locationId])]
      : filters.locations.filter((item) => item !== locationId);

    onFiltersChange({ locations: next.length > 0 ? next : ["global"], page: 1 });
  };

  const toggleIndustry = (industryId: string, checked: boolean) => {
    const next = checked
      ? [...filters.industries, industryId]
      : filters.industries.filter((item) => item !== industryId);

    onFiltersChange({ industries: next, page: 1 });
  };

  return (
    <aside className={cn("flex flex-col gap-6", className)} aria-label="Refine search">
      <h2 className="text-xs font-semibold tracking-[0.12em] text-text-muted uppercase">
        Refine Search
      </h2>

      <div className="space-y-4">
        <FilterSection title="Location">
          {locationFilterOptions.map((option) => (
            <FilterCheckbox
              key={option.id}
              id={`location-${option.id}`}
              label={option.label}
              checked={filters.locations.includes(option.id)}
              onChange={(checked) => toggleLocation(option.id, checked)}
            />
          ))}
        </FilterSection>

        <FilterSection title="Demographics">
          <div className="space-y-2">
            <p className="text-xs font-semibold tracking-wide text-text-muted uppercase">
              Age Range
            </p>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min={18}
                max={99}
                value={filters.ageMin}
                onChange={(event) =>
                  onFiltersChange({ ageMin: event.target.value, page: 1 })
                }
                aria-label="Minimum age"
                className="h-10 w-full rounded-lg border border-border bg-surface-white px-3 text-sm focus:border-primary focus:outline-none"
              />
              <span className="text-text-muted" aria-hidden="true">
                —
              </span>
              <input
                type="number"
                min={18}
                max={99}
                value={filters.ageMax}
                onChange={(event) =>
                  onFiltersChange({ ageMax: event.target.value, page: 1 })
                }
                aria-label="Maximum age"
                className="h-10 w-full rounded-lg border border-border bg-surface-white px-3 text-sm focus:border-primary focus:outline-none"
              />
            </div>
          </div>
          <Select
            label="Sect"
            options={sectFilterOptions}
            value={filters.sect}
            onChange={(event) => onFiltersChange({ sect: event.target.value, page: 1 })}
          />
        </FilterSection>

        <FilterSection title="Professional">
          {industryFilterOptions.map((option) => (
            <FilterCheckbox
              key={option.id}
              id={`industry-${option.id}`}
              label={option.label}
              checked={filters.industries.includes(option.id)}
              onChange={(checked) => toggleIndustry(option.id, checked)}
            />
          ))}
        </FilterSection>
      </div>

      <SavedProfilesCard />
    </aside>
  );
}
