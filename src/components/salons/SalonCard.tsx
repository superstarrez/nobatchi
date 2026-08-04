import Image from "next/image";
import Link from "next/link";
import { Salon } from "@/types";
import { formatToman, toFaDigits, unsplashUrl } from "@/lib/utils";

export function SalonCard({ salon }: { salon: Salon }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-ink/[0.07] bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-cardHover">
      <div className="relative aspect-video overflow-hidden bg-miami-light">
        <Image
          src={unsplashUrl(salon.coverImageId, 640, 360)}
          alt={salon.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="m-0 mb-1 text-[17px] font-semibold">{salon.name}</h3>
            <p className="m-0 text-[13px] text-ink-soft">
              {salon.area}، {salon.city}
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-1 rounded-lg bg-cream px-2.5 py-1 text-[13px]">
            <span className="text-miami">★</span>
            <span className="font-semibold">{toFaDigits(salon.rating.toFixed(1))}</span>
            <span className="text-[11.5px] text-ink-soft">({toFaDigits(salon.reviewCount)})</span>
          </div>
        </div>
        <p className="m-0 mt-3 text-[13px] leading-[1.8] text-ink-soft">{salon.services.join(" · ")}</p>
        <div className="my-3.5 flex flex-wrap items-center justify-between gap-2.5 border-t border-ink/[0.06] pt-3.5 text-[13px]">
          <span className="text-ink-soft">
            شروع از <strong className="font-semibold text-ink">{formatToman(salon.priceFrom)}</strong>
          </span>
          <span className="inline-flex items-center gap-1.5 text-ink">
            <span className="h-1.5 w-1.5 rounded-full bg-miami" />
            اولین زمان خالی: {salon.nextSlot}
          </span>
        </div>
        <div className="flex gap-2">
          <Link
            href={`/book?salon=${salon.id}`}
            className="flex-1 rounded-[10px] bg-miami py-2.5 text-center text-[14px] font-semibold text-white transition-colors hover:bg-ink"
          >
            رزرو نوبت
          </Link>
          <Link
            href={`/salons/${salon.slug}`}
            className="flex-1 rounded-[10px] border border-ink/[0.12] bg-white py-2.5 text-center text-[14px] text-ink transition-colors hover:bg-cream"
          >
            مشاهده سالن
          </Link>
        </div>
      </div>
    </article>
  );
}
