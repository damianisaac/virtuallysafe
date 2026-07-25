import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Research" };

const findings = [
  {
    img: "https://res.cloudinary.com/karotcloud/image/upload/v1740537066/Frame_1321315390_jkayjk.png",
    text: "Young people agree that using the internet comes with significant risks.",
  },
  {
    img: "https://res.cloudinary.com/karotcloud/image/upload/v1740536967/Frame_1321315390_x42xvq.png",
    text: "Many have experienced negative feelings following an online interaction.",
  },
  {
    img: "https://res.cloudinary.com/karotcloud/image/upload/v1740536967/Frame_1321315390-1_weskx0.png",
    text: "Few felt able to report issues to a trusted adult or their parents.",
  },
  {
    img: "https://res.cloudinary.com/karotcloud/image/upload/v1740536967/Frame_1321315390-2_yvb30z.png",
    text: "Some young people have parents and teachers as friends on their social media pages.",
  },
  {
    img: "https://res.cloudinary.com/karotcloud/image/upload/v1740536967/Frame_1321315391_t1nzwq.png",
    text: "Many would prefer not to have these figures on their social media profiles.",
  },
  {
    img: "https://res.cloudinary.com/karotcloud/image/upload/v1740537265/Group_3_t27idf.png",
    text: "Students actively use social media apps.",
  },
  {
    img: "https://res.cloudinary.com/karotcloud/image/upload/v1740537266/Group_3-1_g5gkpv.png",
    text: "Many students have been exposed to online pornography.",
  },
  {
    img: "https://res.cloudinary.com/karotcloud/image/upload/v1740537266/Group_3-2_eeceeh.png",
    text: "Some students have engaged in underage betting.",
  },
];

