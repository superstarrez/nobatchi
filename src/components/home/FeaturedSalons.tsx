import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SalonCard } from "@/components/salons/SalonCard";
import { getFeaturedSalons } from "@/lib/mock/salons";

export function FeaturedSalons() {
  const salons = getFeaturedSalons(6);

  return (
    <section id="salons" className="border-y border-miami/[0.16] bg-miami-light">
      <div className="mx-auto max-w-[1180px] px-5 py-[74px]">
        <SectionHeading
          title="سالن‌های پیشنهادی"
          subtitle="پرطرفدارترین سالن‌های تهران براساس امتیاز کاربران"
          action={
            <Link href="/search" className="text-sm text-miami hover:text-ink">
              مشاهده همه سالن‌ها ←
            </Link>
          }
        />
        <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
          {salons.map((salon) => (
            <SalonCard key={salon.id} salon={salon} />
          ))}
        </div>
      </div>
    </section>
  );
}
