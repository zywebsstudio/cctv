"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { SITE_CONFIG } from "@/lib/site-config";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#F5F7FA] border-t border-[#E2E8F0]">
      <div className="container mx-auto px-3 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="COMMON QUESTIONS"
          title="Frequently Asked Questions"
          description="Everything you need to know about camera types, recording storage, remote phone view, and installation budgets."
          className="mb-12 sm:mb-16"
        />

        <div className="max-w-3xl mx-auto space-y-3.5">
          {SITE_CONFIG.faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="rounded-xl border border-[#E2E8F0] bg-white overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-[#2563EB] shrink-0" />
                    <span className="text-sm sm:text-base font-bold text-[#0B1220] leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#64748B] transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180 text-[#2563EB]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-[#F1F5F9] animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
