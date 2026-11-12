import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Internet Safety School Club (ISSC)" };

const impact = [
  { stat: "16", label: "Active school clubs established across Lagos" },
  { stat: "1,200+", label: "Students trained in cyber safety & digital literacy" },
  { stat: "5,000+", label: "Additional students reached through peer-led sessions" },
  { stat: "500+", label: "Digital safety resources distributed (storybooks, board games, guides)" },
];

const modules = [
  {
    num: "01",
    title: "Introduction to Online Safety",
    topics: ["The Good Digital Citizen", "Digital Footprints", "Online Risks", "What is Online Safety?"],
    color: "#00294B",
  },
  {
    num: "02",
    title: "Staying Secure Online",
    topics: ["Building Strong Passwords", "Two-Factor Authentication", "Phishing", "Malware & VPNs"],
    color: "#60A5FA",
  },
  {
    num: "03",
    title: "Digital Literacy",
    topics: ["Verifying Online Identities", "Bots & AI", "Spotting Fake News", "Identifying Deepfakes"],
    color: "#8B5CF6",
  },
  {
    num: "04",
    title: "Smart Creators",
    topics: ["Smart Sharing", "Privacy & Personal Info", "Plagiarism & Copyright", "Netiquette"],
    color: "#61CE70",
  },
  {
    num: "05",
    title: "Digital Responsibility",
    topics: ["Social Media Influencer Ethics", "Online Betting Risks", "Inappropriate Content", "Digital Advocacy"],
    color: "#F59E0B",
  },
  {
    num: "06",
    title: "Digital Wellbeing",
    topics: ["Digital Reputation", "Making Good Choices", "Dealing with Cyberbullying", "Pass It On"],
    color: "#FB7185",
  },
];

const benefits = [
  { icon: "🤝", title: "Peer Support", desc: "Club members offer guidance and support to fellow students on online safety issues, multiplying impact across the school." },
  { icon: "📣", title: "Advocacy", desc: "Champion online safety awareness campaigns within your school community and beyond." },
  { icon: "🎓", title: "Training", desc: "Receive specialised training in cyber safety, digital literacy, privacy protection, and ethical online behaviour." },
  { icon: "🏆", title: "Recognition", desc: "Earn certificates and recognition for contributions to digital safety in your school." },
];

const theory = [
  { icon: "📚", title: "Education & Engagement", desc: "Digital safety training, peer learning, interactive board games, and storybooks." },
  { icon: "🌍", title: "Community & Advocacy", desc: "Involving parents, teachers, and school administrators to create a supportive safety ecosystem." },
  { icon: "🔄", title: "Long-Term Behaviour Change", desc: "Encouraging students to take ownership of their digital wellbeing and lead safer online practices." },
];

