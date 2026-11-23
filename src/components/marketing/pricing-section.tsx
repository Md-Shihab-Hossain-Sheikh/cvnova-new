const plans = [
  {
    name: "Free",
    description: "Get started with the essentials.",
    price: "$0",
    period: "forever",
    features: ["Resume editor access", "Selected resume templates", "Basic customization", "Preview your resume"],
    featured: false,
  },
  {
    name: "Pro",
    description: "More flexibility for your career journey.",
    price: "Coming soon",
    period: "",
    features: ["Planned premium templates", "Planned AI writing tools", "Advanced customization", "Additional export options"],
    featured: true,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="section-padding bg-gray-50">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-indigo-600">Pricing</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl">Start simple. Grow with confidence.</h2>
          <p className="mt-5 leading-7 text-gray-600">Start exploring CVNova. Premium features are planned for a future release.</p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          {plans.map((plan) => (
            <article key={plan.name} className={`rounded-2xl border p-8 ${plan.featured ? "border-indigo-500 bg-white shadow-xl shadow-indigo-100" : "border-gray-200 bg-white"}`}>
              {plan.featured && <span className="inline-flex rounded-full bg-indigo-100 px-3 py-1 text-xs font-bold text-indigo-700">Planned plan</span>}
              <h3 className="mt-4 text-xl font-extrabold text-gray-900">{plan.name}</h3>
              <p className="mt-2 text-sm text-gray-500">{plan.description}</p>
              <div className="mt-7">
                <span className="text-4xl font-extrabold tracking-tight text-gray-950">{plan.price}</span>
                {plan.period && <span className="ml-2 text-sm text-gray-500">/{plan.period}</span>}
              </div>
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-gray-600">
                    <span className="font-bold text-green-600">✓</span>{feature}
                  </li>
                ))}
              </ul>
              {plan.featured ? (
                <span className="mt-9 block rounded-xl border border-indigo-100 bg-indigo-50 px-5 py-3 text-center text-sm font-bold text-indigo-700">Coming soon</span>
              ) : (
                <a href="/builder" className="mt-9 block rounded-xl bg-indigo-600 px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-indigo-700">Get started free</a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
