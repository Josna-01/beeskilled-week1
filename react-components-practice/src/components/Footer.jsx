import React from 'react';

/**
 * Reusable Footer Component
 * 
 * Demonstrates:
 * - Props receiving (copyright, links, columns)
 * - Semantic HTML & responsive footer layout
 * - Reusable across applications
 */
function Footer({
  copyright = '© 2026 EduPulse Student Portal. All rights reserved.',
  tagline = 'Empowering student developers with hands-on component-driven learning.',
  links = [
    { label: 'Documentation', url: '#home' },
    { label: 'Course Catalog', url: '#courses' },
    { label: 'Component Lab', url: '#practice' },
    { label: 'Feedback Desk', url: '#feedback' },
  ],
  socialLinks = [
    { label: 'GitHub', icon: '🐙', url: 'https://github.com/Josna-01' },
    { label: 'LinkedIn', icon: '💼', url: 'https://linkedin.com' },
    { label: 'Community', icon: '💬', url: '#community' },
  ],
}) {
  return (
    <footer className="app-footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand-section">
            <div className="footer-brand">
              <span className="brand-icon">🎓</span>
              <span className="brand-title">EduPulse</span>
            </div>
            <p className="footer-tagline">{tagline}</p>
          </div>

          <div className="footer-links-section">
            <h4 className="footer-column-title">Quick Links</h4>
            <ul className="footer-nav-list">
              {links.map((link) => (
                <li key={link.label}>
                  <a href={link.url} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-social-section">
            <h4 className="footer-column-title">Connect & Track</h4>
            <div className="social-pill-group">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  className="social-pill"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <span className="social-icon">{social.icon}</span>
                  <span className="social-label">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">{copyright}</p>
          <div className="footer-badges">
            <span className="footer-badge">React 18/19</span>
            <span className="footer-badge">Vite</span>
            <span className="footer-badge">BeeSkilled Week 1</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
