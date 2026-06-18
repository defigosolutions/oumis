import { Link } from 'react-router-dom';
import {
  FaMapMarkerAlt, FaPhone, FaClock, FaInstagram,
  FaFacebookF, FaHeart
} from 'react-icons/fa';
import { logoImg } from '../images';
import './Footer.css';

const LINKS_SALON = [
  { to: '/',         label: 'Home' },
  { to: '/about',    label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/gallery',  label: 'Gallery' },
  { to: '/reviews',  label: 'Reviews' },
  { to: '/contact',  label: 'Book Appointment' },
];

const SERVICES_LIST = [
  'Knotless Braids', 'Box Braids', 'Cornrows & Stitch',
  'Passion Twists', 'Faux Locs', 'Dreadlocks / Locs',
  'Boho Braids', 'Kids Braids',
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__glow footer__glow--left" aria-hidden="true" />
      <div className="footer__glow footer__glow--right" aria-hidden="true" />

      <div className="container">
        <div className="footer__grid">

          {/* Brand Column */}
          <div className="footer__col footer__col--brand">
            <Link to="/" className="footer__logo" aria-label="Oumi's Haven Hair Braiding">
              <div className="footer__logo-img-wrap">
                <img src={logoImg} alt="Oumi's Haven Hair Braiding Logo" />
              </div>
              <div>
                <p className="footer__logo-name">Oumi's Haven Hair Braiding</p>
                <p className="footer__logo-tagline">Luxury Braiding & Protective Styles</p>
              </div>
            </Link>
            <p className="footer__desc">
              Professional braid and protective styling salon in Hamden, CT. 
              Specializing in knotless braids, box braids, cornrows, and more 
              – where every client leaves looking and feeling their best.
            </p>
            <div className="footer__socials">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer__social-btn" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer__social-btn" aria-label="Facebook">
                <FaFacebookF />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <h3 className="footer__col-title">Quick Links</h3>
            <ul className="footer__links">
              {LINKS_SALON.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="footer__link">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer__col">
            <h3 className="footer__col-title">Our Services</h3>
            <ul className="footer__links">
              {SERVICES_LIST.map((s) => (
                <li key={s}>
                  <Link to="/services" className="footer__link">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h3 className="footer__col-title">Contact & Hours</h3>
            <ul className="footer__contact-list">
              <li>
                <FaMapMarkerAlt className="footer__contact-icon" />
                <span>1245 Dixwell Ave, Hamden, CT 06514</span>
              </li>
              <li>
                <FaPhone className="footer__contact-icon" />
                <a href="tel:+12036192413">203-776-3381 / 203-407-0474</a>
              </li>
              <li>
                <FaClock className="footer__contact-icon" />
                <div className="footer__hours">
                  <span>Mon: Closed</span>
                  <span>Tue – Fri: 9 AM – 6 PM</span>
                  <span>Sat – Sun: 9 AM – 7 PM</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <p className="footer__copy">
            © {year} Oumi's Haven Hair Braiding. All rights reserved.
          </p>
          <p className="footer__made">
            Made with <FaHeart className="footer__heart" /> in Hamden, CT
          </p>
        </div>
      </div>
    </footer>
  );
}
