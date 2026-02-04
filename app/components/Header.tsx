/** Header/Navigation Component
 * Sticky header with navigation links
 */

'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`${styles.header} sticky-top`}>
      <nav className="navbar navbar-expand-lg navbar-dark w-100">
        <div className="container">
          {/* Logo */}
          <Link href="/" className="navbar-brand fw-bold fs-5">
            <i className="fas fa-moon me-2"></i>
            Cosmic Reading
          </Link>

          {/* Toggle Button */}
          <button
            className="navbar-toggler border-0"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Links */}
          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#benefits">
                  Benefits
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#how-it-works">
                  How It Works
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#testimonials">
                  Testimonials
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#faq">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
