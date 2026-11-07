import React, { useState } from 'react';

/**
 * Reusable Header Component
 * 
 * Demonstrates:
 * - Props receiving (title, navItems, activeTab, onNavClick)
 * - State management with useState (mobile menu toggle)
 * - Component composition & responsive navigation
 */
function Header({
  title = 'EduPulse',
  subtitle = 'Student Portal',
  navItems = [
    { id: 'home', label: 'Home' },
    { id: 'courses', label: 'Courses' },
    { id: 'practice', label: 'Component Lab' },
    { id: 'feedback', label: 'Contact' },
  ],
  activeTab = 'home',
  onNavClick,
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id) => {
    if (onNavClick) {
      onNavClick(id);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="app-header">
      <div className="header-container">
        {/* Brand / Logo */}
        <div className="header-brand" onClick={() => handleNavClick('home')}>
          <div className="brand-icon">🎓</div>
          <div className="brand-text">
            <span className="brand-title">{title}</span>
            {subtitle && <span className="brand-subtitle">{subtitle}</span>}
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className="mobile-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Navigation links */}
        <nav className={`header-nav ${mobileMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            {navItems.map((item) => {
              const itemId = typeof item === 'string' ? item.toLowerCase() : item.id;
              const itemLabel = typeof item === 'string' ? item : item.label;
              const isActive = activeTab === itemId;

              return (
                <li key={itemId} className="nav-item">
                  <a
                    href={`#${itemId}`}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(itemId);
                      const target = document.getElementById(itemId);
                      if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {itemLabel}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="header-user-badge">
            <span className="user-avatar">AD</span>
            <span className="user-name">Amisha D.</span>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;

