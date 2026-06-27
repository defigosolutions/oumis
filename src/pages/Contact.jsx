import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhone, FaClock, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ContactForm from '../components/ContactForm';
import './Contact.css';

const HOURS = [
  { day: 'Monday',    hours: '10:00 AM – 7:00 PM', closed: false },
  { day: 'Tuesday',   hours: '10:00 AM – 7:00 PM', closed: false },
  { day: 'Wednesday', hours: '10:00 AM – 7:00 PM', closed: false },
  { day: 'Thursday',  hours: '10:00 AM – 7:00 PM', closed: false },
  { day: 'Friday',    hours: '10:00 AM – 7:00 PM', closed: false },
  { day: 'Saturday',  hours: '10:00 AM – 7:00 PM', closed: false },
  { day: 'Sunday',    hours: '11:00 AM – 7:00 PM', closed: false },
];

const TODAY = new Date().toLocaleDateString('en-US', { weekday: 'long' });

export default function Contact() {
  useScrollAnimation();

  useEffect(() => {
    document.title = "Book Appointment | Oumi's Haven Hair Braiding – Hamden, CT";
  }, []);

  return (
    <main className="contact-page">

      {/* ── PAGE HERO ── */}
      <section className="contact-page__hero section-sm">
        <div className="blob blob-purple contact-page__blob-1" aria-hidden="true" />
        <div className="blob blob-pink   contact-page__blob-2" aria-hidden="true" />
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="breadcrumb fade-up">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span>Contact</span>
          </div>
          <h1 className="section-title fade-up stagger-1">
            Let's Create Your <span className="text-gradient">Dream Style</span>
          </h1>
          <div className="divider fade-up stagger-2" />
          <p className="section-subtitle fade-up stagger-3">
            Fill out the form below and we'll confirm your appointment within 24 hours.
            Walk-ins are welcome when available.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="section contact-page__content">
        <div className="container">
          <div className="contact-page__grid">

            {/* ── LEFT: Form ── */}
            <div className="contact-page__form-col">
              <div className="contact-page__form-card glass-card fade-up">
                <div className="contact-page__form-header">
                  <h2 className="contact-page__form-title">Request an Appointment</h2>
                  <p className="contact-page__form-sub">
                    A deposit is required upon booking confirmation.
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>

            {/* ── RIGHT: Info Panel ── */}
            <div className="contact-page__info-col fade-up stagger-2">

              {/* Contact Details */}
              <div className="contact-page__info-card glass-card">
                <h3 className="contact-page__info-title">Salon Information</h3>

                <div className="contact-page__info-item">
                  <div className="contact-page__info-icon-wrap">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className="contact-page__info-label">Address</p>
                    <p className="contact-page__info-value">1245 Dixwell Ave</p>
                    <p className="contact-page__info-value">Hamden, CT 06514</p>
                    <a
                      href="https://maps.app.goo.gl/eThWZQjueMfJbwZk7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-page__info-link"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>

                <div className="contact-page__info-item">
                  <div className="contact-page__info-icon-wrap">
                    <FaPhone />
                  </div>
                  <div>
                    <p className="contact-page__info-label">Phone</p>
                    <a href="tel:+12036192413" className="contact-page__info-phone">
                      +1 (203) 619-2413
                    </a>
                  </div>
                </div>

                <div className="contact-page__socials">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="contact-page__social" aria-label="Instagram">
                    <FaInstagram /> Instagram
                  </a>
                  <a href="https://www.facebook.com/p/Oumis-Place-Haven-Hair-Braiding-100063511092366/" target="_blank" rel="noopener noreferrer" className="contact-page__social" aria-label="Facebook">
                    <FaFacebookF /> Facebook
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="contact-page__hours-card glass-card">
                <div className="contact-page__info-icon-wrap contact-page__hours-icon">
                  <FaClock />
                </div>
                <h3 className="contact-page__info-title">Business Hours</h3>
                <ul className="contact-page__hours-list" role="list">
                  {HOURS.map(({ day, hours, closed }) => (
                    <li
                      key={day}
                      className={`contact-page__hours-item ${closed ? 'contact-page__hours-item--closed' : ''} ${day === TODAY ? 'contact-page__hours-item--today' : ''}`}
                    >
                      <span className="contact-page__hours-day">
                        {day}
                        {day === TODAY && <span className="contact-page__today-badge">Today</span>}
                      </span>
                      <span className={`contact-page__hours-time ${closed ? 'contact-page__hours-closed' : ''}`}>
                        {hours}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm contact-page__map" id="salon-map">
        <div className="container">
          <header className="section-header">
            <span className="section-tag fade-up">Our Location</span>
            <h2 className="section-title fade-up stagger-1">
              Find <span className="text-gradient">Us Here</span>
            </h2>
          </header>
        </div>
        <div className="contact-page__map-wrap fade-up stagger-2">
          <iframe
            title="Oumi's Haven Hair Braiding on Google Maps"
            src="https://www.google.com/maps?q=1245+Dixwell+Ave,+Hamden,+CT+06514&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </main>
  );
}
