import React, { useState } from 'react';
import { ZoomIn, X } from 'lucide-react';

const GALLERY_ITEMS = [
  {
    id: 1,
    category: 'braids',
    title: 'Knotless Box Braids',
    tag: 'Gold Accents',
    src: '/oumis_style_knotless.png'
  },
  {
    id: 2,
    category: 'twists',
    title: 'Senegalese Twists',
    tag: 'Sleek Finish',
    src: '/oumis_style_twists.png'
  },
  {
    id: 3,
    category: 'cornrows',
    title: 'Tribal Stitch Cornrows',
    tag: 'Scalp Pattern',
    src: '/oumis_style_cornrows.png'
  },
  {
    id: 4,
    category: 'braids',
    title: 'Jumbo Box Braids',
    tag: 'Classic Volume',
    src: '/oumis_hero_braids.png'
  },
  {
    id: 5,
    category: 'cornrows',
    title: 'Feed-In Goddess Cornrows',
    tag: 'Tapered Feed-In',
    src: '/oumis_style_cornrows.png' /* Reused with styling */
  },
  {
    id: 6,
    category: 'twists',
    title: 'Boho Passion Twists',
    tag: 'Curly Ends',
    src: '/oumis_style_twists.png' /* Reused with styling */
  }
];

const FILTER_TABS = [
  { id: 'all', label: 'All Styles' },
  { id: 'braids', label: 'Box & Knotless' },
  { id: 'cornrows', label: 'Cornrows' },
  { id: 'twists', label: 'Twists' },
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

        <div className="section-title-wrapper">
          <span className="section-subtitle">Inspiration</span>
          <h2 className="section-title text-gradient">Our Signature Styles</h2>
          <p className="gallery-intro">
            Browse through some of our recent creations. Each style is customized to fit our client's unique hair texture and preference.
          </p>
        </div>

        {/* Gallery Filter Tab */}
        <div className="gallery-filters bg-glass">
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
                <div className="zoom-icon-wrapper">
                  <ZoomIn size={20} className="text-gold" />
                </div>
                <div className="gallery-item-text">
                  <span className="item-tag">{item.tag}</span>
                  <h4 className="item-title">{item.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Zoom Lightbox Modal */}
        {activeImage && (
          <div className="lightbox-modal" onClick={() => setActiveImage(null)}>
            <button className="lightbox-close" onClick={() => setActiveImage(null)}>
              <X size={28} />
            </button>
            <div className="lightbox-content bg-glass" onClick={(e) => e.stopPropagation()}>
              <img 
                src={activeImage.src} 
                alt={activeImage.title} 
                className="lightbox-img"
              />
              <div className="lightbox-caption">
                <span className="lightbox-tag">{activeImage.tag}</span>
                <h3 className="lightbox-title text-gold">{activeImage.title}</h3>
              </div>
            </div>
          </div>
        )}

      </div>

      <style>{`
        .gallery {
          background-color: var(--bg-surface);
          border-top: 1px solid var(--border-color-light);
          border-bottom: 1px solid var(--border-color-light);
        }
        .gallery-intro {
          color: var(--text-muted);
          max-width: 600px;
          margin: 12px auto 0;
          font-size: 1rem;
        }
        .gallery-filters {
          display: flex;
          justify-content: center;
          gap: 8px;
          padding: 8px;
          border-radius: 12px;
          margin-bottom: 40px;
          max-width: 540px;
          margin-left: auto;
          margin-right: auto;
        }
        .filter-btn {
          background: transparent;
          border: none;
          color: var(--text-muted);
          padding: 8px 16px;
          border-radius: 8px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          font-size: 0.85rem;
        }
        .filter-btn:hover {
          color: var(--text-light);
          background: rgba(255, 255, 255, 0.03);
        }
        .filter-btn.active {
          background: var(--primary-gold);
          color: var(--text-dark);
          font-weight: 600;
        }
        
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 24px;
        }
        .gallery-item-wrapper {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          aspect-ratio: 1 / 1;
          cursor: pointer;
          border: 1px solid var(--border-color-light);
          box-shadow: var(--shadow-sm);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .gallery-item-wrapper:hover {
          transform: scale(1.03);
          border-color: var(--primary-gold);
        }
        .gallery-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .gallery-item-wrapper:hover .gallery-img {
          transform: scale(1.08);
        }
        .gallery-item-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to top, rgba(14, 11, 9, 0.9) 10%, rgba(14, 11, 9, 0.2) 60%, transparent 100%);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 24px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .gallery-item-wrapper:hover .gallery-item-overlay {
          opacity: 1;
        }
        .zoom-icon-wrapper {
          align-self: flex-end;
          background: var(--accent-gold-soft);
          border: 1px solid var(--border-color);
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(4px);
        }
        .gallery-item-text {
          text-align: left;
        }
        .item-tag {
          font-size: 0.75rem;
          color: var(--primary-gold);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 600;
          display: block;
          margin-bottom: 2px;
        }
        .item-title {
          font-size: 1.15rem;
          color: var(--text-light);
          font-weight: 700;
        }

        /* Lightbox modal styles */
        .lightbox-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(8, 6, 5, 0.95);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: fadeIn 0.25s ease-out;
        }
        .lightbox-close {
          position: absolute;
          top: 24px;
          right: 24px;
          background: transparent;
          border: none;
          color: var(--text-light);
          cursor: pointer;
          transition: transform 0.2s ease;
        }
        .lightbox-close:hover {
          transform: scale(1.1);
          color: var(--primary-gold);
        }
        .lightbox-content {
          max-width: 540px;
          width: 100%;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          animation: scaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @keyframes scaleUp {
          from { transform: scale(0.92); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .lightbox-img {
          width: 100%;
          aspect-ratio: 4 / 5;
          object-fit: cover;
          display: block;
        }
        .lightbox-caption {
          padding: 20px 24px;
          text-align: left;
          background: var(--bg-surface);
          border-top: 1px solid var(--border-color-light);
        }
        .lightbox-tag {
          font-size: 0.75rem;
          color: var(--primary-gold);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 600;
          display: block;
          margin-bottom: 2px;
        }
        .lightbox-title {
          font-size: 1.25rem;
          font-weight: 700;
        }

        @media (max-width: 600px) {
          .lightbox-content {
            border-radius: 12px;
          }
          .lightbox-caption {
            padding: 16px;
          }
        }
      `}</style>
    </section>
  );
}
