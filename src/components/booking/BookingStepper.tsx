import { cn } from "@/lib/utils";

const steps = [
  { path: "/book", label: "خدمت" },
  { path: "/book/salon", label: "سالن" },
  { path: "/book/staff", label: "متخصص" },
  { path: "/book/datetime", label: "تاریخ و ساعت" },
  { path: "/book/confirm", label: "تأیید" },
];

export function BookingStepper({ current }: { current: number }) {
  return (
    <div className="mb-8 flex flex-wrap items-center gap-2 text-[13px] text-ink-soft">
      {steps.map((step, i) => (
        <span key={step.path} className="flex items-center gap-2">
          <span
            className={cn(
              "flex h-6 min-w-6 items-center justify-center rounded-full px-1.5 text-[11.5px] font-semibold",
              i === current
                ? "bg-miami text-white"
                : i < current
                  ? "bg-miami-light text-ink"
                  : "bg-white text-ink-soft border border-ink/10"
            )}
          >
            {i + 1}
          </span>
          <span className={i === current ? "font-medium text-ink" : ""}>{step.label}</span>
          {i < steps.length - 1 && <span className="text-miami/60">←</span>}
        </span>
      ))}
    </div>
  );
}
