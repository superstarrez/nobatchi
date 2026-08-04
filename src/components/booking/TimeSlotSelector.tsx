"use client";

import { cn } from "@/lib/utils";

const ALL_SLOTS = ["۰۹:۰۰", "۱۰:۳۰", "۱۲:۰۰", "۱۴:۰۰", "۱۵:۳۰", "۱۷:۰۰", "۱۸:۳۰", "۲۰:۰۰"];
const TAKEN_SLOTS = new Set(["۱۲:۰۰", "۱۷:۰۰"]);

interface TimeSlotSelectorProps {
  dateSelected: boolean;
  dateLabel?: string | null;
  selected: string | null;
  onSelect: (time: string) => void;
}

export function TimeSlotSelector({ dateSelected, dateLabel, selected, onSelect }: TimeSlotSelectorProps) {
  return (
    <div className="border-t border-ink/[0.07] pt-3.5">
      <span className="text-[12.5px] text-ink-soft">
        {dateSelected ? `زمان‌های خالی ${dateLabel ?? ""}` : "برای دیدن زمان‌های خالی، ابتدا یک روز را انتخاب کن"}
      </span>
      <div className="mt-2.5 flex flex-wrap gap-2">
        {ALL_SLOTS.map((slot) => {
          const busy = !dateSelected || TAKEN_SLOTS.has(slot);
          const active = selected === slot;
          return (
            <button
              key={slot}
              type="button"
              disabled={busy}
              onClick={() => onSelect(slot)}
              className={cn(
                "rounded-full border px-4 py-2 text-[13.5px] transition-all",
                active
                  ? "border-miami bg-miami text-white"
                  : busy
                    ? "cursor-default border-transparent bg-cream text-ink-soft/45"
                    : "cursor-pointer border-ink/[0.12] bg-white text-ink hover:border-miami"
              )}
            >
              {slot}
            </button>
          );
        })}
      </div>
    </div>
  );
}
