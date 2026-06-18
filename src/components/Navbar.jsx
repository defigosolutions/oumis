import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa';
import { logoImg } from '../images';
import './Navbar.css';

const NAV_LINKS = [
  { to: '/',        label: 'Home' },
  { to: '/about',   label: 'About' },
  { to: '/services',label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location              = useLocation();
  const menuRef               = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setOpen(false); }, [location]);

  // Close menu on outside click
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setOpen(false);
    };
    if (open) document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  const isHome = location.pathname === '/';

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${isHome ? 'navbar--home' : ''}`} role="banner">
      <div className="navbar__inner">
        {/* Logo */}
        <Link to="/" className="navbar__logo" aria-label="Oumi's Haven Hair Braiding Home">
          <div className="navbar__logo-img-wrap">
            <img src={logoImg} alt="Oumi's Haven Hair Braiding Logo" className="navbar__logo-img" />
          </div>
          <div className="navbar__logo-text">
            <span className="navbar__logo-name">Oumi's</span>
            <span className="navbar__logo-sub">Hair Salon</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="navbar__links" aria-label="Main navigation">
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="navbar__ctas">
          <a href="tel:+12036192413" className="navbar__phone" aria-label="Call us">
            <FaPhone />
            <span>Call</span>
          </a>
          <a href="#book" className="btn btn-primary navbar__book-btn" id="navbar-book-btn">
            Book Now
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="navbar__hamburger"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          id="mobile-menu-toggle"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`navbar__drawer ${open ? 'navbar__drawer--open' : ''}`} ref={menuRef} aria-hidden={!open}>
        <nav aria-label="Mobile navigation">
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => `navbar__drawer-link ${isActive ? 'navbar__drawer-link--active' : ''}`}
            >
              {label}
            </NavLink>
          ))}
          <a href="#book" className="btn btn-primary navbar__drawer-book" id="mobile-book-btn">
            Book Appointment
          </a>
          <a href="tel:+12036192413" className="navbar__drawer-phone">
            <FaPhone /> 203-776-3381 / 203-407-0474
          </a>
        </nav>
      </div>

      {/* Backdrop */}
      {open && <div className="navbar__backdrop" onClick={() => setOpen(false)} aria-hidden="true" />}
    </header>
  );
}
