import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
        <li><Link href="/" className="hover:text-indigo-600">Home</Link></li>
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-2">
            <span aria-hidden="true">/</span>
            {item.href ? (
              <Link href={item.href} className="hover:text-indigo-600">{item.label}</Link>
            ) : (
              <span aria-current="page" className="font-medium text-gray-900">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
