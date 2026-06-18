import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    name: "Sarah Jenkins",
    text: "Oumi is an absolute artist. My knotless braids have never looked this neat, and there was zero tension on my scalp. Highly recommend her to anyone looking for quality protective styles.",
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "Michelle Davis",
    text: "I've been coming to Oumi's Haven for 5 years. Her sew-ins are flawless and look incredibly natural. The salon environment is warm and professional. A true hidden gem in Hamden.",
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Alicia Robinson",
    text: "Best Senegalese twists I've ever had. They lasted for months and still looked fresh. Oumi takes her time and truly cares about the health of your natural hair.",
    date: "3 months ago"
  }
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
  };

  return (
    <section className="reviews section-sm" id="reviews">
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">Testimonials</span>
          <h2 className="section-title">Client Love</h2>
          <div className="divider"></div>
        </div>

        <div className="reviews-carousel fade-up">
          <div className="carousel-container light-card">
            
            <div className="quote-icon">
              <Quote size={40} className="text-pink" />
            </div>

            <div className="review-content">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-gold" fill="currentColor" />
                ))}
              </div>
              <p className="review-text">"{REVIEWS[currentIndex].text}"</p>
              <div className="review-author">
                <h4>{REVIEWS[currentIndex].name}</h4>
                <span className="review-date">{REVIEWS[currentIndex].date}</span>
              </div>
            </div>

            <div className="carousel-controls">
              <button onClick={prevReview} className="control-btn" aria-label="Previous review">
                <ChevronLeft size={20} />
              </button>
              <div className="dots">
                {REVIEWS.map((_, index) => (
                  <button 
                    key={index}
                    className={`dot ${index === currentIndex ? 'active' : ''}`}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Go to review ${index + 1}`}
                  />
                ))}
              </div>
              <button onClick={nextReview} className="control-btn" aria-label="Next review">
                <ChevronRight size={20} />
              </button>
            </div>
            
          </div>
        </div>

      </div>

      <style>{`
        .reviews {
          background-color: var(--clr-bg);
        }

        .reviews-carousel {
          max-width: 800px;
          margin: 0 auto;
        }

        .carousel-container {
          position: relative;
          padding: 64px 48px;
          text-align: center;
        }

        .quote-icon {
          position: absolute;
          top: -24px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--clr-bg);
          padding: 0 16px;
        }

        .review-content {
          margin-bottom: 40px;
        }

        .stars {
          display: flex;
          justify-content: center;
          gap: 4px;
          margin-bottom: 24px;
        }

        .review-text {
          font-family: var(--font-heading);
          font-size: clamp(1.2rem, 3vw, 1.6rem);
          color: var(--clr-heading);
          line-height: 1.6;
          font-style: italic;
          margin-bottom: 32px;
        }

        .review-author h4 {
          font-size: 1rem;
          font-weight: 700;
          color: var(--clr-heading);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .review-date {
          font-size: 0.85rem;
          color: var(--clr-text-muted);
        }

        .carousel-controls {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 24px;
        }

        .control-btn {
          background: transparent;
          border: 1px solid var(--clr-border);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--clr-text);
          transition: all var(--trans-fast);
        }

        .control-btn:hover {
          background: var(--clr-rose);
          color: white;
          border-color: var(--clr-rose);
        }

        .dots {
          display: flex;
          gap: 8px;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--clr-border);
          padding: 0;
        }

        .dot.active {
          background: var(--clr-rose);
          transform: scale(1.2);
        }

        @media (max-width: 600px) {
          .carousel-container {
            padding: 48px 24px;
          }
          .review-text {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </section>
  );
}
