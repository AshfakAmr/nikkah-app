import type { Metadata } from "next";
import { HomePage } from "@/features/home/home-page";

export const metadata: Metadata = {
  title: "Find Your Blessed Life Partner",
  description:
    "A faith-first matrimonial platform for intentional connections across Australia and the UAE.",
};

export default function Page() {
  return <HomePage />;
}
