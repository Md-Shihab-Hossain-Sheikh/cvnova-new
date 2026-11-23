import Link from "next/link";

const groups = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Templates", href: "/templates" },
      { label: "Pricing", href: "/pricing" },
      { label: "How it works", href: "/#how-it-works" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "FAQ", href: "/faq" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Cookies", href: "/cookies" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="container-page py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-lg font-extrabold">
                C
              </span>
              <span className="text-xl font-extrabold">CVNova<span className="text-indigo-400">.</span></span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Organize your professional story and prepare for your next opportunity with a clear, polished resume.
            </p>
          </div>

          {groups.map((group) => (
            <div key={group.title}>
              <h2 className="font-bold">{group.title}</h2>
              <ul className="mt-5 space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-slate-400 transition hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/10 pt-7 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} CVNova. All rights reserved.</p>
          <p>Built to help you move forward.</p>
        </div>
      </div>
    </footer>
  );
}
