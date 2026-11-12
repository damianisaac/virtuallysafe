import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Young African Internet Safety Fellows (YAISF)" };

const programs = [
  {
    icon: "🎤",
    title: "Cyber Space Conference",
    desc: "Fellows are officially announced and participate in the Cyber Space Conference, engaging with industry experts, policymakers, and cybersecurity professionals.",
    impact: "Fellows gained real-world exposure to cybersecurity discussions and contributed to key conversations about online safety policy for young people.",
  },
  {
    icon: "🛡️",
    title: "Online Safety Training",
    desc: "Interactive workshops covering cyber threats, digital literacy, misinformation, privacy, and online safety best practices.",
    impact: "Topics: Cyberbullying Prevention, Online Privacy & Digital Footprints, Recognising & Reporting Online Exploitation, Safe Social Media Practices.",
  },
  {
    icon: "🏘️",
    title: "Community Project Implementation",
    desc: "Each fellow receives a stipend to develop and implement an online safety project in their community — book readings, workshops, or online campaigns.",
    impact: "Over 2,000+ students reached through community-led projects, fostering a ripple effect of online safety awareness.",
  },
  {
    icon: "💻",
    title: "Virtual Cybersecurity Training",
    desc: "Technical training covering cyber threats & protection, AI in cybersecurity, and ethical hacking & digital forensics basics.",
    impact: "Fellows gained technical skills and a deeper understanding of AI-driven security solutions, preparing them for future careers in cybersecurity.",
  },
  {
    icon: "📢",
    title: "Advocacy Training",
    desc: "Training in digital citizenship, combating online hate speech & misinformation, and how to report and respond to digital harassment.",
    impact: "Fellows developed advocacy skills to engage policymakers, school leaders, and online platforms in strengthening online safety measures.",
  },
  {
    icon: "🎉",
    title: "Virtual Closing Party",
    desc: "A celebration event bringing together fellows and program coordinators to reflect on achievements and foster connections for future collaborations.",
    impact: "Fellows expressed renewed commitment to online safety advocacy, with many planning to continue their work beyond the fellowship.",
  },
];

const impactStats = [
  { stat: "2,000+", label: "Youth reached through community projects" },
  { stat: "16+", label: "Hours of training in online safety & cybersecurity" },
  { stat: "8", label: "Fellows trained, empowered, and equipped to drive change" },
  { stat: "13–18", label: "Age range of fellows" },
];

const steps = [
  "Visit the application portal and complete the online form",
  "Submit a brief statement of interest and your community project idea",
  "Shortlisted candidates will be invited for an interview",
  "Successful applicants will receive an offer to join the fellowship",
];

