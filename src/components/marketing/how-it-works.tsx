const steps = [
  { number: "01", title: "Add your details", description: "Enter your contact information, work experience, education, and skills." },
  { number: "02", title: "Choose your design", description: "Explore the available layouts and select a style that suits your goals." },
  { number: "03", title: "Review and export", description: "Check your content, refine the details, and prepare your resume." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-indigo-600">Simple process</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl">Your resume in three simple steps</h2>
          <p className="mt-5 leading-7 text-gray-600">Go from a blank page to a structured professional resume with a straightforward workflow.</p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <article key={step.number} className="relative rounded-2xl border border-gray-200 bg-white p-8">
              <span className="text-5xl font-black tracking-tight text-indigo-100">{step.number}</span>
              <div className="mt-5 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-xl font-bold text-white">{index + 1}</div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
