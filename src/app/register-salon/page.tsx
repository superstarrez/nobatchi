"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { cities } from "@/lib/mock/locations";
import { categories } from "@/lib/mock/categories";

const panelFeatures = [
  "مدیریت نوبت‌های روزانه از یک پنل ساده",
  "نمایش نمونه‌کارها و خدمات به مشتریان",
  "دریافت نظرات فقط از مشتریان واقعی",
  "گزارش اشغال و نوبت‌های خالی هر روز",
];

export default function RegisterSalonPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [name, setName] = useState("");
  const [city, setCity] = useState<string>(cities[0]);
  const [category, setCategory] = useState(categories[0].slug);
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (name.trim().length < 2 || phone.trim().length < 10) {
      setError("لطفاً نام سالن و شماره موبایل معتبر را وارد کن.");
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-cream">
      <Header />
      <main className="mx-auto max-w-[900px] px-5 py-12">
        <h1 className="mb-2 text-[26px] font-bold -tracking-[0.5px]">ثبت رایگان آرایشگاه در نوبت‌چی</h1>
        <p className="mb-9 max-w-[60ch] text-[15px] leading-[1.9] text-ink-soft">
          فرم زیر را تکمیل کن. پس از بررسی اطلاعات، پنل مدیریت نوبت‌ها برای سالنت فعال می‌شود.
        </p>

        {submitted ? (
          <div className="animate-fadeIn flex flex-col items-center gap-3 rounded-2xl border border-miami/35 bg-white p-8 text-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-miami-light text-xl text-miami">
              ✓
            </span>
            <h2 className="m-0 text-lg font-bold">درخواستت ثبت شد</h2>
            <p className="m-0 max-w-md text-sm leading-8 text-ink-soft">
              کارشناسان نوبت‌چی طی ۴۸ ساعت آینده اطلاعات سالن «{name}» را بررسی و با شماره {phone} تماس می‌گیرند.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 rounded-2xl border border-ink/10 bg-white p-6">
            {error && (
              <div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </div>
            )}
            <label className="flex flex-col gap-1.5 text-[13px] text-ink-soft">
              نام سالن یا آرایشگاه
              <input
                required
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="مثلاً استودیو مو رها"
                className="rounded-[11px] border border-ink/10 bg-cream px-3.5 py-3 text-[14.5px] focus:outline-none focus:ring-2 focus:ring-miami"
              />
            </label>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-1.5 text-[13px] text-ink-soft">
                شهر
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="appearance-none rounded-[11px] border border-ink/10 bg-cream px-3.5 py-3 text-[14.5px] focus:outline-none focus:ring-2 focus:ring-miami"
                >
                  {cities.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </label>
              <label className="flex flex-col gap-1.5 text-[13px] text-ink-soft">
                دسته‌بندی اصلی خدمات
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="appearance-none rounded-[11px] border border-ink/10 bg-cream px-3.5 py-3 text-[14.5px] focus:outline-none focus:ring-2 focus:ring-miami"
                >
                  {categories.map((c) => (
                    <option key={c.slug} value={c.slug}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <label className="flex flex-col gap-1.5 text-[13px] text-ink-soft">
              شماره موبایل تماس
              <input
                required
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                className="rounded-[11px] border border-ink/10 bg-cream px-3.5 py-3 text-[14.5px] focus:outline-none focus:ring-2 focus:ring-miami"
              />
            </label>
            <label className="flex flex-col gap-1.5 text-[13px] text-ink-soft">
              توضیح کوتاه درباره سالن (اختیاری)
              <textarea
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="مثلاً تخصص در رنگ مو و کراتین با بیش از ۸ سال سابقه"
                className="resize-y rounded-[11px] border border-ink/10 bg-cream px-3.5 py-3 text-[14.5px] leading-[1.8] focus:outline-none focus:ring-2 focus:ring-miami"
              />
            </label>
            <button
              type="submit"
              disabled={submitting}
              className="mt-2 rounded-xl bg-miami py-3.5 text-[15.5px] font-semibold text-white transition-colors hover:bg-ink disabled:opacity-60"
            >
              {submitting ? "در حال ارسال…" : "ارسال درخواست ثبت‌نام"}
            </button>
          </form>
        )}

        <section id="panel" className="mt-14">
          <h2 className="mb-4 text-xl font-bold">امکانات پنل مدیریت سالن</h2>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {panelFeatures.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2.5 rounded-xl border border-ink/10 bg-white p-4 text-[14px] leading-[1.8] text-ink-soft"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-miami-light text-[11px] text-miami">
                  ✓
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}
