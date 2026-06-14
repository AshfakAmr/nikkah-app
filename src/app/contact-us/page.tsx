import type { Metadata } from "next";
import { ContactPage } from "@/features/contact-us/contact-page";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Nikkah.com.au for support, matchmaking guidance, and membership inquiries.",
};

export default function Page() {
  return <ContactPage />;
}
