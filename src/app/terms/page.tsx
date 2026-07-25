import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Terms of Use" };

export default function TermsPage() {
  return (
    <>
      <PageHero
        tag="Legal"
        title="Terms of"
        highlight="Use"
        subtitle="Please read these terms carefully before using our website."
      />
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 prose prose-blue font-lato">
          <p className="text-gray-600">Last updated: January 2025</p>
          <p className="text-gray-700">
            By accessing and using the Virtually Safe website, you accept and agree to be bound by these Terms of Use.
          </p>
          <h2 className="font-nouvelr text-[#00294B]">Use of Content</h2>
          <p className="text-gray-700">All content on this website is for informational purposes only. You may share our resources with attribution to Virtually Safe.</p>
          <h2 className="font-nouvelr text-[#00294B]">External Links</h2>
          <p className="text-gray-700">Our website may link to external sites. Virtually Safe is not responsible for the content or privacy practices of these sites.</p>
          <h2 className="font-nouvelr text-[#00294B]">Contact</h2>
          <p className="text-gray-700">For questions about these terms, contact us at info@virtuallysafe.org.</p>
        </div>
      </section>
    </>
  );
}
