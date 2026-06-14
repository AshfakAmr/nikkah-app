import type { LucideIcon } from "lucide-react";
import { Mail, MessageSquare, MessagesSquare, Phone } from "lucide-react";
import type { ContactMethod } from "@/features/contact-us/data/contact-content";
import { cn } from "@/lib/utils";

const iconMap: Record<ContactMethod["icon"], LucideIcon> = {
  mail: Mail,
  "message-square": MessageSquare,
  phone: Phone,
  "messages-square": MessagesSquare,
};

type ContactMethodCardProps = {
  method: ContactMethod;
  className?: string;
};

export function ContactMethodCard({ method, className }: ContactMethodCardProps) {
  const Icon = iconMap[method.icon];
  const content = (
    <>
      <div className="flex size-11 items-center justify-center rounded-full bg-[#f3e8e2] text-[#70205f]">
        <Icon className="size-5" aria-hidden="true" />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="font-serif text-xl text-text-primary">{method.title}</h3>
        <p className="text-sm leading-relaxed text-text-secondary">{method.detail}</p>
      </div>
    </>
  );

  const cardClassName = cn(
    "flex h-full flex-col gap-4 rounded-2xl bg-surface-white p-6 shadow-card transition-shadow duration-200 hover:shadow-card-hover",
    className,
  );

  if (method.href) {
    return (
      <a href={method.href} className={cn(cardClassName, "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary")}>
        {content}
      </a>
    );
  }

  return <article className={cardClassName}>{content}</article>;
}
