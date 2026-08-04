const reviews = [
  {
    initial: "س",
    name: "سارا",
    salon: "استودیو مو رها",
    stars: "★★★★★",
    text: "قیمت رنگ مو رو قبل از رزرو دیدم و همون شد. زمان خالی دقیق بود و منتظر نموندم.",
    date: "مراجعه: تیر ۱۴۰۴",
  },
  {
    initial: "م",
    name: "مهدی",
    salon: "باربرشاپ رادین",
    stars: "★★★★★",
    text: "بدون تلفن نوبت گرفتم، یادآوری هم اومد. یک بار هم ساعتم رو راحت جابه‌جا کردم.",
    date: "مراجعه: مرداد ۱۴۰۴",
  },
  {
    initial: "ن",
    name: "نگار",
    salon: "گالری زیبایی نارین",
    stars: "★★★★☆",
    text: "نمونه‌کارهای میکاپ کمک کرد بین چند سالن انتخاب کنم. کل رزرو کمتر از یک دقیقه بود.",
    date: "مراجعه: خرداد ۱۴۰۴",
  },
];

export function Reviews() {
  return (
    <section className="border-y border-ink/[0.07] bg-white">
      <div className="mx-auto max-w-[1180px] px-5 py-[74px]">
        <h2 className="mb-7 text-[23px] font-bold -tracking-[0.5px] sm:text-[27px] lg:text-[31px]">
          تجربه کاربران نوبت‌چی
        </h2>
        <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.name} className="m-0 rounded-[15px] border border-ink/[0.07] bg-cream p-5">
              <div className="mb-3.5 flex items-center gap-2.5">
                <span className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-miami-light text-sm font-semibold">
                  {r.initial}
                </span>
                <span className="flex flex-col gap-0.5">
                  <span className="text-[14.5px] font-medium">{r.name}</span>
                  <span className="text-xs text-ink-soft">{r.salon}</span>
                </span>
                <span className="ms-auto text-[13px] text-miami">{r.stars}</span>
              </div>
              <blockquote className="m-0 text-[14.5px] leading-[1.95]">{r.text}</blockquote>
              <figcaption className="mt-3 text-xs text-ink-soft">{r.date}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
