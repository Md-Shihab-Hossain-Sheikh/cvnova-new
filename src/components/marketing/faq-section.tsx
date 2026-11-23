import Link from "next/link";
import FAQList from "@/components/marketing/faq-list";

export default function FAQSection() {
  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-page">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-indigo-600">FAQ</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-5 leading-7 text-gray-600">Helpful answers about the CVNova experience.</p>
        </div>
        <FAQList />
        <p className="mt-8 text-center text-sm text-gray-600">
          Need more help? <Link href="/contact" className="font-semibold text-indigo-600 hover:underline">Contact us</Link>.
        </p>
      </div>
    </section>
  );
}
