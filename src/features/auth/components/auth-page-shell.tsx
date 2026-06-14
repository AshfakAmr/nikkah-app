import { AuthBrandPanel } from "@/features/auth/components/auth-brand-panel";
import { Header } from "@/components/layout/header";
import { cn } from "@/lib/utils";

type AuthPageShellProps = {
  children: React.ReactNode;
  className?: string;
  signInHref?: string;
};

export function AuthPageShell({
  children,
  className,
  signInHref = "/sign-in",
}: AuthPageShellProps) {
  return (
    <div className={cn("flex min-h-screen flex-col bg-surface-cream", className)}>
      <Header variant="auth" signInHref={signInHref} />

      <div className="grid flex-1 lg:grid-cols-2">
        <AuthBrandPanel className="hidden min-h-[22rem] lg:flex" />
        <div className="flex flex-col bg-surface-cream-2">
          <AuthBrandPanel className="min-h-[18rem] lg:hidden" />
          <div className="flex flex-1 items-center justify-center px-4 py-8 sm:px-8 lg:px-10 lg:py-10 xl:px-14">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
