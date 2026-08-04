import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section className="bg-miami-light">
      <div className="mx-auto max-w-[1180px] px-5 py-[88px] text-center">
        <h2 className="text-balance mx-auto mb-4 text-[25px] font-bold leading-[1.42] -tracking-[0.7px] sm:text-[32px] lg:text-[38px]">
          وقتشه بدون تماس تلفنی
          <br />
          نوبت آرایشگاهت رو رزرو کنی
        </h2>
        <p className="text-pretty mx-auto mb-7 max-w-[52ch] text-[16.5px] leading-[1.9] text-ink-soft">
          سالن مناسب را پیدا کن، نمونه‌کارها را ببین و در کمتر از یک دقیقه نوبتت را ثبت کن.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button href="/search" size="lg">
            پیدا کردن آرایشگاه
          </Button>
          <Button href="/#services" variant="ghost" size="lg" className="border-miami/40">
            مشاهده خدمات
          </Button>
        </div>
      </div>
    </section>
  );
}
