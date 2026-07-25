import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = { title: "Parents" };

const tips = [
  {
    icon: "🔒",
    title: "Parental Controls",
    desc: "Set up effective controls across all devices, apps, and platforms your child uses — without relying on them alone.",
    color: "#61CE70",
    bg: "#F0FDF4",
  },
  {
    icon: "💬",
    title: "Open Conversations",
    desc: "Have regular, judgment-free conversations about your children's online experiences so they come to you first.",
    color: "#60A5FA",
    bg: "#EFF6FF",
  },
  {
    icon: "👀",
    title: "Monitor Thoughtfully",
    desc: "Stay aware of what your children are doing online while respecting their growing need for privacy and autonomy.",
    color: "#FBBF24",
    bg: "#FFFBEB",
  },
  {
    icon: "📚",
    title: "Build Digital Literacy",
    desc: "Help your children develop critical thinking skills so they can evaluate online information and recognise manipulation.",
    color: "#F472B6",
    bg: "#FDF2F8",
  },
  {
    icon: "🚨",
    title: "Spot Warning Signs",
    desc: "Learn to identify behavioural changes that may signal your child is experiencing online harm, exploitation, or addiction.",
    color: "#FB7185",
    bg: "#FFF1F2",
  },
  {
    icon: "🤝",
    title: "Be Their Safe Adult",
    desc: "Ensure your child knows they can always come to you with online concerns — without judgment or punishment.",
    color: "#A78BFA",
    bg: "#F5F3FF",
  },
];

const workshopHighlights = [
  { icon: "🎙️", text: "Expert-led sessions on digital parenting" },
  { icon: "📋", text: "Practical takeaway guides and toolkits" },
  { icon: "👥", text: "Peer learning and Q&A with other parents" },
  { icon: "📱", text: "Live demonstrations of parental control tools" },
  { icon: "🔗", text: "Connections to specialist support services" },
];

