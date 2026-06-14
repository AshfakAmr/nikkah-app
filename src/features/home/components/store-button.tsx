"use client";

import { Icon } from "@iconify/react";
import appleIcon from "@iconify-icons/logos/apple";
import googlePlayIcon from "@iconify-icons/logos/google-play-icon";
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
        "inline-flex h-12 min-w-[10.5rem] items-center gap-3 rounded-lg bg-surface-dark px-4 text-text-on-dark sm:px-5",
        "transition-opacity hover:opacity-90",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
      )}
      onClick={(event) => event.preventDefault()}
    >
      {store === "apple" ? (
        <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-white">
          <Icon icon={appleIcon} width={20} height={20} aria-hidden="true" />
        </span>
      ) : (
        <Icon icon={googlePlayIcon} width={24} height={24} aria-hidden="true" className="shrink-0" />
      )}
      <span className="flex flex-col items-start leading-none">
        <span className="text-[10px] tracking-wide uppercase opacity-90">
          {store === "apple" ? "Download on the" : "Get it on"}
        </span>
        <span className="text-[15px] font-semibold tracking-tight">
          {store === "apple" ? "App Store" : "Google Play"}
        </span>
      </span>
    </a>
  );
}

export { StoreButton };
