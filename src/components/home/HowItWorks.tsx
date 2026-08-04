const steps = [
  { num: "۰۱", title: "انتخاب کن", desc: "شهر، محله و خدمات موردنظرت را مشخص کن." },
  { num: "۰۲", title: "مقایسه کن", desc: "سالن‌ها، قیمت‌ها، امتیازها و نمونه‌کارها را ببین." },
  { num: "۰۳", title: "رزرو کن", desc: "زمان مناسب را انتخاب کن و نوبتت را آنلاین ثبت کن." },
];

export function HowItWorks() {
  return (
    <section id="how" className="mx-auto max-w-[1180px] px-5 py-[78px]">
      <h2 className="mb-8 text-[23px] font-bold -tracking-[0.5px] sm:text-[27px] lg:text-[31px]">
        در سه مرحله نوبتت را بگیر
      </h2>
      <div className="grid grid-cols-1 gap-7 sm:grid-cols-3">
        {steps.map((step, i) => (
          <div
            key={step.num}
            className="pt-5"
            style={{ borderTop: `2px solid ${i === 0 ? "#2BBEF3" : "rgba(20,33,61,0.12)"}` }}
          >
            <span className="font-mono text-xs text-ink-soft">{step.num}</span>
            <h3 className="mb-2 mt-2 text-[19px] font-semibold">{step.title}</h3>
            <p className="m-0 text-[14.5px] leading-[1.9] text-ink-soft">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
