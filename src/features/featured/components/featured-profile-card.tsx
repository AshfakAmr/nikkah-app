import Image from "next/image";
import Link from "next/link";
import { Bookmark, Check, MapPin, Star } from "lucide-react";
import type { DirectoryProfile } from "@/features/featured/types/profile";
import { ProfessionIcon } from "@/features/featured/components/profession-icon";
import { PlaceholderImage } from "@/features/home/components/placeholder-image";
import { cn } from "@/lib/utils";

type FeaturedProfileCardProps = {
  profile: DirectoryProfile;
  saved?: boolean;
  onToggleSave?: (profileId: string) => void;
  className?: string;
};

export function FeaturedProfileCard({
  profile,
  saved = false,
  onToggleSave,
  className,
}: FeaturedProfileCardProps) {
  return (
    <article
      className={cn(
        "group overflow-hidden rounded-2xl bg-surface-white shadow-card transition-shadow duration-200 hover:shadow-card-hover",
        className,
      )}
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        {profile.imagePath ? (
          <Image
            src={profile.imagePath}
            alt={`${profile.name}, ${profile.age}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 25vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          /* TODO: Replace with next/image when profile photo assets are available */
          <PlaceholderImage
            label={profile.imagePlaceholder}
            className="h-full w-full transition-transform duration-300 group-hover:scale-105"
          />
        )}

        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {profile.verified ? (
            <span className="inline-flex items-center gap-1 rounded-pill bg-primary px-2.5 py-1 text-[10px] font-semibold text-text-on-dark uppercase">
              <Check className="size-3" aria-hidden="true" />
              Verified
            </span>
          ) : null}
          {profile.premium ? (
            <span className="inline-flex items-center gap-1 rounded-pill bg-premium px-2.5 py-1 text-[10px] font-semibold text-text-on-dark uppercase">
              <Star className="size-3 fill-current" aria-hidden="true" />
              Premium
            </span>
          ) : null}
        </div>

        <button
          type="button"
          aria-label={saved ? "Remove bookmark" : "Save profile"}
          aria-pressed={saved}
          onClick={() => onToggleSave?.(profile.id)}
          className={cn(
            "absolute top-3 right-3 flex size-9 items-center justify-center rounded-full bg-surface-white/95 text-text-secondary shadow-subtle",
            "transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
            saved && "text-primary",
          )}
        >
          <Bookmark className={cn("size-4", saved && "fill-current")} />
        </button>
      </div>

      <div className="space-y-3 p-5">
        <h3 className="font-serif text-2xl text-text-primary">
          <Link
            href={`/featured?profile=${profile.id}`}
            className="transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            {profile.name}, {profile.age}
          </Link>
        </h3>
        <p className="flex items-center gap-2 text-sm text-text-secondary">
          <MapPin className="size-4 shrink-0 text-text-muted" aria-hidden="true" />
          {profile.locationLabel}
        </p>
        <p className="flex items-center gap-2 text-sm text-text-secondary">
          <ProfessionIcon icon={profile.professionIcon} />
          {profile.profession}
        </p>
      </div>
    </article>
  );
}
