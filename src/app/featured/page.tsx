import type { Metadata } from "next";
import { FeaturedPage } from "@/features/featured/featured-page";

export const metadata: Metadata = {
  title: "Featured Profiles",
  description:
    "Browse verified premium matrimonial profiles across Australia, New Zealand, and the global Ummah.",
};

export default function Page() {
  return <FeaturedPage />;
}
