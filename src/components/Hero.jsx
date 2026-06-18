import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero({ onBookOpen }) {
  return (
    <header className="hero section" id="home">
      <div className="container hero-container animate-fade-in">
        
        {/* Left Column: Text Content */}
        <div className="hero-content">
          <div className="hero-tag">
            <span>NEW HAVEN CT</span>
          </div>
          
          <h1 className="hero-title">
            MASTERFUL <br /><span className="text-accent">BRAIDING.</span>
          </h1>
          
          <p className="hero-description">
            Experience the artistry of professional African hair braiding. Founded by Oumi Diop, we specialize in high-end natural hair care, box braids, cornrows, weaves, and custom extensions tailored to make you glow.
          </p>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">30+</span>
              <span className="stat-label">YEARS EXP</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">4.8</span>
              <span className="stat-label">STARS</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="hero-actions">
            <button onClick={onBookOpen} className="btn btn-primary">
              BOOK APPOINTMENT <ArrowRight size={18} />
            </button>
            <a href="#services" className="btn btn-secondary">
              EXPLORE SERVICES
            </a>
          </div>
        </div>

        {/* Right Column: Hero Image Frame */}
        <div className="hero-image-area">
          <div className="image-frame">
            <img 
              src="/oumis_hero_braids.png" 
              alt="Intricate Box Braids at Oumi's Haven" 
              className="hero-image"
            />
            <div className="floating-badge bg-glass">
              <span className="badge-title">DIOP LEGACY</span>
              <span className="badge-subtitle">EST. 1994</span>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .hero {
          padding-top: 180px;
          padding-bottom: 100px;
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: var(--bg-white);
          border-bottom: 1px solid var(--border-color-dark);
        }
        .hero-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }
        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }
        .hero-tag {
          display: flex;
          align-items: center;
          border-bottom: 2px solid var(--primary-accent);
          padding-bottom: 4px;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-dark);
          margin-bottom: 32px;
          letter-spacing: 0.1em;
        }
        .hero-title {
          font-size: 5rem;
          line-height: 1;
          margin-bottom: 32px;
          font-weight: 900;
          color: var(--text-dark);
          letter-spacing: -0.04em;
        }
        .hero-description {
          font-size: 1.15rem;
          color: var(--text-muted);
          margin-bottom: 48px;
          max-width: 500px;
          line-height: 1.6;
        }
        .hero-stats {
          display: flex;
          align-items: center;
          gap: 32px;
          margin-bottom: 48px;
        }
        .stat-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .stat-number {
          font-size: 2.5rem;
          font-weight: 900;
          font-family: var(--font-heading);
          color: var(--text-dark);
          line-height: 1;
        }
        .stat-label {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-muted);
          letter-spacing: 0.1em;
        }
        .stat-divider {
          width: 2px;
          height: 40px;
          background-color: var(--primary-accent);
        }
        .hero-actions {
          display: flex;
          gap: 16px;
          margin-bottom: 32px;
          width: 100%;
        }
        
        /* Image Area */
        .hero-image-area {
          position: relative;
          width: 100%;
          display: flex;
          justify-content: flex-end;
        }
        .image-frame {
          position: relative;
          z-index: 2;
          width: 100%;
          aspect-ratio: 3 / 4;
          overflow: hidden;
          background: var(--bg-surface);
        }
        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(20%) contrast(1.1);
        }
        .floating-badge {
          position: absolute;
          bottom: 0;
          left: 0;
          padding: 24px 32px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          border-right: 1px solid var(--border-color-dark);
          border-top: 1px solid var(--border-color-dark);
        }
        .badge-title {
          font-family: var(--font-heading);
          font-weight: 900;
          font-size: 1.25rem;
          color: var(--text-dark);
          letter-spacing: -0.02em;
        }
        .badge-subtitle {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--primary-accent);
          letter-spacing: 0.1em;
        }

        @media (max-width: 1024px) {
          .hero-title {
            font-size: 4rem;
          }
        }

        @media (max-width: 768px) {
          .hero {
            padding-top: 120px;
            padding-bottom: 60px;
          }
          .hero-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .hero-content {
            align-items: flex-start;
          }
          .hero-actions {
            flex-direction: column;
            gap: 16px;
            align-items: stretch;
          }
          .image-frame {
            aspect-ratio: 1;
          }
        }
      `}</style>
    </header>
  );
}
