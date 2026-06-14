import Image from "next/image";
import { aboutGlobalReach } from "@/features/about-us/data/about-content";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";

export function GlobalReachSection() {
  return (
    <Section background="beige-2" spacing="default">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-6">
          <h2 className="font-serif text-[length:var(--text-heading-md)] text-text-primary md:text-4xl">
            {aboutGlobalReach.title}
          </h2>
          <p className="text-base leading-relaxed text-text-secondary md:text-lg">
            {aboutGlobalReach.description}
          </p>
          <div className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
            {aboutGlobalReach.regions.flat().map((region) => (
              <div key={region} className="flex items-center gap-3">
                <span
                  className="size-2 shrink-0 rounded-full bg-primary"
                  aria-hidden="true"
                />
                <span className="text-xs font-bold tracking-[0.12em] text-text-primary uppercase">
                  {region}
                </span>
              </div>
            ))}
          </div>
        </div>

        <Card variant="elevated" padding="none" className="overflow-hidden rounded-3xl p-2 md:p-3">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-surface-white">
            <Image
              src="/assets/images/about-us-map.png"
              alt="Interactive global map showing Nikkah.com.au member regions"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
        </Card>
      </div>
    </Section>
  );
}
