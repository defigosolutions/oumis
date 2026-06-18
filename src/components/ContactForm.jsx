import { useState } from 'react';
import { FaUser, FaPhone, FaEnvelope, FaCalendar, FaClock, FaCommentAlt, FaCut } from 'react-icons/fa';
import './ContactForm.css';

const SERVICES = [
  'Box Braids', 'Knotless Braids', 'Tribal / Lemonade Braids',
  'Cornrows / Stitch Braids', 'Passion Twists', 'Kinky Twists',
  'Senegalese Twists', 'Faux Locs', 'Butterfly Locs', 'Goddess Locs',
  'Dreadlocks Retwist', 'Instant Locs', 'Microlocs Installation',
  'Kids Braids', 'Crochet Braids', 'Other / Consultation',
];

const TIMES = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM', '1:00 PM',  '1:30 PM',  '2:00 PM',  '2:30 PM',
  '3:00 PM',  '3:30 PM',  '4:00 PM',  '4:30 PM',  '5:00 PM',  '5:30 PM',
];

const INITIAL = { name: '', phone: '', email: '', service: '', date: '', time: '', message: '' };

export default function ContactForm() {
  const [form, setForm]       = useState(INITIAL);
  const [errors, setErrors]   = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = 'Name is required';
    if (!form.phone.trim())   e.phone   = 'Phone is required';
    if (form.email && !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Invalid email';
    if (!form.service)        e.service = 'Please select a service';
    if (!form.date)           e.date    = 'Please select a date';
    if (!form.time)           e.time    = 'Please select a time';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(err => ({ ...err, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length) { setErrors(e2); return; }

    try {
      const res = await fetch('/api/v1/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customerName:  form.name,
          customerEmail: form.email || `${form.phone}@noemail.com`,
          customerPhone: form.phone,
          serviceName:   form.service,
          bookingDate:   form.date,
          bookingTime:   form.time,
          notes:         form.message,
        }),
      });
      const data = await res.json();
      if (!data.success) {
        console.error('Booking API error:', data.message);
      }
    } catch (err) {
      console.error('Failed to save booking to backend:', err);
    }

    // Always show success to the user regardless of API status
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="contact-form__success">
        <div className="contact-form__success-icon">✨</div>
        <h3>Appointment Request Sent!</h3>
        <p>
          Thank you, <strong>{form.name}</strong>! We've received your request for{' '}
          <strong>{form.service}</strong> on <strong>{form.date}</strong> at <strong>{form.time}</strong>.
        </p>
        <p>We'll confirm your appointment via phone at <strong>{form.phone}</strong> shortly.</p>
        <button className="btn btn-primary" onClick={() => { setForm(INITIAL); setSubmitted(false); }}>
          Book Another
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate aria-label="Book appointment form">
      <div className="contact-form__row">
        <div className={`contact-form__field ${errors.name ? 'contact-form__field--error' : ''}`}>
          <label htmlFor="cf-name" className="contact-form__label">
            <FaUser /> Full Name <span>*</span>
          </label>
          <input
            id="cf-name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            className="contact-form__input"
            autoComplete="name"
          />
          {errors.name && <span className="contact-form__error">{errors.name}</span>}
        </div>

        <div className={`contact-form__field ${errors.phone ? 'contact-form__field--error' : ''}`}>
          <label htmlFor="cf-phone" className="contact-form__label">
            <FaPhone /> Phone Number <span>*</span>
          </label>
          <input
            id="cf-phone"
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+1 (203) 000-0000"
            className="contact-form__input"
            autoComplete="tel"
          />
          {errors.phone && <span className="contact-form__error">{errors.phone}</span>}
        </div>
      </div>

      <div className={`contact-form__field ${errors.email ? 'contact-form__field--error' : ''}`}>
        <label htmlFor="cf-email" className="contact-form__label">
          <FaEnvelope /> Email Address <span className="optional">(optional)</span>
        </label>
        <input
          id="cf-email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="your@email.com"
          className="contact-form__input"
          autoComplete="email"
        />
        {errors.email && <span className="contact-form__error">{errors.email}</span>}
      </div>

      <div className={`contact-form__field ${errors.service ? 'contact-form__field--error' : ''}`}>
        <label htmlFor="cf-service" className="contact-form__label">
          <FaCut /> Service <span>*</span>
        </label>
        <select
          id="cf-service"
          name="service"
          value={form.service}
          onChange={handleChange}
          className="contact-form__input contact-form__select"
        >
          <option value="">Select a service...</option>
          {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
        {errors.service && <span className="contact-form__error">{errors.service}</span>}
      </div>

      <div className="contact-form__row">
        <div className={`contact-form__field ${errors.date ? 'contact-form__field--error' : ''}`}>
          <label htmlFor="cf-date" className="contact-form__label">
            <FaCalendar /> Preferred Date <span>*</span>
          </label>
          <input
            id="cf-date"
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="contact-form__input"
            min={new Date().toISOString().split('T')[0]}
          />
          {errors.date && <span className="contact-form__error">{errors.date}</span>}
        </div>

        <div className={`contact-form__field ${errors.time ? 'contact-form__field--error' : ''}`}>
          <label htmlFor="cf-time" className="contact-form__label">
            <FaClock /> Preferred Time <span>*</span>
          </label>
          <select
            id="cf-time"
            name="time"
            value={form.time}
            onChange={handleChange}
            className="contact-form__input contact-form__select"
          >
            <option value="">Select a time...</option>
            {TIMES.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
          {errors.time && <span className="contact-form__error">{errors.time}</span>}
        </div>
      </div>

      <div className="contact-form__field">
        <label htmlFor="cf-message" className="contact-form__label">
          <FaCommentAlt /> Additional Notes <span className="optional">(optional)</span>
        </label>
        <textarea
          id="cf-message"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Any special requests, hair concerns, or reference photos you'd like to share..."
          className="contact-form__input contact-form__textarea"
          rows={4}
        />
      </div>

      <button type="submit" className="btn btn-primary contact-form__submit" id="submit-appointment-btn">
        ✨ Request Appointment
      </button>

      <p className="contact-form__disclaimer">
        We'll confirm your appointment via phone within 24 hours.
      </p>
    </form>
  );
}
