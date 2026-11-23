
import type { Metadata, Viewport } from "next";
import "./globals.css";

const appUrl =
  process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: {
    default: "CVNova — AI Resume Builder",
    template: "%s | CVNova",
  },
  description:
    "Build professional, ATS-friendly resumes with CVNova.",
  applicationName: "CVNova",
  metadataBase: new URL(appUrl),
  openGraph: {
    title: "CVNova — AI Resume Builder",
    description:
      "Create professional resumes with modern templates and AI-powered tools.",
    siteName: "CVNova",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#6366F1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
