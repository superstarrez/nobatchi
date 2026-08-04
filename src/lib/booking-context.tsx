"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { BookingDraft } from "@/types";
import { categories } from "@/lib/mock/categories";
import { salons } from "@/lib/mock/salons";

const initialDraft: BookingDraft = {
  city: "تهران",
  area: "سعادت‌آباد",
  serviceSlug: categories[0].slug,
  salonId: salons[0].id,
  staffId: "any",
  dateKey: null,
  dateLabel: null,
  time: null,
  name: "",
  phone: "",
  note: "",
};

interface BookingContextValue {
  draft: BookingDraft;
  update: (patch: Partial<BookingDraft>) => void;
  reset: () => void;
}

const BookingContext = createContext<BookingContextValue | null>(null);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [draft, setDraft] = useState<BookingDraft>(initialDraft);

  function update(patch: Partial<BookingDraft>) {
    setDraft((prev) => ({ ...prev, ...patch }));
  }

  function reset() {
    setDraft(initialDraft);
  }

  return <BookingContext.Provider value={{ draft, update, reset }}>{children}</BookingContext.Provider>;
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used within BookingProvider");
  return ctx;
}
