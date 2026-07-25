import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Internet Safety Stakeholders Forum (ISSF)" };

const highlights = [
  "Engaging panel discussions on digital well-being, online betting, social media grooming, and online harassment",
  "Interactive sessions with Virtually Safe's Bambi Online Safety Board Game",
  "Keynote speeches from cybersecurity experts, healthcare practitioners, and ICT development specialists",
  "Distribution of online safety resources including The Adventures of Chimamanda and Yusuf storybook",
  "Networking sessions connecting stakeholders across education, policy, technology, and civil society",
];

const panelOne = [
  {
    name: "Detiem Taiwo",
    role: "Cyber Security Enthusiast & Programs Manager, Cyber Safe Foundation",
    topic: "Explored the concept of cyber security and how organisations must become cyber-aware.",
  },
  {
    name: "Ebere Okonkwo",
    role: "Founder, Mental Health Care Startup",
    topic: "Explained digital well-being, how the internet affects mental health, and steps to recover from online harms.",
  },
  {
    name: "Chichi Umeseaka",
    role: "Media Executive",
    topic: "Shed light on online grooming — the warning signs and how to protect children from online harms.",
  },
];

const panelTwo = [
  {
    name: "Fisayo Oke",
    role: "Founder, Gamble Alert & Gaming Operations Manager",
    topic: "Explained how gaming and betting operations work, the disadvantages of online betting, and urged the audience to become advocates for online safety.",
  },
  {
    name: "Dr. Chioma Nwakanma-Akanno",
    role: "Healthcare Physician",
    topic: "Explored creating a healthy balance between online and offline lives and effective strategies to combat cyberbullying and online harassment, as a victim and a bystander.",
  },
  {
    name: "Gabrael Odunsi",
    role: "ICT Development Practitioner",
    topic: "Focused on Child Sexual Abusive Materials (CSAM) and how social media platforms and tech companies can be held accountable for preventing the spread of CSAM.",
  },
];

