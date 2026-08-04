# نوبت‌چی (NobatChi) — Next.js Rebuild

بازسازی کامل صفحه فرود «نوبت‌چی» با Next.js 14 (App Router)، TypeScript، Tailwind CSS و ساختار Component-Based.

## اجرای پروژه

```bash
npm install
npm run dev
```

سپس آدرس `http://localhost:3000` را در مرورگر باز کن.

برای build نهایی:

```bash
npm run build
npm start
```

پروژه با `npm run build` بدون خطای TypeScript یا ESLint کامپایل می‌شود (تست‌شده).

## انتشار روی GitHub و Vercel

1. فایل ZIP پروژه را روی رایانه از حالت فشرده خارج کن.
2. **محتویات داخل پوشه** را در Repository آپلود کن؛ خود فایل ZIP را آپلود نکن.
3. مطمئن شو `package.json`، `next.config.mjs` و پوشه `src` مستقیماً در صفحه اصلی Repository دیده می‌شوند.
4. Repository را در Vercel Import کن و Framework Preset را روی `Next.js` بگذار.
5. Root Directory را خالی یا `./` نگه دار و برای Build Command و Output Directory مقدار سفارشی وارد نکن.
6. روی Deploy بزن. Vercel به‌صورت خودکار `npm run build` را اجرا می‌کند.

اگر Repository فقط یک فایل ZIP یا یک پوشهٔ تو‌در‌تو داشته باشد، Vercel صفحهٔ اصلی را پیدا نمی‌کند و ممکن است خطای `404 NOT_FOUND` نمایش دهد.

## ساختار پروژه

```
src/
  app/                 # صفحات App Router
    page.tsx           # صفحه اصلی
    search/             # جست‌وجو و فیلتر سالن‌ها
    salons/[slug]/       # صفحه جزئیات هر سالن
    book/                # مسیر چندمرحله‌ای رزرو (خدمت → سالن → متخصص → تاریخ/ساعت → تأیید → موفقیت)
    register-salon/       # ثبت آرایشگاه
    login/                # ورود
    terms/                # قوانین و حریم خصوصی
  components/
    layout/              # Header, MobileMenu, Footer
    home/                 # بخش‌های صفحه اصلی (Hero, ServiceCategories, FAQ, ...)
    booking/              # DateSelector, TimeSlotSelector, StaffSelector, InlineBookingWidget, ...
    salons/               # SalonCard
    ui/                   # Button, EmptyState, ErrorState, LoadingSkeleton, SectionHeading
  lib/
    mock/                 # داده‌های نمایشی (سالن‌ها، خدمات، شهرها، نظرات، سوالات متداول)
    jalali.ts             # توابع تقویم شمسی برای انتخاب‌گر تاریخ
    booking-context.tsx   # Context برای وضعیت مسیر رزرو چندمرحله‌ای
    utils.ts
  types/                  # تایپ‌های TypeScript مشترک
```

## نکات فنی

- **رنگ‌ها و فونت**: طبق درخواست، #FFF8EE (سفید شیری، پس‌زمینه اصلی)، #2BBEF3 (آبی بلو میامی، رنگ ثانویه) و #14213D (رنگ تیترها/متن) در `tailwind.config.ts` تعریف شده‌اند. فونت Vazirmatn به‌صورت self-hosted از طریق پکیج `@fontsource/vazirmatn` بارگذاری می‌شود (به‌جای Google Fonts، تا در محیط‌های بدون دسترسی به fonts.googleapis.com هم بدون مشکل build شود).
- **RTL و ریسپانسیو**: تمام صفحات با `dir="rtl"` و طراحی Mobile First پیاده‌سازی شده‌اند.
- **حالت‌های Loading / Empty / Error**: در `src/components/ui` (`LoadingSkeleton`, `EmptyState`, `ErrorState`) و در `src/app/loading.tsx` / `src/app/error.tsx` / `src/app/not-found.tsx`.
- **رزرو نوبت**: دو مسیر رزرو پیاده‌سازی شده:
  1. ویجت رزرو مستقیم در صفحه اصلی (بخش «رزرو مستقیم نوبت») — دقیقاً مطابق طراحی اصلی.
  2. مسیر چندمرحله‌ای در `/book` با صفحات جدا برای هرمرحله (انتخاب خدمت، سالن، متخصص، تاریخ/ساعت، تأیید) که با React Context بین صفحات وضعیت را نگه می‌دارد.
- **داده‌ها**: همه به‌صورت Mock Data در `src/lib/mock` قرار دارند و ساختار به‌گونه‌ای است که به‌راحتی می‌توان بعداً این فایل‌ها را با فراخوانی API واقعی جایگزین کرد (تایپ‌ها در `src/types` از قبل آماده‌اند).
- **تصاویر**: از `next/image` با دامنه مجاز `images.unsplash.com` (در `next.config.mjs`) استفاده شده است.

## محدودیت‌های شناخته‌شده

- این یک نسخه نمایشی (Prototype) با داده‌های Mock است؛ به دیتابیس یا API واقعی وصل نیست.
- ارسال پیامک/OTP در صفحه ورود و ثبت آرایشگاه فقط شبیه‌سازی شده است.
