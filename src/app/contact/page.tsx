import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = { title: "Contact Us" };

const contactInfo = [
  { icon: "📍", label: "Address", value: "147/149 Akowonjo Road, Lagos, Nigeria" },
  { icon: "📧", label: "Email", value: "info@teenscancode.com.ng" },
  { icon: "🐦", label: "X / Twitter", value: "@Virtuallysafeng" },
  { icon: "📸", label: "Instagram", value: "@virtuallysafe" },
];

const socials = [
  { label: "X / Twitter", href: "https://x.com/Virtuallysafeng", icon: "𝕏" },
  { label: "Instagram", href: "https://www.instagram.com/virtuallysafe", icon: "📸" },
  { label: "Facebook", href: "https://facebook.com", icon: "f" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "in" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        tag="Contact Us"
        title="Let's Talk Everything"
        highlight="Online Safety"
        subtitle="Do you have a specific question about any of our programs, or for partnership, or sponsorships. Reach out and we'll get back to you as soon as possible."
        bgFrom="from-blue-900"
        bgTo="to-indigo-950"
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold font-nouvelr text-[#00294B] mb-6">Get in Touch</h2>
              <div className="space-y-5 mb-8">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex gap-4 items-start">
                    <div className="text-2xl">{item.icon}</div>
                    <div>
                      <div className="font-bold font-nouvelr text-[#00294B] text-sm mb-0.5">{item.label}</div>
                      <div className="text-gray-600 font-lato text-sm">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6">
                <h3 className="font-bold font-nouvelr text-[#00294B] mb-3">Follow Us</h3>
                <div className="flex gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={s.label}
                      className="w-10 h-10 bg-[#00294B] text-white rounded-full flex items-center justify-center text-sm font-bold hover:bg-[#61CE70] hover:text-[#00294B] transition-colors"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold font-nouvelr text-[#00294B] mb-6">Send a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
