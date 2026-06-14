import { aboutCta } from "@/features/about-us/data/about-content";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";

export function AboutCtaSection() {
  return (
    <Section background="white" spacing="default">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
        <h2 className="font-serif text-3xl text-text-primary md:text-4xl">
          {aboutCta.title}
        </h2>
        <p className="text-base text-text-secondary md:text-lg">{aboutCta.description}</p>
        <Button
          href={aboutCta.buttonHref}
          size="lg"
          className="rounded-lg shadow-button"
        >
          {aboutCta.buttonLabel}
        </Button>
        <p className="text-xs font-medium tracking-[0.15em] text-text-muted uppercase">
          {aboutCta.caption}
        </p>
      </div>
    </Section>
  );
}
