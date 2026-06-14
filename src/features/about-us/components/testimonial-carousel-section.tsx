"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { aboutTestimonials } from "@/features/about-us/data/about-content";
import { Section } from "@/components/layout/section";
import { cn } from "@/lib/utils";

export function TestimonialCarouselSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonial = aboutTestimonials[activeIndex];

  const goToPrevious = () => {
    setActiveIndex((index) =>
      index === 0 ? aboutTestimonials.length - 1 : index - 1,
    );
  };

  const goToNext = () => {
    setActiveIndex((index) =>
      index === aboutTestimonials.length - 1 ? 0 : index + 1,
    );
  };

  if (!testimonial) return null;

  return (
    <Section background="default" spacing="default" className="bg-[#f9f7f2]">
      <figure className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <Quote className="mb-8 size-10 text-primary" aria-hidden="true" />
        <blockquote>
          <p className="font-serif text-xl leading-relaxed text-text-primary italic md:text-2xl lg:text-3xl">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
        </blockquote>
        <figcaption className="mt-8 flex flex-col gap-1">
          <p className="text-sm font-bold tracking-[0.12em] text-text-primary uppercase">
            {testimonial.names}
          </p>
          <p className="text-sm text-text-muted">{testimonial.marriedDate}</p>
        </figcaption>

        <div className="mt-8 flex items-center gap-3">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={goToPrevious}
            className={cn(
              "flex size-10 items-center justify-center rounded-full border border-primary text-primary",
              "transition-colors hover:bg-primary/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
            )}
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={goToNext}
            className={cn(
              "flex size-10 items-center justify-center rounded-full border border-primary text-primary",
              "transition-colors hover:bg-primary/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
            )}
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </figure>
    </Section>
  );
}
