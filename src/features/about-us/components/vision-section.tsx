import { Sparkles } from "lucide-react";
import { aboutVision } from "@/features/about-us/data/about-content";
import { Eyebrow } from "@/features/home/components/section-heading";
import { Section } from "@/components/layout/section";

export function VisionSection() {
  return (
    <Section background="white" spacing="default">
      <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center md:px-12 md:py-16">
        <Sparkles
          className="pointer-events-none absolute top-6 right-6 size-8 text-white/25 md:top-8 md:right-8 md:size-10"
          aria-hidden="true"
        />
        <Sparkles
          className="pointer-events-none absolute top-10 right-14 size-5 text-white/15 md:top-12 md:right-20"
          aria-hidden="true"
        />
        <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-6">
          <Eyebrow light className="text-white/80">
            {aboutVision.eyebrow}
          </Eyebrow>
          <blockquote>
            <p className="font-serif text-2xl leading-relaxed text-text-on-dark italic md:text-3xl lg:text-4xl">
              &ldquo;{aboutVision.quote}&rdquo;
            </p>
          </blockquote>
        </div>
      </div>
    </Section>
  );
}
