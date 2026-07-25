"use client";
import { useState } from "react";
import LessonCard from "@/components/resources/LessonCard";
import QuizCard from "@/components/resources/QuizCard";
import ChecklistCard from "@/components/resources/ChecklistCard";

const CATEGORIES = [
  { id: "setup", label: "Home Safety Setup", icon: "🏠", color: "#00294B" },
  { id: "talk", label: "Having the Talk", icon: "💬", color: "#61CE70" },
  { id: "signs", label: "Warning Signs", icon: "⚠️", color: "#FB7185" },
  { id: "social", label: "Social Media & Apps", icon: "📱", color: "#60A5FA" },
  { id: "gambling", label: "Gambling & Addiction", icon: "🎰", color: "#FBBF24" },
  { id: "incident", label: "When Things Go Wrong", icon: "🆘", color: "#8B5CF6" },
];

const CONTENT: Record<string, React.ReactNode> = {
  setup: (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <LessonCard
        icon="🔧"
        title="Setting Up Parental Controls"
        summary="Built-in tools on every device let you manage what your child can access — without constant supervision."
        tips={[
          "iOS: Screen Time (Settings → Screen Time) — set app limits, content restrictions, downtime",
          "Android: Google Family Link — manage apps, location, screen time from your phone",
          "Windows: Microsoft Family Safety — filter websites, track activity, set device limits",
          "YouTube Kids: a safer YouTube for under-13s with filtered content",
          "Router-level DNS filtering (e.g. CleanBrowsing or OpenDNS) blocks harmful sites across all devices on your network",
        ]}
        tag="Controls"
        accent="#00294B"
      />
      <ChecklistCard
        icon="🏠"
        title="Home Device Safety Audit"
        subtitle="Do this together with your child"
        items={[
          "Enabled Screen Time / Family Link on all phones",
          "Set age-appropriate content filters on streaming services",
          "Turned off in-app purchasing (or set authorisation)",
          "Reviewed which apps are installed on child's device",
          "Set up a family rule on phone-free times (meals, bedtime)",
          "Confirmed child knows what to do if something upsets them online",
        ]}
        accent="#00294B"
        tag="Checklist"
      />
      <LessonCard
        icon="📶"
        title="Router & Network Safety"
        summary="Securing your Wi-Fi router protects every device in the home — including smart TVs and gaming consoles."
        tips={[
          "Change the default router password (it's on the back of the router) to something strong",
          "Use DNS filtering (CleanBrowsing Family filter) to block adult content network-wide",
          "Enable 'Parental Controls' in your router's admin panel",
          "Create a separate Wi-Fi network for children's devices — easier to restrict",
          "Review connected devices list monthly to spot unauthorised access",
        ]}
        tag="Network"
        accent="#00294B"
      />
      <QuizCard
        icon="📱"
        question="Which offers the strongest protection for a 10-year-old's phone?"
        options={[
          { text: "Telling them not to visit bad websites", correct: false },
          { text: "Parental controls app + network-level DNS filtering", correct: true },
          { text: "Checking their phone once a week", correct: false },
          { text: "Setting a phone passcode they don't know", correct: false },
        ]}
        explanation="Layered protection is most effective: app-level controls restrict apps, network-level filtering blocks harmful sites, and open communication catches what tech misses."
      />
      <LessonCard
        icon="🔑"
        title="Managing Passwords for Your Family"
        summary="Children shouldn't have dozens of accounts with the same weak password. Here's how to manage it better."
        tips={[
          "Use a family password manager (1Password Families, Bitwarden) to store strong passwords",
          "Keep login details for your child's accounts so you can access them if needed",
          "Teach children to never share passwords — even with friends",
          "Review accounts your child has created — many apps target children",
          "Close accounts on platforms your child no longer uses",
        ]}
        tag="Security"
        accent="#00294B"
      />
      <QuizCard
        icon="🔒"
        question="Your 13-year-old wants their own YouTube account. What's the safest approach?"
        options={[
          { text: "Let them create one freely — they're old enough", correct: false },
          { text: "Say no entirely — no YouTube until 18", correct: false },
          { text: "Create an account together, link it to your Google Family account, enable Restricted Mode", correct: true },
          { text: "Let them use yours", correct: false },
        ]}
        explanation="Setting up accounts together gives you visibility and control while still respecting your child's growing independence. Linking to Family account lets you monitor usage."
      />
    </div>
  ),
  talk: (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <LessonCard
        icon="🗣️"
        title="Starting the Conversation"
        summary="You don't need to be a tech expert to talk to your child about online safety — you just need to listen."
        tips={[
          "Ask open questions: 'What apps do your friends use?' rather than 'Are you safe online?'",
          "Make it regular: brief check-ins weekly work better than one big 'talk'",
          "Start young — online safety should be part of life before problems arise",
          "Share your own experiences with online risks to build trust",
          "Make clear: if something bad happens online, you won't take their phone away as punishment",
        ]}
        tag="Communication"
        accent="#61CE70"
      />
      <LessonCard
        icon="👶"
        title="Age-Appropriate Conversations"
        summary="What to discuss and when — so it's never too early or too late."
        tips={[
          "Under 7: 'Some people online pretend to be nice to trick you — always tell me if someone asks for your name or photo'",
          "7–10: Explain private vs public information; introduce the idea of a 'digital footprint'",
          "11–13: Talk about social media pressure, sexting risks, and how to handle cyberbullying",
          "14–17: Discuss consent in digital spaces, sextortion, online relationships, gambling apps",
          "All ages: 'You can always come to me — you won't be in trouble'",
        ]}
        tag="By Age"
        accent="#61CE70"
      />
      <QuizCard
        icon="💬"
        question="Your child says 'Nothing happened online today.' What's the most effective response?"
        options={[
          { text: "Good — no news is good news.", correct: false },
          { text: "Check their phone to verify", correct: false },
          { text: "Ask a specific follow-up: 'What was the funniest thing you saw today?'", correct: true },
          { text: "Remind them about screen time rules", correct: false },
        ]}
        explanation="Specific, curious questions open genuine conversation. Closed questions close it down. Curiosity — not interrogation — builds the trust that matters when things go wrong."
      />
      <ChecklistCard
        icon="💬"
        title="Monthly Check-In Conversation Guide"
        subtitle="Pick 2-3 of these each month"
        items={[
          "Asked about their favourite apps this week",
          "Discussed any uncomfortable online experiences recently",
          "Reviewed their privacy settings together",
          "Talked about who their online friends are",
          "Reminded them they can always come to me without punishment",
          "Asked if they've seen anything that upset or confused them online",
        ]}
        accent="#61CE70"
        tag="Checklist"
      />
      <LessonCard
        icon="🤝"
        title="Creating a Family Agreement"
        summary="A family digital agreement — made together, not imposed — works far better than rules alone."
        tips={[
          "Involve your child in making the rules — they're more likely to follow them",
          "Cover: screen time limits, bedtime rules, which apps need parent approval, what to do if upset online",
          "Write it down and put it somewhere visible",
          "Review it every 6 months as your child's needs change",
          "Model the behaviour yourself — no phones at dinner applies to you too",
        ]}
        tag="Family Rules"
        accent="#61CE70"
      />
      <QuizCard
        icon="📜"
        question="You discover your 12-year-old has an Instagram account you didn't know about. The best first step is:"
        options={[
          { text: "Immediately delete the account", correct: false },
          { text: "Punish them severely so they don't do it again", correct: false },
          { text: "Have a calm, curious conversation — ask why they made it and what they use it for", correct: true },
          { text: "Ignore it — they'll grow out of it", correct: false },
        ]}
        explanation="Reacting calmly keeps the lines of communication open. Harsh punishment may make them hide things better next time. Understand the 'why' before deciding on next steps."
      />
    </div>
  ),
  signs: (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <LessonCard
        icon="🚩"
        title="Behavioural Warning Signs"
        summary="Changes in behaviour can signal your child is experiencing online harm. Early recognition matters."
        tips={[
          "Becoming secretive about their phone or closing apps when you approach",
          "Emotional upset (tearful, angry, withdrawn) during or after being online",
          "Unexplained gifts, money, or items",
          "Withdrawing from family and offline friends",
          "Losing interest in activities they previously enjoyed",
          "Sleep disruption and excessive tiredness",
        ]}
        tag="Awareness"
        accent="#FB7185"
      />
      <LessonCard
        icon="🔍"
        title="Signs of Online Grooming"
        summary="Groomers are patient and deliberate. Knowing how grooming works is your best defence."
        tips={[
          "A new online 'friend' who gives excessive praise, gifts, or attention",
          "Your child is secretive about who they're messaging",
          "The contact occurs on multiple platforms simultaneously",
          "They want to meet in person after a short online acquaintance",
          "Your child seems emotionally dependent on someone you've never met",
          "They're using new language or topics beyond their age",
        ]}
        tag="Grooming"
        accent="#FB7185"
      />
      <QuizCard
        icon="🚨"
        question="Your teenager receives expensive gifts from an online friend and becomes secretive about who it is. You should:"
        options={[
          { text: "Be grateful — they have a generous friend", correct: false },
          { text: "Ask once and leave it alone if they seem annoyed", correct: false },
          { text: "Raise your concerns calmly and contact the school or authorities if worried", correct: true },
          { text: "Check their messages secretly without telling them", correct: false },
        ]}
        explanation="Unexplained gifts plus secrecy are two major grooming red flags. A calm conversation first; involve school safeguarding or police if you have real concerns."
      />
      <LessonCard
        icon="😰"
        title="Signs of Cyberbullying"
        summary="Children often don't tell parents they're being bullied. These signs can help you spot it."
        tips={[
          "Visibly upset or angry after using their device",
          "Avoiding school or social activities",
          "Unexplained loss of friends or social withdrawal",
          "Reluctance to discuss their online activities",
          "Sleeping with their phone (checking for messages)",
          "Deleting apps or messaging platforms suddenly",
        ]}
        tag="Bullying"
        accent="#FB7185"
      />
      <ChecklistCard
        icon="⚠️"
        title="Monthly Child Well-being Check"
        subtitle="Observe and note changes over time"
        items={[
          "Child's mood seems stable and not excessively linked to phone use",
          "No unexplained gifts or money received",
          "School attendance and performance remain consistent",
          "Child still has offline friendships and interests",
          "No extreme secrecy about phone or computer use",
          "Sleep patterns are healthy — not sleeping with phone",
        ]}
        accent="#FB7185"
        tag="Checklist"
      />
      <QuizCard
        icon="😔"
        question="Your child stops doing hobbies they loved and becomes withdrawn after school. You suspect online bullying. First step:"
        options={[
          { text: "Ground them and take away their phone", correct: false },
          { text: "Contact the school immediately without talking to your child first", correct: false },
          { text: "Find a quiet moment and gently ask how things have been going", correct: true },
          { text: "Check their phone messages when they're asleep", correct: false },
        ]}
        explanation="A gentle, private conversation without accusation creates a safe space for disclosure. Going to the school first can feel like a betrayal to a child who hasn't told you yet."
      />
    </div>
  ),
  social: (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <LessonCard
        icon="📋"
        title="Platform Age Limits"
        summary="Most major social media platforms require users to be at least 13. But enforcement is often weak."
        tips={[
          "TikTok, Instagram, Snapchat, X (Twitter): minimum age 13",
          "WhatsApp: 16 in the UK and EU",
          "Children under 13 routinely access these platforms using false birthdates",
          "Younger teens (13–15) are most vulnerable to exploitation on these platforms",
          "Knowledge of your child's accounts — not a ban — is the most practical approach",
        ]}
        tag="Awareness"
        accent="#60A5FA"
      />
      <LessonCard
        icon="⚙️"
        title="Platform Safety Settings"
        summary="Every major platform has parent tools. Most parents don't know they exist."
        tips={[
          "TikTok Family Pairing: link your account to your child's; control screen time and DMs",
          "Instagram Supervision: see who they follow, time spent, and set daily limits",
          "Snapchat Family Centre: view who they're messaging (not content) and report concerns",
          "YouTube Supervised Mode: age-appropriate content recommendations",
          "Set all accounts to Private — review followers together",
        ]}
        tag="Settings"
        accent="#60A5FA"
      />
      <QuizCard
        icon="📱"
        question="TikTok allows children 13–15 to receive direct messages from strangers by default — True or False?"
        options={[
          { text: "True — that's the default setting", correct: false },
          { text: "False — under-16s can only receive DMs from friends", correct: true },
          { text: "True — TikTok has no age restrictions on DMs", correct: false },
          { text: "Only if the child sets their account to public", correct: false },
        ]}
        explanation="TikTok restricts DMs for under-16 accounts to Friends only by default. However, teens can change this, and age verification is easily bypassed — so checking settings matters."
      />
      <LessonCard
        icon="🎮"
        title="Gaming Apps & Hidden Social Features"
        summary="Fortnite, Roblox, Minecraft — they're not just games. They have full social networks inside."
        tips={[
          "Roblox has chat, virtual economies, and user-created content — some of which is inappropriate",
          "Fortnite's voice chat puts your child in conversation with strangers",
          "In-game gift systems are used by groomers to build trust with children",
          "Check if 'voice chat' is enabled — you can disable it on most platforms",
          "Roblox: go to account settings → Privacy → turn off 'Who can chat with me in app'",
        ]}
        tag="Gaming"
        accent="#60A5FA"
      />
      <ChecklistCard
        icon="📲"
        title="Social Media & App Safety Review"
        subtitle="Do this together every 3 months"
        items={[
          "Know which apps my child uses and have reviewed each one",
          "All accounts are set to Private",
          "Enabled Family Pairing / Supervision where available",
          "Reviewed who they follow — removed unknown accounts",
          "Turned off voice chat on gaming platforms",
          "Child knows to tell me if someone online makes them uncomfortable",
        ]}
        accent="#60A5FA"
        tag="Checklist"
      />
      <QuizCard
        icon="🎮"
        question="Your 10-year-old plays Roblox. A stranger gifts them virtual items and asks to be best friends. You should:"
        options={[
          { text: "Let it be — it's just a game", correct: false },
          { text: "Talk to your child about it and review the stranger's interaction history", correct: true },
          { text: "Ban Roblox immediately", correct: false },
          { text: "Accept the friendship — they seem kind", correct: false },
        ]}
        explanation="Gifting is a known grooming tactic, including in gaming contexts. Don't panic — but do use it as an opportunity to discuss online stranger danger and check account settings."
      />
    </div>
  ),
  gambling: (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <LessonCard
        icon="🎰"
        title="Online Gambling & Young People"
        summary="Online gambling is growing fast — and young people are being specifically targeted."
        tips={[
          "Age restriction is 18+ but many sites have weak verification",
          "Social casino games ('play for fun' slots) normalise gambling without real stakes — then redirect to paid versions",
          "Gambling apps disguise themselves as games or entertainment",
          "Sports betting ads are particularly heavy during live sports — talk to children about what they see",
          "Signs of gambling: hiding phone activity, asking for extra money, mood swings",
        ]}
        tag="Awareness"
        accent="#FBBF24"
      />
      <LessonCard
        icon="🎮"
        title="Loot Boxes & Skin Gambling"
        summary="Many video games include gambling mechanics that children engage with daily."
        tips={[
          "Loot boxes: pay real money for a random in-game reward — a gambling mechanic by design",
          "Skin gambling: trading in-game cosmetics for real money on third-party sites — illegal for under-18s",
          "Some children spend significant amounts on loot boxes without parents realising",
          "Disable in-app purchases on your child's gaming accounts",
          "Look for PEGI ratings — games marked 'Real Gambling' should be off-limits to minors",
        ]}
        tag="Gaming"
        accent="#FBBF24"
      />
      <QuizCard
        icon="📦"
        question="Your 14-year-old buys FIFA packs to get rare players. This is most similar to:"
        options={[
          { text: "Buying a specific player they wanted", correct: false },
          { text: "A raffle or slot machine — gambling", correct: true },
          { text: "A subscription to content they chose", correct: false },
          { text: "Saving money for something they want", correct: false },
        ]}
        explanation="FIFA packs (and similar loot boxes) are random reward systems — you pay but don't know what you'll get. This is the core mechanic of gambling, repackaged for a younger audience."
      />
      <LessonCard
        icon="📱"
        title="Gaming Addiction — Signs & Support"
        summary="Gaming addiction is a recognised condition. It's more than 'spending too much time on games.'"
        tips={[
          "Recognised by the World Health Organisation (ICD-11) as a mental health condition",
          "Signs: gaming takes priority over sleep, school, hygiene, and relationships",
          "Escalating need for more gaming time to feel satisfied (like tolerance in substance use)",
          "Irritability, anxiety, or depression when gaming is restricted",
          "Support: talk to your GP, contact CAMHS, or seek specialist gaming disorder counselling",
        ]}
        tag="Addiction"
        accent="#FBBF24"
      />
      <ChecklistCard
        icon="🎰"
        title="Gambling & Gaming Risk Audit"
        subtitle="Annual check for families with gaming children"
        items={[
          "Disabled in-app purchasing on all gaming accounts",
          "Reviewed which games use loot boxes or random rewards",
          "Talked about the difference between spending on a game vs. gambling in a game",
          "Checked for third-party gambling sites linked to games (CS:GO, FIFA)",
          "Child's screen time is not affecting sleep, school, or social life",
          "Know where to get help if gaming becomes a problem",
        ]}
        accent="#FBBF24"
        tag="Checklist"
      />
      <QuizCard
        icon="😤"
        question="Your teenager gets extremely angry when you limit their gaming time. This could be a sign of:"
        options={[
          { text: "Normal teenage behaviour — nothing to worry about", correct: false },
          { text: "Gaming disorder — extreme reaction to restriction is a key diagnostic sign", correct: true },
          { text: "They need a better game to play", correct: false },
          { text: "A phase they'll grow out of", correct: false },
        ]}
        explanation="Disproportionate anger at gaming restrictions — especially when combined with other signs — is a clinical indicator of gaming disorder. It's worth consulting a GP or CAMHS if it persists."
      />
    </div>
  ),
  incident: (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <LessonCard
        icon="🆘"
        title="If Your Child Reports Something Worrying"
        summary="How you respond in the first 5 minutes will determine whether your child comes to you next time."
        tips={[
          "Stay calm — your reaction teaches your child whether it was safe to tell you",
          "Believe them first, investigate second",
          "Thank them for telling you — it takes courage",
          "Don't take their device away as a first response — it punishes the victim",
          "Write down what happened with timestamps and screenshots before reporting",
          "Reassure them: 'This is not your fault and I'm glad you told me'",
        ]}
        tag="First Response"
        accent="#8B5CF6"
      />
      <LessonCard
        icon="📋"
        title="Reporting to Platforms"
        summary="Platforms have legal obligations to act on reports of child harm. Here's how to escalate effectively."
        tips={[
          "Report to the platform first — use in-app reporting tools",
          "Escalate to the platform's Trust & Safety team if the initial report is dismissed",
          "For sexual content involving a child: report to the Internet Watch Foundation",
          "Keep reference numbers from all reports",
          "If the platform doesn't act quickly, contact your national regulator",
        ]}
        tag="Reporting"
        accent="#8B5CF6"
      />
      <QuizCard
        icon="🚨"
        question="You find sexual messages between your 13-year-old and an adult online. First action should be:"
        options={[
          { text: "Confront the adult online directly", correct: false },
          { text: "Delete everything to protect your child", correct: false },
          { text: "Screenshot everything, keep it, and call police immediately", correct: true },
          { text: "Tell your child to block them and move on", correct: false },
        ]}
        explanation="This is a crime. Preserve all evidence (screenshot, don't delete), call the police or relevant authority. Also report to child protection agencies. Do not confront the adult."
      />
      <LessonCard
        icon="⚖️"
        title="Who to Contact for Help"
        summary="Knowing where to turn speeds up your response and protects your child better."
        tips={[
          "CEOP (UK): ceop.police.uk — for online grooming and exploitation",
          "IWF (UK): iwf.org.uk — for child sexual abuse material online",
          "NSPCC helpline: 0808 800 5000 — parent helpline for online concerns",
          "Childline: 0800 1111 — for children to call directly",
          "In Nigeria: report to the NITDA Cybercrime Unit or contact Virtually Safe directly",
          "Contact us at Virtually Safe — we can guide you through the right steps",
        ]}
        tag="Resources"
        accent="#8B5CF6"
      />
      <ChecklistCard
        icon="📂"
        title="Incident Documentation Checklist"
        subtitle="Complete this before reporting to authorities"
        items={[
          "Screenshotted all messages, images, or posts in question",
          "Noted date, time, and platform of each incident",
          "Saved the URL or profile link of the account involved",
          "Written a brief timeline of events",
          "Reported to the platform and saved the report reference number",
          "Identified which authority to contact",
        ]}
        accent="#8B5CF6"
        tag="Checklist"
      />
      <QuizCard
        icon="💔"
        question="Your child had an upsetting experience online and is distressed. Which response is most helpful?"
        options={[
          { text: "Say 'I told you so — this is why I said no social media'", correct: false },
          { text: "Take their phone away immediately so it can't happen again", correct: false },
          { text: "Listen, validate their feelings, and say 'Thank you for telling me. We'll sort this together.'", correct: true },
          { text: "Minimise it — 'It's just the internet, it's not real life'", correct: false },
        ]}
        explanation="Emotional validation first — before any practical action. A child who feels judged or punished for disclosing will not disclose next time. 'We'll sort this together' keeps trust intact."
      />
    </div>
  ),
};

export default function ParentResourcesPage() {
  const [active, setActive] = useState("setup");
  const cat = CATEGORIES.find((c) => c.id === active)!;

  return (
    <>
      {/* Hero */}
      <section className="bg-[#00294B] pt-28 pb-16 px-5">
        <div className="max-w-screen-xl mx-auto">
          <span className="inline-flex items-center gap-2 bg-[#61CE70]/20 text-[#61CE70] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full font-inter mb-5">
            For Parents
          </span>
          <h1 className="font-jakarta text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 max-w-3xl">
            Your Digital Parenting Toolkit
          </h1>
          <p className="font-inter text-white/60 text-lg max-w-xl">
            Practical, bite-sized guides to help you protect your child online — from setting up controls to responding to crises.
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
