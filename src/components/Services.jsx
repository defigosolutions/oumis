import React from 'react';
import { ArrowRight, Clock, Star } from 'lucide-react';

const SERVICES = [
  {
    id: 'box-braids',
    title: 'Knotless Box Braids',
    price: 'Starts at $180',
    duration: '4-6 Hours',
    description: 'Our signature tension-free method. Seamless look, flexible styling from day one, and healthy for edges.',
    popular: true
  },
  {
    id: 'cornrows',
    title: 'Feed-In Cornrows',
    price: 'Starts at $90',
    duration: '1-3 Hours',
    description: 'Elegant, flat-to-the-scalp braids. Perfect for protective styling, vacations, and active lifestyles.',
    popular: false
  },
  {
    id: 'twists',
    title: 'Senegalese Twists',
    price: 'Starts at $150',
    duration: '4-5 Hours',
    description: 'Smooth, rope-like twists offering a versatile, low-maintenance protective style.',
    popular: false
  },
  {
    id: 'sew-in',
    title: 'Full Sew-In Weave',
    price: 'Starts at $180',
    duration: '2-3 Hours',
    description: 'Flawless traditional sew-ins with leave-out or closures for a beautifully natural blend.',
    popular: true
  }
];

export default function Services({ onBookService }) {
  return (
    <section className="services section-sm" id="services">
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">Menu</span>
          <h2 className="section-title">Signature Services</h2>
          <div className="divider"></div>
          <p className="section-subtitle">
            Specializing in high-end braiding and weaving techniques that protect your natural hair while giving you a flawless finish.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((service, index) => (
            <div 
              key={service.id} 
              className={`service-card light-card fade-up stagger-${index + 1}`}
            >
              {service.popular && (
                <div className="popular-badge">
                  <Star size={12} className="text-white" fill="currentColor" /> Most Requested
                </div>
              )}
              
              <div className="service-header">
                <h3 className="heading-sm">{service.title}</h3>
                <span className="service-price">{service.price}</span>
              </div>
              
              <div className="service-meta text-muted">
                <Clock size={14} className="text-pink" /> 
                <span>{service.duration}</span>
              </div>
              
              <p className="service-desc">{service.description}</p>
              
              <button 
                onClick={() => onBookService(service)}
                className="btn btn-outline service-btn"
              >
                Book Now <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .services {
          background: var(--clr-bg);
        }
        
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 32px;
          margin-top: 48px;
        }

        .service-card {
          position: relative;
          padding: 32px 24px;
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: transform var(--trans-mid), box-shadow var(--trans-mid);
        }

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg);
        }

        .popular-badge {
          position: absolute;
          top: -12px;
          right: 24px;
          background: var(--grad-pink);
          color: white;
          font-size: 0.7rem;
          font-weight: 600;
          padding: 4px 12px;
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          gap: 4px;
          box-shadow: var(--shadow-sm);
        }

        .service-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 12px;
        }

        .service-price {
          font-weight: 600;
          color: var(--clr-rose);
          font-size: 0.95rem;
          white-space: nowrap;
        }

        .service-meta {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          font-weight: 500;
          margin-bottom: 16px;
        }

        .service-desc {
          font-size: 0.95rem;
          color: var(--clr-text-muted);
          line-height: 1.6;
          margin-bottom: 24px;
          flex-grow: 1;
        }

        .service-btn {
          width: 100%;
          justify-content: center;
          margin-top: auto;
          border-radius: var(--radius-full);
        }
      `}</style>
    </section>
  );
}
