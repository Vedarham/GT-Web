import React, { useState } from 'react';
import './ContactPage.style.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data
    const newErrors = validateForm(formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Here, you can send the form data to an API or service
      // Example: sendFormData(formData);
      
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' }); // Clear form
    }
  };

  // Form validation function
  const validateForm = (data) => {
    const errors = {};
    if (!data.name) errors.name = 'Name is required.';
    if (!data.email) errors.email = 'Email is required.';
    if (!data.phone) errors.phone = 'Phone number is required.';
    if (!data.message) errors.message = 'Message cannot be empty.';
    return errors;
  };

  return (
    <div className="contact-form">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="input-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
          />
          {errors.name && <p className="error-text">{errors.name}</p>}
        </div>

        <div className="input-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
          />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>

        <div className="input-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Phone Number"
          />
          {errors.phone && <p className="error-text">{errors.phone}</p>}
        </div>

        <div className="input-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
          />
          {errors.message && <p className="error-text">{errors.message}</p>}
        </div>

        <button type="submit" className="submit-btn">Submit</button>
        
        {isSubmitted && <p className="success-message">Thank you! Your message has been sent.</p>}
      </form>
    </div>
  );
}

export default ContactForm;
