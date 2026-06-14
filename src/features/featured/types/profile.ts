export type ProfileSortOption = "newest" | "oldest" | "name";

export type ProfileProfessionIcon =
  | "stethoscope"
  | "gavel"
  | "palette"
  | "landmark"
  | "bar-chart"
  | "flask"
  | "code"
  | "briefcase";

export type DirectoryProfile = {
  id: string;
  name: string;
  age: number;
  city: string;
  country: string;
  locationLabel: string;
  profession: string;
  professionIcon: ProfileProfessionIcon;
  verified: boolean;
  premium: boolean;
  /** Optional local asset path under /assets */
  imagePath?: string;
  /** Fallback initials when imagePath is absent */
  imagePlaceholder: string;
  locations: Array<"australia" | "new-zealand" | "global">;
  industries: Array<"healthcare" | "tech" | "education" | "finance" | "legal">;
  sect: "sunni" | "shia" | "other";
  createdAt: string;
};

export type ProfileSearchParams = {
  query?: string;
  page?: number;
  pageSize?: number;
  sort?: ProfileSortOption;
  locations?: string[];
  ageMin?: number;
  ageMax?: number;
  sect?: string;
  industries?: string[];
};

export type ProfileSearchResult = {
  items: DirectoryProfile[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
};

export type ProfileFiltersState = {
  query: string;
  locations: string[];
  ageMin: string;
  ageMax: string;
  sect: string;
  industries: string[];
  sort: ProfileSortOption;
  page: number;
};

export const defaultProfileFilters: ProfileFiltersState = {
  query: "",
  locations: ["global"],
  ageMin: "20",
  ageMax: "35",
  sect: "any",
  industries: [],
  sort: "newest",
  page: 1,
};
