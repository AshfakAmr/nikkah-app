import { aboutTimeline, type TimelineMilestone } from "@/features/about-us/data/about-content";
import { SectionHeading } from "@/features/home/components/section-heading";
import { Section } from "@/components/layout/section";
import { cn } from "@/lib/utils";

function TimelineItem({ milestone }: { milestone: TimelineMilestone }) {
  const isLeft = milestone.align === "left";

  return (
    <li className="relative grid grid-cols-[auto_1fr] gap-x-4 md:grid-cols-[1fr_auto_1fr] md:gap-x-0">
      <div
        className={cn(
          "hidden md:flex md:items-start md:pr-10",
          isLeft ? "md:justify-end md:text-right" : "md:invisible",
        )}
      >
        {isLeft ? (
          <MilestoneContent milestone={milestone} align="right" />
        ) : null}
      </div>

      <div className="relative flex flex-col items-center md:col-start-2">
        <div
          className="relative z-10 size-3 shrink-0 rounded-full bg-primary"
          aria-hidden="true"
        />
      </div>

      <div
        className={cn(
          "flex items-start pb-10 md:pb-12 md:pl-10",
          isLeft ? "md:hidden" : "md:col-start-3",
        )}
      >
        <MilestoneContent milestone={milestone} align={isLeft ? "left" : "left"} />
      </div>

      <div
        className={cn(
          "hidden md:flex md:items-start md:pl-10",
          !isLeft ? "md:col-start-3 md:justify-start md:text-left" : "md:invisible",
        )}
      >
        {!isLeft ? <MilestoneContent milestone={milestone} align="left" /> : null}
      </div>
    </li>
  );
}

function MilestoneContent({
  milestone,
  align,
}: {
  milestone: TimelineMilestone;
  align: "left" | "right";
}) {
  return (
    <div className={cn("max-w-sm", align === "right" && "md:ml-auto md:text-right")}>
      <p className="text-lg font-bold text-primary">{milestone.year}</p>
      <p className="mt-2 text-sm leading-relaxed text-text-muted md:text-base">
        {milestone.description}
      </p>
    </div>
  );
}

export function HistoryTimelineSection() {
  return (
    <Section background="default" spacing="default" className="bg-[#f7f5f0]">
      <div className="mx-auto flex max-w-4xl flex-col gap-12 md:gap-16">
        <div className="flex flex-col items-center gap-4">
          <SectionHeading title={aboutTimeline.title} />
          <div className="h-0.5 w-12 bg-primary" aria-hidden="true" />
        </div>

        <ol className="relative list-none">
          <div
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-[5px] w-px bg-border-strong md:left-1/2 md:-translate-x-1/2"
          />
          {aboutTimeline.milestones.map((milestone) => (
            <TimelineItem key={milestone.id} milestone={milestone} />
          ))}
        </ol>
      </div>
    </Section>
  );
}
