import type { Metadata } from "next";
import { SignInPage } from "@/features/auth/sign-in-page";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your Nikkah.com.au account.",
};

export default function Page() {
  return <SignInPage />;
}
