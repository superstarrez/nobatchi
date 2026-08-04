"use client";

import Link from "next/link";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

interface NavLink {
  href: string;
  label: string;
}

export function MobileMenu({
  open,
  onClose,
  links,
}: {
  open: boolean;
  onClose: () => void;
  links: NavLink[];
}) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 lg:hidden",
        open ? "pointer-events-auto" : "pointer-events-none"
      )}
      role="dialog"
      aria-modal="true"
      aria-label="منوی موبایل"
    >
      <div
        onClick={onClose}
        className={cn(
          "absolute inset-0 bg-ink/40 transition-opacity duration-200",
          open ? "opacity-100" : "opacity-0"
        )}
      />
      <div
        className={cn(
          "absolute inset-y-0 right-0 flex w-[82%] max-w-[320px] flex-col gap-1 bg-cream p-6 shadow-panel transition-transform duration-250 ease-out",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="mb-4 flex items-center justify-between">
          <span className="text-lg font-bold">نوبت‌چی</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="بستن منو"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-ink/10 bg-white"
          >
            ✕
          </button>
        </div>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="rounded-lg px-3 py-3 text-[15px] text-ink transition-colors hover:bg-white"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/login"
          onClick={onClose}
          className="rounded-lg px-3 py-3 text-[15px] text-ink-soft transition-colors hover:bg-white"
        >
          ورود
        </Link>
        <Link
          href="/book"
          onClick={onClose}
          className="mt-3 rounded-xl bg-miami px-5 py-3 text-center text-[15px] font-semibold text-white"
        >
          رزرو نوبت
        </Link>
      </div>
    </div>
  );
}
