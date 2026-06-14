import Link from "next/link";
import type { FeaturedProfile, ProfileBadge } from "@/features/home/data/home-content";
import { PlaceholderImage } from "@/features/home/components/placeholder-image";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

function ProfileBadgeTag({ badge }: { badge: ProfileBadge }) {
  if (badge === "premium") {
    return (
      <Badge variant="gold" className="absolute top-3 right-3 shadow-subtle">
        Premium
      </Badge>
    );
  }

  return (
    <Badge className="absolute top-3 right-3 shadow-subtle">New</Badge>
  );
}

type ProfileCardProps = {
  profile: FeaturedProfile;
  className?: string;
};

export function ProfileCard({ profile, className }: ProfileCardProps) {
  return (
    <article
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl bg-surface-white shadow-card transition-shadow duration-200 hover:shadow-card-hover",
        className,
      )}
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        {/* TODO: Replace PlaceholderImage with next/image when profile photo assets are available */}
        <PlaceholderImage
          label={profile.imagePlaceholder}
          className="h-full w-full transition-transform duration-300 group-hover:scale-105"
        />
        {profile.badge ? <ProfileBadgeTag badge={profile.badge} /> : null}
      </div>
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div>
          <h3 className="font-serif text-xl text-text-primary">
            {profile.name}, {profile.age}
          </h3>
          <p className="mt-1 text-sm font-medium text-primary">
            {profile.profession} • {profile.location}
          </p>
        </div>
        <Link
          href={`/featured?profile=${profile.id}`}
          className={cn(
            "inline-flex h-10 items-center justify-center rounded-pill border border-primary px-4 text-sm font-medium text-primary",
            "transition-colors hover:bg-primary hover:text-text-on-dark",
            "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
          )}
        >
          View Profile
        </Link>
      </div>
    </article>
  );
}
