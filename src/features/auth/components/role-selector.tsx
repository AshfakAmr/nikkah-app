"use client";

import Image from "next/image";
import type { AuthRole, AuthRoleOption } from "@/features/auth/data/auth-content";
import { cn } from "@/lib/utils";

type RoleSelectorProps = {
  roles: AuthRoleOption[];
  value: AuthRole | "";
  onChange: (role: AuthRole) => void;
  error?: string;
  label?: string;
};

export function RoleSelector({
  roles,
  value,
  onChange,
  error,
  label = "I am a:",
}: RoleSelectorProps) {
  return (
    <fieldset className="flex flex-col gap-3">
      <legend className="text-[10px] font-semibold tracking-[0.14em] text-text-muted uppercase">
        {label}
      </legend>
      <div className="grid grid-cols-4 gap-2 sm:gap-3">
        {roles.map((role) => {
          const isSelected = value === role.id;

          return (
            <button
              key={role.id}
              type="button"
              aria-pressed={isSelected}
              onClick={() => onChange(role.id)}
              className={cn(
                "group flex flex-col items-center gap-2",
                "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary",
              )}
            >
              <span
                className={cn(
                  "flex size-14 items-center justify-center rounded-full border-2 transition-colors sm:size-16",
                  isSelected
                    ? "border-primary bg-primary/5"
                    : "border-border bg-surface-white group-hover:border-primary/35",
                )}
              >
                <Image
                  src={role.iconSrc}
                  alt=""
                  width={28}
                  height={28}
                  className={cn(
                    "size-6 sm:size-7",
                    isSelected ? "opacity-100" : "opacity-45",
                  )}
                  aria-hidden="true"
                />
              </span>
              <span
                className={cn(
                  "text-[9px] font-bold tracking-[0.16em] uppercase sm:text-[10px]",
                  isSelected ? "text-primary" : "text-text-muted",
                )}
              >
                {role.label}
              </span>
            </button>
          );
        })}
      </div>
      {error ? (
        <p className="text-xs text-error" role="alert">
          {error}
        </p>
      ) : null}
    </fieldset>
  );
}
