"use client";

import { getJalaliMonthView, JALALI_MONTH_NAMES, WEEKDAY_SHORT, addDays, dateKey } from "@/lib/jalali";
import { toFaDigits, cn } from "@/lib/utils";

interface DateSelectorProps {
  monthOffset: number;
  onMonthOffsetChange: (offset: number) => void;
  selectedKey: string | null;
  onSelect: (key: string, label: string) => void;
}

const weekdayFormatter = new Intl.DateTimeFormat("fa-IR", { weekday: "long", day: "numeric", month: "long" });

export function DateSelector({ monthOffset, onMonthOffsetChange, selectedKey, onSelect }: DateSelectorProps) {
  const view = getJalaliMonthView(monthOffset);
  const monthLabel = `${JALALI_MONTH_NAMES[view.parts.month - 1]} ${toFaDigits(view.parts.year)}`;

  const days = Array.from({ length: view.length }, (_, i) => {
    const date = addDays(view.firstOfMonth, i);
    const key = dateKey(date);
    const isPast = date < view.today;
    const isFriday = date.getDay() === 5;
    const disabled = isPast || isFriday;
    const selected = selectedKey === key;
    return {
      key,
      date,
      label: toFaDigits(new Intl.DateTimeFormat("en-US-u-ca-persian-nu-latn", { day: "numeric" }).format(date)),
      disabled,
      selected,
    };
  });

  return (
    <div className="flex flex-col gap-3.5">
      <div className="flex items-center justify-between gap-2.5">
        <button
          type="button"
          onClick={() => onMonthOffsetChange(Math.min(5, monthOffset + 1))}
          aria-label="ماه بعد"
          className="flex h-[34px] w-[34px] items-center justify-center rounded-[10px] border border-ink/[0.12] bg-cream text-[15px]"
        >
          ‹
        </button>
        <span className="text-[15.5px] font-semibold">{monthLabel}</span>
        <button
          type="button"
          onClick={() => onMonthOffsetChange(Math.max(0, monthOffset - 1))}
          aria-label="ماه قبل"
          className="flex h-[34px] w-[34px] items-center justify-center rounded-[10px] border border-ink/[0.12] bg-cream text-[15px]"
        >
          ›
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1.5 text-center text-[11.5px] text-ink-soft">
        {WEEKDAY_SHORT.map((w) => (
          <span key={w}>{w}</span>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1.5">
        {Array.from({ length: view.leadingBlanks }).map((_, i) => (
          <span key={`blank-${i}`} />
        ))}
        {days.map((day) => (
          <button
            key={day.key}
            type="button"
            disabled={day.disabled}
            onClick={() => onSelect(day.key, weekdayFormatter.format(day.date))}
            className={cn(
              "aspect-square rounded-[10px] border text-[13.5px] transition-colors",
              day.selected
                ? "border-miami bg-miami text-white"
                : day.disabled
                  ? "cursor-default border-transparent bg-cream text-ink-soft/45"
                  : "cursor-pointer border-ink/10 bg-white text-ink hover:border-miami"
            )}
          >
            {day.label}
          </button>
        ))}
      </div>
    </div>
  );
}
