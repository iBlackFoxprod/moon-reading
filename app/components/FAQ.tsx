/** FAQ Component
 * Frequently asked questions with cosmic theme
 */

'use client';

import { useState } from 'react';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "Difference between Sun and Moon sign?",
      answer:
        'Your sun sign represents your core identity. Your moon sign represents your emotional inner world, private self, and subconscious needs. Knowing both is crucial for a complete picture.',
    },
    {
      question: 'Do I need my exact birth time?',
      answer:
        'Yes, birth time is crucial for accuracy. The moon moves quickly, and even a few hours can change your lunar alignment significantly.',
    },
    {
      question: 'Is this reading guaranteed?',
      answer:
        'Our readings use advanced astronomical data. While they provide deep personality insights, they are meant for self-reflection and personal growth.',
    },
    {
      question: 'What is included in the reading?',
      answer:
        'You will receive a complete lunar profile, emotional blueprint, and compatibility analysis designed to help you navigate your life with clarity.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-5 position-relative">
      <div className="container py-5">
        <h2 className="text-center mb-5 display-4 fw-800 text-gradient glow">
          Celestial Inquiries
        </h2>

        <div className="mx-auto" style={{ maxWidth: '800px' }}>
          {faqs.map((faq, index) => (
            <div key={index} className="glass-card mb-3 overflow-hidden">
              <button
                className="w-100 p-4 text-start bg-transparent border-0 d-flex align-items-center justify-content-between"
                onClick={() => toggleFAQ(index)}
                style={{ color: 'inherit' }}
              >
                <span className="fw-800">{faq.question}</span>
                <i className={`fas ${activeIndex === index ? 'fa-minus' : 'fa-plus'} text-primary`}></i>
              </button>
              {activeIndex === index && (
                <div className="px-4 pb-4 animate-fade-in-up">
                  <p className="text-dim mb-0 small">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

