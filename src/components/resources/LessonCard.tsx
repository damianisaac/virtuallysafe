"use client";
import { useState } from "react";

interface LessonCardProps {
  icon: string;
  title: string;
  summary: string;
  tips: string[];
  tag: string;
  accent: string;
  readTime?: string;
}

export default function LessonCard({ icon, title, summary, tips, tag, accent, readTime = "2 min" }: LessonCardProps) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`rounded-2xl border-2 transition-all duration-300 overflow-hidden bg-white ${open ? "shadow-lg" : "hover:shadow-md"}`}
      style={{ borderColor: open ? accent : "#F3F4F6" }}
    >
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <span
            className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl shrink-0"
            style={{ backgroundColor: `${accent}18` }}
            aria-hidden="true"
          >
            {icon}
          </span>
          <div className="flex items-center gap-2 ml-2">
            <span className="text-[10px] text-gray-400 font-inter">{readTime} read</span>
            <span
              className="text-xs font-bold px-2.5 py-1 rounded-full font-inter uppercase tracking-wide"
              style={{ color: accent, backgroundColor: `${accent}15` }}
            >
              {tag}
            </span>
          </div>
        </div>
        <h3 className="font-jakarta font-bold text-[#00294B] text-base mb-1.5">{title}</h3>
        <p className="font-inter text-gray-500 text-sm leading-relaxed mb-3">{summary}</p>

        {open && (
          <ul className="space-y-2 mb-4 animate-in slide-in-from-top-2 duration-200">
            {tips.map((t, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm font-inter text-gray-700 bg-gray-50 rounded-xl px-3 py-2.5">
                <span style={{ color: accent }} className="mt-0.5 shrink-0 text-xs font-bold">◆</span>
                {t}
              </li>
            ))}
          </ul>
        )}

        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-1.5 text-sm font-semibold font-inter transition-colors"
          style={{ color: accent }}
          aria-expanded={open}
        >
          {open ? "Show less" : "Learn more"}
          <svg className={`w-4 h-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
