import type { Metadata } from "next";
import "@fontsource/vazirmatn/300.css";
import "@fontsource/vazirmatn/400.css";
import "@fontsource/vazirmatn/500.css";
import "@fontsource/vazirmatn/600.css";
import "@fontsource/vazirmatn/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "نوبت‌چی | رزرو آنلاین نوبت آرایشگاه",
  description:
    "قیمت‌ها، نمونه‌کارها، نظرات و زمان‌های خالی سالن‌ها را ببین و بدون تماس تلفنی نوبتت را آنلاین رزرو کن.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="font-vazir bg-cream text-ink antialiased">{children}</body>
    </html>
  );
}
