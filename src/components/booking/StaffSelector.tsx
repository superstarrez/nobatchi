"use client";

import { StaffMember } from "@/types";
import { cn } from "@/lib/utils";

export function StaffSelector({
  staff,
  selectedId,
  onSelect,
}: {
  staff: StaffMember[];
  selectedId: string;
  onSelect: (id: string) => void;
}) {
  const options = [{ id: "any", name: "فرقی ندارد", role: "اولین متخصص آزاد", imageId: "" }, ...staff];

  return (
    <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
      {options.map((person) => {
        const active = selectedId === person.id;
        return (
          <button
            key={person.id}
            type="button"
            onClick={() => onSelect(person.id)}
            className={cn(
              "flex items-center gap-3 rounded-xl border p-3 text-right transition-colors",
              active ? "border-miami bg-miami-light" : "border-ink/10 bg-white hover:border-miami/50"
            )}
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream text-sm font-semibold">
              {person.name.slice(0, 1)}
            </span>
            <span className="flex flex-col gap-0.5">
              <span className="text-[14px] font-medium">{person.name}</span>
              <span className="text-[12px] text-ink-soft">{person.role}</span>
            </span>
          </button>
        );
      })}
    </div>
  );
}
