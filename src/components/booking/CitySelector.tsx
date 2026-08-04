"use client";

import { cities, areasByCity } from "@/lib/mock/locations";

const selectClasses =
  "appearance-none rounded-[11px] border border-ink/10 bg-cream px-3.5 py-3 text-[14.5px] text-ink focus:outline-none focus:ring-2 focus:ring-miami";

export function CitySelector({
  city,
  area,
  onCityChange,
  onAreaChange,
}: {
  city: string;
  area: string;
  onCityChange: (city: string) => void;
  onAreaChange: (area: string) => void;
}) {
  const areaOptions = areasByCity[city] ?? [];

  return (
    <div className="grid grid-cols-2 gap-3.5">
      <label className="flex flex-col gap-1.5 text-[12.5px] text-ink-soft">
        شهر
        <select
          value={city}
          onChange={(e) => {
            const next = e.target.value;
            onCityChange(next);
            onAreaChange(areasByCity[next]?.[0] ?? "");
          }}
          className={selectClasses}
        >
          {cities.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </label>
      <label className="flex flex-col gap-1.5 text-[12.5px] text-ink-soft">
        محله
        <select value={area} onChange={(e) => onAreaChange(e.target.value)} className={selectClasses}>
          {areaOptions.map((a) => (
            <option key={a}>{a}</option>
          ))}
        </select>
      </label>
    </div>
  );
}
