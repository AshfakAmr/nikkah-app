import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Headset,
  Heart,
  Lock,
  Moon,
  Search,
  ShieldCheck,
  UserPlus,
  Users,
} from "lucide-react";
import {
  muslimCouplePhoto,
  muslimManPortrait,
  muslimWomanPortrait,
} from "@/lib/stock-images";

export const homeHero = {
  eyebrow: "Faith-First Matrimony",
  title: "Find Your Blessed Life Partner",
  description:
    "A sanctuary for intentional connections. Our verified platform combines modern compatibility with traditional values to help you find your soulmate across Australia and the UAE.",
  primaryCta: { label: "Create Profile", href: "/register" },
  secondaryCta: { label: "Browse Profiles", href: "/featured" },
  cardStackAlt: "Featured member profile preview",
} as const;

export const homeStats = [
  { value: "50,000+", label: "Active Profiles" },
  { value: "15,000+", label: "Success Stories" },
  { value: "100%", label: "Identity Verified" },
  { value: "AU & UAE", label: "Regional Focus" },
] as const;

export type JourneyStep = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accent: "primary" | "secondary";
  align: "left" | "right";
};

export const homeJourney = {
  title: "Your Journey to Sunnah",
  subtitle:
    "A simple, dignified process designed to protect your privacy and uphold Islamic values.",
  steps: [
    {
      id: "create-profile",
      title: "Create Profile",
      description:
        "Highlight your values, personality, and what you're looking for in a partner.",
      icon: UserPlus,
      accent: "primary",
      align: "left",
    },
    {
      id: "get-verified",
      title: "Get Verified",
      description:
        "Our dedicated team manually verifies every profile to ensure a safe, high-quality environment.",
      icon: ShieldCheck,
      accent: "secondary",
      align: "right",
    },
    {
      id: "connect-proceed",
      title: "Connect & Proceed",
      description:
        "Communicate safely and involve families when you're ready to take the next step.",
      icon: Heart,
      accent: "primary",
      align: "left",
    },
  ] satisfies JourneyStep[],
} as const;

export type ProfileBadge = "premium" | "new";

export type FeaturedProfile = {
  id: string;
  name: string;
  age: number;
  profession: string;
  location: string;
  badge?: ProfileBadge;
  /** High-quality Muslim portrait (Unsplash). Falls back to imagePlaceholder when absent. */
  imageSrc?: string;
  imagePlaceholder: string;
};

export const homeFeaturedProfiles = {
  title: "Featured Profiles",
  subtitle: "Profiles that align with your search criteria.",
  viewAllHref: "/featured",
  bride: [
    {
      id: "sara",
      name: "Sara",
      age: 25,
      profession: "Doctor",
      location: "Sydney",
      badge: "premium",
      imageSrc: muslimWomanPortrait(0),
      imagePlaceholder: "S",
    },
    {
      id: "laila",
      name: "Laila",
      age: 27,
      profession: "Designer",
      location: "Perth",
      badge: "new",
      imageSrc: muslimWomanPortrait(1),
      imagePlaceholder: "L",
    },
    {
      id: "amina",
      name: "Amina",
      age: 24,
      profession: "Engineer",
      location: "Brisbane",
      imageSrc: muslimWomanPortrait(2),
      imagePlaceholder: "A",
    },
    {
      id: "mariam",
      name: "Mariam",
      age: 28,
      profession: "Teacher",
      location: "Adelaide",
      imageSrc: muslimWomanPortrait(3),
      imagePlaceholder: "M",
    },
  ] satisfies FeaturedProfile[],
  groom: [
    {
      id: "hamza",
      name: "Hamza",
      age: 31,
      profession: "Architect",
      location: "Dubai",
      badge: "premium",
      imageSrc: muslimManPortrait(0),
      imagePlaceholder: "H",
    },
    {
      id: "omar",
      name: "Omar",
      age: 29,
      profession: "Engineer",
      location: "Melbourne",
      badge: "new",
      imageSrc: muslimManPortrait(1),
      imagePlaceholder: "O",
    },
    {
      id: "yusuf",
      name: "Yusuf",
      age: 32,
      profession: "Doctor",
      location: "Sydney",
      imageSrc: muslimManPortrait(2),
      imagePlaceholder: "Y",
    },
    {
      id: "zaid",
      name: "Zaid",
      age: 27,
      profession: "Consultant",
      location: "Brisbane",
      imageSrc: muslimManPortrait(3),
      imagePlaceholder: "Z",
    },
  ] satisfies FeaturedProfile[],
} as const;

