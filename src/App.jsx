import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar  from './components/Navbar';
import Footer  from './components/Footer';
import Home    from './pages/Home';
import About   from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import BookingModal from './components/BookingModal';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function AppLayout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/"         element={<Home />}     />
        <Route path="/about"    element={<About />}    />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery"  element={<Gallery />}  />
        <Route path="/reviews"  element={<Reviews />}  />
        <Route path="/contact"  element={<Contact />}  />
        {/* 404 fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <BookingModal />
    </>
  );
}

function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '2rem',
      paddingTop: 'var(--navbar-h)',
    }}>
      <p style={{ fontSize: '4rem', marginBottom: '1rem' }}>✨</p>
      <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', color: 'var(--clr-white)', marginBottom: '1rem' }}>
        Page Not Found
      </h1>
      <p style={{ color: 'var(--clr-text-muted)', marginBottom: '2rem' }}>
        This page doesn't exist — but beautiful hair does!
      </p>
      <a href="/" className="btn btn-primary">← Back to Home</a>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
