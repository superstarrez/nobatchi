import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { EmptyState } from "@/components/ui/EmptyState";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-cream">
      <Header />
      <main className="mx-auto max-w-[600px] px-5 py-20">
        <EmptyState
          icon="🔎"
          title="این صفحه پیدا نشد"
          description="آدرسی که وارد کردی وجود ندارد یا جابه‌جا شده است."
          action={
            <Button href="/" className="mt-2">
              بازگشت به صفحه اصلی
            </Button>
          }
        />
      </main>
      <Footer />
    </div>
  );
}
