import React from 'react';
import { Sparkles, ArrowUp, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        
        {/* Brand Info */}
        <div className="footer-brand fade-up">
          <a href="#" className="footer-logo">
            <span className="logo-sparkle"><Sparkles size={20} className="text-gold" /></span>
            <span className="heading-sm text-white">OUMI'S HAVEN</span>
          </a>
          <p className="footer-tagline">
            Specializing in high-end natural hair care, professional African braiding, weaves, and styling. Empowering confidence since 1994.
          </p>
          <div className="footer-socials">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0 -5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links-col fade-up stagger-1">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#services">Services Menu</a></li>
            <li><a href="#gallery">Styles Gallery</a></li>
            <li><a href="#reviews">Client Reviews</a></li>
            <li><a href="#contact">Location & Hours</a></li>
          </ul>
        </div>

        {/* Contact Info column */}
        <div className="footer-links-col fade-up stagger-2">
          <h3>Visit Us</h3>
          <ul className="footer-contact">
            <li>
              <MapPin size={16} className="text-pink" />
              <span>1245 Dixwell Ave<br/>Hamden, CT 06514</span>
            </li>
            <li>
              <Phone size={16} className="text-pink" />
              <span>203.776.3381<br/>203.407.0474</span>
            </li>
          </ul>
        </div>

        {/* Action Column */}
        <div className="footer-action-col fade-up stagger-3">
          <button onClick={scrollToTop} className="btn btn-outline-purple top-btn" style={{ borderRadius: 'var(--radius-full)' }} aria-label="Scroll to top">
            Back to Top <ArrowUp size={16} />
          </button>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="container bottom-container">
          <p>&copy; {new Date().getFullYear()} Oumi's Haven Hair Braiding. All Rights Reserved.</p>
          <p className="legacy-text">Diop Family Legacy — Est. 1994</p>
        </div>
      </div>

      <style>{`
        .footer {
          background-color: var(--clr-bg-dark);
          padding: 80px 0 24px;
          margin-top: auto;
          color: rgba(255, 255, 255, 0.7);
        }
        .footer-container {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1.2fr 0.8fr;
          gap: 48px;
          align-items: start;
          text-align: left;
          margin-bottom: 64px;
        }
        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .logo-sparkle {
          margin-bottom: 4px;
        }
        .text-white {
          color: white;
        }
        .text-gold {
          color: var(--clr-gold-light);
        }
        .text-pink {
          color: var(--clr-pink);
        }
        .footer-tagline {
          font-size: 0.9rem;
          line-height: 1.6;
        }
        .footer-socials {
          display: flex;
          gap: 12px;
        }
        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          color: rgba(255, 255, 255, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all var(--trans-fast);
        }
        .social-icon:hover {
          color: var(--clr-gold-light);
          border-color: var(--clr-gold-light);
          background: rgba(197, 147, 62, 0.1);
        }
        
        .footer-links-col h3 {
          font-size: 1.1rem;
          font-family: var(--font-heading);
          color: white;
          margin-bottom: 24px;
          font-weight: 600;
        }
        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .footer-links a {
          font-size: 0.9rem;
          transition: color var(--trans-fast);
        }
        .footer-links a:hover {
          color: var(--clr-pink);
        }
        .footer-contact {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 16px;
          font-size: 0.9rem;
        }
        .footer-contact li {
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }
        .footer-contact span {
          line-height: 1.5;
        }
        
        .footer-action-col {
          display: flex;
          justify-content: flex-end;
          width: 100%;
        }
        .top-btn {
          font-size: 0.85rem;
          padding: 10px 20px;
        }
        
        /* Bottom Copyright row */
        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 24px;
          font-size: 0.8rem;
        }
        .bottom-container {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }
        .legacy-text {
          color: var(--clr-gold-light);
          font-style: italic;
          font-family: var(--font-heading);
          font-size: 0.9rem;
        }

        @media (max-width: 900px) {
          .footer-container {
            grid-template-columns: 1fr 1fr;
          }
          .footer-action-col {
            justify-content: flex-start;
          }
        }
        @media (max-width: 600px) {
          .footer-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .bottom-container {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
