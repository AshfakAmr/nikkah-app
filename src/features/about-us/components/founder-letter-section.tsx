import { aboutFounder } from "@/features/about-us/data/about-content";
import { Eyebrow } from "@/features/home/components/section-heading";
import { Section } from "@/components/layout/section";

export function FounderLetterSection() {
  return (
    <Section background="white" spacing="default">
      <article className="mx-auto max-w-3xl">
        <Eyebrow className="mb-4">{aboutFounder.eyebrow}</Eyebrow>
        <h2 className="mb-8 font-serif text-3xl text-text-primary md:text-4xl">
          {aboutFounder.title}
        </h2>
        <div className="flex flex-col gap-6 text-base leading-relaxed text-text-secondary md:text-lg">
          {aboutFounder.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
        <footer className="mt-10 text-right">
          <p className="font-script text-3xl text-primary md:text-4xl">
            {aboutFounder.signature}
          </p>
          <p className="mt-1 text-xs font-medium tracking-[0.15em] text-text-muted uppercase">
            {aboutFounder.role}
          </p>
        </footer>
      </article>
    </Section>
  );
}
