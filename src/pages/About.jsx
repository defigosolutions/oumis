import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight, FaMedal, FaLeaf, FaHandHoldingHeart, FaUsers, FaCoffee, FaStar } from 'react-icons/fa';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import RotatingLogoBadge from '../components/RotatingLogoBadge';
import { aboutImages, logoImg, h19 as ownerImg } from '../images';
import './About.css';

const WHY_CARDS = [
  {
    icon: <FaStar />,
    title: 'Clean & Welcoming Salon',
    desc: 'Our salon is meticulously maintained to provide a clean, comfortable, and inviting environment for every single client.',
    color: '#f4a7c3',
  },
  {
    icon: <FaMedal />,
    title: 'Professional Braiders',
    desc: 'Our team of expert braiders brings years of experience and a passion for perfection to every hairstyle we create.',
    color: '#9b5de5',
  },
  {
    icon: <FaLeaf />,
    title: 'Protective Hairstyles',
    desc: 'We specialize in styles that protect and promote the health of your natural hair — beauty and care in one.',
    color: '#80cbc4',
  },
  {
    icon: <FaUsers />,
    title: 'Kids & Adult Styles',
    desc: 'From toddlers getting their first braids to adults seeking intricate locs — we welcome all ages with patience and skill.',
    color: '#ffcc80',
  },
  {
    icon: <FaHandHoldingHeart />,
    title: 'Comfortable Experience',
    desc: 'We prioritize your comfort with a relaxed appointment-based system, ensuring you are never rushed.',
    color: '#e8207a',
  },
  {
    icon: <FaCoffee />,
    title: 'Free Snacks & Beverages',
    desc: 'Enjoy complimentary snacks and beverages during your session — because great hair deserves great hospitality.',
    color: '#d4b8f0',
  },
];

const TEAM_STATS = [
  { n: '500+', label: 'Clients Served' },
  { n: '10+',  label: 'Years of Experience' },
  { n: '55+',  label: 'Services Offered' },
  { n: '5★',   label: 'Google Rating' },
];

