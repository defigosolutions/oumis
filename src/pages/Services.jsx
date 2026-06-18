import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Services.css';

const CATEGORIES = [
  'All Services', 'Box Braids', 'Knotless Braids', 'Tribal & Lemonade',
  'Cornrows & Stitch', 'Twist Styles', 'Crochet Braids', 'Dreadlocks/Locs',
  'Instant Locs', 'Faux & Soft Locs', 'Wicks & Specialty', 'Kids', 'Maintenance',
];

const ALL_SERVICES = [
  // Box Braids
  { id: 1,  category: 'Box Braids',        name: 'Box Braids',                     description: 'Classic protective box braids in small, medium, or large sizes. Versatile and long-lasting.',         price: '$140 – $200+', deposit: '$30' },
  { id: 2,  category: 'Box Braids',        name: 'Male Box Braids',                description: 'Box braids tailored for men. Clean, neat, and masculine.',                                              price: '$70+',         deposit: '$10' },
  { id: 3,  category: 'Box Braids',        name: 'Tribal Braids',                  description: 'Intricate tribal pattern braids with stylish detailing and flair.',                                      price: '$160+',        deposit: '$30' },
  { id: 4,  category: 'Box Braids',        name: 'Fancy Tribal Braids',            description: 'Elevated tribal braids with elaborate patterns, beads, and decorative accents.',                        price: '$400',         deposit: '$25' },

  // Knotless Braids
  { id: 5,  category: 'Knotless Braids',   name: 'Regular Knotless Braids',        description: 'Lightweight knotless braids that start from your natural hair for a pain-free, natural look.',         price: '$180+',        deposit: '$30' },
  { id: 6,  category: 'Knotless Braids',   name: 'Small & Long Knotless',          description: 'Small-sized knotless braids in extra-long lengths for a dramatic, elegant look.',                      price: '$200+',        deposit: '$30' },
  { id: 7,  category: 'Knotless Braids',   name: 'Jumbo Knotless Braids',          description: 'Bold, chunky knotless braids with a modern oversized aesthetic.',                                       price: '$180+',        deposit: '$30' },
  { id: 8,  category: 'Knotless Braids',   name: 'Knotless Human Braids',          description: 'Premium knotless braids using human hair for an ultra-natural finish and texture.',                     price: '$180 – $200+', deposit: '$30' },
  { id: 9,  category: 'Knotless Braids',   name: 'Long Knotless Braids',           description: 'Waist-length and beyond knotless braids for a stunning, eye-catching style.',                          price: '$200+',        deposit: '$30' },
  { id: 10, category: 'Knotless Braids',   name: 'Long Boho Knotless Braids',      description: 'Bohemian knotless braids with gorgeous loose curly ends. Romantic and free-spirited.',                 price: '$200+',        deposit: '$25' },

  // Tribal & Lemonade
  { id: 11, category: 'Tribal & Lemonade', name: 'Lemonade Braids',                description: "Side-swept, sleek lemonade braids inspired by Beyoncé's iconic style.",                               price: '$90+',         deposit: '$30' },

  // Cornrows & Stitch
  { id: 12, category: 'Cornrows & Stitch', name: 'Natural Hair Cornrows',          description: 'Clean, neat cornrows on natural hair in straight-back or custom patterns.',                             price: '$70+',         deposit: '$10' },
  { id: 13, category: 'Cornrows & Stitch', name: 'Stitch Braids',                  description: 'Stylish stitch/feed-in braids priced per individual braid.',                                            price: '$20 per braid',deposit: '$10' },
  { id: 14, category: 'Cornrows & Stitch', name: 'Two Braids',                     description: 'Simple and chic two-braid style — perfect for a quick, polished look.',                                price: '$50',          deposit: '$10' },
  { id: 15, category: 'Cornrows & Stitch', name: 'Male Corn Braids',               description: 'Cornrows designed for men. Neat, tight, and long-lasting.',                                             price: '$60+',         deposit: '$20' },
  { id: 16, category: 'Cornrows & Stitch', name: 'Small Cornrows Back',            description: 'Small-sized cornrows going straight back. Clean and protective.',                                       price: '$100+',        deposit: '$30' },
  { id: 17, category: 'Cornrows & Stitch', name: 'Half Cornrows / Half Twist-Braids', description: 'A beautiful combination: cornrows in the front and twist-braids in the back.',                     price: '$150 – $160',  deposit: '$30' },
  { id: 18, category: 'Cornrows & Stitch', name: 'Half Cornrows / Half Back Braids', description: 'Elegant half cornrow, half back braids combo style.',                                                price: '$140 – $160',  deposit: '$30' },
  { id: 19, category: 'Cornrows & Stitch', name: 'Braids in Front & Sewing in Back', description: 'Creative combo of braids in front with weave sewing in the back.',                                   price: '$140+',        deposit: '$10' },

  // Twist Styles
  { id: 20, category: 'Twist Styles',      name: 'Passion Twists',                 description: 'Trendy, lightweight passion twists with a silky smooth texture. A modern classic.',                   price: '$200+',        deposit: '$30' },
  { id: 21, category: 'Twist Styles',      name: 'Long Passion Twist',             description: 'Extended passion twists for a dramatic, flowing look that turns heads.',                               price: '$200+',        deposit: '$10' },
  { id: 22, category: 'Twist Styles',      name: 'Short Passion Twist',            description: 'Shorter passion twists for a cute, manageable protective style.',                                      price: '$180',         deposit: '$10' },
  { id: 23, category: 'Twist Styles',      name: 'Kinky Twist',                    description: 'Textured kinky twists that mimic the look and feel of natural locs.',                                   price: '$180+',        deposit: '$10' },
  { id: 24, category: 'Twist Styles',      name: 'Long Kinky Twist',               description: 'Long-length kinky twists for a bold and natural protective look.',                                     price: '$180',         deposit: '$30' },
  { id: 25, category: 'Twist Styles',      name: 'Short Kinky Twist',              description: 'Short kinky twists perfect for a low-maintenance, textured style.',                                    price: '$160',         deposit: '$30' },
  { id: 26, category: 'Twist Styles',      name: 'Senegalese Twist Regular',       description: 'Sleek and elegant Senegalese twists — one of the most timeless protective styles.',                    price: '$180+',        deposit: '$30' },
  { id: 27, category: 'Twist Styles',      name: 'Small Senegalese Twist',         description: 'Delicate small-sized Senegalese twists for an intricate, detailed look.',                             price: '$250',         deposit: '$30' },

  // Crochet Braids
  { id: 28, category: 'Crochet Braids',    name: 'Simple Crochet Braids',          description: 'Quick and versatile crochet braids that give you a full look without the wait.',                       price: '$85+',         deposit: '$10' },

  // Dreadlocks/Locs
  { id: 29, category: 'Dreadlocks/Locs',   name: 'Dreadlocks Retwist',             description: 'Professional retwisting to keep your locs looking neat, fresh, and well-maintained.',                 price: '$110+',        deposit: '$10' },
  { id: 30, category: 'Dreadlocks/Locs',   name: 'Retightening Microlocs/Sisterlocs', description: 'Expert retightening for microlocs and sisterlocs. Priced per hour.',                              price: '$85/hr',       deposit: '$30' },
  { id: 31, category: 'Dreadlocks/Locs',   name: 'Microlocs Installation',         description: 'Full microlocs installation — a long-lasting loc journey begins here.',                                price: '$600+',        deposit: '$30' },
  { id: 32, category: 'Dreadlocks/Locs',   name: 'Interlocking Starter Dreadlocks', description: 'Start your loc journey the right way with professional interlocking starter dreadlocks.',            price: '$270+',        deposit: '$10' },
  { id: 33, category: 'Dreadlocks/Locs',   name: 'Interlocking Dreadlocks Retwist', description: 'Maintenance retwist using the interlocking method for long-lasting neatness.',                       price: '$165+',        deposit: '$30' },
  { id: 34, category: 'Dreadlocks/Locs',   name: 'Starting Locs Coil',             description: 'Start your natural loc journey with the coil method for healthy, defined locs.',                      price: '$100+',        deposit: '$30' },
  { id: 35, category: 'Dreadlocks/Locs',   name: 'Dreadlocks Repair',              description: 'Professional repair for damaged or thinning locs — restored to their full strength and beauty.',       price: '$270+',        deposit: '$30' },
  { id: 36, category: 'Dreadlocks/Locs',   name: 'Locs Dye, Retwist & Style',      description: 'Complete loc service: color treatment, retwist, and professional styling all in one.',                 price: '$160+',        deposit: '$30' },
  { id: 37, category: 'Dreadlocks/Locs',   name: 'Style Locs Only',                description: 'Styling service for existing locs. Consultation required for pricing.',                               price: 'Consultation',  deposit: '$25' },

  // Instant Locs
  { id: 38, category: 'Instant Locs',      name: 'Instant Dreadlocks',             description: 'Get the loc look instantly without the waiting period. Dramatic and beautiful.',                        price: '$500+',        deposit: '$30' },
  { id: 39, category: 'Instant Locs',      name: '16in Instant Locs',              description: '16-inch instant locs for a medium-length loc look right away.',                                        price: '$850+',        deposit: '$30' },
  { id: 40, category: 'Instant Locs',      name: '20in Instant Locs',              description: '20-inch instant locs for a long, flowing loc look from day one.',                                      price: '$1,175',       deposit: '$50' },

  // Faux & Soft Locs
  { id: 41, category: 'Faux & Soft Locs',  name: 'Faux Locs',                      description: 'Beautiful faux locs that mimic the look of real dreadlocks — no commitment needed.',                  price: '$180+',        deposit: '$10' },
  { id: 42, category: 'Faux & Soft Locs',  name: 'Long Faux Locs',                 description: 'Extended faux locs for a dramatic, waist-length loc look.',                                           price: '$250',         deposit: '$30' },
  { id: 43, category: 'Faux & Soft Locs',  name: 'Butterfly Locs',                 description: 'Trendy butterfly locs with a beautifully distressed, boho aesthetic.',                                price: '$300+',        deposit: '$30' },
  { id: 44, category: 'Faux & Soft Locs',  name: 'Goddess Locs',                   description: 'Glamorous goddess locs with soft, flowing curl ends for a regal look.',                               price: '$300+',        deposit: '$30' },
  { id: 45, category: 'Faux & Soft Locs',  name: 'Attach Dreadlocks',              description: 'Extension dreadlocks attached to your existing hair for added length and fullness.',                   price: '$300+',        deposit: '$30' },
  { id: 46, category: 'Faux & Soft Locs',  name: 'Temporary Locs',                 description: 'Temporary loc style — perfect for events and occasions without long-term commitment.',                 price: '$50',          deposit: '$10' },

  // Wicks & Specialty
  { id: 47, category: 'Wicks & Specialty', name: 'Wicks Dreadlocks',               description: 'Dramatic wick dreadlocks — bold, thick, and uniquely expressive.',                                    price: '$750+',        deposit: '$30' },

  // Kids
  { id: 48, category: 'Kids',              name: 'Two Braids Kids',                 description: 'Adorable two-braid style for kids. Neat, quick, and child-friendly.',                                 price: '$50',          deposit: '$10' },

  // Maintenance
  { id: 49, category: 'Maintenance',       name: 'Maintenance Twist',               description: 'Maintenance retwist service for existing twist styles to keep them fresh.',                            price: '$120',         deposit: '$30' },
  { id: 50, category: 'Maintenance',       name: 'All Over Re-Do',                  description: 'Full redo of your existing protective style. Freshen up your look completely.',                       price: '$120+',        deposit: '$25' },
  { id: 51, category: 'Maintenance',       name: 'Front Re-Do',                     description: 'Partial redo focusing on the front sections of your style.',                                          price: '$60',          deposit: '$10' },
  { id: 52, category: 'Maintenance',       name: 'Braids Remove',                   description: 'Professional and careful removal of existing braids, protecting your natural hair.',                  price: '$50+',         deposit: '$10' },
];

