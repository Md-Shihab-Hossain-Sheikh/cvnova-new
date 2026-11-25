import Link from "next/link";
import { Facebook, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-12 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <span className="text-xl font-bold text-gray-900 mb-4 block">CVNova</span>
            <p className="text-gray-500 text-sm max-w-sm">
              Create professional, ATS-friendly resumes with the power of AI. Land your dream job faster.
            </p>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><Link href="/terms" className="text-sm text-gray-500 hover:text-blue-600">Terms of Service</Link></li>
              <li><Link href="/cookies" className="text-sm text-gray-500 hover:text-blue-600">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Contact Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Connect</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:mdshihabshak62@gmail.com" className="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600">
                  <Mail size={16} /> Email Us
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/Shihab20811" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600">
                  <Facebook size={16} /> Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-200 pt-8 flex justify-center">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} CVNova. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}