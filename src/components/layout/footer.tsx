import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  footerQuickLinks,
  footerResourceLinks,
  footerCompactLinks,
  footerCompanyLinks,
  footerLegalLinks,
  type NavItem,
} from "@/lib/nav-config";
import { Container } from "@/components/layout/container";
import { NewsletterForm } from "@/components/layout/newsletter-form";

export type FooterVariant = "full" | "compact" | "directory";

export type FooterProps = {
  variant?: FooterVariant;
  className?: string;
};

function FooterLinkColumn({
  title,
  links,
}: {
  title: string;
  links: NavItem[];
}) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-xs font-semibold uppercase tracking-widest text-primary">
        {title}
      </h3>
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.href + link.label}>
            <Link
              href={link.href}
              className="text-sm text-secondary-alt transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer({ variant = "full", className }: FooterProps) {
  if (variant === "compact") {
    return (
      <footer className={cn("border-t border-border bg-surface-gray py-10", className)}>
        <Container>
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div className="flex flex-col gap-3">
              <Image
                src="/assets/logos/logo.svg"
                alt="Nikkah.com.au"
                width={140}
                height={28}
                className="h-7 w-auto"
              />
              <p className="text-sm text-text-muted">
                © {new Date().getFullYear()} Nikkah.com.au. Built with intentionality
                and faith.
              </p>
            </div>
            <ul className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
              {footerCompactLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </footer>
    );
  }

  if (variant === "directory") {
    return (
      <footer className={cn("border-t border-border bg-surface-beige py-12", className)}>
        <Container>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col gap-3 lg:col-span-1">
              <Image
                src="/assets/logos/logo.svg"
                alt="Nikkah.com.au"
                width={140}
                height={28}
                className="h-7 w-auto"
              />
              <p className="text-sm text-secondary-alt">
                A sanctuary for intentional connections rooted in faith and dignity.
              </p>
            </div>
            <FooterLinkColumn title="Company" links={footerCompanyLinks} />
            <FooterLinkColumn title="Support" links={footerResourceLinks.slice(3, 4)} />
            <FooterLinkColumn title="Legal" links={footerLegalLinks} />
          </div>
          <div className="mt-10 border-t border-border pt-6 text-sm text-text-muted">
            © {new Date().getFullYear()} Nikkah.com.au. All rights reserved.
          </div>
        </Container>
      </footer>
    );
  }

  return (
    <footer className={cn("border-t border-border bg-surface-beige py-14", className)}>
      <Container>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-3">
            <Image
              src="/assets/logos/logo.svg"
              alt="Nikkah.com.au"
              width={140}
              height={28}
              className="h-7 w-auto"
            />
            <p className="text-sm text-secondary-alt">
              Built with intentionality and faith. The premier matrimonial platform
              for the Australian and UAE Muslim community.
            </p>
          </div>
          <FooterLinkColumn title="Quick Links" links={footerQuickLinks} />
          <FooterLinkColumn title="Resources" links={footerResourceLinks} />
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-primary">
              Newsletter
            </h3>
            <NewsletterForm />
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-6 text-center text-sm text-secondary-alt">
          © {new Date().getFullYear()} Nikkah.com.au. Built with intentionality and faith.
        </div>
      </Container>
    </footer>
  );
}
