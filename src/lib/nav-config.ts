export type NavItem = {
  label: string;
  href: string;
};

export const primaryNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Featured Profile", href: "/featured" },
  { label: "Contact Us", href: "/contact-us" },
];

export const footerQuickLinks: NavItem[] = [
  { label: "Our Vision", href: "/about-us" },
  { label: "How It Works", href: "/#journey" },
  { label: "Safety Guidelines", href: "/contact-us" },
  { label: "FAQ", href: "/#faq" },
];

export const footerResourceLinks: NavItem[] = [
  { label: "Islamic Marriage Guide", href: "/about-us" },
  { label: "Privacy Policy", href: "/contact-us" },
  { label: "Terms of Service", href: "/contact-us" },
  { label: "Contact Us", href: "/contact-us" },
];

export const footerCompanyLinks: NavItem[] = [
  { label: "About Us", href: "/about-us" },
  { label: "Featured Profiles", href: "/featured" },
  { label: "Support", href: "/contact-us" },
];

export const footerLegalLinks: NavItem[] = [
  { label: "Privacy Statement", href: "/contact-us" },
  { label: "Terms of Service", href: "/contact-us" },
  { label: "Cookie Settings", href: "/contact-us" },
];

export const footerCompactLinks: NavItem[] = [
  { label: "The Marriage Journal", href: "/about-us" },
  { label: "Privacy Statement", href: "/contact-us" },
  { label: "Terms of Service", href: "/contact-us" },
  { label: "Cookie Settings", href: "/contact-us" },
  { label: "Contact Concierge", href: "/contact-us" },
];
