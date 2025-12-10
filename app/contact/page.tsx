"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    profession: "",
    subject: "",
    message: "",
    howHeard: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSubmitSuccess(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        country: "",
        profession: "",
        subject: "",
        message: "",
        howHeard: "",
      });
    }

    setIsSubmitting(false);
  };

  const selectClass = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition bg-white appearance-none cursor-pointer hover:border-purple-400 pr-10 font-['Arial'] text-xs text-black";

  const selectStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239333ea'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 12px center',
    backgroundSize: '20px',
    fontFamily: 'Arial, sans-serif',
    fontSize: '12px',
    color: '#000000'
  };

  const inputClass = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition hover:border-purple-400 font-['Arial'] text-xs text-black";

  const inputStyle = {
    fontFamily: 'Arial, sans-serif',
    fontSize: '12px',
    color: '#000000'
  };

  const labelClass = "block text-sm font-semibold text-gray-700 mb-2 font-['Arial']";

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2 font-['Arial']">Thank You!</h2>
          <p className="text-gray-600 mb-6 font-['Arial']">Your message has been sent successfully. We will get back to you soon.</p>
          <a href="/" className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition font-['Arial']">
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 font-['Arial']">Get In Touch</h1>
          <p className="text-gray-600 max-w-2xl mx-auto font-['Arial']">
            Have questions about schedules, workshops, or speakers? We would love to hear from you! Send us a message and we will respond as soon as possible.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Name Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className={labelClass}>
                  First Name <span className="text-pink-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className={inputClass}
                  style={inputStyle}
                  placeholder="John"
                />
              </div>
              <div>
                <label htmlFor="lastName" className={labelClass}>
                  Last Name <span className="text-pink-500">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className={inputClass}
                  style={inputStyle}
                  placeholder="Doe"
                />
              </div>
            </div>

            {/* Email & Phone Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className={labelClass}>
                  Email Address <span className="text-pink-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={inputClass}
                  style={inputStyle}
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className={labelClass}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputClass}
                  style={inputStyle}
                  placeholder="+44 123 456 7890"
                />
              </div>
            </div>

            {/* Company & Country Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="company" className={labelClass}>
                  Company / Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={inputClass}
                  style={inputStyle}
                  placeholder="Your Company Ltd"
                />
              </div>
              <div>
                <label htmlFor="country" className={labelClass}>
                  Country / Region <span className="text-pink-500">*</span>
                </label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className={selectClass}
                  style={selectStyle}
                >
                  <option value="">Select Country</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Ireland">Ireland</option>
                  <option value="United States">United States</option>
                  <option value="Germany">Germany</option>
                  <option value="France">France</option>
                  <option value="Netherlands">Netherlands</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Profession & How Heard Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="profession" className={labelClass}>
                  Your Role <span className="text-pink-500">*</span>
                </label>
                <select
                  id="profession"
                  name="profession"
                  value={formData.profession}
                  onChange={handleChange}
                  required
                  className={selectClass}
                  style={selectStyle}
                >
                  <option value="">Select Role</option>
                  <option value="Attendee">Attendee</option>
                  <option value="Speaker">Speaker</option>
                  <option value="Sponsor">Sponsor</option>
                  <option value="Media">Media / Press</option>
                  <option value="Organizer">Event Organizer</option>
                  <option value="Student">Student</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="howHeard" className={labelClass}>
                  How did you hear about us?
                </label>
                <select
                  id="howHeard"
                  name="howHeard"
                  value={formData.howHeard}
                  onChange={handleChange}
                  className={selectClass}
                  style={selectStyle}
                >
                  <option value="">Select Option</option>
                  <option value="Google Search">Google Search</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Referral">Friend / Colleague</option>
                  <option value="Event">Previous Event</option>
                  <option value="News Article">News Article</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className={labelClass}>
                Subject <span className="text-pink-500">*</span>
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className={selectClass}
                style={selectStyle}
              >
                <option value="">Select Subject</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Ticket Information">Ticket Information</option>
                <option value="Speaker Application">Speaker Application</option>
                <option value="Sponsorship">Sponsorship Opportunity</option>
                <option value="Workshop">Workshop Information</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className={labelClass}>
                Your Message <span className="text-pink-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className={`${inputClass} resize-none`}
                style={inputStyle}
                placeholder="Tell us how we can help you..."
              />
            </div>

            {/* Privacy Notice */}
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
              <p className="text-xs text-gray-600 font-['Arial']">
                By submitting this form, you agree to our{" "}
                <a href="/privacy" className="text-purple-600 hover:underline font-medium">Privacy Policy</a>.
                We will use your information to respond to your inquiry.
              </p>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-purple-500/30 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-['Arial']"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>

          </form>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-bold text-black mb-1 font-['Arial'] text-sm">Email Us</h3>
            <p className="text-purple-600 font-['Arial'] text-xs">info@morningcoffeewithAI.com</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="font-bold text-black mb-1 font-['Arial'] text-sm">Call Us</h3>
            <p className="text-purple-600 font-['Arial'] text-xs">+44 123 456 7890</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-black mb-1 font-['Arial'] text-sm">Location</h3>
            <p className="text-purple-600 font-['Arial'] text-xs">Derry~Londonderry, UK</p>
          </div>
        </div>

      </div>
    </div>
  );
}