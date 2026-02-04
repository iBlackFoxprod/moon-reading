/** Header/Navigation Component
 * Glassmorphic sticky header
 */

'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky-top" style={{ backdropFilter: 'blur(10px)', background: 'rgba(5, 5, 16, 0.7)', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
      <nav className="navbar navbar-expand-lg navbar-dark py-3">
        <div className="container">
          <Link href="/" className="navbar-brand fw-800 fs-4 glow">
            <i className="fas fa-moon text-primary me-2"></i>
            COSMIC<span className="text-primary">READING</span>
          </Link>

          <button
            className="navbar-toggler border-0"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-white`}></i>
          </button>

          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
            <ul className="navbar-nav ms-auto gap-lg-4">
              {['Benefits', 'Testimonials', 'FAQ'].map((item) => (
                <li key={item} className="nav-item">
                  <a className="nav-link fw-600 uppercase small tracking-widest hover-accent" href={`#${item.toLowerCase()}`}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