export default function YoungFellowsProgramPage() {
  return (
    <>
      <PageHero
        tag="Programs"
        title="Young African Internet Safety"
        highlight="Fellows (YAISF)"
        subtitle="A one-year program designed to equip young people in Nigeria (ages 13–18) with the skills, knowledge, and resources to address pressing internet safety challenges."
        bgFrom="from-blue-900"
        bgTo="to-cyan-950"
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">

          {/* Photos */}
          <div className="grid grid-cols-2 gap-4 mb-14">
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/yaisf-photo.jpg"
                alt="YAISF fellows"
                width={800}
                height={600}
                sizes="(max-width: 768px) 50vw, 25vw"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/yaisf-photo1.jpg"
                alt="YAISF fellowship activities"
                width={800}
                height={600}
                sizes="(max-width: 768px) 50vw, 25vw"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>

          {/* About */}
          <div className="mb-14">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold font-nouvelr text-[#00294B] mb-4">About the Fellowship</h2>
                <p className="text-gray-600 font-lato leading-relaxed mb-4">
                  The Young African Internet Safety (YAIS) Fellowship is a one-year program designed to equip young people in Nigeria (ages 13–18) with the skills, knowledge, and resources to address pressing internet safety challenges.
                </p>
                <p className="text-gray-600 font-lato leading-relaxed mb-4">
                  As Africa&apos;s youth increasingly engage in digital spaces, they face significant risks such as cyberbullying, online exploitation, misinformation, and digital addiction. The YAIS Fellowship empowers the next generation to become leaders in online safety, ensuring a safer digital future for all.
                </p>
                <p className="text-gray-600 font-lato leading-relaxed">
                  Through curated training, workshops, mentorship, and hands-on community projects, fellows develop the expertise needed to drive change within their communities and advocate for responsible digital engagement.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {impactStats.map((s) => (
                  <div key={s.stat} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-5 text-center">
                    <div className="text-2xl font-extrabold font-nouvelr text-[#00294B] mb-1">{s.stat}</div>
                    <p className="text-gray-600 text-xs font-lato leading-snug">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Program Structure */}
          <div className="mb-14">
            <h3 className="text-xl font-bold font-nouvelr text-[#00294B] mb-2 text-center">Fellowship Program Structure</h3>
            <p className="text-gray-500 font-lato text-sm text-center mb-8 max-w-lg mx-auto">
              The YAISF is structured around six key programs, each aimed at building fellows&apos; expertise in online safety, cybersecurity, advocacy, and community engagement.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {programs.map((p) => (
                <div key={p.title} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl shrink-0">{p.icon}</span>
                    <div>
                      <h4 className="font-bold font-nouvelr text-[#00294B] mb-2">{p.title}</h4>
                      <p className="text-gray-600 text-sm font-lato leading-relaxed mb-3">{p.desc}</p>
                      <div className="bg-white/70 rounded-lg px-3 py-2">
                        <p className="text-xs font-lato text-[#00294B] font-semibold">{p.impact}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Application */}
          <div className="mb-14 grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-bold font-nouvelr text-[#00294B] mb-6">Eligibility</h3>
              <ul className="space-y-3">
                {[
                  "Young Nigerian aged 13–18",
                  "Passionate about online safety and digital rights",
                  "Ability to commit to fellowship activities throughout the year",
                  "Willing to design and execute a community online safety project",
                  "Open to training sessions, workshops, and mentorship meetings",
                ].map((r) => (
                  <li key={r} className="flex items-start gap-3 font-lato text-gray-700 text-sm">
                    <span className="text-[#61CE70] font-bold text-lg mt-0.5">✓</span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold font-nouvelr text-[#00294B] mb-6">How to Apply</h3>
              <ol className="space-y-3">
                {steps.map((s, i) => (
                  <li key={i} className="flex items-start gap-3 font-lato text-gray-700 text-sm">
                    <span className="w-6 h-6 bg-[#00294B] text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {s}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Acknowledgements */}
          <div className="mb-8 bg-slate-50 rounded-2xl p-6 text-center">
            <p className="text-gray-500 font-lato text-sm mb-1">Supported by</p>
            <p className="font-bold font-nouvelr text-[#00294B]">Impact Amplifier, Google.org, and key stakeholders in the internet safety community</p>
          </div>

          {/* Download + CTA */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col">
              <div className="text-3xl mb-3">📄</div>
              <h4 className="font-bold font-nouvelr text-[#00294B] mb-2">Download YAISF Program Report</h4>
              <p className="text-gray-500 font-lato text-sm flex-1 mb-5 leading-relaxed">
                Read the full program report documenting YAISF activities, milestones, and impact from the fellowship year.
              </p>
              <a
                href="/yaisf-program-report.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#00294B] hover:bg-[#003a69] text-white text-sm font-bold font-lato py-2.5 px-4 rounded-xl transition-colors"
              >
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download PDF
              </a>
            </div>

            <div className="bg-[#00294B] text-white rounded-2xl p-6 flex flex-col">
              <h4 className="text-lg font-bold font-nouvelr mb-3">Applications Open Soon!</h4>
              <p className="text-white/70 font-lato text-sm flex-1 mb-5">
                Together, we are building a safer internet for the next generation. Express your interest to be notified when applications open.
              </p>
              <Link href="/contact" className="bg-[#61CE70] text-[#00294B] px-6 py-3 rounded-xl font-bold font-lato hover:bg-[#4db85b] transition-colors text-center text-sm">
                Express Interest
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
