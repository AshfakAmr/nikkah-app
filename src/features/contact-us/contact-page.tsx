import { PageShell } from "@/components/layout/page-shell";
import { ContactHeroSection } from "@/features/contact-us/components/contact-hero-section";
import { SupportOptionsSection } from "@/features/contact-us/components/support-options-section";
import { InquirySection } from "@/features/contact-us/components/inquiry-section";
import { ContactFaqSection } from "@/features/contact-us/components/contact-faq-section";
import { ContactCtaSection } from "@/features/contact-us/components/contact-cta-section";

export function ContactPage() {
  return (
    <PageShell mainClassName="bg-surface-cream">
      <ContactHeroSection />
      <SupportOptionsSection />
      <InquirySection />
      <ContactFaqSection />
      <ContactCtaSection />
    </PageShell>
  );
}
