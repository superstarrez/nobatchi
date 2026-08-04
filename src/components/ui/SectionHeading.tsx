import { ReactNode } from "react";

export function SectionHeading({
  title,
  subtitle,
  action,
}: {
  title: string;
  subtitle?: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-5 mb-7">
      <div>
        <h2 className="text-[23px] sm:text-[27px] lg:text-[31px] font-bold mb-2 -tracking-[0.5px]">{title}</h2>
        {subtitle && <p className="m-0 text-ink-soft text-[15.5px]">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}
