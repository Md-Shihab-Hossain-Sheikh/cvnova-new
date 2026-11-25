
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronDown,
  FileText,
  Sparkles,
  Target,
  Zap,
  ShieldCheck,
  LayoutTemplate,
  Download,
  WandSparkles,
  Menu,
  Star,
  Globe,
  BrainCircuit,
  BriefcaseBusiness,
  GraduationCap,
  ChartNoAxesCombined,
  CircleCheck,
  FileCheck,
  Rocket,
  Clock3,
  Users,
  BadgeCheck,
  Play,
} from "lucide-react";

const features = [
  {
    icon: BrainCircuit,
    title: "AI Resume Writing",
    description:
      "Create professional resume content with AI-powered writing suggestions tailored to your career.",
    color: "bg-violet-100 text-violet-700",
  },
  {
    icon: Target,
    title: "ATS Score Checker",
    description:
      "Analyze your resume and discover opportunities to improve its ATS compatibility.",
    color: "bg-blue-100 text-blue-700",
  },
  {
    icon: LayoutTemplate,
    title: "Professional Templates",
    description:
      "Choose from professionally designed resume templates for different career paths.",
    color: "bg-orange-100 text-orange-700",
  },
  {
    icon: Download,
    title: "PDF Export",
    description:
      "Prepare a polished resume document that you can download and share.",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    icon: WandSparkles,
    title: "AI Improvements",
    description:
      "Improve your experience descriptions, summaries, and professional wording.",
    color: "bg-pink-100 text-pink-700",
  },
  {
    icon: ShieldCheck,
    title: "Secure Workspace",
    description:
      "Keep your resume-building experience organized with an account-based workspace.",
    color: "bg-cyan-100 text-cyan-700",
  },
];

const steps = [
  {
    number: "01",
    title: "Choose a Template",
    description:
      "Select a professional design that matches your career and personal style.",
    icon: LayoutTemplate,
  },
  {
    number: "02",
    title: "Add Your Information",
    description:
      "Enter your experience, education, skills, and other important details.",
    icon: FileText,
  },
  {
    number: "03",
    title: "Improve with AI",
    description:
      "Use AI-powered suggestions to improve your resume content.",
    icon: Sparkles,
  },
  {
    number: "04",
    title: "Download Your Resume",
    description:
      "Review your final resume and prepare it for downloading.",
    icon: Download,
  },
];

const templates = [
  {
    name: "Modern Professional",
    category: "Professional",
    style: "border-t-4 border-blue-600",
    accent: "bg-blue-600",
  },
  {
    name: "Executive Classic",
    category: "Corporate",
    style: "border-t-4 border-slate-700",
    accent: "bg-slate-700",
  },
  {
    name: "Creative Portfolio",
    category: "Creative",
    style: "border-t-4 border-violet-600",
    accent: "bg-violet-600",
  },
];

const faqs = [
  {
    question: "What is CVNova?",
    answer:
      "CVNova is a resume-building platform designed to help users create professional resumes using templates and AI-powered assistance.",
  },
  {
    question: "Can I create a resume for free?",
    answer:
      "CVNova is planned to offer a free plan with essential resume-building features. Available features may change as the platform develops.",
  },
  {
    question: "What is an ATS-friendly resume?",
    answer:
      "An ATS-friendly resume uses clear formatting, readable sections, and relevant keywords to make it easier for applicant tracking systems to process.",
  },
  {
    question: "Can I download my resume as a PDF?",
    answer:
      "PDF export is part of the planned CVNova experience. Download availability depends on the features enabled in your version.",
  },
  {
    question: "Do I need design skills?",
    answer:
      "No. You can start with a ready-made template and add your information without needing professional design experience.",
  },
];

