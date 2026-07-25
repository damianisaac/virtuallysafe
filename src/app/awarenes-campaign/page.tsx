import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Awareness & Campaigns" };

const campaigns = [
  { title: "Community Engagement", icon: "🏘️", desc: "Taking digital safety conversations to communities, markets, and public spaces across Nigeria." },
  { title: "School Campaigns", icon: "🏫", desc: "Interactive awareness programmes delivered directly in schools during assemblies and events." },
  { title: "Social Media Campaigns", icon: "📱", desc: "Viral campaigns that reach millions of young Nigerians with key online safety messages." },
  { title: "Policy Advocacy", icon: "🏛️", desc: "Engaging government and policymakers to strengthen online safety legislation and enforcement." },
];

const schoolTourTopics = [
  { icon: "🛡️", title: "Digital Resilience", desc: "Empowering young minds against cyberbullying — how to identify it, respond, and support others." },
  { icon: "🎣", title: "Phishing & Scams", desc: "Unveiling the depths of phishing techniques, prevention strategies, and how to stay protected." },
  { icon: "👣", title: "Digital Footprints", desc: "Understanding what your digital footprint is and why it matters for your future and safety." },
  { icon: "⚠️", title: "Online Risks", desc: "Identifying and navigating risks including online grooming, inappropriate content, and internet fraud." },
];

const tourStates = [
  "Lagos", "Kaduna", "Sokoto", "Akure", "Osun", "Bauchi", "Bayelsa", "Katsina",
  "Ogun", "Oyo", "Kano", "Adamawa", "Plateau", "Rivers", "Cross River",
  "Abuja", "Kwara", "Ekiti", "Ondo", "Kogi", "Akwa Ibom", "Abia",
];

const competitions = [
  {
    icon: "🎤",
    title: "Debate Competition",
    theme: "Combating Underage Online Betting",
    desc: "Students submitted essays and debated on the topic: ‘Combating Underage Online Betting: The Responsibility of Parents or Betting Companies.’ 164 applications were received and 15 students were selected to participate in the online debate.",
    objectives: [
      "Build critical thinking and the ability to evaluate credibility of online information",
      "Develop research skills through evidence-gathering on online safety issues",
      "Strengthen communication and public speaking on digital safety topics",
    ],
  },
  {
    icon: "🎬",
    title: "Short Film Competition",
    theme: "Trolls, Cruise & Bullies",
    desc: "Students created and performed original short films exploring online manipulation, harassment, and bullying. Themes included TROLLS (online manipulation), CRUISE (online harassment in Nigerian internet culture), and BULLIES (trolls and cruise as digital terrorism).",
    objectives: [
      "Use creative storytelling to expose hidden dangers of the digital world",
      "Foster empathy, awareness, and collective action on online harms",
      "Provide a platform for artistic expression that promotes online safety",
    ],
  },
  {
    icon: "🎨",
    title: "Art Challenge",
    theme: "Talking Emojis & Digital Disconnection",
    desc: "Students submitted visual art exploring online safety themes. Art themes included Talking Emojis (expressing positive online communication and empathy) and Digital Addiction and Disconnection (capturing isolation from excessive online engagement).",
    objectives: [
      "Use art as a medium for self-expression on online safety and digital wellbeing",
      "Transform emojis from passive symbols into active tools for empathy",
      "Celebrate diversity in artistic styles while centering online safety awareness",
    ],
  },
];

