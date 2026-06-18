import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  FaPhone, FaCalendar, FaChevronRight, FaMapMarkerAlt,
  FaStar, FaLeaf, FaHandHoldingHeart, FaUsers, FaCoffee, FaMedal,
  FaRegUser, FaRegEnvelope, FaRegCalendarAlt, FaRegCommentDots, FaCut
} from 'react-icons/fa';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ReviewSlider from '../components/ReviewSlider';
import RotatingLogoBadge from '../components/RotatingLogoBadge';
import AnimatedCounter from '../components/AnimatedCounter';
import { heroImages, featuredImages, previewImages, logoImg, socialBannerImg } from '../images';
import './Home.css';

const FEATURED_SERVICES = [
  { img: featuredImages[5], name: 'Knotless Braids',  desc: 'The most popular protective style. Starts at your natural hair for a pain-free look.',   price: '$180+' },
  { img: featuredImages[2], name: 'Box Braids',        desc: 'Classic and versatile protective style available in all lengths and sizes.',                price: '$140+' },
  { img: featuredImages[1], name: 'Boho Styles',       desc: 'Bohemian knotless braids with gorgeous curly ends for a free-spirited look.',             price: '$200+' },
  { img: featuredImages[3], name: 'Faux & Soft Locs',  desc: 'Lightweight faux locs that mimic the beauty of real locs without the commitment.',        price: '$180+' },
  { img: featuredImages[4], name: 'Passion Twists',    desc: 'Trendy and lightweight twists with silky smooth texture, perfect for any occasion.',       price: '$180+' },
  { img: featuredImages[0], name: 'Dreadlocks / Locs', desc: 'Expert retwisting, installation, and maintenance services for all loc stages.',           price: '$120+' },
];

const WHY_CARDS = [
  { icon: <FaMedal />,            title: 'Expert Braiders',           desc: 'Years of experience in all protective styles' },
  { icon: <FaLeaf />,             title: 'Hair Health First',         desc: 'Gentle techniques that protect your natural hair' },
  { icon: <FaHandHoldingHeart />, title: 'Clean & Welcoming Salon',   desc: 'A warm, comfortable environment for every visit' },
  { icon: <FaUsers />,            title: 'Adults & Kids Welcome',     desc: 'Styles for all ages from toddlers to adults' },
  { icon: <FaStar />,             title: '5-Star Rated',              desc: 'Consistently praised for quality and professionalism' },
  { icon: <FaCoffee />,           title: 'Free Snacks & Beverages',   desc: 'Enjoy complimentary refreshments during your session' },
];

const PRICING = [
  { name: 'Knotless Braids', time: '4-6 hours', price: '$180+' },
  { name: 'Box Braids', time: '4-5 hours', price: '$140+' },
  { name: 'Boho Styles', time: '5-7 hours', price: '$200+' },
  { name: 'Faux & Soft Locs', time: '4-6 hours', price: '$180+' },
  { name: 'Passion Twists', time: '3-5 hours', price: '$180+' },
  { name: 'Dreadlocks Retwist', time: '1-2 hours', price: '$120+' },
  { name: 'Cornrows / Stitch Braids', time: '2-3 hours', price: '$70+' },
  { name: 'Kids Braids', time: '2-4 hours', price: '$50+' },
];

const HOURS = [
  { day: 'Monday', time: 'Closed' },
  { day: 'Tuesday', time: '9:00 AM – 6:00 PM' },
  { day: 'Wednesday', time: '9:00 AM – 6:00 PM' },
  { day: 'Thursday', time: '9:00 AM – 6:00 PM' },
  { day: 'Friday', time: '9:00 AM – 6:00 PM' },
  { day: 'Saturday', time: '9:00 AM – 7:00 PM' },
  { day: 'Sunday', time: '9:00 AM – 7:00 PM' },
];

