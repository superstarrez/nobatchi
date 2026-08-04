import { stats } from "@/lib/mock/content";

export function TrustStrip() {
  return (
    <section className="mx-auto max-w-[1180px] px-5 pb-16 pt-8">
      <div className="grid grid-cols-2 gap-x-9 gap-y-4 border-y border-ink/[0.07] py-6 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.title} className="flex flex-col gap-1.5">
            <span className="text-[19px] font-semibold sm:text-[21px]">{stat.title}</span>
            <span className="text-[13px] text-ink-soft">{stat.subtitle}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
