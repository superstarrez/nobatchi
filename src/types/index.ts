export type Gender = "بانوان" | "آقایان" | "خانواده";

export interface ServiceCategory {
  slug: string;
  name: string;
  imageId: string;
  salonCount: number;
}

export interface StaffMember {
  id: string;
  name: string;
  role: string;
  imageId: string;
}

export interface Review {
  id: string;
  initial: string;
  userName: string;
  salonName: string;
  stars: number;
  text: string;
  date: string;
}

export interface Salon {
  id: string;
  slug: string;
  name: string;
  city: string;
  area: string;
  gender: Gender;
  rating: number;
  reviewCount: number;
  services: string[];
  serviceSlugs: string[];
  priceFrom: number;
  nextSlot: string;
  coverImageId: string;
  galleryImageIds: string[];
  description: string;
  address: string;
  staff: StaffMember[];
  reviews: Review[];
}

export interface GalleryItem {
  id: string;
  category: string;
  salonName: string;
  salonSlug: string;
  imageId: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface DashboardRow {
  time: string;
  client: string;
  service: string;
  status: "تأییدشده" | "در انتظار" | "آزاد";
}

export interface BookingDraft {
  city: string;
  area: string;
  serviceSlug: string;
  salonId: string;
  staffId: string;
  dateKey: string | null;
  dateLabel: string | null;
  time: string | null;
  name: string;
  phone: string;
  note: string;
}

export type RequestState = "idle" | "loading" | "success" | "error" | "empty";
