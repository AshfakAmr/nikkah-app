import { Sparkles } from "lucide-react";
import { homeQuote } from "@/features/home/data/home-content";
import { Section } from "@/components/layout/section";

export function QuoteSection() {
  return (
    <Section
      id="quote"
      background="cream"
      spacing="lg"
      contained={false}
      className="bg-[#FBF9F6]"
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center px-[var(--container-x)] text-center">
        <div
          className="mb-8 flex size-12 items-center justify-center rounded-full bg-primary/10"
          aria-hidden="true"
        >
          <Sparkles className="size-5 text-primary" />
        </div>
        <figure>
          <blockquote>
            <p className="font-serif text-2xl leading-relaxed text-primary italic md:text-4xl">
              &ldquo;{homeQuote.text}&rdquo;
            </p>
          </blockquote>
          <figcaption className="mt-8 text-xs font-medium tracking-[0.25em] text-primary uppercase">
            — {homeQuote.citation}
          </figcaption>
        </figure>
      </div>
    </Section>
  );
}
