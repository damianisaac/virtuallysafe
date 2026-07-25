import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Community Safety Champion (CSC)" };

export default function CSCPage() {
  return (
    <>
      <PageHero
        tag="Programs"
        title="Community Safety Champion"
        highlight="(CSC)"
        subtitle="Training community leaders and volunteers to become online safety advocates in their local communities across Nigeria."
        bgFrom="from-orange-900"
        bgTo="to-amber-950"
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold font-nouvelr text-[#00294B] mb-6">About the Program</h2>
          <p className="text-gray-600 font-lato leading-relaxed mb-6">
            The Community Safety Champion (CSC) programme equips community members with the knowledge and tools to promote online safety awareness at the grassroots level. CSCs work within their communities to educate families, young people, and local leaders about digital safety risks and best practices.
          </p>
          <p className="text-gray-600 font-lato leading-relaxed mb-10">
            Champions receive comprehensive training from Virtually Safe experts and become a vital link between our organisation and the communities we serve.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {[
              { icon: "🏘️", title: "Community-Based", desc: "Work within your own community to create lasting impact." },
              { icon: "📖", title: "Comprehensive Training", desc: "Receive in-depth training on online safety issues and how to address them." },
              { icon: "🌍", title: "National Network", desc: "Join a nationwide network of community safety champions." },
            ].map((item) => (
              <div key={item.title} className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold font-nouvelr text-[#00294B] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm font-lato">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold font-nouvelr text-[#00294B] mb-3">Become a Community Safety Champion</h3>
            <p className="text-gray-600 font-lato mb-6">
              If you&apos;re passionate about protecting your community from online harms, apply to become a CSC today.
            </p>
            <Link href="/contact" className="bg-[#00294B] text-white px-6 py-3 rounded-lg font-bold font-lato hover:bg-[#001F3A] transition-colors inline-block">
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
