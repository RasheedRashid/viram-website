"use client";

import Image from "next/image";

export default function HeroSlider() {

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
            {/* Free Registration Badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-full px-4 py-1.5 mb-4 text-sm font-bold shadow-lg shadow-green-500/30">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              FREE REGISTRATION
              <span className="mx-2">•</span>
              <span className="text-yellow-200">Limited Seats!</span>
            </div>

            {/* Event Badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
              <span className="text-white/90 text-sm font-medium">January 25-27 • Derry~Londonderry</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
              VIRAM Workshop 2026
            </h1>

            {/* Description */}
            <p className="text-lg text-white/80 mb-8 max-w-lg leading-relaxed">
              Exploring Vision-Integrated Robotics for Adaptive Manufacturing. Join us for cutting-edge insights into AI-powered automation.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a href="/contact" className="inline-flex items-center bg-gradient-to-r from-pink-500 to-orange-400 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl hover:shadow-pink-500/30 hover:scale-105 transition-all duration-300">
                Register Free
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#about" className="inline-flex items-center border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                Learn More
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 sm:gap-8 pt-8 border-t border-white/10">
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
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative h-[500px] hidden lg:block">
            {/* Main Image */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src="/img/v1.jpg"
                alt="VIRAM Workshop 2026"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent"></div>
            </div>

            {/* Event Date Badge */}
            <div className="absolute bottom-6 right-6 bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl py-4 px-6 shadow-xl">
              <div className="text-white text-center">
                <div className="text-2xl font-bold">25-27</div>
                <div className="text-sm font-medium opacity-90">JAN 2026</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
