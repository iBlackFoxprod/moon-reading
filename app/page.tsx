/** Main Landing Page
 * Assembles all components into a complete, conversion-optimized landing page
 * SEO: All metadata is configured in layout.tsx
 */

import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import TruthSection from './components/TruthSection';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import WarningBlock from './components/WarningBlock';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function Page() {
  return (
    <>
      {/* Navigation Header */}
      <Header />

      {/* Hero Section - Main attention-grabbing section with primary CTA */}
      <Hero />

      {/* Benefits Section - Highlights what users will gain */}
      <Benefits />

      {/* Truth Section - Addresses common misconceptions or hard truths */}
      <TruthSection />

      {/* How It Works Section - Simple 3-step process */}
      <HowItWorks />

      {/* Testimonials Section - Social proof and credibility */}
      <Testimonials />

      {/* FAQ Section - Addresses objections and common questions */}
      <FAQ />

      {/* Warning Block - Important disclaimers or critical information */}
      <WarningBlock />

      {/* Final CTA Section - High-urgency call-to-action */}
      <FinalCTA />

      {/* Footer - Legal compliance and additional links */}
      <Footer />
    </>
  );
}
