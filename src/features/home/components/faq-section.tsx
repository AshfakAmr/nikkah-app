"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { homeFaq } from "@/features/home/data/home-content";
import { SectionHeading } from "@/features/home/components/section-heading";
import { Section } from "@/components/layout/section";
import { cn } from "@/lib/utils";

export function FaqSection() {
  const [openId, setOpenId] = useState(homeFaq.items[0]?.id ?? "");

  return (
    <Section id="faq" background="cream" spacing="default" className="bg-[#faf9f6]">
      <div className="mx-auto flex max-w-3xl flex-col gap-10 md:gap-12">
        <SectionHeading title={homeFaq.title} subtitle={homeFaq.subtitle} />

        <div className="flex flex-col gap-4">
          {homeFaq.items.map((item) => {
            const isOpen = openId === item.id;

            return (
              <article
                key={item.id}
                className={cn(
                  "overflow-hidden rounded-xl border border-border bg-surface-white",
                  "transition-shadow duration-200 hover:shadow-subtle",
                )}
              >
                <h3>
                  <button
                    type="button"
                    id={`faq-trigger-${item.id}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${item.id}`}
                    onClick={() => setOpenId(isOpen ? "" : item.id)}
                    className={cn(
                      "flex w-full items-center justify-between gap-4 px-5 py-4 text-left",
                      "text-sm font-medium text-primary md:text-base",
                      "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                    )}
                  >
                    <span>{item.question}</span>
                    {isOpen ? (
                      <ChevronUp className="size-4 shrink-0" aria-hidden="true" />
                    ) : (
                      <ChevronDown className="size-4 shrink-0" aria-hidden="true" />
                    )}
                  </button>
                </h3>
                <div
                  id={`faq-panel-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${item.id}`}
                  hidden={!isOpen}
                  className="border-t border-border px-5 py-4"
                >
                  <p className="text-sm leading-relaxed text-secondary-alt">{item.answer}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
