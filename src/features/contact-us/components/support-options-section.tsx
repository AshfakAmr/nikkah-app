import { contactMethods } from "@/features/contact-us/data/contact-content";
import { ContactMethodCard } from "@/features/contact-us/components/contact-method-card";
import { Container } from "@/components/layout/container";

export function SupportOptionsSection() {
  return (
    <section aria-label="Contact methods" className="bg-surface-dark pb-12 md:pb-16">
      <Container>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {contactMethods.map((method) => (
            <li key={method.id}>
              <ContactMethodCard method={method} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
