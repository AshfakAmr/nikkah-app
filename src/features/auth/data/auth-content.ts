export type AuthRole = "bride" | "groom" | "parent" | "guardian";

export type AuthRoleOption = {
  id: AuthRole;
  label: string;
  iconSrc: string;
};

export const authRoles: AuthRoleOption[] = [
  { id: "bride", label: "Bride", iconSrc: "/assets/icons/login-bride.svg" },
  { id: "groom", label: "Groom", iconSrc: "/assets/icons/login-groom.svg" },
  { id: "parent", label: "Parent", iconSrc: "/assets/icons/login-parent.svg" },
  { id: "guardian", label: "Guardian", iconSrc: "/assets/icons/login-guardian.svg" },
];

export const authBrand = {
  backgroundSrc: "/assets/images/login-bg.png",
  headline: "Begin Your Journey with Intentionality.",
  features: [
    {
      id: "verified",
      title: "Verified Profiles",
      description:
        "Every member is manually vetted for your safety and peace of mind.",
    },
    {
      id: "safe",
      title: "Safe Communication",
      description:
        "Connect through our moderated, privacy-first interface designed for dignity.",
    },
    {
      id: "faith",
      title: "Faith-Based Matching",
      description:
        "Find partners who align with your spiritual and lifestyle goals.",
    },
  ],
  testimonial: {
    quote:
      "The verification process gave me such peace of mind. It feels respectful and safe.",
    attribution: "Sarah, Sydney",
  },
} as const;

export const loginFormCopy = {
  title: "Welcome back",
  subtitle: "Sign in to continue your journey with intentionality.",
  emailLabel: "Email Address",
  emailPlaceholder: "you@example.com",
  passwordLabel: "Password",
  passwordPlaceholder: "Enter your password",
  submitLabel: "Sign In",
  forgotPasswordLabel: "Forgot password?",
  registerPrompt: "New to Nikkah.com.au?",
  registerLinkLabel: "Create your profile",
  trustBadges: ["Verified", "Encrypted", "Private"] as const,
  privacyLabel: "Privacy is our promise",
  privacyHref: "/contact-us",
} as const;

export const registerStepOneCopy = {
  totalSteps: 5,
  currentStep: 1,
  title: "Tell us about yourself.",
  subtitle: "Step 1 of 5: Primary Identity",
  roleLabel: "I am a:",
  socialGoogleLabel: "Google",
  socialAppleLabel: "Apple",
  dividerLabel: "Or continue with email",
  fullNameLabel: "Full Name",
  fullNamePlaceholder: "e.g. Abdullah bin Ahmed",
  ageLabel: "Age",
  agePlaceholder: "24",
  locationLabel: "Location",
  locationPlaceholder: "Sydney, NSW",
  submitLabel: "Continue to Step 2",
  loginPrompt: "Already a member?",
  loginLinkLabel: "Sign in",
  trustBadges: ["Verified", "Encrypted", "Private"] as const,
  privacyLabel: "Privacy is our promise",
  privacyHref: "/contact-us",
} as const;

export const registerSuccessCopy = {
  title: "Step saved",
  message: "Your details have been saved locally. Step 2 will be available soon.",
} as const;
