import { Home, Minus, Plus } from "lucide-react";
import { aboutGlobalReach } from "@/features/about-us/data/about-content";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";

/** TODO: Replace with real world map asset (about-us-map.png) when available */
function WorldMapPlaceholder() {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-surface-gray">
      <p
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center text-4xl font-bold tracking-[0.2em] text-primary/10 uppercase select-none md:text-5xl"
      >
        Global Ummah
      </p>
      <svg
        viewBox="0 0 800 400"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <rect width="800" height="400" fill="#f3f4f6" />
        <ellipse cx="620" cy="180" rx="90" ry="70" fill="#2e7d32" opacity="0.85" />
        <ellipse cx="520" cy="150" rx="55" ry="45" fill="#43a047" opacity="0.75" />
        <ellipse cx="180" cy="160" rx="110" ry="80" fill="#66bb6a" opacity="0.7" />
        <ellipse cx="350" cy="200" rx="40" ry="35" fill="#81c784" opacity="0.65" />
        <ellipse cx="700" cy="280" rx="70" ry="45" fill="#a5d6a7" opacity="0.8" />
        <circle cx="680" cy="290" r="8" fill="#d81b8c" />
      </svg>
      <div className="absolute top-4 left-4 flex flex-col overflow-hidden rounded-lg border border-border bg-surface-white shadow-subtle">
        <button
          type="button"
          aria-label="Zoom in"
          className="flex size-8 items-center justify-center text-text-muted hover:bg-surface-gray"
        >
          <Plus className="size-3.5" />
        </button>
        <button
          type="button"
          aria-label="Zoom out"
          className="flex size-8 items-center justify-center border-y border-border text-text-muted hover:bg-surface-gray"
        >
          <Minus className="size-3.5" />
        </button>
        <button
          type="button"
          aria-label="Reset map view"
          className="flex size-8 items-center justify-center text-text-muted hover:bg-surface-gray"
        >
          <Home className="size-3.5" />
        </button>
      </div>
    </div>
  );
}

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

        <Card variant="elevated" padding="none" className="overflow-hidden rounded-3xl p-3 md:p-4">
          <WorldMapPlaceholder />
        </Card>
      </div>
    </Section>
  );
}
