"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { AuthTrustFooter } from "@/features/auth/components/auth-trust-footer";
import { loginFormCopy } from "@/features/auth/data/auth-content";
import {
  hasFormErrors,
  sanitizeLoginForm,
  validateLoginForm,
} from "@/features/auth/lib/auth-form-validation";
import { loginMember } from "@/features/auth/services/auth.service";
import type { LoginFormErrors, LoginFormField, LoginFormValues } from "@/features/auth/types/auth-form";
import { emptyLoginForm } from "@/features/auth/types/auth-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function LoginFormCard() {
  const [values, setValues] = useState<LoginFormValues>(emptyLoginForm);
  const [errors, setErrors] = useState<LoginFormErrors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const updateField = (field: LoginFormField, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
    setFormError(null);
    setIsSuccess(false);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const sanitized = sanitizeLoginForm(values);
    const nextErrors = validateLoginForm(sanitized);

    if (hasFormErrors(nextErrors)) {
      setErrors(nextErrors);
      return;
    }

    setIsSubmitting(true);
    setFormError(null);

    try {
      await loginMember(sanitized);
      setIsSuccess(true);
    } catch {
      setFormError("Unable to sign in right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-[28rem]">
      <div className="rounded-2xl border border-border/70 bg-surface-white p-6 shadow-card sm:p-8 lg:p-9">
        <header className="mb-7 text-center">
          <h2 className="font-serif text-[1.75rem] leading-tight text-text-primary sm:text-[1.875rem]">
            {loginFormCopy.title}
          </h2>
          <p className="mt-2 text-sm text-text-secondary">{loginFormCopy.subtitle}</p>
        </header>

        {isSuccess ? (
          <div
            className="mb-6 rounded-xl border border-success/30 bg-success/5 px-4 py-3 text-sm text-success"
            role="status"
          >
            Signed in successfully. Your dashboard will be available soon.
          </div>
        ) : null}

        <form className="flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
          <Input
            id="login-email"
            type="email"
            autoComplete="email"
            label={loginFormCopy.emailLabel}
            placeholder={loginFormCopy.emailPlaceholder}
            value={values.email}
            onChange={(event) => updateField("email", event.target.value)}
            error={errors.email}
          />

          <Input
            id="login-password"
            type="password"
            autoComplete="current-password"
            label={loginFormCopy.passwordLabel}
            placeholder={loginFormCopy.passwordPlaceholder}
            value={values.password}
            onChange={(event) => updateField("password", event.target.value)}
            error={errors.password}
          />

          <div className="flex justify-end">
            <Link
              href="/contact-us"
              className="text-xs font-semibold text-primary hover:underline"
            >
              {loginFormCopy.forgotPasswordLabel}
            </Link>
          </div>

          {formError ? (
            <p className="text-sm text-error" role="alert">
              {formError}
            </p>
          ) : null}

          <Button
            type="submit"
            size="lg"
            className="w-full rounded-xl uppercase tracking-[0.14em] shadow-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Signing in…" : loginFormCopy.submitLabel}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-text-secondary">
          {loginFormCopy.registerPrompt}{" "}
          <Link href="/login" className="font-semibold text-primary hover:underline">
            {loginFormCopy.registerLinkLabel}
          </Link>
        </p>

        <AuthTrustFooter
          privacyHref={loginFormCopy.privacyHref}
          privacyLabel={loginFormCopy.privacyLabel}
          insideCard
          className="mt-7"
        />
      </div>
    </div>
  );
}
