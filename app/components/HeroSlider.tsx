"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    image: "/img/uuws/Slide1.png",  // Workshop poster - convert TIF to PNG
    title: "Adaptive Manufacturing Workshop",
    description: "Join us on 2nd March 2026 for a FREE hybrid workshop on Robotics, AI, Machine Learning & Digital Twin in Manufacturing. Registration closes 24th Feb 2026!",
    isWorkshop: true,
  },
  {
    image: "/img/v1.jpg",
    title: "VIRAM Workshop 2026",
    description: "Exploring Vision-Integrated Robotics for Adaptive Manufacturing. Join us for cutting-edge insights into AI-powered automation.",
    isWorkshop: false,
  },
  {
    image: "/img/v2.jpg",
    title: "Robotics & AI Innovation",
    description: "Learn from leaders in computer vision, robotics, and smart manufacturing who are shaping the future of Industry 4.0.",
    isWorkshop: false,
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
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
      
      {/* Workshop Announcement Banner */}
      <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-sm">
          <span className="animate-pulse">🎉</span>
          <span className="font-medium">
            <span className="font-bold">NEW:</span> Adaptive Manufacturing Workshop — 2nd March 2026 | FREE Registration
          </span>
          <a href="/ulster-university/workshop-1" className="ml-2 bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full text-xs font-bold transition">
            Learn More →
          </a>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20 lg:py-24">
          
          {/* Left Side - Text Content */}
          <div className="text-left z-10">
            {/* Workshop Badge */}
            {slides[currentSlide].isWorkshop && (
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  FREE
                </span>
                <span className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                  Hybrid: In-Person & Online
                </span>
              </div>
            )}

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
              {slides[currentSlide].title}
            </h1>

            {/* Description */}
            <p className="text-lg text-white/80 mb-8 max-w-lg leading-relaxed">
              {slides[currentSlide].description}
            </p>

            {/* Workshop Details (only for workshop slide) */}
            {slides[currentSlide].isWorkshop && (
              <div className="flex flex-wrap gap-4 mb-6 text-white/90 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>2nd March 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-pink-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Ulster University & Teams</span>
                </div>
              </div>
            )}

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              {slides[currentSlide].isWorkshop ? (
                <>
                  <a href="/contact" className="inline-flex items-center bg-gradient-to-r from-pink-500 to-orange-400 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl hover:shadow-pink-500/30 hover:scale-105 transition-all duration-300">
                    Register Now — Free!
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <a href="/ulster-university/workshop-1" className="inline-flex items-center border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                    View Details
                  </a>
                </>
              ) : (
                <>
                  <a href="/contact" className="inline-flex items-center bg-gradient-to-r from-pink-500 to-orange-400 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl hover:shadow-pink-500/30 hover:scale-105 transition-all duration-300">
                    Register Now
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <a href="#about" className="inline-flex items-center border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                    Learn More
                  </a>
                </>
              )}
            </div>
          </div>

          {/* Right Side - Image Slider */}
          <div className="relative h-[500px] hidden lg:block">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ${index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
              >
                {/* Main Image */}
                <div className={`relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-white ${slide.isWorkshop ? '' : ''}`}>
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={slide.isWorkshop ? "object-contain" : "object-contain p-4"}
                    priority={index === 0}
                    unoptimized
                  />
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
