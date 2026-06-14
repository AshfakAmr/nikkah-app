"use client";

import { useMemo, useState } from "react";
import { mockFeaturedProfiles } from "@/features/featured/data/featured-profiles.mock";
import { featuredPageMeta } from "@/features/featured/data/featured-filters.config";
import {
  filtersToSearchParams,
  getDisplayTotal,
  searchLocalProfiles,
} from "@/features/featured/lib/profile-query";
import type { ProfileFiltersState } from "@/features/featured/types/profile";
import { defaultProfileFilters } from "@/features/featured/types/profile";
import { SearchBarSection } from "@/features/featured/components/search-bar-section";
import { FilterSidebar } from "@/features/featured/components/filter-sidebar";
import { ResultsHeader } from "@/features/featured/components/results-header";
import { FeaturedProfileCard } from "@/features/featured/components/featured-profile-card";
import { ProfilesPagination } from "@/features/featured/components/profiles-pagination";
import { Container } from "@/components/layout/container";
import { Drawer } from "@/components/ui/drawer";
import { EmptyState } from "@/components/ui/empty-state";

type FeaturedDirectoryProps = {
  initialFilters?: ProfileFiltersState;
};

export function FeaturedDirectory({
  initialFilters = defaultProfileFilters,
}: FeaturedDirectoryProps) {
  const [filters, setFilters] = useState<ProfileFiltersState>(initialFilters);
  const [queryDraft, setQueryDraft] = useState(initialFilters.query);
  const [savedProfileIds, setSavedProfileIds] = useState<string[]>([]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const result = useMemo(() => {
    const params = {
      ...filtersToSearchParams(filters),
      pageSize: featuredPageMeta.pageSize,
    };

    return searchLocalProfiles(mockFeaturedProfiles, params, featuredPageMeta.pageSize);
  }, [filters]);

  const displayTotal = getDisplayTotal(result.total, filters);

  const updateFilters = (next: Partial<ProfileFiltersState>) => {
    setFilters((current) => ({ ...current, ...next }));
  };

  const handleSearchSubmit = () => {
    updateFilters({ query: queryDraft, page: 1 });
  };

  const toggleSaved = (profileId: string) => {
    setSavedProfileIds((current) =>
      current.includes(profileId)
        ? current.filter((id) => id !== profileId)
        : [...current, profileId],
    );
  };

  return (
    <>
      <SearchBarSection
        query={queryDraft}
        onQueryChange={setQueryDraft}
        onSubmit={handleSearchSubmit}
        onOpenFilters={() => setMobileFiltersOpen(true)}
      />

      <Container className="py-8 md:py-10">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr] lg:gap-10">
          <div className="hidden lg:block">
            <FilterSidebar filters={filters} onFiltersChange={updateFilters} />
          </div>

          <div className="flex flex-col gap-8">
            <ResultsHeader
              total={displayTotal}
              sort={filters.sort}
              onSortChange={(sort) => updateFilters({ sort, page: 1 })}
            />

            {result.items.length > 0 ? (
              <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {result.items.map((profile) => (
                  <li key={profile.id}>
                    <FeaturedProfileCard
                      profile={profile}
                      saved={savedProfileIds.includes(profile.id)}
                      onToggleSave={toggleSaved}
                    />
                  </li>
                ))}
              </ul>
            ) : (
              <EmptyState
                title="No profiles found"
                description="Try adjusting your filters or search terms to discover more matches."
                actionLabel="Reset filters"
                onAction={() => {
                  setFilters(defaultProfileFilters);
                  setQueryDraft("");
                }}
              />
            )}

            {result.totalPages > 1 ? (
              <ProfilesPagination
                page={result.page}
                totalPages={result.totalPages}
                onPageChange={(page) => updateFilters({ page })}
              />
            ) : null}
          </div>
        </div>
      </Container>

      <Drawer
        open={mobileFiltersOpen}
        onClose={() => setMobileFiltersOpen(false)}
        title="Refine Search"
        description="Filter profiles by location, demographics, and profession."
        side="right"
      >
        <FilterSidebar filters={filters} onFiltersChange={updateFilters} />
      </Drawer>
    </>
  );
}
