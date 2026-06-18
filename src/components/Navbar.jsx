import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar({ onBookOpen }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'nav-scrolled bg-glass' : ''}`}>
      <div className="container nav-container">
        {/* Logo */}
        <a href="#" className="nav-logo">
          OUMI'S<span className="text-accent">HAVEN</span>
        </a>

        {/* Desktop Menu */}
        <div className="nav-links-desktop">
          <a href="#services" className="nav-link">SERVICES</a>
          <a href="#gallery" className="nav-link">GALLERY</a>
          <a href="#reviews" className="nav-link">REVIEWS</a>
          <a href="#contact" className="nav-link">CONTACT</a>
          <a href="tel:2037763381" className="nav-call">
            <Phone size={14} /> 203.776.3381
          </a>
          <button onClick={onBookOpen} className="btn btn-primary nav-btn">
            BOOK NOW
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`nav-menu-mobile bg-glass ${isOpen ? 'open' : ''}`}>
        <a href="#services" onClick={() => setIsOpen(false)} className="nav-link-mobile">SERVICES</a>
        <a href="#gallery" onClick={() => setIsOpen(false)} className="nav-link-mobile">GALLERY</a>
        <a href="#reviews" onClick={() => setIsOpen(false)} className="nav-link-mobile">REVIEWS</a>
        <a href="#contact" onClick={() => setIsOpen(false)} className="nav-link-mobile">CONTACT</a>
        <a href="tel:2037763381" className="nav-call-mobile">
          <Phone size={16} className="text-accent" /> 203.776.3381
        </a>
        <button onClick={() => { setIsOpen(false); onBookOpen(); }} className="btn btn-primary btn-mobile">
          BOOK NOW
        </button>
      </div>

      <style>{`
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          transition: all 0.3s ease;
          border-bottom: 1px solid transparent;
          background: var(--bg-white);
        }
        .nav-scrolled {
          border-bottom: 1px solid var(--border-color-dark);
          padding: 0;
        }
        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 80px;
        }
        .nav-logo {
          display: flex;
          align-items: center;
          font-family: var(--font-heading);
          font-weight: 900;
          font-size: 1.5rem;
          letter-spacing: -0.02em;
          color: var(--text-dark);
        }
        .nav-links-desktop {
          display: flex;
          align-items: center;
          gap: 32px;
        }
        .nav-link {
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          color: var(--text-dark);
          position: relative;
          padding: 8px 0;
        }
        .nav-link:hover, .nav-link:focus {
          color: var(--primary-accent);
        }
        .nav-call {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--primary-accent);
          letter-spacing: 0.05em;
        }
        .nav-call:hover {
          color: var(--primary-accent-hover);
        }
        .nav-btn {
          padding: 10px 24px;
          font-size: 0.8rem;
        }
        .nav-toggle {
          display: none;
          background: transparent;
          border: none;
          color: var(--text-dark);
          cursor: pointer;
        }
        .nav-menu-mobile {
          display: none;
          position: absolute;
          top: 80px;
          left: 0;
          width: 100%;
          padding: 32px 24px;
          flex-direction: column;
          gap: 24px;
          border-top: 1px solid var(--border-color-dark);
          border-bottom: 1px solid var(--border-color-dark);
          transform: translateY(-150%);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .nav-menu-mobile.open {
          transform: translateY(0);
        }
        .nav-link-mobile {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-dark);
          padding: 8px 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }
        .nav-call-mobile {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--primary-accent);
        }
        .btn-mobile {
          width: 100%;
          padding: 16px;
          margin-top: 16px;
        }

        @media (max-width: 900px) {
          .nav-links-desktop {
            display: none;
          }
          .nav-toggle {
            display: block;
          }
          .nav-menu-mobile {
            display: flex;
          }
        }
      `}</style>
    </nav>
  );
}
