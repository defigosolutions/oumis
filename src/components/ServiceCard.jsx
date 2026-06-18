import { Link } from 'react-router-dom';
import './ServiceCard.css';

const CATEGORY_COLORS = {
  'Box Braids':         { bg: '#2d1b3d', accent: '#9b5de5' },
  'Knotless Braids':    { bg: '#1e2d3d', accent: '#4fc3f7' },
  'Tribal & Lemonade':  { bg: '#3d1b2d', accent: '#f48fb1' },
  'Cornrows & Stitch':  { bg: '#2d2d1b', accent: '#aed581' },
  'Twist Styles':       { bg: '#1b2d2d', accent: '#80cbc4' },
  'Crochet Braids':     { bg: '#3d2d1b', accent: '#ffcc80' },
  'Dreadlocks/Locs':    { bg: '#1b3d1b', accent: '#a5d6a7' },
  'Instant Locs':       { bg: '#3d1b1b', accent: '#ef9a9a' },
  'Faux & Soft Locs':   { bg: '#2d1b3d', accent: '#ce93d8' },
  'Wicks & Specialty':  { bg: '#3d3d1b', accent: '#fff176' },
  'Kids':               { bg: '#1b3d3d', accent: '#80deea' },
  'Maintenance':        { bg: '#3d1b2d', accent: '#f8bbd0' },
};

export default function ServiceCard({ service, animDelay = 0 }) {
  const colors = CATEGORY_COLORS[service.category] || { bg: '#1a1a2e', accent: '#9b5de5' };

  return (
    <article
      className="service-card fade-up"
      style={{ '--delay': `${animDelay}ms`, '--cat-accent': colors.accent }}
    >
      <div className="service-card__top">
        <span
          className="service-card__cat-badge"
          style={{ background: `${colors.accent}20`, color: colors.accent, border: `1px solid ${colors.accent}40` }}
        >
          {service.category}
        </span>
      </div>

      <h3 className="service-card__title">{service.name}</h3>
      <p className="service-card__desc">{service.description}</p>

      <div className="service-card__pricing">
        <div className="service-card__price">
          <span className="service-card__price-label">Starting at</span>
          <span className="service-card__price-value">{service.price}</span>
        </div>
        <div className="service-card__deposit">
          <span className="service-card__price-label">Deposit</span>
          <span className="service-card__deposit-value">{service.deposit}</span>
        </div>
      </div>

      <a
        href="tel:+12036192413"
        className="btn btn-primary service-card__cta"
        aria-label={`Book ${service.name}`}
      >
        Book Now
      </a>

      <div className="service-card__shine" aria-hidden="true" />
    </article>
  );
}
