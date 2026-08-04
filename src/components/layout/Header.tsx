"use client";

import Link from "next/link";
import { useState } from "react";
import { MobileMenu } from "./MobileMenu";

const navLinks = [
  { href: "/search", label: "پیدا کردن آرایشگاه" },
  { href: "/#services", label: "خدمات" },
  { href: "/#salons", label: "سالن‌های محبوب" },
  { href: "/#how", label: "نحوه کار" },
  { href: "/register-salon", label: "ثبت آرایشگاه" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/[0.07] bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1180px] items-center gap-6 px-5 py-3.5">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="flex items-center gap-2">
            <span className="relative block h-[22px] w-[22px] rounded-[7px] border-2 border-miami">
              <span className="absolute inset-x-[3px] -top-px h-[2px] rounded-full bg-miami" />
              <span className="absolute left-[6px] top-[7px] h-1 w-2 rotate-[-45deg] border-b-2 border-l-2 border-miami" />
            </span>
            <span className="text-[21px] font-bold -tracking-[0.4px]">نوبت‌چی</span>
          </span>
          <span className="hidden font-mono text-[11px] tracking-widest text-ink-soft sm:inline">NobatChi</span>
        </Link>

        <nav className="ms-auto hidden items-center gap-6 text-[14.5px] lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-ink transition-colors hover:text-miami">
              {link.label}
            </Link>
          ))}
          <Link href="/login" className="text-ink-soft transition-colors hover:text-ink">
            ورود
          </Link>
        </nav>

        <Link
          href="/book"
          className="hidden rounded-[11px] bg-miami px-5 py-2.5 text-[14.5px] font-semibold text-white transition-all hover:-translate-y-px hover:bg-ink sm:inline-flex"
        >
          رزرو نوبت
        </Link>

        <button
          type="button"
          aria-label="باز کردن منو"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink/10 bg-white lg:hidden"
        >
          <span className="sr-only">منو</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M2.5 5h15M2.5 10h15M2.5 15h15" stroke="#14213D" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <MobileMenu open={open} onClose={() => setOpen(false)} links={navLinks} />
    </header>
  );
}
