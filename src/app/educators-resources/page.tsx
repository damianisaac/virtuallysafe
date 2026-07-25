"use client";
import { useState } from "react";
import LessonCard from "@/components/resources/LessonCard";
import QuizCard from "@/components/resources/QuizCard";
import ChecklistCard from "@/components/resources/ChecklistCard";

const CATEGORIES = [
  { id: "curriculum", label: "Curriculum Ideas", icon: "📚", color: "#00294B" },
  { id: "classroom", label: "Classroom Policies", icon: "🏫", color: "#61CE70" },
  { id: "incident", label: "Incident Response", icon: "🚨", color: "#FB7185" },
  { id: "parents", label: "Parent Engagement", icon: "🤝", color: "#60A5FA" },
  { id: "citizenship", label: "Digital Citizenship", icon: "🌍", color: "#8B5CF6" },
];

const CONTENT: Record<string, React.ReactNode> = {
  curriculum: (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <LessonCard
        icon="🗓️"
        title="One-Lesson Online Safety Starter"
        summary="Slot into any subject in 30–40 minutes. No preparation beyond reading this card."
        tips={[
          "Opening hook (5 min): Ask 'Who here has had something go wrong online?' — hands up exercise",
          "Core content (20 min): Cover the 3 P's — Private info, Permission for sharing, People you can trust",
          "Activity (10 min): 'Post or Not?' — show 5 scenarios, students vote and discuss",
          "Takeaway: Each student writes one thing they'll change about their online behaviour",
          "Tip: Real scenarios from current apps (TikTok, Roblox, WhatsApp) land much better than hypothetical examples",
        ]}
        tag="Lesson Plan"
        accent="#00294B"
      />
      <LessonCard
        icon="🎭"
        title="Role-Play Scenarios That Work"
        summary="Students retain safety knowledge better when they practise responses, not just hear them."
        tips={[
          "Scenario 1: 'Someone in your game asks for your phone number to move chat to WhatsApp' — what do you say?",
          "Scenario 2: 'A photo of a classmate is being shared in the group chat — do you forward it?'",
          "Scenario 3: 'You get a message saying your Instagram is about to be deleted — click here to verify'",
          "Debrief after each: what were the red flags? What would you do differently?",
          "Let students create their own scenarios — engagement skyrockets",
        ]}
        tag="Activity"
        accent="#00294B"
      />
      <QuizCard
        icon="🎓"
        question="Which approach has the strongest evidence for improving students' online safety behaviour?"
        options={[
          { text: "A one-off assembly on internet dangers", correct: false },
          { text: "Repeated, interactive sessions embedded in existing subjects", correct: true },
          { text: "Sending leaflets home to parents", correct: false },
          { text: "Blocking social media on the school network", correct: false },
        ]}
        explanation="Research consistently shows that repeated, interactive, and embedded education is far more effective than one-off talks. Integration into PSHE, Computing, and English gives more touchpoints."
      />
      <LessonCard
        icon="🖥️"
        title="Cross-Curricular Integration Ideas"
        summary="Online safety doesn't need its own timetable slot — it fits naturally into existing subjects."
        tips={[
          "English: Analyse persuasive techniques used in phishing emails or online ads",
          "Computing: Students create a poster about strong passwords — then try to crack weak ones",
          "PSHE: 'How does social media affect mental health?' — class debate using data",
          "Maths: Probability exercise using loot box/gambling statistics",
          "Art: Design an infographic about cyberbullying for the school reception area",
        ]}
        tag="Cross-Curricular"
        accent="#00294B"
      />
      <ChecklistCard
        icon="📚"
        title="Term Planning Checklist"
        subtitle="Cover these topics across the academic year"
        items={[
          "Passwords and account security (Year 7/8)",
          "Privacy settings and digital footprint (Year 7–9)",
          "Cyberbullying — recognising and responding (Year 7–10)",
          "Online grooming and stranger danger (Year 8–10)",
          "Sexting, consent, and image-based abuse (Year 9–11)",
          "Gambling, loot boxes, and addiction (Year 9–11)",
        ]}
        accent="#00294B"
        tag="Planning"
      />
      <LessonCard
        icon="📊"
        title="Using Data to Engage Students"
        summary="Statistics hit harder than warnings. Use real data to make the risks feel real."
        tips={[
          "'82% of children in Nigeria have experienced cyberbullying' — ask how that compares to this class",
          "'1 in 3 children globally has been exposed to sexual content online by age 10'",
          "Show the FTC data on how much money teens lose to online scams each year",
          "Let students research their own statistics and present findings to the class",
          "Discuss why these numbers exist — don't just cite them",
        ]}
        tag="Data"
        accent="#00294B"
      />
    </div>
  ),
  classroom: (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <LessonCard
        icon="📵"
        title="Phone Policies That Actually Work"
        summary="Evidence shows removing phones entirely works — but needs consistent, school-wide enforcement."
        tips={[
          "Phone-free classrooms reduce distraction and improve academic performance",
          "Provide clear, consistent rules — not enforced room-by-room",
          "Designated phone zones (corridor, break areas) reduce resistance",
          "Explain the why to students — don't just ban without reasoning",
          "Have a digital alternative policy for students who claim phone-based need (e.g. anxiety)",
        ]}
        tag="Policy"
        accent="#61CE70"
      />
      <LessonCard
        icon="🌐"
        title="Acceptable Use Policy — Making It Stick"
        summary="Most students sign an AUP without reading it. Here's how to make it meaningful."
        tips={[
          "Present the AUP as a discussion, not a signature exercise",
          "Ask students: 'What would you add to this policy?'",
          "Review it annually — technology changes faster than most school policies",
          "Include social media and personal devices, not just school equipment",
          "Pair the policy with an explanation of consequences and why they exist",
        ]}
        tag="Policy"
        accent="#61CE70"
      />
      <QuizCard
        icon="📋"
        question="A student is photographed by another student without consent and the photo is shared in a group chat. This may be:"
        options={[
          { text: "A minor social issue between students", correct: false },
          { text: "Against school policy and potentially illegal under image-based abuse laws", correct: true },
          { text: "Acceptable if it was meant as a joke", correct: false },
          { text: "Only an issue if the photo is inappropriate", correct: false },
        ]}
        explanation="Taking and sharing photos of someone without consent is a safeguarding concern and may breach privacy law. All schools should have a clear policy covering image sharing by students."
      />
      <ChecklistCard
        icon="🏫"
        title="Classroom Digital Safety Setup"
        subtitle="Before term starts"
        items={[
          "School-wide phone policy is displayed and understood by all staff",
          "AUP has been shared, discussed, and signed by all students",
          "Content filtering is active on school devices and network",
          "A clear process exists for students to report online incidents",
          "Staff know who to escalate concerns to (DSL name known to all)",
          "Resources for students in crisis are visible (posters, links)",
        ]}
        accent="#61CE70"
        tag="Checklist"
      />
      <LessonCard
        icon="🤫"
        title="Creating a Culture of Disclosure"
        summary="Students won't report online harm if they fear punishment or disbelief. Culture matters more than rules."
        tips={[
          "Make clear: reporting concerns will never get a student in trouble",
          "Display 'It's OK to tell us' messaging visibly in classrooms and corridors",
          "Ensure students know the reporting pathways — multiple options (teacher, pastoral, anonymous)",
          "Train all staff in how to receive disclosures calmly and without judgment",
          "Celebrate upstander behaviour publicly when appropriate",
        ]}
        tag="Culture"
        accent="#61CE70"
      />
      <QuizCard
        icon="🗣️"
        question="A student discloses that they've been sent inappropriate messages by an adult online. First response should be:"
        options={[
          { text: "Take their phone to check the messages immediately", correct: false },
          { text: "Tell them to delete everything and not respond", correct: false },
          { text: "Listen calmly, thank them for telling you, and refer immediately to the DSL", correct: true },
          { text: "Call their parents while the student is in the room", correct: false },
        ]}
        explanation="Teachers should listen and refer — not investigate or advise evidence deletion. The Designated Safeguarding Lead (DSL) is trained to handle this. Preserve evidence; don't act on it directly."
      />
    </div>
  ),
  incident: (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <LessonCard
        icon="📣"
        title="What to Do When a Student Discloses"
        summary="The way you receive a disclosure in the first 2 minutes shapes everything that follows."
        tips={[
          "Listen fully — don't interrupt or fill silences",
          "Use open, non-leading questions: 'Can you tell me more about what happened?'",
          "Never promise confidentiality — 'I'll need to share this with someone who can help'",
          "Don't investigate yourself — your role is to receive and refer",
          "Write down exactly what was said (their words) as soon as possible after",
          "Refer immediately to the Designated Safeguarding Lead (DSL)",
        ]}
        tag="Protocol"
        accent="#FB7185"
      />
      <LessonCard
        icon="🚔"
        title="When to Involve the Police"
        summary="Not every online incident is a police matter — but some are. Know the threshold."
        tips={[
          "Always involve police: Child Sexual Abuse Material (CSAM), sexual grooming, blackmail/sextortion involving a student",
          "May involve police: Violent threats, stalking, harassment that puts a student at risk",
          "School-handle first: Cyberbullying between students (unless criminal threshold is met)",
          "The DSL makes the call on police involvement — not the classroom teacher",
          "CEOP (Child Exploitation and Online Protection) can advise — ceop.police.uk",
        ]}
        tag="Escalation"
        accent="#FB7185"
      />
      <QuizCard
        icon="🚨"
        question="A student shows you a sexual image they received from an older person online. You should:"
        options={[
          { text: "View and screenshot it on your own phone as evidence", correct: false },
          { text: "Tell the student to delete it immediately to protect them", correct: false },
          { text: "Refer immediately to the DSL — do not view the image yourself", correct: true },
          { text: "Call the police directly from the classroom", correct: false },
        ]}
        explanation="Do NOT view child sexual abuse material — it is illegal even for safeguarding purposes. Refer to the DSL immediately. Do not advise deletion. The DSL and police will manage evidence."
      />
      <ChecklistCard
        icon="📝"
        title="Incident Response Protocol"
        subtitle="When an online safeguarding concern arises"
        items={[
          "Listened calmly without investigating or leading",
          "Written exact words of disclosure immediately after",
          "Reassured student they did the right thing",
          "Referred to the Designated Safeguarding Lead",
          "Not contacted the alleged perpetrator or the parents directly",
          "Not shared information with other staff beyond the DSL",
        ]}
        accent="#FB7185"
        tag="Protocol"
      />
      <LessonCard
        icon="🗂️"
        title="Documenting Online Incidents"
        summary="Good documentation protects both students and staff. Do it immediately, not from memory later."
        tips={[
          "Use your school's safeguarding record system — not personal notes or email",
          "Record: date, time, student name, what was said (verbatim), who was present",
          "Screenshot evidence without viewing any illegal content",
          "Include the platform involved and whether it has been reported",
          "Store records securely — they may be needed in legal proceedings",
        ]}
        tag="Documentation"
        accent="#FB7185"
      />
      <QuizCard
        icon="📞"
        question="After a student discloses cyberbullying, who should you contact first?"
        options={[
          { text: "The parents of the bullied student", correct: false },
          { text: "The parents of the alleged bully", correct: false },
          { text: "Your school's Designated Safeguarding Lead (DSL)", correct: true },
          { text: "The police", correct: false },
        ]}
        explanation="The DSL is trained in safeguarding procedures and will coordinate the appropriate response — including whether and when to contact parents or external agencies."
      />
    </div>
  ),
  parents: (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <LessonCard
        icon="📮"
        title="Communicating Online Safety to Parents"
        summary="Most parents want to protect their children online but don't know where to start. You can bridge that gap."
        tips={[
          "Use plain language — avoid jargon like 'phishing', 'doxxing', or 'CSAM' in parent communications",
          "Share your school's online safety policy at the start of each year",
          "Newsletters: one online safety tip per issue lands better than lengthy articles",
          "Signpost to trusted resources — Virtually Safe, Internet Matters, NSPCC",
          "Frame safety conversations positively: 'Here's how to support your child' not 'Here are the dangers'",
        ]}
        tag="Communication"
        accent="#60A5FA"
      />
      <LessonCard
        icon="🎙️"
        title="Running an Effective Parent Workshop"
        summary="A well-designed 60-minute workshop can change how an entire parent community approaches digital safety."
        tips={[
          "Open with a relatable scenario — 'Your 12-year-old receives a gift from an online friend. What do you do?'",
          "Demo the tools: show parents how to set up Screen Time or Family Link live",
          "Give a single one-page takeaway — not a 12-page booklet",
          "Allow Q&A time — parents ask questions you never would have scripted",
          "Invite Virtually Safe to co-run your next workshop — we do this for free",
        ]}
        tag="Events"
        accent="#60A5FA"
      />
      <QuizCard
        icon="👨‍👩‍👧"
        question="The most effective way to improve student online safety is:"
        options={[
          { text: "School-only education programmes", correct: false },
          { text: "Parent-only workshops and resources", correct: false },
          { text: "A joined-up school-and-home approach", correct: true },
          { text: "Stricter device bans at school", correct: false },
        ]}
        explanation="Research consistently shows that combining school education with informed parenting is significantly more effective than either approach in isolation."
      />
      <ChecklistCard
        icon="🤝"
        title="Parent Engagement Annual Plan"
        subtitle="Build this into your school calendar"
        items={[
          "Sent home a digital safety summary at start of year",
          "Ran or planned a parent workshop this year",
          "Shared platform safety guide (TikTok, Snapchat settings) with parent body",
          "Created a route for parents to report online concerns to the school",
          "Shared Virtually Safe resources with parents via newsletter",
          "Reviewed feedback from parents on school online safety provision",
        ]}
        accent="#60A5FA"
        tag="Annual Plan"
      />
      <LessonCard
        icon="📲"
        title="Helping Parents Navigate Platforms"
        summary="Parents often know their child has social media but don't know how the platforms actually work."
        tips={[
          "Create a 'Platform Guide for Parents' covering the top 5 apps used by your students",
          "Explain what each app does, its minimum age, and its key risks",
          "Show parents Family Pairing (TikTok), Supervision (Instagram), Family Centre (Snapchat)",
          "Warn about the gap between 'we have parental controls' and 'our child is safe'",
          "Encourage parents to install the same apps their children use — then explore them",
        ]}
        tag="Platform Help"
        accent="#60A5FA"
      />
      <QuizCard
        icon="📱"
        question="A parent says 'My child is safe online — I have parental controls on their phone.' What would you add?"
        options={[
          { text: "Great — that covers it", correct: false },
          { text: "Parental controls help but work best alongside open conversation", correct: true },
          { text: "Parental controls are useless — they always find a workaround", correct: false },
          { text: "That's the school's job, not theirs", correct: false },
        ]}
        explanation="Parental controls are one layer of protection — they can be bypassed (friend's phone, school Wi-Fi). They work best alongside trust-based conversation and digital literacy education."
      />
    </div>
  ),
  citizenship: (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <LessonCard
        icon="🌍"
        title="What Is Digital Citizenship?"
        summary="Digital citizenship is about being safe, responsible, and kind online — not just technically safe."
        tips={[
          "Safe: protecting personal information and managing online risks",
          "Responsible: understanding rights, responsibilities, and legal consequences",
          "Kind: treating others with respect — online and offline empathy are the same skill",
          "Informed: thinking critically about online content, sources, and persuasion",
          "Balanced: maintaining wellbeing and healthy relationships with technology",
        ]}
        tag="Framework"
        accent="#8B5CF6"
      />
      <LessonCard
        icon="🧐"
        title="Teaching Critical Thinking Online"
        summary="The single most important skill for online safety is the ability to question what you see."
        tips={[
          "SIFT method: Stop, Investigate the source, Find better coverage, Trace claims",
          "Teach the difference between information and misinformation — show real examples",
          "Lateral reading: looking up a source on other sites, not just the source itself",
          "Ask: 'Who made this content? Why? What do they want me to do or believe?'",
          "Practice on viral content students actually see — election posts, health claims, celebrity news",
        ]}
        tag="Media Literacy"
        accent="#8B5CF6"
      />
      <QuizCard
        icon="📰"
        question="A news headline says 'Scientists confirm chocolate cures cancer.' How do you check if it's true?"
        options={[
          { text: "If it's on social media, it must have some truth to it", correct: false },
          { text: "Look at the article and see how many likes it has", correct: false },
          { text: "Search for the claim on multiple reputable news sites and find the original study", correct: true },
          { text: "Share it — your friends will tell you if it's fake", correct: false },
        ]}
        explanation="Lateral reading — checking a claim across multiple credible sources — is the most reliable verification method. Likes and shares are not indicators of truth."
      />
      <LessonCard
        icon="⚖️"
        title="Online Rights & Responsibilities"
        summary="Students have rights in digital spaces — and responsibilities towards others."
        tips={[
          "Right to privacy: personal data cannot be collected or shared without consent",
          "Right to be forgotten: in many countries, you can request content about you be removed",
          "Responsibility: sharing someone's photo without consent may be illegal",
          "Responsibility: online harassment carries the same legal consequences as offline harassment",
          "Copyright: content online isn't free to copy — someone created it and owns it",
        ]}
        tag="Rights & Law"
        accent="#8B5CF6"
      />
      <ChecklistCard
        icon="🌍"
        title="Digital Citizenship Classroom Standards"
        subtitle="Set expectations at the start of the year"
        items={[
          "Students know the school's acceptable use policy",
          "Discussed online empathy and treating others as you would offline",
          "Covered copyright and content attribution",
          "Practised fact-checking with a real example in class",
          "Discussed the concept of digital permanence (what you post, stays)",
          "Students know where to report online concerns",
        ]}
        accent="#8B5CF6"
        tag="Checklist"
      />
      <QuizCard
        icon="🤳"
        question="A student posts a screenshot of a private conversation with a classmate. This could be:"
        options={[
          { text: "Fine — they're just sharing what happened", correct: false },
          { text: "Rude but not a serious issue", correct: false },
          { text: "A breach of privacy and potentially a disciplinary or legal matter", correct: true },
          { text: "Only a problem if the classmate complains", correct: false },
        ]}
        explanation="Sharing private communications without consent breaches reasonable privacy expectations and may breach data protection law. Schools should treat this as a disciplinary matter, not just a social issue."
      />
    </div>
  ),
};

export default function EducatorsResourcesPage() {
  const [active, setActive] = useState("curriculum");
  const cat = CATEGORIES.find((c) => c.id === active)!;

  return (
    <>
      {/* Hero */}
      <section className="bg-[#00294B] pt-28 pb-16 px-5">
        <div className="max-w-screen-xl mx-auto">
          <span className="inline-flex items-center gap-2 bg-[#61CE70]/20 text-[#61CE70] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full font-inter mb-5">
            For Educators
          </span>
          <h1 className="font-jakarta text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 max-w-3xl">
            Teach Online Safety Confidently
          </h1>
          <p className="font-inter text-white/60 text-lg max-w-xl">
            Ready-to-use lesson ideas, classroom policies, incident response protocols, and parent engagement tools — all in bite-sized cards.
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
