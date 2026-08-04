"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function LoginPage() {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (phone.trim().length < 10) {
      setError("شماره موبایل را درست وارد کن.");
      return;
    }
    setError(null);
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSent(true);
    }, 600);
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-cream">
      <Header />
      <main className="mx-auto flex max-w-[420px] flex-col items-center px-5 py-16">
        <div className="mb-6 flex items-center gap-2">
          <span className="block h-5 w-5 rounded-md border-2 border-miami" />
          <span className="text-lg font-bold">نوبت‌چی</span>
        </div>

        <div className="w-full rounded-2xl border border-ink/10 bg-white p-6">
          <h1 className="mb-1 text-center text-xl font-bold">ورود به نوبت‌چی</h1>
          <p className="mb-6 text-center text-[13.5px] text-ink-soft">
            برای مشتریان و صاحبان سالن. کد ورود به شماره موبایلت پیامک می‌شود.
          </p>

          {sent ? (
            <div className="animate-fadeIn flex flex-col items-center gap-2 rounded-xl bg-miami-light p-5 text-center">
              <span className="text-xl">📩</span>
              <p className="m-0 text-sm leading-7 text-ink">
                کد ورود به شماره {phone} ارسال شد. (نسخه نمایشی — پیامک واقعی ارسال نمی‌شود)
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
              {error && (
                <div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-2.5 text-sm text-red-700">
                  {error}
                </div>
              )}
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
              <button
                type="submit"
                disabled={submitting}
                className="mt-1 rounded-xl bg-miami py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-ink disabled:opacity-60"
              >
                {submitting ? "در حال ارسال…" : "دریافت کد ورود"}
              </button>
            </form>
          )}
        </div>

        <p className="mt-5 text-center text-[13px] text-ink-soft">
          سالن‌دار هستی و می‌خواهی ثبت‌نام کنی؟{" "}
          <Link href="/register-salon" className="text-miami hover:text-ink">
            ثبت آرایشگاه
          </Link>
        </p>
      </main>
      <Footer />
    </div>
  );
}
