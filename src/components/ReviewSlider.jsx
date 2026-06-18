import { useEffect, useRef } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './ReviewSlider.css';

const REVIEWS = [
  {
    id: 1,
    name: 'Tiffany M.',
    rating: 5,
    date: '2 weeks ago',
    text: 'Oumi\'s is absolutely amazing! My knotless braids came out so clean and neat. The atmosphere is welcoming and the service is top-notch. Will definitely be back!',
    initials: 'TM',
  },
  {
    id: 2,
    name: 'Aaliyah R.',
    rating: 5,
    date: '1 month ago',
    text: 'I\'ve been coming here for my box braids for over a year and I\'ve never been disappointed. The braiders are professional, fast, and incredibly skilled. Highly recommend!',
    initials: 'AR',
  },
  {
    id: 3,
    name: 'Jasmine W.',
    rating: 5,
    date: '3 weeks ago',
    text: 'Best salon in the Hamden area! Got my boho knotless braids done and they are absolutely gorgeous. The team is so friendly and made me feel so comfortable.',
    initials: 'JW',
  },
  {
    id: 4,
    name: 'Monique T.',
    rating: 5,
    date: '2 months ago',
    text: 'I took my daughter here for kids\' braids and we both left happy. The staff was patient with her and the results were adorable. This is our go-to salon now!',
    initials: 'MT',
  },
  {
    id: 5,
    name: 'Destiny K.',
    rating: 5,
    date: '1 month ago',
    text: 'Got my passion twists done and I am obsessed. They lasted over 6 weeks without any frizz. The price is very reasonable for the quality of work. 10/10!',
    initials: 'DK',
  },
  {
    id: 6,
    name: 'Brianna L.',
    rating: 5,
    date: '3 months ago',
    text: 'Came in for faux locs and the results were stunning. Very clean work, great communication about what styles would suit my hair, and super professional service.',
    initials: 'BL',
  },
  {
    id: 7,
    name: 'Sasha P.',
    rating: 5,
    date: '2 weeks ago',
    text: 'The atmosphere is so beautiful and relaxing. My knotless braids are perfect — just what I envisioned. The snacks were a lovely touch! Will recommend to all my friends.',
    initials: 'SP',
  },
  {
    id: 8,
    name: 'Camille J.',
    rating: 5,
    date: '5 months ago',
    text: 'Absolutely love this salon. I\'ve tried multiple places in CT but nothing compares to the quality here. My cornrows were chef\'s kiss — so neat and stylish!',
    initials: 'CJ',
  },
  {
    id: 9,
    name: 'Nadia B.',
    rating: 5,
    date: '4 weeks ago',
    text: 'Incredible experience from start to finish. My braider was super skilled and gentle. Got long knotless braids that are absolutely stunning. Worth every penny!',
    initials: 'NB',
  },
  {
    id: 10,
    name: 'Felicia G.',
    rating: 5,
    date: '6 months ago',
    text: 'This salon saved my hair! They were so careful and precise with my locs retwist. The staff genuinely cares about hair health. I won\'t go anywhere else!',
    initials: 'FG',
  },
];

function StarRating({ rating }) {
  return (
    <div className="review-stars" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={`review-star ${i < rating ? 'review-star--filled' : ''}`}>
          ★
        </span>
      ))}
    </div>
  );
}

function ReviewCard({ review }) {
  return (
    <div className="review-card glass-card">
      <div className="review-card__header">
        <div className="review-card__avatar">
          {review.initials}
        </div>
        <div>
          <p className="review-card__name">{review.name}</p>
          <p className="review-card__date">{review.date}</p>
        </div>
        <div className="review-card__google">
          <svg viewBox="0 0 24 24" width="20" height="20">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
        </div>
      </div>
      <StarRating rating={review.rating} />
      <p className="review-card__text">{review.text}</p>
    </div>
  );
}

export default function ReviewSlider() {
  const trackRef = useRef(null);
  const isPaused = useRef(false);
  const animRef  = useRef(null);
  const posRef   = useRef(0);

  const doubled = [...REVIEWS, ...REVIEWS];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const SPEED = 0.6; // px per frame

    const animate = () => {
      if (!isPaused.current) {
        posRef.current -= SPEED;
        // Reset when we've scrolled past first half
        const halfWidth = track.scrollWidth / 2;
        if (Math.abs(posRef.current) >= halfWidth) {
          posRef.current = 0;
        }
        track.style.transform = `translateX(${posRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <div
      className="review-slider"
      onMouseEnter={() => { isPaused.current = true; }}
      onMouseLeave={() => { isPaused.current = false; }}
      aria-label="Customer reviews"
    >
      <div className="review-slider__track" ref={trackRef}>
        {doubled.map((review, idx) => (
          <ReviewCard key={`${review.id}-${idx}`} review={review} />
        ))}
      </div>
      {/* Edge fades */}
      <div className="review-slider__fade review-slider__fade--left"  aria-hidden="true" />
      <div className="review-slider__fade review-slider__fade--right" aria-hidden="true" />
    </div>
  );
}