export default function ParentPage() {
  return (
    <>
      {/* ── 1. HERO ── */}
      <section className="relative min-h-[90vh] flex items-end overflow-hidden" aria-label="For Parents">
        <Image
          src="/Parentworkshop.jpg"
          alt="Parents learning about online safety"
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
          className="z-0"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#00294B] via-[#00294B]/55 to-[#00294B]/10" />
        <div className="relative z-20 w-full max-w-screen-xl mx-auto px-5 lg:px-12 pb-20 lg:pb-28">
          <span className="inline-flex items-center gap-2 bg-[#61CE70]/20 text-[#61CE70] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full font-inter mb-5">
            For Parents
          </span>
          <h1 className="font-jakarta text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6 max-w-4xl">
            Your child&apos;s digital world{" "}
            <span className="text-[#61CE70]">needs your attention.</span>
          </h1>
          <p className="font-inter text-white/65 text-xl leading-relaxed max-w-xl mb-10">
            You do not have to navigate digital parenting alone. We give you the knowledge, tools, and confidence to keep your children safe online.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/parent-resources"
              className="inline-flex items-center gap-2 bg-[#61CE70] text-[#00294B] font-bold font-inter px-8 py-4 rounded-full hover:bg-[#4db85b] transition-colors"
            >
              Get Parent Resources
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-inter px-8 py-4 rounded-full hover:border-white/70 hover:bg-white/5 transition-colors"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. INTRO SPLIT ── */}
      <section className="bg-white py-20 lg:py-28" aria-label="Introduction">
        <div className="max-w-screen-xl mx-auto px-5 lg:px-12 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <p className="font-inter text-xs font-semibold uppercase tracking-[0.18em] text-[#61CE70] mb-4">
              Digital Parenting
            </p>
            <h2 className="font-jakarta text-4xl lg:text-5xl font-bold text-[#00294B] leading-tight mb-6">
              Raising children in a connected world.
            </h2>
            <p className="font-inter text-gray-600 text-lg leading-relaxed mb-5">
              From social media to online gaming, the internet is a constant presence in your children&apos;s lives. That means new opportunities for growth — and new risks to be aware of. Virtually Safe equips you with everything you need to navigate this together.
            </p>
            <p className="font-inter text-gray-500 leading-relaxed mb-8">
              Our expert-curated resources, practical guidelines, and workshops give you the confidence to have the right conversations, spot the warning signs, and act when it matters most.
            </p>
            <Link
              href="/parent-resources"
              className="inline-flex items-center gap-2 bg-[#00294B] text-white font-bold font-inter px-7 py-3.5 rounded-full hover:bg-[#001F3A] transition-colors"
            >
              Access Parent Resources
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src="/virtuallysafeparent.JPG"
                alt="Parent and child discussing online safety"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-[#61CE70] rounded-2xl px-6 py-4 shadow-xl hidden lg:block">
              <p className="font-jakarta font-extrabold text-[#00294B] text-3xl leading-none">1 in 3</p>
              <p className="font-inter text-[#00294B]/70 text-xs mt-1">children experience<br />online harm</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. TIPS ── */}
      <section className="bg-[#F9F9F9] py-20 lg:py-28" aria-label="Digital parenting tips">
        <div className="max-w-screen-xl mx-auto px-5 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div>
              <p className="font-inter text-xs font-semibold uppercase tracking-[0.18em] text-[#61CE70] mb-3">
                Practical Guidance
              </p>
              <h2 className="font-jakarta text-4xl lg:text-5xl font-bold text-[#00294B] leading-tight max-w-lg">
                Six digital parenting essentials.
              </h2>
            </div>
            <p className="font-inter text-gray-400 text-sm max-w-xs lg:text-right">
              Evidence-based guidance from our team of online safety experts.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {tips.map((t) => (
              <div
                key={t.title}
                className="rounded-2xl p-7 border border-gray-100 hover:shadow-lg transition-all duration-300 group"
                style={{ backgroundColor: t.bg }}
              >
                <span
                  className="inline-flex items-center justify-center w-12 h-12 rounded-xl text-2xl mb-5"
                  style={{ backgroundColor: `${t.color}20` }}
                  aria-hidden="true"
                >
                  {t.icon}
                </span>
                <h3 className="font-jakarta font-bold text-[#00294B] text-lg mb-3">{t.title}</h3>
                <p className="font-inter text-gray-500 text-sm leading-relaxed">{t.desc}</p>
                <div
                  className="mt-5 h-0.5 w-6 rounded-full transition-all duration-300 group-hover:w-14"
                  style={{ backgroundColor: t.color }}
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. WORKSHOPS ── */}
      <section className="bg-[#00294B] py-20 lg:py-28" aria-label="Parents workshops">
        <div className="max-w-screen-xl mx-auto px-5 lg:px-12 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <p className="font-inter text-xs font-semibold uppercase tracking-[0.18em] text-[#61CE70] mb-4">
              Parent Workshops
            </p>
            <h2 className="font-jakarta text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Learn alongside other parents.
            </h2>
            <p className="font-inter text-white/65 text-lg leading-relaxed mb-8">
              Our Parents Workshops bring together caregivers for expert-led, practical sessions on keeping children safe in the digital world. Walk away with tools you can use immediately.
            </p>
            <ul className="space-y-4 mb-10">
              {workshopHighlights.map((h) => (
                <li key={h.text} className="flex items-center gap-3 font-inter text-white/70 text-sm">
                  <span className="text-lg shrink-0" aria-hidden="true">{h.icon}</span>
                  {h.text}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#61CE70] text-[#00294B] font-bold font-inter px-7 py-3.5 rounded-full hover:bg-[#4db85b] transition-colors"
            >
              Register for a Workshop
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Photo grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative rounded-2xl overflow-hidden aspect-square">
              <Image src="/Parentworkshop1.jpg" alt="Parents workshop session" fill sizes="25vw" style={{ objectFit: "cover" }} />
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-square mt-8">
              <Image src="/Parentworkshop2.jpg" alt="Parents learning together" fill sizes="25vw" style={{ objectFit: "cover" }} />
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-square col-span-2 h-52">
              <Image src="/Parentworkshop.jpg" alt="Parents workshop group" fill sizes="50vw" style={{ objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. CTA ── */}
      <section className="bg-[#61CE70] py-20 lg:py-24 px-5" aria-label="Parent resources">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-5xl mb-6" aria-hidden="true">👨‍👩‍👧</div>
          <h2 className="font-jakarta text-4xl lg:text-5xl font-extrabold text-[#00294B] leading-tight mb-5">
            Start protecting your child today.
          </h2>
          <p className="font-inter text-[#00294B]/70 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Free guides, age-appropriate resources, and expert advice — everything a digital parent needs, all in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/parent-resources"
              className="inline-flex items-center justify-center gap-2 bg-[#00294B] text-white font-bold font-inter px-8 py-4 rounded-full hover:bg-[#001F3A] transition-colors"
            >
              Browse Parent Resources
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#00294B]/30 text-[#00294B] font-inter px-8 py-4 rounded-full hover:border-[#00294B] transition-colors"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
