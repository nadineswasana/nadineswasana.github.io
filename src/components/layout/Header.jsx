import React, { useState, useEffect } from 'react';
import './Header.css';

const navItems = [
  { label: 'Works', id: 'projects' },
  { label: 'Experiences', id: 'experiences' },
  { label: 'Awards', id: 'honors' }
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Simple active section detection
      const sections = ['hero', ...navItems.map(item => item.id)];
      const scrollPos = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className={`header-wrapper ${scrolled ? 'header-scrolled' : ''}`}>
      <nav className="header-nav">
        <a 
          href="#hero" 
          onClick={(e) => { e.preventDefault(); scrollTo('hero'); }} 
          className="nav-brand"
        >
          Nadine Swasana
        </a>

        {/* Desktop All Section Menus */}
        <div className="nav-links-desktop">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => { e.preventDefault(); scrollTo(item.id); }}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#behind-builder" 
            onClick={(e) => { e.preventDefault(); scrollTo('behind-builder'); }} 
            className="nav-btn-resume"
          >
            Resume
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          className={`nav-toggle-btn ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <span className="toggle-bar"></span>
          <span className="toggle-bar"></span>
          <span className="toggle-bar"></span>
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div className={`nav-mobile-dropdown ${mobileMenuOpen ? 'is-visible' : ''}`}>
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => { e.preventDefault(); scrollTo(item.id); }}
            className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
          >
            {item.label}
          </a>
        ))}
        <a 
          href="#behind-builder" 
          onClick={(e) => { e.preventDefault(); scrollTo('behind-builder'); }} 
          className="mobile-btn-resume"
        >
          Resume
        </a>
      </div>
    </header>
  );
}
