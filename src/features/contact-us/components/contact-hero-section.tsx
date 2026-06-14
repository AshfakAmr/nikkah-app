import { contactHero } from "@/features/contact-us/data/contact-content";
import { Container } from "@/components/layout/container";

export function ContactHeroSection() {
  return (
    <section
      aria-labelledby="contact-hero-heading"
      className="bg-surface-dark pt-12 pb-8 md:pt-16 md:pb-10"
    >
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <h1
            id="contact-hero-heading"
            className="font-serif text-4xl text-white/90 md:text-5xl lg:text-6xl"
          >
            {contactHero.title}
          </h1>
          <p className="font-serif text-lg text-white/60 italic md:text-xl">
            {contactHero.subtitle}
          </p>
          <div className="mt-2 h-0.5 w-12 bg-primary" aria-hidden="true" />
        </div>
      </Container>
    </section>
  );
}
