"use client";

import { SendHorizonal } from "lucide-react";

export function NewsletterForm() {
  return (
    <form
      className="flex flex-col gap-3"
      onSubmit={(event) => event.preventDefault()}
    >
      <p className="text-sm text-secondary-alt">
        Receive occasional advice on preparing for marriage.
      </p>
      <div className="flex gap-2">
        <input
          type="email"
          name="email"
          placeholder="Email address"
          aria-label="Email address"
          className="h-10 min-w-0 flex-1 rounded-lg border border-border bg-surface-white px-3 text-sm text-text-primary placeholder:text-text-muted/70 focus:border-primary focus:outline-none"
        />
        <button
          type="submit"
          aria-label="Subscribe to newsletter"
          className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary text-text-on-dark transition-colors hover:bg-primary-dark"
        >
          <SendHorizonal className="size-4" aria-hidden="true" />
        </button>
      </div>
    </form>
  );
}
