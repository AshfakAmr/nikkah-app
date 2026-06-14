import { MapPin } from "lucide-react";
import { contactLocation } from "@/features/contact-us/data/contact-content";
import { cn } from "@/lib/utils";

/** TODO: Replace with real map asset when available */
function MapVisual() {
  return (
    <div className="relative min-h-[280px] flex-1 overflow-hidden rounded-2xl bg-[#141414]">
      <svg
        viewBox="0 0 600 360"
        className="absolute inset-0 h-full w-full opacity-90"
        aria-hidden="true"
      >
        <rect width="600" height="360" fill="#141414" />
        <path
          d="M40 280 C120 220, 180 260, 260 200 S420 120, 560 180"
          fill="none"
          stroke="#d81b8c"
          strokeWidth="3"
          opacity="0.55"
        />
        <path
          d="M80 120 C160 160, 220 80, 320 140 S460 220, 540 100"
          fill="none"
          stroke="#e191b6"
          strokeWidth="2"
          opacity="0.45"
        />
        <circle cx="320" cy="190" r="28" fill="#d81b8c" opacity="0.15" />
        <circle cx="320" cy="190" r="8" fill="#d81b8c" />
      </svg>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full">
        <MapPin className="size-10 fill-primary text-primary" aria-hidden="true" />
      </div>
    </div>
  );
}

type LocationMapCardProps = {
  className?: string;
};

export function LocationMapCard({ className }: LocationMapCardProps) {
  return (
    <article
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#111111] p-4 shadow-card md:p-5",
        className,
      )}
    >
      <MapVisual />
      <div className="mt-4 rounded-2xl bg-primary-light px-5 py-4 text-primary-dark">
        <p className="text-[10px] font-semibold tracking-[0.18em] uppercase">
          {contactLocation.label}
        </p>
        <p className="mt-2 font-serif text-lg leading-snug text-[#4a1536] md:text-xl">
          {contactLocation.address}
        </p>
      </div>
    </article>
  );
}
