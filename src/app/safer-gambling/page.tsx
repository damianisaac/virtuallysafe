import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Safer Gambling" };

const facts = [
  { stat: "9 years", label: "Gambling patterns can start as early as age 9" },
  { stat: "Early", label: "Early exposure increases likelihood of problems later in life" },
  { stat: "Addiction", label: "Gambling addiction causes depression and mental health issues" },
  { stat: "Social", label: "Peer influence is the leading driver of underage gambling" },
];

const goals = [
  "Minimise gambling-related harm like addictions and depression",
  "Educate young people about the risks of online gambling and betting",
  "Support communities affected by gambling-related harms",
  "Advocate for stronger regulations on gambling advertising targeting youth",
  "Provide resources for young people and families dealing with gambling issues",
];

export default function SaferGamblingPage() {
  return (
    <>
      <PageHero
        tag="Programs"
        title="Safer Gambling"
        highlight="Initiative"
        subtitle="Gambling should be a safe and enjoyable activity. Let's build a culture that promotes ethical play and ensures compliance, and keeps young people protected."
        bgFrom="from-red-900"
        bgTo="to-rose-950"
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">

          {/* Why it matters */}
          <div className="mb-14">
            <h2 className="text-2xl md:text-3xl font-bold font-nouvelr text-[#00294B] mb-4">
              Why Should We Care About Gambling Among Young People?
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {facts.map((f) => (
                <div key={f.stat} className="bg-red-50 rounded-xl p-5 text-center">
                  <div className="text-2xl font-bold font-nouvelr text-red-700 mb-1">{f.stat}</div>
                  <p className="text-gray-600 text-xs font-lato">{f.label}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-600 font-lato leading-relaxed">
              Gambling patterns start as early as 9 years and can be established before teenage years. Early exposure significantly increases the likelihood of gambling problems later in life. Virtually Safe is committed to addressing this growing public health issue affecting Nigerian youth.
            </p>
          </div>

          {/* Goals */}
          <div className="mb-14">
            <h3 className="text-xl font-bold font-nouvelr text-[#00294B] mb-6">Our Goals</h3>
            <ul className="space-y-3">
              {goals.map((g) => (
                <li key={g} className="flex items-start gap-3 font-lato text-gray-700">
                  <span className="text-[#61CE70] font-bold text-lg mt-0.5">✓</span>
                  {g}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#00294B] text-white rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold font-nouvelr mb-3">Get Involved</h3>
            <p className="text-white/80 font-lato mb-6 max-w-lg mx-auto">
              Partner with us to promote responsible gambling practices and protect young people from gambling-related harms.
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
