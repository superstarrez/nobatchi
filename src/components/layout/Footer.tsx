import Link from "next/link";

export function Footer() {
  return (
    <footer id="login-area" className="border-t border-ink/10 bg-cream">
      <div className="mx-auto grid max-w-[1180px] grid-cols-2 gap-9 px-5 pb-9 pt-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="col-span-2 max-w-[34ch] lg:col-span-1">
          <div className="mb-3 flex items-center gap-2">
            <span className="block h-5 w-5 rounded-md border-2 border-miami" />
            <span className="text-[19px] font-bold">نوبت‌چی</span>
            <span className="font-mono text-[10.5px] tracking-widest text-ink-soft">NobatChi</span>
          </div>
          <p className="m-0 mb-4 text-[13.5px] leading-8 text-ink-soft">
            پلتفرم پیدا کردن، مقایسه و رزرو آنلاین نوبت از آرایشگاه‌ها و سالن‌های زیبایی.
          </p>
          <div className="flex gap-2">
            <span className="flex h-[62px] w-[62px] items-center justify-center rounded-lg border border-dashed border-ink/20 text-center font-mono text-[9.5px] text-ink-soft">
              نماد اعتماد
            </span>
            <span className="flex h-[62px] w-[62px] items-center justify-center rounded-lg border border-dashed border-ink/20 text-center font-mono text-[9.5px] text-ink-soft">
              نماد اعتماد
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-2.5 text-[13.5px]">
          <span className="mb-0.5 text-sm font-semibold">خدمات</span>
          <Link href="/search?service=hair-cut" className="text-ink-soft transition-colors hover:text-ink">
            کوتاهی و اصلاح مو
          </Link>
          <Link href="/search?service=color" className="text-ink-soft transition-colors hover:text-ink">
            رنگ و لایت
          </Link>
          <Link href="/search?service=makeup" className="text-ink-soft transition-colors hover:text-ink">
            میکاپ و گریم
          </Link>
          <Link href="/search?service=nails" className="text-ink-soft transition-colors hover:text-ink">
            خدمات ناخن
          </Link>
          <Link href="/search?service=bridal" className="text-ink-soft transition-colors hover:text-ink">
            خدمات عروس
          </Link>
          <Link href="/search?service=men" className="text-ink-soft transition-colors hover:text-ink">
            آرایشگاه مردانه
          </Link>
        </div>

        <div className="flex flex-col gap-2.5 text-[13.5px]">
          <span className="mb-0.5 text-sm font-semibold">نوبت‌چی</span>
          <Link href="/#" className="text-ink-soft transition-colors hover:text-ink">
            درباره ما
          </Link>
          <Link href="/#" className="text-ink-soft transition-colors hover:text-ink">
            تماس با ما
          </Link>
          <Link href="/terms" className="text-ink-soft transition-colors hover:text-ink">
            قوانین و مقررات
          </Link>
          <Link href="/terms#privacy" className="text-ink-soft transition-colors hover:text-ink">
            حریم خصوصی
          </Link>
        </div>

        <div className="flex flex-col gap-2.5 text-[13.5px]">
          <span className="mb-0.5 text-sm font-semibold">صاحبان سالن</span>
          <Link href="/register-salon" className="text-ink-soft transition-colors hover:text-ink">
            ثبت آرایشگاه
          </Link>
          <Link href="/login" className="text-ink-soft transition-colors hover:text-ink">
            ورود صاحبان سالن
          </Link>
          <Link href="/register-salon#panel" className="text-ink-soft transition-colors hover:text-ink">
            امکانات پنل
          </Link>
          <span className="mt-2 flex gap-3.5 text-ink-soft">
            <a href="#" className="transition-colors hover:text-ink">
              اینستاگرام
            </a>
            <a href="#" className="transition-colors hover:text-ink">
              تلگرام
            </a>
          </span>
        </div>
      </div>
      <div className="mx-auto flex max-w-[1180px] flex-wrap justify-between gap-3.5 border-t border-ink/[0.07] px-5 pb-8 pt-4 text-[12.5px] text-ink-soft">
        <span>© تمام حقوق برای نوبت‌چی محفوظ است.</span>
        <span className="font-mono">nobatchi.ir</span>
      </div>
    </footer>
  );
}
