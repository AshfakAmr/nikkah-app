import type { Metadata } from "next";
import { DesignSystemShowcase } from "@/components/design-system/design-system-showcase";

export const metadata: Metadata = {
  title: "Design System",
  robots: {
    index: false,
    follow: false,
  },
};

export default function DesignSystemPage() {
  return <DesignSystemShowcase />;
}
