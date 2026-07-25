import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Programs Report" };

const programs = [
  { name: "Internet Safety Stakeholders Forum (ISSF)", href: "/issf", icon: "🎙️", desc: "Annual multi-stakeholder forum on internet safety policy and practice." },
  { name: "Internet Safety School Club (ISSC)", href: "/issc", icon: "🏫", desc: "Student-led clubs in secondary schools promoting peer digital safety education." },
  { name: "Hacktivate", href: "/hacktivate", icon: "💡", desc: "Innovation hackathon producing tech solutions to online safety challenges." },
  { name: "Young African Internet Safety Fellows (YAISF)", href: "/young-fellows-program", icon: "🌍", desc: "One-year fellowship equipping young Nigerians aged 13–18 to lead online safety change." },
  { name: "Awareness & Campaigns", href: "/awarenes-campaign", icon: "📣", desc: "Nationwide school tour, competitions, and community awareness campaigns." },
];

const keyStats = [
  { stat: "437", label: "Schools reached in 2024 school tour", color: "#00294B" },
  { stat: "70,000+", label: "Students trained across 22 states", color: "#61CE70" },
  { stat: "85%", label: "Of young people agree internet carries significant risks", color: "#60A5FA" },
  { stat: "90%", label: "Have felt bad about an online interaction", color: "#8B5CF6" },
  { stat: "15%", label: "Knew they could report online harm to a trusted adult", color: "#FB7185" },
  { stat: "39%", label: "Of young people surveyed have betted online", color: "#F59E0B" },
  { stat: "98%", label: "Have seen inappropriate or annoying adverts while browsing", color: "#10B981" },
  { stat: "600+", label: "Volunteers trained and deployed in 2024", color: "#EC4899" },
];

const findings = [
  {
    q: "Top online safety concerns identified by young people",
    findings: ["Cyberbullying", "Pornography", "Online Betting", "Online Grooming", "Internet Fraud", "Hacking"],
  },
  {
    q: "Most used apps and platforms among Nigerian youth",
    findings: ["TikTok", "Instagram", "WhatsApp", "Google", "YouTube", "Snapchat", "Telegram", "Call of Duty"],
  },
  {
    q: "Top inappropriate ads reported by young people",
    findings: ["Sexual content", "Betting adverts", "Dating apps", "Forex trading", "Groomers soliciting images"],
  },
];

