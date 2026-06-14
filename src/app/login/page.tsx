import type { Metadata } from "next";
import { LoginPage } from "@/features/auth/login-page";

export const metadata: Metadata = {
  title: "Begin Your Journey",
  description: "Begin your Nikkah.com.au journey with intentionality.",
};

export default function Page() {
  return <LoginPage />;
}
