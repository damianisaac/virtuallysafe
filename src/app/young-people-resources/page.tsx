"use client";
import { useState } from "react";
import LessonCard from "@/components/resources/LessonCard";
import QuizCard from "@/components/resources/QuizCard";
import ChecklistCard from "@/components/resources/ChecklistCard";

const CATEGORIES = [
  { id: "basics", label: "Safety Basics", icon: "🛡️", color: "#00294B" },
  { id: "social", label: "Social Media", icon: "📱", color: "#60A5FA" },
  { id: "bullying", label: "Cyberbullying", icon: "🤝", color: "#F472B6" },
  { id: "privacy", label: "Privacy & Identity", icon: "🔐", color: "#8B5CF6" },
  { id: "wellbeing", label: "Digital Well-being", icon: "🌱", color: "#61CE70" },
  { id: "gaming", label: "Gaming Safety", icon: "🎮", color: "#FBBF24" },
];

const CONTENT: Record<string, React.ReactNode> = {
  basics: (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <LessonCard
        icon="🔑"
        title="Strong Passwords"
        summary="Your password is your first line of defence. Make it count."
        tips={[
          "Use at least 12 characters — mix letters, numbers, symbols",
          "Never use your name, birthday, or pet's name",
          "A passphrase (3+ random words) is easy to remember and hard to crack",
          "Use a different password for every account",
          "A password manager app does the remembering for you",
        ]}
        tag="Security"
        accent="#00294B"
      />
      <QuizCard
        icon="🤔"
        question="Which of these is the strongest password?"
        options={[
          { text: "john2008", correct: false },
          { text: "P@ssword123", correct: false },
          { text: "SunsetPurpleFrog#9!", correct: true },
          { text: "123456789", correct: false },
        ]}
        explanation="SunsetPurpleFrog#9! is long, uses mixed characters, and isn't based on personal info — making it very hard to crack."
      />
      <LessonCard
        icon="🔒"
        title="Two-Factor Authentication"
        summary="Add an extra lock to your accounts — even if someone steals your password, they can't get in."
        tips={[
          "Enable 2FA on your email, social media, and gaming accounts",
          "Use an authenticator app (like Google Authenticator) — it's safer than SMS",
          "Save your backup codes somewhere secure offline",
          "When you see '2FA available', always turn it on",
        ]}
        tag="Security"
        accent="#00294B"
      />
      <ChecklistCard
        icon="✅"
        title="Account Security Starter"
        subtitle="Complete this to lock down your accounts"
        items={[
          "Create a strong password (12+ characters)",
          "Turn on 2FA for my email",
          "Turn on 2FA for Instagram / TikTok",
          "Use a different password for each major account",
          "Check my privacy settings on each app",
        ]}
        accent="#00294B"
        tag="Checklist"
      />
      <LessonCard
        icon="🌐"
        title="Safe Browsing Online"
        summary="Not every website is what it seems. Here's how to browse without falling into traps."
        tips={[
          "Look for 'https://' and the padlock icon before entering any personal info",
          "Suspicious pop-ups saying 'you've won' or 'you have a virus' — close immediately",
          "Avoid downloading files from sites you don't recognise",
          "Public Wi-Fi is risky — don't log into sensitive accounts on it",
          "Use private browsing mode on shared devices",
        ]}
        tag="Browsing"
        accent="#00294B"
      />
      <QuizCard
        icon="🌐"
        question="A popup says 'Congratulations! You've won a free iPhone. Click here!' What do you do?"
        options={[
          { text: "Click it — maybe you did win!", correct: false },
          { text: "Close the popup immediately — it's a scam", correct: true },
          { text: "Share your email to claim the prize", correct: false },
          { text: "Tell your friends about it", correct: false },
        ]}
        explanation="These are classic phishing scams. Legitimate contests don't pop up on random websites. Always close and move on."
      />
    </div>
  ),
  social: (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <LessonCard
        icon="👁️"
        title="Your Digital Footprint"
        summary="Everything you post online stays somewhere — even after you delete it."
        tips={[
          "Think before you post: could this embarrass you in 5 years?",
          "Screenshots exist — a private message can become public",
          "Future employers and universities may check your social media",
          "Search your own name regularly to see what's out there",
          "Deleting content removes it from your feed, but not always from the internet",
        ]}
        tag="Awareness"
        accent="#60A5FA"
      />
      <LessonCard
        icon="🔏"
        title="Privacy Settings Matter"
        summary="Set your accounts to private. Control who sees what you share."
        tips={[
          "Set your Instagram, TikTok and Snapchat to Private",
          "Only accept follow requests from people you know in real life",
          "Turn off location sharing on your posts — it reveals where you live",
          "Review what apps have access to your camera, mic, and contacts",
          "Audit your friends/followers list every few months",
        ]}
        tag="Privacy"
        accent="#60A5FA"
      />
      <QuizCard
        icon="📸"
        question="You post a photo and tag your school's location. What risk does this create?"
        options={[
          { text: "None — it's just a school", correct: false },
          { text: "Strangers can track your daily schedule and location", correct: true },
          { text: "Your phone battery might drain faster", correct: false },
          { text: "Your followers might unfollow you", correct: false },
        ]}
        explanation="Tagging locations lets strangers know exactly where you are and when. Avoid location tags on public posts — especially routine ones."
      />
      <ChecklistCard
        icon="📱"
        title="Social Media Privacy Audit"
        subtitle="Do this check every 3 months"
        items={[
          "Set my main accounts to Private",
          "Removed followers I don't recognise",
          "Turned off location on my posts",
          "Reviewed which apps have camera/mic access",
          "Checked that my birthday and phone number aren't public",
          "Turned off 'allow others to tag me' or enabled manual approval",
        ]}
        accent="#60A5FA"
        tag="Checklist"
      />
      <LessonCard
        icon="🤳"
        title="What Not to Share Online"
        summary="Some information seems harmless but can be used to harm you."
        tips={[
          "Never share: home address, school name, phone number, or daily routine",
          "Don't post photos of your school uniform (it reveals where you study)",
          "Keep family member identities private — especially younger siblings",
          "Sharing holiday plans tells people your home is empty",
          "Even usernames across platforms can be used to piece together your identity",
        ]}
        tag="Safety"
        accent="#60A5FA"
      />
      <QuizCard
        icon="💬"
        question="Someone you met online asks for your home address to send you a gift. You should:"
        options={[
          { text: "Share a nearby landmark, not your exact address", correct: false },
          { text: "Refuse and tell a trusted adult immediately", correct: true },
          { text: "Give it — free gifts are exciting!", correct: false },
          { text: "Ask for their address first", correct: false },
        ]}
        explanation="No legitimate online stranger has a reason to know where you live. This is a grooming tactic. Always tell a trusted adult right away."
      />
    </div>
  ),
  bullying: (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <LessonCard
        icon="😔"
        title="What Is Cyberbullying?"
        summary="Bullying doesn't stop when you leave school. Online, it can follow you everywhere."
        tips={[
          "Sending hurtful messages, insults, or threats online",
          "Sharing embarrassing photos or videos without permission",
          "Excluding someone from online groups on purpose",
          "Spreading rumours via screenshots or group chats",
          "Impersonating someone online to damage their reputation",
        ]}
        tag="Awareness"
        accent="#F472B6"
      />
      <LessonCard
        icon="💪"
        title="If It Happens to You"
        summary="You're not alone, and it's never your fault. Here's what to do."
        tips={[
          "Don't respond — engaging often makes it worse",
          "Screenshot and save everything as evidence",
          "Block the person on all platforms",
          "Report the account to the platform (they take this seriously)",
          "Tell a trusted adult — parent, teacher, counsellor",
          "Remember: the bully is in the wrong, not you",
        ]}
        tag="Response"
        accent="#F472B6"
      />
      <QuizCard
        icon="💬"
        question="Your classmate keeps sending you mean messages online. What's the FIRST thing you should do?"
        options={[
          { text: "Send mean messages back to defend yourself", correct: false },
          { text: "Screenshot the messages and block them", correct: true },
          { text: "Delete all the messages so no one sees", correct: false },
          { text: "Change your phone number", correct: false },
        ]}
        explanation="Documenting evidence (screenshot) and blocking protects you without escalating. Never delete evidence and never retaliate — it can be used against you."
      />
      <ChecklistCard
        icon="🆘"
        title="Cyberbullying Response Plan"
        subtitle="Follow these steps if you're being targeted"
        items={[
          "Don't respond to the bully",
          "Screenshot all messages as evidence",
          "Block the person across all platforms",
          "Report the account on the platform",
          "Tell a parent, teacher, or trusted adult",
          "Save screenshots — email them to yourself for safekeeping",
        ]}
        accent="#F472B6"
        tag="Action Plan"
      />
      <LessonCard
        icon="🧑‍🤝‍🧑"
        title="Being an Upstander"
        summary="If you see someone being bullied online, you have power to help — without putting yourself at risk."
        tips={[
          "Don't like, share, or comment on bullying content — it amplifies it",
          "Reach out privately to the person being targeted",
          "Report the content to the platform anonymously",
          "Tell a trusted adult what you've witnessed",
          "Speak up in group chats when things go too far",
        ]}
        tag="Bystander"
        accent="#F472B6"
      />
      <QuizCard
        icon="👀"
        question="You see your friend being mocked in a group chat. The best action is:"
        options={[
          { text: "Join in so you're not targeted next", correct: false },
          { text: "Leave the group silently", correct: false },
          { text: "Message your friend privately and report the chat", correct: true },
          { text: "Screenshot it and share it with others", correct: false },
        ]}
        explanation="Private support + reporting is the most effective and safe response. Leaving silently does nothing; joining makes it worse; resharing amplifies the harm."
      />
    </div>
  ),
  privacy: (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <LessonCard
        icon="🕵️"
        title="Online Stranger Danger"
        summary="Online strangers are not the same as people you know in real life — no matter how friendly they seem."
        tips={[
          "People online can easily lie about who they are — age, gender, identity",
          "If someone online becomes overly friendly very fast, be cautious",
          "Never agree to meet an online-only contact without telling a trusted adult",
          "If they ask you to keep your friendship secret from parents, that's a red flag",
          "Block anyone who makes you feel uncomfortable — you owe them nothing",
        ]}
        tag="Awareness"
        accent="#8B5CF6"
      />
      <LessonCard
        icon="🎣"
        title="Phishing & Scams Targeting Young People"
        summary="Scammers specifically target young people. Know their tricks."
        tips={[
          "Fake 'free Robux', 'free V-bucks', 'free gift cards' — all scams",
          "If someone asks for your account login to 'gift' you something, don't do it",
          "Links sent in DMs from people you don't know — don't click them",
          "Messages pretending to be from Instagram, TikTok, or your school are often fake",
          "Verify by going directly to the app or website instead of clicking links",
        ]}
        tag="Scams"
        accent="#8B5CF6"
      />
      <QuizCard
        icon="🎮"
        question="A player says 'Tell me your login and I'll give you rare skins for free.' What do you do?"
        options={[
          { text: "Share it — rare skins are worth it!", correct: false },
          { text: "Give only your username, not password", correct: false },
          { text: "Refuse and report them — it's a scam", correct: true },
          { text: "Ask them to prove they have the skins first", correct: false },
        ]}
        explanation="Legitimate platforms never ask for your login. Anyone asking for your password is trying to steal your account — report and ignore."
      />
      <LessonCard
        icon="📷"
        title="Image-Based Abuse & Sextortion"
        summary="Never share intimate images — even with people you trust."
        tips={[
          "Once an image is sent, you lose control of it — forever",
          "Sextortion: someone threatens to share your images unless you pay or send more — report immediately",
          "It is illegal for anyone to share intimate images of you without consent",
          "If this happens: don't pay, don't send more, and tell a trusted adult or contact Virtually Safe",
          "Platforms can remove images — report them quickly",
        ]}
        tag="Safety"
        accent="#8B5CF6"
      />
      <ChecklistCard
        icon="🔐"
        title="Protect Your Identity Online"
        subtitle="Stay anonymous in the right ways"
        items={[
          "My main accounts don't include my real surname",
          "My profile picture doesn't show my face on public accounts",
          "I haven't shared my address, school, or phone number publicly",
          "I use a nickname in online games",
          "I know what information is on my public profiles",
          "I've told a trusted adult if anyone made me uncomfortable",
        ]}
        accent="#8B5CF6"
        tag="Checklist"
      />
      <QuizCard
        icon="💌"
        question="Someone you met online two weeks ago asks for a photo of you, saying 'I sent you one so it's only fair.' You should:"
        options={[
          { text: "Send one — it only seems fair", correct: false },
          { text: "Send it but tell them not to share it", correct: false },
          { text: "Refuse, trust your gut, and tell a trusted adult", correct: true },
          { text: "Send a photo of someone else", correct: false },
        ]}
        explanation="This is a manipulation tactic. The feeling of obligation is engineered. You never owe anyone a photo, and this pattern is often how grooming begins."
      />
    </div>
  ),
  wellbeing: (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <LessonCard
        icon="⏱️"
        title="Screen Time & Balance"
        summary="Your phone isn't the problem — uncontrolled use is. Take back control of your time."
        tips={[
          "Set a daily screen time limit — 2 hours of recreational time is a healthy guide",
          "Phone-free first hour in the morning sets a better tone for the day",
          "No screens at least 1 hour before bed — blue light disrupts sleep",
          "Turn off all notifications during study time",
          "Notice how you feel after scrolling vs. after doing something physical",
        ]}
        tag="Balance"
        accent="#61CE70"
      />
      <LessonCard
        icon="🧠"
        title="Social Media & Your Mental Health"
        summary="Social media is designed to make you feel you're missing out. Knowing that changes everything."
        tips={[
          "What you see online is a highlight reel — not real life",
          "Comparing your life to curated posts fuels anxiety and low self-esteem",
          "Notice how you feel after using each app — some lift you up, some bring you down",
          "Unfollow accounts that regularly make you feel bad about yourself",
          "Engage — don't just scroll. Comment, create, connect",
        ]}
        tag="Mental Health"
        accent="#61CE70"
      />
      <QuizCard
        icon="🌙"
        question="You scroll TikTok in bed until midnight most nights. The main risk is:"
        options={[
          { text: "Running out of mobile data", correct: false },
          { text: "Missing trending content", correct: false },
          { text: "Poor sleep quality, affecting your focus, mood, and health", correct: true },
          { text: "Your phone battery wearing out faster", correct: false },
        ]}
        explanation="Blue light from screens suppresses melatonin (your sleep hormone), delaying sleep and reducing quality. Chronic sleep deprivation significantly affects mood and learning."
      />
      <ChecklistCard
        icon="🌱"
        title="Digital Wellbeing Habits"
        subtitle="Try one per day this week"
        items={[
          "Set a daily screen time limit and check it tonight",
          "Phone out of the bedroom tonight",
          "One hour offline doing something physical",
          "Unfollow 3 accounts that make me feel bad",
          "Spend 20 min creating something instead of scrolling",
          "Have a face-to-face conversation with a friend or family member today",
        ]}
        accent="#61CE70"
        tag="Habits"
      />
      <LessonCard
        icon="😰"
        title="Recognising Digital Burnout"
        summary="Sometimes the internet gets overwhelming. It's okay to log off."
        tips={[
          "Signs: feeling anxious when away from your phone, irritable, tired, or comparing yourself constantly",
          "A digital detox — even one day a week offline — resets your mind",
          "Group chats are optional. You don't have to reply immediately",
          "FOMO (Fear of Missing Out) is designed into apps — you're being manipulated",
          "Talk to someone if the internet is making you feel consistently sad or anxious",
        ]}
        tag="Mental Health"
        accent="#61CE70"
      />
      <QuizCard
        icon="😔"
        question="After scrolling for an hour you feel worse about yourself. This is most likely because:"
        options={[
          { text: "Your life is genuinely less interesting than others'", correct: false },
          { text: "You're seeing curated highlights, not real life", correct: true },
          { text: "You follow the wrong people", correct: false },
          { text: "You need a new phone", correct: false },
        ]}
        explanation="Social media shows everyone's best moments. Nobody posts their boring or sad days — so you're comparing your ordinary life to everyone else's greatest hits."
      />
    </div>
  ),
  gaming: (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <LessonCard
        icon="🕹️"
        title="Staying Safe In-Game"
        summary="Online gaming connects you with millions of players — most are great, some aren't."
        tips={[
          "Use a gaming alias, not your real name",
          "Don't share your school, location, or age in game chats",
          "Voice chat with strangers carries the same risks as text chat",
          "If someone becomes overly friendly outside of game topics, be cautious",
          "Report toxic and suspicious players using in-game tools",
        ]}
        tag="Safety"
        accent="#FBBF24"
      />
      <LessonCard
        icon="💸"
        title="In-Game Purchases & Scams"
        summary="Microtransactions can feel minor but add up fast. Scammers exploit gaming culture."
        tips={[
          "'Free V-bucks', 'free Robux', 'free coins' — 100% scams, no exceptions",
          "Account trading (buying/selling game accounts) breaks terms of service and is risky",
          "Games are designed to make small purchases feel harmless — track total spending",
          "If a deal looks too good to be true in-game, it is",
        ]}
        tag="Scams"
        accent="#FBBF24"
      />
      <QuizCard
        icon="🎰"
        question="Loot boxes (paying real money for random in-game items) are similar to:"
        options={[
          { text: "Buying clothes from a shop", correct: false },
          { text: "Gambling — you don't know what you'll get", correct: true },
          { text: "Saving money in a bank", correct: false },
          { text: "Subscribing to a streaming service", correct: false },
        ]}
        explanation="Loot boxes share the core mechanic of gambling: paying for a random chance at a reward. Many countries now regulate them as gambling products."
      />
      <LessonCard
        icon="🔥"
        title="Gaming Addiction Warning Signs"
        summary="Gaming is great fun — until it starts taking over. Know the signs."
        tips={[
          "Lying about how long you've been gaming",
          "Feeling angry, sad, or restless when you can't play",
          "Skipping meals, sleep, or homework to keep playing",
          "Losing interest in things you used to enjoy",
          "If you recognise these signs — talk to a parent or counsellor. There's no shame in it.",
        ]}
        tag="Wellbeing"
        accent="#FBBF24"
      />
      <ChecklistCard
        icon="🎮"
        title="Healthy Gamer Checklist"
        subtitle="Check in with yourself weekly"
        items={[
          "I use a username, not my real name in games",
          "I haven't shared personal info in game chats",
          "I've set a time limit for gaming sessions",
          "I've reported any suspicious or toxic players",
          "I'm still enjoying hobbies outside of gaming",
          "My sleep and schoolwork aren't being affected by gaming",
        ]}
        accent="#FBBF24"
        tag="Checklist"
      />
      <QuizCard
        icon="🗣️"
        question="In a multiplayer game, another player asks your age and where you go to school. You should:"
        options={[
          { text: "Answer — they're probably just being friendly", correct: false },
          { text: "Give vague answers like 'I'm in secondary school'", correct: false },
          { text: "Decline to share and report if they keep asking", correct: true },
          { text: "Block them immediately without saying anything", correct: false },
        ]}
        explanation="Legitimate gamers don't need to know your age or school. It's okay to decline and keep playing — but if they keep pushing for personal info, report them."
      />
    </div>
  ),
};

export default function YoungPeopleResourcesPage() {
  const [active, setActive] = useState("basics");
  const cat = CATEGORIES.find((c) => c.id === active)!;

  return (
    <>
      {/* Hero */}
      <section className="bg-[#00294B] pt-28 pb-16 px-5">
        <div className="max-w-screen-xl mx-auto">
          <span className="inline-flex items-center gap-2 bg-[#61CE70]/20 text-[#61CE70] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full font-inter mb-5">
            For Young People
          </span>
          <h1 className="font-jakarta text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 max-w-3xl">
            Learn. Play. Stay Safe.
          </h1>
          <p className="font-inter text-white/60 text-lg max-w-xl">
            Short, interactive lessons on everything you need to know about staying safe online — from passwords to gaming, social media to mental health.
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
                  active === c.id
                    ? "text-white shadow-md"
                    : "bg-gray-50 text-gray-500 hover:bg-gray-100"
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
