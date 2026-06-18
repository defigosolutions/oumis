import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Sparkles } from 'lucide-react';

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
    <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Logo */}
        <a href="#" className="nav-logo">
          <span className="logo-sparkle"><Sparkles size={18} className="text-gradient-gold" /></span>
          <span className="heading-sm">OUMI'S HAVEN</span>
        </a>

        {/* Desktop Menu */}
        <div className="nav-links-desktop">
          <a href="#services" className="nav-link">Services</a>
          <a href="#gallery" className="nav-link">Gallery</a>
          <a href="#reviews" className="nav-link">Reviews</a>
          <a href="#contact" className="nav-link">Contact</a>
          <a href="tel:2037763381" className="nav-call">
            <Phone size={14} /> 203.776.3381
          </a>
          <button onClick={onBookOpen} className="btn btn-primary nav-btn" style={{ borderRadius: 'var(--radius-full)' }}>
            Book Appointment
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`nav-menu-mobile ${isOpen ? 'open' : ''}`}>
        <a href="#services" onClick={() => setIsOpen(false)} className="nav-link-mobile">Services</a>
        <a href="#gallery" onClick={() => setIsOpen(false)} className="nav-link-mobile">Gallery</a>
        <a href="#reviews" onClick={() => setIsOpen(false)} className="nav-link-mobile">Reviews</a>
        <a href="#contact" onClick={() => setIsOpen(false)} className="nav-link-mobile">Contact</a>
        <a href="tel:2037763381" className="nav-call-mobile">
          <Phone size={16} color="var(--clr-rose)" /> 203.776.3381
        </a>
        <button onClick={() => { setIsOpen(false); onBookOpen(); }} className="btn btn-primary btn-mobile" style={{ borderRadius: 'var(--radius-full)' }}>
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
          border-bottom: 1px solid transparent;
          background: transparent;
        }
        .nav-scrolled {
          background: rgba(250, 248, 245, 0.95);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--clr-border);
          box-shadow: var(--shadow-sm);
        }
        /* When not scrolled and on hero (which is dark), text is white. 
           But since Wido uses warm ivory everywhere or dark hero, let's assume ivory background everywhere except hero. 
           Wait, Hero is dark? Wido hero might be dark with glass card. Let's make navbar text dark always for simplicity unless we specifically style it. */
        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 80px;
        }
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--clr-heading);
        }
        .logo-sparkle {
          margin-bottom: 4px;
        }
        .nav-links-desktop {
          display: flex;
          align-items: center;
          gap: 32px;
        }
        .nav-link {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--clr-text);
          position: relative;
        }
        .nav-link:hover, .nav-link:focus {
          color: var(--clr-rose);
        }
        .nav-call {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--clr-text-muted);
        }
        .nav-call:hover {
          color: var(--clr-rose);
        }
        .nav-btn {
          padding: 10px 24px;
          font-size: 0.85rem;
          text-transform: none;
        }
        .nav-toggle {
          display: none;
          background: transparent;
          border: none;
          color: var(--clr-text);
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
          background: var(--clr-bg);
          border-bottom: 1px solid var(--clr-border);
          box-shadow: var(--shadow-sm);
          transform: translateY(-150%);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .nav-menu-mobile.open {
          transform: translateY(0);
        }
        .nav-link-mobile {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--clr-heading);
          border-bottom: 1px solid var(--clr-border);
          padding-bottom: 12px;
        }
        .nav-call-mobile {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 1.1rem;
          font-weight: 500;
          color: var(--clr-text);
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
