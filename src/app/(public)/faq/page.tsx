export default function FAQPage() {
  const faqs = [
    { question: "Is CVNova free to use?", answer: "CVNova offers a free tier with basic features. For advanced AI capabilities and premium templates, we offer affordable subscription plans." },
    { question: "Will my resume pass the ATS (Applicant Tracking System)?", answer: "Yes! Our templates are specifically designed to be ATS-friendly. Additionally, our built-in ATS score checker analyzes your resume and provides actionable feedback to improve it." },
    { question: "How does the AI Writing Assistant work?", answer: "The AI assistant analyzes the job title and prompt you provide to generate professional summaries, bullet points, and skill suggestions tailored to your industry." },
    { question: "Can I download my resume as a PDF?", answer: "Absolutely. Once your resume is ready, you can export it as a high-quality, formatted PDF with a single click." },
    { question: "Is my personal data safe?", answer: "Yes. We take privacy very seriously. Your data is encrypted and is never sold to third parties or used for unauthorized purposes." }
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h1>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <details key={index} className="group bg-white border border-gray-200 rounded-lg p-4 cursor-pointer">
            <summary className="font-semibold text-gray-900 list-none flex justify-between items-center">
              {faq.question}
              <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="text-gray-600 mt-3 pt-3 border-t border-gray-100">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
}