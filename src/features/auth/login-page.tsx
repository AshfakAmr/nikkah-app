import { AuthPageShell } from "@/features/auth/components/auth-page-shell";
import { AuthFormCard } from "@/features/auth/components/auth-form-card";

export function LoginPage() {
  return (
    <AuthPageShell>
      <AuthFormCard />
    </AuthPageShell>
  );
}
