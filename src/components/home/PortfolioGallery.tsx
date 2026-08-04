"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { galleryItems, galleryTabs } from "@/lib/mock/content";
import { unsplashUrl, cn } from "@/lib/utils";

export function PortfolioGallery() {
  const [tab, setTab] = useState<(typeof galleryTabs)[number]>("همه");

  const items = galleryItems.filter((g) => tab === "همه" || g.category === tab);

  return (
    <section className="border-y border-ink/[0.07] bg-white">
      <div className="mx-auto max-w-[1180px] px-5 py-[74px]">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-5">
          <div>
            <h2 className="mb-2 text-[23px] font-bold -tracking-[0.5px] sm:text-[27px] lg:text-[31px]">
              نمونه‌کارهای واقعی سالن‌ها
            </h2>
            <p className="m-0 text-[15.5px] text-ink-soft">قبل از رزرو، کار واقعی هر سالن را ببین.</p>
          </div>
          <div className="scrollbar-thin flex gap-2 overflow-x-auto pb-1">
            {galleryTabs.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTab(t)}
                className={cn(
                  "shrink-0 rounded-full border px-3.5 py-2 text-[13.5px] transition-all",
                  tab === t ? "border-miami bg-miami text-white" : "border-ink/[0.12] bg-white text-ink-soft"
                )}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-4">
          {items.map((g) => (
            <Link
              key={g.id}
              href={`/salons/${g.salonSlug}`}
              className="group relative aspect-[3/4] overflow-hidden rounded-[14px] border border-ink/[0.07] bg-miami-light"
            >
              <Image
                src={unsplashUrl(g.imageId, 480, 640)}
                alt={g.category}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end gap-1 bg-gradient-to-t from-ink/[0.85] via-ink/[0.05] to-transparent p-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <span className="text-[15px] font-semibold text-white">{g.salonName}</span>
                <span className="text-[12.5px] text-white/75">{g.category}</span>
                <span className="mt-1 text-[13px] text-miami">مشاهده سالن ←</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
