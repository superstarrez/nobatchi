"use client";

import { useEffect, useMemo, useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SalonCard } from "@/components/salons/SalonCard";
import { SalonGridSkeleton } from "@/components/ui/LoadingSkeleton";
import { EmptyState } from "@/components/ui/EmptyState";
import { salons as allSalons } from "@/lib/mock/salons";
import { categories } from "@/lib/mock/categories";
import { cities, areasByCity, priceRanges, sortOptions, SortValue } from "@/lib/mock/locations";
import { Gender } from "@/types";
import { cn } from "@/lib/utils";

const genderOptions: Array<{ value: Gender | "همه"; label: string }> = [
  { value: "همه", label: "همه سالن‌ها" },
  { value: "بانوان", label: "سالن بانوان" },
  { value: "آقایان", label: "سالن آقایان" },
];

export default function SearchPage() {
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState("همه شهرها");
  const [area, setArea] = useState("همه محله‌ها");
  const [service, setService] = useState("همه");
  const [gender, setGender] = useState<Gender | "همه">("همه");
  const [priceIndex, setPriceIndex] = useState(0);
  const [minRating, setMinRating] = useState(0);
  const [sort, setSort] = useState<SortValue>("popular");

  // Read initial filters from the URL (e.g. links from the homepage) after mount,
  // so this page can otherwise render fully on the server without a client-only bailout.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const initialCity = params.get("city");
    const initialArea = params.get("area");
    const initialService = params.get("service");
    if (initialCity) setCity(initialCity);
    if (initialArea) setArea(initialArea);
    if (initialService) setService(initialService);
    const timer = setTimeout(() => setLoading(false), 550);
    return () => clearTimeout(timer);
  }, []);

  const areaOptions = city === "همه شهرها" ? [] : (areasByCity[city] ?? []);

  const filtered = useMemo(() => {
    const range = priceRanges[priceIndex];
    let list = allSalons.filter((s) => {
      if (city !== "همه شهرها" && s.city !== city) return false;
      if (area !== "همه محله‌ها" && s.area !== area) return false;
      if (service !== "همه" && !s.serviceSlugs.includes(service)) return false;
      if (gender !== "همه" && s.gender !== gender) return false;
      if (s.priceFrom < range.min || s.priceFrom > range.max) return false;
      if (s.rating < minRating) return false;
      return true;
    });

    list = [...list];
    switch (sort) {
      case "rating":
        list.sort((a, b) => b.rating - a.rating);
        break;
      case "price-asc":
        list.sort((a, b) => a.priceFrom - b.priceFrom);
        break;
      case "soonest":
        list.sort((a, b) => (a.nextSlot.includes("امروز") ? -1 : 1) - (b.nextSlot.includes("امروز") ? -1 : 1));
        break;
      default:
        list.sort((a, b) => b.reviewCount - a.reviewCount);
    }
    return list;
  }, [city, area, service, gender, priceIndex, minRating, sort]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-cream">
      <Header />
      <main className="mx-auto max-w-[1180px] px-5 py-10">
        <div className="mb-7">
          <h1 className="mb-2 text-[26px] font-bold -tracking-[0.5px] sm:text-[30px]">جست‌وجوی سالن‌ها</h1>
          <p className="m-0 text-[15px] text-ink-soft">
            فیلترها را تنظیم کن تا سالن‌های مناسب با شهر، محله، بودجه و زمان خالی‌ات را ببینی.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-7 lg:grid-cols-[260px_1fr]">
          <aside className="flex flex-col gap-5 rounded-2xl border border-ink/[0.08] bg-white p-5 lg:sticky lg:top-24 lg:h-fit">
            <FilterSelect label="شهر" value={city} onChange={(v) => { setCity(v); setArea("همه محله‌ها"); }}>
              <option>همه شهرها</option>
              {cities.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </FilterSelect>

            <FilterSelect label="محله" value={area} onChange={setArea} disabled={city === "همه شهرها"}>
              <option>همه محله‌ها</option>
              {areaOptions.map((a) => (
                <option key={a}>{a}</option>
              ))}
            </FilterSelect>

            <FilterSelect label="نوع خدمت" value={service} onChange={setService}>
              <option value="همه">همه خدمات</option>
              {categories.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.name}
                </option>
              ))}
            </FilterSelect>

            <div className="flex flex-col gap-1.5">
              <span className="text-[12.5px] text-ink-soft">محدوده قیمت</span>
              <div className="flex flex-col gap-1.5">
                {priceRanges.map((range, i) => (
                  <label key={range.label} className="flex items-center gap-2 text-[13.5px]">
                    <input
                      type="radio"
                      name="price"
                      checked={priceIndex === i}
                      onChange={() => setPriceIndex(i)}
                      className="accent-miami"
                    />
                    {range.label}
                  </label>
                ))}
              </div>
            </div>

            <FilterSelect
              label="امتیاز کاربران"
              value={String(minRating)}
              onChange={(v) => setMinRating(Number(v))}
            >
              <option value="0">همه امتیازها</option>
              <option value="4.5">۴٫۵ به بالا</option>
              <option value="4.8">۴٫۸ به بالا</option>
            </FilterSelect>

            <div className="flex flex-col gap-1.5">
              <span className="text-[12.5px] text-ink-soft">سالن بانوان یا آقایان</span>
              <div className="flex flex-col gap-1.5">
                {genderOptions.map((g) => (
                  <label key={g.value} className="flex items-center gap-2 text-[13.5px]">
                    <input
                      type="radio"
                      name="gender"
                      checked={gender === g.value}
                      onChange={() => setGender(g.value)}
                      className="accent-miami"
                    />
                    {g.label}
                  </label>
                ))}
              </div>
            </div>
          </aside>

          <div>
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <span className="text-[13.5px] text-ink-soft">
                {loading ? "در حال جست‌وجو…" : `${filtered.length} سالن پیدا شد`}
              </span>
              <FilterSelect label="" value={sort} onChange={(v) => setSort(v as SortValue)} inline>
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    مرتب‌سازی: {opt.label}
                  </option>
                ))}
              </FilterSelect>
            </div>

            {loading ? (
              <SalonGridSkeleton count={6} />
            ) : filtered.length === 0 ? (
              <EmptyState
                icon="🗓️"
                title="سالنی با این فیلترها پیدا نشد"
                description="فیلترها را کمی بازتر کن یا شهر و محله دیگری را امتحان کن."
              />
            ) : (
              <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((salon) => (
                  <SalonCard key={salon.id} salon={salon} />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function FilterSelect({
  label,
  value,
  onChange,
  children,
  disabled,
  inline,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  children: React.ReactNode;
  disabled?: boolean;
  inline?: boolean;
}) {
  return (
    <label className={cn("flex flex-col gap-1.5 text-[12.5px] text-ink-soft", inline && "w-fit")}>
      {label}
      <select
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none rounded-[11px] border border-ink/10 bg-cream px-3.5 py-2.5 text-[14px] text-ink focus:outline-none focus:ring-2 focus:ring-miami disabled:opacity-50"
      >
        {children}
      </select>
    </label>
  );
}
