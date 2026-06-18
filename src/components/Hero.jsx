import React from 'react';
import { ArrowRight, Star, ShieldCheck, Award } from 'lucide-react';

export default function Hero({ onBookOpen }) {
  return (
    <header className="hero section" id="home">
      <div className="hero-bg-overlay"></div>
      <div className="container hero-container fade-up">
        
        {/* Left Column: Text Content */}
        <div className="hero-content">
          <div className="section-tag">
            New Haven, CT
          </div>
          
          <h1 className="heading-xl hero-title">
            Elegant Braiding & <br />
            <span className="hero-cursive">Natural Hair Care</span>
          </h1>
          
          <p className="hero-description text-muted">
            Experience the artistry of professional African hair braiding. Founded by Oumi Diop, we specialize in high-end natural hair care, box braids, cornrows, weaves, and custom extensions tailored to make you glow.
          </p>

          <div className="hero-stats glass-card">
            <div className="stat-item">
              <span className="stat-number">30+</span>
              <span className="stat-label">Years Exp.</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">4.8</span>
              <span className="stat-label">Stars</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">3k+</span>
              <span className="stat-label">Clients</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="hero-actions">
            <button onClick={onBookOpen} className="btn btn-primary" style={{ borderRadius: 'var(--radius-full)', padding: '1rem 2.5rem' }}>
              Book Appointment
            </button>
            <a href="#services" className="btn btn-outline-purple" style={{ borderRadius: 'var(--radius-full)', padding: '1rem 2.5rem' }}>
              Explore Services
            </a>
          </div>
        </div>

        {/* Right Column: Hero Image Frame */}
        <div className="hero-image-area">
          <div className="image-blob"></div>
          <div className="image-frame glass-card">
            <img 
              src="/oumis_hero_braids.png" 
              alt="Intricate Box Braids at Oumi's Haven" 
              className="hero-image"
            />
            <div className="floating-badge light-card">
              <span className="badge-title">Diop Legacy</span>
              <span className="badge-subtitle">Est. 1994</span>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .hero {
          position: relative;
          padding-top: 160px;
          padding-bottom: 80px;
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: var(--clr-bg-dark);
          overflow: hidden;
        }
        .hero-bg-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--grad-hero-overlay);
          z-index: 1;
        }
        .hero-container {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 64px;
          align-items: center;
        }
        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }
        .hero-title {
          color: #ffffff;
          margin-bottom: 24px;
        }
        .hero-cursive {
          font-family: var(--font-cursive);
          font-size: 1.2em;
          font-weight: 400;
          color: var(--clr-gold-light);
          text-transform: none;
        }
        .hero-description {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.85);
          margin-bottom: 40px;
          max-width: 540px;
          line-height: 1.7;
        }
        .hero-stats {
          display: flex;
          align-items: center;
          gap: 32px;
          margin-bottom: 40px;
          padding: 20px 32px;
        }
        .stat-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
          color: #fff;
        }
        .stat-number {
          font-family: var(--font-heading);
          font-size: 2rem;
          font-weight: 700;
          line-height: 1;
          color: var(--clr-gold-light);
        }
        .stat-label {
          font-size: 0.85rem;
          font-weight: 500;
          color: rgba(255,255,255,0.7);
        }
        .stat-divider {
          width: 1px;
          height: 40px;
          background-color: rgba(255,255,255,0.2);
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
          justify-content: center;
        }
        .image-blob {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80%;
          height: 80%;
          background: var(--grad-pink);
          filter: blur(80px);
          opacity: 0.3;
          border-radius: 50%;
          z-index: 0;
        }
        .image-frame {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 440px;
          aspect-ratio: 4 / 5;
          padding: 12px;
          border-radius: 200px 200px 16px 16px;
        }
        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 190px 190px 12px 12px;
        }
        .floating-badge {
          position: absolute;
          bottom: 40px;
          left: -30px;
          padding: 16px 24px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          animation: float 4s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .badge-title {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.1rem;
          color: var(--clr-heading);
        }
        .badge-subtitle {
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--clr-rose);
        }

        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 48px;
          }
          .hero-content {
            align-items: center;
          }
          .hero-description {
            text-align: center;
          }
          .floating-badge {
            left: 20px;
          }
        }

        @media (max-width: 768px) {
          .hero {
            padding-top: 140px;
            padding-bottom: 60px;
          }
          .hero-actions {
            flex-direction: column;
            gap: 16px;
            align-items: center;
          }
          .hero-actions .btn {
            width: 100%;
            justify-content: center;
          }
          .hero-stats {
            padding: 16px 24px;
            gap: 20px;
          }
        }
      `}</style>
    </header>
  );
}
