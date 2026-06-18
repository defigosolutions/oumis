import { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import ContactForm from './ContactForm';
import { featuredImages } from '../images';
import './BookingModal.css';

export default function BookingModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setIsOpen(window.location.hash === '#book');
    };
    
    // Check initial load
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const close = () => {
    // Remove the hash without jumping the page
    history.replaceState(null, null, ' ');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="booking-modal">
      <div className="booking-modal__backdrop" onClick={close}></div>
      <div className="booking-modal__content fade-up visible">
        <button className="booking-modal__close" onClick={close}>
          <FaTimes />
        </button>
        
        <div className="booking-modal__grid">
          <div className="booking-modal__image">
            <img src={featuredImages[0]} alt="Oumi's Haven Hair Braiding" />
          </div>
          
          <div className="booking-modal__form-wrap">
            <h2 className="booking-modal__title">Book Your Appointment</h2>
            <p className="booking-modal__sub">Fill out the details below and we'll confirm your spot shortly.</p>
            <div className="booking-modal__scroll">
              <ContactForm compact />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
