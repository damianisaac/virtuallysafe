import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Hacktivate" };

const phases = [
  { step: "01", title: "Register & Apply", desc: "Participants register their interest and those with ideas submit an application describing their solution concept." },
  { step: "02", title: "Team Formation & Ideation", desc: "At kickoff, participants form teams and identify a real online safety problem affecting young people to address." },
  { step: "03", title: "Rapid Prototyping", desc: "Each team works together over two days to develop projects, apps, campaigns, or tools with mentorship from industry experts." },
  { step: "04", title: "Pitch & Launch", desc: "Teams present their solutions to a panel of judges. Winners receive funding, mentorship, and support to launch into the real world." },
];

const focusAreas = [
  { icon: "🛡️", label: "Child Sexual Abusive Materials (CSAM)" },
  { icon: "🎰", label: "Gambling & Underage Betting" },
  { icon: "🧠", label: "Digital Wellbeing & Mental Health" },
  { icon: "🔒", label: "Data Privacy & Digital Rights" },
  { icon: "👊", label: "Cyberbullying & Harassment" },
  { icon: "⚖️", label: "Cyber & Electronic Crimes" },
];

const gamblingFacts = [
  { stat: "9 years", label: "Gambling patterns can start as early as age 9" },
  { stat: "39%", label: "Of young Nigerians surveyed have betted online" },
  { stat: "Only 3%", label: "Of those who betted have ever won a bet" },
  { stat: "60%", label: "Of adults who bet regularly have experienced addiction" },
];

const gamblingGoals = [
  "Minimise gambling-related harm including addictions and depression",
  "Educate young people about the risks of online gambling and betting",
  "Support communities affected by gambling-related harms",
  "Advocate for stronger regulations on gambling advertising targeting youth",
  "Provide resources for young people and families dealing with gambling issues",
];

