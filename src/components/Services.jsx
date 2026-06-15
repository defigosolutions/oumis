import React, { useState } from 'react';
import { Clock, Tag, ArrowUpRight, HelpCircle } from 'lucide-react';

const SERVICES_DATA = [
  {
    id: 'box-braids',
    category: 'braids',
    name: 'Classic Box Braids',
    price: '$160',
    duration: '4 - 6 hrs',
    description: 'Traditional individual plaits with premium extensions. Extremely durable and versatile. Available in small, medium, or large sizes.',
  },
  {
    id: 'knotless-braids',
    category: 'braids',
    name: 'Knotless Box Braids',
    price: '$180',
    duration: '5 - 7 hrs',
    description: 'A modern, scalp-friendly technique starting with your natural hair. Relieves scalp tension and offers a highly natural lay.',
  },
  {
    id: 'cornrows-feedin',
    category: 'cornrows',
    name: 'Feed-In Cornrows (6-8 Braids)',
    price: '$90',
    duration: '2 - 3 hrs',
    description: 'Premium cornrows where hair extensions are added gradually to create a seamless, tapered, natural look.',
  },
  {
    id: 'stitch-braids',
    category: 'cornrows',
    name: 'Stitch Braids',
    price: '$110',
    duration: '2 - 4 hrs',
    description: 'Precision parted cornrows featuring the signature stitch design. Clean lines and stunning geometric patterns.',
  },
  {
    id: 'senegalese-twists',
    category: 'twists',
    name: 'Senegalese Twists',
    price: '$150',
    duration: '4 - 5 hrs',
    description: 'Beautiful, sleek two-strand twists using high-quality kanekalon hair extensions. Offers a soft, elegant look.',
  },
  {
    id: 'passion-twists',
    category: 'twists',
    name: 'Passion Twists',
    price: '$140',
    duration: '3 - 4 hrs',
    description: 'Fluffy, boho-chic two-strand twists using wavy water wave hair extensions. Lightweight and natural-looking.',
  },
  {
    id: 'full-sewin-weave',
    category: 'weaves',
    name: 'Full Sew-In Weave',
    price: '$180',
    duration: '3 - 4 hrs',
    description: 'Complete braided foundation with hair extensions sewn in securely. Includes custom cut and basic blend styling.',
  },
  {
    id: 'closure-weave',
    category: 'weaves',
    name: 'Lace Closure Weave installation',
    price: '$200',
    duration: '3 - 5 hrs',
    description: 'Premium sew-in weave with a lace closure installation, providing a natural parting space without leave-out.',
  }
];

const CATEGORIES = [
  { id: 'all', label: 'All Services' },
  { id: 'braids', label: 'Box & Knotless Braids' },
  { id: 'cornrows', label: 'Cornrows & Stich' },
  { id: 'twists', label: 'Twists & Locs' },
  { id: 'weaves', label: 'Weaves & Extensions' },
];

