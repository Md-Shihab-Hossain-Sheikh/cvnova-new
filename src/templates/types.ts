export type ResumeTemplate = {
  slug: string;
  name: string;
  category: string;
  description: string;
  accent: string;
  layout: "sidebar" | "classic" | "minimal";
  tags: string[];
};
