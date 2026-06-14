"use client";

import { Smartphone } from "lucide-react";
import { cn } from "@/lib/utils";

type StoreButtonProps = {
  label: string;
  store: "apple" | "google";
};

function StoreButton({ label, store }: StoreButtonProps) {
  return (
    <a
      href="#"
      aria-label={label}
      className={cn(
        "inline-flex h-12 items-center gap-3 rounded-lg bg-surface-dark px-5 text-text-on-dark",
        "transition-opacity hover:opacity-90",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
      )}
      onClick={(event) => event.preventDefault()}
    >
      <Smartphone className="size-5 shrink-0" aria-hidden="true" />
      <span className="flex flex-col items-start leading-none">
        <span className="text-[10px] uppercase opacity-80">
          {store === "apple" ? "Download on the" : "Get it on"}
        </span>
        <span className="text-sm font-semibold">
          {store === "apple" ? "App Store" : "Google Play"}
        </span>
      </span>
    </a>
  );
}

export { StoreButton };
