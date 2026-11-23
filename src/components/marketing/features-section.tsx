const features = [
  { icon: "✦", title: "AI writing assistance", description: "Get help improving your resume wording and presenting your experience clearly." },
  { icon: "▤", title: "Professional templates", description: "Choose from clean, modern layouts designed to make your information easy to read." },
  { icon: "◎", title: "ATS-friendly structure", description: "Use organized sections and readable formatting designed with applicant tracking systems in mind." },
  { icon: "↗", title: "Easy customization", description: "Update your details, skills, education, and experience in one convenient workspace." },
  { icon: "⇩", title: "PDF-ready output", description: "Prepare a polished resume layout that can be exported as a shareable document." },
  { icon: "◷", title: "Save your progress", description: "Keep your resume work organized and continue improving it over time." },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="section-padding bg-gray-50">
      <div className="container-page">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-indigo-600">Why CVNova</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl">Everything you need to make a strong first impression</h2>
          <p className="mt-5 leading-7 text-gray-600">Simple tools to help you create, refine, and organize your professional resume.</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.title} className="surface-card p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-2xl font-bold text-indigo-600">{feature.icon}</div>
              <h3 className="mt-6 text-lg font-bold text-gray-900">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