export default function ISSCPage() {
  return (
    <>
      <PageHero
        tag="Programs"
        title="Internet Safety School Club"
        highlight="(ISSC)"
        subtitle="Student-led clubs in secondary schools across Nigeria dedicated to promoting online safety awareness through peer-to-peer education and year-long digital safety training."
        bgFrom="from-teal-900"
        bgTo="to-emerald-950"
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">

          {/* About + Benefits */}
          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-nouvelr text-[#00294B] mb-4">About the School Club</h2>
              <p className="text-gray-600 font-lato leading-relaxed mb-4">
                The Internet Safety School Club (ISSC) is a student-led initiative that establishes online safety clubs in secondary schools across Nigeria. Club members are trained to become peer educators and digital safety champions within their schools.
              </p>
              <p className="text-gray-600 font-lato leading-relaxed mb-4">
                The programme equips students with essential skills in cyber safety, digital literacy, privacy protection, and ethical online behaviour. Through monthly meetings, competitions, and hands-on activities, club members promote safe internet use and support fellow students dealing with online challenges.
              </p>
              <p className="text-gray-600 font-lato leading-relaxed">
                The programme runs for a full academic year, covering 30 structured lessons across 6 modules — each 40–50 minutes, delivered by trained club facilitators.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((b) => (
                <div key={b.title} className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl p-5">
                  <div className="text-2xl mb-2">{b.icon}</div>
                  <h4 className="font-bold font-nouvelr text-[#00294B] text-sm mb-1">{b.title}</h4>
                  <p className="text-gray-600 text-xs font-lato">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Impact Stats */}
          <div className="mb-14">
            <h3 className="text-xl font-bold font-nouvelr text-[#00294B] mb-6 text-center">Impact in the Last Year</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {impact.map((item) => (
                <div key={item.stat} className="bg-[#00294B] rounded-2xl p-6 text-center">
                  <div className="text-3xl font-extrabold font-nouvelr text-[#61CE70] mb-2">{item.stat}</div>
                  <p className="text-white/70 text-xs font-lato leading-snug">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Photos */}
          <div className="grid grid-cols-2 gap-4 mb-14">
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/school-club.jpg"
                alt="Internet Safety School Club students"
                width={800}
                height={600}
                sizes="(max-width: 768px) 50vw, 25vw"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/school-club1.jpg"
                alt="Internet Safety School Club session"
                width={800}
                height={600}
                sizes="(max-width: 768px) 50vw, 25vw"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>

          {/* Club Curriculum */}
          <div className="mb-14">
            <h3 className="text-xl font-bold font-nouvelr text-[#00294B] mb-2 text-center">Club Curriculum — 6 Modules, 30 Lessons</h3>
            <p className="text-gray-500 font-lato text-sm text-center mb-8 max-w-xl mx-auto">
              The ISSC Club Guide is a structured year-long curriculum covering every dimension of online safety for secondary school students.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {modules.map((m) => (
                <div key={m.num} className="rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold font-nouvelr text-sm shrink-0"
                      style={{ backgroundColor: m.color }}
                    >
                      {m.num}
                    </span>
                    <h4 className="font-bold font-nouvelr text-[#00294B] text-sm leading-tight">{m.title}</h4>
                  </div>
                  <ul className="space-y-1.5">
                    {m.topics.map((t) => (
                      <li key={t} className="flex items-start gap-2 text-xs font-lato text-gray-600">
                        <span style={{ color: m.color }} className="mt-0.5 font-bold shrink-0">◆</span>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Theory of Change */}
          <div className="mb-14">
            <h3 className="text-xl font-bold font-nouvelr text-[#00294B] mb-6 text-center">Theory of Change</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {theory.map((t) => (
                <div key={t.title} className="text-center bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-7">
                  <div className="text-3xl mb-3">{t.icon}</div>
                  <h4 className="font-bold font-nouvelr text-[#00294B] mb-2">{t.title}</h4>
                  <p className="text-gray-600 text-sm font-lato leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Downloads */}
          <div className="mb-8">
            <h3 className="text-xl font-bold font-nouvelr text-[#00294B] mb-6">ISSC Documents</h3>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                {
                  title: "ISSC Impact Framework",
                  desc: "Our theory of change, impact tracking framework, and one-year programme outcomes for the Internet Safety School Club.",
                  file: "/issc-impact-framework.pdf",
                },
                {
                  title: "ISSC Club Guide",
                  desc: "The full 30-lesson club curriculum guide covering all 6 modules — designed for club facilitators and teachers.",
                  file: "/issc-club-guide.pdf",
                },
              ].map((doc) => (
                <div key={doc.file} className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col">
                  <div className="text-3xl mb-3">📄</div>
                  <h4 className="font-bold font-nouvelr text-[#00294B] mb-2">{doc.title}</h4>
                  <p className="text-gray-500 font-lato text-sm leading-relaxed flex-1 mb-5">{doc.desc}</p>
                  <a
                    href={doc.file}
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
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-[#00294B] text-white rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold font-nouvelr mb-4">Start a Club at Your School</h3>
            <p className="text-white/80 font-lato mb-6 max-w-lg mx-auto">
              Interested in establishing an ISSC at your school? We provide all the training, materials, and ongoing support you need — at no cost.
            </p>
            <Link href="/contact" className="bg-[#61CE70] text-[#00294B] px-8 py-3 rounded-lg font-bold font-lato hover:bg-[#4db85b] transition-colors inline-block">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
