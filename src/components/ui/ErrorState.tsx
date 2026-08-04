import { ReactNode } from "react";

export function ErrorState({
  title = "مشکلی پیش آمد",
  description = "دریافت اطلاعات با خطا مواجه شد. لطفاً دوباره تلاش کن.",
  action,
}: {
  title?: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-col items-center text-center gap-3 rounded-2xl border border-red-200 bg-red-50 px-6 py-16">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-2xl">⚠️</span>
      <h3 className="m-0 text-lg font-semibold text-ink">{title}</h3>
      <p className="m-0 max-w-md text-sm leading-8 text-ink-soft">{description}</p>
      {action}
    </div>
  );
}
