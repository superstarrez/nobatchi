"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { BookingStepper } from "@/components/booking/BookingStepper";
import { useBooking } from "@/lib/booking-context";
import { categories } from "@/lib/mock/categories";
import { cn } from "@/lib/utils";

export default function BookingServiceStep() {
  const router = useRouter();
  const { draft, update } = useBooking();

  // Pick up ?salon= / ?service= from links like the homepage salon cards, after mount,
  // so this page still renders fully on the server without a client-only bailout.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const salon = params.get("salon");
    const service = params.get("service");
    if (salon) update({ salonId: salon });
    if (service) update({ serviceSlug: service });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <BookingStepper current={0} />
      <h1 className="mb-2 text-[22px] font-bold">چه خدمتی می‌خواهی رزرو کنی؟</h1>
      <p className="mb-6 text-[14.5px] text-ink-soft">یکی از خدمات را انتخاب کن تا سالن‌های مرتبط را ببینی.</p>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {categories.map((cat) => {
          const active = draft.serviceSlug === cat.slug;
          return (
            <button
              key={cat.slug}
              type="button"
              onClick={() => update({ serviceSlug: cat.slug })}
              className={cn(
                "rounded-xl border p-3.5 text-right text-[14px] transition-colors",
                active ? "border-miami bg-miami-light font-medium" : "border-ink/10 bg-white hover:border-miami/50"
              )}
            >
              {cat.name}
            </button>
          );
        })}
      </div>

      <button
        type="button"
        onClick={() => router.push("/book/salon")}
        className="mt-8 w-full rounded-xl bg-miami py-3.5 text-[15.5px] font-semibold text-white transition-colors hover:bg-ink sm:w-auto sm:px-8"
      >
        ادامه: انتخاب سالن
      </button>
    </div>
  );
}
