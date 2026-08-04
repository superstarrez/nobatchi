"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { cities, areasByCity, dayFilters } from "@/lib/mock/locations";
import { categories } from "@/lib/mock/categories";

const selectClasses =
  "appearance-none rounded-[11px] border border-ink/10 bg-cream px-3.5 py-3 text-[14.5px] text-ink focus:outline-none focus:ring-2 focus:ring-miami";

export function SearchBookingForm() {
  const router = useRouter();
  const [city, setCity] = useState<string>(cities[0]);
  const [area, setArea] = useState<string>(areasByCity[cities[0]][0]);
  const [service, setService] = useState(categories[0].slug);
  const [day, setDay] = useState<(typeof dayFilters)[number]>(dayFilters[0]);

  const areaOptions = useMemo(() => areasByCity[city] ?? [], [city]);

  function handleCityChange(next: string) {
    setCity(next);
    setArea(areasByCity[next]?.[0] ?? "");
  }

  function handleSubmit() {
    const params = new URLSearchParams({ city, area, service, day });
    router.push(`/search?${params.toString()}`);
  }

  const serviceLabel = categories.find((c) => c.slug === service)?.name ?? "";

  return (
    <section className="mx-auto max-w-[1180px] px-5 pb-4.5">
      <div className="rounded-2xl border border-ink/[0.08] bg-white p-5 shadow-card">
        <div className="grid grid-cols-1 items-end gap-3 sm:grid-cols-2 lg:grid-cols-5">
          <label className="flex flex-col gap-1.5 text-[12.5px] text-ink-soft">
            شهر
            <select
              value={city}
              onChange={(e) => handleCityChange(e.target.value)}
              className={selectClasses}
            >
              {cities.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-1.5 text-[12.5px] text-ink-soft">
            محله
            <select value={area} onChange={(e) => setArea(e.target.value)} className={selectClasses}>
              {areaOptions.map((a) => (
                <option key={a}>{a}</option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-1.5 text-[12.5px] text-ink-soft">
            نوع خدمت
            <select value={service} onChange={(e) => setService(e.target.value)} className={selectClasses}>
              {categories.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.name}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-1.5 text-[12.5px] text-ink-soft">
            تاریخ
            <select
              value={day}
              onChange={(e) => setDay(e.target.value as (typeof dayFilters)[number])}
              className={selectClasses}
            >
              {dayFilters.map((d) => (
                <option key={d}>{d}</option>
              ))}
            </select>
          </label>
          <button
            type="button"
            onClick={handleSubmit}
            className="rounded-[11px] bg-miami px-5 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-ink"
          >
            جست‌وجوی سالن‌ها
          </button>
        </div>
        <div className="mt-3.5 border-t border-ink/[0.06] pt-3.5 text-[13px] text-ink-soft">
          {serviceLabel} در {area}، {city} — {day} · سالن‌های دارای زمان خالی را ببین
        </div>
      </div>
    </section>
  );
}
