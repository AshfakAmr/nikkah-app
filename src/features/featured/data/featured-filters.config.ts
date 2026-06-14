import type { SelectOption } from "@/components/ui/select";

export const featuredPageMeta = {
  pageSize: 9,
  savedProfilesCount: 12,
  /** Display total used until API returns live counts */
  marketingTotalCount: 1240,
} as const;

export const locationFilterOptions = [
  { id: "australia", label: "Australia" },
  { id: "new-zealand", label: "New Zealand" },
  { id: "global", label: "Global" },
] as const;

export const industryFilterOptions = [
  { id: "healthcare", label: "Healthcare" },
  { id: "tech", label: "Tech & Engineering" },
  { id: "education", label: "Education" },
  { id: "finance", label: "Finance" },
  { id: "legal", label: "Legal" },
] as const;

export const sectFilterOptions: SelectOption[] = [
  { label: "Any", value: "any" },
  { label: "Sunni", value: "sunni" },
  { label: "Shia", value: "shia" },
  { label: "Other", value: "other" },
];

export const sortFilterOptions: SelectOption[] = [
  { label: "Newest Members", value: "newest" },
  { label: "Oldest Members", value: "oldest" },
  { label: "Name (A–Z)", value: "name" },
];

export const savedProfilesCard = {
  title: "Saved Profiles",
  description: "Quickly access profiles you've bookmarked for later review.",
  viewAllHref: "/featured/saved",
} as const;

export const searchBarCopy = {
  placeholder: "Search by name, profession, or keyword...",
  advancedLabel: "Advanced Search",
  submitLabel: "Search",
} as const;
