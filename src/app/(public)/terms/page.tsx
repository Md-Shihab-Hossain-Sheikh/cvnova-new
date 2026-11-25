export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

      <div className="space-y-8 text-gray-600">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. Acceptance of Terms</h2>
          <p>By accessing or using CVNova, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use our services.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">2. Use of Service</h2>
          <p>You must be at least 16 years old to use this service. You are responsible for maintaining the confidentiality of your account and for all activities that occur under your account.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">3. AI Generated Content</h2>
          <p>Our platform utilizes artificial intelligence to assist you in writing your resume. While we strive for accuracy, you are ultimately responsible for reviewing and verifying the content generated. We do not guarantee that AI-generated content will be error-free or result in employment.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">4. User Data and Privacy</h2>
          <p>Your use of CVNova is also governed by our Privacy Policy. We implement industry-standard security measures to protect your personal information and resume data.</p>
        </section>
      </div>
    </div>
  );
}