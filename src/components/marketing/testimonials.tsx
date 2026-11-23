const examples = [
  {
    quote: "A sample layout showing how a short user comment could appear here.",
    name: "Demo profile",
    role: "Illustrative content",
  },
  {
    quote: "This placeholder demonstrates the testimonial card design, not a real customer review.",
    name: "Demo profile",
    role: "Illustrative content",
  },
  {
    quote: "Replace these examples with verified feedback only after receiving permission to publish it.",
    name: "Demo profile",
    role: "Illustrative content",
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-indigo-600">Sample content</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl">Designed around your next step</h2>
          <p className="mt-5 leading-7 text-gray-600">
            The cards below are demo placeholders, not customer testimonials.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {examples.map((item, index) => (
            <article key={index} className="rounded-2xl border border-dashed border-indigo-200 bg-indigo-50/40 p-6">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">Demo content</span>
              <p className="mt-4 leading-7 text-gray-700">“{item.quote}”</p>
              <div className="mt-6 border-t border-indigo-100 pt-4">
                <p className="font-bold text-gray-900">{item.name}</p>
                <p className="mt-1 text-xs text-gray-500">{item.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
