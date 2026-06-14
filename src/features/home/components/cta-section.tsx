import { homeCta } from "@/features/home/data/home-content";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <Section id="cta" background="default" spacing="default">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center gap-6 rounded-3xl bg-primary px-6 py-14 text-center md:px-12 md:py-16">
          <h2 className="max-w-2xl font-serif text-3xl !text-white md:text-5xl">
            {homeCta.title}
          </h2>
          <p className="max-w-xl text-base text-white/90 md:text-lg">
            {homeCta.description}
          </p>
          <Button href={homeCta.buttonHref} variant="inverse" size="lg">
            {homeCta.buttonLabel}
          </Button>
          <p className="text-sm text-white/80">{homeCta.caption}</p>
        </div>
      </div>
    </Section>
  );
}
