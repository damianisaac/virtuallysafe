import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        tag="Legal"
        title="Privacy"
        highlight="Policy"
        subtitle="How we collect, use, and protect your personal information."
      />
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 prose prose-blue font-lato">
          <p className="text-gray-600">Last updated: January 2025</p>
          <p className="text-gray-700">
            Virtually Safe is committed to protecting your privacy. This policy explains how we handle personal data collected through our website and programs.
          </p>
          <h2 className="font-nouvelr text-[#00294B]">Information We Collect</h2>
          <p className="text-gray-700">We may collect your name, email address, and contact details when you use our contact form, subscribe to our newsletter, or apply to our programs.</p>
          <h2 className="font-nouvelr text-[#00294B]">How We Use Your Data</h2>
          <p className="text-gray-700">We use your data to respond to enquiries, send newsletters (with your consent), and deliver program services. We do not sell your data to third parties.</p>
          <h2 className="font-nouvelr text-[#00294B]">Contact</h2>
          <p className="text-gray-700">For privacy-related enquiries, contact us at info@virtuallysafe.org.</p>
        </div>
      </section>
    </>
  );
}
