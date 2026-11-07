import React, { useState } from 'react';

/**
 * Editorial Header Component
 * 
 * Demonstrates:
 * - Functional component architecture
 * - Responsive navigation with mobile drawer state
 * - Clean prop contracts for brand name and navigation items
 */
function Header({
  brandName = 'The Daily Journal',
  tagline = 'An Independent Chronicle of Ideas, Code & Modern Thought',
  navLinks = [
    { id: 'featured', label: 'Featured Story' },
    { id: 'articles', label: 'All Articles' },
    { id: 'categories', label: 'Topics' },
    { id: 'newsletter', label: 'Newsletter' },
  ],
  activeSection = 'articles',
  onNavClick,
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (id) => {
    if (onNavClick) {
      onNavClick(id);
    }
    setMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="journal-header">
      {/* Top Utility Bar with Date & Volume */}
      <div className="header-meta-bar">
        <div className="meta-container">
          <span className="issue-date">Week 1 Edition · November 2026</span>
          <span className="issue-meta">Curated by Amisha Josna Dsouza · BeeSkilled Assignment</span>
        </div>
      </div>

      {/* Main Masthead */}
      <div className="header-masthead">
        <div className="masthead-container">
          <div className="brand-block" onClick={() => handleLinkClick('featured')}>
            <span className="journal-symbol">✦</span>
            <h1 className="journal-title">{brandName}</h1>
            <p className="journal-tagline">{tagline}</p>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            className="mobile-nav-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="nav-bar"></span>
            <span className="nav-bar"></span>
            <span className="nav-bar"></span>
          </button>
        </div>
      </div>

      {/* Primary Navigation Ribbon */}
      <nav className={`journal-navbar ${mobileMenuOpen ? 'nav-open' : ''}`}>
        <div className="navbar-container">
          <ul className="nav-links-list">
            {navLinks.map((link) => (
              <li key={link.id} className="nav-link-item">
                <a
                  href={`#${link.id}`}
                  className={`nav-anchor ${activeSection === link.id ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.id);
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="nav-badge">
            <span className="badge-pulse"></span>
            <span>12 Articles Published</span>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

