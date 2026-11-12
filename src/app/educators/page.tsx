import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = { title: "Educators" };

const offerings = [
  {
    icon: "📋",
    title: "Curriculum Materials",
    desc: "Ready-to-use lesson plans and curriculum materials on internet safety, designed to integrate into existing subjects for all age groups.",
    color: "#61CE70",
    bg: "#F0FDF4",
  },
  {
    icon: "🖥️",
    title: "Virtual Classroom Safety",
    desc: "A comprehensive guide to help educators ensure online safety during virtual learning sessions and hybrid teaching environments.",
    color: "#60A5FA",
    bg: "#EFF6FF",
  },
  {
    icon: "🎯",
    title: "Digital Citizenship",
    desc: "Resources that prepare students for responsible, ethical, and confident participation in the digital world.",
    color: "#FBBF24",
    bg: "#FFFBEB",
  },
  {
    icon: "🧠",
    title: "Critical Thinking",
    desc: "Tools to help students think critically about online content, identify misinformation, and resist manipulation.",
    color: "#F472B6",
    bg: "#FDF2F8",
  },
  {
    icon: "📢",
    title: "Reporting Frameworks",
    desc: "Clear protocols for recognising, handling, and reporting online safety incidents within your school community.",
    color: "#FB7185",
    bg: "#FFF1F2",
  },
  {
    icon: "🤝",
    title: "Community Engagement",
    desc: "Strategies to engage parents, guardians, and the wider school community in meaningful online safety conversations.",
    color: "#A78BFA",
    bg: "#F5F3FF",
  },
];

const workshopHighlights = [
  { icon: "🎙️", text: "Expert facilitators with field experience in online safety" },
  { icon: "📋", text: "Ready-to-use classroom toolkits and lesson materials" },
  { icon: "🧑‍🤝‍🧑", text: "Collaborative sessions with educators from other schools" },
  { icon: "📱", text: "Live demonstrations of digital safety tools and platforms" },
  { icon: "🏫", text: "Guidance on setting up an Internet Safety School Club" },
];

const schoolPrograms = [
  {
    icon: "🏫",
    title: "Internet Safety School Club",
    short: "ISSC",
    desc: "Help students launch a peer-led digital safety club in your school with our full setup guide and support.",
    href: "/issc",
    accent: "#10B981",
  },
  {
    icon: "🚌",
    title: "Virtually Safe School Tour",
    short: "Nationwide",
    desc: "Invite our team to deliver interactive online safety sessions directly in your school — completely free.",
    href: "/school-tour",
    accent: "#61CE70",
  },
  {
    icon: "🎤",
    title: "Student Competitions",
    short: "Debate · Skit · Art",
    desc: "Register your students for nationwide debate, skit, and art competitions on digital safety themes.",
    href: "/competition",
    accent: "#EC4899",
  },
  {
    icon: "🔬",
    title: "Research & Resources",
    short: "Evidence-Based",
    desc: "Access our published research and curated educator resources grounded in data from Nigerian schools.",
    href: "/educators-resources",
    accent: "#60A5FA",
  },
];

