/** Final CTA Component
 * High-urgency section with cosmic theme
 */

'use client';

import Link from 'next/link';
import styles from './FinalCTA.module.css';

export default function FinalCTA() {
  const affiliateLink = 'https://d0313twnfeyj3ocrocv0mftg1u.hop.clickbank.net';

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Free Moon Reading 2026',
        text: 'I just discovered my moon sign! It reveals so much about my hidden traits. Check yours here:',
        url: window.location.href,
      });
    } else {
      alert('Copy this link to share: ' + window.location.href);
    }
  };

  return (
    <section className="py-5 bg-dark">
      <div className="container py-5 text-center">
        <h2 className="display-3 fw-800 text-gradient glow mb-4">
          Stop Wondering. <span className="text-accent">Start Knowing.</span>
        </h2>

        <p className="fs-5 text-dim mb-5 mx-auto" style={{ maxWidth: '700px' }}>
          The stars have alignment for you. Don&apos;t let another lunar cycle pass without understanding your true emotional blueprint.
        </p>

        <div className="mb-5">
          <Link
            href={affiliateLink}
            className="btn-cosmic text-decoration-none d-inline-block"
          >
            Get My Free Reading Now
          </Link>
        </div>

        <div className="glass-card d-inline-block p-4">
          <p className="mb-3 small fw-800 uppercase tracking-widest text-primary">Help a friend discover their destiny</p>
          <button
            onClick={handleShare}
            className="btn btn-outline-light rounded-pill px-4 py-2 border-primary text-primary"
          >
            <i className="fas fa-share-alt me-2"></i> Share the Cosmic Wisdom
          </button>
        </div>
      </div>
    </section>
  );
}

