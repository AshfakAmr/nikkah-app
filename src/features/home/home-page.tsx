import { PageShell } from "@/components/layout/page-shell";
import { HeroSection } from "@/features/home/components/hero-section";
import { StatsSection } from "@/features/home/components/stats-section";
import { JourneySection } from "@/features/home/components/journey-section";
import { FeaturedProfilesSection } from "@/features/home/components/featured-profiles-section";
import { FeaturesGridSection } from "@/features/home/components/features-grid-section";
import { TestimonialsSection } from "@/features/home/components/testimonials-section";
import { QuoteSection } from "@/features/home/components/quote-section";
import { AppPromoSection } from "@/features/home/components/app-promo-section";
import { FaqSection } from "@/features/home/components/faq-section";
import { CtaSection } from "@/features/home/components/cta-section";

export function HomePage() {
  return (
    <PageShell>
      <HeroSection />
      <StatsSection />
      <JourneySection />
      <FeaturedProfilesSection />
      <FeaturesGridSection />
      <TestimonialsSection />
      <QuoteSection />
      <AppPromoSection />
      <FaqSection />
      <CtaSection />
    </PageShell>
  );
}
