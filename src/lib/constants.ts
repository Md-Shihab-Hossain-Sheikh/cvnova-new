
export const APP_NAME = "CVNova";

export const APP_DESCRIPTION =
  "Build professional, ATS-friendly resumes with AI-powered tools.";

export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

export const ROUTES = {
  home: "/",
  features: "/features",
  templates: "/templates",
  pricing: "/pricing",
  about: "/about",
  contact: "/contact",
  faq: "/faq",
  login: "/login",
  register: "/register",
  dashboard: "/dashboard",
  resumes: "/dashboard/resumes",
  builder: "/builder",
} as const;

export const BRAND_COLORS = {
  primary: "#6366F1",
  primaryHover: "#4F46E5",
  secondary: "#3B82F6",
  violet: "#8B5CF6",
  background: "#F9FAFB",
  surface: "#FFFFFF",
  foreground: "#111827",
  muted: "#6B7280",
  border: "#E5E7EB",
} as const;

export const TEMPLATE_CATEGORIES = [
  "Modern",
  "Professional",
  "Minimal",
  "Creative",
  "Executive",
  "Student",
  "Academic",
  "ATS-Friendly",
] as const;

export const RESUME_SECTIONS = [
  "Personal Information",
  "Professional Summary",
  "Work Experience",
  "Education",
  "Skills",
  "Projects",
  "Certifications",
  "Languages",
  "Awards and Achievements",
  "Volunteer Experience",
  "Publications",
  "Interests",
  "References",
  "Custom Sections",
] as const;
