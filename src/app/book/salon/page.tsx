"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { BookingStepper } from "@/components/booking/BookingStepper";
import { EmptyState } from "@/components/ui/EmptyState";
import { useBooking } from "@/lib/booking-context";
import { salons } from "@/lib/mock/salons";
import { getCategoryBySlug } from "@/lib/mock/categories";
import { formatToman, toFaDigits, unsplashUrl, cn } from "@/lib/utils";

export default function BookingSalonStep() {
  const router = useRouter();
  const { draft, update } = useBooking();

  const matches = useMemo(
    () => salons.filter((s) => s.serviceSlugs.includes(draft.serviceSlug)),
    [draft.serviceSlug]
  );
  const categoryName = getCategoryBySlug(draft.serviceSlug)?.name ?? "";

  return (
    <div>
      <BookingStepper current={1} />
      <h1 className="mb-2 text-[22px] font-bold">کدام سالن؟</h1>
      <p className="mb-6 text-[14.5px] text-ink-soft">سالن‌های دارای خدمت «{categoryName}» را انتخاب کن.</p>

      {matches.length === 0 ? (
        <EmptyState
          title="سالنی برای این خدمت پیدا نشد"
          description="یک خدمت دیگر را از مرحله قبل انتخاب کن."
        />
      ) : (
        <div className="flex flex-col gap-3">
          {matches.map((salon) => {
            const active = draft.salonId === salon.id;
            return (
              <button
                key={salon.id}
                type="button"
                onClick={() => update({ salonId: salon.id })}
                className={cn(
                  "flex items-center gap-3.5 rounded-xl border p-3 text-right transition-colors",
                  active ? "border-miami bg-miami-light" : "border-ink/10 bg-white hover:border-miami/50"
                )}
              >
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-cream">
                  <Image src={unsplashUrl(salon.coverImageId, 160, 160)} alt={salon.name} fill className="object-cover" />
                </div>
                <div className="flex-1">
                  <p className="m-0 text-[15px] font-medium">{salon.name}</p>
                  <p className="m-0 text-[12.5px] text-ink-soft">
                    {salon.area}، {salon.city} · شروع از {formatToman(salon.priceFrom)}
                  </p>
                </div>
                <span className="flex items-center gap-1 text-[13px] text-ink-soft">
                  <span className="text-miami">★</span> {toFaDigits(salon.rating.toFixed(1))}
                </span>
              </button>
            );
          })}
        </div>
      )}

      <div className="mt-8 flex gap-3">
        <button
          type="button"
          onClick={() => router.push("/book")}
          className="rounded-xl border border-ink/10 bg-white px-6 py-3.5 text-[15px]"
        >
          مرحله قبل
        </button>
        <button
          type="button"
          disabled={matches.length === 0}
          onClick={() => router.push("/book/staff")}
          className="flex-1 rounded-xl bg-miami py-3.5 text-[15.5px] font-semibold text-white transition-colors hover:bg-ink disabled:opacity-40 sm:flex-none sm:px-8"
        >
          ادامه: انتخاب متخصص
        </button>
      </div>
    </div>
  );
}
