export const cities = ["تهران", "مشهد", "اصفهان", "شیراز", "تبریز"] as const;

export const areasByCity: Record<string, string[]> = {
  تهران: ["سعادت‌آباد", "ونک", "نارمک", "یوسف‌آباد", "شهرک غرب"],
  مشهد: ["احمدآباد", "وکیل‌آباد", "قاسم‌آباد"],
  اصفهان: ["چهارباغ", "ملاصدرا", "جلفا"],
  شیراز: ["زند", "معالی‌آباد"],
  تبریز: ["ولیعصر", "منظریه"],
};

export const dayFilters = ["امروز", "فردا", "این هفته", "هفته آینده"] as const;

export const priceRanges = [
  { label: "همه قیمت‌ها", min: 0, max: Infinity },
  { label: "تا ۵۰۰ هزار تومان", min: 0, max: 500_000 },
  { label: "۵۰۰ هزار تا ۱ میلیون", min: 500_000, max: 1_000_000 },
  { label: "بیش از ۱ میلیون", min: 1_000_000, max: Infinity },
] as const;

export const sortOptions = [
  { value: "popular", label: "محبوب‌ترین" },
  { value: "soonest", label: "نزدیک‌ترین زمان خالی" },
  { value: "rating", label: "بیشترین امتیاز" },
  { value: "price-asc", label: "کمترین قیمت" },
] as const;

export type SortValue = (typeof sortOptions)[number]["value"];
