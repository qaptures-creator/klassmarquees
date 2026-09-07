"use client";

import { useState } from "react";
import type { FAQ } from "@/types";

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-ivory/12 border-t border-ivory/12">
      {faqs.map((faq, i) => {
        const open = openIndex === i;
        const panelId = `faq-panel-${i}`;
        const buttonId = `faq-button-${i}`;
        return (
          <div key={faq.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : i)}
                className="flex min-h-[44px] w-full items-center justify-between gap-6 py-6 text-left font-serif text-h3 font-medium text-ivory transition-colors hover:text-accent-light"
              >
                <span>{faq.question}</span>
                <span
                  aria-hidden="true"
                  className={`relative flex h-6 w-6 shrink-0 items-center justify-center transition-transform duration-300 ${open ? "rotate-45" : ""}`}
                >
                  <span className="absolute h-px w-4 bg-current" />
                  <span className="absolute h-4 w-px bg-current" />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className="grid transition-[grid-template-rows] duration-500 ease-out"
              style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl pb-6 text-sm leading-relaxed text-ivory/65">{faq.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
