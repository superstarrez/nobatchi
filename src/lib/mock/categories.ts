import { ServiceCategory } from "@/types";

export const categories: ServiceCategory[] = [
  { slug: "hair-cut", name: "کوتاهی و اصلاح مو", imageId: "1634449571010-02389ed0f9b0", salonCount: 128 },
  { slug: "color", name: "رنگ و لایت", imageId: "1675034743339-0b0747047727", salonCount: 96 },
  { slug: "keratin", name: "کراتین و احیای مو", imageId: "1560869713-7d0a29430803", salonCount: 74 },
  { slug: "makeup", name: "میکاپ", imageId: "1516975080664-ed2fc6a32937", salonCount: 112 },
  { slug: "nails", name: "خدمات ناخن", imageId: "1632345031435-8727f6897d53", salonCount: 88 },
  { slug: "skincare", name: "مراقبت پوست", imageId: "1731514771613-991a02407132", salonCount: 53 },
  { slug: "bridal", name: "خدمات عروس", imageId: "1580618672591-eb180b1a973f", salonCount: 41 },
  { slug: "men", name: "آرایشگاه مردانه", imageId: "1589710751893-f9a6770ad71b", salonCount: 137 },
];

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}
