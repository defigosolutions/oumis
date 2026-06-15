import React from 'react';
import { Star, ShieldCheck, Sparkles } from 'lucide-react';

const REVIEWS_DATA = [
  {
    id: 1,
    name: 'Jessica M.',
    location: 'Hamden, CT',
    rating: 5,
    date: '2 weeks ago',
    text: 'The best braiding salon in Hamden! I have been coming to Oumi\'s for over 10 years. They are fast, the parts are extremely neat, and most importantly, my scalp doesn\'t hurt. They are the absolute best!',
  },
  {
    id: 2,
    name: 'Shanice R.',
    location: 'New Haven, CT',
    rating: 5,
    date: '1 month ago',
    text: 'My knotless box braids are gorgeous! Oumi and her stylists are professional and very friendly. The shop is clean, has free WiFi, and plenty of parking in the Stop & Shop plaza. Highly recommend!',
  },
  {
    id: 3,
    name: 'Keisha L.',
    location: 'North Haven, CT',
    rating: 5,
    date: '3 weeks ago',
    text: 'Oumi\'s Haven is a gem. They got me in on short notice. My stitch braids look perfect and I\'ve received so many compliments already. Amazing service with a legacy since the 90s!',
  },
  {
    id: 4,
    name: 'Tiffany D.',
    location: 'Hamden, CT',
    rating: 5,
    date: '2 months ago',
    text: 'Professional, fast, and polite. They respect your time and the braids are always neat and last a long time. I won\'t go anywhere else in Connecticut for my braids.',
  }
];

export default function Reviews() {
  return (
    <section className="reviews section" id="reviews">
      <div className="container">

        <div className="section-title-wrapper">
          <span className="section-subtitle">Testimonials</span>
          <h2 className="section-title text-gradient">Loved by the Community</h2>
          <p className="reviews-intro">
            With over 3,000 verified clients, see why Oumi's Haven is the most trusted name in Connecticut hair braiding.
          </p>
        </div>

        {/* Reviews Summary Stats */}
        <div className="reviews-summary bg-glass">
          <div className="summary-left">
            <h3 className="summary-score">4.8</h3>
            <div className="summary-stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} fill="#cfa851" color="#cfa851" />
              ))}
            </div>
            <p className="summary-count">Based on 3,188 Google Reviews</p>
          </div>

          <div className="summary-divider"></div>

          <div className="summary-right">
            <div className="stat-row">
              <span className="stat-label">Neatness & Style</span>
              <div className="progress-bar-container">
                <div className="progress-bar-fill" style={{ width: '98%' }}></div>
              </div>
              <span className="stat-val">4.9</span>
            </div>
            <div className="stat-row">
              <span className="stat-label">Braiding Speed</span>
              <div className="progress-bar-container">
                <div className="progress-bar-fill" style={{ width: '96%' }}></div>
              </div>
              <span className="stat-val">4.8</span>
            </div>
            <div className="stat-row">
              <span className="stat-label">Customer Service</span>
              <div className="progress-bar-container">
                <div className="progress-bar-fill" style={{ width: '97%' }}></div>
              </div>
              <span className="stat-val">4.8</span>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="reviews-grid">
          {REVIEWS_DATA.map(review => (
            <div key={review.id} className="review-card bg-glass">
              <div className="review-card-header">
                <div className="review-user-info">
                  <div className="avatar-placeholder">
                    {review.name.split(' ')[0][0]}
                  </div>
                  <div>
                    <h4 className="user-name">{review.name}</h4>
                    <span className="user-loc">{review.location}</span>
                  </div>
                </div>
                <div className="verified-badge">
                  <ShieldCheck size={14} className="text-gold" />
                  <span>Verified</span>
                </div>
              </div>

              <div className="review-card-stars">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#cfa851" color="#cfa851" />
                ))}
                <span className="review-date">{review.date}</span>
              </div>

              <p className="review-text">"{review.text}"</p>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .reviews {
          background-color: var(--bg-deep);
        }
        .reviews-intro {
          color: var(--text-muted);
          max-width: 600px;
          margin: 12px auto 0;
          font-size: 1rem;
        }
        
        /* Summary Box */
        .reviews-summary {
          display: grid;
          grid-template-columns: 0.8fr 1px 1.2fr;
          gap: 48px;
          align-items: center;
          padding: 40px;
          border-radius: 20px;
          margin-bottom: 56px;
          max-width: 860px;
          margin-left: auto;
          margin-right: auto;
          box-shadow: var(--shadow-md);
        }
        .summary-left {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .summary-score {
          font-size: 3.8rem;
          font-weight: 800;
          color: var(--text-light);
          font-family: var(--font-heading);
          line-height: 1;
          margin-bottom: 8px;
        }
        .summary-stars {
          display: flex;
          gap: 4px;
          margin-bottom: 12px;
        }
        .summary-count {
          font-size: 0.9rem;
          color: var(--text-muted);
          font-weight: 500;
        }
        .summary-divider {
          width: 1px;
          height: 100%;
          background-color: var(--border-color);
        }
        .summary-right {
          display: flex;
          flex-direction: column;
          gap: 16px;
          text-align: left;
        }
        .stat-row {
          display: grid;
          grid-template-columns: 130px 1fr 30px;
          align-items: center;
          gap: 16px;
        }
        .stat-label {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 500;
        }
        .progress-bar-container {
          height: 8px;
          background: var(--bg-surface-light);
          border-radius: 4px;
          overflow: hidden;
          width: 100%;
        }
        .progress-bar-fill {
          height: 100%;
          background: var(--primary-gold);
          border-radius: 4px;
        }
        .stat-val {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-light);
          text-align: right;
        }

        /* Review Grid & Cards */
        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 24px;
        }
        .review-card {
          border-radius: 16px;
          padding: 24px;
          text-align: left;
          border: 1px solid var(--border-color-light);
          transition: border-color 0.3s ease;
        }
        .review-card:hover {
          border-color: var(--border-color);
        }
        .review-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }
        .review-user-info {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .avatar-placeholder {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--primary-gold), #855b20);
          color: var(--text-dark);
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-heading);
        }
        .user-name {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-light);
        }
        .user-loc {
          font-size: 0.8rem;
          color: var(--text-muted);
          display: block;
        }
        .verified-badge {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--primary-gold);
          background: var(--accent-gold-soft);
          padding: 4px 8px;
          border-radius: 50px;
          border: 1px solid var(--border-color-light);
        }
        .review-card-stars {
          display: flex;
          align-items: center;
          gap: 2px;
          margin-bottom: 12px;
        }
        .review-date {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-left: 8px;
        }
        .review-text {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.6;
          font-style: italic;
        }

        @media (max-width: 768px) {
          .reviews-summary {
            grid-template-columns: 1fr;
            gap: 24px;
            padding: 24px;
          }
          .summary-divider {
            width: 100%;
            height: 1px;
            margin: 8px 0;
          }
          .stat-row {
            grid-template-columns: 100px 1fr 30px;
          }
        }
      `}</style>
    </section>
  );
}
