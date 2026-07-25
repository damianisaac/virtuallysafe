"use client";

import { useState } from "react";
import Image from "next/image";

const pillars = [
  {
    id: "education",
    label: "Education",
    desc: "Equipping young people, parents, and educators with the resources they need to foster a culture of digital safety and well-being.",
    img: "/vsimag.jpg",
    accent: "#61CE70",
    bg: "#F0FDF4",
  },
  {
    id: "research",
    label: "Research & Advocacy",
    desc: "We understand that an education-based approach alone will not be entirely effective; we need expert knowledge grounded in research.",
    img: "/research.JPG",
    accent: "#60A5FA",
    bg: "#EFF6FF",
  },
  {
    id: "technology",
    label: "Technology",
    desc: "Invest in strengthening systems, building capacities, and innovative technology solutions to tackle online harms.",
    img: "/technology.JPG",
    accent: "#F472B6",
    bg: "#FDF2F8",
  },
  {
    id: "campaigns",
    label: "Awareness & Campaigns",
    desc: "Our goal is to keep young people safe online. We achieve this through multiple campaigns and awareness programs.",
    img: "/awareness.JPG",
    accent: "#FBBF24",
    bg: "#FFFBEB",
  },
];

export default function PillarTabs() {
  const [active, setActive] = useState(0);
  const current = pillars[active];

  return (
    <section
      className="py-20 lg:py-28 transition-colors duration-500"
      style={{ backgroundColor: current.bg }}
      aria-label="Our approach"
    >
      <div className="max-w-screen-xl mx-auto px-5 lg:px-12">
        {/* Section header */}
        <div className="mb-12 lg:mb-16">
          <p className="font-inter text-xs font-semibold uppercase tracking-[0.18em] text-[#61CE70] mb-3">
            Our Approach
          </p>
          <h2 className="font-jakarta text-4xl lg:text-5xl font-bold text-[#00294B] leading-tight">
            How we keep young<br className="hidden md:block" /> people safe.
          </h2>
        </div>

        {/* Tab pills */}
        <div
          className="flex gap-2 flex-wrap mb-12"
          role="tablist"
          aria-label="Our approach pillars"
        >
          {pillars.map((p, i) => (
            <button
              key={p.id}
              role="tab"
              aria-selected={active === i}
              aria-controls={`panel-${p.id}`}
              onClick={() => setActive(i)}
              className="px-5 py-2.5 rounded-full text-sm font-semibold font-inter transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2"
              style={
                active === i
                  ? { backgroundColor: current.accent, color: "#00294B" }
                  : { backgroundColor: "white", color: "#6B7280", border: "1px solid #E5E7EB" }
              }
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* Content panel */}
        <div
          id={`panel-${current.id}`}
          role="tabpanel"
          className="grid lg:grid-cols-[1fr_480px] gap-12 items-center"
        >
          {/* Text */}
          <div>
            <div
              className="w-10 h-1 rounded-full mb-8"
              style={{ backgroundColor: current.accent }}
              aria-hidden="true"
            />
            <h3 className="font-jakarta text-3xl lg:text-4xl font-bold text-[#00294B] mb-6 leading-tight">
              {current.label}
            </h3>
            <p className="font-inter text-gray-600 text-lg leading-relaxed max-w-lg">
              {current.desc}
            </p>
          </div>

          {/* Image with crossfade */}
          <div className="relative h-72 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
            {pillars.map((p, i) => (
              <div
                key={p.id}
                className="absolute inset-0 transition-opacity duration-500"
                style={{ opacity: active === i ? 1 : 0 }}
                aria-hidden={active !== i}
              >
                <Image
                  src={p.img}
                  alt={p.label}
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
                  style={{ objectFit: "cover" }}
                  priority={i === 0}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Tab indicator dots */}
        <div className="flex gap-2 mt-10" aria-hidden="true">
          {pillars.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="h-1 rounded-full transition-all duration-300 focus-visible:outline-2"
              style={{
                width: active === i ? "2rem" : "0.5rem",
                backgroundColor: active === i ? current.accent : "#D1D5DB",
              }}
              aria-label={`Go to ${pillars[i].label}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
