import type {
  DirectoryProfile,
  ProfileFiltersState,
  ProfileSearchParams,
  ProfileSearchResult,
  ProfileSortOption,
} from "@/features/featured/types/profile";
import { featuredPageMeta } from "@/features/featured/data/featured-filters.config";

function normalizeQuery(value: string) {
  return value.trim().toLowerCase();
}

function matchesQuery(profile: DirectoryProfile, query: string) {
  if (!query) return true;

  const haystack = [
    profile.name,
    profile.profession,
    profile.locationLabel,
    profile.city,
    profile.country,
  ]
    .join(" ")
    .toLowerCase();

  return haystack.includes(query);
}

function matchesLocations(profile: DirectoryProfile, locations: string[]) {
  if (locations.length === 0 || locations.includes("global")) return true;
  return profile.locations.some((location) => locations.includes(location));
}

function matchesAge(profile: DirectoryProfile, ageMin?: number, ageMax?: number) {
  if (ageMin !== undefined && profile.age < ageMin) return false;
  if (ageMax !== undefined && profile.age > ageMax) return false;
  return true;
}

function matchesSect(profile: DirectoryProfile, sect?: string) {
  if (!sect || sect === "any") return true;
  return profile.sect === sect;
}

function matchesIndustries(profile: DirectoryProfile, industries: string[]) {
  if (industries.length === 0) return true;
  return profile.industries.some((industry) => industries.includes(industry));
}

function sortProfiles(profiles: DirectoryProfile[], sort: ProfileSortOption) {
  const sorted = [...profiles];

  switch (sort) {
    case "name":
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case "oldest":
      return sorted.sort(
        (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
      );
    case "newest":
    default:
      return sorted.sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      );
  }
}

export function filterProfiles(
  profiles: DirectoryProfile[],
  params: ProfileSearchParams,
): DirectoryProfile[] {
  const query = normalizeQuery(params.query ?? "");
  const ageMin = params.ageMin !== undefined ? Number(params.ageMin) : undefined;
  const ageMax = params.ageMax !== undefined ? Number(params.ageMax) : undefined;

  return sortProfiles(
    profiles.filter(
      (profile) =>
        matchesQuery(profile, query) &&
        matchesLocations(profile, params.locations ?? []) &&
        matchesAge(profile, ageMin, ageMax) &&
        matchesSect(profile, params.sect) &&
        matchesIndustries(profile, params.industries ?? []),
    ),
    params.sort ?? "newest",
  );
}

export function paginateProfiles(
  profiles: DirectoryProfile[],
  page: number,
  pageSize: number,
): ProfileSearchResult {
  const total = profiles.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(Math.max(page, 1), totalPages);
  const start = (safePage - 1) * pageSize;

  return {
    items: profiles.slice(start, start + pageSize),
    total,
    page: safePage,
    pageSize,
    totalPages,
  };
}

export function filtersToSearchParams(filters: ProfileFiltersState): ProfileSearchParams {
  return {
    query: filters.query,
    page: filters.page,
    sort: filters.sort,
    locations: filters.locations,
    ageMin: filters.ageMin ? Number(filters.ageMin) : undefined,
    ageMax: filters.ageMax ? Number(filters.ageMax) : undefined,
    sect: filters.sect,
    industries: filters.industries,
  };
}

export function searchLocalProfiles(
  profiles: DirectoryProfile[],
  params: ProfileSearchParams,
  pageSize: number,
): ProfileSearchResult {
  const filtered = filterProfiles(profiles, params);
  return paginateProfiles(filtered, params.page ?? 1, pageSize);
}

export function isDefaultFilterState(filters: ProfileFiltersState): boolean {
  return (
    filters.query.trim() === "" &&
    filters.locations.length === 1 &&
    filters.locations[0] === "global" &&
    filters.ageMin === "20" &&
    filters.ageMax === "35" &&
    filters.sect === "any" &&
    filters.industries.length === 0
  );
}

export function getDisplayTotal(
  filteredTotal: number,
  filters: ProfileFiltersState,
): number {
  return isDefaultFilterState(filters)
    ? featuredPageMeta.marketingTotalCount
    : filteredTotal;
}
