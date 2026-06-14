import type { ProfileProfessionIcon } from "@/features/featured/types/profile";
import { professionIconMap } from "@/features/featured/lib/profession-icons";
import { cn } from "@/lib/utils";

type ProfessionIconProps = {
  icon: ProfileProfessionIcon;
  className?: string;
};

export function ProfessionIcon({ icon, className }: ProfessionIconProps) {
  const Icon = professionIconMap[icon];
  return <Icon className={cn("size-4 shrink-0 text-primary", className)} aria-hidden="true" />;
}
