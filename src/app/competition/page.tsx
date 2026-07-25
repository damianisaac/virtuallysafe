import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Competitions" };

const competitions = [
  { icon: "🎤", title: "Debate Competition", desc: "Students debate critical online safety topics, developing critical thinking and public speaking skills." },
  { icon: "🎬", title: "Skit Competition", desc: "Creative skit competitions where students dramatise online safety scenarios and solutions." },
  { icon: "🎨", title: "Art Challenge", desc: "Visual art submissions exploring themes of internet safety, digital well-being, and online rights." },
];

export default function CompetitionPage() {
  return (
    <>
      <PageHero
        tag="Programs"
        title="Competitions &"
        highlight="Challenges"
        subtitle="Virtually Safe organises competitions to engage young minds in creative and critical thinking about online safety. Debate, perform, and create your way to recognition."
        bgFrom="from-yellow-900"
        bgTo="to-amber-950"
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold font-nouvelr text-[#00294B] mb-4">Our Competitions</h2>
            <p className="text-gray-600 font-lato max-w-xl mx-auto">
              Virtually Safe organises competitions to engage young minds, including Debate, Skit Competition, and Art Challenge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
            {competitions.map((c) => (
              <div key={c.title} className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-8 text-center">
                <div className="text-5xl mb-4">{c.icon}</div>
                <h3 className="text-xl font-bold font-nouvelr text-[#00294B] mb-3">{c.title}</h3>
                <p className="text-gray-600 font-lato text-sm">{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#00294B] text-white rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold font-nouvelr mb-3">Participate in the Next Competition</h3>
            <p className="text-white/80 font-lato mb-6 max-w-lg mx-auto">
              Stay updated on upcoming competitions and be the first to register.
            </p>
            <Link href="/contact" className="bg-[#61CE70] text-[#00294B] px-8 py-3 rounded-lg font-bold font-lato hover:bg-[#4db85b] transition-colors inline-block">
              Stay Updated
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
