import { AuthPageShell } from "@/features/auth/components/auth-page-shell";
import { LoginFormCard } from "@/features/auth/components/login-form-card";

export function SignInPage() {
  return (
    <AuthPageShell signInHref="/sign-in">
      <LoginFormCard />
    </AuthPageShell>
  );
}
