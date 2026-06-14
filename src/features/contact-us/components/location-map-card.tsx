import Image from "next/image";
import { contactLocation } from "@/features/contact-us/data/contact-content";
import { cn } from "@/lib/utils";

type LocationMapCardProps = {
  className?: string;
};

export function LocationMapCard({ className }: LocationMapCardProps) {
  return (
    <article
      className={cn(
        "relative min-h-[420px] overflow-hidden rounded-3xl bg-[#12121f] shadow-card lg:min-h-0 lg:h-full",
        className,
      )}
    >
      <div className="absolute inset-5 md:inset-8">
        <Image
          src="/assets/images/contact-location-map.png"
          alt={`${contactLocation.label}: ${contactLocation.address}`}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-contain object-center"
          priority
        />
      </div>
    </article>
  );
}
