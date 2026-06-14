import type { LucideIcon } from "lucide-react";
import {
  EyeOff,
  FilePlus2,
  Handshake,
  ShieldCheck,
  Users,
} from "lucide-react";

export const aboutHero = {
  title: "Founded in Faith, Guided by Love",
  description:
    "Creating a dignified, halal path to marriage for the modern Ummah. We believe matrimonial pursuit should be a journey of spiritual growth and shared values.",
} as const;

export const aboutFounder = {
  eyebrow: "A Letter from Our Founder",
  title: "Bringing Intentionality Back to Love",
  paragraphs: [
    "When I founded Nikkah.com.au, my goal wasn't just to build another dating app. I saw a community struggling with the superficiality of modern matchmaking and a generation seeking something deeper—a connection rooted in our shared faith and traditions.",
    "We've curated an experience that respects the gravity of the matrimonial commitment. Every profile is verified, every interaction is intentional, and every success story is a testament to the beauty of a union founded in the Sunnah.",
    "Our platform is a luxury invitation to a life shared with someone who understands your soul's journey. We invite you to find your partner with dignity, grace, and faith.",
  ],
  signature: "Omar Al-Sayed",
  role: "Founder & CEO",
} as const;

export type TimelineMilestone = {
  id: string;
  year: string;
  description: string;
  align: "left" | "right";
};

export const aboutTimeline = {
  title: "Our Journey",
  milestones: [
    {
      id: "2022",
      year: "2022",
      description:
        "Founded in Sydney. The dream begins with a small team of matchmakers dedicated to the Australian community.",
      align: "left",
    },
    {
      id: "2024",
      year: "2024",
      description:
        "Expanding to the UAE. Bridging continents and bringing our premium matrimonial service to the heart of the Middle East.",
      align: "right",
    },
    {
      id: "2025",
      year: "2025",
      description:
        "Reaching 50,000 Verified Members. A global milestone for verified, faith-focused connections worldwide.",
      align: "left",
    },
  ] satisfies TimelineMilestone[],
} as const;

export const aboutVision = {
  eyebrow: "Our Vision",
  quote:
    "To cultivate the world's most dignified digital sanctuary for matrimonial discovery, where faith is the foundation and love is the destination.",
} as const;

export type Pillar = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const aboutPillars = {
  title: "Our Pillars of Purpose",
  items: [
    {
      id: "faith",
      title: "Faith",
      description:
        "Our compass in every decision, ensuring every feature aligns with Islamic principles.",
      icon: FilePlus2,
    },
    {
      id: "trust",
      title: "Trust",
      description:
        "Rigorous verification ensures you connect with genuine souls on the same journey.",
      icon: ShieldCheck,
    },
    {
      id: "privacy",
      title: "Privacy",
      description:
        "Your data and your image are treated with the utmost sanctity and protection.",
      icon: EyeOff,
    },
    {
      id: "family",
      title: "Family",
      description:
        "We design for the long-term, building foundations for generations to come.",
      icon: Users,
    },
    {
      id: "authenticity",
      title: "Authenticity",
      description:
        "Encouraging real, meaningful dialogue over superficial digital interactions.",
      icon: Handshake,
    },
  ] satisfies Pillar[],
} as const;

export const aboutGlobalReach = {
  title: "A Growing Global Ummah",
  description:
    "Our reach extends far beyond borders, connecting Muslims from Sydney to New York, Dubai to London. We are building a global network of intentional matches, facilitated by technology but guided by the heart.",
  regions: [
    ["Australia", "United Kingdom", "USA"],
    ["UAE", "Canada", "India"],
  ] as const,
} as const;

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  /** TODO: Replace with real headshot asset */
  imagePlaceholder: string;
};

export const aboutTeam = {
  title: "The Hearts Behind the Platform",
  subtitle: "A diverse collective of technologists, scholars, and matchmakers.",
  members: [
    {
      id: "omar",
      name: "Omar Al-Sayed",
      role: "Founder & CEO",
      imagePlaceholder: "OA",
    },
    {
      id: "sarah",
      name: "Sarah Mansour",
      role: "Chief of Product",
      imagePlaceholder: "SM",
    },
    {
      id: "zaid",
      name: "Zaid Malik",
      role: "Head of Security",
      imagePlaceholder: "ZM",
    },
    {
      id: "layla",
      name: "Layla Ahmed",
      role: "Community Lead",
      imagePlaceholder: "LA",
    },
  ] satisfies TeamMember[],
} as const;

export type AboutTestimonial = {
  id: string;
  quote: string;
  names: string;
  marriedDate: string;
};

export const aboutTestimonials: AboutTestimonial[] = [
  {
    id: "faiza-ibrahim",
    quote:
      "Finding someone who shared my commitment to faith and career seemed impossible until I joined Nikkah. The verification process and the caliber of members made all the difference. I found my best friend and my spouse.",
    names: "Faiza & Ibrahim",
    marriedDate: "Married June 2024",
  },
  {
    id: "aisha-yusuf",
    quote:
      "Nikkah gave us a dignified space to connect with intention. Our families were involved from the start, and we never felt pressured to compromise our values.",
    names: "Aisha & Yusuf",
    marriedDate: "Married March 2024",
  },
];

export const aboutCta = {
  title: "Your Halal Journey Starts Here",
  description:
    "Join a community of 50,000+ members seeking a lifetime of shared faith and purpose.",
  buttonLabel: "Join our Community",
  buttonHref: "/register",
  caption: "Application only • Verification required",
} as const;
