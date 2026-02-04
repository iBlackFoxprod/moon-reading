/** HowItWorks Component
 * 3-step process showing how the moon reading works
 * SEO: Uses H2 for section and H3 for each step
 */

'use client';

import Link from 'next/link';
import styles from './HowItWorks.module.css';

export default function HowItWorks() {
  const affiliateLink = 'https://d0313twnfeyj3ocrocv0mftg1u.hop.clickbank.net';

  const steps = [
    {
      number: '1',
      title: 'Enter Your Birth Info',
      description:
        'Provide your birth date, time, and location. Our system needs these details to calculate your precise moon sign and natal chart.',
    },
    {
      number: '2',
      title: 'Get Instant Analysis',
      description:
        'Our AI-powered astrology engine analyzes your birth chart and creates a personalized reading tailored just for you—in seconds.',
    },
    {
      number: '3',
      title: 'Unlock Your Destiny',
      description:
        'Receive a comprehensive report with your moon sign meaning, compatibility insights, and personalized guidance for your life path.',
    },
  ];

  return (
    <section id="how-it-works" className="py-5" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
      <div className="container">
        {/* Section Header */}
        <h2 className="text-center mb-5 fw-bold text-dark">
          It's Simple & Fast - Just 3 Steps
        </h2>

        {/* Steps Grid */}
        <div className="row g-4 mb-5">
          {steps.map((step, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <div className={styles.stepContainer}>
                {/* Step Number Circle */}
                <div className={`${styles.stepNumber} mb-4 mx-auto`}>
                  {step.number}
                </div>

                {/* Step Title - H3 for SEO */}
                <h3 className="fs-5 fw-bold mb-3 text-center text-dark">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-muted text-center small">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href={affiliateLink}
            className="btn btn-lg fw-bold px-5 py-3 rounded-pill"
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              border: 'none',
              boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(102, 126, 234, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.3)';
            }}
          >
            Start Your Reading in 60 Seconds
          </Link>
        </div>
      </div>
    </section>
  );
}
