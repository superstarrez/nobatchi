import { ReactNode } from "react";

export function EmptyState({
  icon = "🔍",
  title,
  description,
  action,
}: {
  icon?: string;
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-col items-center text-center gap-3 rounded-2xl border border-dashed border-ink/15 bg-white px-6 py-16">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-miami-light text-2xl">{icon}</span>
      <h3 className="m-0 text-lg font-semibold">{title}</h3>
      {description && <p className="m-0 max-w-md text-sm leading-8 text-ink-soft">{description}</p>}
      {action}
    </div>
  );
}
