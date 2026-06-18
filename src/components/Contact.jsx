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

        <div className="section-title-wrapper center">
          <span className="section-subtitle">FIND US</span>
          <h2 className="section-title">LOCATION & HOURS</h2>
        </div>

        <div className="contact-grid">
          {/* Column 1: Info Cards */}
          <div className="contact-info-panel">
            {/* Hours card */}
            <div className="info-card">
              <div className="info-icon-wrapper">
                <Clock className="text-accent" size={24} />
              </div>
              <div className="info-text">
                <h3>HOURS</h3>
                <div className="hours-row">
                  <span>MON - SAT</span>
                  <strong>9:00 AM - 5:00 PM</strong>
                </div>
                <div className="hours-row">
                  <span>SUNDAY</span>
                  <strong>BY APPOINTMENT</strong>
                </div>
              </div>
            </div>

            {/* Address card */}
            <div className="info-card">
              <div className="info-icon-wrapper">
                <MapPin className="text-accent" size={24} />
              </div>
              <div className="info-text">
                <h3>LOCATION</h3>
                <p>1245 DIXWELL AVENUE</p>
                <p>HAMDEN, CT 06514</p>
                <span className="info-subtext">(STOP & SHOP PLAZA)</span>
              </div>
            </div>

            {/* Call card */}
            <div className="info-card">
              <div className="info-icon-wrapper">
                <Phone className="text-accent" size={24} />
              </div>
              <div className="info-text">
                <h3>CONTACT</h3>
                <p><a href="tel:2037763381">203.776.3381</a></p>
                <p><a href="tel:2034070474">203.407.0474</a></p>
                <p className="email-link"><a href="mailto:oumidiop@hairbraidinghaven.com">OUMIDIOP@HAIRBRAIDINGHAVEN.COM</a></p>
              </div>
            </div>

            {/* Amenities */}
            <div className="amenities-row">
              <div className="amenity-item">
                <Wifi size={18} className="text-accent" />
                <span>FREE WIFI</span>
              </div>
              <div className="amenity-item">
                <Car size={18} className="text-accent" />
                <span>FREE PARKING</span>
              </div>
              <div className="amenity-item">
                <Accessibility size={18} className="text-accent" />
                <span>ACCESSIBLE</span>
              </div>
            </div>
          </div>

          {/* Column 2: Messaging Form */}
          <div className="contact-interactive-panel">
            {/* Inquiry Form */}
            <div className="contact-form-container">
              <h3>SEND INQUIRY</h3>
              {submitted ? (
                <div className="contact-success">
                  <p>THANK YOU. YOUR MESSAGE HAS BEEN SENT.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group-row">
                    <input 
                      type="text" 
                      placeholder="NAME" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="contact-input"
                    />
                    <input 
                      type="email" 
                      placeholder="EMAIL" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      className="contact-input"
                    />
                  </div>
                  <textarea 
                    placeholder="MESSAGE..." 
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    className="contact-textarea"
                  />
                  <button type="submit" className="btn btn-primary contact-submit">
                    SEND MESSAGE <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .contact {
          background-color: var(--bg-white);
        }
        
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: start;
        }
        
        /* Info Cards */
        .contact-info-panel {
          display: flex;
          flex-direction: column;
          gap: 0;
          border-top: 2px solid var(--text-dark);
        }
        .info-card {
          display: flex;
          align-items: flex-start;
          gap: 24px;
          padding: 32px 0;
          text-align: left;
          border-bottom: 1px solid var(--border-color-dark);
        }
        .info-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 4px;
        }
        .info-text {
          width: 100%;
        }
        .info-text h3 {
          font-size: 1.25rem;
          color: var(--text-dark);
          margin-bottom: 16px;
          font-weight: 900;
          letter-spacing: 0.05em;
        }
        .info-text p {
          color: var(--text-muted);
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          margin-bottom: 4px;
        }
        .info-subtext {
          font-size: 0.8rem;
          color: var(--primary-accent);
          font-weight: 700;
          letter-spacing: 0.05em;
        }
        .hours-row {
          display: flex;
          gap: 24px;
          justify-content: space-between;
          font-size: 0.95rem;
          margin-bottom: 8px;
          color: var(--text-muted);
          font-weight: 700;
          letter-spacing: 0.05em;
        }
        .hours-row strong {
          color: var(--text-dark);
        }
        .email-link {
          margin-top: 12px;
        }
        .email-link a {
          color: var(--text-dark);
          text-decoration: underline;
        }
        .email-link a:hover {
          color: var(--primary-accent);
        }
        
        .amenities-row {
          display: flex;
          justify-content: space-between;
          padding: 32px 0;
          border-bottom: 1px solid var(--border-color-dark);
        }
        .amenity-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          font-size: 0.75rem;
          color: var(--text-dark);
          font-weight: 700;
          letter-spacing: 0.1em;
        }
        
        /* Contact Form */
        .contact-interactive-panel {
          display: flex;
          flex-direction: column;
          gap: 24px;
          border-top: 2px solid var(--text-dark);
          padding-top: 32px;
        }
        .contact-form-container {
          text-align: left;
        }
        .contact-form-container h3 {
          font-size: 1.25rem;
          margin-bottom: 32px;
          font-weight: 900;
          letter-spacing: 0.05em;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .form-group-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        .contact-input, .contact-textarea {
          background: transparent;
          border: none;
          border-bottom: 1px solid var(--border-color-dark);
          color: var(--text-dark);
          padding: 12px 0;
          outline: none;
          font-size: 0.95rem;
          width: 100%;
          font-weight: 700;
          letter-spacing: 0.05em;
          border-radius: 0;
        }
        .contact-input:focus, .contact-textarea:focus {
          border-bottom-color: var(--primary-accent);
        }
        .contact-textarea {
          resize: vertical;
          min-height: 120px;
        }
        .contact-submit {
          align-self: flex-start;
          margin-top: 16px;
        }
        .contact-success {
          border: 1px solid var(--success);
          color: var(--text-dark);
          padding: 24px;
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .form-group-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