function ResumePreview() {
  return (
    <div className="relative mx-auto w-full max-w-[490px]">
      <div className="absolute -left-8 top-20 h-40 w-40 rounded-full bg-violet-300/40 blur-3xl" />
      <div className="absolute -right-8 bottom-10 h-40 w-40 rounded-full bg-blue-300/40 blur-3xl" />

      <div className="relative rotate-1 rounded-2xl border border-white/80 bg-white p-5 shadow-2xl sm:p-7">
        <div className="flex items-start justify-between gap-3 border-b border-slate-200 pb-5">
          <div>
            <div className="text-xl font-extrabold tracking-wide text-slate-900">
              ALEX MORGAN
            </div>
            <div className="mt-1 text-xs font-semibold text-blue-600">
              PRODUCT DESIGNER
            </div>
            <div className="mt-3 text-[10px] text-slate-500">
              alex@email.com · New York, USA
            </div>
          </div>
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <FileText size={28} />
          </div>
        </div>

        <div className="mt-5 grid grid-cols-[1.5fr_1fr] gap-5">
          <div className="space-y-5">
            <div>
              <div className="mb-2 text-[10px] font-extrabold tracking-widest text-slate-800">
                PROFILE
              </div>
              <div className="space-y-1.5">
                <div className="h-1.5 w-full rounded bg-slate-200" />
                <div className="h-1.5 w-full rounded bg-slate-200" />
                <div className="h-1.5 w-4/5 rounded bg-slate-200" />
              </div>
            </div>

            <div>
              <div className="mb-3 text-[10px] font-extrabold tracking-widest text-slate-800">
                EXPERIENCE
              </div>
              <div className="mb-3">
                <div className="text-[10px] font-bold text-slate-800">
                  Senior Product Designer
                </div>
                <div className="mt-1 text-[9px] text-blue-600">
                  Creative Studio · 2022 - Present
                </div>
                <div className="mt-2 space-y-1">
                  <div className="h-1 w-full rounded bg-slate-200" />
                  <div className="h-1 w-11/12 rounded bg-slate-200" />
                </div>
              </div>
              <div>
                <div className="text-[10px] font-bold text-slate-800">
                  UI/UX Designer
                </div>
                <div className="mt-1 text-[9px] text-blue-600">
                  Digital Agency · 2020 - 2022
                </div>
                <div className="mt-2 space-y-1">
                  <div className="h-1 w-full rounded bg-slate-200" />
                  <div className="h-1 w-4/5 rounded bg-slate-200" />
                </div>
              </div>
            </div>

            <div>
              <div className="mb-2 text-[10px] font-extrabold tracking-widest text-slate-800">
                EDUCATION
              </div>
              <div className="text-[10px] font-bold text-slate-800">
                Bachelor of Design
              </div>
              <div className="mt-1 text-[9px] text-slate-500">
                University of Technology
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div>
              <div className="mb-2 text-[10px] font-extrabold tracking-widest text-slate-800">
                SKILLS
              </div>
              {["UI Design", "Figma", "Prototyping", "Research"].map(
                (skill) => (
                  <div
                    key={skill}
                    className="mb-2 rounded-md bg-blue-50 px-2 py-1.5 text-[9px] font-medium text-blue-700"
                  >
                    {skill}
                  </div>
                )
              )}
            </div>

            <div>
              <div className="mb-2 text-[10px] font-extrabold tracking-widest text-slate-800">
                LANGUAGES
              </div>
              <div className="text-[9px] text-slate-600">English</div>
              <div className="mt-1 h-1 rounded-full bg-slate-100">
                <div className="h-1 w-full rounded-full bg-blue-600" />
              </div>
              <div className="mt-3 text-[9px] text-slate-600">Spanish</div>
              <div className="mt-1 h-1 rounded-full bg-slate-100">
                <div className="h-1 w-3/5 rounded-full bg-blue-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-3">
          <span className="text-[9px] font-medium text-slate-400">
            CREATED WITH CVNOVA
          </span>
          <span className="rounded-full bg-emerald-50 px-2 py-1 text-[9px] font-bold text-emerald-600">
            READY TO REVIEW
          </span>
        </div>
      </div>

      <div className="absolute -bottom-5 -left-5 hidden items-center gap-2 rounded-xl border border-slate-100 bg-white p-3 shadow-xl sm:flex">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-100 text-violet-700">
          <Sparkles size={18} />
        </div>
        <div>
          <div className="text-xs font-bold text-slate-900">AI Assistant</div>
          <div className="text-[10px] text-slate-500">Writing support</div>
        </div>
      </div>

      <div className="absolute -right-4 top-12 hidden items-center gap-2 rounded-xl border border-slate-100 bg-white p-3 shadow-xl sm:flex">
        <CircleCheck className="text-emerald-500" size={20} />
        <div>
          <div className="text-xs font-bold text-slate-900">ATS Analysis</div>
          <div className="text-[10px] text-slate-500">Preview feature</div>
        </div>
      </div>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-700">
        <Sparkles size={14} />
        {eyebrow}
      </div>
      <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-7 text-slate-500">
        {description}
      </p>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
              <FileText size={22} />
            </div>
            <span className="text-2xl font-black tracking-tight text-slate-950">
              CV<span className="text-blue-600">Nova</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            <Link href="/" className="text-sm font-semibold text-blue-600">
              Home
            </Link>
            <Link href="/features" className="text-sm font-medium text-slate-600 transition hover:text-blue-600">
              Features
            </Link>
            <Link href="/templates" className="text-sm font-medium text-slate-600 transition hover:text-blue-600">
              Templates
            </Link>
            <Link href="/pricing" className="text-sm font-medium text-slate-600 transition hover:text-blue-600">
              Pricing
            </Link>
            <Link href="/about" className="text-sm font-medium text-slate-600 transition hover:text-blue-600">
              About
            </Link>
          </nav>

          <div className="hidden items-center gap-3 sm:flex">
            <Link href="/login" className="rounded-xl px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:bg-slate-100">
              Log in
            </Link>
            <Link href="/register" className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700">
              Get Started <ArrowRight size={16} />
            </Link>
          </div>

          <details className="relative sm:hidden">
            <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-xl border border-slate-200 text-slate-700">
              <Menu size={21} />
            </summary>
            <div className="absolute right-0 top-14 w-64 rounded-2xl border border-slate-100 bg-white p-4 shadow-2xl">
              {[
                ["Home", "/"],
                ["Features", "/features"],
                ["Templates", "/templates"],
                ["Pricing", "/pricing"],
                ["About", "/about"],
                ["Login", "/login"],
                ["Register", "/register"],
              ].map(([label, href]) => (
                <Link key={href} href={href} className="block rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600">
                  {label}
                </Link>
              ))}
            </div>
          </details>
        </div>
      </header>

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-violet-50">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-violet-200/30 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-bold text-blue-700 shadow-sm">
              <Sparkles size={15} />
              YOUR CAREER, YOUR NEXT CHAPTER
            </div>

            <h1 className="max-w-2xl text-5xl font-black leading-[1.1] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              Build a Resume
              <span className="block bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                That Opens Doors.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              Create a professional resume with modern templates, smart AI
              writing assistance, and tools designed to help you present your
              experience with confidence.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link href="/register" className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700">
                Create My Resume <ArrowRight size={18} />
              </Link>
              <Link href="/templates" className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-4 text-sm font-bold text-slate-700 transition hover:border-blue-300 hover:text-blue-600">
                <Play size={17} /> Explore Templates
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-slate-500">
              <span className="flex items-center gap-2">
                <Check size={16} className="text-emerald-500" /> Easy to use
              </span>
              <span className="flex items-center gap-2">
                <Check size={16} className="text-emerald-500" /> Modern designs
              </span>
              <span className="flex items-center gap-2">
                <Check size={16} className="text-emerald-500" /> AI assistance
              </span>
            </div>
          </div>

          <div className="relative px-2 py-6 sm:px-8">
            <ResumePreview />
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-slate-100 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-9 sm:grid-cols-4 lg:px-8">
          {[
            { icon: Zap, title: "Simple Workflow", subtitle: "Easy resume creation" },
            { icon: ShieldCheck, title: "Privacy Focused", subtitle: "Account-based workspace" },
            { icon: LayoutTemplate, title: "Modern Designs", subtitle: "Professional templates" },
            { icon: Globe, title: "Career Ready", subtitle: "For different industries" },
          ].map((item) => (
            <div key={item.title} className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <item.icon size={21} />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">{item.title}</div>
                <div className="mt-1 text-xs text-slate-500">{item.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Powerful Features"
            title="Everything You Need to Build a Better Resume"
            description="A collection of tools designed to make resume creation easier, clearer, and more organized."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="group rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5">
                <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${feature.color}`}>
                  <feature.icon size={26} />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-500">{feature.description}</p>
                <Link href="/features" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-600">
                  Learn more <ArrowRight size={15} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-slate-50 px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Simple Process"
            title="Create Your Resume in Four Steps"
            description="Start with a template, add your information, improve your content, and prepare your resume."
          />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.number} className="relative rounded-2xl border border-slate-100 bg-white p-7 shadow-sm">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <step.icon size={23} />
                  </div>
                  <span className="text-3xl font-black text-slate-100">{step.number}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-500">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEMPLATES */}
      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-violet-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-violet-700">
                <LayoutTemplate size={14} /> Resume Templates
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Find a Design That Fits Your Career
              </h2>
              <p className="mt-4 leading-7 text-slate-500">
                Explore different resume design directions and choose a style
                that communicates your experience clearly.
              </p>
            </div>
            <Link href="/templates" className="inline-flex items-center gap-2 font-bold text-blue-600">
              View all templates <ArrowRight size={17} />
            </Link>
          </div>

          <div className="grid gap-7 md:grid-cols-3">
            {templates.map((template) => (
              <div key={template.name} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="bg-slate-100 p-6">
                  <div className={`mx-auto min-h-[320px] max-w-[250px] bg-white p-5 shadow-lg ${template.style}`}>
                    <div className={`mb-5 h-3 w-2/3 rounded ${template.accent}`} />
                    <div className="mb-2 h-1.5 w-1/2 rounded bg-slate-300" />
                    <div className="mb-6 h-1 w-1/3 rounded bg-slate-200" />
                    <div className="space-y-2">
                      <div className="h-1.5 w-1/3 rounded bg-slate-400" />
                      <div className="h-1 w-full rounded bg-slate-200" />
                      <div className="h-1 w-11/12 rounded bg-slate-200" />
                      <div className="h-1 w-4/5 rounded bg-slate-200" />
                    </div>
                    <div className="mt-7 space-y-2">
                      <div className="h-1.5 w-1/3 rounded bg-slate-400" />
                      <div className="h-1 w-full rounded bg-slate-200" />
                      <div className="h-1 w-10/12 rounded bg-slate-200" />
                    </div>
                    <div className="mt-7 space-y-2">
                      <div className="h-1.5 w-1/3 rounded bg-slate-400" />
                      <div className="h-1 w-4/5 rounded bg-slate-200" />
                      <div className="h-1 w-full rounded bg-slate-200" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-5">
                  <div>
                    <h3 className="font-bold text-slate-900">{template.name}</h3>
                    <p className="mt-1 text-xs text-slate-500">{template.category}</p>
                  </div>
                  <Link href="/templates" aria-label={`Explore ${template.name}`} className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition hover:bg-blue-600 hover:text-white">
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI SECTION */}
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-blue-950 to-violet-950 px-7 py-14 text-white sm:px-12 lg:grid-cols-2 lg:px-16 lg:py-20">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold text-blue-200">
              <Sparkles size={15} /> AI-POWERED ASSISTANCE
            </div>
            <h2 className="text-3xl font-black leading-tight sm:text-5xl">
              Make Your Resume Stronger with AI.
            </h2>
            <p className="mt-6 max-w-xl leading-8 text-blue-100/80">
              Get assistance with professional summaries, experience
              descriptions, and resume improvements. Keep your own experience
              accurate while improving how you present it.
            </p>
            <Link href="/register" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-bold text-blue-950 transition hover:bg-blue-50">
              Explore AI Tools <ArrowRight size={17} />
            </Link>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl sm:p-8">
            <div className="flex items-center gap-3 border-b border-white/10 pb-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-400/20 text-violet-200">
                <BrainCircuit size={23} />
              </div>
              <div>
                <div className="font-bold">CVNova AI Assistant</div>
                <div className="mt-1 text-xs text-blue-200">Illustrative preview</div>
              </div>
            </div>
            <div className="mt-6 rounded-xl bg-white/10 p-4">
              <div className="text-xs font-bold text-blue-200">YOUR REQUEST</div>
              <p className="mt-2 text-sm leading-6 text-white/90">
                Help me improve my professional experience description.
              </p>
            </div>
            <div className="mt-4 rounded-xl bg-white p-4 text-slate-900">
              <div className="flex items-center gap-2 text-xs font-bold text-violet-700">
                <Sparkles size={14} /> SUGGESTED IMPROVEMENT
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Present your responsibilities with clear action verbs,
                relevant context, and measurable achievements where accurate.
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-emerald-600">
                <CircleCheck size={14} /> Review and edit before using
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ATS SECTION */}
      <section className="bg-blue-50/60 px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-700">
              <ChartNoAxesCombined size={15} /> ATS Resume Analysis
            </div>
            <h2 className="text-3xl font-black leading-tight text-slate-950 sm:text-5xl">
              Understand Your Resume Before You Apply.
            </h2>
            <p className="mt-6 leading-8 text-slate-600">
              Review important resume elements, identify missing information,
              and understand how your resume can be improved for a job
              application.
            </p>
            <ul className="mt-7 space-y-4">
              {[
                "Review resume structure and readability",
                "Identify relevant skills and keywords",
                "Find sections that may need improvement",
                "Get suggestions for clearer content",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm font-medium text-slate-700">
                  <CircleCheck size={19} className="mt-0.5 shrink-0 text-blue-600" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/register" className="mt-9 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-4 text-sm font-bold text-white transition hover:bg-blue-700">
              Try Resume Tools <ArrowRight size={17} />
            </Link>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-white p-7 shadow-xl shadow-blue-900/5 sm:p-10">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-lg font-bold text-slate-900">Resume Analysis</div>
                <div className="mt-1 text-xs text-slate-500">Illustrative interface preview</div>
              </div>
              <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                <FileCheck size={23} />
              </div>
            </div>

            <div className="mt-8 flex items-center gap-6">
              <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full border-[9px] border-blue-100">
                <span className="text-3xl font-black text-blue-700">--</span>
              </div>
              <div>
                <div className="font-bold text-slate-900">Analysis Preview</div>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Your actual score will depend on the resume analysis
                  feature being enabled.
                </p>
              </div>
            </div>

            <div className="mt-8 space-y-5">
              {[
                ["Resume Structure", "Review section organization"],
                ["Skills & Keywords", "Check relevant information"],
                ["Content Quality", "Improve clarity and wording"],
                ["Formatting", "Review readability"],
              ].map(([name, detail]) => (
                <div key={name}>
                  <div className="flex justify-between gap-3 text-sm">
                    <span className="font-semibold text-slate-800">{name}</span>
                    <span className="text-xs text-slate-400">{detail}</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-slate-100" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Simple Pricing"
            title="Plans for Every Career Journey"
            description="Start with essential resume-building tools. Paid features and subscription options may be introduced as CVNova develops."
          />

          <div className="mx-auto grid max-w-4xl gap-7 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="text-lg font-bold text-slate-900">Free</div>
              <p className="mt-2 text-sm text-slate-500">For getting started.</p>
              <div className="mt-7 text-5xl font-black text-slate-950">$0</div>
              <div className="mt-2 text-sm text-slate-500">Free plan</div>
              <div className="my-8 h-px bg-slate-100" />
              <ul className="space-y-4">
                {[
                  "Basic resume builder",
                  "Selected resume templates",
                  "Personal resume workspace",
                  "Essential editing tools",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-slate-600">
                    <Check size={17} className="text-emerald-500" /> {item}
                  </li>
                ))}
              </ul>
              <Link href="/register" className="mt-9 flex w-full items-center justify-center rounded-xl border border-slate-200 px-5 py-4 text-sm font-bold text-slate-800 transition hover:border-blue-300 hover:text-blue-600">
                Get Started Free
              </Link>
            </div>

            <div className="relative rounded-3xl border-2 border-blue-600 bg-slate-950 p-8 text-white shadow-2xl shadow-blue-900/10">
              <div className="absolute right-6 top-6 rounded-full bg-blue-600 px-3 py-1 text-[10px] font-bold uppercase tracking-wider">
                Planned
              </div>
              <div className="text-lg font-bold">Pro</div>
              <p className="mt-2 text-sm text-slate-400">For advanced resume creation.</p>
              <div className="mt-7 text-5xl font-black">$5</div>
              <div className="mt-2 text-sm text-slate-400">Proposed price / month</div>
              <div className="my-8 h-px bg-white/10" />
              <ul className="space-y-4">
                {[
                  "Additional resume templates",
                  "Advanced AI assistance",
                  "Resume analysis tools",
                  "Additional export options",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-slate-300">
                    <Check size={17} className="text-blue-400" /> {item}
                  </li>
                ))}
              </ul>
              <Link href="/pricing" className="mt-9 flex w-full items-center justify-center rounded-xl bg-blue-600 px-5 py-4 text-sm font-bold text-white transition hover:bg-blue-500">
                Explore Pro Plan
              </Link>
              <p className="mt-4 text-center text-xs text-slate-500">
                Pricing and payment are not activated yet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            description="Find answers to common questions about the CVNova platform."
          />

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-2xl border border-slate-200 bg-white p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-900">
                  {faq.question}
                  <ChevronDown size={19} className="shrink-0 text-slate-400 transition group-open:rotate-180" />
                </summary>
                <p className="mt-4 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-500">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-3xl bg-gradient-to-r from-blue-600 to-violet-600 px-7 py-16 text-center text-white sm:px-12">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
            <Rocket size={27} />
          </div>
          <h2 className="text-3xl font-black sm:text-5xl">
            Your Next Opportunity Starts Here.
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-7 text-blue-100">
            Take the next step in your career journey with a resume that
            presents your skills and experience clearly.
          </p>
          <Link href="/register" className="mt-9 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-bold text-blue-700 shadow-xl transition hover:-translate-y-1 hover:bg-blue-50">
            Create Your Resume <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 px-5 pb-8 pt-16 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600">
                <FileText size={22} />
              </div>
              <span className="text-2xl font-black">
                CV<span className="text-blue-400">Nova</span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              A modern resume-building platform designed to help you present
              your experience and move forward in your career.
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs text-slate-500">
              <Globe size={15} /> Built for a global career journey
            </div>
          </div>

          <div>
            <h3 className="mb-5 font-bold">Platform</h3>
            <div className="space-y-4 text-sm text-slate-400">
              <Link className="block transition hover:text-white" href="/features">Features</Link>
              <Link className="block transition hover:text-white" href="/templates">Templates</Link>
              <Link className="block transition hover:text-white" href="/pricing">Pricing</Link>
              <Link className="block transition hover:text-white" href="/dashboard">Dashboard</Link>
            </div>
          </div>

          <div>
            <h3 className="mb-5 font-bold">Company</h3>
            <div className="space-y-4 text-sm text-slate-400">
              <Link className="block transition hover:text-white" href="/about">About Us</Link>
              <Link className="block transition hover:text-white" href="/contact">Contact</Link>
              <Link className="block transition hover:text-white" href="/faq">FAQ</Link>
              <Link className="block transition hover:text-white" href="/login">Login</Link>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-14 flex max-w-7xl flex-col justify-between gap-4 border-t border-white/10 pt-7 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} CVNova. All rights reserved.</p>
          <p>Designed to help you move forward.</p>
        </div>
      </footer>
    </main>
  );
}