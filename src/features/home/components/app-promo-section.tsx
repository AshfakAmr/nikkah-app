import Image from "next/image";
import { homeAppPromo } from "@/features/home/data/home-content";
import { StoreButton } from "@/features/home/components/store-button";
import { Section } from "@/components/layout/section";

export function AppPromoSection() {
  return (
    <Section
      id="app-promo"
      background="white"
      spacing="default"
      className="bg-[#f5f5f3]"
    >
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="relative transition-transform duration-300 hover:scale-[1.02]">
            <Image
              src="/assets/images/mobile-app-mockup.png"
              alt={homeAppPromo.mockupAlt}
              width={900}
              height={700}
              className="h-auto w-full"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="flex flex-col gap-6 text-center lg:text-left">
          <h2 className="font-serif text-[length:var(--text-display-lg)] text-text-primary">
            {homeAppPromo.title}
          </h2>
          <p className="text-base leading-relaxed text-secondary-alt md:text-lg">
            {homeAppPromo.description}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            {/* TODO: Replace with official App Store / Google Play badge SVG assets */}
            <StoreButton label={homeAppPromo.appStoreLabel} store="apple" />
            <StoreButton label={homeAppPromo.googlePlayLabel} store="google" />
          </div>
        </div>
      </div>
    </Section>
  );
}
