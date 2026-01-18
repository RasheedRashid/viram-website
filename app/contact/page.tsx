"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    gender: "",
    role: "",
    howDidYouHear: "",
    workshop: "",
  });

  const [status, setStatus] = useState<{
    type: "idle" | "loading" | "success" | "error";
    message: string;
  }>({
    type: "idle",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Submitting your registration..." });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Thank you! Your registration has been submitted successfully.",
        });
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          country: "",
          gender: "",
          role: "",
          howDidYouHear: "",
          workshop: "",
        });
      } else {
        setStatus({
          type: "error",
          message: data.error || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    }
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-2 rounded-full text-sm font-semibold mb-4">
            Registration
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Upcoming Workshops</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take the first step towards mastering AI-driven manufacturing technologies. Fill in your details below to register.
          </p>
        </div>

        {/* Registration Form */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-purple-100 relative overflow-hidden">
          {/* Decorative gradient corner */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-full blur-3xl"></div>
          
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            {/* First Name & Last Name Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                  First Name <span className="text-pink-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
                  placeholder="John"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                  Last Name <span className="text-pink-500">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
                  placeholder="Doe"
                />
              </div>
            </div>

            {/* Email & Phone Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address <span className="text-pink-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
                  placeholder="+44 123 456 7890"
                />
              </div>
            </div>

            {/* Company & Country Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                  Company / Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
                  placeholder="Your Company Ltd"
                />
              </div>
              <div>
                <label htmlFor="country" className="block text-sm font-semibold text-gray-700 mb-2">
                  Country / Region <span className="text-pink-500">*</span>
                </label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select Country</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="India">India</option>
                  <option value="United States">United States</option>
                  <option value="Germany">Germany</option>
                  <option value="France">France</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Gender & Role Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="gender" className="block text-sm font-semibold text-gray-700 mb-2">
                  Gender <span className="text-pink-500">*</span>
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
              </div>
              <div>
                <label htmlFor="role" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Role <span className="text-pink-500">*</span>
                </label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select Role</option>
                  <option value="Student">Student</option>
                  <option value="Researcher">Researcher</option>
                  <option value="Academic/Faculty">Academic/Faculty</option>
                  <option value="Industry Professional">Industry Professional</option>
                  <option value="Entrepreneur">Entrepreneur</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Workshop Selection */}
            <div>
              <label htmlFor="workshop" className="block text-sm font-semibold text-gray-700 mb-2">
                Select Workshop <span className="text-pink-500">*</span>
              </label>
              <select
                id="workshop"
                name="workshop"
                value={formData.workshop}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition appearance-none cursor-pointer"
              >
                <option value="" disabled>Select Workshop</option>
                <optgroup label="Ulster University">
                  <option value="Adaptive Manufacturing Workshop - Ulster University">Adaptive Manufacturing Workshop</option>
                  <option value="Technical Symposium in Adaptive Manufacturing - Ulster University">Technical Symposium in Adaptive Manufacturing</option>
                </optgroup>
                <optgroup label="MIT-ADT">
                  <option value="Value Added Courses - MIT-ADT">Value Added Courses</option>
                  <option value="Industry Academia Networking Event - MIT-ADT">Industry Academia Networking Event</option>
                </optgroup>
                <optgroup label="SSIGMA">
                  <option value="Industry Level Training Workshop - SSIGMA">Industry Level Training Workshop</option>
                </optgroup>
              </select>
            </div>

            {/* How did you hear about us */}
            <div>
              <label htmlFor="howDidYouHear" className="block text-sm font-semibold text-gray-700 mb-2">
                How did you hear about us?
              </label>
              <select
                id="howDidYouHear"
                name="howDidYouHear"
                value={formData.howDidYouHear}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition appearance-none cursor-pointer"
              >
                <option value="" disabled>Select Option</option>
                <option value="Social Media">Social Media</option>
                <option value="University/College">University/College</option>
                <option value="Colleague/Friend">Colleague/Friend</option>
                <option value="Search Engine">Search Engine</option>
                <option value="Email">Email</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Status Message */}
            {status.type !== "idle" && (
              <div
                className={`p-4 rounded-xl ${
                  status.type === "success"
                    ? "bg-green-50 border border-green-200 text-green-700"
                    : status.type === "error"
                    ? "bg-red-50 border border-red-200 text-red-700"
                    : "bg-purple-50 border border-purple-200 text-purple-700"
                }`}
              >
                <div className="flex items-center">
                  {status.type === "loading" && (
                    <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                  )}
                  {status.type === "success" && (
                    <svg className="h-5 w-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                  {status.type === "error" && (
                    <svg className="h-5 w-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                  {status.message}
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status.type === "loading"}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold py-4 px-6 rounded-xl hover:shadow-xl hover:shadow-purple-500/30 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status.type === "loading" ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
