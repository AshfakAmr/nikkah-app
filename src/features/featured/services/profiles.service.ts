import { api } from "@/lib/api/client";
import { endpoints } from "@/lib/api/endpoints";
import { mockFeaturedProfiles } from "@/features/featured/data/featured-profiles.mock";
import { featuredPageMeta } from "@/features/featured/data/featured-filters.config";
import { searchLocalProfiles, isDefaultFilterState } from "@/features/featured/lib/profile-query";
import type {
  ProfileSearchParams,
  ProfileSearchResult,
} from "@/features/featured/types/profile";

const USE_MOCK_PROFILES = process.env.NEXT_PUBLIC_USE_MOCK_PROFILES !== "false";

type ApiProfileSearchResponse = ProfileSearchResult;

function withMarketingTotal(
  result: ProfileSearchResult,
  filters?: import("@/features/featured/types/profile").ProfileFiltersState,
): ProfileSearchResult {
  if (filters && !isDefaultFilterState(filters)) {
    return result;
  }

  return {
    ...result,
    total: featuredPageMeta.marketingTotalCount,
  };
}

export async function searchFeaturedProfiles(
  params: ProfileSearchParams,
): Promise<ProfileSearchResult> {
  const pageSize = params.pageSize ?? featuredPageMeta.pageSize;

  if (USE_MOCK_PROFILES) {
    const result = searchLocalProfiles(mockFeaturedProfiles, params, pageSize);
    return withMarketingTotal(result);
  }

  return api.get<ApiProfileSearchResponse>(endpoints.profiles.search, {
    params: {
      q: params.query,
      page: params.page,
      pageSize,
      sort: params.sort,
      locations: params.locations?.join(","),
      ageMin: params.ageMin,
      ageMax: params.ageMax,
      sect: params.sect,
      industries: params.industries?.join(","),
    },
  });
}

export async function getFeaturedProfilesPage(
  params: ProfileSearchParams = {},
): Promise<ProfileSearchResult> {
  return searchFeaturedProfiles({
    page: 1,
    pageSize: featuredPageMeta.pageSize,
    sort: "newest",
    locations: ["global"],
    ageMin: 20,
    ageMax: 35,
    sect: "any",
    ...params,
  });
}
