"use client";

import { ReactNode, useEffect } from "react";

export function BookingModal({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}) {
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label={title}>
      <div className="absolute inset-0 bg-ink/40" onClick={onClose} />
      <div className="animate-fadeIn relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-panel">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="m-0 text-lg font-bold">{title}</h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="بستن"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-ink/10"
          >
            ✕
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
