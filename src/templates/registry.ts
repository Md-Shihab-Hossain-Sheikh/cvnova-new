import type { ResumeTemplate } from "@/templates/types";

export const templates: ResumeTemplate[] = [
  {
    slug: "modern-professional",
    name: "Modern Professional",
    category: "Modern",
    description: "A balanced layout for contemporary professional applications.",
    accent: "#4f46e5",
    layout: "sidebar",
    tags: ["Modern", "Professional"],
  },
  {
    slug: "classic-executive",
    name: "Classic Executive",
    category: "Executive",
    description: "A structured traditional layout for experienced professionals.",
    accent: "#334155",
    layout: "classic",
    tags: ["Executive", "Professional"],
  },
  {
    slug: "minimal-clean",
    name: "Minimal Clean",
    category: "Minimal",
    description: "A simple, readable layout with a focus on content.",
    accent: "#0f766e",
    layout: "minimal",
    tags: ["Minimal", "ATS-Friendly"],
  },
  {
    slug: "creative-profile",
    name: "Creative Profile",
    category: "Creative",
    description: "A distinctive visual direction for creative portfolios.",
    accent: "#9333ea",
    layout: "sidebar",
    tags: ["Creative", "Modern"],
  },
  {
    slug: "student-starter",
    name: "Student Starter",
    category: "Student",
    description: "A clear structure for education, projects, and early experience.",
    accent: "#2563eb",
    layout: "classic",
    tags: ["Student", "Academic"],
  },
  {
    slug: "simple-ats",
    name: "Simple ATS",
    category: "ATS-Friendly",
    description: "A straightforward single-column resume structure.",
    accent: "#475569",
    layout: "minimal",
    tags: ["ATS-Friendly", "Minimal"],
  },
];

export function getTemplateBySlug(slug: string) {
  return templates.find((template) => template.slug === slug);
}
