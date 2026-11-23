import Link from "next/link";
import { templates } from "@/templates/registry";
import TemplateGrid from "@/components/templates/template-grid";

export default function TemplateShowcase() {
  return (
    <section id="templates" className="section-padding bg-gray-50">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="text-sm font-bold uppercase tracking-widest text-indigo-600">Templates</span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl">
              A layout for every career story
            </h2>
            <p className="mt-5 leading-7 text-gray-600">
              Explore the current CVNova template concepts and choose a structure that suits your content.
            </p>
          </div>
          <Link href="/templates" className="font-semibold text-indigo-600 hover:text-indigo-800">
            Browse all templates →
          </Link>
        </div>
        <div className="mt-10">
          <TemplateGrid items={templates.slice(0, 3)} />
        </div>
      </div>
    </section>
  );
}
