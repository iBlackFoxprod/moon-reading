/** Final CTA Component
 * High-urgency call-to-action section with scarcity messaging
 */

'use client';

import Link from 'next/link';
import styles from './FinalCTA.module.css';

export default function FinalCTA() {
  const affiliateLink = 'https://d0313twnfeyj3ocrocv0mftg1u.hop.clickbank.net';

  return (
    <section className={`${styles.ctaSection} gradient-secondary text-white py-5`}>
      <div className="container text-center">
        {/* Main Headline */}
        <h2 className="display-4 fw-bold mb-4">
          Stop Wondering Who You Really Are
        </h2>

        {/* Description */}
        <p className="fs-5 mb-4 mx-auto" style={{ maxWidth: '600px', opacity: 0.95 }}>
          Your moon sign holds the answers you've been searching for. Understand your emotional
          nature, find your true path, and embrace your authentic self. Your cosmic destiny awaits.
        </p>

        {/* Urgency Message */}
        <div className={styles.urgencyText}>
          <i className="fas fa-bolt me-2"></i>
          LIMITED TIME: Complete readings under $30 | Instant access to all insights
        </div>

        {/* Primary CTA Button */}
        <div className="mb-4">
          <Link
            href={affiliateLink}
            className={`btn btn-light btn-lg fw-bold px-5 py-3 rounded-pill ${styles.mainButton}`}
            style={{
              transition: 'all 0.3s ease',
              display: 'inline-block',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 255, 255, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
            }}
          >
            Discover Your Hidden Personality Now
          </Link>
        </div>

        {/* Trust Indicators */}
        <p className="small opacity-85">
          <i className="fas fa-check me-2"></i>
          60-second setup |
          <i className="fas fa-check ms-2 me-2"></i>
          Instant results |
          <i className="fas fa-check ms-2 me-2"></i>
          100% secure |
          <i className="fas fa-check ms-2 me-2"></i>
          No credit card needed to start
        </p>
      </div>
    </section>
  );
}