const getServiceImage = (category, name) => {
  const cat = category.toLowerCase();
  const nm = name.toLowerCase();
  if (cat.includes('knotless')) {
    if (nm.includes('boho')) return '/assets/h4.jpg';
    if (nm.includes('long')) return '/assets/h7.jpg';
    if (nm.includes('small')) return '/assets/h19.jpg';
    if (nm.includes('human')) return '/assets/h9.jpg';
    return '/assets/h1.jpg';
  }
  if (cat.includes('box')) {
    if (nm.includes('male')) return '/assets/h2.jpg';
    if (nm.includes('fancy')) return '/assets/h14.jpg';
    return '/assets/h26.jpg';
  }
  if (cat.includes('cornrow') || cat.includes('stitch')) {
    if (nm.includes('stitch')) return '/assets/h11.jpg';
    if (nm.includes('natural')) return '/assets/h3.jpg';
    return '/assets/h27.jpg';
  }
  if (cat.includes('twist')) {
    if (nm.includes('passion')) return '/assets/h5.jpg';
    if (nm.includes('senegalese')) return '/assets/h10.jpg';
    if (nm.includes('kinky')) return '/assets/h16.jpg';
    return '/assets/h24.jpg';
  }
  if (cat.includes('crochet')) {
    return '/assets/h12.jpg';
  }
  if (cat.includes('dreadlock') || cat.includes('locs') || cat.includes('wick')) {
    if (nm.includes('faux') || nm.includes('butterfly') || nm.includes('goddess')) {
      if (nm.includes('goddess')) return '/assets/h13.jpg';
      if (nm.includes('butterfly')) return '/assets/h18.jpg';
      return '/assets/h6.jpg';
    }
    return '/assets/h25.jpg';
  }
  if (cat.includes('kids')) {
    if (nm.includes('cornrow')) return '/assets/h22.jpg';
    return '/assets/h8.jpg';
  }
  if (cat.includes('lemonade') || cat.includes('tribal')) {
    return '/assets/h15.jpg';
  }
  return '/assets/h1.jpg'; // fallback
};

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('All Services');
  const [animKey, setAnimKey] = useState(0);
  const [services, setServices] = useState([]);
  const [categories, setCategories] = useState(['All Services']);
  const [loading, setLoading] = useState(true);

  useScrollAnimation(loading);

  useEffect(() => {
    document.title = "Services & Pricing | Oumi's Haven Hair Braiding – Hamden, CT";

    const fetchServices = async () => {
      try {
        const res = await fetch('/api/v1/services');
        const data = await res.json();
        if (data.success && data.data && data.data.length > 0) {
          const formattedServices = data.data.map(s => ({
            id: s.id,
            category: s.category.name,
            name: s.name,
            description: s.description,
            price: s.price,
            deposit: s.deposit,
            imageUrl: s.imageUrl || getServiceImage(s.category.name, s.name)
          }));
          setServices(formattedServices);
          
          const cats = ['All Services', ...new Set(formattedServices.map(s => s.category))];
          setCategories(cats);
        } else {
          const fallback = ALL_SERVICES.map(s => ({
            ...s,
            imageUrl: getServiceImage(s.category, s.name)
          }));
          setServices(fallback);
          const cats = ['All Services', ...new Set(fallback.map(s => s.category))];
          setCategories(cats);
        }
      } catch (error) {
        console.error("Failed to fetch services:", error);
        const fallback = ALL_SERVICES.map(s => ({
          ...s,
          imageUrl: getServiceImage(s.category, s.name)
        }));
        setServices(fallback);
        const cats = ['All Services', ...new Set(fallback.map(s => s.category))];
        setCategories(cats);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  useEffect(() => {
    document.title = "Services & Pricing | Oumi's Haven Hair Braiding – Hamden, CT";
  }, []);

  const filtered = activeCategory === 'All Services'
    ? services
    : services.filter(s => s.category === activeCategory);

  const handleFilter = (cat) => {
    setActiveCategory(cat);
    setAnimKey(k => k + 1); // re-trigger scroll animations
    setTimeout(() => {
      const grid = document.getElementById('services-grid');
      if (grid) grid.querySelectorAll('.fade-up').forEach(el => {
        el.classList.remove('visible');
        void el.offsetWidth; // reflow
        el.classList.add('visible');
      });
    }, 50);
  };

  return (
    <main className="services">

      {/* ── PAGE HERO ── */}
      <section className="services__hero section-sm">
        <div className="blob blob-purple services__blob-1" aria-hidden="true" />
        <div className="blob blob-pink   services__blob-2" aria-hidden="true" />
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="breadcrumb fade-up">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span>Services</span>
          </div>
          <h1 className="section-title fade-up stagger-1">
            Our <span className="text-gradient">Complete Menu</span>
          </h1>
          <div className="divider fade-up stagger-2" />
          <p className="section-subtitle fade-up stagger-3">
            Professional braiding and protective styling for all hair types.
            All services include expert care and lasting results.
          </p>
          <p className="services__deposit-note fade-up stagger-4">
            💡 A deposit is required to secure your appointment. Deposits are applied toward your service total.
          </p>
        </div>
      </section>

      {/* ── FILTER TABS ── */}
      <div className="services__filter-bar">
        <div className="container">
          <div className="services__filter-scroll" role="group" aria-label="Filter services by category">
            {categories.map(cat => (
              <button
                key={cat}
                className={`services__filter-btn ${activeCategory === cat ? 'services__filter-btn--active' : ''}`}
                onClick={() => handleFilter(cat)}
                id={`filter-${cat.replace(/[\s&/]/g, '-').toLowerCase()}`}
                aria-pressed={activeCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── SERVICES GRID ── */}
      <section className="section services__content">
        <div className="container">
          <div className="services__count fade-up">
            <span>{filtered.length} service{filtered.length !== 1 ? 's' : ''}</span>
            {activeCategory !== 'All Services' && (
              <span> in <strong>{activeCategory}</strong></span>
            )}
          </div>

          <div className="services__grid" id="services-grid" key={animKey}>
            {loading ? (
              <div style={{ textAlign: 'center', padding: '2rem' }}>Loading services...</div>
            ) : filtered.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '2rem' }}>No services found.</div>
            ) : (
              filtered.map((service, i) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  animDelay={(i % 6) * 80}
                />
              ))
            )}
          </div>
        </div>
      </section>

      {/* ── BOOKING NOTE ── */}
      <section className="section-sm services__booking-note">
        <div className="container">
          <div className="services__note-card glass-card fade-up">
            <div className="services__note-icon">📋</div>
            <div>
              <h3 className="services__note-title">Booking Information</h3>
              <ul className="services__note-list">
                <li>All appointments require a deposit to secure your booking.</li>
                <li>Deposits are applied toward the total service cost.</li>
                <li>Please arrive with clean, detangled hair unless purchasing a wash service.</li>
                <li>Prices may vary based on hair length, density, and complexity.</li>
                <li>Contact us for a personalized quote on complex styles.</li>
              </ul>
              <a href="tel:+12036192413" className="btn btn-primary" style={{ marginTop: 'var(--space-lg)', display: 'inline-flex' }} id="services-call-btn">
                Call to Book: 203-776-3381 / 203-407-0474
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
