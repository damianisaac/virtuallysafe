import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import WhoWeHelp from "@/components/WhoWeHelp";
import PillarTabs from "@/components/PillarTabs";
import StatsSection from "@/components/StatsSection";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Virtually Safe | Online Safety for Young People in Nigeria",
};

/* ─── Data ──────────────────────────────────────────────────────────────── */

const marqueeItems = [
  { stat: "Growing threat", label: "of digital harms facing Nigerian youth" },
  { stat: "Education", label: "as the first line of defence" },
  { stat: "Research-led", label: "advocacy driving policy change" },
  { stat: "Technology", label: "solutions tackling online exploitation" },
  { stat: "Free resources", label: "for parents, educators and young people" },
  { stat: "Nigeria's leading", label: "online safety organisation" },
];

const threats = [
  {
    icon: "🛡️",
    bg: "#DCFCE7",
    title: "Cyberbullying",
    desc: "Online harassment is pervasive across social media and messaging platforms, leaving lasting psychological harm on young Nigerians, often in silence.",
  },
  {
    icon: "🔍",
    bg: "#DBEAFE",
    title: "Online Predators",
    desc: "Grooming, manipulation, and exploitation by online predators target young people through games, social media, and messaging apps with alarming sophistication.",
  },
  {
    icon: "📱",
    bg: "#F3E8FF",
    title: "Digital Addiction",
    desc: "Compulsive social media and screen use is eroding mental health, sleep, and academic performance among Nigerian youth at a growing rate.",
  },
  {
    icon: "📰",
    bg: "#FEF9C3",
    title: "Misinformation",
    desc: "Young Nigerians are disproportionately exposed to false and harmful content online, shaping dangerous beliefs and behaviours in real life.",
  },
  {
    icon: "🎰",
    bg: "#FFE4E6",
    title: "Online Gambling",
    desc: "Betting platforms aggressively target young Nigerians. Gambling patterns can start as early as age 9, long before protective habits are formed.",
  },
  {
    icon: "🔒",
    bg: "#FFEDD5",
    title: "Privacy & Data Risks",
    desc: "Many young people unknowingly expose sensitive personal information online, creating serious risks of exploitation, identity harm, and targeted abuse.",
  },
];

const featuredPrograms = [
  {
    title: "Internet Safety Stakeholders Forum",
    short: "ISSF",
    desc: "Our flagship annual forum that brings together policymakers, educators, parents, tech companies, and civil society to develop actionable solutions to Nigeria's online safety crisis.",
    href: "/issf",
    img: "https://res.cloudinary.com/karotcloud/image/upload/v1741006530/ds1_llcmq2_t0tfdz.jpg",
    cta: "About the ISSF",
    accent: "#3B82F6",
  },
  {
    title: "Virtually Safe School Tour",
    short: "Nationwide",
    desc: "A nationwide initiative taking online safety education directly into secondary schools, combining interactive presentations, the Bambi Safety Board Game, and free resource packs.",
    href: "/school-tour",
    img: "https://res.cloudinary.com/karotcloud/image/upload/v1740920297/wwd_vqul1a.jpg",
    cta: "About the School Tour",
    accent: "#61CE70",
  },
];

const corePrograms = [
  {
    icon: "🏫",
    title: "Internet Safety School Club",
    short: "ISSC",
    desc: "Student-led clubs in secondary schools that build peer-to-peer digital safety culture from the ground up.",
    href: "/issc",
    accent: "#10B981",
    bg: "#ECFDF5",
  },
  {
    icon: "💡",
    title: "Hacktivate",
    short: "Tech Innovation",
    desc: "Challenging young Nigerians to build the next generation of online safety tools, from ideation to funded launch.",
    href: "/hacktivate",
    accent: "#8B5CF6",
    bg: "#F5F3FF",
  },
  {
    icon: "🌍",
    title: "Young Fellows Program",
    short: "YAISF",
    desc: "Training a generation of online safety advocates with stipends, mentorship, and community project support.",
    href: "/young-fellows-program",
    accent: "#0EA5E9",
    bg: "#EFF6FF",
  },
  {
    icon: "🏘️",
    title: "Community Safety Champion",
    short: "CSC",
    desc: "Equipping community leaders to become grassroots advocates for digital safety across Nigeria.",
    href: "/csc",
    accent: "#F59E0B",
    bg: "#FFFBEB",
  },
  {
    icon: "🎤",
    title: "Competitions & Challenges",
    short: "Debate · Skit · Art",
    desc: "Debate, skit, and art competitions engaging young minds in creative thinking about online safety.",
    href: "/competition",
    accent: "#EC4899",
    bg: "#FDF2F8",
  },
  {
    icon: "🎰",
    title: "Safer Gambling Initiative",
    short: "Youth Protection",
    desc: "Addressing the growing crisis of online betting addiction among Nigerian youth through education and advocacy.",
    href: "/safer-gambling",
    accent: "#EF4444",
    bg: "#FEF2F2",
  },
];


