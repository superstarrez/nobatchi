import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";
import { getSalonBySlug, salons } from "@/lib/mock/salons";
import { formatToman, toFaDigits, unsplashUrl } from "@/lib/utils";

export function generateStaticParams() {
  return salons.map((s) => ({ slug: s.slug }));
}

export default function SalonDetailPage({ params }: { params: { slug: string } }) {
  const salon = getSalonBySlug(params.slug);
  if (!salon) notFound();

  return (
    <div className="min-h-screen overflow-x-hidden bg-cream">
      <Header />
      <main className="mx-auto max-w-[1180px] px-5 py-9">
        <nav className="mb-5 text-[13px] text-ink-soft">
          <Link href="/search" className="hover:text-ink">
            جست‌وجوی سالن‌ها
          </Link>
          <span className="mx-2">/</span>
          <span className="text-ink">{salon.name}</span>
        </nav>

        <div className="relative mb-6 aspect-[16/7] w-full overflow-hidden rounded-2xl border border-ink/[0.08] bg-miami-light">
          <Image src={unsplashUrl(salon.coverImageId, 1200, 520)} alt={salon.name} fill priority className="object-cover" />
        </div>

        <div className="grid grid-cols-1 gap-9 lg:grid-cols-[1fr_320px]">
          <div>
            <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
              <div>
                <h1 className="mb-1.5 text-[26px] font-bold -tracking-[0.5px]">{salon.name}</h1>
                <p className="m-0 text-[14.5px] text-ink-soft">{salon.address}</p>
              </div>
              <div className="flex shrink-0 items-center gap-1.5 rounded-xl bg-white px-3.5 py-2 text-[14px] shadow-card">
                <span className="text-miami">★</span>
                <span className="font-semibold">{toFaDigits(salon.rating.toFixed(1))}</span>
                <span className="text-[12px] text-ink-soft">({toFaDigits(salon.reviewCount)} نظر)</span>
              </div>
            </div>

            <p className="mb-6 max-w-[70ch] text-[15px] leading-[1.95] text-ink-soft">{salon.description}</p>

            <section className="mb-8">
              <h2 className="mb-3 text-lg font-semibold">خدمات و قیمت پایه</h2>
              <div className="flex flex-wrap gap-2">
                {salon.services.map((service) => (
                  <span key={service} className="rounded-full border border-ink/10 bg-white px-3.5 py-1.5 text-[13.5px]">
                    {service}
                  </span>
                ))}
              </div>
              <p className="mt-3 text-[14px] text-ink-soft">
                شروع از <strong className="font-semibold text-ink">{formatToman(salon.priceFrom)}</strong>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-3 text-lg font-semibold">نمونه‌کارها</h2>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {salon.galleryImageIds.map((id) => (
                  <div key={id} className="relative aspect-[3/4] overflow-hidden rounded-xl border border-ink/10 bg-miami-light">
                    <Image src={unsplashUrl(id, 480, 640)} alt={salon.name} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-8">
              <h2 className="mb-3 text-lg font-semibold">متخصص‌ها</h2>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {salon.staff.map((person) => (
                  <div key={person.id} className="flex items-center gap-3 rounded-xl border border-ink/10 bg-white p-3">
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-miami-light">
                      <Image src={unsplashUrl(person.imageId, 96, 96)} alt={person.name} fill className="object-cover" />
                    </div>
                    <div>
                      <p className="m-0 text-[14.5px] font-medium">{person.name}</p>
                      <p className="m-0 text-[12.5px] text-ink-soft">{person.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold">نظرات کاربران</h2>
              {salon.reviews.length === 0 ? (
                <EmptyState
                  icon="💬"
                  title="هنوز نظری ثبت نشده"
                  description="فقط کاربرانی که نوبتشان در این سالن انجام شده می‌توانند نظر ثبت کنند."
                />
              ) : (
                <div className="flex flex-col gap-3">
                  {salon.reviews.map((review) => (
                    <figure key={review.id} className="m-0 rounded-xl border border-ink/10 bg-white p-4">
                      <div className="mb-2 flex items-center gap-2.5">
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-miami-light text-sm font-semibold">
                          {review.initial}
                        </span>
                        <span className="text-[14px] font-medium">{review.userName}</span>
                        <span className="ms-auto text-[13px] text-miami">{"★".repeat(review.stars)}</span>
                      </div>
                      <blockquote className="m-0 text-[14px] leading-[1.9] text-ink">{review.text}</blockquote>
                      <figcaption className="mt-2 text-[12px] text-ink-soft">{review.date}</figcaption>
                    </figure>
                  ))}
                </div>
              )}
            </section>
          </div>

          <aside className="h-fit rounded-2xl border border-ink/[0.08] bg-white p-5 shadow-card lg:sticky lg:top-24">
            <p className="mb-1 text-[13px] text-ink-soft">اولین زمان خالی</p>
            <p className="mb-4 text-[16px] font-semibold">{salon.nextSlot}</p>
            <Button href={`/book?salon=${salon.id}`} className="w-full">
              رزرو نوبت در این سالن
            </Button>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}
