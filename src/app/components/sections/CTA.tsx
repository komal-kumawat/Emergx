"use client";

import Link from "next/link";

export default function CTA() {
  return (
    <section id="CTA" className="scroll-mt-24 relative w-[90%] mx-auto overflow-hidden rounded-3xl bg-black py-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="gradient-bar top-[10%] w-[50%]" />
        <div className="gradient-bar-reverse top-[25%] w-[70%]" />
        <div className="gradient-bar top-[45%] w-[40%]" />
        <div className="gradient-bar-reverse top-[65%] w-[60%]" />
        <div className="gradient-bar top-[80%] w-[50%]" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6 text-center">
        <h2 className="text-6xl font-bold text-white">
          Hire with Confidence
        </h2>

        <Link
          href="#request-demo"
          className="bg-[#60189B] px-6 py-3 rounded-lg text-white"
        >
          REQUEST DEMO
        </Link>
      </div>
    </section>
  );
}