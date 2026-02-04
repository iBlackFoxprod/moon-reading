/** Testimonials Component
 * Social proof section with customer testimonials and ratings
 */

'use client';

import styles from './Testimonials.module.css';

export default function Testimonials() {
  const testimonials = [
    {
      text: 'I never understood why I was so emotional until I learned about my Pisces moon. This reading completely changed how I see myself. Finally, everything makes sense!',
      author: 'Sarah M.',
      role: 'Verified Reader',
      rating: 5,
    },
    {
      text: 'Eerily accurate. The insights about my relationship patterns and what I need in a partner were spot-on. I\'ve already recommended this to all my friends.',
      author: 'Michael T.',
      role: 'Verified Reader',
      rating: 5,
    },
    {
      text: 'As a therapist, I was skeptical, but this moon sign analysis gave me profound insights into my own psychology. I\'m now recommending it to my clients!',
      author: 'Dr. Amanda L.',
      role: 'Verified Reader',
      rating: 5,
    },
    {
      text: 'Best $27 I\'ve spent. The detailed breakdown of my emotional nature, career path, and love compatibility was incredibly helpful. Worth every penny!',
      author: 'Jessica R.',
      role: 'Verified Reader',
      rating: 5,
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }).map((_, i) => (
      <i key={i} className="fas fa-star" style={{ color: '#ffc107', marginRight: '2px' }}></i>
    ));
  };

  return (
    <section id="testimonials" className="py-5 bg-white">
      <div className="container">
        {/* Section Header */}
        <h2 className="text-center mb-5 fw-bold text-dark">
          See What Others Are Saying
        </h2>

        {/* Testimonials Grid */}
        <div className="row g-4 mb-5">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-6">
              <div className={`${styles.testimonialCard} p-4 h-100 rounded-4`}>
                {/* Stars */}
                <div className="mb-3">{renderStars(testimonial.rating)}</div>

                {/* Testimonial Text */}
                <p className={`${styles.testimonialText} mb-4`}>
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div>
                  <p className={`${styles.testimonialAuthor} fw-bold mb-1`}>
                    {testimonial.author}
                  </p>
                  <p className="text-muted small mb-0">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Card */}
        <div className={`${styles.statisticsCard} text-center p-5 rounded-4`}>
          <h3 className="mb-3">
            <i className="fas fa-star me-2"></i>
            Join 50,000+ People Who've Discovered Their True Self
          </h3>
          <p className="fs-6 fw-bold" style={{ color: '#667eea' }}>
            98% satisfaction rate • 4.9/5 average rating
          </p>
        </div>
      </div>
    </section>
  );
}
