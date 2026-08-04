/**
 * Lightweight Jalali (Persian) calendar helpers used by the booking date picker.
 * Relies on the built-in Intl "persian" calendar so no extra dependency is required.
 */

export const JALALI_MONTH_NAMES = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
];

export const WEEKDAY_SHORT = ["ش", "ی", "د", "س", "چ", "پ", "ج"];

let cachedFormatter: Intl.DateTimeFormat | null = null;
function getPersianFormatter() {
  if (!cachedFormatter) {
    cachedFormatter = new Intl.DateTimeFormat("en-US-u-ca-persian-nu-latn", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
  }
  return cachedFormatter;
}

export interface JalaliParts {
  year: number;
  month: number;
  day: number;
}

export function toJalaliParts(date: Date): JalaliParts {
  const parts: Record<string, number> = {};
  for (const part of getPersianFormatter().formatToParts(date)) {
    if (part.type !== "literal") parts[part.type] = parseInt(part.value, 10);
  }
  return { year: parts.year, month: parts.month, day: parts.day };
}

export function addDays(date: Date, amount: number): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + amount);
}

export function getMonthLength(firstDayOfMonth: Date): number {
  const targetMonth = toJalaliParts(firstDayOfMonth).month;
  let length = 29;
  while (toJalaliParts(addDays(firstDayOfMonth, length)).month === targetMonth) {
    length += 1;
  }
  return length;
}

export interface JalaliMonthView {
  today: Date;
  firstOfMonth: Date;
  length: number;
  parts: JalaliParts;
  leadingBlanks: number;
}

/** Returns the calendar grid data for the Jalali month at `monthOffset` from the current month. */
export function getJalaliMonthView(monthOffset: number): JalaliMonthView {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let firstOfMonth = addDays(today, 1 - toJalaliParts(today).day);
  for (let i = 0; i < monthOffset; i += 1) {
    firstOfMonth = addDays(firstOfMonth, getMonthLength(firstOfMonth));
  }
  const parts = toJalaliParts(firstOfMonth);
  const length = getMonthLength(firstOfMonth);
  // JS getDay(): Sat=6 ... Fri=5. Week should start on Saturday (ش).
  const leadingBlanks = (firstOfMonth.getDay() + 1) % 7;
  return { today, firstOfMonth, length, parts, leadingBlanks };
}

export function dateKey(date: Date): string {
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
}
