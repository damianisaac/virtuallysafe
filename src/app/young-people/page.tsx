import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = { title: "Young People" };

const skills = [
  {
    icon: "🔍",
    title: "Recognise Dangers",
    desc: "Identify cyberbullying, phishing, grooming, and harmful content before they escalate.",
    color: "#61CE70",
    bg: "#F0FDF4",
  },
  {
    icon: "💡",
    title: "Think Critically",
    desc: "Develop digital literacy to evaluate online information, spot misinformation, and protect your identity.",
    color: "#60A5FA",
    bg: "#EFF6FF",
  },
  {
    icon: "🛡️",
    title: "Report Safely",
    desc: "Know how and where to report issues to a trusted adult, platform, or authority when something feels wrong.",
    color: "#F472B6",
    bg: "#FDF2F8",
  },
  {
    icon: "📲",
    title: "Share Smart",
    desc: "Think before you post. What you share online can follow you. Learn to protect your digital footprint.",
    color: "#FBBF24",
    bg: "#FFFBEB",
  },
];

const programs = [
  {
    icon: "🌍",
    title: "Young Fellows Program",
    short: "YAISF",
    desc: "Train as an online safety advocate with mentorship, stipends, and community project support.",
    href: "/young-fellows-program",
    accent: "#0EA5E9",
    bg: "#EFF6FF",
  },
  {
    icon: "💡",
    title: "Hacktivate",
    short: "Tech Innovation",
    desc: "Build the next generation of online safety tools — from ideation to funded launch.",
    href: "/hacktivate",
    accent: "#8B5CF6",
    bg: "#F5F3FF",
  },
  {
    icon: "🏫",
    title: "Safety School Club",
    short: "ISSC",
    desc: "Join a student-led club in your school and build peer-to-peer digital safety culture.",
    href: "/issc",
    accent: "#10B981",
    bg: "#ECFDF5",
  },
  {
    icon: "🎤",
    title: "Competitions",
    short: "Debate · Skit · Art",
    desc: "Express your ideas through debate, skit, and art competitions on online safety.",
    href: "/competition",
    accent: "#EC4899",
    bg: "#FDF2F8",
  },
];

const threats = [
  { label: "Cyberbullying", icon: "😔" },
  { label: "Online Predators", icon: "⚠️" },
  { label: "Sextortion", icon: "🔒" },
  { label: "Digital Addiction", icon: "📱" },
  { label: "Misinformation", icon: "📰" },
  { label: "Online Gambling", icon: "🎰" },
  { label: "Identity Theft", icon: "🔐" },
  { label: "Privacy Risks", icon: "👁️" },
];

