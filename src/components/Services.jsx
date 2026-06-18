import React, { useState } from 'react';
import { Clock, Tag, ArrowRight, Info } from 'lucide-react';

const SERVICES_DATA = [
  {
    id: 'box-braids',
    category: 'braids',
    name: 'CLASSIC BOX BRAIDS',
    price: '$160+',
    duration: '4-6 HRS',
    description: 'Traditional individual plaits with premium extensions. Extremely durable and versatile.',
  },
  {
    id: 'knotless-braids',
    category: 'braids',
    name: 'KNOTLESS BOX BRAIDS',
    price: '$180+',
    duration: '5-7 HRS',
    description: 'A modern, scalp-friendly technique starting with your natural hair. Relieves tension.',
  },
  {
    id: 'cornrows-feedin',
    category: 'cornrows',
    name: 'FEED-IN CORNROWS (6-8)',
    price: '$90+',
    duration: '2-3 HRS',
    description: 'Premium cornrows where hair extensions are added gradually for a seamless taper.',
  },
  {
    id: 'stitch-braids',
    category: 'cornrows',
    name: 'STITCH BRAIDS',
    price: '$110+',
    duration: '2-4 HRS',
    description: 'Precision parted cornrows featuring the signature stitch design. Clean, geometric lines.',
  },
  {
    id: 'senegalese-twists',
    category: 'twists',
    name: 'SENEGALESE TWISTS',
    price: '$150+',
    duration: '4-5 HRS',
    description: 'Beautiful, sleek two-strand twists using high-quality kanekalon hair extensions.',
  },
  {
    id: 'passion-twists',
    category: 'twists',
    name: 'PASSION TWISTS',
    price: '$140+',
    duration: '3-4 HRS',
    description: 'Fluffy, boho-chic two-strand twists using wavy water wave hair extensions.',
  },
  {
    id: 'full-sewin-weave',
    category: 'weaves',
    name: 'FULL SEW-IN WEAVE',
    price: '$180+',
    duration: '3-4 HRS',
    description: 'Complete braided foundation with extensions sewn securely. Includes custom cut.',
  },
  {
    id: 'closure-weave',
    category: 'weaves',
    name: 'LACE CLOSURE WEAVE',
    price: '$200+',
    duration: '3-5 HRS',
    description: 'Premium sew-in weave with a lace closure installation for a natural parting space.',
  }
];

const CATEGORIES = [
  { id: 'all', label: 'ALL SERVICES' },
  { id: 'braids', label: 'BRAIDS' },
  { id: 'cornrows', label: 'CORNROWS' },
  { id: 'twists', label: 'TWISTS' },
  { id: 'weaves', label: 'WEAVES' },
];

export default function Services({ onSelectService }) {
  const [activeTab, setActiveTab] = useState('all');

  const filteredServices = activeTab === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter(service => service.category === activeTab);

  return (
    <section className="services section bg-dark" id="services">
      <div className="container">
        
        <div className="section-title-wrapper">
          <span className="section-subtitle">THE MENU</span>
          <h2 className="section-title">SERVICES</h2>
        </div>

        {/* Tab Filters */}
        <div className="services-tabs">
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

        {/* List Layout instead of Grid to look more like an editorial menu */}
        <div className="services-list">
          {filteredServices.map(service => (
            <div key={service.id} className="service-row" onClick={() => onSelectService(service)}>
              <div className="row-left">
                <h3 className="service-name">{service.name}</h3>
                <p className="service-desc">{service.description}</p>
                <div className="service-meta">
                  <span>{service.duration}</span>
                  <span className="meta-dot">•</span>
                  <span>PREMIUM EXTENSIONS</span>
                </div>
              </div>
              
              <div className="row-right">
                <span className="price-val">{service.price}</span>
                <button className="row-book-btn">
                  BOOK <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Info box for custom styles */}
        <div className="custom-style-banner">
          <div className="banner-icon-wrapper">
            <Info size={28} className="text-accent" />
          </div>
          <div className="banner-text-area">
            <h4>CUSTOM STYLES</h4>
            <p>
              Looking for something unique? We execute any customized pattern, tribal braids, dreadlock re-twists, faux locs, feed-ins, and kids braiding styles.
            </p>
          </div>
          <button 
            onClick={() => onSelectService({ name: 'Custom Braid Style/Other Inquiry', price: 'Custom Quote', duration: 'Varies' })}
            className="btn btn-primary banner-btn"
          >
            GET A QUOTE
          </button>
        </div>

      </div>

      <style>{`
        .services {
          padding-top: 100px;
          padding-bottom: 100px;
        }
        .services-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 48px;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 16px;
        }
        .tab-btn {
          background: transparent;
          border: none;
          color: var(--text-muted);
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
          font-size: 0.95rem;
          letter-spacing: 0.05em;
          padding-bottom: 4px;
          position: relative;
        }
        .tab-btn:hover {
          color: var(--text-light);
        }
        .tab-btn.active {
          color: var(--primary-accent);
        }
        
        .services-list {
          display: flex;
          flex-direction: column;
          margin-bottom: 64px;
        }
        .service-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 32px 0;
          border-bottom: 1px solid var(--border-color);
          cursor: pointer;
          transition: background-color 0.2s ease;
        }
        .service-row:hover {
          background-color: rgba(255, 255, 255, 0.02);
        }
        .service-row:hover .service-name {
          color: var(--primary-accent);
        }
        .row-left {
          flex: 1;
          padding-right: 48px;
        }
        .service-name {
          font-size: 1.5rem;
          color: var(--text-light);
          font-weight: 900;
          margin-bottom: 8px;
          transition: color 0.2s ease;
          letter-spacing: 0.02em;
        }
        .service-desc {
          font-size: 1rem;
          color: var(--text-muted);
          margin-bottom: 16px;
          max-width: 600px;
        }
        .service-meta {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-muted);
          letter-spacing: 0.1em;
        }
        .meta-dot {
          color: var(--primary-accent);
        }
        
        .row-right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 16px;
        }
        .price-val {
          font-size: 2rem;
          font-weight: 900;
          color: var(--text-light);
          font-family: var(--font-heading);
        }
        .row-book-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          border: none;
          color: var(--primary-accent);
          font-weight: 700;
          font-size: 0.85rem;
          cursor: pointer;
          letter-spacing: 0.05em;
        }
        .service-row:hover .row-book-btn {
          text-decoration: underline;
        }
        
        /* Custom Style Banner */
        .custom-style-banner {
          display: flex;
          align-items: center;
          gap: 32px;
          padding: 48px;
          border: 1px solid var(--border-color);
          text-align: left;
        }
        .banner-icon-wrapper {
          width: 64px;
          height: 64px;
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .banner-text-area {
          flex-grow: 1;
        }
        .banner-text-area h4 {
          font-size: 1.5rem;
          margin-bottom: 8px;
          color: var(--text-light);
        }
        .banner-text-area p {
          font-size: 1rem;
          color: var(--text-muted);
          line-height: 1.5;
        }
        .banner-btn {
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          .service-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 24px;
          }
          .row-left {
            padding-right: 0;
          }
          .row-right {
            width: 100%;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
          .custom-style-banner {
            flex-direction: column;
            padding: 32px;
            text-align: center;
          }
          .banner-btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
