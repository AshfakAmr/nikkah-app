import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Briefcase,
  Code2,
  FlaskConical,
  Gavel,
  Landmark,
  Palette,
  Stethoscope,
} from "lucide-react";
import type { ProfileProfessionIcon } from "@/features/featured/types/profile";

export const professionIconMap: Record<ProfileProfessionIcon, LucideIcon> = {
  stethoscope: Stethoscope,
  gavel: Gavel,
  palette: Palette,
  landmark: Landmark,
  "bar-chart": BarChart3,
  flask: FlaskConical,
  code: Code2,
  briefcase: Briefcase,
};

export function getProfessionIcon(icon: ProfileProfessionIcon): LucideIcon {
  return professionIconMap[icon];
}
