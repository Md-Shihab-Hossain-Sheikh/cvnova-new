import type { ResumeTemplate } from "@/templates/types";
import TemplateCard from "@/components/templates/template-card";

export default function TemplateGrid({ items }: { items: ResumeTemplate[] }) {
  if (items.length === 0) {
    return <p className="rounded-xl border border-dashed border-gray-300 p-8 text-center text-gray-600">No templates found.</p>;
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((template) => (
        <TemplateCard key={template.slug} template={template} />
      ))}
    </div>
  );
}
