import React from 'react';
import { Star, ArrowRight, ShieldCheck, Sparkles, Award } from 'lucide-react';

export default function Hero({ onBookOpen }) {
  return (
    <header className="hero section" id="home">
      <div className="container hero-container animate-fade-in">
        
        {/* Left Column: Text Content */}
        <div className="hero-content">
          <div className="hero-tag">
            <Sparkles size={16} className="text-gold" />
            <span>New Haven's Premier Hair Salon Since 1994</span>
          </div>
          
          <h1 className="hero-title">
            Elevate Your Style with <span className="text-gradient">Masterful Braiding</span>
          </h1>
          
          <p className="hero-description">
            Experience the artistry of professional African hair braiding. Founded by Oumi Diop in Hamden, CT, we specialize in high-end natural hair care, box braids, cornrows, weaves, and custom extensions tailored to make you glow.
          </p>

          {/* Social Proof Badges */}
          <div className="hero-stats">
            <div className="stat-card">
              <div className="stat-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#cfa851" color="#cfa851" />
                ))}
              </div>
              <span className="stat-text">
                <strong>4.8</strong> out of 5 stars
              </span>
              <span className="stat-subtext">3,188 Google Reviews</span>
            </div>

            <div className="stat-divider"></div>

            <div className="stat-card">
              <div className="stat-icon-wrapper">
                <Award className="text-gold" size={24} />
              </div>
              <span className="stat-text">
                <strong>30+ Years</strong> Experience
              </span>
              <span className="stat-subtext">Founded in 1994</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="hero-actions">
            <button onClick={onBookOpen} className="btn btn-primary hero-btn-main">
              Book Appointment <ArrowRight size={18} />
            </button>
            <a href="#services" className="btn btn-secondary">
              Explore Services
            </a>
          </div>

          <div className="hero-guarantees">
            <div className="guarantee-item">
              <ShieldCheck size={16} className="text-gold" />
              <span>Professional Stylists</span>
            </div>
            <div className="guarantee-item">
              <ShieldCheck size={16} className="text-gold" />
              <span>Free Parking & Wi-Fi</span>
            </div>
            <div className="guarantee-item">
              <ShieldCheck size={16} className="text-gold" />
              <span>Walk-Ins Welcome</span>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Image Frame */}
        <div className="hero-image-area">
          <div className="image-backdrop"></div>
          <div className="image-frame bg-glass">
            <img 
              src="/oumis_hero_braids.png" 
              alt="Intricate Box Braids at Oumi's Haven" 
              className="hero-image"
            />
            <div className="floating-badge bg-glass">
              <span className="badge-title">Diop Family Legacy</span>
              <span className="badge-subtitle">African Roots, Hamden Pride</span>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .hero {
          padding-top: 140px;
          padding-bottom: 80px;
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: radial-gradient(circle at 80% 20%, rgba(207, 168, 81, 0.08) 0%, transparent 60%);
        }
        .hero-container {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 48px;
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
          gap: 8px;
          background: var(--accent-gold-soft);
          border: 1px solid var(--border-color);
          padding: 6px 14px;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--primary-gold);
          margin-bottom: 24px;
          letter-spacing: 0.02em;
        }
        .hero-title {
          font-size: 3.5rem;
          line-height: 1.15;
          margin-bottom: 20px;
          font-weight: 800;
        }
        .hero-description {
          font-size: 1.1rem;
          color: var(--text-muted);
          margin-bottom: 32px;
          max-width: 600px;
        }
        .hero-stats {
          display: flex;
          align-items: center;
          gap: 32px;
          margin-bottom: 36px;
          background: rgba(23, 19, 16, 0.4);
          padding: 16px 24px;
          border-radius: 12px;
          border: 1px solid var(--border-color-light);
          width: 100%;
          max-width: 540px;
        }
        .stat-card {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .stat-stars {
          display: flex;
          gap: 2px;
          margin-bottom: 2px;
        }
        .stat-text {
          font-size: 0.95rem;
          color: var(--text-light);
        }
        .stat-subtext {
          font-size: 0.8rem;
          color: var(--text-muted);
        }
        .stat-divider {
          width: 1px;
          height: 50px;
          background-color: var(--border-color);
        }
        .stat-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--accent-gold-soft);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1px solid var(--border-color);
          margin-bottom: 4px;
        }
        .hero-actions {
          display: flex;
          gap: 16px;
          margin-bottom: 32px;
          width: 100%;
        }
        .hero-btn-main {
          animation: pulse-gold 3s infinite;
        }
        .hero-guarantees {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
        }
        .guarantee-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--text-muted);
        }
        
        /* Image Area */
        .hero-image-area {
          position: relative;
          width: 100%;
          display: flex;
          justify-content: center;
        }
        .image-backdrop {
          position: absolute;
          width: 90%;
          height: 90%;
          top: 5%;
          left: 5%;
          background: linear-gradient(135deg, var(--primary-gold), #855b20);
          filter: blur(40px);
          opacity: 0.15;
          z-index: 1;
          border-radius: 24px;
        }
        .image-frame {
          position: relative;
          z-index: 2;
          border-radius: 24px;
          padding: 12px;
          width: 100%;
          max-width: 420px;
          aspect-ratio: 4 / 5;
          overflow: hidden;
          box-shadow: var(--shadow-lg);
        }
        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 16px;
          border: 1px solid var(--border-color-light);
        }
        .floating-badge {
          position: absolute;
          bottom: 28px;
          left: 28px;
          right: 28px;
          padding: 14px 20px;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          gap: 2px;
          box-shadow: var(--shadow-md);
        }
        .badge-title {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--primary-gold);
        }
        .badge-subtitle {
          font-size: 0.8rem;
          color: var(--text-light);
        }

        @media (max-width: 1024px) {
          .hero-title {
            font-size: 2.8rem;
          }
        }

        @media (max-width: 768px) {
          .hero {
            padding-top: 100px;
            padding-bottom: 40px;
          }
          .hero-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .hero-content {
            align-items: center;
            text-align: center;
          }
          .hero-tag {
            align-self: center;
          }
          .hero-description {
            align-self: center;
          }
          .hero-stats {
            justify-content: center;
            align-self: center;
          }
          .hero-actions {
            flex-direction: column;
            gap: 12px;
            align-items: stretch;
          }
          .hero-guarantees {
            justify-content: center;
            width: 100%;
          }
          .image-frame {
            max-width: 340px;
          }
        }
      `}</style>
    </header>
  );
}
