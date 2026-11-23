const questions = [
  {
    question: "What is CVNova?",
    answer: "CVNova is a resume-building project designed to help people organize their professional information and prepare a polished resume.",
  },
  {
    question: "Can I use CVNova for free?",
    answer: "The current public website presents a free starting option. Feature availability depends on the application features that have been implemented.",
  },
  {
    question: "Are the templates ATS-friendly?",
    answer: "Some layouts are designed with readable structures in mind. No resume template can guarantee perfect parsing by every applicant tracking system.",
  },
  {
    question: "Can I edit my resume later?",
    answer: "Resume editing is part of the planned CVNova workflow. Saving and account features must be implemented and tested before they can be guaranteed.",
  },
  {
    question: "Can I download a PDF?",
    answer: "PDF export is part of the planned workflow. Check the application for current availability before relying on this feature.",
  },
  {
    question: "Is the Pro plan available?",
    answer: "The Pro plan is planned for a future release. No payment or subscription checkout is currently offered on this website.",
  },
];

export default function FAQList() {
  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {questions.map((item) => (
        <details key={item.question} className="group rounded-xl border border-gray-200 bg-white p-5 open:border-indigo-200 open:bg-indigo-50/40">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-gray-900">
            <span>{item.question}</span>
            <span className="text-xl text-indigo-600 transition group-open:rotate-45" aria-hidden="true">+</span>
          </summary>
          <p className="mt-4 pr-8 text-sm leading-7 text-gray-600">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
