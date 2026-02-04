/** Hero Component
 * Main attention-grabbing section with headline, subheadline, trust badges, and primary CTA
 */

'use client';

import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  const affiliateLink = 'https://d0313twnfeyj3ocrocv0mftg1u.hop.clickbank.net';

  return (
    <section className={`${styles.hero} gradient-primary text-white py-5 position-relative overflow-hidden`}>
      {/* Background Animation Elements */}
      <div className={`${styles.bgElement} ${styles.bgElementTop}`}></div>
      <div className={`${styles.bgElement} ${styles.bgElementBottom}`}></div>

      <div className="container position-relative z-1">
        <div className="row align-items-center min-vh-100">
          <div className="col-12 col-lg-8 mx-auto text-center">
            {/* H1 - SEO Main Headline */}
            <h1 className="display-3 fw-bold mb-4 slide-in-animation">
              Discover Your Hidden Personality Through Your Moon Sign
            </h1>

            {/* Subheadline - Emotional Hook */}
            <p className="fs-5 mb-4 opacity-90 fade-in-animation">
              Most people only know their sun sign. Your moon sign reveals your true emotional nature,
              deepest desires, and cosmic destiny. Get your personalized reading now.
            </p>

            {/* Trust Badges */}
            <div className={`${styles.trustBadges} mb-5 fade-in-animation`}>
              <div className={styles.badge}>
                <i className="fas fa-star me-2"></i>
                50K+ Satisfied Readers
              </div>
              <div className={styles.badge}>
                <i className="fas fa-lock me-2"></i>
                100% Private & Secure
              </div>
              <div className={styles.badge}>
                <i className="fas fa-sparkles me-2"></i>
                Personalized AI Analysis
              </div>
            </div>

            {/* Primary CTA Button */}
            <div className="mb-4">
              <Link
                href={affiliateLink}
                className="btn btn-light btn-lg fw-bold px-5 py-3 rounded-pill shadow-lg"
                style={{
                  fontSize: '1.1rem',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(255, 255, 255, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
                }}
              >
                Reveal Your Moon Sign Now
              </Link>
            </div>

            {/* Quick Benefits */}
            <p className="small opacity-85">
              <i className="fas fa-clock me-2"></i>
              Takes only 60 seconds | Instant results | No credit card required
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
