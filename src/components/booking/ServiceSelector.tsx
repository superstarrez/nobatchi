"use client";

import { categories } from "@/lib/mock/categories";

const selectClasses =
  "appearance-none rounded-[11px] border border-ink/10 bg-cream px-3.5 py-3 text-[14.5px] text-ink focus:outline-none focus:ring-2 focus:ring-miami";

export function ServiceSelector({
  id = "service",
  label = "نوع خدمت",
  value,
  onChange,
}: {
  id?: string;
  label?: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label htmlFor={id} className="flex flex-col gap-1.5 text-[12.5px] text-ink-soft">
      {label}
      <select id={id} value={value} onChange={(e) => onChange(e.target.value)} className={selectClasses}>
        {categories.map((cat) => (
          <option key={cat.slug} value={cat.slug}>
            {cat.name}
          </option>
        ))}
      </select>
    </label>
  );
}