export default function ResearchPage() {
  return (
    <>
      <PageHero
        tag="Research & Data"
        title="Research &"
        highlight="Data-Driven Insights"
        subtitle="We conduct localized research, surveys, and evidence-driven studies to understand and address the online safety challenges facing young Nigerians."
        bgFrom="from-slate-900"
        bgTo="to-blue-950"
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">

          {/* About research */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-nouvelr text-[#00294B] mb-4">
                Evaluating Young People&apos;s Online Experience In Nigeria
              </h2>
              <p className="text-gray-600 font-lato leading-relaxed mb-4">
                Virtually Safe conducts localised research, surveys, and evidence-driven studies to build a clear picture of the digital safety landscape for young Nigerians. Our research informs our programmes, advocacy, and policy recommendations.
              </p>
              <p className="text-gray-600 font-lato leading-relaxed">
                We understand that an education-based approach alone will not be entirely effective; we need expert knowledge grounded in research to tackle online harms effectively.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "📊", title: "Surveys", desc: "Large-scale surveys of young people, parents, and educators" },
                { icon: "🔬", title: "Studies", desc: "Evidence-driven studies on online harms and interventions" },
                { icon: "📍", title: "Local Focus", desc: "Research grounded in the Nigerian context and experience" },
                { icon: "📢", title: "Policy Input", desc: "Findings shared with policymakers to drive change" },
              ].map((item) => (
                <div key={item.title} className="bg-slate-50 rounded-xl p-4">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="font-bold font-nouvelr text-[#00294B] text-sm mb-1">{item.title}</div>
                  <p className="text-gray-500 text-xs font-lato">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Findings */}
          <div className="mb-14">
            <h3 className="text-xl font-bold font-nouvelr text-[#00294B] mb-2 text-center">Understanding the Digital Risks Facing Our Youth</h3>
            <p className="text-gray-500 text-sm font-lato text-center mb-8">Key findings from our research on young people&apos;s online experiences in Nigeria</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {findings.map((f, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-xl p-4 text-center hover:shadow-md transition-shadow">
                  <Image
                    src={f.img}
                    alt={`Finding ${i + 1}`}
                    width={120}
                    height={120}
                    className="mx-auto mb-3 w-24 h-24 object-contain"
                  />
                  <p className="text-gray-700 text-xs font-lato leading-relaxed">{f.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Research Reports Download */}
          <div className="mb-14">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold font-nouvelr text-[#00294B] mb-3">Download Our Research Reports</h3>
              <p className="text-gray-500 font-lato max-w-xl mx-auto">
                Access the full reports from our surveys, vox pops, and school tour programmes — free to download.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  year: "2021",
                  type: "School Tour",
                  typeColor: "#00294B",
                  title: "Online Safety Report 2021",
                  desc: "Survey of 1,000+ students aged 10–19 across 6 geopolitical zones. 62% had no prior online safety knowledge before training; 88% gained clear understanding after.",
                  file: "/online-safety-report-2021.pdf",
                  icon: "📊",
                },
                {
                  year: "2024",
                  type: "School Tour",
                  typeColor: "#00294B",
                  title: "Online Safety Report 2024",
                  desc: "437 schools across 22 states. 85% agree the internet has risks; only 15% knew they could report online harms; 39% had betted online.",
                  file: "/online-safety-report-2024.pdf",
                  icon: "📈",
                },
                {
                  year: "2024",
                  type: "Vox Pop",
                  typeColor: "#8B5CF6",
                  title: "Vox Pop: CSAM Report 2024",
                  desc: "Adult vox pop on child sexual abuse material. 70% reported seeing explicit content on social media; 100% agree sharing child images for sexual purposes is exploitation.",
                  file: "/vox-pop-csam-2024.pdf",
                  icon: "🎙️",
                },
                {
                  year: "2024",
                  type: "Vox Pop",
                  typeColor: "#8B5CF6",
                  title: "Vox Pop: Online Betting 2024",
                  desc: "Adult and parent perspectives on online gambling. 80% encountered betting ads; 60% had betted; 55% of teachers aware of underage betting but unsure how to prevent it.",
                  file: "/vox-pop-betting-2024.pdf",
                  icon: "🎙️",
                },
                {
                  year: "2025",
                  type: "Vox Pop",
                  typeColor: "#F59E0B",
                  title: "Betting Vox Pop Report 2025",
                  desc: "Adults aged 40+ on gambling harms. 100% know about betting; 60% currently bet; 100% have lost money. Major effects: addiction (60%), bankruptcy (40%).",
                  file: "/betting-vox-pop-2025.pdf",
                  icon: "🎙️",
                },
                {
                  year: "2025",
                  type: "Vox Pop",
                  typeColor: "#F59E0B",
                  title: "CSAM Vox Pop Report 2025",
                  desc: "Community survey in Ikotun, Lagos. 75% active social media users; 60% regularly encounter inappropriate content; 100% have seen suspected CSAM.",
                  file: "/csam-vox-pop-2025.pdf",
                  icon: "🎙️",
                },
              ].map((report) => (
                <div key={report.file} className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col hover:shadow-lg transition-shadow duration-200">
                  {/* Header row */}
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-3xl" aria-hidden="true">{report.icon}</span>
                    <div className="flex gap-2 items-center flex-wrap justify-end">
                      <span
                        className="text-xs font-bold px-2.5 py-1 rounded-full font-lato uppercase tracking-wide"
                        style={{ color: report.typeColor, backgroundColor: `${report.typeColor}15` }}
                      >
                        {report.type}
                      </span>
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-gray-100 text-gray-500 font-lato">
                        {report.year}
                      </span>
                    </div>
                  </div>

                  <h4 className="font-nouvelr font-bold text-[#00294B] text-base mb-2 leading-snug">{report.title}</h4>
                  <p className="text-gray-500 text-sm font-lato leading-relaxed flex-1 mb-5">{report.desc}</p>

                  <a
                    href={report.file}
                    download
                    className="flex items-center justify-center gap-2 bg-[#00294B] hover:bg-[#003a69] text-white text-sm font-bold font-lato py-2.5 px-4 rounded-xl transition-colors duration-200"
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
            <h3 className="text-2xl font-bold font-nouvelr mb-3">Partner With Us on Research</h3>
            <p className="text-white/80 font-lato mb-6 max-w-lg mx-auto">
              Interested in collaborating on research initiatives or commissioning localised data? Get in touch with our team.
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
