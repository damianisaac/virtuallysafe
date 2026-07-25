import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "School Tour" };

const activities = [
  { icon: "🎭", title: "Interactive Presentations", desc: "Engaging, age-appropriate presentations on key online safety topics delivered by trained facilitators." },
  { icon: "🎮", title: "Gamified Learning", desc: "Students play the Bambi Online Safety Board Game, learning safety concepts through play." },
  { icon: "💬", title: "Q&A Sessions", desc: "Open Q&A sessions where students can ask questions about their own online experiences." },
  { icon: "📦", title: "Resource Distribution", desc: "Students and teachers receive free online safety resource packs to take home." },
];

export default function SchoolTourPage() {
  return (
    <>
      <PageHero
        tag="Programs"
        title="Virtually Safe"
        highlight="School Tour"
        subtitle="A nationwide initiative designed to educate and empower young people with the knowledge and tools they need to navigate the digital world safely."
        bgFrom="from-sky-900"
        bgTo="to-blue-950"
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">

          {/* About */}
          <div className="mb-14">
            <h2 className="text-2xl md:text-3xl font-bold font-nouvelr text-[#00294B] mb-4">About the School Tour</h2>
            <p className="text-gray-600 font-lato leading-relaxed mb-4">
              The Virtually Safe School Tour is a nationwide initiative designed to educate and empower young people with the knowledge and tools they need to navigate the digital world safely. Our team of trained facilitators travel to secondary schools across Nigeria, delivering interactive sessions that bring online safety to life.
            </p>
            <p className="text-gray-600 font-lato leading-relaxed">
              The tour combines education, entertainment, and engagement to ensure that online safety messages resonate with young people in a meaningful way.
            </p>
          </div>

          {/* What Happens */}
          <div className="mb-14">
            <h3 className="text-xl font-bold font-nouvelr text-[#00294B] mb-6">What Happens During the School Tour?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {activities.map((a) => (
                <div key={a.title} className="flex gap-4 bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl p-6">
                  <div className="text-3xl">{a.icon}</div>
                  <div>
                    <h4 className="font-bold font-nouvelr text-[#00294B] mb-1">{a.title}</h4>
                    <p className="text-gray-600 text-sm font-lato">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Invite */}
          <div className="bg-[#00294B] text-white rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold font-nouvelr mb-3">Invite Us to Your School</h3>
            <p className="text-white/80 font-lato mb-6 max-w-lg mx-auto">
              Is your school interested in hosting a Virtually Safe School Tour session? Get in touch with us to arrange a visit.
            </p>
            <Link href="/contact" className="bg-[#61CE70] text-[#00294B] px-8 py-3 rounded-lg font-bold font-lato hover:bg-[#4db85b] transition-colors inline-block">
              Request a Visit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
