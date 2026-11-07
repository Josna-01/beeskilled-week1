import React from 'react';

/**
 * Editorial Footer Component
 * 
 * Demonstrates:
 * - Semantic footer markup
 * - Props customization
 * - Categorical link rendering
 */
function Footer({
  brandName = 'The Daily Journal',
  tagline = 'Exploring the intersection of modern software architecture, thoughtful design, and lifelong learning.',
  copyright = '© 2026 The Daily Journal. Built for BeeSkilled Week 1 Assignment by Amisha Josna Dsouza.',
  editorialTopics = ['Technology', 'Programming', 'Design', 'Lifestyle', 'Education'],
  onTopicClick,
}) {
  const quickLinks = [
    { label: 'Featured Dispatch', href: '#featured' },
    { label: 'Latest Articles', href: '#articles' },
    { label: 'Weekly Digest', href: '#newsletter' },
    { label: 'Submissions & Pitching', href: '#newsletter' },
  ];

  const socialLinks = [
    { label: 'GitHub', icon: '🐙', url: 'https://github.com/Josna-01' },
    { label: 'LinkedIn', icon: '💼', url: 'https://linkedin.com' },
    { label: 'RSS Feed', icon: '📡', url: '#rss' },
    { label: 'X / Twitter', icon: '𝕏', url: '#twitter' },
  ];

  return (
    <footer className="journal-footer">
      <div className="footer-container">
        {/* Top Grid */}
        <div className="footer-grid">
          {/* Masthead Col */}
          <div className="footer-col brand-col">
            <div className="footer-brand">
              <span className="footer-symbol">✦</span>
              <h4 className="footer-title">{brandName}</h4>
            </div>
            <p className="footer-tagline">{tagline}</p>
            <div className="footer-meta-pill">
              <span>ISSN 2841-9034 · Issue 01</span>
            </div>
          </div>

          {/* Topics Col */}
          <div className="footer-col">
            <h5 className="footer-heading">Editorial Topics</h5>
            <ul className="footer-links-list">
              {editorialTopics.map((topic) => (
                <li key={topic}>
                  <button
                    type="button"
                    className="topic-btn-link"
                    onClick={() => {
                      if (onTopicClick) onTopicClick(topic);
                      const target = document.getElementById('articles');
                      if (target) target.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {topic}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Col */}
          <div className="footer-col">
            <h5 className="footer-heading">Sections</h5>
            <ul className="footer-links-list">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social / Connect Col */}
          <div className="footer-col">
            <h5 className="footer-heading">Connect</h5>
            <div className="footer-social-wrap">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  className="social-button"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <span className="social-icon">{social.icon}</span>
                  <span className="social-name">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">{copyright}</p>
          <div className="footer-academic-badge">
            <span>BeeSkilled Week 1 · Task 3</span>
            <span className="badge-divider">|</span>
            <span>React + Vite + JSON</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