export default function HacktivatePage() {
  return (
    <>
      <PageHero
        tag="Programs"
        title="Online Safety"
        highlight="HACKTIVATED"
        subtitle="A platform for young people, tech enthusiasts, creatives, engineers, and entrepreneurs to collaborate and build innovative solutions to tackle online safety challenges in Nigeria."
        bgFrom="from-purple-900"
        bgTo="to-violet-950"
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">

          {/* The Problem + Scale */}
          <div className="mb-14">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold font-nouvelr text-[#00294B] mb-4">The Problem</h2>
                <p className="text-gray-600 font-lato leading-relaxed mb-4">
                  With about 160 million internet users in Nigeria — 55.5% of the population — the internet is one of the most powerful engines for growth and education. Yet it also exposes millions of young people to significant online harms.
                </p>
                <p className="text-gray-600 font-lato leading-relaxed">
                  There are approximately 110 million young people under the age of 18 in Nigeria. Without innovative technology-driven solutions, this enormous population remains vulnerable to cyberbullying, exploitation, CSAM, gambling addiction, and misinformation.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { stat: "160M", label: "Internet users in Nigeria" },
                  { stat: "55.5%", label: "Of Nigeria's population online" },
                  { stat: "110M", label: "Young people under 18" },
                ].map((s) => (
                  <div key={s.stat} className="bg-purple-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-extrabold font-nouvelr text-purple-700 mb-1">{s.stat}</div>
                    <p className="text-gray-600 text-xs font-lato leading-snug">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Photos */}
          <div className="grid grid-cols-2 gap-4 mb-14">
            <div className="relative rounded-2xl overflow-hidden h-56 md:h-72">
              <Image
                src="/hacktivate-photo.jpg"
                alt="Hacktivate participants"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden h-56 md:h-72">
              <Image
                src="/hacktivate-photo1.jpg"
                alt="Hacktivate innovation session"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          {/* The Goal */}
          <div className="text-center mb-14 bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-10">
            <h2 className="text-2xl md:text-3xl font-bold font-nouvelr text-[#00294B] mb-4">The Goal</h2>
            <p className="text-gray-600 font-lato max-w-2xl mx-auto leading-relaxed">
              Online Safety HACKTIVATED is a platform where internet stakeholders — young people, tech enthusiasts, creatives, engineers, ideators, educators, and entrepreneurs — come together to work collaboratively and build solutions to tackle online safety issues in Nigeria. The goal is to produce innovative tech products, ideas, and MVPs that drive transformative internet safety solutions into development.
            </p>
          </div>

          {/* Focus Areas */}
          <div className="mb-14">
            <h3 className="text-xl font-bold font-nouvelr text-[#00294B] mb-6 text-center">Online Safety Focus Areas</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {focusAreas.map((f) => (
                <div key={f.label} className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3 border border-gray-100">
                  <span className="text-xl shrink-0">{f.icon}</span>
                  <span className="font-lato text-[#00294B] text-sm font-medium">{f.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-14">
            <h3 className="text-xl font-bold font-nouvelr text-[#00294B] mb-8 text-center">How It Works</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {phases.map((p) => (
                <div key={p.step} className="text-center">
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold font-nouvelr text-lg mx-auto mb-4">
                    {p.step}
                  </div>
                  <h4 className="font-bold font-nouvelr text-[#00294B] mb-2">{p.title}</h4>
                  <p className="text-gray-600 text-sm font-lato">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Past Impact */}
          <div className="mb-14 bg-[#00294B] rounded-2xl p-8 text-white">
            <h3 className="text-xl font-bold font-nouvelr mb-2">Past Impact</h3>
            <p className="text-white/70 font-lato text-sm mb-0">
              In 2022, Virtually Safe organised the <span className="text-[#61CE70] font-semibold">Safer Gambling Hackathon</span> — welcoming 60 participants with innovative solutions to promote a safer gambling environment in Nigeria. This hackathon brought together young innovators, developers, and advocates to build tech products addressing underage betting and gambling harm.
            </p>
          </div>

          {/* Safer Gambling Section */}
          <div className="mb-14">
            <div className="inline-block bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full font-lato mb-4">
              Safer Gambling Initiative
            </div>
            <h3 className="text-xl font-bold font-nouvelr text-[#00294B] mb-4">
              Why Gambling is a Key Issue Hacktivate is Solving
            </h3>
            <p className="text-gray-600 font-lato leading-relaxed mb-8">
              Online gambling and betting is one of the most pressing online safety issues affecting young Nigerians. Gambling patterns can start as early as age 9. Our research shows that 39% of young people surveyed have betted online — yet only 3% have ever won. Virtually Safe is committed to addressing this growing public health issue through innovation, advocacy, and community action.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {gamblingFacts.map((f) => (
                <div key={f.stat} className="bg-amber-50 border border-amber-100 rounded-xl p-5 text-center">
                  <div className="text-2xl font-bold font-nouvelr text-amber-700 mb-1">{f.stat}</div>
                  <p className="text-gray-600 text-xs font-lato">{f.label}</p>
                </div>
              ))}
            </div>

            <h4 className="font-bold font-nouvelr text-[#00294B] mb-4">Our Safer Gambling Goals</h4>
            <ul className="space-y-3">
              {gamblingGoals.map((g) => (
                <li key={g} className="flex items-start gap-3 font-lato text-gray-700">
                  <span className="text-[#61CE70] font-bold text-lg mt-0.5">✓</span>
                  {g}
                </li>
              ))}
            </ul>
          </div>

          {/* Download + CTA */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col">
              <div className="text-3xl mb-3">📄</div>
              <h4 className="font-bold font-nouvelr text-[#00294B] mb-2">Download Hacktivate Report</h4>
              <p className="text-gray-500 font-lato text-sm flex-1 mb-5 leading-relaxed">
                Read the full Hacktivate programme overview including the problem, solution, how it works, and past sponsors.
              </p>
              <a
                href="/hacktivate-report.pdf"
                download
                className="flex items-center justify-center gap-2 bg-[#00294B] hover:bg-[#003a69] text-white text-sm font-bold font-lato py-2.5 px-4 rounded-xl transition-colors"
              >
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download PDF
              </a>
            </div>

            <div className="bg-gradient-to-br from-purple-900 to-violet-950 text-white rounded-2xl p-6 flex flex-col">
              <h4 className="text-lg font-bold font-nouvelr mb-3">Ready to Hacktivate?</h4>
              <p className="text-white/70 font-lato text-sm flex-1 mb-5">
                If you have an idea that can make the internet safer for young Nigerians, we want to hear it. Apply to participate in the next Hacktivate cohort.
              </p>
              <Link href="/contact" className="bg-[#61CE70] text-[#00294B] px-6 py-3 rounded-xl font-bold font-lato hover:bg-[#4db85b] transition-colors text-center text-sm">
                Apply Now
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
