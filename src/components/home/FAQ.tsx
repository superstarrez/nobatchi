"use client";

import { useState } from "react";
import { faqs } from "@/lib/mock/content";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="border-y border-ink/[0.07] bg-white">
      <div className="mx-auto max-w-[860px] px-5 py-[74px]">
        <h2 className="mb-6 text-[23px] font-bold -tracking-[0.5px] sm:text-[27px] lg:text-[31px]">
          سوالات متداول
        </h2>
        <div>
          {faqs.map((faq, i) => {
            const open = openIndex === i;
            return (
              <div key={faq.question} className="border-b border-ink/[0.08]">
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  aria-controls={`faq-panel-${i}`}
                  className="flex w-full items-center gap-3.5 py-5 text-right"
                >
                  <span className="ms-auto text-[15.5px] font-medium">{faq.question}</span>
                  <span
                    className={cn(
                      "shrink-0 text-miami text-[15px] transition-transform duration-200",
                      open ? "rotate-45" : "rotate-0"
                    )}
                  >
                    ＋
                  </span>
                </button>
                {open && (
                  <p
                    id={`faq-panel-${i}`}
                    className="animate-fadeIn m-0 max-w-[62ch] pb-5 text-[14.5px] leading-[2] text-ink-soft"
                  >
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
