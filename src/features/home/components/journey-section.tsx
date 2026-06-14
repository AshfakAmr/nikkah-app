import { homeJourney, type JourneyStep } from "@/features/home/data/home-content";
import { SectionHeading } from "@/features/home/components/section-heading";
import { Section } from "@/components/layout/section";
import { cn } from "@/lib/utils";

function JourneyStepItem({ step, index }: { step: JourneyStep; index: number }) {
  const Icon = step.icon;
  const isLeft = step.align === "left";

  return (
    <li className="relative grid grid-cols-[auto_1fr] gap-x-4 md:grid-cols-[1fr_auto_1fr] md:gap-x-0">
      <div
        className={cn(
          "hidden md:flex md:items-center md:pr-10",
          isLeft ? "md:justify-end md:text-right" : "md:invisible",
        )}
      >
        {isLeft ? (
          <div className="max-w-xs">
            <h3
              className={cn(
                "text-lg font-semibold",
                step.accent === "primary" ? "text-primary" : "text-secondary",
              )}
            >
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-secondary-alt">{step.description}</p>
          </div>
        ) : null}
      </div>

      <div className="relative flex flex-col items-center md:col-start-2">
        <div
          className={cn(
            "relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full text-text-on-dark shadow-subtle",
            step.accent === "primary" ? "bg-primary" : "bg-secondary",
          )}
        >
          <Icon className="size-5" aria-hidden="true" />
        </div>
        {index < homeJourney.steps.length - 1 ? (
          <div
            className="mt-2 h-full min-h-16 w-px bg-border-strong md:min-h-24"
            aria-hidden="true"
          />
        ) : null}
      </div>

      <div className="flex items-center pb-10 md:hidden">
        <div className="max-w-xs">
          <h3
            className={cn(
              "text-lg font-semibold",
              step.accent === "primary" ? "text-primary" : "text-secondary",
            )}
          >
            {step.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-secondary-alt">{step.description}</p>
        </div>
      </div>

      <div
        className={cn(
          "hidden md:flex md:items-center md:pl-10",
          !isLeft ? "md:col-start-3 md:justify-start md:text-left" : "md:invisible",
        )}
      >
        {!isLeft ? (
          <div className="max-w-xs">
            <h3
              className={cn(
                "text-lg font-semibold",
                step.accent === "primary" ? "text-primary" : "text-secondary",
              )}
            >
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-secondary-alt">{step.description}</p>
          </div>
        ) : null}
      </div>
    </li>
  );
}

export function JourneySection() {
  return (
    <Section
      id="journey"
      background="cream"
      spacing="default"
      className="bg-[#fdfbf7]"
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-12 md:gap-16">
        <SectionHeading
          title={homeJourney.title}
          subtitle={homeJourney.subtitle}
        />
        <ol className="relative mx-auto w-full max-w-4xl list-none">
          <div
            aria-hidden="true"
            className="absolute top-6 bottom-6 left-6 hidden w-px bg-border-strong md:left-1/2 md:block md:-translate-x-1/2"
          />
          {homeJourney.steps.map((step, index) => (
            <JourneyStepItem key={step.id} step={step} index={index} />
          ))}
        </ol>
      </div>
    </Section>
  );
}
