export type LoginFormValues = {
  email: string;
  password: string;
};

export type LoginFormField = keyof LoginFormValues;

export type LoginFormErrors = Partial<Record<LoginFormField, string>>;

export const emptyLoginForm: LoginFormValues = {
  email: "",
  password: "",
};

export type LoginPayload = LoginFormValues;

export type LoginResponse = {
  token?: string;
  message: string;
};

export type RegisterStepOneValues = {
  role: "bride" | "groom" | "parent" | "guardian" | "";
  fullName: string;
  age: string;
  location: string;
};

export type RegisterStepOneField = keyof RegisterStepOneValues;

export type RegisterStepOneErrors = Partial<Record<RegisterStepOneField, string>>;

export const emptyRegisterStepOneForm: RegisterStepOneValues = {
  role: "bride",
  fullName: "",
  age: "",
  location: "",
};

export type RegisterStepOnePayload = {
  role: "bride" | "groom" | "parent" | "guardian";
  fullName: string;
  age: number;
  location: string;
};

export type RegisterStepOneResponse = {
  registrationId: string;
  nextStep: number;
  message: string;
};
