import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/header";
import { Footer, type FooterVariant } from "@/components/layout/footer";

export type PageShellProps = {
  children: ReactNode;
  className?: string;
  mainClassName?: string;
  showHeader?: boolean;
  showFooter?: boolean;
  footerVariant?: FooterVariant;
};

export function PageShell({
  children,
  className,
  mainClassName,
  showHeader = true,
  showFooter = true,
  footerVariant = "full",
}: PageShellProps) {
  return (
    <div className={cn("flex min-h-screen flex-col", className)}>
      {showHeader ? <Header /> : null}
      <main className={cn("flex-1", mainClassName)}>{children}</main>
      {showFooter ? <Footer variant={footerVariant} /> : null}
    </div>
  );
}
