import Link from "next/link";
import { TEMPLATE_CATEGORIES } from "@/lib/constants";

export default function TemplateFilter({ active }: { active?: string }) {
  return (
    <nav aria-label="Template categories" className="mb-8 flex flex-wrap gap-2">
      <Link
        href="/templates"
        className={`rounded-full border px-4 py-2 text-sm font-semibold ${!active ? "border-indigo-600 bg-indigo-600 text-white" : "border-gray-200 bg-white text-gray-600 hover:border-indigo-300"}`}
      >
        All
      </Link>
      {TEMPLATE_CATEGORIES.map((category) => (
        <Link
          key={category}
          href={`/templates?category=${encodeURIComponent(category)}`}
          className={`rounded-full border px-4 py-2 text-sm font-semibold ${active === category ? "border-indigo-600 bg-indigo-600 text-white" : "border-gray-200 bg-white text-gray-600 hover:border-indigo-300"}`}
        >
          {category}
        </Link>
      ))}
    </nav>
  );
}
