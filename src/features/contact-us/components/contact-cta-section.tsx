import { contactCta } from "@/features/contact-us/data/contact-content";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export function ContactCtaSection() {
  return (
    <section
      aria-labelledby="contact-cta-heading"
      className="bg-surface-dark py-16 md:py-20"
    >
      <Container>
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <h2
            id="contact-cta-heading"
            className="font-serif text-3xl text-white/35 md:text-4xl"
          >
            {contactCta.title}
          </h2>
          <p className="text-base leading-relaxed text-white/55 md:text-lg">
            {contactCta.description}
          </p>
          <Button
            href={contactCta.buttonHref}
            size="lg"
            className="uppercase tracking-[0.12em]"
          >
            {contactCta.buttonLabel}
          </Button>
        </div>
      </Container>
    </section>
  );
}
