"use client";

import { useState } from "react";
import Link from "next/link";
import ReportingTool from "@/components/ReportingTool";

export default function ContactCTA() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="bg-[#001F3A] py-24 lg:py-32 px-5" aria-label="Report an issue">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-inter text-xs font-semibold uppercase tracking-[0.18em] text-[#61CE70] mb-6">
            Get Support
          </p>
          <h2 className="font-jakarta text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Facing something online?{" "}
            <span className="text-[#61CE70]">Report it safely</span>{" "}
            right here.
          </h2>
          <p className="font-inter text-white/55 text-lg mb-5 max-w-xl mx-auto">
            Our AI-powered anonymous reporting tool gives you immediate, personalised guidance on any online safety issue. No personal information required, no judgment.
          </p>
          <p className="font-inter text-white/35 text-sm mb-12 max-w-md mx-auto">
            From cyberbullying and online predators to scams and data breaches, our AI assistant is available 24/7 to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setOpen(true)}
              className="inline-flex items-center justify-center gap-2 bg-[#61CE70] text-[#00294B] font-bold font-inter px-10 py-5 rounded-full text-lg hover:bg-[#4db85b] transition-colors"
            >
              Report an Issue Anonymously
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <Link
              href="/about-us"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white font-inter px-10 py-5 rounded-full text-base hover:border-white/50 transition-colors"
            >
              About Us
            </Link>
          </div>
        </div>
      </section>

      <ReportingTool open={open} onClose={() => setOpen(false)} />
    </>
  );
}
