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
    related: ["selfie-affirmations", "bedtime-affirmations", "positive-self-talk"]
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
    related: ["selfie-affirmations", "mirror-affirmations", "small-wins"]
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
    related: ["mirror-affirmations", "positive-self-talk", "healing-days"]
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
