import Link from "next/link";

const navLinks = [
  { label: "Features", href: "/features" },
  { label: "Templates", href: "/templates" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/95 backdrop-blur-xl">
      <div className="container-page flex h-18 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5" aria-label="CVNova home">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 via-violet-600 to-blue-600 text-lg font-extrabold text-white shadow-lg">
            C
          </span>
          <span className="text-xl font-extrabold tracking-tight text-gray-950">
            CVNova<span className="text-indigo-600">.</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition hover:text-indigo-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Link href="/login" className="text-sm font-semibold text-gray-700 hover:text-indigo-600">
            Log in
          </Link>
          <Link
            href="/builder"
            className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700"
          >
            Build my resume <span aria-hidden="true">→</span>
          </Link>
        </div>

        <details className="relative md:hidden">
          <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-lg border border-gray-200 text-xl text-gray-700">
            <span aria-hidden="true">☰</span>
            <span className="sr-only">Toggle navigation menu</span>
          </summary>
          <nav
            className="absolute right-0 top-14 flex w-64 flex-col gap-1 rounded-2xl border border-gray-200 bg-white p-3 shadow-xl"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-700"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/login" className="rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-indigo-50">
              Log in
            </Link>
            <Link href="/builder" className="mt-1 rounded-lg bg-indigo-600 px-4 py-3 text-center text-sm font-semibold text-white">
              Build my resume →
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
