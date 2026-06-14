import type {
  ContactInquiryFormErrors,
  ContactInquiryFormField,
  ContactInquiryFormValues,
} from "@/features/contact-us/types/contact-form";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[+]?[\d\s()-]{7,20}$/;

function setError(
  errors: ContactInquiryFormErrors,
  field: ContactInquiryFormField,
  message: string,
) {
  errors[field] = message;
}

export function validateContactInquiryForm(
  values: ContactInquiryFormValues,
): ContactInquiryFormErrors {
  const errors: ContactInquiryFormErrors = {};

  const fullName = values.fullName.trim();
  if (!fullName) {
    setError(errors, "fullName", "Full name is required.");
  } else if (fullName.length < 2) {
    setError(errors, "fullName", "Full name must be at least 2 characters.");
  }

  const email = values.email.trim();
  if (!email) {
    setError(errors, "email", "Email address is required.");
  } else if (!EMAIL_PATTERN.test(email)) {
    setError(errors, "email", "Enter a valid email address.");
  }

  const phone = values.phone.trim();
  if (phone && !PHONE_PATTERN.test(phone)) {
    setError(errors, "phone", "Enter a valid phone number.");
  }

  const message = values.message.trim();
  if (!message) {
    setError(errors, "message", "Message is required.");
  } else if (message.length < 10) {
    setError(errors, "message", "Message must be at least 10 characters.");
  }

  return errors;
}

export function hasContactFormErrors(errors: ContactInquiryFormErrors): boolean {
  return Object.keys(errors).length > 0;
}

export function sanitizeContactInquiryForm(
  values: ContactInquiryFormValues,
): ContactInquiryFormValues {
  return {
    fullName: values.fullName.trim(),
    email: values.email.trim(),
    phone: values.phone.trim(),
    message: values.message.trim(),
  };
}
