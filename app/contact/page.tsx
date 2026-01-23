"use client";

import { useState, useEffect } from "react";

// Workshop configuration with deadlines (UK time)
const WORKSHOP_CONFIG = [
  {
    group: "Ulster University",
    workshops: [
      {
        value: "Adaptive Manufacturing Workshop - Ulster University",
        label: "Adaptive Manufacturing Workshop",
        startDate: new Date("2025-01-23T00:00:00Z"), // Registration starts now
        deadline: new Date("2026-02-24T23:59:00Z"), // UK time - 24 Feb 2026 23:59
      },
      {
        value: "Technical Symposium in Adaptive Manufacturing - Ulster University",
        label: "Technical Symposium in Adaptive Manufacturing",
        startDate: null,
        deadline: null, // Disabled
      },
    ],
  },
  {
    group: "MIT-ADT",
    workshops: [
      {
        value: "Value Added Courses - MIT-ADT",
        label: "Value Added Courses",
        startDate: null,
        deadline: null, // Disabled - set a future date to enable
      },
      {
        value: "Industry Academia Networking Event - MIT-ADT",
        label: "Industry Academia Networking Event",
        startDate: null,
        deadline: null, // Disabled
      },
    ],
  },
  {
    group: "SSIGMA",
    workshops: [
      {
        value: "Industry Level Training Workshop - SSIGMA",
        label: "Industry Level Training Workshop",
        startDate: null,
        deadline: null, // Disabled
      },
    ],
  },
];

// Helper function to check if registration is open
const isRegistrationOpen = (startDate: Date | null, deadline: Date | null): boolean => {
  if (deadline === null) return false; // No deadline means disabled
  const now = new Date();
  const hasStarted = startDate ? now >= startDate : true;
  const hasNotEnded = now < deadline;
  return hasStarted && hasNotEnded;
};

