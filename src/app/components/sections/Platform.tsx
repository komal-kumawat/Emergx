"use client";

import { platformContent } from "@/lib/data/platform.data";
import { useState } from "react";

export default function Platform() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div id="Platform" className="scroll-mt-24 px-7 py-5 pt-10 bg-white min-h-[100vh] text-gray-900 w-full flex flex-col items-center justify-center">
    <div className="text-4xl w-[90%] leading-relaxed">
        EmergX is the only platform where candidates are <span className="text-white font-semibold bg-[#580B97] px-2">sourced</span>,  <span className="text-white font-semibold bg-[#580B97] px-2">evaluated</span> and  <span className="text-white font-semibold bg-[#580B97] px-2">verified</span>. The result?  <span className="text-white font-semibold bg-[#580B97] px-2">Faster hires</span>,  <span className="text-white font-semibold bg-[#580B97] px-2">real talent</span> insight and value that's built, <br />not burned.
    </div>
    <div className="w-[90%] mt-16">
      {platformContent.map((item, index) => (
        <div
          key={item.title}
          className="border-b border-gray-200 py-4"
        >
          <button
            onClick={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
            className="w-full flex items-center justify-between text-left"
          >
            <h3 className="text-2xl font-semibold">
              {item.title}
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
                ? "max-h-60 opacity-100 mt-4"
                : "max-h-0 opacity-0"
            }`}
          >
            <ul className="space-y-2 text-gray-600">
              {item.content.map((point) => (
                <li key={point}>• {point}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}