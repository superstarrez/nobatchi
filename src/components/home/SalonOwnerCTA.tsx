import { Button } from "@/components/ui/Button";
import { dashboardRows } from "@/lib/mock/content";
import { cn } from "@/lib/utils";

const statusStyles: Record<string, string> = {
  تأییدشده: "bg-miami-light text-ink",
  "در انتظار": "bg-cream text-ink-soft",
  آزاد: "bg-cream text-ink-soft",
};

export function SalonOwnerCTA() {
  return (
    <section id="owners" className="mx-auto max-w-[1180px] px-5 py-[78px]">
      <div className="grid grid-cols-1 items-center gap-11 lg:grid-cols-2">
        <div>
          <h2 className="mb-4 text-[23px] font-bold leading-[1.4] -tracking-[0.6px] sm:text-[27px] lg:text-[33px]">
            سالن داری؟
            <br />
            نوبت‌های خالیت رو به مشتری تبدیل کن
          </h2>
          <p className="text-pretty m-0 mb-6 max-w-[46ch] text-[16px] leading-[1.95] text-ink-soft">
            با ثبت سالن در نوبت‌چی، خدمات و نمونه‌کارهات را نمایش بده، مشتری جدید جذب کن و تمام نوبت‌هایت را از یک
            پنل ساده مدیریت کن.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href="/register-salon" size="lg">
              ثبت رایگان آرایشگاه
            </Button>
            <Button href="/register-salon#panel" variant="ghost" size="lg">
              مشاهده امکانات پنل
            </Button>
          </div>
        </div>
        <div className="rounded-[17px] border border-ink/[0.08] bg-white p-4.5 shadow-panel">
          <div className="flex items-center justify-between gap-3 border-b border-ink/[0.07] pb-3.5">
            <span className="text-[14.5px] font-semibold">نوبت‌های امروز</span>
            <span className="text-xs text-ink-soft">پنل مدیریت سالن</span>
          </div>
          {dashboardRows.map((row, i) => (
            <div
              key={i}
              className="flex items-center gap-3 border-b border-ink/[0.05] py-3 last:border-b-0"
            >
              <span className="min-w-[46px] font-mono text-[13px]">{row.time}</span>
              <span className="ms-auto flex flex-col gap-0.5 text-right">
                <span className="text-sm">{row.client}</span>
                <span className="text-xs text-ink-soft">{row.service}</span>
              </span>
              <span className={cn("rounded-md px-2.5 py-1 text-[11.5px]", statusStyles[row.status])}>
                {row.status}
              </span>
            </div>
          ))}
          <div className="mt-3.5 flex gap-2.5 text-[12.5px] text-ink-soft">
            <span className="flex-1 rounded-lg bg-cream p-2.5">
              اشغال امروز: <strong className="text-ink">۷۲٪</strong>
            </span>
            <span className="flex-1 rounded-lg bg-cream p-2.5">
              نوبت خالی: <strong className="text-ink">۵</strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
