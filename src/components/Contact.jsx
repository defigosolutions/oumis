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

        <div className="section-header">
          <span className="section-tag">Find Us</span>
          <h2 className="section-title">Location & Hours</h2>
          <div className="divider"></div>
        </div>

        <div className="contact-grid">
          {/* Column 1: Info Cards */}
          <div className="contact-info-panel fade-up">
            
            <div className="info-card light-card">
              <div className="info-icon-wrapper">
                <Clock className="text-pink" size={24} />
              </div>
              <div className="info-text">
                <h3 className="heading-sm">Hours</h3>
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

            <div className="info-card light-card">
              <div className="info-icon-wrapper">
                <MapPin className="text-pink" size={24} />
              </div>
              <div className="info-text">
                <h3 className="heading-sm">Location</h3>
                <p>1245 Dixwell Avenue</p>
                <p>Hamden, CT 06514</p>
                <span className="info-subtext">(Stop & Shop Plaza)</span>
              </div>
            </div>

            <div className="info-card light-card">
              <div className="info-icon-wrapper">
                <Phone className="text-pink" size={24} />
              </div>
              <div className="info-text">
                <h3 className="heading-sm">Contact</h3>
                <p><a href="tel:2037763381" className="hover-rose">203.776.3381</a></p>
                <p><a href="tel:2034070474" className="hover-rose">203.407.0474</a></p>
                <p className="email-link"><a href="mailto:oumidiophair@gmail.com" className="hover-rose">oumidiophair@gmail.com</a></p>
              </div>
            </div>

            {/* Amenities */}
            <div className="amenities-row">
              <div className="amenity-item">
                <Wifi size={18} className="text-rose" />
                <span>Free WiFi</span>
              </div>
              <div className="amenity-item">
                <Car size={18} className="text-rose" />
                <span>Free Parking</span>
              </div>
              <div className="amenity-item">
                <Accessibility size={18} className="text-rose" />
                <span>Accessible</span>
              </div>
            </div>
          </div>

          {/* Column 2: Messaging Form */}
          <div className="contact-interactive-panel fade-up stagger-2">
            <div className="contact-form-container light-card">
              <h3 className="heading-sm">Send an Inquiry</h3>
              <p className="text-muted mb-24">Have a question about a specific style or our availability? Send us a message.</p>
              
              {submitted ? (
                <div className="contact-success">
                  <p>Thank you! Your message has been sent beautifully.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group-row">
                    <div className="input-wrap">
                      <label>Name</label>
                      <input 
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                        className="contact-input"
                      />
                    </div>
                    <div className="input-wrap">
                      <label>Email</label>
                      <input 
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                        className="contact-input"
                      />
                    </div>
                  </div>
                  <div className="input-wrap">
                    <label>Message</label>
                    <textarea 
                      rows="4"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                      className="contact-textarea"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary contact-submit" style={{ borderRadius: 'var(--radius-full)' }}>
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
          background-color: var(--clr-bg-alt);
        }
        
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: start;
        }
        
        /* Info Cards */
        .contact-info-panel {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .info-card {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          padding: 24px;
        }
        .info-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          background: var(--clr-bg-alt);
          border-radius: 50%;
          flex-shrink: 0;
        }
        .info-text {
          width: 100%;
        }
        .info-text h3 {
          margin-bottom: 12px;
        }
        .info-text p {
          color: var(--clr-text-muted);
          font-size: 0.95rem;
          margin-bottom: 4px;
        }
        .info-subtext {
          font-size: 0.85rem;
          color: var(--clr-pink);
          font-style: italic;
        }
        .hours-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.95rem;
          margin-bottom: 8px;
          color: var(--clr-text-muted);
        }
        .hours-row strong {
          color: var(--clr-text);
        }
        .email-link {
          margin-top: 8px;
        }
        .hover-rose {
          transition: color var(--trans-fast);
        }
        .hover-rose:hover {
          color: var(--clr-rose);
        }
        
        .amenities-row {
          display: flex;
          justify-content: center;
          gap: 32px;
          padding: 24px 0;
        }
        .amenity-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          color: var(--clr-text-muted);
          font-weight: 500;
        }
        
        /* Contact Form */
        .contact-form-container {
          padding: 40px 32px;
        }
        .contact-form-container h3 {
          margin-bottom: 8px;
        }
        .mb-24 {
          margin-bottom: 24px;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .form-group-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .input-wrap {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .input-wrap label {
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--clr-text);
        }
        .contact-input, .contact-textarea {
          background: var(--clr-bg);
          border: 1px solid var(--clr-border);
          color: var(--clr-text);
          padding: 12px 16px;
          outline: none;
          font-size: 0.95rem;
          width: 100%;
          border-radius: var(--radius-sm);
          transition: border-color var(--trans-fast);
        }
        .contact-input:focus, .contact-textarea:focus {
          border-color: var(--clr-pink);
        }
        .contact-textarea {
          resize: vertical;
          min-height: 120px;
        }
        .contact-submit {
          align-self: flex-start;
          margin-top: 8px;
        }
        .contact-success {
          background: rgba(201, 112, 127, 0.1);
          border: 1px solid var(--clr-pink);
          color: var(--clr-rose);
          padding: 24px;
          border-radius: var(--radius-sm);
          font-weight: 500;
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
