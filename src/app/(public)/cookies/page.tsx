export default function CookiesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

      <div className="space-y-8 text-gray-600">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">What Are Cookies?</h2>
          <p>Cookies are small text files that are stored on your device when you visit a website. They help the website remember your actions and preferences over a period of time.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">How We Use Cookies</h2>
          <p className="mb-3">CVNova uses cookies for the following purposes:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Essential Cookies:</strong> Necessary for the website to function properly, such as keeping you logged in.</li>
            <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website by collecting anonymous information.</li>
            <li><strong>Functionality Cookies:</strong> Remember your preferences (like language or template choices) to provide a personalized experience.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Managing Cookies</h2>
          <p>You can control and manage cookies through your browser settings. Most browsers allow you to block or delete cookies. However, please note that disabling essential cookies may affect the functionality of the CVNova platform.</p>
        </section>
      </div>
    </div>
  );
}