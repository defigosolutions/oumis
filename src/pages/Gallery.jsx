import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GalleryGrid from '../components/GalleryGrid';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { galleryImages } from '../images';
import './Gallery.css';

const FILTERS = [
  { key: 'all',      label: 'All Styles' },
  { key: 'knotless', label: 'Knotless' },
  { key: 'box',      label: 'Box Braids' },
  { key: 'cornrows', label: 'Cornrows' },
  { key: 'twists',   label: 'Twists' },
  { key: 'boho',     label: 'Boho' },
  { key: 'locs',     label: 'Locs' },
  { key: 'kids',     label: 'Kids' },
  { key: 'color',    label: 'Color' },
];

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  useScrollAnimation(loading);

  useEffect(() => {
    document.title = "Photo Gallery | Oumi's Haven Hair Braiding – Hamden, CT";

    const fetchImages = async () => {
      try {
        const res = await fetch('/api/v1/gallery');
        const data = await res.json();
        if (data.success && data.data && data.data.length > 0) {
          const formatted = data.data.map(img => {
            const slug = (img.category?.slug || '').toLowerCase();
            const tags = ['all'];
            if (slug.includes('knotless')) tags.push('knotless');
            if (slug.includes('box')) tags.push('box');
            if (slug.includes('cornrow') || slug.includes('stitch')) tags.push('cornrows');
            if (slug.includes('twist')) tags.push('twists');
            if (slug.includes('boho')) tags.push('boho');
            if (slug.includes('locs') || slug.includes('dreadlock')) tags.push('locs');
            if (slug.includes('kids')) tags.push('kids');
            if (slug.includes('color') || slug.includes('highlight')) tags.push('color');
            
            return {
              id: img.id,
              src: img.url,
              alt: img.altText || img.title || 'Hairstyle',
              tags
            };
          });
          setImages(formatted);
        } else {
          setImages(galleryImages);
        }
      } catch (error) {
        console.error("Failed to fetch gallery images:", error);
        setImages(galleryImages);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const filtered = filter === 'all'
    ? images
    : images.filter(img => img.tags.includes(filter));

  return (
    <main className="gallery-page">

      {/* ── PAGE HERO ── */}
      <section className="gallery-page__hero section-sm">
        <div className="blob blob-purple gallery-page__blob-1" aria-hidden="true" />
        <div className="blob blob-pink   gallery-page__blob-2" aria-hidden="true" />
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="breadcrumb fade-up">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span>Gallery</span>
          </div>
          <h1 className="section-title fade-up stagger-1">
            Style <span className="text-gradient">Gallery</span>
          </h1>
          <div className="divider fade-up stagger-2" />
          <p className="section-subtitle fade-up stagger-3">
            Browse our portfolio of stunning protective styles. Click any image to view it in full detail.
          </p>
        </div>
      </section>

      {/* ── FILTER BAR ── */}
      <div className="gallery-page__filter-bar">
        <div className="container">
          <div
            className="gallery-page__filters"
            role="group"
            aria-label="Filter gallery by style type"
          >
            {FILTERS.map(({ key, label }) => (
              <button
                key={key}
                className={`gallery-page__filter-btn ${filter === key ? 'gallery-page__filter-btn--active' : ''}`}
                onClick={() => setFilter(key)}
                id={`gallery-filter-${key}`}
                aria-pressed={filter === key}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── GALLERY GRID ── */}
      <section className="section gallery-page__content">
        <div className="container">
          {/* Photo count */}
          <p className="gallery-page__count fade-up">
            Showing <strong>{filtered.length}</strong> photo{filtered.length !== 1 ? 's' : ''}
            {filter !== 'all' ? ` · ${FILTERS.find(f => f.key === filter)?.label}` : ''}
          </p>

          {loading ? (
            <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--clr-text-muted)' }}>Loading photos...</div>
          ) : (
            <GalleryGrid images={images} filter={filter} />
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-sm gallery-page__cta">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="heading-md fade-up">
            Love what you see?
          </h2>
          <p className="fade-up stagger-1" style={{ color: 'var(--clr-text-muted)', marginTop: 'var(--space-md)', marginBottom: 'var(--space-xl)' }}>
            Book your appointment today and let us create your perfect look.
          </p>
          <a href="tel:+12036192413" className="btn btn-primary fade-up stagger-2" id="gallery-book-btn">
            Book Your Style Now
          </a>
        </div>
      </section>
    </main>
  );
}