export default function ISSFPage() {
  return (
    <>
      <PageHero
        tag="Programs"
        title="Internet Safety Stakeholders Forum"
        highlight="(ISSF)"
        subtitle="A multi-stakeholder platform that brings together policymakers, educators, parents, tech companies, and civil society to facilitate discussion on online safety and digital policy in Nigeria."
      />

      {/* Photo banner — 1 inch trimmed from top and bottom */}
      <div className="relative w-full overflow-hidden bg-[#00294B]">
        <Image
          src="/issfphoto.jpg"
          alt="Internet Safety Stakeholders Forum 2024"
          width={1600}
          height={900}
          sizes="100vw"
          style={{ width: "100%", height: "auto", display: "block", marginTop: "-288px", marginBottom: "-768px" }}
          priority
        />
        <div className="absolute bottom-4 left-6 md:left-10">
          <span className="bg-[#61CE70] text-[#00294B] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full font-lato">
            ISSF 2024 — Lagos, Nigeria
          </span>
        </div>
      </div>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">

          {/* About */}
          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-nouvelr text-[#00294B] mb-4">About the ISSF</h2>
              <p className="text-gray-600 font-lato leading-relaxed mb-4">
                The Internet Safety Stakeholders Forum (ISSF) is Virtually Safe&apos;s flagship annual event that gathers key stakeholders to discuss, debate, and develop actionable solutions to the online safety crisis facing young people in Nigeria.
              </p>
              <p className="text-gray-600 font-lato leading-relaxed mb-4">
                The ISSF was one of the most important outcomes of Virtually Safe&apos;s Africa Online Safety Fund in 2022. After carrying out various projects funded by Impact Amplifier and Google.org, the team recognised the need for a permanent forum where internet stakeholders can meet to discuss issues and progress around internet safety.
              </p>
              <p className="text-gray-600 font-lato leading-relaxed">
                The forum creates a collaborative space where government officials, school administrators, parents, NGOs, and technology companies can align on a shared vision for safer digital environments.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "🗓️", title: "First ISSF", desc: "Hosted in May 2024 — Virtually Safe's inaugural multi-stakeholder internet safety forum" },
                { icon: "🎮", title: "Bambi Board Game", desc: "11 groups of 4 participants engaged in 1-hour online safety quizzes and discussions" },
                { icon: "🎙️", title: "Expert Panels", desc: "Two panel sessions featuring 6 speakers from cybersecurity, healthcare, media, and fintech" },
                { icon: "🌐", title: "Multi-Stakeholder", desc: "Young people, parents, teachers, NGOs, and tech companies all represented at the forum" },
              ].map((item) => (
                <div key={item.title} className="bg-slate-50 rounded-xl p-4">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="font-bold font-nouvelr text-[#00294B] text-sm mb-1">{item.title}</div>
                  <p className="text-gray-500 text-xs font-lato">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* What to Expect */}
          <div className="mb-14">
            <h3 className="text-xl font-bold font-nouvelr text-[#00294B] mb-6">What to Expect at ISSF</h3>
            <ul className="space-y-4">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 font-lato text-gray-700">
                  <span className="text-[#61CE70] font-bold text-lg mt-0.5">✓</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Panel Sessions */}
          <div className="mb-14">
            <h3 className="text-xl font-bold font-nouvelr text-[#00294B] mb-2">Panel Sessions — ISSF 2024</h3>
            <p className="text-gray-500 font-lato text-sm mb-8">Two panel sessions featured six leading voices in cybersecurity, health, media, gambling, and digital rights.</p>

            <div className="mb-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 bg-[#00294B] text-white rounded-full flex items-center justify-center text-sm font-bold font-nouvelr">1</div>
                <h4 className="font-bold font-nouvelr text-[#00294B]">Panel 1: Cybersecurity, Digital Wellbeing & Online Grooming</h4>
              </div>
              <div className="grid md:grid-cols-3 gap-5">
                {panelOne.map((p) => (
                  <div key={p.name} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-5">
                    <h5 className="font-bold font-nouvelr text-[#00294B] text-sm mb-1">{p.name}</h5>
                    <p className="text-xs text-[#61CE70] font-lato font-semibold mb-3">{p.role}</p>
                    <p className="text-gray-600 text-xs font-lato leading-relaxed">{p.topic}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 bg-[#00294B] text-white rounded-full flex items-center justify-center text-sm font-bold font-nouvelr">2</div>
                <h4 className="font-bold font-nouvelr text-[#00294B]">Panel 2: Gambling, Mental Health & CSAM</h4>
              </div>
              <div className="grid md:grid-cols-3 gap-5">
                {panelTwo.map((p) => (
                  <div key={p.name} className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-5">
                    <h5 className="font-bold font-nouvelr text-[#00294B] text-sm mb-1">{p.name}</h5>
                    <p className="text-xs text-[#61CE70] font-lato font-semibold mb-3">{p.role}</p>
                    <p className="text-gray-600 text-xs font-lato leading-relaxed">{p.topic}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Attendee Feedback */}
          <div className="mb-14 bg-slate-50 rounded-2xl p-8">
            <h3 className="text-lg font-bold font-nouvelr text-[#00294B] mb-6">What Attendees Said</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                '"Thank you for organising such an impactful event."',
                '"We look forward to a 2.0 of this event."',
                '"As a speaker, I also learnt new things and why it\'s important to be an advocate for online safety."',
              ].map((quote, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-gray-100">
                  <p className="text-gray-600 text-sm font-lato italic leading-relaxed">{quote}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Download + CTA */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-[#00294B] rounded-2xl p-6 flex flex-col">
              <div className="text-3xl mb-3">📄</div>
              <h3 className="font-bold font-nouvelr text-[#00294B] text-lg mb-2">Download the ISSF Report</h3>
              <p className="text-gray-500 font-lato text-sm mb-5 flex-1">
                Read the full report from the inaugural Internet Safety Stakeholders Forum, including session summaries and key outcomes.
              </p>
              <a
                href="/issf-report.pdf"
                download
                className="flex items-center justify-center gap-2 bg-[#00294B] hover:bg-[#003a69] text-white text-sm font-bold font-lato py-3 px-5 rounded-xl transition-colors"
              >
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download ISSF Report (PDF)
              </a>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 flex flex-col">
              <h3 className="text-lg font-bold font-nouvelr text-[#00294B] mb-3">Stay Informed</h3>
              <p className="text-gray-600 font-lato text-sm mb-5 flex-1">
                Want to receive updates on the next ISSF event, including exclusive invitations and speaker announcements?
              </p>
              <div className="flex flex-col gap-3">
                <Link href="/contact" className="bg-[#00294B] text-white px-6 py-3 rounded-lg font-bold font-lato hover:bg-[#001F3A] transition-colors text-center text-sm">
                  Get Involved
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
