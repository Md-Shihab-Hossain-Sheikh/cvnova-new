export default function ContactForm() {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
      <h2 className="text-xl font-bold text-gray-950">Send us a message</h2>
      <p className="mt-2 text-sm leading-6 text-gray-600">
        This form is a visual interface only. Message delivery will be connected in a later backend phase.
      </p>

      <form className="mt-7 space-y-5">
        <div>
          <label htmlFor="contact-name" className="mb-2 block text-sm font-semibold text-gray-700">Your name</label>
          <input id="contact-name" name="name" type="text" autoComplete="name" placeholder="Enter your name" className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100" />
        </div>

        <div>
          <label htmlFor="contact-email" className="mb-2 block text-sm font-semibold text-gray-700">Email address</label>
          <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100" />
        </div>

        <div>
          <label htmlFor="contact-subject" className="mb-2 block text-sm font-semibold text-gray-700">Subject</label>
          <input id="contact-subject" name="subject" type="text" placeholder="How can we help?" className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100" />
        </div>

        <div>
          <label htmlFor="contact-message" className="mb-2 block text-sm font-semibold text-gray-700">Message</label>
          <textarea id="contact-message" name="message" rows={5} placeholder="Write your message..." className="w-full resize-y rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100" />
        </div>

        <button type="button" disabled className="w-full cursor-not-allowed rounded-xl bg-gray-300 px-5 py-3 font-semibold text-gray-600">
          Message submission not connected yet
        </button>
      </form>
    </section>
  );
}
