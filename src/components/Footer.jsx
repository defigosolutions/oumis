import React from 'react';
import { ArrowUp, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer bg-dark">
      <div className="container footer-container">
        
        {/* Brand Info */}
        <div className="footer-brand">
          <a href="#" className="footer-logo">
            OUMI'S <span className="text-accent">HAVEN</span>
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
          <h3>LINKS</h3>
          <ul className="footer-links">
            <li><a href="#services">SERVICES MENU</a></li>
            <li><a href="#gallery">LOOKBOOK</a></li>
            <li><a href="#reviews">TESTIMONIALS</a></li>
            <li><a href="#contact">LOCATION & HOURS</a></li>
          </ul>
        </div>

        {/* Contact Info column */}
        <div className="footer-links-col">
          <h3>VISIT</h3>
          <ul className="footer-contact">
            <li>
              <MapPin size={16} className="text-accent" />
              <span>1245 DIXWELL AVE<br/>HAMDEN, CT 06514</span>
            </li>
            <li>
              <Phone size={16} className="text-accent" />
              <span>203.776.3381<br/>203.407.0474</span>
            </li>
          </ul>
        </div>

        {/* Action Column */}
        <div className="footer-action-col">
          <button onClick={scrollToTop} className="btn btn-secondary top-btn" aria-label="Scroll to top">
            BACK TO TOP <ArrowUp size={16} />
          </button>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="container bottom-container">
          <p>&copy; {new Date().getFullYear()} OUMI'S HAVEN. ALL RIGHTS RESERVED.</p>
          <p className="legacy-text">DIOP FAMILY LEGACY — EST. 1994</p>
        </div>
      </div>

      <style>{`
        .footer {
          padding: 100px 0 24px;
          border-top: 2px solid var(--text-dark);
          margin-top: auto;
        }
        .footer-container {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1.2fr 0.8fr;
          gap: 64px;
          align-items: start;
          text-align: left;
          margin-bottom: 64px;
        }
        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-heading);
          font-weight: 900;
          font-size: 1.5rem;
          letter-spacing: -0.02em;
          color: var(--text-light);
        }
        .footer-tagline {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.6;
          letter-spacing: 0.05em;
        }
        .footer-socials {
          display: flex;
          gap: 16px;
        }
        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: transparent;
          color: var(--text-light);
          border: 1px solid var(--border-color);
          transition: all 0.2s ease;
        }
        .social-icon:hover {
          color: var(--bg-deep);
          border-color: var(--text-light);
          background: var(--text-light);
        }
        
        .footer-links-col h3 {
          font-size: 0.85rem;
          text-transform: uppercase;
          color: var(--primary-accent);
          margin-bottom: 24px;
          letter-spacing: 0.1em;
          font-weight: 900;
        }
        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .footer-links a {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 700;
          letter-spacing: 0.05em;
        }
        .footer-links a:hover {
          color: var(--text-light);
        }
        .footer-contact {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 24px;
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 700;
          letter-spacing: 0.05em;
        }
        .footer-contact li {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }
        .footer-contact span {
          line-height: 1.6;
        }
        
        .footer-action-col {
          display: flex;
          justify-content: flex-end;
          width: 100%;
        }
        .top-btn {
          font-size: 0.85rem;
          padding: 12px 24px;
        }
        
        /* Bottom Copyright row */
        .footer-bottom {
          border-top: 1px solid var(--border-color-dark);
          padding-top: 32px;
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 700;
          letter-spacing: 0.1em;
        }
        .bottom-container {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }
        .legacy-text {
          color: var(--primary-accent);
        }

        @media (max-width: 1024px) {
          .footer-container {
            grid-template-columns: 1fr 1fr;
            gap: 48px;
          }
          .footer-action-col {
            justify-content: flex-start;
          }
        }
        @media (max-width: 600px) {
          .footer-container {
            grid-template-columns: 1fr;
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
