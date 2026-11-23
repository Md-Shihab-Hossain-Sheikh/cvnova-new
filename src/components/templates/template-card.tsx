import Link from "next/link";
import type { ResumeTemplate } from "@/templates/types";

export default function TemplateCard({ template }: { template: ResumeTemplate }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-xl">
      <div className="bg-gray-100 p-5 sm:p-7">
        <div className="mx-auto aspect-[0.76] max-w-[230px] overflow-hidden rounded-md bg-white p-4 shadow-lg">
          <div className="flex h-full flex-col gap-3">
            <div className="flex gap-3">
              {template.layout === "sidebar" && (
                <div className="w-[30%] rounded-sm p-2" style={{ backgroundColor: template.accent }}>
                  <div className="h-7 w-7 rounded-full bg-white/40" />
                  <div className="mt-4 h-1 w-full rounded bg-white/80" />
                  <div className="mt-2 h-1 w-4/5 rounded bg-white/50" />
                  <div className="mt-5 h-1 w-full rounded bg-white/70" />
                  <div className="mt-2 h-1 w-3/4 rounded bg-white/50" />
                </div>
              )}
              <div className="flex-1 pt-1">
                <div className="h-2.5 w-3/4 rounded" style={{ backgroundColor: template.accent }} />
                <div className="mt-2 h-1 w-1/2 rounded bg-gray-300" />
                <div className="mt-5 h-1 w-full rounded bg-gray-200" />
                <div className="mt-2 h-1 w-11/12 rounded bg-gray-200" />
                <div className="mt-2 h-1 w-4/5 rounded bg-gray-200" />
                <div className="mt-5 h-1.5 w-2/3 rounded" style={{ backgroundColor: template.accent }} />
                <div className="mt-3 h-1 w-full rounded bg-gray-200" />
                <div className="mt-2 h-1 w-10/12 rounded bg-gray-200" />
                <div className="mt-2 h-1 w-4/5 rounded bg-gray-200" />
              </div>
            </div>
            <div className="mt-2 space-y-2">
              <div className="h-1.5 w-1/2 rounded" style={{ backgroundColor: template.accent }} />
              <div className="h-1 w-full rounded bg-gray-200" />
              <div className="h-1 w-5/6 rounded bg-gray-200" />
              <div className="h-1 w-4/6 rounded bg-gray-200" />
            </div>
          </div>
        </div>
      </div>

      <div className="p-5">
        <div className="flex flex-wrap gap-2">
          {template.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-700">
              {tag}
            </span>
          ))}
        </div>
        <h2 className="mt-3 text-lg font-bold text-gray-900">{template.name}</h2>
        <p className="mt-2 min-h-12 text-sm leading-6 text-gray-600">{template.description}</p>
        <Link
          href={`/templates/${template.slug}`}
          className="mt-5 inline-flex font-semibold text-indigo-600 hover:text-indigo-800"
        >
          View template <span className="ml-2" aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
