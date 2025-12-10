"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 fixed w-full top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-3xl font-extrabold text-white tracking-wider drop-shadow-lg hover:scale-105 transition-transform duration-300">
              UU
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white font-medium hover:text-yellow-300 transition-all duration-300 relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/about" className="text-white font-medium hover:text-yellow-300 transition-all duration-300 relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/case-studies" className="text-white font-medium hover:text-yellow-300 transition-all duration-300 relative group">
              Case Studies
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/news" className="text-white font-medium hover:text-yellow-300 transition-all duration-300 relative group">
              News
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/contact" className="text-white font-medium hover:text-yellow-300 transition-all duration-300 relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/contact" className="bg-yellow-400 text-gray-900 px-6 py-2.5 rounded-full font-bold hover:bg-yellow-300 hover:shadow-xl hover:scale-105 transition-all duration-300">
              GET IN TOUCH
            </Link>
            <Link href="/support" className="border-2 border-white text-white px-6 py-2.5 rounded-full font-bold hover:bg-white hover:text-purple-600 transition-all duration-300">
              SUPPORT
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div className="md:hidden pb-6 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-white font-medium hover:text-yellow-300 transition py-2 border-b border-white/20">Home</Link>
              <Link href="/about" className="text-white font-medium hover:text-yellow-300 transition py-2 border-b border-white/20">About</Link>
              <Link href="/case-studies" className="text-white font-medium hover:text-yellow-300 transition py-2 border-b border-white/20">Case Studies</Link>
              <Link href="/news" className="text-white font-medium hover:text-yellow-300 transition py-2 border-b border-white/20">News</Link>
              <Link href="/contact" className="text-white font-medium hover:text-yellow-300 transition py-2 border-b border-white/20">Contact</Link>
              <Link href="/contact" className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-bold text-center mt-4">GET IN TOUCH</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}