export default function EducatorsPage() {
  return (
    <>
      {/* ── 1. HERO ── */}
      <section className="relative min-h-[90vh] flex items-end overflow-hidden" aria-label="For Educators">
        <Image
          src="/Teachersworkshop.jpg"
          alt="Educators at a Virtually Safe workshop"
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
          className="z-0"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#00294B] via-[#00294B]/55 to-[#00294B]/10" />
        <div className="relative z-20 w-full max-w-screen-xl mx-auto px-5 lg:px-12 pb-20 lg:pb-28">
          <span className="inline-flex items-center gap-2 bg-[#61CE70]/20 text-[#61CE70] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full font-inter mb-5">
            For Educators
          </span>
          <h1 className="font-jakarta text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6 max-w-4xl">
            Equip your classroom{" "}
            <span className="text-[#61CE70]">for the digital age.</span>
          </h1>
          <p className="font-inter text-white/65 text-xl leading-relaxed max-w-xl mb-10">
            As an educator, you shape how young people engage with the digital world. We give you the tools, training, and resources to make that influence count.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/educators-resources"
              className="inline-flex items-center gap-2 bg-[#61CE70] text-[#00294B] font-bold font-inter px-8 py-4 rounded-full hover:bg-[#4db85b] transition-colors"
            >
              Get Educator Resources
            </Link>
            <Link
              href="/school-tour"
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-inter px-8 py-4 rounded-full hover:border-white/70 hover:bg-white/5 transition-colors"
            >
              Book a School Visit
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. INTRO SPLIT ── */}
      <section className="bg-white py-20 lg:py-28" aria-label="Introduction">
        <div className="max-w-screen-xl mx-auto px-5 lg:px-12 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src="/Teachersworkshops.jpg"
                alt="Teachers at a workshop"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-[#00294B] rounded-2xl px-6 py-4 shadow-xl hidden lg:block">
              <p className="font-jakarta font-extrabold text-[#61CE70] text-3xl leading-none">400+</p>
              <p className="font-inter text-white/60 text-xs mt-1">teachers trained<br />in online safety</p>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="font-inter text-xs font-semibold uppercase tracking-[0.18em] text-[#61CE70] mb-4">
              Curated For Educators
            </p>
            <h2 className="font-jakarta text-4xl lg:text-5xl font-bold text-[#00294B] leading-tight mb-6">
              You play a critical role.
            </h2>
            <p className="font-inter text-gray-600 text-lg leading-relaxed mb-5">
              As an educator, you play a critical role in shaping how young people interact with the digital world. Virtually Safe provides hand-picked materials designed to help you create a safe, productive, and empowering digital learning environment.
            </p>
            <p className="font-inter text-gray-500 leading-relaxed mb-8">
              From classroom activities to whole-school policy frameworks, our resources are practical, easy to use, and built around the realities of Nigerian schools.
            </p>
            <Link
              href="/educators-resources"
              className="inline-flex items-center gap-2 bg-[#00294B] text-white font-bold font-inter px-7 py-3.5 rounded-full hover:bg-[#001F3A] transition-colors"
            >
              Access Educator Resources
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 3. WHAT WE OFFER ── */}
      <section className="bg-[#F9F9F9] py-20 lg:py-28" aria-label="What we offer educators">
        <div className="max-w-screen-xl mx-auto px-5 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div>
              <p className="font-inter text-xs font-semibold uppercase tracking-[0.18em] text-[#61CE70] mb-3">
                What We Offer
              </p>
              <h2 className="font-jakarta text-4xl lg:text-5xl font-bold text-[#00294B] leading-tight max-w-lg">
                Everything you need in the classroom.
              </h2>
            </div>
            <p className="font-inter text-gray-400 text-sm max-w-xs lg:text-right">
              Six educator resource types, all free, all designed for Nigerian classrooms.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {offerings.map((o) => (
              <div
                key={o.title}
                className="rounded-2xl p-7 border border-gray-100 hover:shadow-lg transition-all duration-300 group"
                style={{ backgroundColor: o.bg }}
              >
                <span
                  className="inline-flex items-center justify-center w-12 h-12 rounded-xl text-2xl mb-5"
                  style={{ backgroundColor: `${o.color}20` }}
                  aria-hidden="true"
                >
                  {o.icon}
                </span>
                <h3 className="font-jakarta font-bold text-[#00294B] text-lg mb-3">{o.title}</h3>
                <p className="font-inter text-gray-500 text-sm leading-relaxed">{o.desc}</p>
                <div
                  className="mt-5 h-0.5 w-6 rounded-full transition-all duration-300 group-hover:w-14"
                  style={{ backgroundColor: o.color }}
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. WORKSHOPS ── */}
      <section className="bg-[#00294B] py-20 lg:py-28" aria-label="Teachers workshops">
        <div className="max-w-screen-xl mx-auto px-5 lg:px-12 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative rounded-2xl overflow-hidden aspect-square">
              <Image src="/Teachersworkshop1.jpg" alt="Teachers workshop" fill sizes="25vw" style={{ objectFit: "cover" }} />
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-square mt-8">
              <Image src="/Teachersworkshop2.jpg" alt="Educators learning" fill sizes="25vw" style={{ objectFit: "cover" }} />
            </div>
            <div className="relative rounded-2xl overflow-hidden col-span-2 h-52">
              <Image src="/Teachersworkshop3.jpg" alt="Educators group session" fill sizes="50vw" style={{ objectFit: "cover" }} />
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="font-inter text-xs font-semibold uppercase tracking-[0.18em] text-[#61CE70] mb-4">
              Educators Workshops
            </p>
            <h2 className="font-jakarta text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Learn, connect, and lead change.
            </h2>
            <p className="font-inter text-white/65 text-lg leading-relaxed mb-4">
              Our Educators Workshops are hands-on, practical sessions where teachers gain the skills and confidence to embed online safety into their schools. Co-facilitated by experts and experienced educators.
            </p>
            <p className="font-inter text-white/50 text-sm leading-relaxed mb-6">
              The 2024 Online Safety Teachers Workshop was held on 28 June 2024, with 73 teachers in attendance. Facilitated by Gabrael Odunsi (ICT for Development Practitioner, 9+ years experience), the session covered digital literacy for kids and teenagers, a Bambi Board Game session, introduction to the ISSC Club Guide, and a digital skills closing session on social media and AI tools.
            </p>
            <ul className="space-y-4 mb-10">
              {workshopHighlights.map((h) => (
                <li key={h.text} className="flex items-center gap-3 font-inter text-white/70 text-sm">
                  <span className="text-lg shrink-0" aria-hidden="true">{h.icon}</span>
                  {h.text}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#61CE70] text-[#00294B] font-bold font-inter px-7 py-3.5 rounded-full hover:bg-[#4db85b] transition-colors"
            >
              Register for a Workshop
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 4b. WORKSHOP DATA ── */}
      <section className="bg-white py-20 lg:py-24" aria-label="Workshop research findings">
        <div className="max-w-screen-xl mx-auto px-5 lg:px-12">
          <div className="text-center mb-12">
            <p className="font-inter text-xs font-semibold uppercase tracking-[0.18em] text-[#61CE70] mb-3">Research & Findings</p>
            <h2 className="font-jakarta text-4xl lg:text-5xl font-bold text-[#00294B] leading-tight mb-4">
              What the data shows about teachers.
            </h2>
            <p className="font-inter text-gray-500 text-base max-w-xl mx-auto">
              Baseline and endline research from the 2024 Teachers Workshop reveals a significant knowledge gap in online safety — and why our training matters.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {[
              { stat: "45%", label: "Have zero knowledge of the effects of cyberbullying or how to prevent it", color: "#FB7185" },
              { stat: "85%", label: "Cannot identify warning signs that a child is being groomed online", color: "#F59E0B" },
              { stat: "55%", label: "Have zero knowledge of healthy online safety habits and practices", color: "#8B5CF6" },
              { stat: "75%", label: "Agree the internet can have significant negative impact on young people's lives", color: "#60A5FA" },
              { stat: "90%", label: "Discourage online betting and identify it as harmful to students", color: "#61CE70" },
              { stat: "75%", label: "Have experienced pressure online to share personal information with a stranger", color: "#00294B" },
            ].map((s) => (
              <div key={s.stat} className="rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-shadow">
                <div className="text-3xl font-extrabold font-jakarta mb-2" style={{ color: s.color }}>{s.stat}</div>
                <p className="font-inter text-gray-500 text-sm leading-relaxed">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div className="bg-slate-50 rounded-2xl p-8 mb-10">
            <h3 className="font-jakarta font-bold text-[#00294B] text-lg mb-5">What Teachers Said</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Balogun Olatunji Abiodun", quote: "Thank you so much for the beautiful and well delivered training at the Online Safety Teachers Workshop. We enjoyed all the facilitated sessions on Online Safety Education and the resources shared." },
                { name: "Rukayat Olabisi", quote: "Thank you for the opportunity to be a part of the workshop. I have discovered new information on Online Safety and how to teach and promote them among the students in school." },
                { name: "Olatunbosun Opeoluwa Olayinka", quote: "Your team has done a great job with the Online Safety session for teachers. I have gained new knowledge on online safety issues and how we can teach them to students in school." },
              ].map((v) => (
                <div key={v.name} className="bg-white rounded-xl p-5 border border-gray-100">
                  <p className="font-inter text-gray-600 text-sm italic leading-relaxed mb-3">&ldquo;{v.quote}&rdquo;</p>
                  <p className="font-inter font-bold text-[#00294B] text-xs">{v.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Downloads */}
          <div>
            <h3 className="font-jakarta font-bold text-[#00294B] text-xl mb-5">Teachers Workshop Reports</h3>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                {
                  title: "Teachers Workshop Report — Programme Overview",
                  desc: "Full report from the 2024 Online Safety Teachers Workshop: session overview, game sessions, school club introduction, digital skills closing, and teacher feedback.",
                  file: "/teachers-workshop-report-1.pdf",
                },
                {
                  title: "Teachers Workshop Report — Research Findings",
                  desc: "Baseline and endline assessment data from the 2024 workshop: teacher knowledge gaps on cyberbullying, online grooming, gambling, and online safety practices.",
                  file: "/teachers-workshop-report-2.pdf",
                },
              ].map((doc) => (
                <div key={doc.file} className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col">
                  <div className="text-3xl mb-3">📄</div>
                  <h4 className="font-jakarta font-bold text-[#00294B] mb-2 text-sm">{doc.title}</h4>
                  <p className="font-inter text-gray-500 text-sm leading-relaxed flex-1 mb-5">{doc.desc}</p>
                  <a
                    href={doc.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#00294B] hover:bg-[#003a69] text-white text-sm font-bold font-inter py-2.5 px-4 rounded-xl transition-colors"
                  >
                    <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download PDF
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. SCHOOL PROGRAMS ── */}
      <section className="bg-white py-20 lg:py-28" aria-label="School programs">
        <div className="max-w-screen-xl mx-auto px-5 lg:px-12">
          <div className="text-center mb-12">
            <p className="font-inter text-xs font-semibold uppercase tracking-[0.18em] text-[#61CE70] mb-3">
              School Programs
            </p>
            <h2 className="font-jakarta text-4xl lg:text-5xl font-bold text-[#00294B] leading-tight mb-4">
              Bring Virtually Safe to your school.
            </h2>
            <p className="font-inter text-gray-500 text-base max-w-md mx-auto">
              From student clubs to national competitions, there are multiple ways to engage your school community.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {schoolPrograms.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="group rounded-2xl p-7 border border-gray-100 hover:border-transparent hover:shadow-lg transition-all duration-300 flex flex-col gap-4 bg-[#F9F9F9]"
              >
                <div className="flex items-start justify-between">
                  <span className="text-3xl" aria-hidden="true">{p.icon}</span>
                  <span
                    className="text-xs font-bold uppercase tracking-wider font-inter px-2.5 py-1 rounded-full"
                    style={{ color: p.accent, backgroundColor: `${p.accent}15` }}
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
        </div>
      </section>

      {/* ── 6. CTA ── */}
      <section className="bg-[#61CE70] py-20 lg:py-24 px-5" aria-label="Get started">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-5xl mb-6" aria-hidden="true">🏫</div>
          <h2 className="font-jakarta text-4xl lg:text-5xl font-extrabold text-[#00294B] leading-tight mb-5">
            Ready to make your school digitally safe?
          </h2>
          <p className="font-inter text-[#00294B]/70 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            From free resources to in-school visits and nationwide competitions, we are here to support every educator in Nigeria.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/school-tour"
              className="inline-flex items-center justify-center gap-2 bg-[#00294B] text-white font-bold font-inter px-8 py-4 rounded-full hover:bg-[#001F3A] transition-colors"
            >
              Book a School Visit
            </Link>
            <Link
              href="/educators-resources"
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
