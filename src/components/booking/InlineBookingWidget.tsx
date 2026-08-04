"use client";

import { useState } from "react";
import { DateSelector } from "./DateSelector";
import { TimeSlotSelector } from "./TimeSlotSelector";
import { BookingSuccess } from "./BookingSuccess";
import { categories } from "@/lib/mock/categories";
import { salons } from "@/lib/mock/salons";

const staffOptions = ["فرقی ندارد", "خانم رها", "خانم نارین", "آقای رادین"];

export function InlineBookingWidget() {
  const [monthOffset, setMonthOffset] = useState(0);
  const [pickedKey, setPickedKey] = useState<string | null>(null);
  const [pickedLabel, setPickedLabel] = useState<string | null>(null);
  const [pickedTime, setPickedTime] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const [summary, setSummary] = useState("");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [staff, setStaff] = useState(staffOptions[0]);
  const [service, setService] = useState(categories[0].name);
  const [salonName, setSalonName] = useState(salons[0].name);

  function handleDatePick(key: string, label: string) {
    setPickedKey(key);
    setPickedLabel(label);
    setPickedTime(null);
  }

  const ready = name.trim().length > 2 && phone.trim().length >= 10 && !!pickedKey && !!pickedTime;
  const detail = `${service} در ${salonName} — ${pickedLabel ?? ""}${pickedTime ? "، ساعت " + pickedTime : ""}`;

  function handleSubmit() {
    if (!ready) return;
    setSummary(`${name} عزیز، ${detail} ثبت شد.`);
    setDone(true);
  }

  function handleReset() {
    setDone(false);
    setPickedKey(null);
    setPickedLabel(null);
    setPickedTime(null);
    setName("");
    setPhone("");
    setNote("");
  }

  return (
    <section id="book" className="mx-auto max-w-[1180px] px-5 py-[78px]">
      <div className="mb-7 flex flex-wrap items-end justify-between gap-5">
        <div>
          <h2 className="mb-2 text-[23px] font-bold -tracking-[0.5px] sm:text-[27px] lg:text-[31px]">
            رزرو مستقیم نوبت
          </h2>
          <p className="m-0 text-[15.5px] text-ink-soft">
            اطلاعاتت را وارد کن، تاریخ و ساعت را انتخاب کن و نوبتت را همین‌جا ثبت کن.
          </p>
        </div>
        <span className="rounded-full bg-miami-light px-3.5 py-1.5 text-[13px] text-ink-soft">
          تقویم شمسی · بدون تماس تلفنی
        </span>
      </div>

      {done ? (
        <BookingSuccess summary={summary} onReset={handleReset} />
      ) : (
        <div className="grid grid-cols-1 items-start gap-[18px] lg:grid-cols-2">
          <div className="flex flex-col gap-4 rounded-[17px] border border-ink/[0.08] bg-white p-5.5">
            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              <label className="flex flex-col gap-1.5 text-[12.5px] text-ink-soft">
                نام و نام خانوادگی
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="مثلاً سارا کریمی"
                  className="rounded-[11px] border border-ink/10 bg-cream px-3.5 py-3 text-[14.5px] focus:outline-none focus:ring-2 focus:ring-miami"
                />
              </label>
              <label className="flex flex-col gap-1.5 text-[12.5px] text-ink-soft">
                شماره موبایل
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                  className="rounded-[11px] border border-ink/10 bg-cream px-3.5 py-3 text-[14.5px] focus:outline-none focus:ring-2 focus:ring-miami"
                />
              </label>
            </div>
            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              <label className="flex flex-col gap-1.5 text-[12.5px] text-ink-soft">
                نوع خدمت
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="appearance-none rounded-[11px] border border-ink/10 bg-cream px-3.5 py-3 text-[14.5px] focus:outline-none focus:ring-2 focus:ring-miami"
                >
                  {categories.map((c) => (
                    <option key={c.slug}>{c.name}</option>
                  ))}
                </select>
              </label>
              <label className="flex flex-col gap-1.5 text-[12.5px] text-ink-soft">
                سالن
                <select
                  value={salonName}
                  onChange={(e) => setSalonName(e.target.value)}
                  className="appearance-none rounded-[11px] border border-ink/10 bg-cream px-3.5 py-3 text-[14.5px] focus:outline-none focus:ring-2 focus:ring-miami"
                >
                  {salons.map((s) => (
                    <option key={s.id}>{s.name}</option>
                  ))}
                </select>
              </label>
            </div>
            <label className="flex flex-col gap-1.5 text-[12.5px] text-ink-soft">
              متخصص
              <select
                value={staff}
                onChange={(e) => setStaff(e.target.value)}
                className="appearance-none rounded-[11px] border border-ink/10 bg-cream px-3.5 py-3 text-[14.5px] focus:outline-none focus:ring-2 focus:ring-miami"
              >
                {staffOptions.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-1.5 text-[12.5px] text-ink-soft">
              توضیح کوتاه (اختیاری)
              <textarea
                rows={2}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="مثلاً رنگ روشن مدنظرم است"
                className="resize-y rounded-[11px] border border-ink/10 bg-cream px-3.5 py-3 text-[14.5px] leading-[1.8] focus:outline-none focus:ring-2 focus:ring-miami"
              />
            </label>
          </div>

          <div className="flex flex-col gap-4 rounded-[17px] border border-ink/[0.08] bg-white p-5.5">
            <DateSelector
              monthOffset={monthOffset}
              onMonthOffsetChange={setMonthOffset}
              selectedKey={pickedKey}
              onSelect={handleDatePick}
            />
            <TimeSlotSelector
              dateSelected={!!pickedKey}
              dateLabel={pickedLabel}
              selected={pickedTime}
              onSelect={setPickedTime}
            />
            <div className="flex flex-col gap-3 border-t border-ink/[0.07] pt-3.5">
              <span className="text-[13.5px] leading-[1.9] text-ink-soft">
                {ready ? detail : "نام، شماره موبایل، تاریخ و ساعت را کامل کن تا نوبت ثبت شود."}
              </span>
              <button
                type="button"
                disabled={!ready}
                onClick={handleSubmit}
                className="rounded-xl border-0 py-3.5 text-[15.5px] font-semibold text-white transition-colors disabled:cursor-default disabled:bg-miami-light disabled:text-ink/40"
                style={ready ? { backgroundColor: "#2BBEF3" } : undefined}
              >
                ثبت نهایی نوبت
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
