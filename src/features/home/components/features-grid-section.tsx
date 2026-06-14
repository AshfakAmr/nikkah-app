import { homeFeatures } from "@/features/home/data/home-content";
import { SectionHeading } from "@/features/home/components/section-heading";
import { Section } from "@/components/layout/section";
import { cn } from "@/lib/utils";

export function FeaturesGridSection() {
  return (
    <Section
      id="features"
      background="cream"
      spacing="default"
      className="bg-[#faf9f6]"
    >
      <div className="flex flex-col gap-12 md:gap-16">
        <SectionHeading
          title={homeFeatures.title}
          subtitle={homeFeatures.subtitle}
        />

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {homeFeatures.items.map((feature) => {
            const Icon = feature.icon;

            return (
              <li key={feature.id}>
                <article
                  className={cn(
                    "flex h-full flex-col gap-4 rounded-2xl border border-border bg-surface-white p-8",
                    "transition-shadow duration-200 hover:shadow-card",
                  )}
                >
                  <Icon className="size-6 text-primary" aria-hidden="true" />
                  <h3 className="font-serif text-xl text-text-primary">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-secondary-alt">
                    {feature.description}
                  </p>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
