import React, { useState } from 'react';
import Button from './Button';

/**
 * Reusable Form Component
 * 
 * Demonstrates:
 * - State management using useState hook
 * - Controlled inputs (value and onChange driven by React state)
 * - Real-time and on-submit form validation
 * - Dynamic error and success UI feedback
 * - Form reset / state clearance on submit
 */
function Form({
  formTitle = 'Student Feedback & Support',
  formSubtitle = 'Have a question about a course or want to share feedback with your mentor? Fill out the form below.',
  onSubmitSuccess,
}) {
  // 1. Controlled State for Form Inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'General Inquiry',
    message: '',
  });

  // 2. Validation Errors State
  const [errors, setErrors] = useState({});

  // 3. Submission Feedback State
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  // Handle input changes (Controlled Component Pattern)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for field as student types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  // Basic Validation Logic
  const validate = () => {
    const newErrors = {};

    // Name Validation
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    // Email Validation (Regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    // Message Validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message cannot be empty.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    return newErrors;
  };

  // Form Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Submission succeeded
    const payload = { ...formData, timestamp: new Date().toLocaleTimeString() };
    setSubmittedData(payload);
    setIsSubmitted(true);

    if (onSubmitSuccess) {
      onSubmitSuccess(payload);
    }

    // Clear form inputs after submission (Controlled form reset)
    setFormData({
      name: '',
      email: '',
      category: 'General Inquiry',
      message: '',
    });
    setErrors({});
  };

  return (
    <div className="form-card">
      <div className="form-header">
        <h3 className="form-title">{formTitle}</h3>
        {formSubtitle && <p className="form-subtitle">{formSubtitle}</p>}
      </div>

      {/* Success Notification Alert */}
      {isSubmitted && submittedData && (
        <div className="form-success-banner" role="alert">
          <div className="success-icon">✅</div>
          <div className="success-content">
            <h4>Thank you, {submittedData.name}!</h4>
            <p>
              Your message regarding <strong>{submittedData.category}</strong> has been received at{' '}
              <em>{submittedData.timestamp}</em>. A confirmation was sent to{' '}
              <strong>{submittedData.email}</strong>.
            </p>
          </div>
          <button
            type="button"
            className="success-dismiss"
            onClick={() => setIsSubmitted(false)}
            aria-label="Dismiss notification"
          >
            ✕
          </button>
        </div>
      )}

      {/* Controlled Form */}
      <form onSubmit={handleSubmit} className="student-form" noValidate>
        {/* Name Field */}
        <div className="form-group">
          <label htmlFor="student-name" className="form-label">
            Full Name <span className="required-star">*</span>
          </label>
          <input
            id="student-name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Amisha Dsouza"
            className={`form-input ${errors.name ? 'input-error' : ''}`}
          />
          {errors.name && <span className="field-error-msg">{errors.name}</span>}
        </div>

        {/* Email Field */}
        <div className="form-group">
          <label htmlFor="student-email" className="form-label">
            Email Address <span className="required-star">*</span>
          </label>
          <input
            id="student-email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. amisha@example.com"
            className={`form-input ${errors.email ? 'input-error' : ''}`}
          />
          {errors.email && <span className="field-error-msg">{errors.email}</span>}
        </div>

        {/* Category Field */}
        <div className="form-group">
          <label htmlFor="student-category" className="form-label">
            Inquiry Category
          </label>
          <select
            id="student-category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="form-select"
          >
            <option value="General Inquiry">General Inquiry</option>
            <option value="Course Feedback">Course Feedback</option>
            <option value="Mentor Support">Mentor 1-on-1 Request</option>
            <option value="Assignment Help">Assignment Help</option>
          </select>
        </div>

        {/* Message Field */}
        <div className="form-group">
          <label htmlFor="student-message" className="form-label">
            Message <span className="required-star">*</span>
          </label>
          <textarea
            id="student-message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Share your feedback, request, or question here (min 10 characters)..."
            className={`form-textarea ${errors.message ? 'input-error' : ''}`}
          ></textarea>
          {errors.message && <span className="field-error-msg">{errors.message}</span>}
        </div>

        {/* Form Actions using Reusable Button */}
        <div className="form-actions">
          <Button
            type="submit"
            label="Send Message"
            variant="primary"
            size="md"
            icon="✉️"
          />
          <Button
            type="button"
            label="Reset Form"
            variant="outline"
            size="md"
            onClick={() => {
              setFormData({
                name: '',
                email: '',
                category: 'General Inquiry',
                message: '',
              });
              setErrors({});
            }}
          />
        </div>
      </form>
    </div>
  );
}

export default Form;

