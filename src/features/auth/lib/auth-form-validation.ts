import type {
  LoginFormErrors,
  LoginFormField,
  LoginFormValues,
  RegisterStepOneErrors,
  RegisterStepOneField,
  RegisterStepOneValues,
} from "@/features/auth/types/auth-form";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateLoginForm(values: LoginFormValues): LoginFormErrors {
  const errors: LoginFormErrors = {};

  const email = values.email.trim();
  if (!email) {
    errors.email = "Email address is required.";
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.password) {
    errors.password = "Password is required.";
  } else if (values.password.length < 8) {
    errors.password = "Password must be at least 8 characters.";
  }

  return errors;
}

export function validateRegisterStepOneForm(
  values: RegisterStepOneValues,
): RegisterStepOneErrors {
  const errors: RegisterStepOneErrors = {};

  if (!values.role) {
    errors.role = "Please select your role.";
  }

  const fullName = values.fullName.trim();
  if (!fullName) {
    errors.fullName = "Full name is required.";
  } else if (fullName.length < 2) {
    errors.fullName = "Full name must be at least 2 characters.";
  }

  const age = Number(values.age);
  if (!values.age.trim()) {
    errors.age = "Age is required.";
  } else if (Number.isNaN(age) || age < 18 || age > 99) {
    errors.age = "Enter a valid age between 18 and 99.";
  }

  const location = values.location.trim();
  if (!location) {
    errors.location = "Location is required.";
  }

  return errors;
}

export function hasFormErrors<T extends object>(errors: T): boolean {
  return Object.keys(errors).length > 0;
}

export function sanitizeLoginForm(values: LoginFormValues): LoginFormValues {
  return {
    email: values.email.trim(),
    password: values.password,
  };
}

export function sanitizeRegisterStepOneForm(
  values: RegisterStepOneValues,
): RegisterStepOneValues {
  return {
    role: values.role,
    fullName: values.fullName.trim(),
    age: values.age.trim(),
    location: values.location.trim(),
  };
}

export type { LoginFormField, RegisterStepOneField };
