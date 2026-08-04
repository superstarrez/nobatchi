"use client";

import { useRouter } from "next/navigation";
import { BookingStepper } from "@/components/booking/BookingStepper";
import { useBooking } from "@/lib/booking-context";
import { salons } from "@/lib/mock/salons";
import { getCategoryBySlug } from "@/lib/mock/categories";

export default function BookingConfirmStep() {
  const router = useRouter();
  const { draft, update } = useBooking();
  const salon = salons.find((s) => s.id === draft.salonId) ?? salons[0];
  const serviceName = getCategoryBySlug(draft.serviceSlug)?.name ?? "";
  const staffName = draft.staffId === "any" ? "اولین متخصص آزاد" : salon.staff.find((s) => s.id === draft.staffId)?.name ?? "";

  const ready = draft.name.trim().length > 2 && draft.phone.trim().length >= 10;

  function handleSubmit() {
    if (!ready) return;
    router.push("/book/success");
  }

  return (
    <div>
      <BookingStepper current={4} />
      <h1 className="mb-2 text-[22px] font-bold">اطلاعاتت را کامل کن</h1>
      <p className="mb-6 text-[14.5px] text-ink-soft">آخرین مرحله؛ نام و شماره موبایلت را وارد کن تا نوبت ثبت شود.</p>

      <div className="mb-5 rounded-xl border border-ink/10 bg-white p-4 text-[13.5px] leading-[1.9] text-ink-soft">
        <strong className="font-semibold text-ink">{serviceName}</strong> در{" "}
        <strong className="font-semibold text-ink">{salon.name}</strong> با{" "}
        <strong className="font-semibold text-ink">{staffName}</strong>
        <br />
        {draft.dateLabel} — ساعت {draft.time}
      </div>

      <div className="flex flex-col gap-3.5 rounded-2xl border border-ink/10 bg-white p-5">
        <label className="flex flex-col gap-1.5 text-[12.5px] text-ink-soft">
          نام و نام خانوادگی
          <input
            type="text"
            value={draft.name}
            onChange={(e) => update({ name: e.target.value })}
            placeholder="مثلاً سارا کریمی"
            className="rounded-[11px] border border-ink/10 bg-cream px-3.5 py-3 text-[14.5px] focus:outline-none focus:ring-2 focus:ring-miami"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-[12.5px] text-ink-soft">
          شماره موبایل
          <input
            type="tel"
            value={draft.phone}
            onChange={(e) => update({ phone: e.target.value })}
            placeholder="۰۹۱۲۳۴۵۶۷۸۹"
            className="rounded-[11px] border border-ink/10 bg-cream px-3.5 py-3 text-[14.5px] focus:outline-none focus:ring-2 focus:ring-miami"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-[12.5px] text-ink-soft">
          توضیح کوتاه (اختیاری)
          <textarea
            rows={2}
            value={draft.note}
            onChange={(e) => update({ note: e.target.value })}
            placeholder="مثلاً رنگ روشن مدنظرم است"
            className="resize-y rounded-[11px] border border-ink/10 bg-cream px-3.5 py-3 text-[14.5px] leading-[1.8] focus:outline-none focus:ring-2 focus:ring-miami"
          />
        </label>
      </div>

      <div className="mt-8 flex gap-3">
        <button
          type="button"
          onClick={() => router.push("/book/datetime")}
          className="rounded-xl border border-ink/10 bg-white px-6 py-3.5 text-[15px]"
        >
          مرحله قبل
        </button>
        <button
          type="button"
          disabled={!ready}
          onClick={handleSubmit}
          className="flex-1 rounded-xl bg-miami py-3.5 text-[15.5px] font-semibold text-white transition-colors hover:bg-ink disabled:opacity-40 sm:flex-none sm:px-8"
        >
          ثبت نهایی نوبت
        </button>
      </div>
    </div>
  );
}
