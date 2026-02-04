/** Footer Component
 * Premium footer with compliance and celestial theme
 */

'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-5" style={{ background: '#030308', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
      <div className="container">
        <div className="row mb-5 text-center text-md-start">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h5 className="fw-800 text-gradient glow mb-4">COSMIC READING</h5>
            <p className="text-dim small pe-lg-5">
              Harnessing the power of lunar alignment to reveal your true emotional blueprint. Join the thousands who have already found clarity.
            </p>
          </div>
          <div className="col-6 col-lg-2 offset-lg-2 mb-4">
            <h6 className="fw-800 uppercase small tracking-widest text-primary mb-4">Company</h6>
            <ul className="list-unstyled small text-dim">
              <li className="mb-2"><a href="#" className="text-reset text-decoration-none">Privacy Policy</a></li>
              <li className="mb-2"><a href="#" className="text-reset text-decoration-none">Terms of Service</a></li>
            </ul>
          </div>
          <div className="col-6 col-lg-2">
            <h6 className="fw-800 uppercase small tracking-widest text-primary mb-4">Connect</h6>
            <ul className="list-unstyled small text-dim">
              <li className="mb-2"><a href="#" className="text-reset text-decoration-none">Support</a></li>
              <li className="mb-2"><a href="#" className="text-reset text-decoration-none">Facebook</a></li>
            </ul>
          </div>
        </div>

        <div className="glass-card p-4 mt-5 text-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)' }}>
          <div className="small text-dim mx-auto" style={{ maxWidth: '800px' }}>
            <p className="mb-3">
              <strong>Advertorial:</strong> This website is an advertorial and not a news publication. It is intended for advertisement purposes.
            </p>
            <p className="mb-3 opacity-50">
              <strong>Affiliate Statement:</strong> We are a professional review site that receives compensation from the companies whose products we review. We test each product thoroughly and give high marks to only the very best.
            </p>
            <p className="mb-0 opacity-50">
              Disclaimer: For entertainment purposes only. Results vary based on individual focus.
            </p>
          </div>
        </div>

        <div className="text-center mt-5 small text-dim opacity-50">
          <p>&copy; {currentYear} Cosmic Reading. All Lunar Cycles Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

