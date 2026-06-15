import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Wifi, Car, Accessibility } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all fields.');
      return;
    }
    console.log('Contact message submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">

        <div className="section-title-wrapper">
          <span className="section-subtitle">Find Us</span>
          <h2 className="section-title text-gradient">Location & Operating Hours</h2>
          <p className="contact-intro">
            We are located in the Stop & Shop Plaza on Dixwell Avenue in Hamden, Connecticut. Drop by or reach out directly.
          </p>
        </div>

        <div className="contact-grid">
          {/* Column 1: Info Cards */}
          <div className="contact-info-panel">
            {/* Hours card */}
            <div className="info-card bg-glass">
              <div className="info-icon-wrapper">
                <Clock className="text-gold" size={24} />
              </div>
              <div className="info-text">
                <h3>Opening Hours</h3>
                <div className="hours-row">
                  <span>Mon - Sat</span>
                  <strong>9:00 AM - 5:00 PM</strong>
                </div>
                <div className="hours-row">
                  <span>Sunday</span>
                  <strong>By Appointment</strong>
                </div>
              </div>
            </div>

            {/* Address card */}
            <div className="info-card bg-glass">
              <div className="info-icon-wrapper">
                <MapPin className="text-gold" size={24} />
              </div>
              <div className="info-text">
                <h3>Our Location</h3>
                <p>1245 Dixwell Avenue</p>
                <p>Hamden, CT 06514</p>
                <span className="info-subtext">(Stop & Shop Plaza)</span>
              </div>
            </div>

            {/* Call card */}
            <div className="info-card bg-glass">
              <div className="info-icon-wrapper">
                <Phone className="text-gold" size={24} />
              </div>
              <div className="info-text">
                <h3>Phone & Contact</h3>
                <p><a href="tel:2037763381">203-776-3381</a></p>
                <p><a href="tel:2034070474">203-407-0474</a></p>
                <p className="email-link"><a href="mailto:oumidiop@hairbraidinghaven.com"><Mail size={14} style={{display:'inline', marginRight: 4, verticalAlign:'middle'}} /> oumidiop@hairbraidinghaven.com</a></p>
              </div>
            </div>

            {/* Amenities */}
            <div className="amenities-row bg-glass">
              <div className="amenity-item">
                <Wifi size={18} className="text-gold" />
                <span>Free WiFi</span>
              </div>
              <div className="amenity-item">
                <Car size={18} className="text-gold" />
                <span>Free Parking</span>
              </div>
              <div className="amenity-item">
                <Accessibility size={18} className="text-gold" />
                <span>Wheelchair Access</span>
              </div>
            </div>
          </div>

          {/* Column 2: Map Visual & Messaging Form */}
          <div className="contact-interactive-panel">
            {/* Mock Map Frame */}
            <div className="map-frame bg-glass">
              <div className="map-placeholder">
                <div className="map-grid-overlay"></div>
                <div className="map-pin-pulse"></div>
                <div className="map-pin">
                  <MapPin size={24} fill="#cfa851" color="#1e1510" />
                </div>
                <div className="map-label bg-glass">
                  <strong>Oumi's Haven</strong>
                  <span>Stop & Shop Plaza, Hamden</span>
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="contact-form-container bg-glass">
              <h3>Send a Quick Inquiry</h3>
              {submitted ? (
                <div className="contact-success">
                  <p>Thank you! Your message has been sent. We'll reply within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group-row">
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="contact-input"
                    />
                    <input 
                      type="email" 
                      placeholder="Your Email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      className="contact-input"
                    />
                  </div>
                  <textarea 
                    placeholder="Describe the style you want, date queries, or ask any question..." 
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    className="contact-textarea"
                  />
                  <button type="submit" className="btn btn-primary contact-submit">
                    Send Message <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .contact {
          background-color: var(--bg-surface);
          border-top: 1px solid var(--border-color-light);
        }
        .contact-intro {
          color: var(--text-muted);
          max-width: 600px;
          margin: 12px auto 0;
          font-size: 1rem;
        }
        
        .contact-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 32px;
          align-items: start;
          margin-top: 24px;
        }
        
        /* Info Cards */
        .contact-info-panel {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .info-card {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 24px;
          border-radius: 16px;
          text-align: left;
        }
        .info-icon-wrapper {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: var(--accent-gold-soft);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .info-text h3 {
          font-size: 1.1rem;
          color: var(--text-light);
          margin-bottom: 6px;
          font-weight: 700;
        }
        .info-text p {
          color: var(--text-muted);
          font-size: 0.95rem;
        }
        .info-subtext {
          font-size: 0.8rem;
          color: var(--primary-gold);
          font-weight: 600;
        }
        .hours-row {
          display: flex;
          gap: 24px;
          justify-content: space-between;
          font-size: 0.95rem;
          margin-bottom: 4px;
          color: var(--text-muted);
        }
        .hours-row strong {
          color: var(--text-light);
        }
        .email-link {
          margin-top: 4px;
          font-size: 0.9rem;
        }
        .email-link a {
          color: var(--primary-gold);
        }
        .email-link a:hover {
          color: var(--primary-gold-hover);
        }
        
        .amenities-row {
          display: flex;
          justify-content: space-around;
          padding: 20px;
          border-radius: 16px;
        }
        .amenity-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          color: var(--text-muted);
          font-weight: 500;
        }
        
        /* Map and Form */
        .contact-interactive-panel {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .map-frame {
          border-radius: 20px;
          padding: 10px;
          overflow: hidden;
          box-shadow: var(--shadow-md);
        }
        
        /* Mock Map Visual */
        .map-placeholder {
          height: 240px;
          background: #1e1713;
          border-radius: 14px;
          position: relative;
          overflow: hidden;
        }
        .map-grid-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(var(--border-color-light) 1px, transparent 1px),
            linear-gradient(rgba(207, 168, 81, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(207, 168, 81, 0.03) 1px, transparent 1px);
          background-size: 16px 16px, 32px 32px, 32px 32px;
        }
        .map-pin {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -100%);
          z-index: 5;
        }
        .map-pin-pulse {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 32px;
          height: 32px;
          background: var(--primary-gold);
          border-radius: 50%;
          opacity: 0.3;
          animation: pulse-ring 2s infinite;
        }
        @keyframes pulse-ring {
          0% { transform: translate(-50%, -50%) scale(0.5); opacity: 0.5; }
          100% { transform: translate(-50%, -50%) scale(2.2); opacity: 0; }
        }
        .map-label {
          position: absolute;
          bottom: 16px;
          left: 50%;
          transform: translateX(-50%);
          padding: 8px 16px;
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          font-size: 0.8rem;
          min-width: 180px;
          text-align: center;
          box-shadow: var(--shadow-sm);
        }
        .map-label strong {
          color: var(--primary-gold);
        }
        
        /* Contact Form */
        .contact-form-container {
          border-radius: 20px;
          padding: 28px;
          text-align: left;
          box-shadow: var(--shadow-md);
        }
        .contact-form-container h3 {
          font-size: 1.25rem;
          margin-bottom: 20px;
          font-weight: 700;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .form-group-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .contact-input, .contact-textarea {
          background: var(--bg-deep);
          border: 1px solid var(--border-color-light);
          color: var(--text-light);
          padding: 12px;
          border-radius: 8px;
          outline: none;
          font-size: 0.95rem;
          width: 100%;
        }
        .contact-input:focus, .contact-textarea:focus {
          border-color: var(--primary-gold);
        }
        .contact-textarea {
          resize: vertical;
        }
        .contact-submit {
          align-self: flex-start;
          padding: 12px 24px;
        }
        .contact-success {
          background: rgba(96, 165, 250, 0.1);
          border: 1px solid var(--success);
          color: var(--text-light);
          padding: 16px;
          border-radius: 8px;
          font-size: 0.95rem;
        }

        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
          .form-group-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