// Helper function to format deadline for display
const formatDeadline = (deadline: Date): string => {
  return deadline.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Europe/London",
  }) + " (UK)";
};

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
    attendanceMode: "",
    disability: "",
  });

  const [status, setStatus] = useState<{
    type: "idle" | "loading" | "success" | "error";
    message: string;
  }>({
    type: "idle",
    message: "",
  });

  const [showOnlinePopup, setShowOnlinePopup] = useState(false);

  // State to trigger re-render when time changes (for real-time deadline updates)
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update current time every minute to check deadlines
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Show popup when Online attendance is selected
    if (name === "attendanceMode" && value === "Online") {
      setShowOnlinePopup(true);
    }
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
          attendanceMode: "",
          disability: "",
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

  // Get available workshops count
  const availableWorkshopsCount = WORKSHOP_CONFIG.reduce((count, group) => {
    return count + group.workshops.filter(w => isRegistrationOpen(w.startDate, w.deadline)).length;
  }, 0);

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

            {/* Workshop Selection with Deadlines */}
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
                {WORKSHOP_CONFIG.map((group) => (
                  <optgroup key={group.group} label={group.group}>
                    {group.workshops.map((workshop) => {
                      const isOpen = isRegistrationOpen(workshop.startDate, workshop.deadline);
                      return (
                        <option
                          key={workshop.value}
                          value={workshop.value}
                          disabled={!isOpen}
                        >
                          {workshop.label}
                          {!isOpen && " (Registration Closed)"}
                          {isOpen && workshop.deadline && ` (Until ${formatDeadline(workshop.deadline)})`}
                        </option>
                      );
                    })}
                  </optgroup>
                ))}
              </select>
              
              {/* Workshop availability info */}
              <div className="mt-2 text-sm">
                {availableWorkshopsCount > 0 ? (
                  <p className="text-green-600 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {availableWorkshopsCount} workshop{availableWorkshopsCount > 1 ? 's' : ''} available for registration
                  </p>
                ) : (
                  <p className="text-orange-600 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    No workshops currently open for registration
                  </p>
                )}
              </div>
            </div>

            {/* Attendance Mode Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Attendance Mode <span className="text-pink-500">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* In Person Option */}
                <label
                  className={`relative flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all ${
                    formData.attendanceMode === "In Person"
                      ? "border-purple-500 bg-purple-50"
                      : "border-gray-200 hover:border-purple-300 bg-white"
                  }`}
                >
                  <input
                    type="radio"
                    name="attendanceMode"
                    value="In Person"
                    checked={formData.attendanceMode === "In Person"}
                    onChange={handleChange}
                    required
                    className="sr-only"
                  />
                  <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                    formData.attendanceMode === "In Person"
                      ? "border-purple-500"
                      : "border-gray-300"
                  }`}>
                    {formData.attendanceMode === "In Person" && (
                      <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                    )}
                  </div>
                  <div className="flex items-center">
                    <svg className={`w-5 h-5 mr-2 ${formData.attendanceMode === "In Person" ? "text-purple-600" : "text-gray-500"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className={`font-medium ${formData.attendanceMode === "In Person" ? "text-purple-700" : "text-gray-700"}`}>
                      In Person
                    </span>
                  </div>
                </label>

                {/* Online Option */}
                <label
                  className={`relative flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all ${
                    formData.attendanceMode === "Online"
                      ? "border-purple-500 bg-purple-50"
                      : "border-gray-200 hover:border-purple-300 bg-white"
                  }`}
                >
                  <input
                    type="radio"
                    name="attendanceMode"
                    value="Online"
                    checked={formData.attendanceMode === "Online"}
                    onChange={handleChange}
                    required
                    className="sr-only"
                  />
                  <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                    formData.attendanceMode === "Online"
                      ? "border-purple-500"
                      : "border-gray-300"
                  }`}>
                    {formData.attendanceMode === "Online" && (
                      <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                    )}
                  </div>
                  <div className="flex items-center">
                    <svg className={`w-5 h-5 mr-2 ${formData.attendanceMode === "Online" ? "text-purple-600" : "text-gray-500"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span className={`font-medium ${formData.attendanceMode === "Online" ? "text-purple-700" : "text-gray-700"}`}>
                      Online
                    </span>
                  </div>
                </label>
              </div>
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

            {/* Disability Declaration */}
            <div>
              <label htmlFor="disability" className="block text-sm font-semibold text-gray-700 mb-2">
                Do you have a disability?
              </label>
              <p className="text-xs text-gray-500 mb-3 leading-relaxed">
                As defined by the UN Convention on the Rights of Persons with Disabilities: &quot;Persons with disabilities include those who have long-term physical, mental, intellectual or sensory impairments which in interaction with various barriers may hinder their full and effective participation in society on an equal basis with others.&quot;
              </p>
              <select
                id="disability"
                name="disability"
                value={formData.disability}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition appearance-none cursor-pointer"
              >
                <option value="" disabled>Select Option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Prefer not to say">Prefer not to say</option>
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
              disabled={status.type === "loading" || availableWorkshopsCount === 0}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold py-4 px-6 rounded-xl hover:shadow-xl hover:shadow-purple-500/30 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status.type === "loading" ? "Submitting..." : "Submit Registration"}
            </button>
          </form>
        </div>
      </div>

      {/* Online Attendance Popup Modal */}
      {showOnlinePopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 md:p-8 relative animate-in fade-in zoom-in duration-200">
            {/* Close button */}
            <button
              onClick={() => setShowOnlinePopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Icon */}
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
              Online Attendance Selected
            </h3>
            <p className="text-gray-600 text-center mb-6">
              Thank you for choosing to attend online! The meeting/webinar link will be shared with you via email closer to the workshop date.
            </p>

            {/* Info box */}
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 mb-6">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-purple-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-sm text-purple-700">
                  Please ensure your registered email address is correct so you don't miss the link!
                </p>
              </div>
            </div>

            {/* Button */}
            <button
              onClick={() => setShowOnlinePopup(false)}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
            >
              Got it!
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
