"use client";

import { useRouter } from "next/navigation";
import { BookingStepper } from "@/components/booking/BookingStepper";
import { StaffSelector } from "@/components/booking/StaffSelector";
import { useBooking } from "@/lib/booking-context";
import { getSalonBySlug, salons } from "@/lib/mock/salons";

export default function BookingStaffStep() {
  const router = useRouter();
  const { draft, update } = useBooking();
  const salon = salons.find((s) => s.id === draft.salonId) ?? salons[0];

  return (
    <div>
      <BookingStepper current={2} />
      <h1 className="mb-2 text-[22px] font-bold">کدام متخصص؟</h1>
      <p className="mb-6 text-[14.5px] text-ink-soft">
        متخصص موردنظرت در «{salon.name}» را انتخاب کن، یا بگذار اولین متخصص آزاد رزرو شود.
      </p>

      <StaffSelector staff={salon.staff} selectedId={draft.staffId} onSelect={(id) => update({ staffId: id })} />

      <div className="mt-8 flex gap-3">
        <button
          type="button"
          onClick={() => router.push("/book/salon")}
          className="rounded-xl border border-ink/10 bg-white px-6 py-3.5 text-[15px]"
        >
          مرحله قبل
        </button>
        <button
          type="button"
          onClick={() => router.push("/book/datetime")}
          className="flex-1 rounded-xl bg-miami py-3.5 text-[15.5px] font-semibold text-white transition-colors hover:bg-ink sm:flex-none sm:px-8"
        >
          ادامه: انتخاب تاریخ و ساعت
        </button>
      </div>
    </div>
  );
}
