import React, { useState } from 'react';
import { X, Calendar, Clock, User, Phone, Mail, ChevronRight, CheckCircle2 } from 'lucide-react';

const TIME_SLOTS = [
  '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'
];

export default function BookingModal({ isOpen, onClose, selectedService }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: selectedService?.title || 'Knotless Box Braids',
    date: '',
    time: '',
    name: '',
    phone: '',
    email: '',
    notes: '',
  });

  React.useEffect(() => {
    if (selectedService) {
      setFormData(prev => ({ ...prev, service: selectedService.title }));
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
      service: selectedService?.title || 'Knotless Box Braids',
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
      <div className="modal-container light-card" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <h3 className="modal-title text-gradient-pink heading-sm">
            {step === 3 ? 'Booking Confirmed' : 'Request Appointment'}
          </h3>
          <button className="modal-close" onClick={resetForm} aria-label="Close booking modal">
            <X size={24} />
          </button>
        </div>

        {/* Form Steps */}
        {step === 1 && (
          <div className="modal-body">
            <div className="progress-bar">
              <div className="progress-step active">1. Date & Time</div>
              <div className="progress-step">2. Contact Info</div>
            </div>

            <div className="input-group">
              <label className="input-label">Selected Hair Style</label>
              <select 
                name="service" 
                value={formData.service} 
                onChange={handleInputChange}
                className="modal-select"
              >
                <option value="Classic Box Braids">Classic Box Braids (starts at $160)</option>
                <option value="Knotless Box Braids">Knotless Box Braids (starts at $180)</option>
                <option value="Feed-In Cornrows">Feed-In Cornrows (starts at $90)</option>
                <option value="Stitch Braids">Stitch Braids (starts at $110)</option>
                <option value="Senegalese Twists">Senegalese Twists (starts at $150)</option>
                <option value="Passion Twists">Passion Twists (starts at $140)</option>
                <option value="Full Sew-In Weave">Full Sew-In Weave (starts at $180)</option>
                <option value="Lace Closure Weave">Lace Closure Weave (starts at $200)</option>
                <option value="Custom Braid Style">Custom Braid Style / Reference Photo</option>
              </select>
            </div>

            <div className="input-group">
              <label className="input-label">Choose Date</label>
              <div className="input-field-wrapper">
                <Calendar className="input-icon text-pink" size={18} />
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
              <label className="input-label">Select Time Slot</label>
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

            <button onClick={handleNextStep} className="btn btn-primary next-btn">
              Next Step <ChevronRight size={18} />
            </button>
          </div>
        )}

        {step === 2 && (
          <form onSubmit={handleSubmit} className="modal-body">
            <div className="progress-bar">
              <div className="progress-step completed">1. Date & Time</div>
              <div className="progress-step active">2. Contact Info</div>
            </div>

            <div className="input-group">
              <label className="input-label">Full Name</label>
              <div className="input-field-wrapper">
                <User className="input-icon text-pink" size={18} />
                <input 
                  type="text" 
                  name="name" 
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.name} 
                  onChange={handleInputChange}
                  required
                  className="modal-input"
                />
              </div>
            </div>

            <div className="input-group">
              <label className="input-label">Phone Number</label>
              <div className="input-field-wrapper">
                <Phone className="input-icon text-pink" size={18} />
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="e.g. (203) 555-0123"
                  value={formData.phone} 
                  onChange={handleInputChange}
                  required
                  className="modal-input"
                />
              </div>
            </div>

            <div className="input-group">
              <label className="input-label">Email Address</label>
              <div className="input-field-wrapper">
                <Mail className="input-icon text-pink" size={18} />
                <input 
                  type="email" 
                  name="email" 
                  placeholder="e.g. sarah@example.com"
                  value={formData.email} 
                  onChange={handleInputChange}
                  required
                  className="modal-input"
                />
              </div>
            </div>

            <div className="input-group">
              <label className="input-label">Special Requests</label>
              <textarea 
                name="notes" 
                rows="3" 
                placeholder="Preferred length, colors, or bringing your own extensions..."
                value={formData.notes} 
                onChange={handleInputChange}
                className="modal-textarea"
              />
            </div>

            <div className="btn-group">
              <button type="button" onClick={() => setStep(1)} className="btn btn-secondary flex-1">
                Back
              </button>
              <button type="submit" className="btn btn-primary flex-2">
                Submit Inquiry
              </button>
            </div>
          </form>
        )}

        {step === 3 && (
          <div className="modal-body success-screen">
            <CheckCircle2 size={64} className="text-pink success-icon" />
            
            <h4 className="heading-sm">Request Submitted!</h4>
            <p className="success-text">
              Thank you, <strong>{formData.name}</strong>. Oumi's team has received your appointment request. We will reach out shortly to confirm details.
            </p>

            <div className="receipt">
              <div className="receipt-row">
                <span className="receipt-label">Reference ID</span>
                <span className="receipt-value text-pink">{bookingId}</span>
              </div>
              <div className="receipt-row">
                <span className="receipt-label">Hair Style</span>
                <span className="receipt-value">{formData.service}</span>
              </div>
              <div className="receipt-row">
                <span className="receipt-label">Scheduled For</span>
                <span className="receipt-value">{formData.date} at {formData.time}</span>
              </div>
            </div>

            <button onClick={resetForm} className="btn btn-primary done-btn">
              Done & Close
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
          background: rgba(30, 15, 15, 0.6);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 1500;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: fadeIn 0.3s ease;
        }
        .modal-container {
          width: 100%;
          max-width: 520px;
          overflow: hidden;
          animation: fadeUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px;
          border-bottom: 1px solid var(--clr-border);
          background: var(--clr-bg-alt);
        }
        .modal-title {
          margin: 0;
        }
        .modal-close {
          background: transparent;
          border: none;
          color: var(--clr-text-muted);
          transition: color var(--trans-fast);
        }
        .modal-close:hover {
          color: var(--clr-rose);
        }
        
        .modal-body {
          padding: 24px;
          background: var(--clr-surface);
        }
        
        /* Progress Indicator */
        .progress-bar {
          display: flex;
          justify-content: space-between;
          margin-bottom: 24px;
          border-bottom: 1px solid var(--clr-border);
          padding-bottom: 12px;
          font-size: 0.85rem;
          color: var(--clr-text-muted);
        }
        .progress-step {
          font-weight: 500;
        }
        .progress-step.active {
          color: var(--clr-pink);
          font-weight: 600;
        }
        .progress-step.completed {
          color: var(--clr-rose);
        }

        /* Inputs */
        .input-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 20px;
        }
        .input-label {
          font-size: 0.85rem;
          color: var(--clr-text);
          font-weight: 500;
        }
        .modal-select {
          background: var(--clr-bg);
          border: 1px solid var(--clr-border);
          color: var(--clr-text);
          padding: 12px;
          border-radius: var(--radius-sm);
          outline: none;
          font-size: 0.95rem;
          cursor: pointer;
        }
        .modal-select:focus {
          border-color: var(--clr-pink);
        }
        .input-field-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }
        .input-icon {
          position: absolute;
          left: 14px;
        }
        .modal-input {
          width: 100%;
          background: var(--clr-bg);
          border: 1px solid var(--clr-border);
          color: var(--clr-text);
          padding: 12px 12px 12px 42px;
          border-radius: var(--radius-sm);
          outline: none;
          font-size: 0.95rem;
        }
        .modal-input:focus, .modal-textarea:focus {
          border-color: var(--clr-pink);
        }
        .modal-textarea {
          background: var(--clr-bg);
          border: 1px solid var(--clr-border);
          color: var(--clr-text);
          padding: 12px;
          border-radius: var(--radius-sm);
          outline: none;
          font-size: 0.95rem;
          resize: vertical;
        }
        
        /* Time Grid */
        .time-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-top: 4px;
        }
        .time-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          background: var(--clr-bg);
          border: 1px solid var(--clr-border);
          color: var(--clr-text);
          padding: 10px;
          border-radius: var(--radius-sm);
          font-size: 0.85rem;
          transition: all var(--trans-fast);
        }
        .time-btn:hover {
          background: var(--clr-bg-alt);
          border-color: var(--clr-pink);
        }
        .time-btn.selected {
          background: var(--clr-pink);
          color: white;
          border-color: var(--clr-pink);
        }

        .next-btn {
          width: 100%;
          justify-content: center;
          padding: 12px;
          margin-top: 8px;
          border-radius: var(--radius-full);
        }
        
        .btn-group {
          display: flex;
          gap: 12px;
          margin-top: 24px;
        }
        .flex-1 { flex: 1; border-radius: var(--radius-full); justify-content: center; }
        .flex-2 { flex: 2; border-radius: var(--radius-full); justify-content: center; }
        
        /* Success Screen */
        .success-screen {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 40px 24px;
        }
        .success-icon {
          margin-bottom: 20px;
        }
        .success-text {
          font-size: 0.95rem;
          color: var(--clr-text-muted);
          margin-bottom: 24px;
          line-height: 1.6;
        }
        .receipt {
          width: 100%;
          background: var(--clr-bg);
          border: 1px solid var(--clr-border);
          border-radius: var(--radius-md);
          padding: 20px;
          margin-bottom: 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          text-align: left;
        }
        .receipt-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.9rem;
          border-bottom: 1px solid var(--clr-border);
          padding-bottom: 8px;
        }
        .receipt-row:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
        .receipt-label {
          color: var(--clr-text-muted);
        }
        .receipt-value {
          color: var(--clr-text);
          font-weight: 500;
        }
        .done-btn {
          width: 100%;
          justify-content: center;
          padding: 12px;
          border-radius: var(--radius-full);
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
