/** Hero Component
 * Premium celestial hero section with interactive selector
 */

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  const [isProcessing, setIsProcessing] = useState(false);
  const affiliateLink = 'https://d0313twnfeyj3ocrocv0mftg1u.hop.clickbank.net';

  const handleReveal = (e?: React.SyntheticEvent) => {
    if (e) e.preventDefault();
    setIsProcessing(true);

    // Antagonistic pre-sell: simulate calculation for credibility
    setTimeout(() => {
      window.location.href = affiliateLink;
    }, 2500);
  };

  return (
    <section className={`${styles.hero} position-relative overflow-hidden`}>
      <div className="container py-5">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-6 mb-5 mb-lg-0 text-center text-lg-start animate-fade-in-up">
            <h1 className="display-2 fw-800 text-gradient glow mb-4">
              Your Future is Written in the <span className="text-accent">Stars</span>
            </h1>
            <p className="fs-5 text-dim mb-5 serif italic" style={{ borderLeft: '4px solid var(--primary-color)', paddingLeft: '20px' }}>
              &quot;Your moon sign is the window to your soul. Most people only know half their story.&quot;
            </p>

            <div className="glass-card p-4 p-md-5 mb-4 text-center">
              <h3 className="h4 mb-4">Discover Your Hidden Personality</h3>
              <p className="text-dim mb-4">Find out what your lunar alignment reveals about your true nature and future path.</p>

              <button
                onClick={handleReveal}
                className="btn-cosmic w-100 py-4 fs-4"
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <>
                    <i className="fas fa-spinner fa-spin me-2"></i>
                    Aligning Celestial Data...
                  </>
                ) : 'Get My Free Reading Now'}
              </button>

              <p className="mt-4 small text-dim">
                <i className="fas fa-lock me-2 text-primary"></i>
                100% Free & Secure Personal Analysis
              </p>
            </div>

            <div className="d-flex flex-wrap gap-4 justify-content-center justify-content-lg-start opacity-75">
              <div className="small"><i className="fas fa-check-circle text-primary me-2"></i>50k+ Readings Today</div>
              <div className="small"><i className="fas fa-star text-accent me-2"></i>4.9/5 Rating</div>
            </div>
          </div>

          <div className="col-lg-6 text-center animate-float">
            <div className={styles.moonWrapper}>
              <Image
                src="/assets/MoonReadingDiscover.png"
                alt="Moon Reading Discovery"
                width={700}
                height={700}
                className="img-fluid"
                priority
              />
              <div className={styles.moonGlow}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

