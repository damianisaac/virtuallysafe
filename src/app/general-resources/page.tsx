"use client";
import { useState } from "react";
import LessonCard from "@/components/resources/LessonCard";
import QuizCard from "@/components/resources/QuizCard";
import ChecklistCard from "@/components/resources/ChecklistCard";

const CATEGORIES = [
  { id: "basics", label: "Safety Basics", icon: "🛡️", color: "#00294B" },
  { id: "passwords", label: "Passwords & Privacy", icon: "🔐", color: "#8B5CF6" },
  { id: "scams", label: "Scams & Phishing", icon: "🎣", color: "#FB7185" },
  { id: "social", label: "Social Media", icon: "📱", color: "#60A5FA" },
  { id: "mental", label: "Mental Health Online", icon: "🧠", color: "#61CE70" },
  { id: "rights", label: "Laws & Your Rights", icon: "⚖️", color: "#FBBF24" },
];

const CONTENT: Record<string, React.ReactNode> = {
  basics: (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <LessonCard
        icon="🌐"
        title="Your Digital Life — The Basics"
        summary="A few habits separate people who stay safe online from those who don't. These are the fundamentals."
        tips={[
          "Use strong, unique passwords for every account",
          "Enable two-factor authentication (2FA) everywhere it's offered",
          "Keep your devices and apps updated — updates patch security holes",
          "Think before you click: unsolicited links are the #1 entry point for scams",
          "If it sounds too good to be true online, it is",
        ]}
        tag="Essential"
        accent="#00294B"
      />
      <LessonCard
        icon="🔄"
        title="Keep Everything Updated"
        summary="Software updates aren't just new features — they patch security vulnerabilities that criminals actively exploit."
        tips={[
          "Enable automatic updates on your phone and computer",
          "Update apps regularly — outdated apps have known security flaws",
          "Use a supported operating system — Windows 7, for example, no longer receives security updates",
          "Update your router's firmware — most people never do this",
          "Don't ignore update prompts — they exist for good reason",
        ]}
        tag="Security"
        accent="#00294B"
      />
      <QuizCard
        icon="📲"
        question="You receive a message saying 'Urgent: Update your banking app now' with a link. You should:"
        options={[
          { text: "Click the link — your bank needs you to update", correct: false },
          { text: "Open the App Store or Google Play and update from there", correct: true },
          { text: "Reply to the message asking for more info", correct: false },
          { text: "Forward it to friends so they can update too", correct: false },
        ]}
        explanation="Always update apps from official app stores, not links in messages. This is a classic phishing technique — the link would take you to a fake site designed to steal your banking credentials."
      />
      <ChecklistCard
        icon="🛡️"
        title="Essential Online Safety Checklist"
        subtitle="One-time setup that protects you for years"
        items={[
          "Enabled 2FA on email account",
          "Enabled 2FA on banking/financial apps",
          "Enabled 2FA on social media accounts",
          "All devices set to auto-update",
          "Router firmware is up to date",
          "Using a unique password for each major account",
        ]}
        accent="#00294B"
        tag="Checklist"
      />
      <LessonCard
        icon="📶"
        title="Public Wi-Fi Safety"
        summary="Free Wi-Fi in cafes, airports, and hotels is convenient — and one of the most common ways people get hacked."
        tips={[
          "Never access online banking or make purchases on public Wi-Fi",
          "Criminals create hotspots named 'Free Airport Wi-Fi' to intercept your traffic",
          "Use your phone's mobile data for sensitive activity",
          "A VPN (Virtual Private Network) encrypts your public Wi-Fi usage — consider one for travel",
          "Always verify the official network name with staff before connecting",
        ]}
        tag="Wi-Fi"
        accent="#00294B"
      />
      <QuizCard
        icon="☕"
        question="You're in a cafe and see two Wi-Fi networks: 'CafeConnect' and 'Free_Cafe_WiFi'. Which is safer?"
        options={[
          { text: "Free_Cafe_WiFi — it says 'free'", correct: false },
          { text: "You can't tell — ask staff which network is theirs", correct: true },
          { text: "CafeConnect — it sounds more official", correct: false },
          { text: "Both are equally safe", correct: false },
        ]}
        explanation="Criminals create fake hotspots with convincing names to intercept your traffic. Always verify the official network with staff — and avoid sensitive activity on any public network."
      />
    </div>
  ),
  passwords: (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <LessonCard
        icon="🔑"
        title="The Anatomy of a Strong Password"
        summary="Most people use passwords that can be cracked in seconds. Here's how to create ones that can't."
        tips={[
          "Length beats complexity: a 20-character passphrase is stronger than 8 random characters",
          "Use 3+ random unrelated words: 'BananaTrampolineSaturn!' is extremely strong",
          "Include at least one number and one symbol",
          "Never use personal information: names, birthdays, anniversaries",
          "Test your password at howsecureismypassword.net (it never sends the password)",
        ]}
        tag="Passwords"
        accent="#8B5CF6"
      />
      <LessonCard
        icon="🗂️"
        title="Password Managers — The Smart Way"
        summary="You should have a unique password for every account. Nobody can remember 50+ passwords. Password managers solve this."
        tips={[
          "A password manager stores and fills in all your passwords — you only need one master password",
          "Recommended: Bitwarden (free, open source), 1Password, or Dashlane",
          "Your browser's built-in password manager is a reasonable option if you use one consistently",
          "The master password should be a long passphrase you genuinely remember",
          "Enable 2FA on the password manager itself",
        ]}
        tag="Tools"
        accent="#8B5CF6"
      />
      <QuizCard
        icon="🤔"
        question="You use the same strong password on 15 different websites. One of those sites gets hacked. What happens?"
        options={[
          { text: "Nothing — the password is strong, so it's safe", correct: false },
          { text: "Hackers gain access to all 15 accounts immediately", correct: true },
          { text: "Only the hacked site is at risk", correct: false },
          { text: "The password changes automatically when a site is hacked", correct: false },
        ]}
        explanation="This is called 'credential stuffing.' When one site is breached, hackers automatically try those credentials on every major site. Using unique passwords on each site stops this cold."
      />
      <LessonCard
        icon="🔏"
        title="Two-Factor Authentication (2FA) Explained"
        summary="2FA means even if someone gets your password, they still can't get in. It's the single biggest account security upgrade you can make."
        tips={[
          "Most common: a code sent to your phone via SMS (good), or an authenticator app (better)",
          "Authenticator apps (Google Authenticator, Authy) are more secure than SMS codes",
          "Hardware keys (YubiKey) are the most secure — used for high-value accounts",
          "Security questions are NOT 2FA — they're weaker than a good password",
          "Enable 2FA: Settings → Security → Two-Factor Authentication on every platform",
        ]}
        tag="2FA"
        accent="#8B5CF6"
      />
      <ChecklistCard
        icon="🔐"
        title="Password & Privacy Audit"
        subtitle="30 minutes once a year keeps you secure"
        items={[
          "Set up or reviewed my password manager",
          "Changed passwords on any site I use the same password elsewhere",
          "Enabled 2FA on email account",
          "Enabled 2FA on banking app",
          "Enabled 2FA on social media",
          "Checked haveibeenpwned.com to see if my email has been in a breach",
        ]}
        accent="#8B5CF6"
        tag="Annual Audit"
      />
      <QuizCard
        icon="📲"
        question="You receive a 2FA code to your phone that you didn't request. This means:"
        options={[
          { text: "It was probably sent by mistake", correct: false },
          { text: "Someone has your password and is trying to log into your account", correct: true },
          { text: "Your phone has a bug", correct: false },
          { text: "The platform is testing its system", correct: false },
        ]}
        explanation="An unsolicited 2FA code means someone has your password and is attempting to log in. Change your password immediately and enable a stronger 2FA method."
      />
    </div>
  ),
  scams: (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <LessonCard
        icon="🎣"
        title="Phishing — How It Works"
        summary="Phishing is the practice of tricking you into handing over your details by pretending to be someone you trust."
        tips={[
          "Email phishing: an email that looks like it's from your bank, HMRC, or Amazon — but isn't",
          "SMS phishing (smishing): a text message with a link, often claiming a missed delivery or account issue",
          "Voice phishing (vishing): a phone call claiming to be from your bank or a government agency",
          "Spear phishing: highly targeted attacks using your name, employer, or recent activity",
          "The goal is always the same: steal your credentials, payment details, or personal information",
        ]}
        tag="Awareness"
        accent="#FB7185"
      />
      <LessonCard
        icon="🔎"
        title="How to Spot a Phishing Message"
        summary="Once you know what to look for, phishing attempts become obvious. Train your eye."
        tips={[
          "Sender address: looks similar to real address but has subtle differences (amaz0n.com vs amazon.com)",
          "Urgent language: 'Your account will be closed in 24 hours' — pressure tactics",
          "Generic greetings: 'Dear Customer' instead of your name",
          "Hover over links before clicking: the real URL often reveals it's fake",
          "Attachments you didn't expect: never open .exe, .zip, or Office files from unknown senders",
        ]}
        tag="Detection"
        accent="#FB7185"
      />
      <QuizCard
        icon="📧"
        question="You receive an email: 'Dear Customer, your Amazon account has been suspended. Click here to verify.' Red flags include:"
        options={[
          { text: "Nothing — Amazon sends emails like this all the time", correct: false },
          { text: "Generic greeting, urgency, and a suspicious link", correct: true },
          { text: "Only the link is suspicious", correct: false },
          { text: "Only the generic greeting is suspicious", correct: false },
        ]}
        explanation="All three are red flags. Legitimate companies use your name, don't create artificial urgency, and their links match their real domain. When in doubt, go directly to the app or website."
      />
      <LessonCard
        icon="💸"
        title="Common Online Scams to Know"
        summary="Scam types evolve but the underlying tricks stay the same."
        tips={[
          "Romance scams: building a relationship over months to eventually request money",
          "Investment scams: 'guaranteed returns' on cryptocurrency or forex — always a scam",
          "Job scams: 'Work from home, earn £500/day' — requires upfront payment or personal details",
          "Delivery scams: fake 'missed delivery' texts with links to pay a redelivery fee",
          "Tech support scams: pop-up saying your PC is infected, call this number",
          "Advance fee scams ('419'): you've won/inherited money — pay a fee to release it",
        ]}
        tag="Scam Types"
        accent="#FB7185"
      />
      <ChecklistCard
        icon="🎣"
        title="Before You Click Checklist"
        subtitle="For any message containing a link"
        items={[
          "I know the sender personally or can verify their identity",
          "Hovered over the link — the URL matches the organisation claimed",
          "No artificial urgency or fear tactics in the message",
          "I wasn't expecting this message (unexpected = higher risk)",
          "If in doubt, I'll go directly to the website or app instead",
          "I've not provided any personal details yet",
        ]}
        accent="#FB7185"
        tag="Checklist"
      />
      <QuizCard
        icon="📞"
        question="You get a call: 'This is HMRC. You have unpaid tax. Pay now to avoid arrest.' You should:"
        options={[
          { text: "Pay immediately to avoid arrest", correct: false },
          { text: "Ask them to call back later so you can get the money", correct: false },
          { text: "Hang up — HMRC never demands immediate payment over the phone like this", correct: true },
          { text: "Give them your bank details to sort it out", correct: false },
        ]}
        explanation="HMRC never demands immediate payment or threatens arrest over the phone. This is a classic vishing (voice phishing) scam. Hang up and report to Action Fraud (UK) or your country's equivalent."
      />
    </div>
  ),
  social: (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <LessonCard
        icon="🔏"
        title="Social Media Privacy Fundamentals"
        summary="Your social media accounts are a goldmine of personal information. Control who can see what."
        tips={[
          "Review privacy settings on all platforms — they reset after updates",
          "Limit public posts: most people don't need a public profile",
          "Turn off location tagging — it reveals your home, work, and routine",
          "Be selective about what's in your 'bio' — phone number, location, birthday are all risky",
          "Audit your friends/connections list annually — remove people you don't know",
        ]}
        tag="Privacy"
        accent="#60A5FA"
      />
      <LessonCard
        icon="🧩"
        title="What Facebook/Instagram Actually Know About You"
        summary="Social media platforms collect more data than most people realise. Here's what they're gathering."
        tips={[
          "Every post, like, comment, and share is logged — indefinitely",
          "Your location is tracked even if you don't share posts with location tags",
          "Facebook pixel follows you across the web, even after you log out",
          "Your contacts (if you uploaded them) are connected to your profile",
          "Data can be used for ad targeting, sold to third parties, and shared in data breaches",
          "Use 'Download Your Data' on Instagram/Facebook to see what they hold on you",
        ]}
        tag="Data"
        accent="#60A5FA"
      />
      <QuizCard
        icon="🔍"
        question="You download your Instagram data and find it includes your location data from the last 3 years. This data was collected because:"
        options={[
          { text: "You turned on location sharing for your posts", correct: false },
          { text: "Instagram collects location data from your device even without explicit location tagging", correct: true },
          { text: "Someone reported you", correct: false },
          { text: "This shouldn't be possible — it must be a mistake", correct: false },
        ]}
        explanation="Instagram (and other apps) request device location permissions and use them for ad targeting and 'improving experience' — regardless of whether you tag location in posts."
      />
      <LessonCard
        icon="💬"
        title="Managing Online Relationships Safely"
        summary="The internet makes it easy to connect — and easy to be deceived. Know the difference."
        tips={[
          "Verify online-only contacts before trusting them — a video call is a minimum",
          "People routinely lie about identity, age, profession, and intentions online",
          "Romance and friendship scams build trust over months before exploitation",
          "If someone you've only met online asks for money — refuse",
          "Genuine relationships don't require secrecy from people around you",
        ]}
        tag="Relationships"
        accent="#60A5FA"
      />
      <ChecklistCard
        icon="📱"
        title="Social Media Quarterly Audit"
        subtitle="Takes 15 minutes, keeps you protected"
        items={[
          "Reviewed privacy settings (they change after app updates)",
          "Checked my public profile — removed unnecessary personal info",
          "Reviewed followers/friends list — removed unknown accounts",
          "Turned off location services for social media apps",
          "Reviewed which third-party apps have access to my accounts",
          "Checked 'active sessions' — logged out of unrecognised devices",
        ]}
        accent="#60A5FA"
        tag="Quarterly Audit"
      />
      <QuizCard
        icon="❤️"
        question="Someone you met on Instagram 3 months ago — and have never video called — asks to borrow money urgently. You should:"
        options={[
          { text: "Help them — you've been talking for 3 months", correct: false },
          { text: "Send a small amount to test if they're genuine", correct: false },
          { text: "Refuse — this matches the pattern of a romance scam exactly", correct: true },
          { text: "Ask for their bank details to verify they exist", correct: false },
        ]}
        explanation="This is a textbook romance scam pattern: build trust over weeks or months, never video call (to hide their true identity), then request money with an urgent story. Do not send money."
      />
    </div>
  ),
  mental: (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <LessonCard
        icon="⚖️"
        title="Finding Your Digital Balance"
        summary="Technology isn't the enemy — unchecked use is. Find a balance that works for your real life."
        tips={[
          "Track your screen time honestly — most people underestimate it significantly",
          "Identify which apps and platforms make you feel better vs. worse",
          "One screen-free activity per day keeps perspective intact",
          "Digital devices in the bedroom disrupts sleep and mood — consider a charging station outside",
          "The goal is intentional use, not elimination",
        ]}
        tag="Balance"
        accent="#61CE70"
      />
      <LessonCard
        icon="📊"
        title="Social Media & Your Mental Health"
        summary="Social media platforms are engineered for engagement — understanding this protects you."
        tips={[
          "The algorithm shows content that provokes the strongest emotion — outrage spreads faster than joy",
          "Comparing your life to others' curated highlight reels consistently decreases wellbeing",
          "Passive scrolling is more harmful than active engagement (commenting, creating)",
          "Taking a week off social media is associated with measurable mental health improvements",
          "Notice: how do you feel AFTER using each platform? That data is yours to act on",
        ]}
        tag="Mental Health"
        accent="#61CE70"
      />
      <QuizCard
        icon="😔"
        question="Research on social media and mental health shows:"
        options={[
          { text: "Social media always improves social connection", correct: false },
          { text: "Passive scrolling is linked to lower well-being; active use is more neutral", correct: true },
          { text: "Social media has no effect on mental health", correct: false },
          { text: "Only teenagers are affected", correct: false },
        ]}
        explanation="Studies consistently distinguish between passive scrolling (negatively linked to well-being) and active engagement like commenting or creating content (more neutral or positive)."
      />
      <LessonCard
        icon="😰"
        title="Online Harm & Emotional Impact"
        summary="Being targeted online — whether by bullies, scammers, or abusers — has real psychological impact. It's legitimate harm."
        tips={[
          "Online harassment causes anxiety, depression, and PTSD symptoms — as real as offline harm",
          "If you're affected, speak to someone — a friend, family member, or professional",
          "You don't need to prove you were harmed to get support",
          "Reporting what happened is important — both for you and to prevent it happening to others",
          "Virtually Safe's reporting tool provides anonymous support and guidance",
        ]}
        tag="Wellbeing"
        accent="#61CE70"
      />
      <ChecklistCard
        icon="🧠"
        title="Digital Well-being Weekly Check"
        subtitle="A 5-minute Monday reflection"
        items={[
          "Checked my screen time this week — was it intentional?",
          "Noticed at least one app that made me feel worse and used it less",
          "Had at least one meaningful offline connection this week",
          "Slept without my phone in the bedroom at least once",
          "Created or engaged with content rather than just scrolling",
          "Took at least one full offline hour for something I enjoy",
        ]}
        accent="#61CE70"
        tag="Weekly"
      />
      <QuizCard
        icon="🆘"
        question="You're experiencing anxiety and low mood linked to your social media use. The most effective first step is:"
        options={[
          { text: "Delete all your accounts immediately", correct: false },
          { text: "Track which apps affect your mood and reduce time on the worst ones", correct: true },
          { text: "Post about how social media is making you feel", correct: false },
          { text: "Switch to a different platform", correct: false },
        ]}
        explanation="Gradual, informed reduction based on personal data (how does each platform actually make you feel?) is more sustainable than drastic action. If mood remains low, speak to your GP."
      />
    </div>
  ),
  rights: (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <LessonCard
        icon="📜"
        title="Your Online Rights"
        summary="Your rights in the digital world are protected by law — but most people don't know what they are."
        tips={[
          "Right to privacy: your personal data cannot be collected or processed without your consent",
          "Right to be forgotten (GDPR): you can request that companies delete your personal data",
          "Right to access: you can request a copy of all data a company holds on you",
          "Right to correction: you can demand inaccurate personal data is corrected",
          "In Nigeria: the Nigeria Data Protection Act (2023) provides similar protections",
        ]}
        tag="Rights"
        accent="#FBBF24"
      />
      <LessonCard
        icon="⚖️"
        title="Online Behaviour & the Law"
        summary="Many people don't realise that common online behaviours carry legal consequences."
        tips={[
          "Cyberbullying and online harassment are criminal offences in most countries",
          "Sharing intimate images without consent is illegal (image-based abuse) in the UK and growing globally",
          "Accessing someone's account without permission is illegal under computer misuse laws",
          "Pirating software, music, or films is illegal — regardless of how common it seems",
          "Creating fake profiles to deceive is illegal in many jurisdictions",
        ]}
        tag="Law"
        accent="#FBBF24"
      />
      <QuizCard
        icon="📸"
        question="Your ex-partner shares an intimate photo of you online without your consent. This is:"
        options={[
          { text: "Unfortunate but not illegal", correct: false },
          { text: "A crime in the UK and many countries (image-based abuse)", correct: true },
          { text: "Only illegal if you're under 18", correct: false },
          { text: "Only a crime if the photo was taken without your knowledge", correct: false },
        ]}
        explanation="Sharing intimate images without consent is illegal in the UK under the Online Safety Act and Criminal Justice Act. The consent to create an image does not imply consent to share it."
      />
      <LessonCard
        icon="🛑"
        title="How to Report Illegal Online Content"
        summary="Knowing where to report online crimes gets action faster and can protect others."
        tips={[
          "UK: Action Fraud (actionfraud.police.uk) for online fraud and cybercrime",
          "UK: CEOP (ceop.police.uk) for sexual exploitation of children",
          "UK: IWF (iwf.org.uk) for child sexual abuse images",
          "UK: Report Harmful Content (reportharmfulcontent.com) for general harmful content",
          "Nigeria: NITDA Cybercrime Unit and the police cybercrimes desk",
          "Always report to the platform first — they have legal obligations to act",
        ]}
        tag="Reporting"
        accent="#FBBF24"
      />
      <ChecklistCard
        icon="⚖️"
        title="Know Your Digital Rights"
        subtitle="Understanding that protects you"
        items={[
          "I know I can request my data from any company (Subject Access Request)",
          "I know sharing someone's intimate images without consent is illegal",
          "I know online harassment can be reported to the police, not just platforms",
          "I know how to report online fraud (Action Fraud / national equivalent)",
          "I know I have the right to have inaccurate data about me corrected",
          "I know who Virtually Safe is and how to use our anonymous reporting tool",
        ]}
        accent="#FBBF24"
        tag="Awareness"
      />
      <QuizCard
        icon="🕵️"
        question="A company emails you to say your personal data was accessed in a breach. Under GDPR/UK law, they must notify you within:"
        options={[
          { text: "30 days", correct: false },
          { text: "72 hours of discovering the breach (to regulators) and without undue delay to individuals", correct: true },
          { text: "They have no legal obligation to tell you", correct: false },
          { text: "1 year", correct: false },
        ]}
        explanation="Under GDPR and the UK Data Protection Act, companies must notify the ICO (Information Commissioner's Office) within 72 hours of a breach, and affected individuals 'without undue delay' if the risk is high."
      />
    </div>
  ),
};

