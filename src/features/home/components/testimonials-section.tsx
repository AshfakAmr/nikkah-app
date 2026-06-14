import { Star } from "lucide-react";
import { homeTestimonials } from "@/features/home/data/home-content";
import { PlaceholderImage } from "@/features/home/components/placeholder-image";
import { SectionHeading } from "@/features/home/components/section-heading";
import { Section } from "@/components/layout/section";
import { cn } from "@/lib/utils";

function StarRating() {
  return (
    <div className="flex gap-1" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className="size-4 fill-transparent text-secondary stroke-[1.5]"
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <Section
      id="testimonials"
      background="default"
      spacing="default"
      className="bg-[#f9f8f3]"
    >
      <div className="flex flex-col gap-12 md:gap-16">
        <SectionHeading
          title={homeTestimonials.title}
          subtitle={homeTestimonials.subtitle}
        />

        <ul className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {homeTestimonials.items.map((story) => (
            <li key={story.id}>
              <article
                className={cn(
                  "flex h-full flex-col gap-6 rounded-3xl border border-border bg-surface-white p-6 md:flex-row md:p-8",
                  "transition-shadow duration-200 hover:shadow-card",
                )}
              >
                {/* TODO: Replace PlaceholderImage with next/image when couple photo assets are available */}
                <PlaceholderImage
                  label={story.imagePlaceholder}
                  variant="couple"
                  className="aspect-square w-full shrink-0 rounded-xl md:w-40 lg:w-48"
                />
                <div className="flex flex-col gap-4">
                  <StarRating />
                  <blockquote className="font-serif text-lg leading-relaxed text-text-primary italic">
                    &ldquo;{story.quote}&rdquo;
                  </blockquote>
                  <footer className="mt-auto">
                    <p className="font-semibold text-text-primary">{story.names}</p>
                    <p className="mt-1 text-xs font-semibold tracking-[0.15em] text-secondary uppercase">
                      Married {story.marriedDate}
                    </p>
                  </footer>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