const testimonials = [
  {
    quote:
      "Before Virtually Safe, I had no idea what my children were actually exposed to online. The parent resources gave me practical language and tools to have conversations I was too afraid to start.",
    name: "Mrs. Bolarinde Adeyemi",
    role: "Parent, Lagos",
    initial: "N",
    accent: "#61CE70",
  },
  {
    quote:
      "Joining the ISSC club changed everything for me. I didn't realise how many of my classmates were dealing with cyberbullying in silence. Now we actually look out for each other.",
    name: "Tobi, 16",
    role: "ISSC Member, Abuja",
    initial: "T",
    accent: "#60A5FA",
  },
  {
    quote:
      "The educator resources are genuinely practical. I was able to integrate digital safety into my existing lessons without starting from scratch. It felt like support, not more work.",
    name: "Mr. Emeka Okafor",
    role: "Secondary School Teacher, Enugu",
    initial: "E",
    accent: "#FBBF24",
  },
];

const resources = [
  {
    label: "Parents",
    desc: "Practical tools and guides to protect your child online.",
    href: "/parent-resources",
    color: "#FFE5D9",
    icon: "👨‍👩‍👧",
  },
  {
    label: "Educators",
    desc: "Classroom resources and lesson plans on digital safety.",
    href: "/educators-resources",
    color: "#D8E2DC",
    icon: "📚",
  },
  {
    label: "Young People",
    desc: "Age-appropriate guides for staying safe online.",
    href: "/young-people-resources",
    color: "#a5e29b",
    icon: "🎓",
  },
  {
    label: "General",
    desc: "All-purpose safety resources for everyone.",
    href: "/general-resources",
    color: "#DBEAFE",
    icon: "🌐",
  },
];

const sectors = [
  { icon: "🏛️", label: "Government & Policy" },
  { icon: "🏫", label: "Schools & Universities" },
  { icon: "💻", label: "Tech Companies" },
  { icon: "🤝", label: "Civil Society & NGOs" },
  { icon: "📰", label: "Media & Press" },
];

