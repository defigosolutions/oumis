import React, { useState } from 'react';
import { ZoomIn, X } from 'lucide-react';

const GALLERY_ITEMS = [
  {
    id: 1,
    category: 'braids',
    title: 'KNOTLESS BOX',
    tag: 'EDITORIAL',
    src: '/oumis_style_knotless.png'
  },
  {
    id: 2,
    category: 'twists',
    title: 'SENEGALESE',
    tag: 'SLEEK',
    src: '/oumis_style_twists.png'
  },
  {
    id: 3,
    category: 'cornrows',
    title: 'STITCH',
    tag: 'GEOMETRIC',
    src: '/oumis_style_cornrows.png'
  },
  {
    id: 4,
    category: 'braids',
    title: 'JUMBO',
    tag: 'VOLUME',
    src: '/oumis_hero_braids.png'
  },
  {
    id: 5,
    category: 'cornrows',
    title: 'FEED-IN',
    tag: 'TAPER',
    src: '/oumis_style_cornrows.png' 
  },
  {
    id: 6,
    category: 'twists',
    title: 'BOHO',
    tag: 'TEXTURE',
    src: '/oumis_style_twists.png' 
  }
];

const FILTER_TABS = [
  { id: 'all', label: 'ALL STYLES' },
  { id: 'braids', label: 'BRAIDS' },
  { id: 'cornrows', label: 'CORNROWS' },
  { id: 'twists', label: 'TWISTS' },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeImage, setActiveImage] = useState(null);

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

  return (
    <section className="gallery section" id="gallery">
      <div className="container">

        <div className="section-title-wrapper center">
          <span className="section-subtitle">PORTFOLIO</span>
          <h2 className="section-title">THE LOOKBOOK</h2>
        </div>

        {/* Gallery Filter Tab */}
        <div className="gallery-filters">
          {FILTER_TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`filter-btn ${activeFilter === tab.id ? 'active' : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="gallery-grid">
          {filteredItems.map(item => (
            <div 
              key={item.id} 
              className="gallery-item-wrapper"
              onClick={() => setActiveImage(item)}
            >
              <img 
                src={item.src} 
                alt={item.title} 
                className="gallery-img"
                loading="lazy"
              />
              <div className="gallery-item-overlay">
                <div className="gallery-item-text">
                  <span className="item-tag">{item.tag}</span>
                  <h4 className="item-title">{item.title}</h4>
                </div>
                <div className="zoom-icon-wrapper">
                  <ZoomIn size={24} className="text-light" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Zoom Lightbox Modal */}
        {activeImage && (
          <div className="lightbox-modal" onClick={() => setActiveImage(null)}>
            <button className="lightbox-close" onClick={() => setActiveImage(null)}>
              <X size={32} />
            </button>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <img 
                src={activeImage.src} 
                alt={activeImage.title} 
                className="lightbox-img"
              />
              <div className="lightbox-caption">
                <h3 className="lightbox-title">{activeImage.title}</h3>
                <span className="lightbox-tag">{activeImage.tag}</span>
              </div>
            </div>
          </div>
        )}

      </div>

      <style>{`
        .gallery {
          background-color: var(--bg-surface);
          border-top: 1px solid var(--border-color-dark);
          border-bottom: 1px solid var(--border-color-dark);
        }
        .gallery-filters {
          display: flex;
          justify-content: center;
          gap: 24px;
          margin-bottom: 64px;
        }
        .filter-btn {
          background: transparent;
          border: none;
          color: var(--text-muted);
          padding: 8px 0;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
          font-size: 0.95rem;
          letter-spacing: 0.05em;
          border-bottom: 2px solid transparent;
        }
        .filter-btn:hover {
          color: var(--text-dark);
        }
        .filter-btn.active {
          color: var(--primary-accent);
          border-bottom-color: var(--primary-accent);
        }
        
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 32px;
        }
        .gallery-item-wrapper {
          position: relative;
          overflow: hidden;
          aspect-ratio: 3 / 4;
          cursor: pointer;
          background: var(--bg-deep);
        }
        .gallery-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(100%);
          transition: filter 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .gallery-item-wrapper:hover .gallery-img {
          filter: grayscale(0%);
          transform: scale(1.05);
        }
        .gallery-item-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 32px;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, transparent 100%);
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .gallery-item-wrapper:hover .gallery-item-overlay {
          opacity: 1;
          transform: translateY(0);
        }
        .gallery-item-text {
          text-align: left;
        }
        .item-tag {
          font-size: 0.75rem;
          color: var(--primary-accent);
          letter-spacing: 0.1em;
          font-weight: 700;
          display: block;
          margin-bottom: 8px;
        }
        .item-title {
          font-size: 1.5rem;
          color: var(--text-light);
          font-family: var(--font-heading);
          font-weight: 900;
          letter-spacing: 0.02em;
        }
        .zoom-icon-wrapper {
          margin-bottom: 4px;
        }

        /* Lightbox modal styles */
        .lightbox-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.98);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px;
          animation: fadeIn 0.3s ease-out;
        }
        .lightbox-close {
          position: absolute;
          top: 40px;
          right: 40px;
          background: transparent;
          border: none;
          color: var(--text-light);
          cursor: pointer;
          transition: color 0.2s ease;
        }
        .lightbox-close:hover {
          color: var(--primary-accent);
        }
        .lightbox-content {
          max-width: 600px;
          width: 100%;
          background: var(--bg-deep);
        }
        .lightbox-img {
          width: 100%;
          aspect-ratio: 4 / 5;
          object-fit: cover;
          display: block;
        }
        .lightbox-caption {
          padding: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        .lightbox-title {
          font-size: 1.5rem;
          font-weight: 900;
          color: var(--text-light);
        }
        .lightbox-tag {
          font-size: 0.85rem;
          color: var(--primary-accent);
          letter-spacing: 0.1em;
          font-weight: 700;
        }

        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: 1fr;
          }
          .gallery-filters {
            flex-wrap: wrap;
            gap: 16px;
          }
          .lightbox-modal {
            padding: 16px;
          }
          .lightbox-close {
            top: 16px;
            right: 16px;
          }
        }
      `}</style>
    </section>
  );
}