export default function About() {
  useScrollAnimation();

  useEffect(() => {
    document.title = "About Us | Oumi's Haven Hair Braiding – Hamden, CT";
  }, []);

  return (
    <main className="about">

      {/* ── PAGE HERO ── */}
      <section className="about__hero section-sm">
        <div className="blob blob-purple about__blob-1" aria-hidden="true" />
        <div className="blob blob-pink   about__blob-2" aria-hidden="true" />
        <div className="container about__hero-inner">
          <div className="about__hero-text">
            <div className="breadcrumb fade-up">
              <Link to="/">Home</Link>
              <span className="breadcrumb-sep">/</span>
              <span>About Us</span>
            </div>
            <h1 className="section-title fade-up stagger-1">
              About <span className="text-gradient">Oumi's Haven Hair Braiding</span>
            </h1>
            <div className="divider divider-left fade-up stagger-2" />
            <p className="about__hero-sub fade-up stagger-3">
              Hamden's premier destination for professional braiding and protective styling.
              Where every client leaves looking and feeling extraordinary.
            </p>
          </div>
          <div className="about__hero-badge fade-in stagger-3">
            <RotatingLogoBadge size={240} />
          </div>
        </div>
      </section>

      {/* ── STORY SECTION ── */}
      <section className="section about__story">
        <div className="container about__story-inner">
          {/* Photo mosaic */}
          <div className="about__mosaic fade-in">
            <div className="about__mosaic-main">
              <img src={aboutImages[0]} alt="Oumi's Haven Hair Braiding signature braiding style" loading="lazy" />
            </div>
            <div className="about__mosaic-side">
              {aboutImages.slice(1, 5).map((img, i) => (
                <div key={i} className="about__mosaic-thumb">
                  <img src={img} alt="Salon hairstyle" loading="lazy" />
                </div>
              ))}
            </div>
          </div>

          {/* Story text */}
          <div className="about__story-text">
            <span className="section-tag fade-up">Who We Are</span>
            <h2 className="section-title fade-up stagger-1">
              A Passion for <span className="text-gradient-pink">Protective Styling</span>
            </h2>
            <div className="divider divider-left fade-up stagger-2" />

            <div className="about__story-paras fade-up stagger-3">
              <p>
                <strong>Oumi's Haven Hair Braiding</strong> is a professional braid and protective styling salon 
                located in Hamden, CT — specializing in knotless braids, box braids, cornrows, 
                twists, boho styles, weaves, kids' braids, Senegalese twists, waist-length braids, 
                locs, and much more.
              </p>
              <p>
                Our salon was founded on a simple but powerful belief: every person deserves a 
                braiding experience that combines artistry, professionalism, and genuine care. 
                We pour our hearts into every style, treating each client as an individual with 
                unique hair goals and preferences.
              </p>
              <p>
                We are committed to clean work, comfort, and neat styling. Whether you're coming 
                in for your first protective style or you're a long-time client, you'll always 
                receive the same high standard of service — professional, personal, and precise.
              </p>
              <p>
                Our friendly braiders take pride in the long-lasting protective hairstyles they 
                create. We want you to leave not just with beautiful hair, but with hair that 
                stays beautiful and protects your natural strands for weeks to come.
              </p>
            </div>

            {/* Stats */}
            <div className="about__stats fade-up stagger-4">
              {TEAM_STATS.map(({ n, label }) => (
                <div key={label} className="about__stat glass-card">
                  <span className="about__stat-num text-gradient">{n}</span>
                  <span className="about__stat-label">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── OWNER SECTION ── */}
      <section className="section about__owner" id="meet-the-owner">
        <div className="blob blob-purple about__owner-blob" aria-hidden="true" />
        <div className="container about__owner-inner">
          <div className="about__owner-image fade-in">
            <img src={ownerImg} alt="Oumi, Founder and Lead Braider" loading="lazy" />
            <div className="about__owner-image-backdrop" aria-hidden="true" />
          </div>
          <div className="about__owner-text">
            <span className="section-tag fade-up">Meet the Owner</span>
            <h2 className="section-title fade-up stagger-1">
              Hi, I'm <span className="text-gradient-pink">Oumi</span>
            </h2>
            <div className="divider divider-left fade-up stagger-2" />
            <div className="about__owner-paras fade-up stagger-3">
              <p>
                As the founder and lead braider at <strong>Oumi's Haven Hair Braiding</strong>, my passion is making every client feel beautiful, confident, and cared for. I have dedicated years to mastering the art of braiding and protective styling.
              </p>
              <p>
                My goal is to create a welcoming environment where you can relax while we work our magic. Whether you are looking for classic cornrows, trendy knotless braids, or intricate boho styles, I ensure that every style is done with precision and a gentle touch.
              </p>
              <p>
                I believe that your hair is your crown. Thank you for trusting me and my team to help you wear it beautifully.
              </p>
            </div>
            <div className="about__owner-sign fade-up stagger-4">
              <p className="signature">Oumi</p>
              <span className="role">Founder & Lead Stylist</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="section about__why" id="why-choose-us">
        <div className="blob blob-pink about__why-blob" aria-hidden="true" />
        <div className="container">
          <header className="section-header">
            <span className="section-tag fade-up">Why Choose Us</span>
            <h2 className="section-title fade-up stagger-1">
              The <span className="text-gradient">Oumi's Difference</span>
            </h2>
            <div className="divider fade-up stagger-2" />
            <p className="section-subtitle fade-up stagger-3">
              More than just a salon — we're a full experience designed around your comfort and style.
            </p>
          </header>

          <div className="about__why-grid">
            {WHY_CARDS.map(({ icon, title, desc, color }, i) => (
              <div
                key={title}
                className="about__why-card glass-card fade-up"
                style={{ '--delay': `${i * 80}ms`, '--why-color': color }}
              >
                <div className="about__why-icon-wrap" style={{ background: `${color}20`, border: `1px solid ${color}40` }}>
                  <span className="about__why-icon" style={{ color }}>{icon}</span>
                </div>
                <h3 className="about__why-title">{title}</h3>
                <p className="about__why-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTO GALLERY STRIP ── */}
      <section className="section-sm about__gallery" id="about-gallery">
        <div className="container">
          <header className="section-header">
            <span className="section-tag fade-up">Our Portfolio</span>
            <h2 className="section-title fade-up stagger-1">
              Our <span className="text-gradient">Work Speaks</span>
            </h2>
          </header>
          <div className="about__gallery-grid fade-in">
            {aboutImages.slice(0, 9).map((img, i) => (
              <div key={i} className="about__gallery-item">
                <img src={img} alt={`Salon hairstyle ${i + 1}`} loading="lazy" />
                <div className="about__gallery-overlay" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-sm about__cta">
        <div className="container about__cta-inner">
          <div className="about__cta-badge fade-in">
            <RotatingLogoBadge size={200} />
          </div>
          <div className="about__cta-text fade-up">
            <h2 className="heading-lg">
              Ready to <span className="text-gradient">Get Started?</span>
            </h2>
            <p className="about__cta-sub">
              Book your appointment today and experience the Oumi's difference firsthand.
            </p>
            <div className="about__cta-btns">
              <Link to="/contact" className="btn btn-primary" id="about-book-btn">
                Book Appointment <FaChevronRight />
              </Link>
              <Link to="/services" className="btn btn-secondary" id="about-services-btn">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
