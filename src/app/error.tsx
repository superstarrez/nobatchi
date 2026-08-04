"use client";

import { useEffect } from "react";
import { ErrorState } from "@/components/ui/ErrorState";
import { Button } from "@/components/ui/Button";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto max-w-[600px] px-5 py-20">
      <ErrorState
        action={
          <Button onClick={reset} className="mt-2">
            تلاش دوباره
          </Button>
        }
      />
    </div>
  );
}
