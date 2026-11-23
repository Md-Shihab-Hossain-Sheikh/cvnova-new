import type { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/components/layout/site-shell";
import PageHero from "@/components/marketing/page-hero";

export const metadata: Metadata = {
  title: "Features",
  description: "Explore the planned and available CVNova resume-building features.",
};

const features = [
  ["Resume editor", "Organize your personal details, experience, education, skills, and projects in a structured workflow."],
  ["Template gallery", "Explore different resume layout concepts for professional, student, and creative profiles."],
  ["Writing assistance", "AI-assisted writing tools are part of the planned product direction and will be described as available only after implementation."],
  ["Resume preview", "Review the visual structure of your resume as you prepare your content."],
  ["PDF workflow", "PDF export is part of the planned workflow; availability depends on implementation and testing."],
  ["Responsive experience", "Use the public website across mobile, tablet, and desktop screen sizes."],
];

export default function FeaturesPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="CVNova features" title="Tools for a clearer career story" description="Explore the product areas CVNova is designed around. Planned capabilities are clearly distinguished from features that are not yet connected." />
      <section className="section-padding">
        <div className="container-page grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(([title, description], index) => (
            <article key={title} className="rounded-2xl border border-gray-200 bg-white p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 font-bold text-indigo-700">{String(index + 1).padStart(2, "0")}</span>
              <h2 className="mt-5 text-xl font-bold text-gray-950">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-gray-600">{description}</p>
            </article>
          ))}
        </div>
        <div className="container-page mt-10 text-center">
          <Link href="/templates" className="inline-flex rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700">Explore templates →</Link>
        </div>
      </section>
    </SiteShell>
  );
}
