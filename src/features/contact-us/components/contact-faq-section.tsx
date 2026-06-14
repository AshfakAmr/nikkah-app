"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { contactFaq } from "@/features/contact-us/data/contact-content";
import { SectionHeading } from "@/features/home/components/section-heading";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

export function ContactFaqSection() {
  const [openId, setOpenId] = useState<string>("");

  return (
    <section id="faq" aria-label="Contact FAQ" className="bg-[#f5f3ef] py-16 md:py-20">
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col gap-10 md:gap-12">
          <SectionHeading title={contactFaq.title} titleClassName="md:text-4xl" />

          <div className="flex flex-col gap-4">
            {contactFaq.items.map((item) => {
              const isOpen = openId === item.id;

              return (
                <article
                  key={item.id}
                  className={cn(
                    "overflow-hidden rounded-xl border border-border bg-surface-white shadow-subtle",
                    "transition-shadow duration-200 hover:shadow-card",
                  )}
                >
                  <h3 id={`contact-faq-trigger-${item.id}`}>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`contact-faq-panel-${item.id}`}
                      onClick={() => setOpenId(isOpen ? "" : item.id)}
                      className={cn(
                        "flex w-full items-center justify-between gap-4 px-5 py-4 text-left",
                        "text-sm font-medium text-text-primary md:text-base",
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
                    id={`contact-faq-panel-${item.id}`}
                    role="region"
                    aria-labelledby={`contact-faq-trigger-${item.id}`}
                    hidden={!isOpen}
                    className="border-t border-border px-5 py-4"
                  >
                    <p className="text-sm leading-relaxed text-text-secondary">{item.answer}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
