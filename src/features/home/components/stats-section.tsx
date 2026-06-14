import { Sparkles } from "lucide-react";
import { homeStats } from "@/features/home/data/home-content";
import { Section } from "@/components/layout/section";
import { cn } from "@/lib/utils";

export function StatsSection() {
  return (
    <Section
      id="stats"
      background="default"
      spacing="sm"
      className="relative overflow-hidden bg-[#f9f8f5]"
    >
      <Sparkles
        className="pointer-events-none absolute top-6 left-6 size-4 text-primary/15 md:top-10 md:left-10"
        aria-hidden="true"
      />
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {homeStats.map((stat) => (
          <li key={stat.label}>
            <article
              className={cn(
                "flex flex-col items-center justify-center rounded-xl bg-surface-white px-6 py-8 text-center shadow-card",
                "transition-shadow duration-200 hover:shadow-card-hover",
              )}
            >
              <p className="font-serif text-3xl text-[#8b215d] md:text-4xl">{stat.value}</p>
              <p className="mt-2 text-xs font-semibold tracking-[0.18em] text-[#8b215d] uppercase">
                {stat.label}
              </p>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}
