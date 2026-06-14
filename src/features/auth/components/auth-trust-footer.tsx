import { Check, EyeOff, Lock } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type AuthTrustFooterProps = {
  privacyHref: string;
  privacyLabel: string;
  className?: string;
  insideCard?: boolean;
};

const trustIcons = [Check, Lock, EyeOff];

export function AuthTrustFooter({
  privacyHref,
  privacyLabel,
  className,
  insideCard = false,
}: AuthTrustFooterProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-4",
        insideCard && "border-t border-border pt-6",
        className,
      )}
    >
      <div className="flex flex-wrap items-center justify-center gap-5 text-[9px] font-semibold tracking-[0.16em] text-text-muted uppercase sm:gap-6 sm:text-[10px]">
        {["Verified", "Encrypted", "Private"].map((label, index) => {
          const Icon = trustIcons[index] ?? Check;

          return (
            <span key={label} className="inline-flex items-center gap-1.5">
              <Icon className="size-3" aria-hidden="true" />
              {label}
            </span>
          );
        })}
      </div>
      <Link
        href={privacyHref}
        className="text-[9px] font-semibold tracking-[0.18em] text-primary uppercase underline underline-offset-4 sm:text-[10px]"
      >
        {privacyLabel}
      </Link>
    </div>
  );
}
