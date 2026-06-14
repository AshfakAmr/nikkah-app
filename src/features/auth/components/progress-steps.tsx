import { cn } from "@/lib/utils";

type ProgressStepsProps = {
  totalSteps: number;
  currentStep: number;
  className?: string;
};

export function ProgressSteps({ totalSteps, currentStep, className }: ProgressStepsProps) {
  return (
    <div
      className={cn("flex gap-2", className)}
      role="progressbar"
      aria-valuemin={1}
      aria-valuemax={totalSteps}
      aria-valuenow={currentStep}
      aria-label={`Step ${currentStep} of ${totalSteps}`}
    >
      {Array.from({ length: totalSteps }).map((_, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber <= currentStep;

        return (
          <div
            key={stepNumber}
            className={cn(
              "h-1 flex-1 rounded-pill",
              isActive ? "bg-primary" : "bg-border",
            )}
          />
        );
      })}
    </div>
  );
}
