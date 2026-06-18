import React from 'react';
import { ShieldCheck, Quote } from 'lucide-react';

const REVIEWS_DATA = [
  {
    id: 1,
    name: 'JESSICA M.',
    location: 'HAMDEN, CT',
    rating: 5,
    date: '2 WEEKS AGO',
    text: 'The best braiding salon in Hamden! I have been coming to Oumi\'s for over 10 years. They are fast, the parts are extremely neat, and most importantly, my scalp doesn\'t hurt. They are the absolute best!',
  },
  {
    id: 2,
    name: 'SHANICE R.',
    location: 'NEW HAVEN, CT',
    rating: 5,
    date: '1 MONTH AGO',
    text: 'My knotless box braids are gorgeous! Oumi and her stylists are professional and very friendly. The shop is clean, has free WiFi, and plenty of parking. Highly recommend!',
  },
  {
    id: 3,
    name: 'KEISHA L.',
    location: 'NORTH HAVEN, CT',
    rating: 5,
    date: '3 WEEKS AGO',
    text: 'Oumi\'s Haven is a gem. They got me in on short notice. My stitch braids look perfect and I\'ve received so many compliments already. Amazing service with a legacy since the 90s!',
  },
  {
    id: 4,
    name: 'TIFFANY D.',
    location: 'HAMDEN, CT',
    rating: 5,
    date: '2 MONTHS AGO',
    text: 'Professional, fast, and polite. They respect your time and the braids are always neat and last a long time. I won\'t go anywhere else in Connecticut for my braids.',
  }
];

export default function Reviews() {
  return (
    <section className="reviews section bg-dark" id="reviews">
      <div className="container">

        <div className="section-title-wrapper center">
          <span className="section-subtitle">TESTIMONIALS</span>
          <h2 className="section-title">THE VERDICT</h2>
        </div>

        {/* Reviews Summary Stats */}
        <div className="reviews-summary">
          <div className="summary-left">
            <h3 className="summary-score">4.8</h3>
            <p className="summary-count">BASED ON 3,188 REVIEWS</p>
          </div>

          <div className="summary-right">
            <div className="stat-row">
              <span className="stat-label">STYLE & NEATNESS</span>
              <div className="progress-bar-container">
                <div className="progress-bar-fill" style={{ width: '98%' }}></div>
              </div>
            </div>
            <div className="stat-row">
              <span className="stat-label">SPEED</span>
              <div className="progress-bar-container">
                <div className="progress-bar-fill" style={{ width: '96%' }}></div>
              </div>
            </div>
            <div className="stat-row">
              <span className="stat-label">SERVICE</span>
              <div className="progress-bar-container">
                <div className="progress-bar-fill" style={{ width: '97%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Masonry / List */}
        <div className="reviews-grid">
          {REVIEWS_DATA.map(review => (
            <div key={review.id} className="review-card">
              <Quote className="quote-icon text-accent" size={40} />
              <p className="review-text">"{review.text}"</p>
              
              <div className="review-card-footer">
                <div className="review-user-info">
                  <h4 className="user-name">{review.name}</h4>
                  <span className="user-loc">{review.location}</span>
                </div>
                <div className="verified-badge">
                  <ShieldCheck size={14} className="text-accent" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .reviews {
          padding-top: 100px;
          padding-bottom: 100px;
        }
        
        /* Summary Box */
        .reviews-summary {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 64px;
          align-items: center;
          padding: 64px 0;
          margin-bottom: 64px;
          border-top: 1px solid var(--border-color);
          border-bottom: 1px solid var(--border-color);
        }
        .summary-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .summary-score {
          font-size: 6rem;
          font-weight: 900;
          color: var(--text-light);
          font-family: var(--font-heading);
          line-height: 1;
          margin-bottom: 8px;
        }
        .summary-count {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 700;
          letter-spacing: 0.1em;
        }
        .summary-right {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .stat-row {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .stat-label {
          font-size: 0.75rem;
          color: var(--text-light);
          font-weight: 700;
          letter-spacing: 0.1em;
        }
        .progress-bar-container {
          height: 2px;
          background: rgba(255, 255, 255, 0.1);
          width: 100%;
        }
        .progress-bar-fill {
          height: 100%;
          background: var(--primary-accent);
        }

        /* Review Grid & Cards */
        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 48px;
        }
        .review-card {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .quote-icon {
          opacity: 0.5;
        }
        .review-text {
          font-size: 1.5rem;
          color: var(--text-light);
          line-height: 1.4;
          font-family: var(--font-heading);
          font-weight: 700;
          letter-spacing: -0.01em;
        }
        .review-card-footer {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 24px;
          margin-top: auto;
        }
        .review-user-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .user-name {
          font-size: 1rem;
          font-weight: 900;
          color: var(--text-light);
          letter-spacing: 0.05em;
        }
        .user-loc {
          font-size: 0.75rem;
          color: var(--text-muted);
          letter-spacing: 0.1em;
        }

        @media (max-width: 900px) {
          .reviews-summary {
            grid-template-columns: 1fr;
            gap: 40px;
            padding: 40px 0;
          }
          .reviews-grid {
            grid-template-columns: 1fr;
          }
          .review-text {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </section>
  );
}