/* ─── Page ──────────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      {/* ── 1. HERO ──────────────────────────────────────────────────── */}
      <section
        className="min-h-screen bg-[#00294B] flex items-center relative overflow-hidden pt-16"
        aria-label="Hero"
      >
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 w-full max-w-screen-xl mx-auto px-5 lg:px-12 grid lg:grid-cols-[1fr_440px] gap-8 lg:gap-0 items-center py-24 lg:py-0">
          <div>
            <span className="inline-flex items-center gap-2 bg-[#61CE70]/15 text-[#61CE70] text-sm font-bold uppercase tracking-widest px-5 py-2.5 rounded-full font-inter mb-8">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Creating safe digital environments
            </span>

            <h1 className="font-jakarta text-5xl md:text-6xl lg:text-[4.25rem] font-extrabold text-white leading-[1.1] tracking-tight mb-6">
              Through education, advocacy, and technology to{" "}
              <span className="text-[#61CE70]">protect young people online.</span>
            </h1>

            <p className="font-inter text-white/65 text-lg leading-relaxed mb-10 max-w-lg">
              Virtually Safe is Nigeria&apos;s leading online safety organisation dedicated to keeping
              young people safe in the digital world.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/about-us"
                className="inline-flex items-center gap-2 bg-[#61CE70] text-[#00294B] font-bold font-inter px-8 py-4 rounded-full hover:bg-[#4db85b] transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div
            className="hidden lg:block relative h-[540px] ml-8"
            style={{ clipPath: "polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
          >
            <Image
              src="/vsimage.jpg"
              alt="Young people engaging safely online"
              fill
              sizes="440px"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30" aria-hidden="true">
          <span className="font-inter text-xs uppercase tracking-widest">Scroll</span>
          <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── 2. MARQUEE BAND ──────────────────────────────────────────── */}
      <div
        className="bg-[#001F3A] border-y border-[#61CE70]/20 py-4 overflow-hidden"
        aria-label="Key facts"
        aria-live="off"
      >
        <div className="animate-marquee flex gap-0 whitespace-nowrap" style={{ width: "max-content" }}>
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-3 px-8 font-inter text-sm">
              <span className="font-bold text-[#61CE70]">{item.stat}</span>
              <span className="text-white/50">{item.label}</span>
              <span className="text-[#61CE70]/30 ml-4" aria-hidden="true">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── 3. THE CHALLENGE ─────────────────────────────────────────── */}
      <section className="bg-[#F9F9F9] py-20 lg:py-28" aria-label="Online threats young people face">
        <div className="max-w-screen-xl mx-auto px-5 lg:px-12">
          <p className="font-inter text-xs font-semibold uppercase tracking-[0.18em] text-[#61CE70] mb-3">
            The Challenge
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <h2 className="font-jakarta text-4xl lg:text-5xl font-bold text-[#00294B] leading-tight max-w-xl">
              The digital world comes with real risks.
            </h2>
            <p className="font-inter text-gray-500 text-base max-w-xs lg:text-right">
              Young Nigerians face a growing range of online threats, and most navigate them without adequate support.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {threats.map((t) => (
              <div
                key={t.title}
                className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-[#61CE70]/40 hover:shadow-md transition-all duration-200"
              >
                <span
                  className="inline-flex items-center justify-center w-11 h-11 rounded-xl mb-5 text-xl"
                  style={{ backgroundColor: t.bg }}
                  aria-hidden="true"
                >
                  {t.icon}
                </span>
                <h3 className="font-jakarta text-lg font-bold text-[#00294B] mb-3">{t.title}</h3>
                <p className="font-inter text-gray-500 text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. WHO WE HELP ───────────────────────────────────────────── */}
      <WhoWeHelp />

      {/* ── 5. OUR APPROACH ──────────────────────────────────────────── */}
      <PillarTabs />

      {/* ── 6. PROGRAMS ──────────────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28" aria-label="Our programs">
        <div className="max-w-screen-xl mx-auto px-5 lg:px-12">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <p className="font-inter text-xs font-semibold uppercase tracking-[0.18em] text-[#61CE70] mb-3">
                Our Programs
              </p>
              <h2 className="font-jakarta text-4xl lg:text-5xl font-bold text-[#00294B] leading-tight">
                Meeting young people<br className="hidden md:block" /> where they are.
              </h2>
            </div>
            <p className="font-inter text-gray-500 text-sm max-w-xs lg:text-right">
              From school clubs and national forums to tech challenges and community champions, our programs reach every level.
            </p>
          </div>

          {/* 2 featured cards */}
          <div className="grid lg:grid-cols-2 gap-6 mb-6">
            {featuredPrograms.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="group relative rounded-2xl overflow-hidden h-72 lg:h-80 block focus-visible:outline-2 focus-visible:outline-[#61CE70]"
              >
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute inset-0 p-7 flex flex-col justify-end">
                  <span
                    className="inline-block text-xs font-bold uppercase tracking-widest font-inter px-3 py-1 rounded-full mb-3 w-fit"
                    style={{ backgroundColor: p.accent, color: "#fff" }}
                  >
                    {p.short}
                  </span>
                  <h3 className="font-jakarta text-2xl font-bold text-white mb-2">{p.title}</h3>
                  <p className="font-inter text-white/70 text-sm leading-relaxed mb-4 max-w-sm">{p.desc}</p>
                  <span className="inline-flex items-center gap-2 font-inter text-sm font-semibold text-white group-hover:gap-3 transition-all">
                    {p.cta}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* 6 core programs grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {corePrograms.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="group rounded-2xl p-6 border border-gray-100 hover:shadow-md hover:border-transparent transition-all duration-200 flex flex-col gap-4 focus-visible:outline-2 focus-visible:outline-[#61CE70]"
                style={{ backgroundColor: p.bg }}
              >
                <div className="flex items-start justify-between">
                  <span className="text-3xl" aria-hidden="true">{p.icon}</span>
                  <span
                    className="text-xs font-bold uppercase tracking-wider font-inter px-2.5 py-1 rounded-full"
                    style={{ color: p.accent, backgroundColor: `${p.accent}18` }}
                  >
                    {p.short}
                  </span>
                </div>
                <div>
                  <h3 className="font-jakarta text-base font-bold text-[#00294B] mb-2">{p.title}</h3>
                  <p className="font-inter text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
                <span
                  className="inline-flex items-center gap-1.5 text-xs font-semibold font-inter mt-auto group-hover:gap-3 transition-all"
                  style={{ color: p.accent }}
                >
                  Learn More
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>

          {/* See all */}
          <div className="text-center">
            <Link
              href="/awarenes-campaign"
              className="inline-flex items-center gap-2 border border-gray-200 text-[#00294B] font-inter font-semibold text-sm px-7 py-3 rounded-full hover:bg-[#00294B] hover:text-white hover:border-[#00294B] transition-all"
            >
              See All Programs
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 7. BY THE NUMBERS ────────────────────────────────────────── */}
      <section className="bg-[#00294B] py-20 lg:py-28" aria-label="Research and statistics">
        <div className="max-w-screen-xl mx-auto px-5 lg:px-12">
          <div className="mb-14 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <p className="font-inter text-xs font-semibold uppercase tracking-[0.18em] text-[#61CE70] mb-3">
                The Research
              </p>
              <h2 className="font-jakarta text-4xl lg:text-5xl font-bold text-white leading-tight">
                Understanding the digital risks<br className="hidden lg:block" /> facing our youth.
              </h2>
            </div>
            <Link
              href="/research"
              className="inline-flex items-center gap-2 border border-[#61CE70]/40 text-[#61CE70] font-inter text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#61CE70]/10 transition-colors shrink-0"
            >
              View Full Research
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <p className="font-inter text-white/45 text-sm mb-12 max-w-lg">
            Evaluating young people&apos;s online experience in Nigeria.
          </p>

          <StatsSection />
        </div>
      </section>

      {/* ── 8. MISSION STATEMENT ─────────────────────────────────────── */}
      <section className="bg-[#F9F9F9] py-24 lg:py-32 px-5" aria-label="Our mission">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-inter text-xs font-semibold uppercase tracking-[0.18em] text-[#61CE70] mb-8">
            Our Mission
          </p>
          <blockquote className="font-serif-display text-3xl lg:text-4xl text-[#00294B] leading-relaxed mb-8">
            &ldquo;To create safer digital spaces where young people can{" "}
            <span className="text-[#61CE70]">explore, learn, and connect</span>{" "}
            without compromising their safety or well-being.&rdquo;
          </blockquote>
          <p className="font-inter text-gray-500 text-base lg:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Through education, campaigns, advocacy, resources and technology-driven solutions, we
            tackle the rising challenges of digital harms, misinformation, online exploitation, and
            digital addiction.
          </p>
          <Link
            href="/about-us"
            className="inline-flex items-center gap-2 font-inter text-sm font-semibold text-[#00294B] border-b-2 border-[#61CE70] pb-0.5 hover:text-[#61CE70] transition-colors"
          >
            About Us
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ── 8b. IMPACT PHOTOS ────────────────────────────────────────── */}
      <section className="bg-white pb-0" aria-label="Virtually Safe in action" aria-hidden="true">
        <div className="grid grid-cols-2 h-64 md:h-96">
          <div className="relative overflow-hidden">
            <Image
              src="/home-photo.jpg"
              alt="Virtually Safe team with students"
              fill
              sizes="50vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
          <div className="relative overflow-hidden">
            <Image
              src="/home-photo1.jpg"
              alt="Virtually Safe in schools across Nigeria"
              fill
              sizes="50vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
        </div>
      </section>

      {/* ── 9. TESTIMONIALS ──────────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28" aria-label="What people are saying">
        <div className="max-w-screen-xl mx-auto px-5 lg:px-12">
          <div className="mb-12">
            <p className="font-inter text-xs font-semibold uppercase tracking-[0.18em] text-[#61CE70] mb-3">
              Stories
            </p>
            <h2 className="font-jakarta text-4xl lg:text-5xl font-bold text-[#00294B] leading-tight">
              What people are saying.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="bg-[#F9F9F9] rounded-2xl p-8 flex flex-col gap-6 border border-gray-100"
              >
                {/* Quote mark */}
                <svg
                  className="w-8 h-8 shrink-0"
                  style={{ color: t.accent }}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                <blockquote className="font-serif-display text-gray-700 text-lg leading-relaxed flex-1">
                  {t.quote}
                </blockquote>

                <figcaption className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-jakarta font-bold text-sm text-white shrink-0"
                    style={{ backgroundColor: t.accent }}
                    aria-hidden="true"
                  >
                    {t.initial}
                  </div>
                  <div>
                    <p className="font-jakarta font-bold text-[#00294B] text-sm">{t.name}</p>
                    <p className="font-inter text-gray-400 text-xs">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. FREE RESOURCES CAROUSEL ──────────────────────────────── */}
      <section className="bg-[#F9F9F9] py-20 lg:py-28 overflow-hidden" aria-label="Free resources">
        <div className="max-w-screen-xl mx-auto px-5 lg:px-12 mb-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="font-inter text-xs font-semibold uppercase tracking-[0.18em] text-[#61CE70] mb-3">
                Free Resources
              </p>
              <h2 className="font-jakarta text-4xl lg:text-5xl font-bold text-[#00294B] leading-tight">
                Tools for everyone.
              </h2>
            </div>
            <p className="font-inter text-gray-500 text-sm max-w-xs">
              For parents, educators, and young people. No problem is too big or small.
            </p>
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto px-5 lg:px-12">
          <div className="flex gap-5 overflow-x-auto scrollbar-hide pb-4 lg:grid lg:grid-cols-4 lg:overflow-visible">
            {resources.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="group min-w-[260px] lg:min-w-0 flex-shrink-0 rounded-2xl p-7 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300 focus-visible:outline-2 focus-visible:outline-[#61CE70]"
                style={{ backgroundColor: r.color }}
              >
                <span className="text-4xl" aria-hidden="true">{r.icon}</span>
                <div>
                  <h3 className="font-jakarta text-xl font-bold text-[#00294B] mb-2">{r.label}</h3>
                  <p className="font-inter text-gray-600 text-sm leading-relaxed">{r.desc}</p>
                </div>
                <span className="mt-auto inline-flex items-center gap-1.5 font-inter text-sm font-semibold text-[#00294B] group-hover:gap-3 transition-all">
                  Explore
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 11. PARTNERS / STAKEHOLDERS ──────────────────────────────── */}
      <section className="bg-white py-20 lg:py-24" aria-label="Our stakeholders and partners">
        <div className="max-w-screen-xl mx-auto px-5 lg:px-12">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="font-inter text-xs font-semibold uppercase tracking-[0.18em] text-[#61CE70] mb-3">
              Working With
            </p>
            <h2 className="font-jakarta text-4xl lg:text-5xl font-bold text-[#00294B] leading-tight mb-5">
              Protecting young people is a shared responsibility.
            </h2>
            <p className="font-inter text-gray-500 text-base leading-relaxed">
              We work across government, education, technology, civil society, and media to build
              a national culture of digital safety, because no single organisation can do it alone.
            </p>
          </div>

          {/* Sector tiles */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
            {sectors.map((s) => (
              <div
                key={s.label}
                className="bg-[#F9F9F9] border border-gray-100 rounded-2xl p-6 flex flex-col items-center gap-3 text-center hover:border-[#61CE70]/30 hover:bg-[#F0FDF4] transition-colors"
              >
                <span className="text-3xl" aria-hidden="true">{s.icon}</span>
                <span className="font-jakarta text-sm font-bold text-[#00294B] leading-snug">{s.label}</span>
              </div>
            ))}
          </div>

          {/* Values callout */}
          <div className="bg-[#00294B] rounded-2xl p-8 lg:p-12 grid lg:grid-cols-4 gap-8">
            {[
              { icon: "🎓", title: "Education First", desc: "Informed communities are safer communities. Knowledge is the first line of defence." },
              { icon: "🔬", title: "Evidence-Based", desc: "Our programs and advocacy are grounded in research and real data from Nigerian communities." },
              { icon: "🤝", title: "Collaborative", desc: "We partner with schools, governments, tech companies, and communities for maximum impact." },
              { icon: "💡", title: "Innovative", desc: "We leverage technology and creativity to make online safety accessible and engaging." },
            ].map((v) => (
              <div key={v.title}>
                <span className="text-2xl mb-3 block" aria-hidden="true">{v.icon}</span>
                <h3 className="font-jakarta text-sm font-bold text-white mb-2">{v.title}</h3>
                <p className="font-inter text-white/50 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 12. CONTACT CTA ──────────────────────────────────────────── */}
      <ContactCTA />
    </>
  );
}
