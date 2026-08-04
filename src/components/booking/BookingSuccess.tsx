import { Button } from "@/components/ui/Button";

export function BookingSuccess({
  summary,
  onReset,
  resetHref,
}: {
  summary: string;
  onReset?: () => void;
  resetHref?: string;
}) {
  return (
    <div className="animate-fadeIn flex flex-col items-center gap-3 rounded-[17px] border border-miami/35 bg-white p-8 text-center">
      <span className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-miami-light text-xl text-miami">
        ✓
      </span>
      <h3 className="m-0 text-[21px] font-bold">نوبتت ثبت شد</h3>
      <p className="m-0 max-w-[48ch] text-[15px] leading-[1.9] text-ink-soft">{summary}</p>
      <p className="m-0 text-[13px] text-ink-soft">پیامک تأیید و یادآوری نوبت برایت ارسال می‌شود.</p>
      {onReset && (
        <button
          type="button"
          onClick={onReset}
          className="mt-2 rounded-[11px] border border-ink/[0.12] bg-white px-5.5 py-2.5 text-[14.5px]"
        >
          ثبت نوبت جدید
        </button>
      )}
      {resetHref && (
        <Button href={resetHref} variant="ghost" className="mt-2">
          ثبت نوبت جدید
        </Button>
      )}
    </div>
  );
}
