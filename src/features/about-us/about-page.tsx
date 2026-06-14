import { PageShell } from "@/components/layout/page-shell";
import { AboutHeroSection } from "@/features/about-us/components/about-hero-section";
import { FounderLetterSection } from "@/features/about-us/components/founder-letter-section";
import { HistoryTimelineSection } from "@/features/about-us/components/history-timeline-section";
import { VisionSection } from "@/features/about-us/components/vision-section";
import { PillarsSection } from "@/features/about-us/components/pillars-section";
import { GlobalReachSection } from "@/features/about-us/components/global-reach-section";
import { TeamSection } from "@/features/about-us/components/team-section";
import { TestimonialCarouselSection } from "@/features/about-us/components/testimonial-carousel-section";
import { AboutCtaSection } from "@/features/about-us/components/about-cta-section";

export function AboutPage() {
  return (
    <PageShell footerVariant="compact">
      <AboutHeroSection />
      <FounderLetterSection />
      <HistoryTimelineSection />
      <VisionSection />
      <PillarsSection />
      <GlobalReachSection />
      <TeamSection />
      <TestimonialCarouselSection />
      <AboutCtaSection />
    </PageShell>
  );
}