export default function GeneralResourcesPage() {
  const [active, setActive] = useState("basics");
  const cat = CATEGORIES.find((c) => c.id === active)!;

  return (
    <>
      {/* Hero */}
      <section className="bg-[#00294B] pt-28 pb-16 px-5">
        <div className="max-w-screen-xl mx-auto">
          <span className="inline-flex items-center gap-2 bg-[#61CE70]/20 text-[#61CE70] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full font-inter mb-5">
            General Resources
          </span>
          <h1 className="font-jakarta text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 max-w-3xl">
            Everyone&apos;s Guide to Staying Safe Online
          </h1>
          <p className="font-inter text-white/60 text-lg max-w-xl">
            From passwords and privacy to scams, social media, and your legal rights — bite-sized guidance for anyone navigating the internet.
          </p>
        </div>
      </section>

      {/* Category Nav */}
      <section className="bg-white border-b border-gray-100 sticky top-0 z-30">
        <div className="max-w-screen-xl mx-auto px-5 overflow-x-auto">
          <div className="flex gap-2 py-3 min-w-max">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold font-inter whitespace-nowrap transition-all duration-200 ${
                  active === c.id ? "text-white shadow-md" : "bg-gray-50 text-gray-500 hover:bg-gray-100"
                }`}
                style={active === c.id ? { backgroundColor: c.color } : {}}
              >
                <span>{c.icon}</span>
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#F9F9F9] min-h-screen py-10 px-5">
        <div className="max-w-screen-xl mx-auto">
          <div className="mb-8 flex items-center gap-3">
            <span className="text-3xl">{cat.icon}</span>
            <div>
              <h2 className="font-jakarta font-bold text-[#00294B] text-2xl">{cat.label}</h2>
              <p className="font-inter text-gray-400 text-sm">Pick a card to explore</p>
            </div>
          </div>
          {CONTENT[active]}
        </div>
      </section>
    </>
  );
}
