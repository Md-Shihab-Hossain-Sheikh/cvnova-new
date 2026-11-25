import Link from "next/link";
import { FileText } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <FileText className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">CVNova</span>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-gray-600 hover:text-blue-600 font-medium">Home</Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600 font-medium">About</Link>
            <Link href="/blog" className="text-gray-600 hover:text-blue-600 font-medium">Blog</Link>
            <Link href="/faq" className="text-gray-600 hover:text-blue-600 font-medium">FAQ</Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600 font-medium">Contact</Link>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
              Go to Dashboard
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}