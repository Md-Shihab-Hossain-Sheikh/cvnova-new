export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">About CVNova</h1>
      <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
        We are on a mission to simplify the job application process and help professionals land their dream jobs faster.
      </p>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            At CVNova, we believe that creating a resume should not be a stressful task. Our platform leverages cutting-edge Artificial Intelligence to help you craft professional, ATS-friendly resumes in minutes. Whether you are a fresh graduate or a seasoned executive, we provide the tools you need to stand out.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose Us?</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-600">
            <li><strong>AI-Powered Writing:</strong> Generate impactful summaries and bullet points effortlessly.</li>
            <li><strong>ATS Optimization:</strong> Our built-in ATS score checker ensures your resume passes automated filters.</li>
            <li><strong>Beautiful Templates:</strong> Choose from a variety of modern, recruiter-approved templates.</li>
            <li><strong>Privacy First:</strong> Your data is encrypted and never shared with third parties.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}