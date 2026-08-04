export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/** Builds an Unsplash photo URL from a photo id fragment, matching the source design. */
export function unsplashUrl(id: string, width = 640, height = 480) {
  return `https://images.unsplash.com/photo-${id}?w=${width}&h=${height}&fit=crop&crop=entropy&auto=format&q=70`;
}

/** Converts standard digits to Persian digits. */
export function toFaDigits(input: number | string): string {
  const fa = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return String(input).replace(/[0-9]/g, (d) => fa[Number(d)]);
}

/** Formats a Toman price with Persian digits and thousands separators. */
export function formatToman(value: number): string {
  const withSeparators = value.toLocaleString("en-US");
  return `${toFaDigits(withSeparators)} تومان`;
}