export type HomeFeature = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const homeFeatures = {
  title: "Designed for the Modern Ummah",
  subtitle:
    "We've built more than just an app; we've created a safe space where tradition meets technology.",
  items: [
    {
      id: "verified",
      title: "Verified Profiles",
      description:
        "Every single user is manually vetted to prevent spam and ensure serious intentions.",
      icon: BadgeCheck,
    },
    {
      id: "privacy",
      title: "Privacy First",
      description:
        "You control who sees your photos and details. Safety is our non-negotiable priority.",
      icon: Lock,
    },
    {
      id: "family",
      title: "Family Friendly",
      description:
        "Features built to facilitate chaperone involvement and family introductions.",
      icon: Users,
    },
    {
      id: "faith",
      title: "Faith Based Matching",
      description:
        "Search by religious practices, values, and lifestyle preferences.",
      icon: Moon,
    },
    {
      id: "search",
      title: "Advanced Search",
      description:
        "Intelligent filters to help you find precisely what you're looking for in a partner.",
      icon: Search,
    },
    {
      id: "support",
      title: "Dedicated Support",
      description:
        "Our team is available 24/7 to help you navigate your journey to marriage.",
      icon: Headset,
    },
  ] satisfies HomeFeature[],
} as const;

export type Testimonial = {
  id: string;
  names: string;
  marriedDate: string;
  quote: string;
  /** Muslim wedding couple photo (single image). */
  imageSrc?: string;
  imagePlaceholder: string;
};

export const homeTestimonials = {
  title: "Success Stories",
  subtitle: "Joined in faith, united by Nikkah.com.au",
  items: [
    {
      id: "ahmed-farrah",
      names: "Ahmed & Farrah",
      marriedDate: "August 2023",
      quote:
        "We found each other through the verified search. The platform's emphasis on faith made us both feel comfortable from the start.",
      imageSrc: muslimCouplePhoto(0),
      imagePlaceholder: "AF",
    },
    {
      id: "yusuf-sarah",
      names: "Yusuf & Sarah",
      marriedDate: "June 2024",
      quote:
        "The mobile app made it so easy to stay connected. We are so grateful for this intentional way of meeting our life partners.",
      imageSrc: muslimCouplePhoto(1),
      imagePlaceholder: "YS",
    },
  ] satisfies Testimonial[],
} as const;

export const homeQuote = {
  text: "And of His signs is that He created for you from yourselves mates that you may find tranquillity in them...",
  citation: "Quran 30:21",
} as const;

export const homeAppPromo = {
  title: "Take Nikkah.com.au Everywhere",
  description:
    "Experience our premium matching service on the go. Secure, private, and designed for meaningful interaction wherever you are.",
  appStoreLabel: "Download on the App Store",
  googlePlayLabel: "Get it on Google Play",
  mockupAlt: "Nikkah.com.au mobile app on iPhone",
} as const;

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const homeFaq = {
  title: "Frequently Asked Questions",
  subtitle: "Common questions about our matrimonial process.",
  items: [
    {
      id: "verify",
      question: "How do you verify profiles?",
      answer:
        "We use a multi-step verification process including ID checks and manual social presence verification by our team to ensure all members are genuine.",
    },
    {
      id: "privacy",
      question: "Is my privacy protected?",
      answer:
        "Yes. You control photo visibility, who can contact you, and what details are shared. Your data is encrypted and never sold to third parties.",
    },
    {
      id: "parents",
      question: "Can my parents be involved?",
      answer:
        "Absolutely. Our platform supports wali and family involvement with dedicated features for chaperoned introductions when you are ready.",
    },
  ] satisfies FaqItem[],
} as const;

export const homeCta = {
  title: "Ready to find your soulmate?",
  description:
    "Join thousands of intentional Muslims searching for a blessed connection today.",
  buttonLabel: "Create Your Free Profile",
  buttonHref: "/register",
  caption: "Takes less than 2 minutes to get started",
} as const;
