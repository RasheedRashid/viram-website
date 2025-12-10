"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-md fixed w-full top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-2xl font-bold text-gray-800">SMDH</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 font-medium hover:text-purple-600 transition-colors duration-300">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 font-medium hover:text-purple-600 transition-colors duration-300">
              About Us
            </Link>
            <Link href="/schedule" className="text-gray-700 font-medium hover:text-purple-600 transition-colors duration-300">
              Schedule
            </Link>
            <Link href="/workshop" className="text-gray-700 font-medium hover:text-purple-600 transition-colors duration-300">
              Workshop
            </Link>
            <Link href="/speakers" className="text-gray-700 font-medium hover:text-purple-600 transition-colors duration-300">
              Speakers
            </Link>
            <Link href="/contact" className="text-gray-700 font-medium hover:text-purple-600 transition-colors duration-300">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/contact" className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105 transition-all duration-300">
              Join Event
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 focus:outline-none p-2">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-6 border-t border-gray-100">
            <div className="flex flex-col space-y-1 pt-4">
              <Link href="/" className="text-gray-700 font-medium hover:text-purple-600 hover:bg-purple-50 transition py-3 px-4 rounded-lg">Home</Link>
              <Link href="/about" className="text-gray-700 font-medium hover:text-purple-600 hover:bg-purple-50 transition py-3 px-4 rounded-lg">About Us</Link>
              <Link href="/schedule" className="text-gray-700 font-medium hover:text-purple-600 hover:bg-purple-50 transition py-3 px-4 rounded-lg">Schedule</Link>
              <Link href="/workshop" className="text-gray-700 font-medium hover:text-purple-600 hover:bg-purple-50 transition py-3 px-4 rounded-lg">Workshop</Link>
              <Link href="/speakers" className="text-gray-700 font-medium hover:text-purple-600 hover:bg-purple-50 transition py-3 px-4 rounded-lg">Speakers</Link>
              <Link href="/contact" className="text-gray-700 font-medium hover:text-purple-600 hover:bg-purple-50 transition py-3 px-4 rounded-lg">Contact</Link>
              <Link href="/contact" className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-full font-semibold text-center mt-4">Get Started</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
