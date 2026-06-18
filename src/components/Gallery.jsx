import React from 'react';
import { Eye } from 'lucide-react';

const IMAGES = [
  { id: 1, src: '/oumis_gallery_1.jpg', alt: 'Long Knotless Box Braids', span: 'col-span-2 row-span-2' },
  { id: 2, src: '/oumis_gallery_2.jpg', alt: 'Neat Stitch Braids', span: 'col-span-1 row-span-1' },
  { id: 3, src: '/oumis_gallery_3.jpg', alt: 'Senegalese Twists Updo', span: 'col-span-1 row-span-2' },
  { id: 4, src: '/oumis_gallery_4.jpg', alt: 'Bohemian Knotless Braids', span: 'col-span-1 row-span-1' },
  { id: 5, src: '/oumis_gallery_5.jpg', alt: 'Feed-in Cornrows', span: 'col-span-2 row-span-1' },
];

export default function Gallery() {
  return (
    <section className="gallery section" id="gallery">
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">Lookbook</span>
          <h2 className="section-title">The Art of Braiding</h2>
          <div className="divider"></div>
          <p className="section-subtitle">
            Explore our recent work. From clean parts to tension-free flawless installs, our work speaks for itself.
          </p>
        </div>

        <div className="gallery-grid fade-up">
          {IMAGES.map((img) => (
            <div key={img.id} className={`gallery-item ${img.span}`}>
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="gallery-overlay">
                <div className="overlay-content">
                  <div className="view-icon">
                    <Eye size={24} className="text-rose" />
                  </div>
                  <span className="gallery-caption">{img.alt}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-footer fade-up stagger-2">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ borderRadius: 'var(--radius-full)' }}>
            Follow Us on Instagram
          </a>
        </div>

      </div>

      <style>{`
        .gallery {
          background-color: var(--clr-bg-alt);
        }
        
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: 240px;
          gap: 16px;
          margin-top: 48px;
        }

        .gallery-item {
          position: relative;
          overflow: hidden;
          border-radius: var(--radius-lg);
          cursor: pointer;
          background: var(--clr-surface);
          box-shadow: var(--shadow-sm);
        }
        
        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .gallery-item:hover img {
          transform: scale(1.05);
        }

        .gallery-overlay {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(255, 246, 243, 0.85); /* warm hover tint */
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity var(--trans-mid);
        }

        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }

        .overlay-content {
          text-align: center;
          transform: translateY(20px);
          transition: transform var(--trans-mid);
        }

        .gallery-item:hover .overlay-content {
          transform: translateY(0);
        }

        .view-icon {
          width: 48px;
          height: 48px;
          background: var(--clr-surface);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 12px;
          color: var(--clr-rose);
          box-shadow: var(--shadow-sm);
        }

        .gallery-caption {
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 1.1rem;
          color: var(--clr-heading);
        }

        .gallery-footer {
          margin-top: 48px;
          text-align: center;
        }

        /* Span classes */
        .col-span-2 { grid-column: span 2; }
        .row-span-2 { grid-row: span 2; }
        .col-span-1 { grid-column: span 1; }
        .row-span-1 { grid-row: span 1; }

        @media (max-width: 900px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-auto-rows: 200px;
          }
          .col-span-2 { grid-column: span 2; }
        }

        @media (max-width: 500px) {
          .gallery-grid {
            grid-template-columns: 1fr;
            grid-auto-rows: 240px;
          }
          .col-span-2, .col-span-1 { grid-column: span 1; }
          .row-span-2 { grid-row: span 1; }
        }
      `}</style>
    </section>
  );
}
