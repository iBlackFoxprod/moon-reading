/** Final CTA Component
 * High-urgency section with cosmic theme
 */

'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function FinalCTA() {
  const affiliateLink = 'https://d0313twnfeyj3ocrocv0mftg1u.hop.clickbank.net';

  return (
    <section className="py-5 overflow-hidden position-relative" style={{ background: 'linear-gradient(135deg, #2b0b3d 0%, #050510 100%)' }}>
      <div className="container py-5 text-center position-relative" style={{ zIndex: 1 }}>
        <h2 className="display-3 fw-800 text-gradient glow mb-4">
          The Stars Are <span className="text-secondary">Waiting.</span>
        </h2>

        <p className="fs-5 text-dim mb-5 mx-auto readability-shadow" style={{ maxWidth: '750px' }}>
          Don&apos;t wait for the next lunar cycle. Your path is becoming clear today. Seize your cosmic blueprint and start your transformation.
        </p>

        <div className="mb-5 animate-pulse">
          <Link
            href={affiliateLink}
            className="btn-cosmic text-decoration-none d-inline-block px-5 py-4 fs-3 shadow-accent"
          >
            Get My Free Moon Reading
          </Link>
        </div>

        <div className="mt-5 mx-auto" style={{ maxWidth: '600px', opacity: 0.8 }}>
          <Image
            src="/assets/MoonReadingPinkv1.png"
            alt="Moon Reading Special Offer"
            width={600}
            height={300}
            className="img-fluid rounded-4"
          />
        </div>
      </div>
    </section>
  );
}
