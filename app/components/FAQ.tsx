/** FAQ Component
 * Frequently asked questions with accordion functionality
 * SEO: Uses H2 for section and H3 for each question
 */

'use client';

import { useState } from 'react';
import styles from './FAQ.module.css';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "What's the difference between my sun sign and moon sign?",
      answer:
        'Your sun sign (zodiac sign) represents your core identity and how you appear to the world. Your moon sign represents your emotional inner world, private self, and subconscious needs. While your sun sign is your ego, your moon sign is your soul. Most people only know their sun sign, but your moon sign is equally important for understanding yourself.',
    },
    {
      question: 'Do I need my exact birth time?',
      answer:
        'Yes, your birth time is crucial for accurate moon sign calculation. Your moon sign changes approximately every 2-3 days, but your exact position depends on the time of day you were born. If you don\'t know your exact birth time, check your birth certificate or contact the hospital where you were born. Most records are available for a small fee.',
    },
    {
      question: 'Is this reading guaranteed to be accurate?',
      answer:
        'Our personalized readings are based on the most accurate astrological calculations available, combined with AI analysis. While astrology is an ancient practice with millions of believers, we recommend using your reading as a tool for self-reflection and personal growth. Your reading provides genuine insights into your personality and potential—the interpretation and application are up to you.',
    },
    {
      question: 'What will I receive in my reading?',
      answer:
        'Your personalized report includes: your precise moon sign and its meaning, detailed personality insights (7+ hidden traits), love and compatibility analysis, career and life purpose guidance, relationship patterns, and a personalized action plan. You\'ll also get bonus compatibility readings and extended interpretations for deeper self-understanding.',
    },
    {
      question: 'Is my information private and secure?',
      answer:
        '100% yes. Your birth information and personal data are encrypted and never shared with third parties. We use industry-standard SSL encryption and secure servers to protect your information. Your privacy is our top priority, and you\'ll receive your reading instantly after submission.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-5" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
      <div className="container">
        {/* Section Header */}
        <h2 className="text-center mb-5 fw-bold text-dark">
          Frequently Asked Questions
        </h2>

        {/* FAQ Container */}
        <div className={styles.faqContainer}>
          {faqs.map((faq, index) => (
            <div key={index} className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}>
              {/* Question Button */}
              <button
                className={styles.faqQuestion}
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
              >
                <span className="fw-bold text-start flex-grow-1">
                  {/* H3 for SEO */}
                  <h3 className="fs-6 mb-0">{faq.question}</h3>
                </span>
                <span className={styles.faqToggle}>
                  <i className={`fas ${activeIndex === index ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                </span>
              </button>

              {/* Answer */}
              <div className={styles.faqAnswer}>
                <p className="text-muted">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
