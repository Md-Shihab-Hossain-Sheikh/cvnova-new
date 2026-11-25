import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Hero from "@/components/marketing/hero";
import FeaturesSection from "@/components/marketing/features-section";
import HowItWorks from "@/components/marketing/how-it-works";
import TemplateShowcase from "@/components/marketing/template-showcase";
import Testimonials from "@/components/marketing/testimonials";
import PricingSection from "@/components/marketing/pricing-section";
import FAQSection from "@/components/marketing/faq-section";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturesSection />
        <HowItWorks />
        <TemplateShowcase />
        <Testimonials />
        <PricingSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
