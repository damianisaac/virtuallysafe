"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const audiences = [
  {
    title: "Young People",
    tagline: "Built for the generation growing up online.",
    desc: "Empowering youth with knowledge and tools for safer digital experiences, from navigating social media safely to recognising online risks before they escalate.",
    href: "/young-people",
    cta: "Resources for Young People",
    img: "https://res.cloudinary.com/karotcloud/image/upload/v1740585444/chr_yrtjgp.jpg",
    accent: "#61CE70",
  },
  {
    title: "Parents",
    tagline: "Your child's digital world needs your attention.",
    desc: "Empowering parents with essential knowledge and tools to guide their children safely, practical advice, warning signs to watch for, and how to have the right conversations.",
    href: "/parent",
    cta: "Resources for Parents",
    img: "/virtuallysafeparent.JPG",
    accent: "#93C5FD",
  },
  {
    title: "Educators",
    tagline: "Equip your classroom for the digital age.",
    desc: "Empowering teachers with resources, lesson plans, and guidance to help students navigate the digital world safely, integrated into existing curriculum.",
    href: "/educators",
    cta: "Resources for Educators",
    img: "/educators.JPG",
    accent: "#FCD34D",
  },
];

export default function WhoWeHelp() {
  const [activeIdx, setActiveIdx] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = audiences.map((_, i) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveIdx(i);
        },
        { rootMargin: "-35% 0px -35% 0px" }
      );
      const el = sectionRefs.current[i];
      if (el) observer.observe(el);
      return observer;
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section className="bg-white" aria-label="Who we serve">
      {/* Section label */}
      <div className="max-w-screen-xl mx-auto px-5 lg:px-12 pt-20 pb-10">
        <p className="font-inter text-xs font-semibold uppercase tracking-[0.18em] text-[#61CE70] mb-3">
          Who We Serve
        </p>
        <h2 className="font-jakarta text-4xl lg:text-5xl font-bold text-[#00294B] leading-tight max-w-lg">
          Support for every person in a child&apos;s life.
        </h2>
      </div>

      {/* Desktop: sticky image + scrollable text */}
      <div className="hidden lg:grid lg:grid-cols-2 max-w-screen-xl mx-auto px-5 lg:px-12 pb-20 gap-12">
        {/* Sticky image panel */}
        <div className="sticky top-20 self-start h-[520px] rounded-2xl overflow-hidden shadow-2xl">
          {audiences.map((a, i) => (
            <div
              key={a.title}
              className="absolute inset-0 transition-opacity duration-700"
              style={{ opacity: activeIdx === i ? 1 : 0 }}
              aria-hidden={activeIdx !== i}
            >
              <Image
                src={a.img}
                alt={a.title}
                fill
                sizes="(max-width: 1280px) 50vw, 600px"
                style={{ objectFit: "cover" }}
                priority={i === 0}
              />
              {/* Gradient overlay with accent tint */}
              <div
                className="absolute inset-0 opacity-30"
                style={{ background: `linear-gradient(to top, ${a.accent}40, transparent 60%)` }}
              />
            </div>
          ))}
        </div>

        {/* Scrollable rows */}
        <div className="flex flex-col gap-0">
          {audiences.map((a, i) => (
            <div
              key={a.title}
              ref={(el) => { sectionRefs.current[i] = el; }}
              className="min-h-[420px] flex flex-col justify-center py-16 border-b border-gray-100 last:border-0"
            >
              <span
                className="inline-block text-xs font-semibold uppercase tracking-widest mb-3 font-inter"
                style={{ color: a.accent }}
              >
                {`0${i + 1}`}
              </span>
              <h3 className="font-jakarta text-4xl font-bold text-[#00294B] mb-3">{a.title}</h3>
              <p className="font-inter text-base font-medium text-gray-500 mb-4">{a.tagline}</p>
              <p className="font-inter text-gray-600 leading-relaxed mb-8 max-w-md">{a.desc}</p>
              <Link
                href={a.href}
                className="inline-flex items-center gap-2 font-inter text-sm font-semibold text-[#00294B] border-b-2 pb-0.5 w-fit hover:opacity-70 transition-opacity"
                style={{ borderColor: a.accent }}
              >
                {a.cta}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: stacked cards */}
      <div className="lg:hidden max-w-screen-xl mx-auto px-5 pb-16 space-y-10">
        {audiences.map((a, i) => (
          <div key={a.title} className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
            <div className="relative h-52">
              <Image
                src={a.img}
                alt={a.title}
                fill
                sizes="100vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="p-6">
              <span
                className="text-xs font-semibold uppercase tracking-widest font-inter block mb-2"
                style={{ color: a.accent }}
              >
                {`0${i + 1}`}
              </span>
              <h3 className="font-jakarta text-2xl font-bold text-[#00294B] mb-2">{a.title}</h3>
              <p className="font-inter text-gray-600 text-sm leading-relaxed mb-5">{a.desc}</p>
              <Link
                href={a.href}
                className="inline-flex items-center gap-1.5 text-sm font-semibold font-inter text-[#00294B] hover:opacity-70 transition-opacity"
                style={{ borderBottom: `2px solid ${a.accent}`, paddingBottom: "2px" }}
              >
                {a.cta}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
