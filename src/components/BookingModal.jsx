import React, { useState } from 'react';
import { X, Calendar, Clock, User, Phone, Mail, ChevronRight, CheckCircle } from 'lucide-react';

const TIME_SLOTS = [
  '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'
];

export default function BookingModal({ isOpen, onClose, selectedService }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: selectedService?.name || 'Classic Box Braids',
    date: '',
    time: '',
    name: '',
    phone: '',
    email: '',
    notes: '',
  });

  React.useEffect(() => {
    if (selectedService) {
      setFormData(prev => ({ ...prev, service: selectedService.name }));
    }
  }, [selectedService]);

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNextStep = () => {
    if (step === 1 && (!formData.date || !formData.time)) {
      alert('Please select both a date and a time slot.');
      return;
    }
    setStep(prev => prev + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      alert('Please fill out all contact details.');
      return;
    }
    console.log('Booking Submitted successfully:', formData);
    setStep(3);
  };

  const resetForm = () => {
    setStep(1);
    setFormData({
      service: selectedService?.name || 'Classic Box Braids',
      date: '',
      time: '',
      name: '',
      phone: '',
      email: '',
      notes: '',
    });
    onClose();
  };

  const bookingId = `OUMI-${Math.floor(100000 + Math.random() * 900000)}`;

  return (
    <div className="modal-overlay" onClick={resetForm}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <h3 className="modal-title">
            {step === 3 ? 'CONFIRMED' : 'BOOKING'}
          </h3>
          <button className="modal-close" onClick={resetForm} aria-label="Close booking modal">
            <X size={28} />
          </button>
        </div>

        {/* Form Steps */}
        {step === 1 && (
          <div className="modal-body">
            <div className="progress-bar">
              <div className="progress-step active">1. DATE & TIME</div>
              <div className="progress-step">2. CONTACT INFO</div>
            </div>

            <div className="input-group">
              <label className="input-label">STYLE</label>
              <select 
                name="service" 
                value={formData.service} 
                onChange={handleInputChange}
                className="modal-select"
              >
                <option value="CLASSIC BOX BRAIDS">CLASSIC BOX BRAIDS</option>
                <option value="KNOTLESS BOX BRAIDS">KNOTLESS BOX BRAIDS</option>
                <option value="FEED-IN CORNROWS (6-8)">FEED-IN CORNROWS</option>
                <option value="STITCH BRAIDS">STITCH BRAIDS</option>
                <option value="SENEGALESE TWISTS">SENEGALESE TWISTS</option>
                <option value="PASSION TWISTS">PASSION TWISTS</option>
                <option value="FULL SEW-IN WEAVE">FULL SEW-IN WEAVE</option>
                <option value="LACE CLOSURE WEAVE">LACE CLOSURE WEAVE</option>
                <option value="Custom Braid Style/Other Inquiry">CUSTOM / OTHER</option>
              </select>
            </div>

            <div className="input-group">
              <label className="input-label">DATE</label>
              <div className="input-field-wrapper">
                <Calendar className="input-icon text-accent" size={18} />
                <input 
                  type="date" 
                  name="date" 
                  value={formData.date} 
                  min={new Date().toISOString().split('T')[0]}
                  onChange={handleInputChange}
                  className="modal-input"
                />
              </div>
            </div>

            <div className="input-group">
              <label className="input-label">TIME SLOT</label>
              <div className="time-grid">
                {TIME_SLOTS.map(time => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, time }))}
                    className={`time-btn ${formData.time === time ? 'selected' : ''}`}
                  >
                    <Clock size={14} /> {time}
                  </button>
                ))}
              </div>
            </div>

            <button onClick={handleNextStep} className="btn btn-primary modal-action-btn">
              NEXT <ChevronRight size={18} />
            </button>
          </div>
        )}

        {step === 2 && (
          <form onSubmit={handleSubmit} className="modal-body">
            <div className="progress-bar">
              <div className="progress-step completed">1. DATE & TIME</div>
              <div className="progress-step active">2. CONTACT INFO</div>
            </div>

            <div className="input-group">
              <label className="input-label">FULL NAME</label>
              <div className="input-field-wrapper">
                <User className="input-icon text-accent" size={18} />
                <input 
                  type="text" 
                  name="name" 
                  placeholder="NAME"
                  value={formData.name} 
                  onChange={handleInputChange}
                  required
                  className="modal-input"
                />
              </div>
            </div>

            <div className="input-group">
              <label className="input-label">PHONE</label>
              <div className="input-field-wrapper">
                <Phone className="input-icon text-accent" size={18} />
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="PHONE"
                  value={formData.phone} 
                  onChange={handleInputChange}
                  required
                  className="modal-input"
                />
              </div>
            </div>

            <div className="input-group">
              <label className="input-label">EMAIL</label>
              <div className="input-field-wrapper">
                <Mail className="input-icon text-accent" size={18} />
                <input 
                  type="email" 
                  name="email" 
                  placeholder="EMAIL"
                  value={formData.email} 
                  onChange={handleInputChange}
                  required
                  className="modal-input"
                />
              </div>
            </div>

            <div className="input-group">
              <label className="input-label">NOTES / REQUESTS</label>
              <textarea 
                name="notes" 
                rows="3" 
                placeholder="ANY SPECIAL REQUESTS..."
                value={formData.notes} 
                onChange={handleInputChange}
                className="modal-textarea"
              />
            </div>

            <div className="btn-group">
              <button type="button" onClick={() => setStep(1)} className="btn btn-secondary flex-1 modal-action-btn">
                BACK
              </button>
              <button type="submit" className="btn btn-primary flex-2 modal-action-btn">
                SUBMIT
              </button>
            </div>
          </form>
        )}

        {step === 3 && (
          <div className="modal-body success-screen">
            <CheckCircle size={64} className="text-accent success-icon" />
            
            <h4 className="success-header">REQUEST SUBMITTED</h4>
            <p className="success-text">
              THANK YOU, {formData.name.toUpperCase()}. WE WILL CONFIRM YOUR APPOINTMENT SHORTLY.
            </p>

            <div className="receipt">
              <div className="receipt-row">
                <span className="receipt-label">ID</span>
                <span className="receipt-value text-accent">{bookingId}</span>
              </div>
              <div className="receipt-row">
                <span className="receipt-label">STYLE</span>
                <span className="receipt-value">{formData.service}</span>
              </div>
              <div className="receipt-row">
                <span className="receipt-label">TIME</span>
                <span className="receipt-value">{formData.date} @ {formData.time}</span>
              </div>
            </div>

            <button onClick={resetForm} className="btn btn-primary modal-action-btn mt-24">
              CLOSE
            </button>
          </div>
        )}
      </div>

      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.9);
          z-index: 1500;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: fadeIn 0.2s ease;
        }
        .modal-container {
          width: 100%;
          max-width: 520px;
          background: var(--bg-white);
          color: var(--text-dark);
          animation: scaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          border: 2px solid var(--text-dark);
        }
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px 32px;
          border-bottom: 2px solid var(--text-dark);
          background: var(--bg-deep);
          color: var(--text-light);
        }
        .modal-title {
          font-size: 1.5rem;
          font-weight: 900;
          letter-spacing: 0.05em;
        }
        .modal-close {
          background: transparent;
          border: none;
          color: var(--text-light);
          cursor: pointer;
          transition: color 0.2s ease;
        }
        .modal-close:hover {
          color: var(--primary-accent);
        }
        
        .modal-body {
          padding: 32px;
          text-align: left;
        }
        
        /* Progress Indicator */
        .progress-bar {
          display: flex;
          justify-content: space-between;
          margin-bottom: 32px;
          border-bottom: 2px solid var(--border-color-dark);
          padding-bottom: 16px;
          font-size: 0.75rem;
          color: var(--text-muted);
          letter-spacing: 0.1em;
        }
        .progress-step {
          font-weight: 700;
        }
        .progress-step.active {
          color: var(--text-dark);
        }
        .progress-step.completed {
          color: var(--success);
        }

        /* Inputs */
        .input-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 24px;
        }
        .input-label {
          font-size: 0.75rem;
          color: var(--text-dark);
          font-weight: 900;
          letter-spacing: 0.1em;
        }
        .modal-select {
          background: transparent;
          border: 1px solid var(--border-color-dark);
          color: var(--text-dark);
          padding: 16px;
          border-radius: 0;
          outline: none;
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          cursor: pointer;
          appearance: none;
        }
        .modal-select:focus {
          border-color: var(--primary-accent);
        }
        .input-field-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }
        .input-icon {
          position: absolute;
          left: 16px;
        }
        .modal-input {
          width: 100%;
          background: transparent;
          border: 1px solid var(--border-color-dark);
          color: var(--text-dark);
          padding: 16px 16px 16px 48px;
          border-radius: 0;
          outline: none;
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: 0.05em;
        }
        .modal-input:focus, .modal-textarea:focus {
          border-color: var(--primary-accent);
        }
        .modal-textarea {
          background: transparent;
          border: 1px solid var(--border-color-dark);
          color: var(--text-dark);
          padding: 16px;
          border-radius: 0;
          outline: none;
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          resize: vertical;
        }
        
        /* Time Grid */
        .time-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-top: 8px;
        }
        .time-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: transparent;
          border: 1px solid var(--border-color-dark);
          color: var(--text-dark);
          padding: 12px;
          border-radius: 0;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .time-btn:hover {
          border-color: var(--primary-accent);
          color: var(--primary-accent);
        }
        .time-btn.selected {
          background: var(--text-dark);
          color: var(--text-light);
          border-color: var(--text-dark);
        }

        .modal-action-btn {
          width: 100%;
          padding: 16px;
          margin-top: 16px;
        }
        
        .btn-group {
          display: flex;
          gap: 16px;
          margin-top: 24px;
        }
        .flex-1 { flex: 1; }
        .flex-2 { flex: 2; }
        
        /* Success Screen */
        .success-screen {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 48px 32px;
        }
        .success-icon {
          margin-bottom: 24px;
        }
        .success-header {
          font-size: 1.5rem;
          color: var(--text-dark);
          margin-bottom: 12px;
          font-weight: 900;
          letter-spacing: 0.05em;
        }
        .success-text {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 32px;
          font-weight: 700;
          letter-spacing: 0.05em;
          line-height: 1.6;
        }
        .receipt {
          width: 100%;
          border-top: 1px solid var(--border-color-dark);
          border-bottom: 1px solid var(--border-color-dark);
          padding: 24px 0;
          margin-bottom: 32px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          text-align: left;
        }
        .receipt-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
        }
        .receipt-label {
          color: var(--text-muted);
        }
        .receipt-value {
          color: var(--text-dark);
        }
        .mt-24 {
          margin-top: 24px;
        }

        @media (max-width: 480px) {
          .time-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .modal-container {
            max-height: 90vh;
            overflow-y: auto;
          }
        }
      `}</style>
    </div>
  );
}
