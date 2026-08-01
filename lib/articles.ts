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
  }
];

export function getArticle(slug: string) {
  return articlePages.find((page) => page.slug === slug);
}
