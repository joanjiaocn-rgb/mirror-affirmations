import rawPrompts from "@/data/prompt-library-v0.json";

export type PromptCategory =
  | "bedtime"
  | "morning"
  | "work_stress"
  | "low_mood"
  | "self_doubt"
  | "small_wins"
  | "healing_days";

export type Prompt = {
  id: string;
  category: PromptCategory;
  text: string;
  tags: string[];
};

export const prompts = rawPrompts as Prompt[];

export const categories: Array<{
  id: PromptCategory;
  label: string;
  shortLabel: string;
  description: string;
  sample: string;
}> = [
  {
    id: "bedtime",
    label: "Bedtime",
    shortLabel: "Bedtime",
    description: "For the part of you that needs the day to end softly.",
    sample: "I can let today be enough."
  },
  {
    id: "morning",
    label: "Morning",
    shortLabel: "Morning",
    description: "For starting slowly before the world asks for anything.",
    sample: "I can begin slowly."
  },
  {
    id: "work_stress",
    label: "Work stress",
    shortLabel: "Work",
    description: "For leaving criticism, pressure, and unfinished tasks at the door.",
    sample: "One hard day does not define me."
  },
  {
    id: "low_mood",
    label: "Low mood",
    shortLabel: "Low mood",
    description: "For the days when pretending to be fine takes too much energy.",
    sample: "I do not have to pretend I am fine."
  },
  {
    id: "self_doubt",
    label: "Self-doubt",
    shortLabel: "Doubt",
    description: "For speaking kindly to yourself when comparison gets loud.",
    sample: "I am allowed to be unfinished."
  },
  {
    id: "small_wins",
    label: "Small wins",
    shortLabel: "Wins",
    description: "For noticing the tiny things that still count.",
    sample: "This small thing still counts."
  },
  {
    id: "healing_days",
    label: "Healing days",
    shortLabel: "Healing",
    description: "For being gentle with your body and your timeline.",
    sample: "I do not have to rush my repair."
  }
];

export function getPromptsByCategory(category: PromptCategory) {
  return prompts.filter((prompt) => prompt.category === category);
}

export function getCategory(category: PromptCategory) {
  return categories.find((item) => item.id === category) || categories[0];
}
