import type { Metadata } from "next";
import { AboutPage } from "@/features/about-us/about-page";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Founded in faith and guided by love — learn about Nikkah.com.au's mission to create a dignified halal path to marriage.",
};

export default function Page() {
  return <AboutPage />;
}
