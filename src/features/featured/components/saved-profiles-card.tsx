"use client";

import Link from "next/link";
import { Bookmark } from "lucide-react";
import {
  featuredPageMeta,
  savedProfilesCard,
} from "@/features/featured/data/featured-filters.config";
import { Card } from "@/components/ui/card";

export function SavedProfilesCard() {
  return (
    <Card variant="outline" className="bg-[#f9f5f7]">
      <div className="flex flex-col gap-3">
        <Bookmark className="size-5 text-primary" aria-hidden="true" />
        <h3 className="font-serif text-lg text-text-primary">{savedProfilesCard.title}</h3>
        <p className="text-sm leading-relaxed text-text-secondary">
          {savedProfilesCard.description}
        </p>
        <Link
          href={savedProfilesCard.viewAllHref}
          className="text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
        >
          View all ({featuredPageMeta.savedProfilesCount})
        </Link>
      </div>
    </Card>
  );
}
