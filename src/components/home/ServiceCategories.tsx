import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { categories } from "@/lib/mock/categories";
import { unsplashUrl, toFaDigits } from "@/lib/utils";

export function ServiceCategories() {
  return (
    <section id="services" className="mx-auto max-w-[1180px] px-5 pb-[74px]">
      <SectionHeading
        title="خدمات محبوب"
        subtitle="دسته‌ای که می‌خواهی را انتخاب کن و سالن‌های مناسبش را ببین."
        action={
          <Link href="/search" className="text-sm text-miami hover:text-ink">
            مشاهده همه خدمات ←
          </Link>
        }
      />
      <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 md:grid-cols-4">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/search?service=${cat.slug}`}
            className="flex items-center gap-3 rounded-[13px] border border-ink/[0.08] bg-white p-2.5 text-ink transition-all hover:-translate-y-0.5 hover:border-miami"
          >
            <span className="relative block h-[46px] w-[46px] shrink-0 overflow-hidden rounded-[10px] bg-miami-light">
              <Image src={unsplashUrl(cat.imageId, 120, 120)} alt={cat.name} fill className="object-cover" />
            </span>
            <span className="flex flex-col gap-0.5">
              <span className="text-[14.5px] font-medium">{cat.name}</span>
              <span className="text-[11.5px] text-ink-soft">{toFaDigits(cat.salonCount)} سالن</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
