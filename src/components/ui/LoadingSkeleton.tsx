import { cn } from "@/lib/utils";

export function Skeleton({ className }: { className?: string }) {
  return <div className={cn("animate-pulse rounded-lg bg-ink/10", className)} />;
}

export function SalonCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-2xl border border-ink/10 bg-white">
      <Skeleton className="aspect-video w-full rounded-none" />
      <div className="p-4 space-y-3">
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-3 w-1/3" />
        <Skeleton className="h-3 w-full" />
        <div className="flex gap-2 pt-2">
          <Skeleton className="h-10 flex-1" />
          <Skeleton className="h-10 flex-1" />
        </div>
      </div>
    </div>
  );
}

export function SalonGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[18px]">
      {Array.from({ length: count }).map((_, i) => (
        <SalonCardSkeleton key={i} />
      ))}
    </div>
  );
}
