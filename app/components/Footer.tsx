/** Footer Component
 * Footer with compliance disclaimers and links
 */

'use client';

import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container py-5">
        <div className="row mb-4">
          {/* Brand */}
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <h5 className="fw-bold mb-3">
              <i className="fas fa-moon me-2"></i>
              Cosmic Reading
            </h5>
            <p className="small opacity-75">
              Discover your true self through personalized moon sign readings powered by AI and ancient astrology.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled small">
              <li className="mb-2">
                <a href="#benefits" className="text-decoration-none opacity-75">
                  Benefits
                </a>
              </li>
              <li className="mb-2">
                <a href="#how-it-works" className="text-decoration-none opacity-75">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#faq" className="text-decoration-none opacity-75">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-12 col-md-4">
            <h6 className="fw-bold mb-3">Legal</h6>
            <ul className="list-unstyled small">
              <li className="mb-2">
                <a href="#" className="text-decoration-none opacity-75">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none opacity-75">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none opacity-75">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="opacity-25 my-4" />

        {/* Copyright & Disclaimers */}
        <div className="text-center small opacity-75">
          <p className="mb-2">
            &copy; {currentYear} Cosmic Reading. All rights reserved.
          </p>
          <p className="mb-2 opacity-50">
            <strong>Affiliate Disclosure:</strong> This website contains affiliate links. We may earn a
            commission if you make a purchase through our links. This does not affect the price you pay.
          </p>
          <p className="opacity-50">
            <strong>Disclaimer:</strong> For entertainment purposes. Results are based on astrological
            calculations and personal interpretation. Not a substitute for professional advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
