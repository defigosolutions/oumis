import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ReviewSlider from '../components/ReviewSlider';
import './Reviews.css';

const REVIEW_STATS = [
  { n: '5.0', label: 'Average Rating', sub: 'out of 5 stars' },
  { n: '100+', label: 'Reviews', sub: 'from real clients' },
  { n: '98%', label: 'Would Recommend', sub: 'to family & friends' },
];

export default function Reviews() {
  useScrollAnimation();

  useEffect(() => {
    document.title = "Client Reviews | Oumi's Haven Hair Braiding – Hamden, CT";
  }, []);

  return (
    <main className="reviews-page">

      {/* ── PAGE HERO ── */}
      <section className="reviews-page__hero section-sm">
        <div className="blob blob-purple reviews-page__blob-1" aria-hidden="true" />
        <div className="blob blob-pink   reviews-page__blob-2" aria-hidden="true" />
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="breadcrumb fade-up">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span>Client Reviews</span>
          </div>
          <h1 className="section-title fade-up stagger-1">
            What Our Clients <span className="text-gradient">Love</span>
          </h1>
          <div className="divider fade-up stagger-2" />
          <p className="section-subtitle fade-up stagger-3">
            Real reviews from real clients. Hover to pause the carousel and read at your own pace.
          </p>

          {/* Rating Stats */}
          <div className="reviews-page__stats fade-up stagger-4">
            {REVIEW_STATS.map(({ n, label, sub }) => (
              <div key={label} className="reviews-page__stat glass-card">
                <span className="reviews-page__stat-num text-gradient">{n}</span>
                <span className="reviews-page__stat-label">{label}</span>
                <span className="reviews-page__stat-sub">{sub}</span>
              </div>
            ))}
          </div>

          {/* Stars display */}
          <div className="reviews-page__stars fade-up stagger-5" aria-label="5 star rating">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="reviews-page__star">★</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── SLIDER ROW 1 ── */}
      <section className="section reviews-page__slider-section" id="reviews-slider">
        <div className="reviews-page__slider-wrap">
          <ReviewSlider />
        </div>
      </section>

      {/* ── SLIDER ROW 2 (visually reversed via CSS) ── */}
      <div className="reviews-page__slider-section reviews-page__slider-section--reverse">
        <ReviewSlider />
      </div>

      {/* ── GOOGLE CTA ── */}
      <section className="section-sm reviews-page__google-cta">
        <div className="container">
          <div className="reviews-page__cta-card glass-card fade-up">
            <div className="reviews-page__cta-icon">
              <svg viewBox="0 0 24 24" width="48" height="48" aria-hidden="true">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </div>
            <div>
              <h2 className="reviews-page__cta-title">Happy with your experience?</h2>
              <p className="reviews-page__cta-text">
                Leave us a review on Google and help other clients discover Oumi's Haven Hair Braiding!
              </p>
              <a
                href="https://maps.google.com/?q=Oumi+Hair+Salon+1384+Dixwell+Ave+Hamden+CT"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary reviews-page__cta-btn"
                id="google-review-btn"
              >
                Leave a Google Review
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
