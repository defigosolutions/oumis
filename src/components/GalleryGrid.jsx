import { useState, useEffect, useCallback } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight, FaSearchPlus } from 'react-icons/fa';
import './GalleryGrid.css';

export default function GalleryGrid({ images, filter = 'all' }) {
  const [lightbox, setLightbox] = useState(null); // index of open image
  const filtered = filter === 'all' ? images : images.filter(img => img.tags.includes(filter));

  const openLightbox = (idx) => setLightbox(idx);
  const closeLightbox = useCallback(() => setLightbox(null), []);

  const prev = useCallback(() => {
    setLightbox(i => (i - 1 + filtered.length) % filtered.length);
  }, [filtered.length]);

  const next = useCallback(() => {
    setLightbox(i => (i + 1) % filtered.length);
  }, [filtered.length]);

  // Keyboard navigation
  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e) => {
      if (e.key === 'ArrowLeft')  prev();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'Escape')     closeLightbox();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightbox, prev, next, closeLightbox]);

  // Lock body scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightbox]);

  return (
    <>
      <div className="gallery-grid" role="list" aria-label="Hairstyle gallery">
        {filtered.map((img, idx) => (
          <button
            key={img.id}
            className="gallery-grid__item fade-up"
            onClick={() => openLightbox(idx)}
            style={{ '--delay': `${(idx % 6) * 80}ms` }}
            aria-label={`View ${img.alt}`}
            role="listitem"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="gallery-grid__img"
              loading="lazy"
            />
            <div className="gallery-grid__overlay" aria-hidden="true">
              <FaSearchPlus className="gallery-grid__icon" />
              <span className="gallery-grid__label">{img.alt}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="lightbox"
          onClick={(e) => { if (e.target === e.currentTarget) closeLightbox(); }}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button className="lightbox__close" onClick={closeLightbox} aria-label="Close lightbox">
            <FaTimes />
          </button>

          <button className="lightbox__nav lightbox__nav--prev" onClick={prev} aria-label="Previous image">
            <FaChevronLeft />
          </button>

          <div className="lightbox__content">
            <img
              src={filtered[lightbox].src}
              alt={filtered[lightbox].alt}
              className="lightbox__img"
            />
            <p className="lightbox__caption">{filtered[lightbox].alt}</p>
            <p className="lightbox__counter">
              {lightbox + 1} / {filtered.length}
            </p>
          </div>

          <button className="lightbox__nav lightbox__nav--next" onClick={next} aria-label="Next image">
            <FaChevronRight />
          </button>
        </div>
      )}
    </>
  );
}
