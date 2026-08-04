import { benefits } from "@/lib/mock/content";

export function WhyNobatChi() {
  return (
    <section className="mx-auto max-w-[1180px] px-5 py-[78px]">
      <h2 className="mb-8 text-[23px] font-bold -tracking-[0.5px] sm:text-[27px] lg:text-[31px]">
        چرا رزرو از نوبت‌چی راحت‌تره؟
      </h2>
      <div className="grid grid-cols-1 gap-x-11 sm:grid-cols-2">
        {benefits.map((b) => (
          <div key={b.title} className="flex items-start gap-3 border-b border-ink/[0.07] py-4">
            <span className="mt-0.5 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-[7px] bg-miami-light text-xs text-miami">
              ✓
            </span>
            <span className="flex flex-col gap-1">
              <span className="text-[15.5px] font-medium">{b.title}</span>
              <span className="text-[13px] leading-[1.8] text-ink-soft">{b.desc}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