export default function Services({ onSelectService }) {
  const [activeTab, setActiveTab] = useState('all');

  const filteredServices = activeTab === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter(service => service.category === activeTab);

  return (
    <section className="services section" id="services">
      <div className="container">
        
        <div className="section-title-wrapper">
          <span className="section-subtitle">Our Menu</span>
          <h2 className="section-title text-gradient">Professional Braiding Services</h2>
          <p className="services-intro">
            Select a style below. Hair is provided for most braiding services (please confirm color requirements when booking).
          </p>
        </div>

        {/* Tab Filters */}
        <div className="services-tabs bg-glass">
          {CATEGORIES.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`tab-btn ${activeTab === category.id ? 'active' : ''}`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Grid List */}
        <div className="services-grid">
          {filteredServices.map(service => (
            <div key={service.id} className="service-card bg-glass">
              <div className="card-top">
                <h3 className="service-name">{service.name}</h3>
                <div className="service-price-badge">
                  <span className="price-label">Starts at</span>
                  <span className="price-val">{service.price}</span>
                </div>
              </div>

              <p className="service-desc">{service.description}</p>

              <div className="service-meta">
                <div className="meta-item">
                  <Clock size={16} className="text-gold" />
                  <span>Est: {service.duration}</span>
                </div>
                <div className="meta-item">
                  <Tag size={16} className="text-gold" />
                  <span>Premium Extensions Included</span>
                </div>
              </div>

              <div className="card-divider"></div>

              <button 
                onClick={() => onSelectService(service)}
                className="btn btn-secondary card-btn"
              >
                Inquire & Book <ArrowUpRight size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* Info box for custom styles */}
        <div className="custom-style-banner bg-glass">
          <div className="banner-icon-wrapper">
            <HelpCircle size={28} className="text-gold" />
          </div>
          <div className="banner-text-area">
            <h4>Looking for a different style?</h4>
            <p>
              Oumi's specialists can braid any customized pattern, tribal braids, dreadlock re-twists, faux locs, feed-ins, and kids braiding styles. Call us at <strong>(203) 776-3381</strong> with a reference photo for a quick estimate.
            </p>
          </div>
          <button 
            onClick={() => onSelectService({ name: 'Custom Braid Style/Other Inquiry', price: 'Custom Quote', duration: 'Varies' })}
            className="btn btn-primary banner-btn"
          >
            Custom Quote
          </button>
        </div>

      </div>

      <style>{`
        .services {
          background-color: #0e0b09;
        }
        .services-intro {
          color: var(--text-muted);
          max-width: 600px;
          margin: 12px auto 0;
          font-size: 1rem;
        }
        .services-tabs {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 8px;
          padding: 8px;
          border-radius: 12px;
          margin-bottom: 40px;
          max-width: 860px;
          margin-left: auto;
          margin-right: auto;
        }
        .tab-btn {
          background: transparent;
          border: none;
          color: var(--text-muted);
          padding: 10px 20px;
          border-radius: 8px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          font-size: 0.9rem;
        }
        .tab-btn:hover {
          color: var(--text-light);
          background: rgba(255, 255, 255, 0.03);
        }
        .tab-btn.active {
          background: var(--primary-gold);
          color: var(--text-dark);
          font-weight: 600;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 24px;
          margin-bottom: 48px;
        }
        .service-card {
          border-radius: 16px;
          padding: 28px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .service-card:hover {
          transform: translateY(-5px);
          border-color: var(--primary-gold);
          box-shadow: var(--shadow-gold);
        }
        .card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          width: 100%;
          gap: 16px;
          margin-bottom: 16px;
        }
        .service-name {
          font-size: 1.25rem;
          color: var(--text-light);
          font-weight: 700;
        }
        .service-price-badge {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }
        .price-label {
          font-size: 0.7rem;
          color: var(--text-muted);
          text-transform: uppercase;
        }
        .price-val {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--primary-gold);
          font-family: var(--font-heading);
        }
        .service-desc {
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-bottom: 20px;
          flex-grow: 1;
          line-height: 1.5;
        }
        .service-meta {
          display: flex;
          flex-direction: column;
          gap: 8px;
          width: 100%;
          margin-bottom: 20px;
        }
        .meta-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          color: var(--text-muted);
        }
        .card-divider {
          width: 100%;
          height: 1px;
          background-color: var(--border-color-light);
          margin-bottom: 20px;
        }
        .card-btn {
          width: 100%;
          font-size: 0.9rem;
          padding: 10px 0;
        }
        
        /* Custom Style Banner */
        .custom-style-banner {
          display: flex;
          align-items: center;
          gap: 24px;
          padding: 32px;
          border-radius: 16px;
          text-align: left;
          margin-top: 40px;
        }
        .banner-icon-wrapper {
          background: var(--accent-gold-soft);
          border: 1px solid var(--border-color);
          width: 56px;
          height: 56px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .banner-text-area {
          flex-grow: 1;
        }
        .banner-text-area h4 {
          font-size: 1.2rem;
          margin-bottom: 6px;
          color: var(--text-light);
        }
        .banner-text-area p {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.5;
        }
        .banner-btn {
          flex-shrink: 0;
        }

        @media (max-width: 900px) {
          .custom-style-banner {
            flex-direction: column;
            text-align: center;
            padding: 24px;
          }
          .banner-btn {
            width: 100%;
          }
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
