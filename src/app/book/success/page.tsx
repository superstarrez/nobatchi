"use client";

import { useRouter } from "next/navigation";
import { BookingSuccess } from "@/components/booking/BookingSuccess";
import { EmptyState } from "@/components/ui/EmptyState";
import { Button } from "@/components/ui/Button";
import { useBooking } from "@/lib/booking-context";
import { salons } from "@/lib/mock/salons";
import { getCategoryBySlug } from "@/lib/mock/categories";

export default function BookingSuccessPage() {
  const router = useRouter();
  const { draft, reset } = useBooking();
  const salon = salons.find((s) => s.id === draft.salonId);
  const serviceName = getCategoryBySlug(draft.serviceSlug)?.name ?? "";

  if (!draft.dateKey || !draft.time || !draft.name) {
    return (
      <EmptyState
        icon="🗓️"
        title="نوبتی برای نمایش وجود ندارد"
        description="به نظر می‌رسد مسیر رزرو کامل نشده یا صفحه رفرش شده است. از ابتدا نوبتت را ثبت کن."
        action={
          <Button href="/book" className="mt-2">
            شروع رزرو نوبت
          </Button>
        }
      />
    );
  }

  const summary = `${draft.name} عزیز، ${serviceName} در ${salon?.name ?? ""} — ${draft.dateLabel}، ساعت ${draft.time} ثبت شد.`;

  function handleReset() {
    reset();
    router.push("/book");
  }

  return <BookingSuccess summary={summary} onReset={handleReset} />;
}