export default function YoungPeoplePage() {
  return (
    <>
      {/* ── 1. HERO ── */}
      <section className="relative min-h-[90vh] flex items-end overflow-hidden" aria-label="Young People">
        <Image
          src="/youngpeople.jpg"
          alt="Young people online"
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center top" }}
          priority
          className="z-0"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#00294B] via-[#00294B]/55 to-[#00294B]/10" />
        <div className="relative z-20 w-full max-w-screen-xl mx-auto px-5 lg:px-12 pb-20 lg:pb-28">
          <span className="inline-flex items-center gap-2 bg-[#61CE70]/20 text-[#61CE70] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full font-inter mb-5">
            For Young People
          </span>
          <h1 className="font-jakarta text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6 max-w-3xl">
            Your online world.{" "}
            <span className="text-[#61CE70]">Your rules.</span>
          </h1>
          <p className="font-inter text-white/65 text-xl leading-relaxed max-w-xl mb-10">
            The internet is yours to explore. We give you the knowledge and tools to do it safely, confidently, and on your own terms.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/young-people-resources"
              className="inline-flex items-center gap-2 bg-[#61CE70] text-[#00294B] font-bold font-inter px-8 py-4 rounded-full hover:bg-[#4db85b] transition-colors"
            >
              Get Free Resources
            </Link>
            <Link
              href="/issc"
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-inter px-8 py-4 rounded-full hover:border-white/70 hover:bg-white/5 transition-colors"
            >
              Join a School Club
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. THREATS AWARENESS STRIP ── */}
      <div className="bg-[#001F3A] border-y border-[#61CE70]/15 py-5 overflow-hidden" aria-label="Online threats young people face">
        <div className="flex gap-6 flex-wrap justify-center px-5 max-w-screen-xl mx-auto">
          {threats.map((t) => (
            <span key={t.label} className="inline-flex items-center gap-2 font-inter text-sm text-white/60">
              <span aria-hidden="true">{t.icon}</span>
              {t.label}
            </span>
          ))}
        </div>
      </div>

      {/* ── 3. YOU DESERVE SAFE SPACE ── */}
      <section className="bg-white py-20 lg:py-28" aria-label="Introduction">
        <div className="max-w-screen-xl mx-auto px-5 lg:px-12 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src="/youngpeople1.jpg"
                alt="Young people learning digital safety"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            {/* Stat chip */}
            <div className="absolute -bottom-5 -right-5 bg-[#00294B] rounded-2xl px-6 py-4 shadow-xl hidden lg:block">
              <p className="font-jakarta font-extrabold text-[#61CE70] text-3xl leading-none">82%</p>
              <p className="font-inter text-white/60 text-xs mt-1">of young Nigerians<br />face online risks</p>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="font-inter text-xs font-semibold uppercase tracking-[0.18em] text-[#61CE70] mb-4">
              Built For You
            </p>
            <h2 className="font-jakarta text-4xl lg:text-5xl font-bold text-[#00294B] leading-tight mb-6">
              You deserve a safe online space.
            </h2>
            <p className="font-inter text-gray-600 text-lg leading-relaxed mb-5">
              At Virtually Safe, we believe every young person has the right to explore the internet freely without compromising their safety or well-being. We create free resources, tools, and programs designed with you in mind.
            </p>
            <p className="font-inter text-gray-500 leading-relaxed mb-8">
              Whether you want to understand your digital rights, stay safe on social media, or join exciting programs and fellowships, we have got you covered.
            </p>
            <Link
              href="/young-people-resources"
              className="inline-flex items-center gap-2 bg-[#00294B] text-white font-bold font-inter px-7 py-3.5 rounded-full hover:bg-[#001F3A] transition-colors"
            >
              Access Your Resources
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 4. KEY SKILLS ── */}
      <section className="bg-[#F9F9F9] py-20 lg:py-28" aria-label="Key digital safety skills">
        <div className="max-w-screen-xl mx-auto px-5 lg:px-12">
          <div className="text-center mb-14">
            <p className="font-inter text-xs font-semibold uppercase tracking-[0.18em] text-[#61CE70] mb-3">
              Essential Skills
            </p>
            <h2 className="font-jakarta text-4xl lg:text-5xl font-bold text-[#00294B] leading-tight mb-4">
              Stay safe online.
            </h2>
            <p className="font-inter text-gray-500 text-base max-w-md mx-auto">
              Four core digital safety skills every young person needs to know.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {skills.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl p-7 border border-gray-100 hover:shadow-lg transition-all duration-300 group"
                style={{ backgroundColor: s.bg }}
              >
                <span
                  className="inline-flex items-center justify-center w-12 h-12 rounded-xl text-2xl mb-5"
                  style={{ backgroundColor: `${s.color}20` }}
                  aria-hidden="true"
                >
                  {s.icon}
                </span>
                <h3 className="font-jakarta font-bold text-[#00294B] text-lg mb-3">{s.title}</h3>
                <p className="font-inter text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                <div
                  className="mt-5 h-0.5 w-6 rounded-full transition-all duration-300 group-hover:w-14"
                  style={{ backgroundColor: s.color }}
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. PHOTO STRIP ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 h-56 lg:h-72" aria-hidden="true">
        {["/youngpeople.jpg", "/youngpeople1.jpg", "/youngpeople2.jpg", "/youngpeople3.jpg"].map((src, i) => (
          <div key={i} className="relative overflow-hidden">
            <Image
              src={src}
              alt=""
              fill
              sizes="25vw"
              style={{ objectFit: "cover" }}
              className="hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-[#00294B]/20" />
          </div>
        ))}
      </div>

      {/* ── 6. PROGRAMS FOR YOU ── */}
      <section className="bg-[#00294B] py-20 lg:py-28" aria-label="Programs for young people">
        <div className="max-w-screen-xl mx-auto px-5 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <p className="font-inter text-xs font-semibold uppercase tracking-[0.18em] text-[#61CE70] mb-3">
                Programs For You
              </p>
              <h2 className="font-jakarta text-4xl lg:text-5xl font-bold text-white leading-tight">
                Get involved.<br />Make a difference.
              </h2>
            </div>
            <p className="font-inter text-white/40 text-sm max-w-xs lg:text-right">
              From school clubs to fellowships and tech challenges, there is a program for every young Nigerian.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {programs.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="group rounded-2xl p-8 border border-white/10 hover:border-white/25 hover:bg-white/4 transition-all duration-300 flex flex-col gap-5"
              >
                <div className="flex items-start justify-between">
                  <span
                    className="inline-flex items-center justify-center w-12 h-12 rounded-xl text-2xl"
                    style={{ backgroundColor: `${p.accent}20` }}
                    aria-hidden="true"
                  >
                    {p.icon}
                  </span>
                  <span
                    className="text-xs font-bold uppercase tracking-wider font-inter px-2.5 py-1 rounded-full"
                    style={{ color: p.accent, backgroundColor: `${p.accent}15` }}
                  >
                    {p.short}
                  </span>
                </div>
                <div>
                  <h3 className="font-jakarta text-xl font-bold text-white mb-2">{p.title}</h3>
                  <p className="font-inter text-white/50 text-sm leading-relaxed">{p.desc}</p>
                </div>
                <span
                  className="inline-flex items-center gap-1.5 text-sm font-semibold font-inter mt-auto group-hover:gap-3 transition-all"
                  style={{ color: p.accent }}
                >
                  Learn More
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. REPORTING CTA ── */}
      <section className="bg-[#61CE70] py-20 lg:py-24 px-5" aria-label="Get help">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-5xl mb-6" aria-hidden="true">🛡️</div>
          <h2 className="font-jakarta text-4xl lg:text-5xl font-extrabold text-[#00294B] leading-tight mb-5">
            Something doesn&apos;t feel right?
          </h2>
          <p className="font-inter text-[#00294B]/70 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            If you are experiencing cyberbullying, being pressured online, or something just feels wrong, you can report it anonymously. No one will know it was you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-[#00294B] text-white font-bold font-inter px-8 py-4 rounded-full hover:bg-[#001F3A] transition-colors"
            >
              Report Anonymously
            </Link>
            <Link
              href="/young-people-resources"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#00294B]/30 text-[#00294B] font-inter px-8 py-4 rounded-full hover:border-[#00294B] transition-colors"
            >
              Browse Resources
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
