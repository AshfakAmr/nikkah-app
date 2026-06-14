import Image from "next/image";
import { ShieldCheck, Shield, Star } from "lucide-react";
import { authBrand } from "@/features/auth/data/auth-content";
import { cn } from "@/lib/utils";

const featureIcons = [ShieldCheck, Shield, Star];

type AuthBrandPanelProps = {
  className?: string;
};

export function AuthBrandPanel({ className }: AuthBrandPanelProps) {
  return (
    <aside
      className={cn(
        "relative flex flex-col justify-between overflow-hidden px-6 py-10 sm:px-10 lg:min-h-full lg:px-12 lg:py-14 xl:px-16",
        className,
      )}
    >
      <Image
        src={authBrand.backgroundSrc}
        alt=""
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-linear-to-br from-surface-cream/30 via-transparent to-surface-beige/20" />

      <div className="relative z-10 flex flex-col gap-8 lg:gap-10">
        <h1 className="max-w-lg font-serif text-[clamp(2rem,4vw,3.25rem)] leading-[1.15] text-text-primary">
          Begin Your Journey with{" "}
          <span className="italic">Intentionality.</span>
        </h1>

        <ul className="flex max-w-md flex-col gap-6">
          {authBrand.features.map((feature, index) => {
            const Icon = featureIcons[index] ?? ShieldCheck;

            return (
              <li key={feature.id} className="flex gap-4">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/12 text-primary">
                  <Icon className="size-4" strokeWidth={2} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary">{feature.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                    {feature.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <figure className="relative z-10 mt-10 max-w-md rounded-2xl border-l-4 border-primary bg-surface-white/80 p-5 shadow-card backdrop-blur-md lg:mt-12">
        <div className="mb-3 flex gap-0.5" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className="size-3.5 fill-primary text-primary"
              strokeWidth={0}
            />
          ))}
        </div>
        <blockquote className="font-serif text-sm leading-relaxed text-text-secondary italic">
          &ldquo;{authBrand.testimonial.quote}&rdquo;
        </blockquote>
        <figcaption className="mt-3 text-[10px] font-bold tracking-[0.14em] text-text-muted uppercase">
          — {authBrand.testimonial.attribution}
        </figcaption>
      </figure>
    </aside>
  );
}