export default function ProgramsReportPage() {
  return (
    <>
      <PageHero
        tag="Programs"
        title="Programs"
        highlight="Report"
        subtitle="A comprehensive overview of Virtually Safe's programmes, impact, and reach across Nigeria — grounded in data from our 2024 school tour and programme activities."
        bgFrom="from-slate-900"
        bgTo="to-gray-950"
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">

          {/* About */}
          <div className="mb-14">
            <h2 className="text-2xl md:text-3xl font-bold font-nouvelr text-[#00294B] mb-4">Our Programs at a Glance</h2>
            <p className="text-gray-600 font-lato leading-relaxed mb-4">
              Virtually Safe runs a range of targeted programmes designed to address online safety from multiple angles — education, advocacy, technology, and community engagement. Our 2024 school tour covered 437 schools across 22 states with over 600 volunteers facilitating online safety lessons and distributing toolkits to students and teachers.
            </p>
            <p className="text-gray-600 font-lato leading-relaxed">
              Educating young people on how they can navigate the internet to ensure they are protected, respected, and empowered online is our mission — and the data from our programmes shows both the scale of the challenge and the impact of our response.
            </p>
          </div>

          {/* Programs List */}
          <div className="grid grid-cols-1 gap-4 mb-14">
            {programs.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="flex items-center gap-4 bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-200 rounded-xl px-6 py-4 transition-colors group"
              >
                <span className="text-2xl shrink-0">{p.icon}</span>
                <div className="flex-1 min-w-0">
                  <span className="font-nouvelr font-bold text-[#00294B] group-hover:text-blue-700 block text-sm md:text-base">{p.name}</span>
                  <span className="text-gray-500 text-xs font-lato">{p.desc}</span>
                </div>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>

          {/* Key Stats */}
          <div className="mb-14">
            <h3 className="text-xl font-bold font-nouvelr text-[#00294B] mb-2 text-center">2024 Impact at a Glance</h3>
            <p className="text-gray-500 font-lato text-sm text-center mb-8 max-w-xl mx-auto">
              Data from our 2024 school tour research — 437 schools across 22 states, baseline and endline assessments completed by students nationwide.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {keyStats.map((s) => (
                <div key={s.stat} className="rounded-2xl p-5 text-center border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="text-2xl md:text-3xl font-extrabold font-nouvelr mb-2" style={{ color: s.color }}>{s.stat}</div>
                  <p className="text-gray-500 text-xs font-lato leading-snug">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Research Findings */}
          <div className="mb-14">
            <h3 className="text-xl font-bold font-nouvelr text-[#00294B] mb-6">Key Research Findings</h3>
            <div className="space-y-6">
              {findings.map((f) => (
                <div key={f.q} className="bg-slate-50 rounded-2xl p-6">
                  <h4 className="font-bold font-nouvelr text-[#00294B] mb-3 text-sm">{f.q}</h4>
                  <div className="flex flex-wrap gap-2">
                    {f.findings.map((item, i) => (
                      <span key={item} className="bg-white border border-gray-200 text-gray-700 text-xs font-lato px-3 py-1 rounded-full">
                        <span className="text-[#61CE70] font-bold mr-1">{i + 1}.</span>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Narrative */}
          <div className="mb-14 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
            <h3 className="text-lg font-bold font-nouvelr text-[#00294B] mb-4">What the Data Tells Us</h3>
            <div className="space-y-4 text-gray-600 font-lato text-sm leading-relaxed">
              <p>
                While 85% of young people agree the internet carries significant risks and 90% understand the concept of online safety, awareness alone is not enough — most young people are unprepared to handle online harms when they occur.
              </p>
              <p>
                Only 15% of young people surveyed knew they could report online harm to a trusted adult or their parents. When asked what they would do if the internet affected their mental health, 90% were unsure or didn&apos;t know what to do.
              </p>
              <p>
                39% of young people have betted online despite laws prohibiting underage gambling — and only 3% of that number have ever won a bet. Nearly all (98%) have encountered inappropriate or annoying adverts while browsing. These findings underscore the urgent, ongoing need for structured digital safety education in Nigerian schools.
              </p>
            </div>
          </div>

          {/* Download */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col sm:flex-row gap-5 items-start sm:items-center mb-6">
            <div className="text-3xl shrink-0">📄</div>
            <div className="flex-1">
              <h4 className="font-bold font-nouvelr text-[#00294B] mb-1">Download Programs Report</h4>
              <p className="text-gray-500 font-lato text-sm leading-relaxed">
                Full programme report including school tour data, baseline/endline research findings, and impact metrics from Virtually Safe&apos;s 2024 activities.
              </p>
            </div>
            <a
              href="/programs-report.pdf"
              download
              className="shrink-0 flex items-center gap-2 bg-[#00294B] hover:bg-[#003a69] text-white text-sm font-bold font-lato py-2.5 px-5 rounded-xl transition-colors whitespace-nowrap"
            >
              <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download PDF
            </a>
          </div>

          {/* Secondary Links */}
          <div className="flex flex-wrap gap-4">
            <Link href="/research" className="border border-[#00294B] text-[#00294B] px-6 py-3 rounded-lg font-lato hover:bg-gray-100 transition-colors text-sm">
              View Research Reports
            </Link>
            <Link href="/contact" className="bg-[#61CE70] text-[#00294B] px-6 py-3 rounded-lg font-bold font-lato hover:bg-[#4db85b] transition-colors text-sm">
              Partner With Us
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
