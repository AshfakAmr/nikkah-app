import Image from "next/image";
import { aboutHero } from "@/features/about-us/data/about-content";
import { Container } from "@/components/layout/container";

function IslamicPattern() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full text-white opacity-[0.12]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="about-islamic-star-pattern"
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
      <rect width="100%" height="100%" fill="url(#about-islamic-star-pattern)" />
    </svg>
  );
}

export function AboutHeroSection() {
  return (
    <section
      aria-labelledby="about-hero-heading"
      className="relative flex min-h-[420px] items-center overflow-hidden md:min-h-[520px] lg:min-h-[600px]"
    >
      <div className="absolute inset-0">
        <Image
          src="/assets/images/hero-image.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_25%]"
        />
        <div className="absolute inset-0 bg-linear-to-b from-surface-dark/50 via-surface-dark/35 to-surface-dark/55" />
        <IslamicPattern />
      </div>

      <Container className="relative">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 py-20 text-center md:py-28">
          <h1
            id="about-hero-heading"
            className="font-serif text-[length:var(--text-display-lg)] leading-tight !text-white md:text-5xl lg:text-6xl"
          >
            {aboutHero.title}
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-white/90 md:text-lg">
            {aboutHero.description}
          </p>
        </div>
      </Container>
    </section>
  );
}