export default function AwarenessCampaignPage() {
  return (
    <>
      <PageHero
        tag="Programs"
        title="Awareness &"
        highlight="Campaigns"
        subtitle="Our goal is to keep young people safe online. We achieve this through nationwide campaigns, a massive school tour, creative competitions, and awareness programs that reach every corner of Nigeria."
        bgFrom="from-pink-900"
        bgTo="to-rose-950"
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">

          {/* Intro */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-nouvelr text-[#00294B] mb-4">
                Community Engagement & Awareness
              </h2>
              <p className="text-gray-600 font-lato leading-relaxed mb-4">
                Virtually Safe runs year-round awareness campaigns targeting young people, parents, and communities. Our campaigns leverage social media, community events, school programmes, and media partnerships to spread critical online safety messages.
              </p>
              <p className="text-gray-600 font-lato leading-relaxed">
                Through creative storytelling, engaging content, and grassroots outreach, we make online safety relevant and accessible to everyone.
              </p>
            </div>
            <div>
              <Image
                src="https://res.cloudinary.com/karotcloud/image/upload/v1743672363/awc_tcax80.jpg"
                alt="Awareness Campaign"
                width={600}
                height={400}
                className="w-full h-72 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>

          {/* Campaign Types */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            {campaigns.map((c) => (
              <div key={c.title} className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6">
                <div className="text-3xl mb-3">{c.icon}</div>
                <h3 className="font-bold font-nouvelr text-[#00294B] mb-2">{c.title}</h3>
                <p className="text-gray-600 text-sm font-lato leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>

          {/* Extra photo */}
          <div className="relative rounded-2xl overflow-hidden h-64 md:h-80 mb-16">
            <Image
              src="/awareness1.jpg"
              alt="Virtually Safe awareness campaign in action"
              fill
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#00294B]/50 to-transparent" />
          </div>

          {/* === SCHOOL TOUR === */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-[#00294B] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full font-lato">School Tour</span>
              <div className="flex-1 h-px bg-gray-100" />
            </div>

            <div className="grid md:grid-cols-2 gap-10 items-start mb-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold font-nouvelr text-[#00294B] mb-4">Virtually Safe School Tour</h2>
                <p className="text-gray-600 font-lato leading-relaxed mb-4">
                  A nationwide initiative where volunteers visit hundreds of schools simultaneously across Nigeria to facilitate online safety lessons and distribute online safety toolkits to students and teachers.
                </p>
                <p className="text-gray-600 font-lato leading-relaxed">
                  The 2024 school tour took place between 1 May and 15 June 2024, covering 22 states. Over 600 volunteers were recruited, trained, and equipped with online safety school kits for educators and students — including the Bambi board game, storybooks, brochures, and an endline/baseline assessment form.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { stat: "437", label: "Schools reached in 2024" },
                  { stat: "70,000+", label: "Students trained on online safety" },
                  { stat: "22", label: "States covered across Nigeria" },
                  { stat: "600+", label: "Volunteers deployed" },
                  { stat: "4", label: "Core online safety topics delivered" },
                  { stat: "3 weeks", label: "Duration of 2024 activation" },
                ].map((s) => (
                  <div key={s.stat} className="bg-sky-50 rounded-xl p-3 text-center">
                    <div className="font-extrabold font-nouvelr text-[#00294B] text-xl mb-0.5">{s.stat}</div>
                    <p className="text-gray-500 text-xs font-lato leading-tight">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Topics covered */}
            <h4 className="font-bold font-nouvelr text-[#00294B] mb-4">Topics Covered During the School Tour</h4>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {schoolTourTopics.map((t) => (
                <div key={t.title} className="flex gap-4 bg-sky-50 rounded-xl p-5">
                  <span className="text-2xl shrink-0">{t.icon}</span>
                  <div>
                    <h5 className="font-bold font-nouvelr text-[#00294B] text-sm mb-1">{t.title}</h5>
                    <p className="text-gray-600 text-xs font-lato leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* States */}
            <div className="mb-8">
              <h4 className="font-bold font-nouvelr text-[#00294B] mb-4">States Covered — 2024</h4>
              <div className="flex flex-wrap gap-2">
                {tourStates.map((s) => (
                  <span key={s} className="bg-gray-100 text-gray-700 text-xs font-lato px-3 py-1 rounded-full">{s}</span>
                ))}
              </div>
            </div>

            {/* Volunteer Feedback */}
            <div className="bg-[#00294B] rounded-2xl p-8 mb-6">
              <h4 className="text-white font-bold font-nouvelr mb-5">Volunteer Voices</h4>
              <div className="grid md:grid-cols-3 gap-5">
                {[
                  { name: "Titus Hannah Oluwatosin", role: "Kogi State Team Lead", quote: "The Virtually Safe School Tour has been nothing short of an educational adventure for my team and me. This experience has enriched us in ways we never anticipated, fostering a deeper connection to the mission of making schools safer and more informed." },
                  { name: "Assayomo Endurance", role: "Lagos District 1 Team Lead", quote: "It was exceptionally well-organised and provided a wonderful insight into the tour. The positive feedback we've received from participants is a testament of the good work we did as it was both informative and enjoyable." },
                  { name: "Emmanuella Wilfred", role: "Lagos State District 4", quote: "This experience has unexpectedly impacted us, deepening our commitment to the mission of enhancing online safety and awareness." },
                ].map((v) => (
                  <div key={v.name} className="bg-white/10 rounded-xl p-5">
                    <p className="text-white/80 text-xs font-lato italic leading-relaxed mb-3">&ldquo;{v.quote}&rdquo;</p>
                    <p className="text-[#61CE70] font-bold text-xs font-nouvelr">{v.name}</p>
                    <p className="text-white/50 text-xs font-lato">{v.role}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Download School Tour Report */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col sm:flex-row gap-5 items-start sm:items-center">
              <div className="text-3xl shrink-0">📄</div>
              <div className="flex-1">
                <h4 className="font-bold font-nouvelr text-[#00294B] mb-1">School Tour Report 2024</h4>
                <p className="text-gray-500 font-lato text-sm leading-relaxed">Full report on the 2024 Virtually Safe School Tour — 437 schools, 22 states, 70,000+ students, volunteer feedback and programme outcomes.</p>
              </div>
              <a
                href="/school-tour-report.pdf"
                download
                className="shrink-0 flex items-center gap-2 bg-[#00294B] hover:bg-[#003a69] text-white text-sm font-bold font-lato py-2.5 px-5 rounded-xl transition-colors whitespace-nowrap"
              >
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download PDF
              </a>
            </div>
          </div>

          {/* === COMPETITIONS === */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-amber-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full font-lato">Competitions</span>
              <div className="flex-1 h-px bg-gray-100" />
            </div>

            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold font-nouvelr text-[#00294B] mb-3">Competitions & Challenges</h2>
              <p className="text-gray-600 font-lato max-w-2xl leading-relaxed">
                Virtually Safe organises competitions to engage young minds in creative and critical thinking about online safety. Debate, perform, and create your way to recognition — while building skills that protect you and your peers online.
              </p>
            </div>

            <div className="space-y-8">
              {competitions.map((c) => (
                <div key={c.title} className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-4xl shrink-0">{c.icon}</span>
                    <div>
                      <div className="text-xs font-bold text-amber-700 uppercase tracking-wide font-lato mb-1">{c.theme}</div>
                      <h3 className="text-xl font-bold font-nouvelr text-[#00294B]">{c.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-600 font-lato text-sm leading-relaxed mb-4">{c.desc}</p>
                  <div>
                    <p className="font-bold font-nouvelr text-[#00294B] text-sm mb-2">Objectives:</p>
                    <ul className="space-y-1.5">
                      {c.objectives.map((o) => (
                        <li key={o} className="flex items-start gap-2 text-xs font-lato text-gray-600">
                          <span className="text-amber-500 font-bold mt-0.5">◆</span>
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-[#00294B] text-white rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold font-nouvelr mb-3">Partner With Us</h3>
            <p className="text-white/80 font-lato mb-6 max-w-lg mx-auto">
              Want to support our awareness campaigns, bring the school tour to your area, or register students for our next competition? Get in touch.
            </p>
            <Link href="/contact" className="bg-[#61CE70] text-[#00294B] px-8 py-3 rounded-lg font-bold font-lato hover:bg-[#4db85b] transition-colors inline-block">
              Contact Us
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
