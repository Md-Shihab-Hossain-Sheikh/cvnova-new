import type { Metadata } from "next";
import SiteShell from "@/components/layout/site-shell";
import PageHero from "@/components/marketing/page-hero";
import TemplateGrid from "@/components/templates/template-grid";
import TemplateFilter from "@/components/templates/template-filter";
import { templates } from "@/templates/registry";

export const metadata: Metadata = {
  title: "Resume Templates",
  description: "Browse CVNova resume template concepts and layouts.",
};

type Props = {
  searchParams: Promise<{ category?: string }>;
};

export default async function TemplatesPage({ searchParams }: Props) {
  const params = await searchParams;
  const category = params.category;
  const filtered = category
    ? templates.filter((template) => template.tags.includes(category) || template.category === category)
    : templates;

  return (
    <SiteShell>
      <PageHero eyebrow="Template gallery" title="Find your resume layout" description="Browse the CVNova template collection. These are layout previews and do not imply that every export feature is already available." />
      <section className="section-padding">
        <div className="container-page">
          <TemplateFilter active={category} />
          <p className="mb-6 text-sm text-gray-500">{filtered.length} template concepts</p>
          <TemplateGrid items={filtered} />
        </div>
      </section>
    </SiteShell>
  );
}
