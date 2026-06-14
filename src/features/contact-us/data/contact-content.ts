export const contactHero = {
  title: "Need Assistance?",
  subtitle: "We're Here To Help.",
} as const;

export type ContactMethod = {
  id: string;
  title: string;
  detail: string;
  href?: string;
  icon: "mail" | "message-square" | "phone" | "messages-square";
};

export const contactMethods: ContactMethod[] = [
  {
    id: "email",
    title: "Email",
    detail: "support@nikkah.com.au",
    href: "mailto:support@nikkah.com.au",
    icon: "mail",
  },
  {
    id: "whatsapp",
    title: "WhatsApp",
    detail: "+61 400 000 000",
    href: "https://wa.me/61400000000",
    icon: "message-square",
  },
  {
    id: "phone",
    title: "Phone",
    detail: "1800 NIKKAH",
    href: "tel:1800NIKKAH",
    icon: "phone",
  },
  {
    id: "live-chat",
    title: "Live Chat",
    detail: "Available 9am - 5pm AEST",
    icon: "messages-square",
  },
];

export const contactInquiry = {
  title: "Send an Inquiry",
  submitLabel: "Send Inquiry",
  successTitle: "Inquiry received",
  successMessage:
    "Thank you for reaching out. Our matchmaking team will respond within one business day.",
} as const;

export const contactLocation = {
  label: "Our Headquarters",
  address: "Level 42, 100 Barangaroo Avenue, Sydney NSW 2000, Australia",
} as const;

export type ContactFaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const contactFaq = {
  title: "Frequently Asked Questions",
  items: [
    {
      id: "safety",
      question: "How does Nikkah.com.au ensure profile safety?",
      answer:
        "Every profile is manually verified, monitored for suspicious activity, and supported by privacy controls that let you decide who sees your photos and contact details.",
    },
    {
      id: "halal-circle",
      question: "What is a Halal Circle?",
      answer:
        "Halal Circle is our guided communication framework that encourages intentional, respectful dialogue with optional family or wali involvement when you are ready.",
    },
    {
      id: "wali",
      question: "Can my Wali be involved?",
      answer:
        "Yes. You can invite your wali or a trusted family member to participate in conversations and profile review at any stage of your journey.",
    },
    {
      id: "password",
      question: "How do I reset my password?",
      answer:
        "Select Forgot Password on the login screen and follow the secure email link. Our support team can also assist if you no longer have access to your registered email.",
    },
  ] satisfies ContactFaqItem[],
} as const;

export const contactCta = {
  title: "Talk to our Matchmaking Experts",
  description:
    "Discover how our bespoke approach to matrimonial connection can help you find your perfect match with intentionality and grace.",
  buttonLabel: "Schedule a Consultation",
  buttonHref: "/register",
} as const;

export const contactFormFields = {
  fullName: {
    label: "Full Name",
    placeholder: "Aisha Rahman",
  },
  email: {
    label: "Email Address",
    placeholder: "aisha@example.com",
  },
  phone: {
    label: "Phone Number",
    placeholder: "+61 000 000 000",
  },
  message: {
    label: "Message",
    placeholder: "How can our matchmaking team assist you?",
  },
} as const;
