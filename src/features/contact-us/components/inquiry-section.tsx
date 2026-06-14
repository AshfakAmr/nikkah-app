"use client";

import { useState, type FormEvent } from "react";
import {
  contactFormFields,
  contactInquiry,
} from "@/features/contact-us/data/contact-content";
import {
  hasContactFormErrors,
  sanitizeContactInquiryForm,
  validateContactInquiryForm,
} from "@/features/contact-us/lib/contact-form-validation";
import { submitContactInquiry } from "@/features/contact-us/services/contact.service";
import type {
  ContactInquiryFormErrors,
  ContactInquiryFormField,
  ContactInquiryFormValues,
} from "@/features/contact-us/types/contact-form";
import { emptyContactInquiryForm } from "@/features/contact-us/types/contact-form";
import { LocationMapCard } from "@/features/contact-us/components/location-map-card";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export function InquirySection() {
  const [values, setValues] = useState<ContactInquiryFormValues>(emptyContactInquiryForm);
  const [errors, setErrors] = useState<ContactInquiryFormErrors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const updateField = (field: ContactInquiryFormField, value: string) => {
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

    const sanitized = sanitizeContactInquiryForm(values);
    const nextErrors = validateContactInquiryForm(sanitized);
    setErrors(nextErrors);

    if (hasContactFormErrors(nextErrors)) {
      return;
    }

    setIsSubmitting(true);
    setFormError(null);

    try {
      await submitContactInquiry(sanitized);
      setIsSuccess(true);
      setValues(emptyContactInquiryForm);
    } catch {
      setFormError("We couldn't send your inquiry right now. Please try again shortly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section aria-labelledby="contact-inquiry-heading" className="bg-surface-dark py-12 md:py-16">
      <Container>
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <article className="rounded-3xl bg-surface-white p-6 shadow-card md:p-8">
            <h2
              id="contact-inquiry-heading"
              className="mb-6 font-serif text-3xl text-text-primary md:text-4xl"
            >
              {contactInquiry.title}
            </h2>

            {isSuccess ? (
              <div
                role="status"
                className="rounded-2xl border border-success/20 bg-success/5 px-5 py-4"
              >
                <p className="font-semibold text-text-primary">{contactInquiry.successTitle}</p>
                <p className="mt-2 text-sm text-text-secondary">{contactInquiry.successMessage}</p>
              </div>
            ) : null}

            <form
              noValidate
              onSubmit={handleSubmit}
              className={cn("flex flex-col gap-5", isSuccess && "mt-6")}
            >
              <Input
                label={contactFormFields.fullName.label}
                name="fullName"
                autoComplete="name"
                placeholder={contactFormFields.fullName.placeholder}
                value={values.fullName}
                error={errors.fullName}
                required
                onChange={(event) => updateField("fullName", event.target.value)}
              />
              <Input
                label={contactFormFields.email.label}
                name="email"
                type="email"
                autoComplete="email"
                placeholder={contactFormFields.email.placeholder}
                value={values.email}
                error={errors.email}
                required
                onChange={(event) => updateField("email", event.target.value)}
              />
              <Input
                label={contactFormFields.phone.label}
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder={contactFormFields.phone.placeholder}
                value={values.phone}
                error={errors.phone}
                onChange={(event) => updateField("phone", event.target.value)}
              />
              <Textarea
                label={contactFormFields.message.label}
                name="message"
                rows={5}
                placeholder={contactFormFields.message.placeholder}
                value={values.message}
                error={errors.message}
                required
                onChange={(event) => updateField("message", event.target.value)}
              />

              {formError ? (
                <p className="text-sm text-error" role="alert">
                  {formError}
                </p>
              ) : null}

              <Button
                type="submit"
                fullWidth
                isLoading={isSubmitting}
                className="uppercase tracking-wide"
                size="lg"
              >
                {contactInquiry.submitLabel}
              </Button>
            </form>
          </article>

          <LocationMapCard />
        </div>
      </Container>
    </section>
  );
}
