"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { primaryNavItems } from "@/lib/nav-config";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Drawer } from "@/components/ui/drawer";

export type HeaderProps = {
  className?: string;
  variant?: "default" | "auth";
  signInHref?: string;
};

export function Header({
  className,
  variant = "default",
  signInHref = "/sign-in",
}: HeaderProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 border-b border-border bg-surface-white/95 backdrop-blur-sm",
          variant === "auth" && "bg-surface-white",
          className,
        )}
      >
        <Container>
          <div className="flex h-[4.5rem] items-center justify-between gap-4">
            <Link href="/" className="shrink-0" aria-label="Nikkah.com.au home">
              <Image
                src="/assets/logos/logo.svg"
                alt="Nikkah.com.au"
                width={160}
                height={32}
                priority
                className="h-8 w-auto"
              />
            </Link>

            <nav
              aria-label="Primary navigation"
              className="hidden items-center gap-8 lg:flex"
            >
              {primaryNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "transition-colors hover:text-primary",
                    variant === "auth"
                      ? "text-[11px] font-semibold tracking-[0.14em] uppercase"
                      : "text-sm font-medium",
                    isActive(item.href)
                      ? variant === "auth"
                        ? "text-primary"
                        : "text-primary underline decoration-primary decoration-2 underline-offset-8"
                      : "text-text-secondary",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {variant === "auth" ? (
              pathname === "/sign-in" ? (
                <Button
                  href="/login"
                  variant="outline"
                  size="sm"
                  className="hidden uppercase tracking-[0.12em] lg:inline-flex"
                >
                  Join Now
                </Button>
              ) : (
                <Button
                  href={signInHref}
                  variant="outline"
                  size="sm"
                  className="hidden uppercase tracking-[0.12em] lg:inline-flex"
                >
                  Sign In
                </Button>
              )
            ) : (
              <div className="hidden items-center gap-3 lg:flex">
                <Link
                  href="/sign-in"
                  className="text-sm font-medium text-text-secondary transition-colors hover:text-primary"
                >
                  Log In
                </Link>
                <Button href="/login" size="sm">
                  Join Now
                </Button>
              </div>
            )}

            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              aria-label="Open navigation menu"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="size-5" />
            </Button>
          </div>
        </Container>
      </header>

      <Drawer
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        title="Menu"
        side="right"
      >
        <nav aria-label="Mobile navigation" className="flex flex-col gap-2">
          {primaryNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive(item.href)
                  ? "bg-primary/10 text-primary"
                  : "text-text-secondary hover:bg-surface-gray",
              )}
            >
              {item.label}
            </Link>
          ))}
          <hr className="my-2 border-border" />
          <Link
            href="/sign-in"
            onClick={() => setMobileOpen(false)}
            className="rounded-lg px-3 py-2 text-sm font-medium text-text-secondary hover:bg-surface-gray"
          >
            Log In
          </Link>
          <Button fullWidth href="/login">
            Join Now
          </Button>
        </nav>
      </Drawer>
    </>
  );
}
