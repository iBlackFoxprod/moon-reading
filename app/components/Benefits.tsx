/** Benefits Component
 * Displays 6 key benefits with cosmic theme
 */

'use client';

import Link from 'next/link';

export default function Benefits() {
  const affiliateLink = 'https://d0313twnfeyj3ocrocv0mftg1u.hop.clickbank.net';

  const benefits = [
    {
      icon: 'fa-moon',
      title: 'Emotional Truth',
      description:
        'Understand your deepest emotions, what truly drives you, and why you react the way you do.',
    },
    {
      icon: 'fa-heart',
      title: 'Romantic Alignment',
      description:
        'Learn what you need in relationships and how to attract the partner who truly resonates with your soul.',
    },
    {
      icon: 'fa-bullseye',
      title: 'Life Purpose',
      description:
        'Align with your true purpose. Your moon sign guides your subconscious motivations.',
    },
    {
      icon: 'fa-star',
      title: 'Hidden Traits',
      description:
        'Uncover 7+ hidden traits that make you unique. Reveal sides of your personality you never knew.',
    },
    {
      icon: 'fa-sparkles',
      title: 'Growth Roadmap',
      description:
        'Receive actionable insights to overcome challenges and embrace your celestial nature.',
    },
    {
      icon: 'fa-gem',
      title: 'Cosmic Fate',
      description:
        'See how your moon sign meshes with others. Understand your compatibility with the universe.',
    },
  ];

  return (
    <section id="benefits" className="py-5 position-relative">
      <div className="container py-5">
        <h2 className="text-center mb-5 display-4 fw-800 text-gradient glow">
          Unlock Your Celestial Potential
        </h2>

        <div className="row g-4 mb-5">
          {benefits.map((benefit, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <div className="glass-card h-100 p-4 text-center">
                <div className="mb-4 text-accent fs-1">
                  <i className={`fas ${benefit.icon}`}></i>
                </div>
                <h3 className="h5 fw-800 mb-3">{benefit.title}</h3>
                <p className="text-dim small mb-0">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <Link
            href={affiliateLink}
            className="btn-cosmic text-decoration-none d-inline-block"
          >
            Explore Your Benefits
          </Link>
        </div>
      </div>
    </section>
  );
}

