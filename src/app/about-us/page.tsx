import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = { title: "About Us" };

const impactStats = [
  { value: "350+", label: "Schools Reached" },
  { value: "300,000+", label: "Young People Trained" },
  { value: "29", label: "States Covered" },
  { value: "6+", label: "Years of Impact" },
];

const values = [
  {
    icon: "🎓",
    title: "Education First",
    desc: "Informed communities are safer communities. Knowledge is the first and most powerful line of defence against digital harms.",
    accent: "#61CE70",
  },
  {
    icon: "🔬",
    title: "Evidence-Based",
    desc: "Our programs and advocacy are grounded in rigorous research and real data drawn from Nigerian communities.",
    accent: "#60A5FA",
  },
  {
    icon: "🤝",
    title: "Collaborative",
    desc: "We partner with schools, governments, tech companies, and communities because protecting young people is a shared responsibility.",
    accent: "#FBBF24",
  },
  {
    icon: "💡",
    title: "Innovative",
    desc: "We leverage technology and creativity to make online safety accessible, engaging, and impactful at scale.",
    accent: "#F472B6",
  },
  {
    icon: "🔓",
    title: "Empowering",
    desc: "We equip young people with confidence to navigate the digital world safely, not just the rules to follow.",
    accent: "#A78BFA",
  },
  {
    icon: "🌍",
    title: "Inclusive",
    desc: "Our resources and programs reach young people, parents, and educators across Nigeria regardless of background.",
    accent: "#34D399",
  },
];

const pillars = [
  {
    num: "01",
    title: "Education",
    desc: "Equipping young people, parents, and educators with the resources and knowledge they need to foster a culture of digital safety and well-being.",
    color: "#61CE70",
  },
  {
    num: "02",
    title: "Research & Advocacy",
    desc: "Evidence-based advocacy that influences policy at national level, grounded in real data from Nigerian communities.",
    color: "#60A5FA",
  },
  {
    num: "03",
    title: "Technology",
    desc: "Investing in innovative solutions to strengthen digital safety systems and tackle online harms at their root.",
    color: "#F472B6",
  },
  {
    num: "04",
    title: "Awareness & Campaigns",
    desc: "Keeping online safety top-of-mind through nationwide campaigns, school tours, and community engagement.",
    color: "#FBBF24",
  },
];

const timeline = [
  {
    year: "2020",
    milestones: [
      "Virtually Safe launched in Nigeria with online safety campaigns and awareness initiatives and a core mission to tackle Nigeria's rapidly growing online safety crisis.",
    ],
  },
  {
    year: "2021",
    milestones: [
      "Launched the Internet Safety School Club (ISSC) in pilot schools across Lagos State Education Districts, building peer-to-peer safety culture.",
      "Expanded nationwide with the Virtually Safe School Tour, bringing safety education to students across 19 states, reaching over 100,000 students.",
    ],
  },
  {
    year: "2022",
    milestones: [
      "Hosted the inaugural Internet Safety Stakeholders Forum (ISSF), uniting 200+ policymakers, educators, and tech leaders.",
      "Hosted the inaugural Teachers/Educators Workshop.",
      "Hosted the inaugural Parents Workshop.",
      "Hosted the inaugural Online Safety Hackathon with a focus on Safer Gambling.",
    ],
  },
  {
    year: "2023",
    milestones: [
      "Launched Hacktivate.",
      "Launched the Young Internet Safety Fellows Program.",
      "Launched the Online Safety Story Book.",
    ],
  },
  {
    year: "2024",
    milestones: [
      "Rebranded annual conference to Cyber Space Conference, gathering 1,500+ students and 400+ teachers.",
      "Reached over 10,000 young Nigerians and introduced AI-powered tools for anonymous online issue reporting.",
      "Launched the Online Safety Board Game (Bambi).",
    ],
  },
];

const sectors = [
  { icon: "🏛️", label: "Government & Policy" },
  { icon: "🏫", label: "Schools & Universities" },
  { icon: "💻", label: "Tech Companies" },
  { icon: "🤝", label: "Civil Society & NGOs" },
  { icon: "📰", label: "Media & Press" },
];

