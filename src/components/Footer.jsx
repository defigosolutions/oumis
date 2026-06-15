import React from 'react';
import { Sparkles, ArrowUp, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer bg-glass">
      <div className="container footer-container">
        
        {/* Brand Info */}
        <div className="footer-brand">
          <a href="#" className="footer-logo">
            <Sparkles className="logo-icon text-gold" size={20} />
            <span>OUMI'S <span className="text-gold">HAVEN</span></span>
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
        <div className="footer-links-col">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#services">Services Menu</a></li>
            <li><a href="#gallery">Styles Gallery</a></li>
            <li><a href="#reviews">Client Reviews</a></li>
            <li><a href="#contact">Location & Hours</a></li>
          </ul>
        </div>

        {/* Contact Info column */}
        <div className="footer-links-col">
          <h3>Visit Us</h3>
          <ul className="footer-contact">
            <li>
              <MapPin size={16} className="text-gold" />
              <span>1245 Dixwell Ave, Hamden, CT 06514</span>
            </li>
            <li>
              <Phone size={16} className="text-gold" />
              <span>203-776-3381 / 203-407-0474</span>
            </li>
          </ul>
        </div>

        {/* Action Column */}
        <div className="footer-action-col">
          <button onClick={scrollToTop} className="btn btn-secondary top-btn" aria-label="Scroll to top">
            Back to Top <ArrowUp size={16} />
          </button>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="container bottom-container">
          <p>&copy; {new Date().getFullYear()} Oumi's Haven Hair Braiding. All Rights Reserved.</p>
          <p className="legacy-text">Diop Family Legacy — Operating in Hamden for over 30 Years.</p>
        </div>
      </div>

      <style>{`
        .footer {
          background-color: #080605;
          padding: 64px 0 24px;
          border-top: 1px solid var(--border-color);
          margin-top: auto;
        }
        .footer-container {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1.2fr 0.8fr;
          gap: 40px;
          align-items: start;
          text-align: left;
          margin-bottom: 48px;
        }
        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.25rem;
          letter-spacing: 0.05em;
        }
        .footer-tagline {
          font-size: 0.85rem;
          color: var(--text-muted);
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
          background: var(--bg-surface-light);
          color: var(--text-muted);
          border: 1px solid var(--border-color-light);
        }
        .social-icon:hover {
          color: var(--primary-gold);
          border-color: var(--primary-gold);
          background: var(--accent-gold-soft);
        }
        
        .footer-links-col h3 {
          font-size: 1rem;
          text-transform: uppercase;
          color: var(--text-light);
          margin-bottom: 20px;
          letter-spacing: 0.05em;
          font-weight: 600;
        }
        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .footer-links a {
          font-size: 0.85rem;
          color: var(--text-muted);
        }
        .footer-links a:hover {
          color: var(--primary-gold);
          padding-left: 4px;
        }
        .footer-contact {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 14px;
          font-size: 0.85rem;
          color: var(--text-muted);
        }
        .footer-contact li {
          display: flex;
          gap: 10px;
          align-items: flex-start;
        }
        .footer-contact span {
          line-height: 1.4;
        }
        
        .footer-action-col {
          display: flex;
          justify-content: flex-end;
          width: 100%;
        }
        .top-btn {
          font-size: 0.85rem;
          padding: 8px 16px;
        }
        
        /* Bottom Copyright row */
        .footer-bottom {
          border-top: 1px solid var(--border-color-light);
          padding-top: 24px;
          font-size: 0.8rem;
          color: var(--text-muted);
        }
        .bottom-container {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }
        .legacy-text {
          color: var(--primary-gold);
          font-weight: 500;
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
            gap: 32px;
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
