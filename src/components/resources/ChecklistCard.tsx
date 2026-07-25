"use client";
import { useState } from "react";

interface ChecklistCardProps {
  icon: string;
  title: string;
  subtitle?: string;
  items: string[];
  accent: string;
  tag: string;
}

export default function ChecklistCard({ icon, title, subtitle, items, accent, tag }: ChecklistCardProps) {
  const [checked, setChecked] = useState<boolean[]>(() => new Array(items.length).fill(false));
  const done = checked.filter(Boolean).length;
  const allDone = done === items.length;

  const toggle = (i: number) => setChecked((p) => p.map((v, j) => (j === i ? !v : v)));

  return (
    <div
      className={`rounded-2xl border-2 p-5 transition-all duration-300 ${allDone ? "shadow-lg" : "bg-white hover:shadow-md"}`}
      style={{
        borderColor: allDone ? accent : "#F3F4F6",
        backgroundColor: allDone ? `${accent}10` : "white",
      }}
    >
      <div className="flex items-start justify-between mb-3">
        <span
          className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl shrink-0"
          style={{ backgroundColor: `${accent}18` }}
          aria-hidden="true"
        >
          {icon}
        </span>
        <span
          className="text-xs font-bold px-2.5 py-1 rounded-full font-inter uppercase tracking-wide"
          style={{ color: accent, backgroundColor: `${accent}15` }}
        >
          {tag}
        </span>
      </div>
      <h3 className="font-jakarta font-bold text-[#00294B] text-base mb-0.5">{title}</h3>
      {subtitle && <p className="font-inter text-gray-400 text-xs mb-3">{subtitle}</p>}

      {/* Progress bar */}
      <div className="flex items-center gap-2 mb-4">
        <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{ width: `${(done / items.length) * 100}%`, backgroundColor: accent }}
          />
        </div>
        <span className="text-xs font-bold font-inter" style={{ color: accent }}>
          {done}/{items.length}
        </span>
      </div>

      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i}>
            <button
              onClick={() => toggle(i)}
              className={`w-full text-left flex items-start gap-3 rounded-xl px-3 py-2.5 text-sm font-inter transition-all duration-200 ${
                checked[i] ? "text-gray-400" : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <span
                className="w-5 h-5 rounded-full border-2 flex items-center justify-center mt-0.5 shrink-0 transition-all duration-200"
                style={{
                  borderColor: checked[i] ? accent : "#D1D5DB",
                  backgroundColor: checked[i] ? accent : "transparent",
                }}
                aria-hidden="true"
              >
                {checked[i] && (
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </span>
              <span className={checked[i] ? "line-through" : ""}>{item}</span>
            </button>
          </li>
        ))}
      </ul>

      {allDone && (
        <div className="mt-4 text-center font-jakarta font-bold text-sm py-2 rounded-xl" style={{ color: accent }}>
          🏆 Completed! Great work!
        </div>
      )}
    </div>
  );
}
