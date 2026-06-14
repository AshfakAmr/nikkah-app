"use client";

import { useState, type FormEvent } from "react";
import { AuthTrustFooter } from "@/features/auth/components/auth-trust-footer";
import { ProgressSteps } from "@/features/auth/components/progress-steps";
import { RoleSelector } from "@/features/auth/components/role-selector";
import { SocialAuthButtons } from "@/features/auth/components/social-auth-buttons";
import {
  authRoles,
  registerStepOneCopy,
  registerSuccessCopy,
} from "@/features/auth/data/auth-content";
import {
  hasFormErrors,
  sanitizeRegisterStepOneForm,
  validateRegisterStepOneForm,
} from "@/features/auth/lib/auth-form-validation";
import { submitRegisterStepOne } from "@/features/auth/services/auth.service";
import type {
  RegisterStepOneErrors,
  RegisterStepOneField,
  RegisterStepOneValues,
} from "@/features/auth/types/auth-form";
import { emptyRegisterStepOneForm } from "@/features/auth/types/auth-form";
import type { AuthRole } from "@/features/auth/data/auth-content";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function AuthFormCard() {
  const [values, setValues] = useState<RegisterStepOneValues>(emptyRegisterStepOneForm);
  const [errors, setErrors] = useState<RegisterStepOneErrors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const updateField = (field: RegisterStepOneField, value: string) => {
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

  const handleRoleChange = (role: AuthRole) => {
    updateField("role", role);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const sanitized = sanitizeRegisterStepOneForm(values);
    const nextErrors = validateRegisterStepOneForm(sanitized);

    if (hasFormErrors(nextErrors)) {
      setErrors(nextErrors);
      return;
    }

    if (!sanitized.role) {
      setErrors({ role: "Please select your role." });
      return;
    }

    setIsSubmitting(true);
    setFormError(null);

    try {
      await submitRegisterStepOne({
        role: sanitized.role,
        fullName: sanitized.fullName,
        age: Number(sanitized.age),
        location: sanitized.location,
      });
      setIsSuccess(true);
    } catch {
      setFormError("Unable to save your details right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-[28rem]">
      <div className="rounded-2xl border border-border/70 bg-surface-white p-6 shadow-card sm:p-8 lg:p-9">
        <ProgressSteps
          totalSteps={registerStepOneCopy.totalSteps}
          currentStep={registerStepOneCopy.currentStep}
          className="mb-7"
        />

        <header className="mb-7 text-center">
          <h2 className="font-serif text-[1.75rem] leading-tight text-text-primary sm:text-[1.875rem]">
            {registerStepOneCopy.title}
          </h2>
          <p className="mt-2 text-sm text-text-secondary">{registerStepOneCopy.subtitle}</p>
        </header>

        {isSuccess ? (
          <div
            className="mb-6 rounded-xl border border-success/30 bg-success/5 px-4 py-3 text-sm text-success"
            role="status"
          >
            <p className="font-semibold">{registerSuccessCopy.title}</p>
            <p className="mt-1">{registerSuccessCopy.message}</p>
          </div>
        ) : null}

        <SocialAuthButtons
          googleLabel={registerStepOneCopy.socialGoogleLabel}
          appleLabel={registerStepOneCopy.socialAppleLabel}
          className="mb-6"
        />

        <div className="relative mb-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-border" />
          <span className="text-[9px] font-semibold tracking-[0.16em] text-text-muted uppercase sm:text-[10px]">
            {registerStepOneCopy.dividerLabel}
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <form className="flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
          <RoleSelector
            roles={authRoles}
            value={values.role}
            onChange={handleRoleChange}
            error={errors.role}
            label={registerStepOneCopy.roleLabel}
          />

          <Input
            id="register-full-name"
            type="text"
            autoComplete="name"
            label={registerStepOneCopy.fullNameLabel}
            placeholder={registerStepOneCopy.fullNamePlaceholder}
            value={values.fullName}
            onChange={(event) => updateField("fullName", event.target.value)}
            error={errors.fullName}
          />

          <div className="grid grid-cols-[minmax(0,0.85fr)_minmax(0,1.35fr)] gap-4">
            <Input
              id="register-age"
              type="number"
              inputMode="numeric"
              min={18}
              max={99}
              label={registerStepOneCopy.ageLabel}
              placeholder={registerStepOneCopy.agePlaceholder}
              value={values.age}
              onChange={(event) => updateField("age", event.target.value)}
              error={errors.age}
            />
            <Input
              id="register-location"
              type="text"
              autoComplete="address-level2"
              label={registerStepOneCopy.locationLabel}
              placeholder={registerStepOneCopy.locationPlaceholder}
              value={values.location}
              onChange={(event) => updateField("location", event.target.value)}
              error={errors.location}
            />
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
            {isSubmitting ? "Saving…" : registerStepOneCopy.submitLabel}
          </Button>
        </form>

        <AuthTrustFooter
          privacyHref={registerStepOneCopy.privacyHref}
          privacyLabel={registerStepOneCopy.privacyLabel}
          insideCard
          className="mt-7"
        />
      </div>
    </div>
  );
}