export default function Home() {
  useScrollAnimation();

  const heroRef = useRef(null);

  // Subtle parallax on hero
  useEffect(() => {
    const onScroll = () => {
      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <main className="home">

      {/* ── HERO ── */}
      <section className="home__hero" aria-label="Hero">
        <div className="home__hero-bg" ref={heroRef}>
          <img src={socialBannerImg} alt="Oumi's Haven Hair Braiding" className="home__hero-bg-img" />
          <div className="home__hero-overlay" />
        </div>

        {/* Floating blobs */}
        <div className="blob blob-purple home__blob-1" aria-hidden="true" />
        <div className="blob blob-pink   home__blob-2" aria-hidden="true" />
        <div className="blob blob-lavender home__blob-3" aria-hidden="true" />

        {/* Floating image strip */}
        <div className="home__hero-images" aria-hidden="true">
          {heroImages.map((img, i) => (
            <div key={i} className="home__hero-thumb" style={{ '--i': i }}>
              <img src={img} alt="" />
            </div>
          ))}
        </div>

        <div className="container home__hero-content">
          <div className="home__hero-tag fade-up">
            <FaStar /> Hamden's Premier Braiding Salon
          </div>

          <h1 className="home__hero-title fade-up stagger-1">
            The Art of{' '}
            <span className="text-gradient">Beautiful Hair,</span>
            <br />Perfected
          </h1>

          <p className="home__hero-sub fade-up stagger-2">
            Treat yourself to the luxury your hair has been asking for.
            <br />Professional knotless braids, box braids & protective styles in Hamden, CT.
          </p>

          <div className="home__hero-btns fade-up stagger-3">
            <a href="#book" className="btn btn-primary" id="hero-book-btn">
              <FaCalendar /> Book Appointment
            </a>
            <Link to="/services" className="btn btn-outline-purple" id="hero-services-btn">
              View Services <FaChevronRight />
            </Link>
            <a href="tel:+12036192413" className="btn btn-outline-purple home__hero-btn-call" id="hero-call-btn">
              <FaPhone /> Call Now
            </a>
          </div>

          {/* Stats strip */}
          <div className="home__stats fade-up stagger-4">
            {[
              { end: 500, suffix: '+', label: 'Happy Clients' },
              { end: 55,  suffix: '+', label: 'Services Offered' },
              { end: 5,   suffix: '★', label: 'Google Rating' },
              { end: 7,   suffix: '',  label: 'Days a Week' },
            ].map(({ end, suffix, label }) => (
              <div key={label} className="home__stat">
                <span className="home__stat-num">
                  <AnimatedCounter end={end} suffix={suffix} duration={2500} />
                </span>
                <span className="home__stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="home__hero-scroll-hint" aria-hidden="true">
          <span />
        </div>
      </section>

      {/* ── FEATURED SERVICES ── */}
      <section className="section home__services" id="featured-services">
        <div className="container">
          <header className="section-header">
            <span className="section-tag fade-up">What We Do Best</span>
            <h2 className="section-title fade-up stagger-1">
              Our <span className="text-gradient">Signature Styles</span>
            </h2>
            <div className="divider fade-up stagger-2" />
            <p className="section-subtitle fade-up stagger-3">
              From classic box braids to intricate boho knotless styles — we bring your vision to life.
            </p>
          </header>

          <div className="home__services-grid">
            {FEATURED_SERVICES.map((svc, i) => (
              <div
                key={svc.name}
                className="home__svc-card glass-card fade-up"
                style={{ '--delay': `${i * 100}ms` }}
              >
                <div className="home__svc-img-wrap">
                  <img src={svc.img} alt={svc.name} className="home__svc-img" loading="lazy" />
                </div>
                <div className="home__svc-content">
                  <h3 className="home__svc-name">{svc.name}</h3>
                  <p className="home__svc-desc">{svc.desc}</p>
                  <div className="home__svc-price">{svc.price}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="home__services-cta fade-up">
            <Link to="/services" className="btn btn-primary" id="all-services-btn">
              View All Services <FaChevronRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT PREVIEW ── */}
      <section className="section home__about" id="about-preview">
        <div className="blob blob-purple home__about-blob" aria-hidden="true" />
        <div className="container home__about-inner">
          {/* Photo collage */}
          <div className="home__about-photos fade-in">
            {featuredImages.slice(0, 4).map((img, i) => (
              <div key={i} className="home__about-photo" style={{ '--i': i }}>
                <img src={img} alt="Salon hairstyle showcase" loading="lazy" />
              </div>
            ))}
            <div className="home__about-badge-wrap">
              <RotatingLogoBadge size={180} />
            </div>
          </div>

          {/* Text */}
          <div className="home__about-text">
            <span className="section-tag fade-up">Our Story</span>
            <h2 className="section-title fade-up stagger-1">
              Where Braiding Is{' '}
              <span className="text-gradient-pink">an Art Form</span>
            </h2>
            <div className="divider divider-left fade-up stagger-2" />
            <p className="home__about-para fade-up stagger-3">
              Oumi's Haven Hair Braiding is a professional braid and protective styling salon in Hamden, CT.
              We specialize in knotless braids, box braids, cornrows, twists, boho styles, weaves,
              kids' braids, and so much more.
            </p>
            <p className="home__about-para fade-up stagger-4">
              Our focus is on clean work, comfort, neat styling, and long-lasting protective hairstyles
              — in a friendly, welcoming environment where you can sit back, relax, and leave looking amazing.
            </p>

            {/* Why choose us */}
            <div className="home__why-grid fade-up stagger-5">
              {WHY_CARDS.map(({ icon, title, desc }) => (
                <div key={title} className="home__why-card">
                  <span className="home__why-icon">{icon}</span>
                  <div>
                    <p className="home__why-title">{title}</p>
                    <p className="home__why-desc">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/about" className="btn btn-primary fade-up stagger-6" id="learn-more-btn">
              Learn More About Us <FaChevronRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ── PRICING MENU ── */}
      <section className="section home__pricing" id="pricing-menu">
        <div className="blob blob-pink home__pricing-blob" aria-hidden="true" />
        <div className="container">
          <header className="section-header">
            <span className="section-tag fade-up">Investment</span>
            <h2 className="section-title fade-up stagger-1">
              Service <span className="text-gradient">Pricing</span>
            </h2>
            <div className="divider fade-up stagger-2" />
            <p className="section-subtitle fade-up stagger-3">
              Transparent pricing for our most popular styles. Exact pricing depends on length, size, and hair density.
            </p>
          </header>

          <div className="home__pricing-wrapper light-card fade-up stagger-4">
            <div className="home__pricing-grid">
              {PRICING.map((item, i) => (
                <div key={i} className="home__pricing-item">
                  <div className="home__pricing-info">
                    <h3 className="home__pricing-name">{item.name}</h3>
                    <span className="home__pricing-time">{item.time}</span>
                  </div>
                  <div className="home__pricing-dots"></div>
                  <div className="home__pricing-cost">{item.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY PREVIEW ── */}
      <section className="section home__gallery-preview" id="gallery-preview">
        <div className="container">
          <header className="section-header">
            <span className="section-tag fade-up">Our Work</span>
            <h2 className="section-title fade-up stagger-1">
              <span className="text-gradient">Gallery</span> Highlights
            </h2>
            <div className="divider fade-up stagger-2" />
          </header>

          <div className="home__gallery-grid fade-in">
            {previewImages.map((img, i) => (
              <Link key={i} to="/gallery" className="home__gallery-thumb" style={{ '--i': i }} aria-label="View gallery">
                <img src={img} alt="Hairstyle gallery preview" loading="lazy" />
                <div className="home__gallery-thumb-overlay">
                  <span>View Gallery</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="home__gallery-cta fade-up">
            <Link to="/gallery" className="btn btn-secondary" id="gallery-btn">
              View Full Gallery <FaChevronRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ── REVIEWS PREVIEW ── */}
      <section className="section home__reviews" id="reviews-preview">
        <div className="blob blob-pink home__reviews-blob" aria-hidden="true" />
        <div className="container">
          <header className="section-header">
            <span className="section-tag fade-up">Client Love</span>
            <h2 className="section-title fade-up stagger-1">
              What Our Clients <span className="text-gradient">Say</span>
            </h2>
            <div className="divider fade-up stagger-2" />
            <p className="section-subtitle fade-up stagger-3">
              Hover to pause the scroll and read each review.
            </p>
          </header>

          <div className="home__reviews-slider-wrap fade-in stagger-4">
            <ReviewSlider />
          </div>

          <div className="home__reviews-cta fade-up">
            <Link to="/reviews" className="btn btn-secondary" id="reviews-btn">
              See All Reviews <FaChevronRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TIMETABLE / HOURS ── */}
      <section className="section-sm home__timetable" id="opening-hours">
        <div className="container">
          <div className="home__timetable-inner">
            <div className="home__timetable-card light-card fade-up">
              <h3 className="home__timetable-title">Opening Hours</h3>
              <ul className="home__timetable-list">
                {HOURS.map((h, i) => (
                  <li key={i} className="home__timetable-item">
                    <span className="home__timetable-day">{h.day}</span>
                    <span className="home__timetable-time">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="home__timetable-img-wrap fade-in stagger-2">
              <img src={heroImages[1]} alt="Salon Interior" className="home__timetable-img" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm home__map" id="salon-location">
        <div className="container">
          <header className="section-header">
            <span className="section-tag fade-up">Find Us</span>
            <h2 className="section-title fade-up stagger-1">
              Visit <span className="text-gradient">Our Salon</span>
            </h2>
          </header>
        </div>

        <div className="home__map-wrap fade-up stagger-2">
          <iframe
            title="Oumi's Haven Hair Braiding Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.3937483898244!2d-72.91720592357437!3d41.39785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e7d8ecabcde123%3A0x0!2s1384+Dixwell+Ave%2C+Hamden%2C+CT+06514!5e0!3m2!1sen!2sus!4v1716000000000!5m2!1sen!2sus"
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="home__map-info-bar">
            <div className="container home__map-info">
              <FaMapMarkerAlt className="home__map-pin" />
              <div>
                <p className="home__map-address">1245 Dixwell Ave, Hamden, CT 06514</p>
                <a href="https://maps.google.com/?q=1384+Dixwell+Ave+Hamden+CT" target="_blank" rel="noopener noreferrer" className="home__map-link">
                  Get Directions →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOOKING SECTION (Polishe Theme Style) ── */}
      <section className="home__reserve" id="book-cta">
        <div className="container home__reserve-inner">
          {/* Left Side: Form */}
          <div className="home__reserve-content fade-up">
            <span className="home__reserve-tag">reserve</span>
            <h2 className="home__reserve-title">BOOK A SEAT</h2>
            
            <form className="home__reserve-form" onSubmit={async (e) => { 
              e.preventDefault(); 
              const formData = new FormData(e.target);
              try {
                const res = await fetch('/api/v1/bookings', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    customerName: formData.get('name'),
                    customerEmail: formData.get('email'),
                    bookingDate: formData.get('date'),
                    serviceId: formData.get('service') || 'placeholder-id',
                    notes: formData.get('notes')
                  })
                });
                if (res.ok) {
                  alert('Booking request sent successfully!');
                  e.target.reset();
                } else {
                  alert('Failed to send booking request.');
                }
              } catch (err) {
                console.error(err);
                alert('Network error.');
              }
            }}>
              <div className="home__reserve-row">
                <div className="home__reserve-field">
                  <FaRegUser className="home__reserve-icon" />
                  <input type="text" name="name" placeholder="Your Name" required />
                </div>
                <div className="home__reserve-field">
                  <FaRegEnvelope className="home__reserve-icon" />
                  <input type="email" name="email" placeholder="Your Email" required />
                </div>
              </div>
              <div className="home__reserve-row">
                <div className="home__reserve-field">
                  <FaRegCalendarAlt className="home__reserve-icon" />
                  <input type="text" name="date" placeholder="Select date" onFocus={(e) => e.target.type = 'date'} onBlur={(e) => {if(!e.target.value) e.target.type = 'text'}} required />
                </div>
                <div className="home__reserve-field">
                  <FaCut className="home__reserve-icon" />
                  <select name="service" required defaultValue="">
                    <option value="" disabled>Service type</option>
                    <option value="knotless">Knotless Braids</option>
                    <option value="box">Box Braids</option>
                    <option value="locs">Faux Locs</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="home__reserve-field home__reserve-field--textarea">
                <FaRegCommentDots className="home__reserve-icon" />
                <textarea name="notes" placeholder="How can we help you? Feel free to get in touch!" rows="1"></textarea>
              </div>
              
              <div className="home__reserve-footer">
                <button type="submit" className="home__reserve-submit">SUBMIT</button>
                <label className="home__reserve-checkbox">
                  <input type="checkbox" required />
                  <span>I agree that my submitted data is collected and stored.</span>
                </label>
              </div>
            </form>
          </div>

          {/* Right Side: Arched Image */}
          <div className="home__reserve-image-wrap fade-in stagger-2">
            <img src={heroImages[0]} alt="Salon styling" className="home__reserve-image" loading="lazy" />
          </div>
        </div>
      </section>
    </main>
  );
}
