/** HowItWorks Component
 * 3-step process for lunar alignment
 */

'use client';

import Link from 'next/link';

export default function HowItWorks() {
  const affiliateLink = 'https://d0313twnfeyj3ocrocv0mftg1u.hop.clickbank.net';

  const steps = [
    {
      number: '1',
      title: 'Enter Birth Info',
      description:
        'Provide your birth date and time. Our system needs these details to calculate your precise moon sign.',
    },
    {
      number: '2',
      title: 'Get Analysis',
      description:
        'Our astrology engine analyzes your birth chart and creates a personalized reading in seconds.',
    },
    {
      number: '3',
      title: 'Unlock Fate',
      description:
        'Receive a comprehensive report with your moon sign meaning and personalized guidance.',
    },
  ];

  return (
    <section id="how-it-works" className="py-5 position-relative">
      <div className="container py-5">
        <h2 className="text-center mb-5 display-4 fw-800 text-gradient glow">
          Three Steps to Clarity
        </h2>

        <div className="row g-4 mb-5">
          {steps.map((step, index) => (
            <div key={index} className="col-12 col-md-4">
              <div className="glass-card p-5 h-100 text-center">
                <div
                  className="mx-auto mb-4 d-flex align-items-center justify-content-center fw-800 fs-3"
                  style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))', border: '5px solid rgba(255,255,255,0.1)' }}
                >
                  {step.number}
                </div>
                <h3 className="h4 fw-800 mb-3">{step.title}</h3>
                <p className="text-dim mb-0 small">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <Link
            href={affiliateLink}
            className="btn-cosmic text-decoration-none d-inline-block"
          >
            Start My Journey
          </Link>
        </div>
      </div>
    </section>
  );
}

