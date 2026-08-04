import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { SearchBookingForm } from "@/components/home/SearchBookingForm";
import { TrustStrip } from "@/components/home/TrustStrip";
import { ServiceCategories } from "@/components/home/ServiceCategories";
import { FeaturedSalons } from "@/components/home/FeaturedSalons";
import { InlineBookingWidget } from "@/components/booking/InlineBookingWidget";
import { WhyNobatChi } from "@/components/home/WhyNobatChi";
import { PortfolioGallery } from "@/components/home/PortfolioGallery";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Reviews } from "@/components/home/Reviews";
import { SalonOwnerCTA } from "@/components/home/SalonOwnerCTA";
import { FAQ } from "@/components/home/FAQ";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-cream">
      <Header />
      <main>
        <Hero />
        <SearchBookingForm />
        <TrustStrip />
        <ServiceCategories />
        <FeaturedSalons />
        <InlineBookingWidget />
        <WhyNobatChi />
        <PortfolioGallery />
        <HowItWorks />
        <Reviews />
        <SalonOwnerCTA />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
