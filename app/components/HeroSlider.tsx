"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
// live content
const slides = [
  {
    image: "/img/a1.jpg",
    title: "VIRAM Workshop 2026",
    subtitle: "January 25-27 • Derry~Londonderry",
    description: "Exploring Vision-Integrated Robotics for Adaptive Manufacturing. Join us for cutting-edge insights into AI-powered automation.",
  },
  {
    image: "/img/a2.jpg",
    title: "Robotics & AI Innovation",
    subtitle: "10+ Industry Expert Speakers",
    description: "Learn from leaders in computer vision, robotics, and smart manufacturing who are shaping the future of Industry 4.0.",
  },
  {
    image: "/img/a3.jpg",
    title: "Hands-On Sessions",
    subtitle: "Interactive Technical Training",
    description: "Build real robotics projects, explore adaptive manufacturing systems, and master vision-integrated automation techniques.",
  },
];
// live session
export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [attendees, setAttendees] = useState(20);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const attendeeTimer = setInterval(() => {
      setAttendees((prev) => prev + Math.floor(Math.random() * 3));
    }, 8000);
    return () => clearInterval(attendeeTimer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-pink-700 overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20 lg:py-24">
          
          {/* Left Side - Text Content */}
          <div className="text-left z-10">
            {/* Event Badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
              <span className="text-white/90 text-sm font-medium">{slides[currentSlide].subtitle}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
              {slides[currentSlide].title}
            </h1>

            {/* Description */}
            <p className="text-lg text-white/80 mb-8 max-w-lg leading-relaxed">
              {slides[currentSlide].description}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a href="/contact" className="inline-flex items-center bg-gradient-to-r from-pink-500 to-orange-400 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl hover:shadow-pink-500/30 hover:scale-105 transition-all duration-300">
                Join Event
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#about" className="inline-flex items-center border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                Learn More
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">10+</div>
                <div className="text-white/60 text-sm mt-1">Speakers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">3</div>
                <div className="text-white/60 text-sm mt-1">Days</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">10+</div>
                <div className="text-white/60 text-sm mt-1">Workshops</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">{attendees.toLocaleString()}</div>
                <div className="text-white/60 text-sm mt-1">Registered</div>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative h-[450px] hidden lg:block">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ${index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
              >
                {/* Main Image */}
                <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent"></div>
                </div>

                {/* Live Attendees Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md rounded-2xl py-3 px-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold">A</div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-pink-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold">B</div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-yellow-400 border-2 border-white flex items-center justify-center text-white text-xs font-bold">C</div>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-sm">{attendees.toLocaleString()} Attending</div>
                      <div className="text-gray-500 text-xs flex items-center">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1 animate-pulse"></span>
                        Live count
                      </div>
                    </div>
                  </div>
                </div>

                {/* Event Date Badge */}
                <div className="absolute bottom-4 right-4 bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl py-3 px-5 shadow-xl">
                  <div className="text-white text-center">
                    <div className="text-xl font-bold">25-27</div>
                    <div className="text-xs font-medium opacity-90">JAN 2026</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button onClick={prevSlide} className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-4 rounded-full transition hidden md:flex items-center justify-center">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button onClick={nextSlide} className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-4 rounded-full transition hidden md:flex items-center justify-center">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-gradient-to-r from-orange-400 to-pink-500 w-10" : "bg-white/30 w-2.5 hover:bg-white/50"}`}
          />
        ))}
      </div>
    </section>
  );
}
