/** Testimonials Component
 * Social proof section with cosmic theme
 */

'use client';

export default function Testimonials() {
  const testimonials = [
    {
      text: 'I never understood why I was so emotional until I learned about my Pisces moon. This reading completely changed how I see myself.',
      author: 'Sarah M.',
      role: 'Verified Reader',
      rating: 5,
    },
    {
      text: 'Eerily accurate. The insights about my relationship patterns and what I need in a partner were spot-on.',
      author: 'Michael T.',
      role: 'Verified Reader',
      rating: 5,
    },
    {
      text: 'As a professional, I was skeptical, but this moon sign analysis gave me profound insights into my own psychology.',
      author: 'Dr. Amanda L.',
      role: 'Verified Reader',
      rating: 5,
    },
    {
      text: 'Best discovery this year. The detailed breakdown of my emotional nature was incredibly helpful and detailed.',
      author: 'Jessica R.',
      role: 'Verified Reader',
      rating: 5,
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }).map((_, i) => (
      <i key={i} className="fas fa-star text-accent me-1"></i>
    ));
  };

  return (
    <section id="testimonials" className="py-5 position-relative">
      <div className="container py-5">
        <h2 className="text-center mb-5 display-4 fw-800 text-gradient glow">
          Voices from the Stars
        </h2>

        <div className="row g-4 mb-5">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col-12 col-md-6">
              <div className="glass-card p-4 h-100">
                <div className="mb-3">{renderStars(testimonial.rating)}</div>
                <p className="text-dim italic mb-4">&quot;{testimonial.text}&quot;</p>
                <div>
                  <p className="fw-800 mb-0">{testimonial.author}</p>
                  <p className="small text-primary mb-0">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="glass-card text-center p-5 mt-4">
          <h3 className="h4 mb-3 text-gradient glow">
            Join 50,000+ Seekers
          </h3>
          <p className="fs-5 mb-0 text-dim">
            <span className="text-accent">98.4%</span> Accuracy Rate as Rated by our Monthly Readers
          </p>
        </div>
      </div>
    </section>
  );
}

