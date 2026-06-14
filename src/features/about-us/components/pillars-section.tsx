import { aboutPillars } from "@/features/about-us/data/about-content";
import { SectionHeading } from "@/features/home/components/section-heading";
import { Section } from "@/components/layout/section";
import { cn } from "@/lib/utils";

export function PillarsSection() {
  return (
    <Section background="white" spacing="default" className="bg-[#fbfbf9]">
      <div className="flex flex-col gap-12 md:gap-16">
        <SectionHeading title={aboutPillars.title} />

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
          {aboutPillars.items.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <li key={pillar.id}>
                <article
                  className={cn(
                    "flex h-full flex-col gap-4 rounded-xl border border-border bg-surface-white p-6 lg:p-8",
                    "transition-shadow duration-200 hover:shadow-card",
                  )}
                >
                  <Icon className="size-5 text-primary" aria-hidden="true" />
                  <h3 className="font-serif text-lg font-semibold text-text-primary">
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-muted">{pillar.description}</p>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
