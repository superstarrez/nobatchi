import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { unsplashUrl } from "@/lib/utils";

const steps = [
  { label: "انتخاب خدمت", active: false },
  { label: "انتخاب سالن", active: false },
  { label: "انتخاب زمان", active: false },
  { label: "تأیید نوبت", active: true },
];

export function Hero() {
  return (
    <section id="search" className="mx-auto grid max-w-[1180px] items-center gap-12 px-5 pb-11 pt-14 md:pt-[74px] lg:grid-cols-2">
      <div className="animate-riseIn">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-miami-light px-3.5 py-1.5 text-[13px]">
          <span className="h-1.5 w-1.5 rounded-full bg-miami" />
          رزرو آنلاین، یادآوری نوبت و امکان تغییر زمان
        </div>
        <h1 className="text-balance mb-4 text-[30px] font-bold leading-[1.32] -tracking-[0.8px] sm:text-[38px] lg:text-[48px]">
          آرایشگاه خوب نزدیک تو
          <br />
          فقط چند کلیک فاصله داره
        </h1>
        <p className="text-pretty m-0 mb-7 max-w-[46ch] text-[17px] leading-[1.95] text-ink-soft">
          قیمت‌ها، نمونه‌کارها، نظرات و زمان‌های خالی سالن‌ها را ببین و بدون تماس تلفنی نوبتت را آنلاین رزرو کن.
        </p>
        <div className="mb-8 flex flex-wrap gap-3">
          <Button href="/search" size="lg">
            پیدا کردن آرایشگاه
          </Button>
          <Button href="/register-salon" variant="outline" size="lg">
            ثبت آرایشگاه در نوبت‌چی
          </Button>
        </div>
        <div className="flex flex-wrap items-center gap-2.5 text-[13px] text-ink-soft">
          {steps.map((step, i) => (
            <span key={step.label} className="contents">
              <span
                className={
                  step.active
                    ? "rounded-lg border border-miami/35 bg-miami-light px-3.5 py-1.5 text-ink"
                    : "rounded-lg border border-ink/[0.08] bg-white px-3.5 py-1.5"
                }
              >
                {step.label}
              </span>
              {i < steps.length - 1 && <span className="text-miami">←</span>}
            </span>
          ))}
        </div>
      </div>
      <div className="animate-riseInSlow relative">
        <div className="aspect-[4/3.4] overflow-hidden rounded-[18px] border border-ink/[0.08] bg-miami-light">
          <Image
            src={unsplashUrl("1633681926022-84c23e8cb2d6", 1000, 850)}
            alt="فضای یک سالن زیبایی مدرن"
            width={1000}
            height={850}
            priority
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
