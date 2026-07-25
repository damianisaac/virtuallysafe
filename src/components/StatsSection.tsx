"use client";

import { useEffect, useRef } from "react";

const stats = [
  {
    pct: 82,
    text: "Young people agree that using the internet comes with significant risks.",
    color: "#61CE70",
  },
  {
    pct: 64,
    text: "Many have experienced negative feelings following an online interaction.",
    color: "#60A5FA",
  },
  {
    pct: 28,
    text: "Few felt able to report issues to a trusted adult or their parents.",
    color: "#FB7185",
  },
  {
    pct: 47,
    text: "Some young people have parents and teachers as friends on their social media pages.",
    color: "#FBBF24",
  },
];

const R = 52;
const CIRC = 2 * Math.PI * R;

export default function StatsSection() {
  const circleRefs = useRef<(SVGCircleElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as SVGCircleElement;
            const target = el.dataset.target;
            if (target) el.style.strokeDashoffset = target;
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.3 }
    );

    circleRefs.current.forEach((c) => { if (c) observer.observe(c); });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
      {stats.map((s, i) => {
        const offset = CIRC * (1 - s.pct / 100);
        return (
          <div
            key={i}
            className="bg-[#00294B] p-8 flex flex-col items-center text-center hover:bg-[#001F3A] transition-colors"
          >
            <div className="relative w-36 h-36 mb-6">
              <svg
                viewBox="0 0 120 120"
                className="w-full h-full"
                style={{ transform: "rotate(-90deg)" }}
                aria-hidden="true"
              >
                {/* Background track */}
                <circle
                  cx="60"
                  cy="60"
                  r={R}
                  fill="none"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="9"
                />
                {/* Animated progress ring */}
                <circle
                  ref={(el) => { circleRefs.current[i] = el; }}
                  cx="60"
                  cy="60"
                  r={R}
                  fill="none"
                  stroke={s.color}
                  strokeWidth="9"
                  strokeLinecap="round"
                  strokeDasharray={CIRC}
                  strokeDashoffset={CIRC}
                  data-target={offset}
                  style={{
                    transition: "stroke-dashoffset 1.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    filter: `drop-shadow(0 0 8px ${s.color}60)`,
                  }}
                />
              </svg>
              {/* Percentage overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="font-jakarta font-extrabold text-3xl text-white"
                  style={{ textShadow: "0 0 20px rgba(0,0,0,0.5)" }}
                >
                  {s.pct}%
                </span>
              </div>
            </div>
            <p className="font-inter text-white/75 text-sm leading-relaxed">{s.text}</p>
          </div>
        );
      })}
    </div>
  );
}
