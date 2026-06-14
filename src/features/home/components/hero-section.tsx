import Image from "next/image";
import { homeHero } from "@/features/home/data/home-content";
import { Eyebrow } from "@/features/home/components/section-heading";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

function IslamicPattern() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="islamic-star-pattern"
          x="0"
          y="0"
          width="80"
          height="80"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M40 0L48.28 31.72L80 40L48.28 48.28L40 80L31.72 48.28L0 40L31.72 31.72Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <circle cx="40" cy="40" r="6" fill="none" stroke="currentColor" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#islamic-star-pattern)" />
    </svg>
  );
}

export function HeroSection() {
  return (
    <section
      aria-labelledby="home-hero-heading"
      className="relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src="/assets/images/hero-image.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className={cn(
            "absolute inset-0 bg-linear-to-r from-surface-white/95 via-surface-white/80 to-surface-white/30",
            "md:from-surface-white/90 md:via-surface-white/70 md:to-transparent",
          )}
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-surface-cream/40" />
        <IslamicPattern />
      </div>

      <Container className="relative">
        <div className="grid min-h-[calc(100vh-4.5rem)] max-h-[900px] items-center gap-10 py-16 md:min-h-[640px] md:grid-cols-2 md:gap-12 md:py-20 lg:py-24">
          <div className="flex flex-col gap-6 text-center md:text-left">
            <Eyebrow>{homeHero.eyebrow}</Eyebrow>
            <h1
              id="home-hero-heading"
              className="font-serif text-[length:var(--text-display-xl)] leading-tight text-text-primary"
            >
              {homeHero.title}
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-secondary-alt md:text-lg">
              {homeHero.description}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
              <Button href={homeHero.primaryCta.href} size="lg">
                {homeHero.primaryCta.label}
              </Button>
              <Button href={homeHero.secondaryCta.href} variant="secondary" size="lg">
                {homeHero.secondaryCta.label}
              </Button>
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-md items-center justify-center md:max-w-none md:justify-end">
            <div className="relative w-full max-w-[400px] drop-shadow-card-hover transition-transform duration-300 hover:scale-[1.02] md:max-w-[460px] lg:max-w-[520px]">
              <Image
                src="/assets/images/home-hero-cardImg.png"
                alt={homeHero.cardStackAlt}
                width={760}
                height={900}
                priority
                className="h-auto w-full"
                sizes="(max-width: 768px) 400px, (max-width: 1024px) 460px, 520px"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
