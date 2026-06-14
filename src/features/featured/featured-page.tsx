import { PageShell } from "@/components/layout/page-shell";
import { FeaturedDirectory } from "@/features/featured/components/featured-directory";

export function FeaturedPage() {
  return (
    <PageShell footerVariant="directory" mainClassName="bg-[#fafafa]">
      <FeaturedDirectory />
    </PageShell>
  );
}
