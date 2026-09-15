import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/images/logo-full-footer.png';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <footer className="site-footer">
        <div className="container footer-main">
          {/* Footer Brand Info */}
          <div className="footer-brand">
            <img
              className="footer-logo"
              src={logo}
              alt="Sanskriti Canvas"
            />
            <p>
              A thoughtful digital canvas for discovering India's heritage, traditions, culture and timeless stories.
            </p>
          </div>

          {/* Explore Links */}
          <div>
            <div className="footer-title">Explore</div>
            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/explore">Explore India</Link>
              <Link to="/heritage">Heritage</Link>
            </div>
          </div>

          {/* Project Links */}
          <div>
            <div className="footer-title">Project</div>
            <div className="footer-links">
              <Link to="/about">About Us</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/explore">Coming Soon</Link>
            </div>
          </div>

          {/* Focus Links */}
          <div>
            <div className="footer-title">Focus</div>
            <div className="footer-links">
              <Link to="/heritage">Heritage Sites</Link>
              <Link to="/#traditions">Traditions</Link>
              <Link to="/#culture">Culture &amp; Stories</Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <div className="container footer-bottom-inner">
            <span>© 2026 Sanskriti Canvas. All rights reserved.</span>
            <span>Made with respect for India's living heritage.</span>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        className="back-top"
        aria-label="Back to top"
        onClick={scrollToTop}
      >
        ↑
      </button>

      {/* Toast Notification Container */}
      <div className="toast" role="status"></div>
    </>
  );
}