import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Phone } from 'lucide-react';

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
    <nav className={`nav bg-glass ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Logo */}
        <a href="#" className="nav-logo">
          <Sparkles className="logo-icon text-gold" size={24} />
          <span className="logo-text">
            OUMI'S <span className="text-gold">HAVEN</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="nav-links-desktop">
          <a href="#services" className="nav-link">Services</a>
          <a href="#gallery" className="nav-link">Styles Gallery</a>
          <a href="#reviews" className="nav-link">Reviews</a>
          <a href="#contact" className="nav-link">Location & Contact</a>
          <a href="tel:2037763381" className="nav-call">
            <Phone size={16} /> 203-776-3381
          </a>
          <button onClick={onBookOpen} className="btn btn-primary nav-btn">
            Book Appointment
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`nav-menu-mobile bg-glass ${isOpen ? 'open' : ''}`}>
        <a href="#services" onClick={() => setIsOpen(false)} className="nav-link-mobile">Services</a>
        <a href="#gallery" onClick={() => setIsOpen(false)} className="nav-link-mobile">Styles Gallery</a>
        <a href="#reviews" onClick={() => setIsOpen(false)} className="nav-link-mobile">Reviews</a>
        <a href="#contact" onClick={() => setIsOpen(false)} className="nav-link-mobile">Location & Contact</a>
        <a href="tel:2037763381" className="nav-call-mobile">
          <Phone size={18} className="text-gold" /> Call 203-776-3381
        </a>
        <button onClick={() => { setIsOpen(false); onBookOpen(); }} className="btn btn-primary btn-mobile">
          Book Appointment
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
          border-bottom: 1px solid var(--border-color-light);
        }
        .nav-scrolled {
          background: rgba(14, 11, 9, 0.95);
          box-shadow: var(--shadow-md);
          padding: 8px 0;
        }
        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 72px;
        }
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.35rem;
          letter-spacing: 0.05em;
        }
        .logo-icon {
          animation: spin-slow 8s linear infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .nav-links-desktop {
          display: flex;
          align-items: center;
          gap: 28px;
        }
        .nav-link {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--text-muted);
          position: relative;
          padding: 4px 0;
        }
        .nav-link:hover, .nav-link:focus {
          color: var(--text-light);
        }
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: var(--primary-gold);
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .nav-call {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--primary-gold);
        }
        .nav-call:hover {
          color: var(--primary-gold-hover);
        }
        .nav-btn {
          padding: 8px 20px;
          font-size: 0.9rem;
        }
        .nav-toggle {
          display: none;
          background: transparent;
          border: none;
          color: var(--text-light);
          cursor: pointer;
        }
        .nav-menu-mobile {
          display: none;
          position: absolute;
          top: 72px;
          left: 0;
          width: 100%;
          padding: 24px;
          flex-direction: column;
          gap: 20px;
          border-top: none;
          border-bottom: 1px solid var(--border-color);
          transform: translateY(-150%);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .nav-menu-mobile.open {
          transform: translateY(0);
        }
        .nav-link-mobile {
          font-size: 1.1rem;
          font-weight: 500;
          padding: 8px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        .nav-call-mobile {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--primary-gold);
        }
        .btn-mobile {
          width: 100%;
          padding: 14px;
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
