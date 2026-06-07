"use client";

import { useState } from "react";
import { faqData } from "@/lib/data/faq.data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="FAQ"
      className="flex flex-col items-center w-full min-h-screen  py-20"
    >
      <div className="w-[90%] max-w-6xl">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-4">
          Frequently Asked Questions
        </h1>

        <p className="text-center text-gray-600 mb-16">
          Everything you need to know about EmergX.
        </p>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={faq.question}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(
                    openIndex === index ? null : index
                  )
                }
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <h3 className="text-xl font-semibold">
                  {faq.question}
                </h3>

                <span
                  className={`text-3xl transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}