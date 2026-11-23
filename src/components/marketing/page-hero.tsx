import type { ReactNode } from "react";
import Breadcrumbs from "@/components/layout/breadcrumbs";

type Props = {
  eyebrow?: string;
  title: string;
  description: string;
  breadcrumbs?: { label: string; href?: string }[];
  children?: ReactNode;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs = [],
  children,
}: Props) {
  return (
    <section className="relative overflow-hidden border-b border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      <div className="container-page relative py-16 sm:py-20">
        {breadcrumbs.length > 0 && <Breadcrumbs items={breadcrumbs} />}
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && (
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">{eyebrow}</p>
          )}
          <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-gray-950 sm:text-5xl">
            {title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
            {description}
          </p>
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
}