export default function AboutUsPage() {
  return (
    <>
      {/* ── 1. HERO ── */}
      <section className="relative min-h-[92vh] flex items-end overflow-hidden" aria-label="About Virtually Safe">
        <Image
          src="/aboutpage.jpg"
          alt="Virtually Safe team at work"
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
          className="z-0"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#00294B] via-[#00294B]/60 to-[#00294B]/20" />

        <div className="relative z-20 w-full max-w-screen-xl mx-auto px-5 lg:px-12 pb-20 lg:pb-28">
          <p className="font-inter text-xs font-semibold uppercase tracking-[0.18em] text-[#61CE70] mb-4">
            About Us
          </p>
          <h1 className="font-jakarta text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6 max-w-4xl">
            We are{" "}
            <span className="text-[#61CE70]">Virtually Safe.</span>
          </h1>
          <p className="font-inter text-white/65 text-xl leading-relaxed max-w-2xl mb-10">
            Nigeria&apos;s leading online safety organisation dedicated to protecting young people in the digital world through education, advocacy, and technology.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/programs-report"
              className="inline-flex items-center gap-2 bg-[#61CE70] text-[#00294B] font-bold font-inter px-8 py-4 rounded-full hover:bg-[#4db85b] transition-colors"
            >
              Our Impact Report
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-inter px-8 py-4 rounded-full hover:border-white/70 hover:bg-white/5 transition-colors"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. WHO WE ARE ── */}
      <section className="bg-[#00294B]" aria-label="Who we are">
        <div className="max-w-screen-xl mx-auto px-5 lg:px-12 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <p className="font-inter text-xs font-semibold uppercase tracking-[0.18em] text-[#61CE70] mb-5">
              Who We Are
            </p>
            <h2 className="font-jakarta text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight mb-8">
              Built to protect the generation{" "}
              <span className="text-[#61CE70]">growing up online.</span>
            </h2>
            <p className="font-inter text-white/70 text-xl leading-relaxed mb-6">
              Virtually Safe is Nigeria&apos;s leading online safety organisation dedicated to protecting young people in the digital world. Founded on the belief that every child has the right to a safe online experience, we work tirelessly to provide the education, tools, and advocacy needed to make that a reality.
            </p>
            <p className="font-inter text-white/60 text-lg leading-relaxed mb-10">
              Through education, campaigns, advocacy, resources, and technology-driven solutions, we tackle the rising challenges of digital harms, misinformation, online exploitation, and digital addiction facing young Nigerians every day.
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
              <Image
                src="/who-we-are.JPG"
                alt="Virtually Safe team"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
              {/* Decorative accent */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#00294B]/50 to-transparent" />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -left-6 bg-[#61CE70] rounded-2xl px-6 py-5 shadow-2xl hidden lg:block">
              <p className="font-jakarta font-extrabold text-[#00294B] text-4xl leading-none">6+</p>
              <p className="font-inter text-[#00294B]/70 text-sm mt-1">Years protecting<br />young Nigerians</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. IMPACT NUMBERS ── */}
      <section className="bg-[#61CE70]" aria-label="Our impact">
        <div className="max-w-screen-xl mx-auto px-5 lg:px-12 py-16 lg:py-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {impactStats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-jakarta font-extrabold text-[#00294B] text-5xl lg:text-6xl leading-none mb-2">
                  {s.value}
                </p>
                <p className="font-inter text-[#00294B]/65 text-sm font-semibold uppercase tracking-wide">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. MISSION & VISION ── */}
      <section className="bg-[#F9F9F9] py-20 lg:py-28" aria-label="Our mission and vision">
        <div className="max-w-screen-xl mx-auto px-5 lg:px-12">
          <p className="font-inter text-xs font-semibold uppercase tracking-[0.18em] text-[#61CE70] mb-4 text-center">
            Purpose
          </p>
          <h2 className="font-jakarta text-4xl lg:text-5xl font-bold text-[#00294B] text-center mb-14 leading-tight">
            What drives us forward.
          </h2>
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Mission */}
            <div className="bg-[#00294B] rounded-3xl p-10 lg:p-12 relative overflow-hidden">
              <div
                className="absolute top-0 right-0 w-48 h-48 rounded-full bg-[#61CE70]/10 -translate-y-1/4 translate-x-1/4"
                aria-hidden="true"
              />
              <span className="inline-block font-inter text-[#61CE70] text-xs font-bold uppercase tracking-widest mb-5">
                Our Mission
              </span>
              <div className="text-5xl mb-6" aria-hidden="true">🎯</div>
              <p className="font-jakarta text-white text-2xl lg:text-3xl font-bold leading-tight mb-4">
                Creating safer digital spaces for every young Nigerian.
              </p>
              <p className="font-inter text-white/55 leading-relaxed">
                To create safer digital spaces where young people can explore, learn, and connect without compromising their safety or well-being, through education, advocacy, and technology-driven solutions.
              </p>
            </div>
            {/* Vision */}
            <div className="bg-white border border-gray-100 rounded-3xl p-10 lg:p-12 relative overflow-hidden shadow-sm">
              <div
                className="absolute top-0 right-0 w-48 h-48 rounded-full bg-[#61CE70]/8 -translate-y-1/4 translate-x-1/4"
                aria-hidden="true"
              />
              <span className="inline-block font-inter text-[#61CE70] text-xs font-bold uppercase tracking-widest mb-5">
                Our Vision
              </span>
              <div className="text-5xl mb-6" aria-hidden="true">🌍</div>
              <p className="font-jakarta text-[#00294B] text-2xl lg:text-3xl font-bold leading-tight mb-4">
                A Nigeria where every child navigates the internet safely.
              </p>
              <p className="font-inter text-gray-500 leading-relaxed">
                A Nigeria where every young person has the knowledge, tools, and support they need to navigate the digital world safely, confidently, and with their well-being fully intact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. OUR VALUES ── */}
      <section className="bg-white py-20 lg:py-28" aria-label="Our values">
        <div className="max-w-screen-xl mx-auto px-5 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div>
              <p className="font-inter text-xs font-semibold uppercase tracking-[0.18em] text-[#61CE70] mb-3">
                Our Values
              </p>
              <h2 className="font-jakarta text-4xl lg:text-5xl font-bold text-[#00294B] leading-tight max-w-lg">
                The principles that guide everything we do.
              </h2>
            </div>
            <p className="font-inter text-gray-400 text-sm max-w-xs lg:text-right">
              Six core values that shape every programme, partnership, and decision we make.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v) => (
              <div
                key={v.title}
                className="group bg-[#F9F9F9] rounded-2xl p-7 border border-gray-100 hover:border-transparent hover:shadow-lg transition-all duration-300"
              >
                <span
                  className="inline-flex items-center justify-center w-12 h-12 rounded-xl text-2xl mb-5"
                  style={{ backgroundColor: `${v.accent}18` }}
                  aria-hidden="true"
                >
                  {v.icon}
                </span>
                <h3
                  className="font-jakarta text-lg font-bold mb-3"
                  style={{ color: "#00294B" }}
                >
                  {v.title}
                </h3>
                <p className="font-inter text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                <div
                  className="mt-5 h-0.5 w-8 rounded-full transition-all duration-300 group-hover:w-16"
                  style={{ backgroundColor: v.accent }}
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. OUR APPROACH (PILLARS) ── */}
      <section className="bg-[#00294B] py-20 lg:py-28" aria-label="Our approach">
        <div className="max-w-screen-xl mx-auto px-5 lg:px-12">
          <div className="mb-14 grid lg:grid-cols-2 gap-8 items-end">
            <div>
              <p className="font-inter text-xs font-semibold uppercase tracking-[0.18em] text-[#61CE70] mb-3">
                Our Approach
              </p>
              <h2 className="font-jakarta text-4xl lg:text-5xl font-bold text-white leading-tight">
                Four pillars of<br />online safety.
              </h2>
            </div>
            <p className="font-inter text-white/45 text-base leading-relaxed lg:text-right">
              We tackle online safety from every angle, combining education, research, technology, and community campaigns to create lasting change.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {pillars.map((p) => (
              <div
                key={p.num}
                className="rounded-2xl border border-white/10 p-8 hover:border-white/25 hover:bg-white/4 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="font-jakarta font-extrabold text-5xl leading-none" style={{ color: `${p.color}20` }}>
                    {p.num}
                  </span>
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                    style={{ backgroundColor: `${p.color}20` }}
                    aria-hidden="true"
                  >
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: p.color }} />
                  </div>
                </div>
                <h3 className="font-jakarta text-2xl font-bold text-white mb-3" style={{ borderLeft: `3px solid ${p.color}`, paddingLeft: "12px" }}>
                  {p.title}
                </h3>
                <p className="font-inter text-white/50 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. PHOTO STORY ── */}
      <section className="bg-[#F9F9F9] py-20 lg:py-28 overflow-hidden" aria-label="Our story in pictures">
        <div className="max-w-screen-xl mx-auto px-5 lg:px-12 mb-12">
          <p className="font-inter text-xs font-semibold uppercase tracking-[0.18em] text-[#61CE70] mb-3">
            Our Story
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end gap-6 justify-between">
            <h2 className="font-jakarta text-4xl lg:text-5xl font-bold text-[#00294B] leading-tight max-w-xl">
              Six years of protecting young Nigerians online.
            </h2>
            <p className="font-inter text-gray-500 text-sm max-w-sm lg:text-right">
              From a small Lagos-based initiative to Nigeria&apos;s leading online safety organisation, our journey has been driven by one purpose.
            </p>
          </div>
        </div>

        {/* Image grid */}
        <div className="max-w-screen-xl mx-auto px-5 lg:px-12 grid grid-cols-1 lg:grid-cols-[1fr_1fr_1fr] gap-4 mb-14">
          <div className="relative rounded-2xl overflow-hidden h-72 lg:h-auto lg:row-span-1">
            <Image
              src="/aboutpagee.jpg"
              alt="Virtually Safe in action"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="relative rounded-2xl overflow-hidden h-72 lg:h-auto">
            <Image
              src="/aboutpg.jpg"
              alt="Virtually Safe programs"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="relative rounded-2xl overflow-hidden h-72 lg:h-auto">
            <Image
              src="/aboutpage.jpg"
              alt="Virtually Safe community"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-screen-xl mx-auto px-5 lg:px-12">
          <div className="relative">
            {/* Vertical line */}
            <div className="hidden lg:block absolute left-[calc(50%-1px)] top-0 bottom-0 w-px bg-gray-200" aria-hidden="true" />

            <div className="space-y-10 lg:space-y-0">
              {timeline.map((t, i) => (
                <div
                  key={t.year + i}
                  className={`relative lg:grid lg:grid-cols-2 lg:gap-16 lg:py-8`}
                >
                  {/* Content — alternates sides on desktop */}
                  <div className={`${i % 2 === 0 ? "lg:text-right lg:pr-6" : "lg:col-start-2 lg:pl-6"}`}>
                    <span className="inline-block font-jakarta font-extrabold text-3xl text-[#61CE70] mb-3">
                      {t.year}
                    </span>
                    <ul className={`space-y-2 ${i % 2 === 0 ? "lg:items-end" : ""}`}>
                      {t.milestones.map((m, j) => (
                        <li key={j} className={`font-inter text-gray-600 text-base leading-relaxed flex gap-2 ${i % 2 === 0 ? "lg:flex-row-reverse lg:text-right" : ""}`}>
                          <span className="text-[#61CE70] mt-1.5 shrink-0 text-xs" aria-hidden="true">◆</span>
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Centre dot — positioned on the dividing line */}
                  <div
                    className={`hidden lg:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10`}
                    aria-hidden="true"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#61CE70] ring-4 ring-white shadow-md" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. WHO WE WORK WITH ── */}
      <section className="bg-white py-20 lg:py-24" aria-label="Who we work with">
        <div className="max-w-screen-xl mx-auto px-5 lg:px-12">
          <div className="text-center mb-12">
            <p className="font-inter text-xs font-semibold uppercase tracking-[0.18em] text-[#61CE70] mb-3">
              Working With
            </p>
            <h2 className="font-jakarta text-4xl lg:text-5xl font-bold text-[#00294B] leading-tight mb-4">
              Protecting young people is a shared responsibility.
            </h2>
            <p className="font-inter text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
              We collaborate across every sector of Nigerian society because online safety requires a whole-community response.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-14">
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

          {/* Quote / mission statement */}
          <div className="bg-[#00294B] rounded-3xl p-10 lg:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-[#61CE70]/5 -translate-y-1/2" aria-hidden="true" />
            <svg className="w-10 h-10 text-[#61CE70] mx-auto mb-6 opacity-60" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="font-jakarta text-2xl lg:text-3xl font-bold text-white leading-relaxed max-w-3xl mx-auto mb-6">
              &ldquo;To create safer digital spaces where young people can{" "}
              <span className="text-[#61CE70]">explore, learn, and connect</span>{" "}
              without compromising their safety or well-being.&rdquo;
            </blockquote>
            <p className="font-inter text-white/40 text-sm uppercase tracking-widest">Virtually Safe Mission</p>
          </div>
        </div>
      </section>

      {/* ── 9. JOIN US CTA ── */}
      <section className="bg-[#001F3A] py-24 lg:py-32 px-5" aria-label="Get involved">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-inter text-xs font-semibold uppercase tracking-[0.18em] text-[#61CE70] mb-6">
            Get Involved
          </p>
          <h2 className="font-jakarta text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Join us in{" "}
            <span className="text-[#61CE70]">making the internet</span>{" "}
            safer for every Nigerian child.
          </h2>
          <p className="font-inter text-white/50 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
            Whether you are a school, a government body, a tech company, or an individual who cares about online safety, there is a place for you in our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#61CE70] text-[#00294B] font-bold font-inter px-10 py-5 rounded-full text-lg hover:bg-[#4db85b] transition-colors"
            >
              Partner With Us
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/research"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white font-inter px-10 py-5 rounded-full text-base hover:border-white/50 transition-colors"
            >
              View Our Research
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
