"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { BookingStepper } from "@/components/booking/BookingStepper";
import { DateSelector } from "@/components/booking/DateSelector";
import { TimeSlotSelector } from "@/components/booking/TimeSlotSelector";
import { useBooking } from "@/lib/booking-context";

export default function BookingDateTimeStep() {
  const router = useRouter();
  const { draft, update } = useBooking();
  const [monthOffset, setMonthOffset] = useState(0);

  const ready = !!draft.dateKey && !!draft.time;

  return (
    <div>
      <BookingStepper current={3} />
      <h1 className="mb-2 text-[22px] font-bold">چه روز و ساعتی؟</h1>
      <p className="mb-6 text-[14.5px] text-ink-soft">تقویم شمسی · جمعه‌ها و روزهای گذشته غیرفعال هستند.</p>

      <div className="flex flex-col gap-4 rounded-2xl border border-ink/10 bg-white p-5">
        <DateSelector
          monthOffset={monthOffset}
          onMonthOffsetChange={setMonthOffset}
          selectedKey={draft.dateKey}
          onSelect={(key, label) => update({ dateKey: key, dateLabel: label, time: null })}
        />
        <TimeSlotSelector
          dateSelected={!!draft.dateKey}
          dateLabel={draft.dateLabel}
          selected={draft.time}
          onSelect={(time) => update({ time })}
        />
      </div>

      <div className="mt-8 flex gap-3">
        <button
          type="button"
          onClick={() => router.push("/book/staff")}
          className="rounded-xl border border-ink/10 bg-white px-6 py-3.5 text-[15px]"
        >
          مرحله قبل
        </button>
        <button
          type="button"
          disabled={!ready}
          onClick={() => router.push("/book/confirm")}
          className="flex-1 rounded-xl bg-miami py-3.5 text-[15.5px] font-semibold text-white transition-colors hover:bg-ink disabled:opacity-40 sm:flex-none sm:px-8"
        >
          ادامه: تکمیل اطلاعات
        </button>
      </div>
    </div>
  );
}
