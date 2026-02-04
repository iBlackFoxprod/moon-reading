/** Benefits Component
 * Displays 6 key benefits with icons, titles, and descriptions
 * SEO: Uses H2 for section title and H3 for each benefit
 */

'use client';

import Link from 'next/link';
import styles from './Benefits.module.css';

export default function Benefits() {
  const affiliateLink = 'https://d0313twnfeyj3ocrocv0mftg1u.hop.clickbank.net';

  const benefits = [
    {
      icon: 'fa-head-side-virus',
      title: 'Your Emotional Truth',
      description:
        'Understand your deepest emotions, what truly drives you, and why you react the way you do. Your moon sign is the key to emotional self-awareness.',
    },
    {
      icon: 'fa-heart',
      title: 'Love & Relationship Insights',
      description:
        'Learn what you need in relationships, your romantic style, and how to attract the right partner. Discover your relationship patterns and desires.',
    },
    {
      icon: 'fa-bullseye',
      title: 'Life Purpose & Direction',
      description:
        'Align with your true purpose. Your moon sign guides your subconscious motivations, helping you make better life decisions and find fulfillment.',
    },
    {
      icon: 'fa-lightbulb',
      title: 'Hidden Personality Traits',
      description:
        'Uncover 7+ hidden traits that make you unique. Your moon sign reveals sides of your personality you may never have considered before.',
    },
    {
      icon: 'fa-rocket',
      title: 'Personal Growth Roadmap',
      description:
        'Receive actionable insights to overcome challenges and embrace your true nature. A personalized guide to becoming your best self.',
    },
    {
      icon: 'fa-gem',
      title: 'Cosmic Compatibility',
      description:
        'See how your moon sign meshes with others. Understand your compatibility with friends, family, and potential partners on a deeper level.',
    },
  ];

  return (
    <section id="benefits" className="py-5 bg-white">
      <div className="container">
        {/* Section Header */}
        <h2 className="text-center mb-5 fw-bold text-dark">
          What Will You Discover About Yourself?
        </h2>

        {/* Benefits Grid */}
        <div className="row g-4 mb-5">
          {benefits.map((benefit, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <div className={`${styles.benefitCard} h-100 p-4 bg-white rounded-4`}>
                {/* Icon Wrapper */}
                <div className={`${styles.iconWrapper} mb-3 mx-auto`}>
                  <i className={`fas ${benefit.icon}`}></i>
                </div>

                {/* Benefit Title - H3 for SEO */}
                <h3 className="fs-5 fw-bold mb-3 text-center">{benefit.title}</h3>

                {/* Benefit Description */}
                <p className="text-muted text-center small">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary CTA */}
        <div className="text-center">
          <Link
            href={affiliateLink}
            className={`btn btn-lg fw-bold px-5 py-3 rounded-pill ${styles.ctaButton}`}
            style={{
              background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
              color: 'white',
              border: 'none',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(245, 87, 108, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(245, 87, 108, 0.2)';
            }}
          >
            Get Your Personalized Moon Sign Reading Today
          </Link>
        </div>
      </div>
    </section>
  );
}
