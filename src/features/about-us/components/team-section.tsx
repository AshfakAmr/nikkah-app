import { aboutTeam } from "@/features/about-us/data/about-content";
import { PlaceholderImage } from "@/features/home/components/placeholder-image";
import { SectionHeading } from "@/features/home/components/section-heading";
import { Section } from "@/components/layout/section";
import { cn } from "@/lib/utils";

export function TeamSection() {
  return (
    <Section background="white" spacing="default">
      <div className="flex flex-col gap-12 md:gap-16">
        <SectionHeading title={aboutTeam.title} subtitle={aboutTeam.subtitle} />

        <ul className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {aboutTeam.members.map((member) => (
            <li key={member.id}>
              <article className="flex flex-col items-center text-center">
                {/* TODO: Replace PlaceholderImage with next/image when team headshot assets are available */}
                <PlaceholderImage
                  label={member.imagePlaceholder}
                  className={cn(
                    "size-36 rounded-full border-2 border-border md:size-40",
                    "transition-transform duration-200 hover:scale-105",
                  )}
                />
                <h3 className="mt-6 font-serif text-xl font-semibold text-text-primary">
                  {member.name}
                </h3>
                <p className="mt-1 text-xs font-bold tracking-[0.15em] text-secondary uppercase">
                  {member.role}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
