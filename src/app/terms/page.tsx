import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-cream">
      <Header />
      <main className="mx-auto max-w-[760px] px-5 py-12">
        <h1 className="mb-6 text-[26px] font-bold -tracking-[0.5px]">قوانین و مقررات</h1>
        <div className="flex flex-col gap-6 text-[14.5px] leading-[2] text-ink-soft">
          <section>
            <h2 className="mb-2 text-lg font-semibold text-ink">۱. استفاده از خدمات</h2>
            <p className="m-0">
              نوبت‌چی یک پلتفرم واسط برای پیدا کردن و رزرو آنلاین نوبت از سالن‌های زیبایی و آرایشگاه‌هاست. استفاده از
              خدمات به معنای پذیرش این قوانین است.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-semibold text-ink">۲. رزرو و لغو نوبت</h2>
            <p className="m-0">
              رزرو نوبت از طریق نوبت‌چی رایگان است. کاربران می‌توانند نوبت خود را تا زمان مشخص‌شده توسط هر سالن، بدون
              تماس تلفنی تغییر دهند یا لغو کنند.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-semibold text-ink">۳. مسئولیت سالن‌ها</h2>
            <p className="m-0">
              اطلاعات خدمات، قیمت پایه و نمونه‌کارها توسط خود سالن‌ها ثبت می‌شود. نوبت‌چی پیش از انتشار، این اطلاعات را
              بررسی می‌کند اما مسئولیت نهایی کیفیت خدمات با سالن ارائه‌دهنده است.
            </p>
          </section>
          <section id="privacy">
            <h2 className="mb-2 text-lg font-semibold text-ink">۴. حریم خصوصی</h2>
            <p className="m-0">
              اطلاعات شخصی کاربران شامل نام و شماره موبایل، تنها برای مدیریت رزرو نوبت و ارسال یادآوری استفاده می‌شود و
              با اشخاص ثالث به اشتراک گذاشته نمی‌شود.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-semibold text-ink">۵. نظرات کاربران</h2>
            <p className="m-0">
              فقط کاربرانی که نوبتشان در سالن انجام شده باشد می‌توانند نظر و امتیاز ثبت کنند. نظرات نامرتبط یا حاوی
              محتوای نامناسب حذف می‌شوند.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
