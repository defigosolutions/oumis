import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleOpenBooking = (service = null) => {
    setSelectedService(service);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedService(null);
  };

  return (
    <>
      <Navbar onBookOpen={() => handleOpenBooking()} />
      
      <main>
        <Hero onBookOpen={() => handleOpenBooking()} />
        <Services onSelectService={(service) => handleOpenBooking(service)} />
        <Gallery />
        <Reviews />
        <Contact />
      </main>

      <Footer />

      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={handleCloseBooking} 
        selectedService={selectedService}
      />
    </>
  );
}
