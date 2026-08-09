import type { PromptCategory } from "@/lib/prompts";

export type ArticlePage = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  cta: string;
  ctaHref: string;
  category?: PromptCategory;
  prompts: string[];
  sections: Array<{
    heading: string;
    body: string[];
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  related: string[];
};

export const articlePages: ArticlePage[] = [
  {
    slug: "mirror-affirmations",
    title: "Mirror Affirmations | Private Mirror Work Practice",
    description:
      "Learn how to practice mirror affirmations privately with gentle first-person prompts and a no-recording browser mirror demo.",
    h1: "Mirror Affirmations",
    intro:
      "Mirror affirmations are short phrases you say while looking at yourself. The point is not to perform confidence. The point is to slow down long enough to speak to yourself with a little more care.",
    cta: "Try the private mirror demo",
    ctaHref: "/demo?category=bedtime",
    category: "bedtime",
    prompts: [
      "I can speak to myself softly.",
      "I do not have to solve everything right now.",
      "I am allowed to be a person, not a project.",
      "I can let this moment be small and honest.",
      "I do not need to earn rest.",
      "I can come back to myself slowly.",
      "I am still here, and that matters.",
      "I can be kind without forcing myself to feel better."
    ],
    sections: [
      {
        heading: "How to practice",
        body: [
          "Choose one sentence that feels believable, not impressive. Look at yourself for a few seconds, read the line out loud, and stop before it turns into a performance.",
          "If seeing yourself feels too much today, use no-camera practice mode. The practice still counts when it helps you speak with less harshness."
        ]
      },
      {
        heading: "Why the camera changes the feeling",
        body: [
          "A written affirmation can stay abstract. A mirror practice makes the sentence more direct because you are giving the words to the person in front of you.",
          "The web demo keeps this private. It uses the camera for live preview only and does not record, save, or upload video."
        ]
      }
    ],
    faqs: [
      {
        question: "What are mirror affirmations?",
        answer: "They are short self-talk phrases practiced while looking at yourself, usually in a mirror or camera preview."
      },
      {
        question: "Do mirror affirmations have to feel powerful?",
        answer: "No. They can feel quiet, strange, or simple. The practice is about noticing your own voice."
      },
      {
        question: "Can I use the demo without recording?",
        answer: "Yes. The web demo is no-recording by default."
      }
    ],
    related: ["how-mirror-affirmations-work", "selfie-affirmations", "positive-self-talk"]
  },
  {
    slug: "how-mirror-affirmations-work",
    title: "How Mirror Affirmations Work | Private Self-Talk Practice",
    description:
      "Learn how Mirror Affirmations works as a private browser practice with on-screen prompts, camera preview, and no recording in the web demo.",
    h1: "How Mirror Affirmations Work",
    intro:
      "Mirror Affirmations works by combining three simple pieces: a live camera preview, a short first-person prompt, and a private moment to say the words out loud. The web demo is intentionally practice-only, so you can try the format without creating an account or recording yourself.",
    cta: "Try Mirror Affirmations",
    ctaHref: "/demo",
    category: "bedtime",
    prompts: [
      "I can start with one sentence.",
      "I do not have to make this perfect.",
      "I can look at myself with less pressure.",
      "This can be a private practice.",
      "I can stop when it feels complete.",
      "One honest line is enough for today."
    ],
    sections: [
      {
        heading: "The practice in one minute",
        body: [
          "Open the demo, choose a prompt category, and place the text where it feels comfortable on screen. Then turn on the camera preview if you want a mirror-like experience, or use no-camera mode if that feels easier.",
          "Read the line once or twice. You do not need to believe it instantly. The useful part is noticing whether your voice can become a little less harsh for one short moment."
        ]
      },
      {
        heading: "What the web demo does",
        body: [
          "The demo shows a live camera preview in your browser and keeps the prompt visible over the screen. You can change the prompt category, text size, and prompt position before you practice.",
          "The current web version does not record, save, or upload video. It is a way to test the practice before deciding whether a future local-only video app would be useful."
        ]
      },
      {
        heading: "When to use it",
        body: [
          "Mirror affirmations can fit into ordinary moments: before opening your laptop, after a stressful conversation, before bed, or during a quiet break when your inner voice has become too sharp.",
          "It is not meant to replace support, therapy, or crisis care. It is a small self-care exercise for private reflection."
        ]
      }
    ],
    faqs: [
      {
        question: "Does Mirror Affirmations record me?",
        answer: "No. The web demo uses camera preview only and does not record, save, or upload video."
      },
      {
        question: "Do I need to create an account?",
        answer: "No. You can open the demo and try the practice without signing in."
      },
      {
        question: "Can I use Mirror Affirmations without camera access?",
        answer: "Yes. You can use no-camera practice mode and still read the prompts privately."
      },
      {
        question: "Is Mirror Affirmations therapy?",
        answer: "No. It is a self-care and reflection tool, not a medical, therapy, or crisis service."
      }
    ],
    related: ["mirror-affirmations", "selfie-affirmations", "positive-self-talk"]
  },
  {
    slug: "selfie-affirmations",
    title: "Selfie Affirmations | Practice Positive Self-Talk Privately",
    description:
      "Use a private selfie camera preview to practice gentle affirmations. No posting, no social feed, and no recording in the web demo.",
    h1: "Selfie Affirmations",
    intro:
      "Selfie affirmations use your front camera like a private mirror. You are not taking a selfie to post. You are using the screen to make self-talk feel more direct and personal.",
    cta: "Practice with your camera",
    ctaHref: "/demo?category=self_doubt",
    category: "self_doubt",
    prompts: [
      "I can look at myself without picking myself apart.",
      "This face belongs to someone who is trying.",
      "I do not have to perform being okay.",
      "I can be seen by myself first.",
      "I am allowed to take up this small moment.",
      "I can pause before judging myself.",
      "I can be gentle with the person on this screen.",
      "I do not need to turn this into content."
    ],
    sections: [
      {
        heading: "Private, not performative",
        body: [
          "The word selfie often points toward sharing. This version goes the other way. It gives you a camera preview, a quiet prompt, and a private moment that does not need an audience."
        ]
      },
      {
        heading: "Try one sentence first",
        body: [
          "Start with one line. Put the prompt near the top, center, or bottom of the screen, then read it once. If it feels useful, choose a second prompt."
        ]
      }
    ],
    faqs: [
      {
        question: "Are selfie affirmations meant for social media?",
        answer: "No. This practice is private. The web demo does not post, record, or upload your camera preview."
      },
      {
        question: "Why use a camera instead of a normal mirror?",
        answer: "A phone camera makes the practice easy to try anywhere, while keeping the prompt visible on screen."
      },
      {
        question: "Is microphone access required?",
        answer: "No. The web demo does not request microphone access."
      }
    ],
    related: ["mirror-affirmations", "video-affirmations", "self-love-affirmations"]
  },
  {
    slug: "video-affirmations",
    title: "Video Affirmations | Private Practice Before Recording",
    description:
      "Explore video affirmations with a privacy-first practice demo. The web version is no-recording while the future app may support local-only videos.",
    h1: "Video Affirmations",
    intro:
      "Video affirmations are personal recordings of yourself saying supportive phrases out loud. Mirror Affirmations starts with a safer first step: practice mode without recording, so you can decide whether the format feels right.",
    cta: "Try practice mode",
    ctaHref: "/demo?category=small_wins",
    category: "small_wins",
    prompts: [
      "I showed up, and that matters.",
      "I can let myself feel proud for a second.",
      "This small thing still counts.",
      "I can notice progress without minimizing it.",
      "I did one kind thing for myself today."
    ],
    sections: [
      {
        heading: "Why start without recording",
        body: [
          "Seeing yourself and speaking out loud can already feel vulnerable. Practice mode lets you try the format without creating a saved file.",
          "If the web demo validates real demand, the future app direction is local-only recording and private history on the device."
        ]
      }
    ],
    faqs: [
      {
        question: "Can I record videos in the web demo?",
        answer: "No. The web demo is practice-only."
      },
      {
        question: "Will the future app upload my videos?",
        answer: "The intended direction is local-only storage. Any future cloud feature would require separate consent and privacy review."
      },
      {
        question: "Why start without recording?",
        answer: "Practice mode lets users test whether the experience feels useful before worrying about saved videos."
      }
    ],
    related: ["selfie-affirmations", "mirror-affirmations", "how-mirror-affirmations-work"]
  },
  {
    slug: "bedtime-affirmations",
    title: "Bedtime Affirmations | Gentle Night Self-Talk",
    description:
      "Try gentle bedtime affirmations for a quiet end-of-day self-care routine. Practice privately with a no-recording mirror demo.",
    h1: "Bedtime Affirmations",
    intro:
      "Bedtime affirmations are short, gentle phrases for ending the day with less pressure. They should not demand that you feel better. They should give you permission to stop carrying the whole day at once.",
    cta: "Try tonight's prompt",
    ctaHref: "/demo?category=bedtime",
    category: "bedtime",
    prompts: [
      "I can let today be enough.",
      "I do not have to fix everything tonight.",
      "Rest is allowed before everything is finished.",
      "I can put this day down for now.",
      "I did not have to be perfect to deserve sleep.",
      "I can return to this tomorrow.",
      "My body is allowed to be tired.",
      "I can be soft with myself tonight.",
      "I made it through today.",
      "Nothing else is required from me right now."
    ],
    sections: [
      {
        heading: "A 3-step bedtime routine",
        body: [
          "Choose one line before you get into bed or after the lights are low. Read it out loud once, breathe, then read it again more slowly.",
          "The goal is not to force sleep. It is to end the day with a gentler voice than the one that has been carrying the list."
        ]
      }
    ],
    faqs: [
      {
        question: "Are bedtime affirmations a sleep treatment?",
        answer: "No. They are a self-care routine, not a medical or sleep treatment."
      },
      {
        question: "Should I say them out loud?",
        answer: "If it feels comfortable, yes. Speaking softly can make the practice feel more personal."
      },
      {
        question: "Can I use this without turning on the camera?",
        answer: "Yes. No-camera practice should always remain available."
      }
    ],
    related: ["sleep-affirmations-for-a-calmer-evening", "morning-affirmations-to-say-out-loud", "positive-self-talk"]
  },
  {
    slug: "morning-affirmations-to-say-out-loud",
    title: "Morning Affirmations to Say Out Loud | Mirror Affirmations",
    description:
      "Try gentle morning affirmations to say out loud with a private mirror practice. Start slowly with short prompts and no recording in the web demo.",
    h1: "Morning Affirmations to Say Out Loud",
    intro:
      "Morning affirmations to say out loud work best when they are short, believable, and easy to repeat before the day gets noisy. You are not trying to become instantly confident. You are giving yourself one steady sentence before everything else starts asking for your attention.",
    cta: "Try Mirror Affirmations",
    ctaHref: "/demo?category=morning",
    category: "morning",
    prompts: [
      "I can begin slowly.",
      "I do not have to rush into the day.",
      "I can be on my own side this morning.",
      "One small step is enough to begin.",
      "I can meet today without performing.",
      "I can take a breath before I answer the world.",
      "I am allowed to need a gentle start.",
      "Today can begin quietly."
    ],
    sections: [
      {
        heading: "How to say morning affirmations out loud",
        body: [
          "Choose one line before checking messages, email, or social feeds. Look at yourself for a few seconds, then say the sentence once in a normal voice. If it feels useful, say it again more slowly.",
          "The sentence should feel reachable. If a big affirmation feels fake, make it smaller. A quiet line you can actually say is better than a dramatic line you immediately reject."
        ]
      },
      {
        heading: "Why speaking changes the practice",
        body: [
          "Reading a prompt silently can be helpful, but saying it out loud makes the practice more physical. You hear your own voice, notice your reaction, and give the words to yourself instead of only scanning them.",
          "Using the mirror demo keeps the words visible while you practice. The camera preview stays in your browser, and the web demo does not record or upload video."
        ]
      },
      {
        heading: "A simple morning routine",
        body: [
          "Start with one breath, choose one prompt, say it once, then decide on one small next action. That might be drinking water, opening a notebook, making the bed, or stepping outside for a minute.",
          "The point is not to force a perfect mood. The point is to begin the day without immediately turning against yourself."
        ]
      }
    ],
    faqs: [
      {
        question: "What are good morning affirmations to say out loud?",
        answer: "Good morning affirmations are short, first-person sentences that feel believable, such as 'I can begin slowly' or 'One small step is enough to begin.'"
      },
      {
        question: "Should I say affirmations before looking at my phone?",
        answer: "If you can, yes. A short practice before messages or feeds can help you start with your own voice first."
      },
      {
        question: "Do I need to use the camera?",
        answer: "No. You can use the private mirror preview or practice without camera access."
      },
      {
        question: "Does the demo save my morning practice?",
        answer: "No. The web demo does not record, save, or upload your camera preview."
      }
    ],
    related: ["how-mirror-affirmations-work", "positive-self-talk", "mirror-affirmations"]
  },
  {
    slug: "sleep-affirmations-for-a-calmer-evening",
    title: "Sleep Affirmations for a Calmer Evening | Mirror Affirmations",
    description:
      "Try gentle sleep affirmations for a calmer evening routine. Use short prompts privately with no recording or video upload in the web demo.",
    h1: "Sleep Affirmations for a Calmer Evening",
    intro:
      "Sleep affirmations for a calmer evening are short phrases you can say when the day is ending but your mind is still carrying too much. They are not a sleep treatment. They are a small way to put the day down with a softer voice.",
    cta: "Try Mirror Affirmations",
    ctaHref: "/demo?category=bedtime",
    category: "bedtime",
    prompts: [
      "I can let today be enough.",
      "I do not have to solve this tonight.",
      "My body is allowed to be tired.",
      "I can put the day down for now.",
      "Rest is allowed before everything is finished.",
      "I made it through today.",
      "Nothing else is required from me right now.",
      "I can be soft with myself tonight.",
      "Tomorrow can wait until morning.",
      "I do not need to replay the whole day."
    ],
    sections: [
      {
        heading: "How to use sleep affirmations",
        body: [
          "Choose one prompt when you are getting ready for bed or sitting quietly at the end of the day. Say it out loud once, pause, then say it again with less pressure.",
          "If the word sleep feels too loaded, treat this as an evening self-talk practice. The goal is not to force sleep. The goal is to stop arguing with yourself for one minute."
        ]
      },
      {
        heading: "A calmer evening routine",
        body: [
          "Keep the routine small: dim the screen, choose a gentle line, say it once, and stop. You can use the mirror demo with camera preview or use no-camera mode if you prefer.",
          "Avoid turning the practice into another task to complete perfectly. One sentence is enough."
        ]
      },
      {
        heading: "What to avoid",
        body: [
          "Avoid prompts that shame you for being tired, worried, or awake. A useful sleep affirmation should make the evening feel less demanding, not more demanding.",
          "Mirror Affirmations is a self-care practice tool. It is not medical advice, therapy, or emergency support."
        ]
      }
    ],
    faqs: [
      {
        question: "Are sleep affirmations a sleep treatment?",
        answer: "No. They are a calming self-care routine, not a medical or sleep treatment."
      },
      {
        question: "When should I say sleep affirmations?",
        answer: "Try them near the end of your evening, before bed, after journaling, or when your mind keeps replaying the day."
      },
      {
        question: "Can I say them silently?",
        answer: "Yes. Saying them out loud can feel more personal, but silent practice is fine if that is what feels comfortable."
      },
      {
        question: "Does the demo record or upload anything?",
        answer: "No. The web demo does not record, save, or upload video."
      }
    ],
    related: ["bedtime-affirmations", "morning-affirmations-to-say-out-loud", "how-mirror-affirmations-work"]
  },
  {
    slug: "self-love-affirmations",
    title: "Self Love Affirmations | Gentle Prompts That Do Not Feel Forced",
    description:
      "Read gentle self love affirmations designed for private mirror practice, with no forced positivity and no recording in the web demo.",
    h1: "Self Love Affirmations",
    intro:
      "Self love affirmations work best when they sound believable. You do not have to say the biggest, brightest thing. Sometimes the useful line is simply kinder than the one you were about to say to yourself.",
    cta: "Practice privately",
    ctaHref: "/demo?category=self_doubt",
    category: "self_doubt",
    prompts: [
      "I can be on my own side today.",
      "I do not have to become someone else to be worthy.",
      "I can care for myself in small ways.",
      "I am allowed to be unfinished.",
      "I can stop speaking to myself like an enemy.",
      "I can be patient with this version of me.",
      "I deserve gentleness, even when I struggle.",
      "I can choose one kind sentence right now."
    ],
    sections: [
      {
        heading: "Make the sentence believable",
        body: [
          "If a prompt feels fake, make it smaller. Instead of forcing yourself to say that everything is wonderful, try a line that simply reduces the harshness."
        ]
      }
    ],
    faqs: [
      {
        question: "What if self love affirmations feel fake?",
        answer: "Start with a smaller sentence. The goal is not to force belief, but to practice a gentler tone."
      },
      {
        question: "How often should I practice?",
        answer: "Once a day is enough for validation. Even one sentence can be a complete practice."
      },
      {
        question: "Is this private?",
        answer: "Yes. The web demo does not record or upload video."
      }
    ],
    related: ["selfie-affirmations", "positive-self-talk", "mirror-affirmations"]
  },
  {
    slug: "positive-self-talk",
    title: "Positive Self-Talk Practice | Private Mirror Exercise",
    description:
      "Try a private positive self-talk exercise with short, spoken prompts and a no-recording mirror demo.",
    h1: "Positive Self-Talk Practice",
    intro:
      "Positive self-talk is the practice of changing the way you speak to yourself. It does not have to be loud or overly confident. A useful sentence can be quiet, honest, and repeatable.",
    cta: "Open mirror practice",
    ctaHref: "/demo?category=low_mood",
    category: "low_mood",
    prompts: [
      "I am having a hard moment, and I can still be kind to myself.",
      "I can take one breath before I decide what this means about me.",
      "I do not have to turn this mistake into my identity.",
      "I can try again without attacking myself.",
      "I can choose the next small step."
    ],
    sections: [
      {
        heading: "Use honesty before optimism",
        body: [
          "A useful self-talk line can admit that something is hard. The shift is in how you respond to yourself after naming it.",
          "The mirror practice turns the sentence into something spoken, visible, and harder to rush past."
        ]
      }
    ],
    faqs: [
      {
        question: "Is positive self-talk the same as pretending everything is fine?",
        answer: "No. Good self-talk can acknowledge that something is hard while still choosing a kinder response."
      },
      {
        question: "Why practice with a mirror?",
        answer: "Seeing yourself can make the words feel more direct and less abstract."
      },
      {
        question: "What if I feel awkward?",
        answer: "That is common. Start with one short sentence and stop there."
      }
    ],
    related: ["mirror-affirmations", "bedtime-affirmations", "work-stress-affirmations"]
  },
  {
    slug: "work-stress-affirmations",
    title: "Affirmations for Work Stress | A 60-Second Reset",
    description:
      "Try gentle affirmations for work stress, criticism, or a hard day. Use a private no-recording mirror practice.",
    h1: "Affirmations for Work Stress",
    intro:
      "Work stress affirmations are short phrases you can use after criticism, pressure, or a long day. They are not meant to deny what happened. They help you separate your worth from one difficult moment.",
    cta: "Try a 60-second reset",
    ctaHref: "/demo?category=work_stress",
    category: "work_stress",
    prompts: [
      "One hard day does not define me.",
      "I can leave work voices at work.",
      "Being corrected does not mean I am broken.",
      "I can learn without shaming myself.",
      "I did enough to make it through today.",
      "I can close the laptop and come back to myself.",
      "My worth is not measured by one meeting.",
      "I am allowed to be tired after carrying this much."
    ],
    sections: [
      {
        heading: "Use it after the noise",
        body: [
          "This practice can fit after a hard meeting, after closing a laptop, or before bed when work voices are still replaying.",
          "It is not meant to solve a stressful workplace. It is a short reset for the way you talk to yourself after a hard moment."
        ]
      }
    ],
    faqs: [
      {
        question: "Can affirmations fix work stress?",
        answer: "No single tool can fix a stressful job. This practice is a short reset, not a replacement for support or larger changes."
      },
      {
        question: "When should I use these prompts?",
        answer: "After a hard meeting, before bed, after work, or whenever your inner voice gets harsh."
      },
      {
        question: "Does the demo save anything?",
        answer: "No. The web demo does not record, save, or upload video."
      }
    ],
    related: ["positive-self-talk", "mirror-affirmations", "self-love-affirmations"]
  },
  {
    slug: "mirror-affirmations-for-self-love",
    title: "Mirror Affirmations for Self Love | Gentle Private Practice",
    description:
      "Try mirror affirmations for self love with short, believable prompts, a private camera preview, and no recording in the web demo.",
    h1: "Mirror Affirmations for Self Love",
    intro:
      "Mirror affirmations for self love are short sentences you say while looking at yourself. They work best when they feel believable, grounded, and gentle enough to repeat on an ordinary day.",
    cta: "Try self-love mirror practice",
    ctaHref: "/demo?category=self_doubt",
    category: "self_doubt",
    prompts: [
      "I can be on my own side today.",
      "I do not have to earn kindness from myself.",
      "This version of me deserves patience.",
      "I can look at myself without picking myself apart.",
      "I am allowed to grow without hating where I am.",
      "I can choose one kind sentence right now.",
      "I do not need to become someone else to matter.",
      "I can care for myself in small, real ways.",
      "I can be gentle with the person in front of me.",
      "I am allowed to be unfinished."
    ],
    sections: [
      {
        heading: "What this practice is for",
        body: [
          "Self-love mirror affirmations are not about pretending every insecurity disappears. They are a small practice for changing the tone of the conversation you have with yourself.",
          "A useful prompt should sound like something you could actually say out loud. If a line feels too big, make it smaller until your body stops arguing with it."
        ]
      },
      {
        heading: "A simple self-love mirror routine",
        body: [
          "Stand or sit where you can see your face. Choose one sentence, look at yourself for a few seconds, and say the line once in a normal voice. Pause before choosing another prompt.",
          "If looking directly at yourself feels uncomfortable, soften your gaze or use no-camera mode first. The practice still counts when it helps you speak with less harshness."
        ]
      },
      {
        heading: "Good prompts sound ordinary",
        body: [
          "Many people bounce off self-love content because it sounds too polished. A better starting point is a sentence that leaves room for mixed feelings.",
          "Try prompts like 'I can be patient with this version of me' or 'I can care for myself in small ways.' They do not demand instant confidence, but they interrupt the habit of self-attack."
        ]
      },
      {
        heading: "Private practice matters",
        body: [
          "The web demo is built for private practice. It uses your camera as a live preview only, and it does not record, save, or upload video.",
          "That privacy boundary is important because self-love practice can feel vulnerable. You should not have to turn it into content, performance, or proof."
        ]
      }
    ],
    faqs: [
      {
        question: "What are mirror affirmations for self love?",
        answer: "They are short, first-person self-talk phrases practiced while looking at yourself in a mirror or camera preview."
      },
      {
        question: "What if self-love affirmations feel fake?",
        answer: "Make the line smaller and more believable. Gentle, ordinary wording often works better than dramatic positive statements."
      },
      {
        question: "How many prompts should I say?",
        answer: "One prompt can be enough. The goal is not volume; it is a short moment of kinder self-talk."
      },
      {
        question: "Does the demo record my face?",
        answer: "No. The web demo uses live camera preview only and does not record, save, or upload video."
      }
    ],
    related: ["self-love-affirmations", "self-compassion-affirmations", "mirror-affirmations"]
  },
  {
    slug: "mirror-affirmations-for-anxiety",
    title: "Mirror Affirmations for Anxiety | Gentle Grounding Prompts",
    description:
      "Try gentle mirror affirmations for anxious moments with short grounding prompts, privacy notes, and a no-recording browser demo.",
    h1: "Mirror Affirmations for Anxiety",
    intro:
      "Mirror affirmations for anxiety are not a treatment or a promise that worry will disappear. They are short grounding sentences you can say privately when your thoughts feel loud and your inner voice needs to become less sharp.",
    cta: "Try a grounding prompt",
    ctaHref: "/demo?category=low_mood",
    category: "low_mood",
    prompts: [
      "I can take one breath before I respond.",
      "This is a hard moment, not my whole life.",
      "I do not have to solve everything right now.",
      "I can come back to the next small step.",
      "I am allowed to slow down.",
      "My thoughts are loud, and I can still be gentle.",
      "I can notice this feeling without becoming it.",
      "Right now, one breath is enough.",
      "I can unclench one small part of my body.",
      "I can speak to myself softly while this passes."
    ],
    sections: [
      {
        heading: "Use smaller words when you feel anxious",
        body: [
          "An anxious moment is usually not the best time for huge, shiny affirmations. Big claims can feel fake when your body is already on alert.",
          "Start with grounding language instead. Sentences like 'one breath is enough' or 'this is a hard moment, not my whole life' are easier to say because they do not argue with your experience."
        ]
      },
      {
        heading: "A 60-second mirror practice",
        body: [
          "Choose one short prompt. Look at yourself or at the text on screen. Say the line once, take one breath, and say it again more slowly if it helps.",
          "You can stop after one sentence. A useful practice should reduce pressure, not become another task you feel judged by."
        ]
      },
      {
        heading: "When to skip the camera",
        body: [
          "If seeing your face makes the anxious feeling stronger, use no-camera mode or read the prompt without the preview. Privacy and choice are part of the practice.",
          "Mirror Affirmations is a self-care tool, not medical care. If you feel unsafe, in crisis, or unable to cope, contact local emergency services or a qualified professional."
        ]
      },
      {
        heading: "What makes a good anxiety prompt",
        body: [
          "Good prompts for anxious moments are specific, gentle, and not too ambitious. They should help you locate the next breath or next action rather than force a perfect mindset.",
          "Avoid lines that shame you for worrying. The practice should sound like someone sitting beside you, not someone scolding you."
        ]
      }
    ],
    faqs: [
      {
        question: "Can mirror affirmations cure anxiety?",
        answer: "No. Mirror Affirmations is not therapy, diagnosis, treatment, or crisis support. It is a private self-care practice."
      },
      {
        question: "What should I say when I feel anxious?",
        answer: "Start with a small grounding line, such as 'I can take one breath before I respond' or 'This is a hard moment, not my whole life.'"
      },
      {
        question: "Should I use the camera during anxious moments?",
        answer: "Only if it feels supportive. You can use no-camera mode or stop the practice at any time."
      },
      {
        question: "Does the web demo save my practice?",
        answer: "No. The web demo does not record, save, or upload video, audio, camera frames, or face data."
      }
    ],
    related: ["positive-self-talk-exercises", "how-to-practice-mirror-work", "positive-self-talk"]
  },
  {
    slug: "morning-mirror-affirmations",
    title: "Morning Mirror Affirmations | Start the Day Gently",
    description:
      "Use morning mirror affirmations to begin the day with one steady sentence. Includes examples, routine ideas, and a private no-recording demo.",
    h1: "Morning Mirror Affirmations",
    intro:
      "Morning mirror affirmations are short prompts you say while looking at yourself before the day gets crowded. The practice is small on purpose: one sentence, one breath, one kinder start.",
    cta: "Try morning mirror practice",
    ctaHref: "/demo?category=morning",
    category: "morning",
    prompts: [
      "I can begin slowly.",
      "I am allowed to need a gentle start.",
      "I can be on my own side this morning.",
      "One small step is enough to begin.",
      "I do not have to rush into the day.",
      "I can meet today without performing.",
      "I can take a breath before I answer the world.",
      "Today does not have to be perfect to be worth beginning.",
      "I can choose the first small thing.",
      "I can return to myself before I open the noise."
    ],
    sections: [
      {
        heading: "What to say in the morning",
        body: [
          "Choose a line that helps you start without pressure. Morning prompts should not sound like orders. They should make the first few minutes feel less rushed.",
          "If you usually wake up and reach straight for messages, try saying one prompt before opening any app. It gives your own voice a chance to arrive first."
        ]
      },
      {
        heading: "A tiny morning routine",
        body: [
          "Open the mirror demo, choose the morning category, place the prompt where it is easy to read, and say it once. Then choose one concrete next action.",
          "The next action can be small: drink water, open the curtains, wash your face, write one line, or put your feet on the floor. The affirmation is there to help you begin, not to turn your morning into a project."
        ]
      },
      {
        heading: "Why mirror practice can help the words land",
        body: [
          "When you say a line while seeing yourself, the sentence becomes more direct. It is harder to treat it like random text on a screen.",
          "That can feel awkward at first. Awkward does not mean the practice is wrong. It may simply mean you are not used to hearing your own voice speak kindly to you."
        ]
      },
      {
        heading: "Keep the practice low pressure",
        body: [
          "Do not chase a perfect mood. Some mornings still feel heavy after a prompt, and that is allowed.",
          "A good result can be very small: a slower breath, a softer sentence, or one minute before the day begins pulling on you."
        ]
      }
    ],
    faqs: [
      {
        question: "What are morning mirror affirmations?",
        answer: "They are short self-talk phrases said while looking at yourself in the morning, either in a mirror or with a private camera preview."
      },
      {
        question: "How long should a morning affirmation practice take?",
        answer: "One minute is enough. Choose one prompt, say it once or twice, and move into one small next action."
      },
      {
        question: "Are morning affirmations better out loud?",
        answer: "Saying them out loud can make the practice feel more direct, but silent practice is still useful if that feels safer or easier."
      },
      {
        question: "Does the demo require an account?",
        answer: "No. You can try the private mirror practice without signing in."
      }
    ],
    related: ["morning-affirmations-to-say-out-loud", "affirmations-to-say-to-yourself-in-the-mirror", "mirror-affirmations"]
  },
  {
    slug: "positive-self-talk-exercises",
    title: "Positive Self-Talk Exercises | Gentle Private Practice",
    description:
      "Try simple positive self-talk exercises with short scripts, mirror practice steps, examples, and a private no-recording demo.",
    h1: "Positive Self-Talk Exercises",
    intro:
      "Positive self-talk exercises help you practice a kinder response to yourself. They do not require fake cheerfulness. The best exercises are small, specific, and easy to repeat when your inner voice gets harsh.",
    cta: "Open a self-talk exercise",
    ctaHref: "/demo?category=low_mood",
    category: "low_mood",
    prompts: [
      "I can name what is hard without attacking myself.",
      "I can choose the next kind sentence.",
      "I do not have to turn this mistake into my identity.",
      "I can pause before I believe the harshest thought.",
      "I can try again without shaming myself.",
      "I can be honest and gentle at the same time.",
      "One difficult moment does not define me.",
      "I can take the next small step.",
      "I can speak to myself like someone I care about.",
      "I can let this be practice, not a test."
    ],
    sections: [
      {
        heading: "Exercise 1: Name, soften, choose",
        body: [
          "Name what happened in plain words. Then soften the sentence by removing blame. Finally, choose one next step that is small enough to do.",
          "Example: 'I made a mistake in that email' can become 'I made a mistake, and I can correct it without attacking myself.'"
        ]
      },
      {
        heading: "Exercise 2: Mirror repeat",
        body: [
          "Choose one prompt and say it while looking at yourself. Repeat it once with a normal voice and once more slowly. Notice which words feel hard to say.",
          "The hard words are useful information. You can adjust the prompt until it sounds like something you can actually practice."
        ]
      },
      {
        heading: "Exercise 3: Replace the inner headline",
        body: [
          "When your mind creates a harsh headline like 'I always ruin things,' write a more accurate headline: 'That did not go well, and I can repair one part.'",
          "Positive self-talk is not about denying the problem. It is about refusing to let the harshest version of the story become the only version."
        ]
      },
      {
        heading: "Exercise 4: One-minute close",
        body: [
          "At the end of the day, choose one prompt that acknowledges effort instead of performance. Say it once and stop.",
          "This keeps the exercise realistic. A small practice you repeat is more useful than a dramatic routine you abandon."
        ]
      }
    ],
    faqs: [
      {
        question: "What is a positive self-talk exercise?",
        answer: "It is a short practice for noticing harsh self-talk and replacing it with a kinder, more accurate response."
      },
      {
        question: "Is positive self-talk just pretending?",
        answer: "No. Good self-talk can be honest about what is hard while changing the way you respond to yourself."
      },
      {
        question: "How can I practice positive self-talk out loud?",
        answer: "Choose one short prompt, say it in a normal voice, pause, and repeat it once more slowly."
      },
      {
        question: "Can I use the demo without recording?",
        answer: "Yes. The web demo is no-recording and uses camera preview only if you choose to turn it on."
      }
    ],
    related: ["positive-self-talk", "mirror-affirmations-for-anxiety", "self-compassion-affirmations"]
  },
  {
    slug: "self-compassion-affirmations",
    title: "Self Compassion Affirmations | Kind Prompts for Hard Moments",
    description:
      "Try self compassion affirmations for hard days, mistakes, and self-doubt with gentle examples and a private mirror practice demo.",
    h1: "Self Compassion Affirmations",
    intro:
      "Self compassion affirmations are kind, realistic sentences for moments when you are struggling. They do not excuse everything or force you to feel positive. They help you respond to yourself with less cruelty.",
    cta: "Try a self-compassion prompt",
    ctaHref: "/demo?category=healing_days",
    category: "healing_days",
    prompts: [
      "This is hard, and I can be kind to myself here.",
      "I can be human without turning against myself.",
      "I can learn without punishing myself.",
      "I deserve care while I am still figuring it out.",
      "I can hold this moment gently.",
      "I do not have to earn compassion by doing better first.",
      "I can speak to myself like someone worth caring for.",
      "I am allowed to need time.",
      "I can let one breath be enough for now.",
      "I can be honest without being cruel."
    ],
    sections: [
      {
        heading: "When self compassion is useful",
        body: [
          "Self compassion prompts are especially useful after a mistake, during a low day, or when comparison has made your inner voice sharp.",
          "The goal is not to avoid responsibility. It is to make responsibility possible without adding unnecessary shame."
        ]
      },
      {
        heading: "How to write a compassionate prompt",
        body: [
          "A good prompt usually has two parts: it names the hard thing, then offers kindness. For example: 'This is hard, and I can be kind to myself here.'",
          "That structure works because it does not argue with reality. It simply changes the tone of what comes next."
        ]
      },
      {
        heading: "Mirror practice for self compassion",
        body: [
          "Look at yourself, choose one prompt, and say it slowly. If the line feels too tender, shorten it. Even 'I can be kind here' is enough.",
          "You can also practice without the camera. The web demo keeps this flexible because different days need different levels of closeness."
        ]
      },
      {
        heading: "What to avoid",
        body: [
          "Avoid prompts that secretly blame you, such as lines that imply you should already be healed, grateful, productive, or confident.",
          "Compassionate self-talk should create room. It should not become another standard you fail to meet."
        ]
      }
    ],
    faqs: [
      {
        question: "What are self compassion affirmations?",
        answer: "They are short, kind self-talk phrases that acknowledge a hard moment while reducing shame or self-attack."
      },
      {
        question: "How are self compassion affirmations different from self love affirmations?",
        answer: "Self compassion affirmations are often used during struggle, mistakes, or pain. Self love affirmations can be broader."
      },
      {
        question: "Can I say these in a mirror?",
        answer: "Yes. Mirror practice can make the sentence feel more direct, but you can also practice without camera access."
      },
      {
        question: "Is this therapy?",
        answer: "No. Mirror Affirmations is a private self-care practice and does not replace therapy, medical advice, or crisis care."
      }
    ],
    related: ["mirror-affirmations-for-self-love", "self-love-affirmations", "positive-self-talk-exercises"]
  },
  {
    slug: "how-to-practice-mirror-work",
    title: "How to Practice Mirror Work | Gentle Beginner Guide",
    description:
      "Learn how to practice mirror work gently with short steps, beginner prompts, privacy boundaries, and a no-recording mirror demo.",
    h1: "How to Practice Mirror Work",
    intro:
      "Mirror work is the practice of looking at yourself while speaking with more honesty and care. For beginners, the safest version is simple: one short prompt, one private moment, and no pressure to perform a breakthrough.",
    cta: "Try mirror work privately",
    ctaHref: "/demo",
    category: "bedtime",
    prompts: [
      "I can start with one sentence.",
      "I do not have to make this perfect.",
      "I can look at myself with less pressure.",
      "I can stop when it feels complete.",
      "This can be private and small.",
      "I can be honest without being cruel.",
      "I can let this feel awkward and still continue.",
      "One gentle line is enough for today.",
      "I can meet myself where I am.",
      "I can come back to this slowly."
    ],
    sections: [
      {
        heading: "Step 1: Choose a believable prompt",
        body: [
          "Start with a sentence that does not create a fight inside you. If 'I love myself completely' feels unreachable, try 'I can be less harsh with myself for one minute.'",
          "Believable prompts are easier to repeat, and repetition matters more than intensity."
        ]
      },
      {
        heading: "Step 2: Set a short time limit",
        body: [
          "A beginner mirror work session can be 30 to 60 seconds. You do not need a long routine to learn whether the practice feels useful.",
          "Short sessions also reduce pressure. You are building familiarity with seeing yourself and hearing your own voice, not performing a perfect ritual."
        ]
      },
      {
        heading: "Step 3: Use camera preview only if it helps",
        body: [
          "The Mirror Affirmations demo lets you use a live camera preview like a mirror, but it also supports no-camera practice. Choose the version that feels kinder today.",
          "The web demo does not record, save, or upload video. This keeps the practice private while you test whether mirror work is for you."
        ]
      },
      {
        heading: "Step 4: End before it becomes pressure",
        body: [
          "Stop after one or two prompts. Notice how the words felt, then move on. A good practice leaves you with a little more space, not a new assignment.",
          "If mirror work brings up feelings that feel too intense, pause and seek appropriate support. This website is not therapy or crisis care."
        ]
      }
    ],
    faqs: [
      {
        question: "What is mirror work?",
        answer: "Mirror work is a self-reflection practice where you look at yourself while saying short, intentional phrases out loud."
      },
      {
        question: "How do beginners practice mirror work?",
        answer: "Start with one believable prompt, keep the session under one minute, and stop before it turns into pressure."
      },
      {
        question: "Do I have to look directly into my eyes?",
        answer: "No. You can soften your gaze, look near your face, or use no-camera mode if direct eye contact feels too intense."
      },
      {
        question: "Does Mirror Affirmations record mirror work sessions?",
        answer: "No. The web demo is practice-only and does not record, save, or upload video."
      }
    ],
    related: ["how-mirror-affirmations-work", "mirror-affirmations", "affirmations-to-say-to-yourself-in-the-mirror"]
  },
  {
    slug: "affirmations-to-say-to-yourself-in-the-mirror",
    title: "Affirmations to Say to Yourself in the Mirror | Examples",
    description:
      "Find gentle affirmations to say to yourself in the mirror, with examples for morning, bedtime, self-doubt, work stress, and private practice.",
    h1: "Affirmations to Say to Yourself in the Mirror",
    intro:
      "The best affirmations to say to yourself in the mirror are short, honest, and easy to speak out loud. They should feel like a sentence you can offer yourself, not a slogan you have to perform.",
    cta: "Try these prompts in the demo",
    ctaHref: "/demo",
    category: "self_doubt",
    prompts: [
      "I can be gentle with myself today.",
      "I am allowed to start again.",
      "One hard moment does not define me.",
      "I can take the next small step.",
      "I do not have to earn rest.",
      "I can be honest without being cruel.",
      "I can meet myself where I am.",
      "I am still here, and that matters.",
      "I can let this day be enough.",
      "I can speak to myself like someone I care about."
    ],
    sections: [
      {
        heading: "Mirror affirmations for the morning",
        body: [
          "Use morning lines that help you begin without pressure: 'I can begin slowly,' 'One small step is enough,' or 'I can be on my own side this morning.'",
          "Say one line before checking messages. This helps the practice stay simple and prevents it from becoming another item on your list."
        ]
      },
      {
        heading: "Mirror affirmations for self-doubt",
        body: [
          "When self-doubt is loud, avoid exaggerated confidence claims. Try: 'I am allowed to be unfinished,' 'I can learn without shaming myself,' or 'I do not have to become someone else to matter.'",
          "These lines work because they make room for growth without insulting the version of you who is here now."
        ]
      },
      {
        heading: "Mirror affirmations for a hard work day",
        body: [
          "After work stress, try separating your worth from one moment: 'One hard day does not define me,' 'Being corrected does not mean I am broken,' or 'I can leave work voices at work.'",
          "The goal is not to erase what happened. It is to stop carrying the harshest interpretation into the rest of your day."
        ]
      },
      {
        heading: "Mirror affirmations for bedtime",
        body: [
          "At night, choose prompts that let the day end: 'I can put this day down for now,' 'Rest is allowed before everything is finished,' or 'Nothing else is required from me right now.'",
          "Bedtime prompts should reduce pressure. If a line feels demanding, choose a softer one."
        ]
      },
      {
        heading: "How to make any affirmation easier to say",
        body: [
          "Use first-person language, keep the sentence short, and avoid words that feel fake in your mouth. The more ordinary the sentence sounds, the easier it is to repeat.",
          "You can practice with the browser mirror demo or without camera access. The web demo does not record, save, or upload video."
        ]
      }
    ],
    faqs: [
      {
        question: "What should I say to myself in the mirror?",
        answer: "Start with one short, believable line, such as 'I can be gentle with myself today' or 'One hard moment does not define me.'"
      },
      {
        question: "How many mirror affirmations should I say?",
        answer: "One to three is enough. A short practice is easier to repeat and less likely to feel forced."
      },
      {
        question: "Should affirmations be first person?",
        answer: "First-person prompts often feel more direct for mirror practice because you are speaking to yourself in your own voice."
      },
      {
        question: "Can I use these prompts privately online?",
        answer: "Yes. Mirror Affirmations offers a private browser demo with no recording or video upload."
      }
    ],
    related: ["morning-mirror-affirmations", "bedtime-affirmations", "work-stress-affirmations"]
  }
];

export function getArticle(slug: string) {
  return articlePages.find((page) => page.slug === slug);
}
