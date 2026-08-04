import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BookingProvider } from "@/lib/booking-context";

export default function BookLayout({ children }: { children: React.ReactNode }) {
  return (
    <BookingProvider>
      <div className="min-h-screen overflow-x-hidden bg-cream">
        <Header />
        <main className="mx-auto max-w-[760px] px-5 py-10">{children}</main>
        <Footer />
      </div>
    </BookingProvider>
  );
}
