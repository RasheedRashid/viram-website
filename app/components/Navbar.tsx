"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <nav className="bg-white/95 backdrop-blur-md fixed w-full top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <span className="text-2xl font-bold text-gray-800">VIRAM</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8" ref={dropdownRef}>
            <Link href="/" className="text-gray-700 font-medium hover:text-purple-600 transition-colors duration-300">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 font-medium hover:text-purple-600 transition-colors duration-300">
              About Us
            </Link>
            <Link href="/team" className="text-gray-700 font-medium hover:text-purple-600 transition-colors duration-300">
              Team
            </Link>
            
            {/* Ulster University Dropdown */}
            <div className="relative">
              <button 
                onClick={() => toggleDropdown('ulster')}
                className={`flex items-center font-medium transition-colors duration-300 ${openDropdown === 'ulster' ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600'}`}
              >
                Ulster University
                <svg className={`w-4 h-4 ml-1 transition-transform duration-200 ${openDropdown === 'ulster' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openDropdown === 'ulster' && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                  <Link 
                    href="/ulster-university/workshop-1" 
                    className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200"
                    onClick={() => setOpenDropdown(null)}
                  >
                    Adaptive Manufacturing Workshop
                  </Link>
                  <Link 
                    href="/ulster-university/workshop-2" 
                    className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200"
                    onClick={() => setOpenDropdown(null)}
                  >
                    Technical Symposium in Adaptive Manufacturing
                  </Link>
                </div>
              )}
            </div>

            {/* MIT-ADT Dropdown */}
            <div className="relative">
              <button 
                onClick={() => toggleDropdown('mit-adt')}
                className={`flex items-center font-medium transition-colors duration-300 ${openDropdown === 'mit-adt' ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600'}`}
              >
                MIT-ADT
                <svg className={`w-4 h-4 ml-1 transition-transform duration-200 ${openDropdown === 'mit-adt' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openDropdown === 'mit-adt' && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                  <Link 
                    href="/mit-adt/value-added-courses" 
                    className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200"
                    onClick={() => setOpenDropdown(null)}
                  >
                    Value Added Courses
                  </Link>
                  <Link 
                    href="/mit-adt/industry-academia-networking" 
                    className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200"
                    onClick={() => setOpenDropdown(null)}
                  >
                    Industry Academia Networking Event
                  </Link>
                </div>
              )}
            </div>

            {/* SSIGMA Dropdown */}
            <div className="relative">
              <button 
                onClick={() => toggleDropdown('ssigma')}
                className={`flex items-center font-medium transition-colors duration-300 ${openDropdown === 'ssigma' ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600'}`}
              >
                SSIGMA
                <svg className={`w-4 h-4 ml-1 transition-transform duration-200 ${openDropdown === 'ssigma' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openDropdown === 'ssigma' && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                  <Link 
                    href="/ssigma/workshop-1" 
                    className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200"
                    onClick={() => setOpenDropdown(null)}
                  >
                    Industry Level Training Workshop
                  </Link>
                </div>
              )}
            </div>

            {/* Blogs Dropdown */}
            <div className="relative">
              <button 
                onClick={() => toggleDropdown('blogs')}
                className={`flex items-center font-medium transition-colors duration-300 ${openDropdown === 'blogs' ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600'}`}
              >
                Blogs
                <svg className={`w-4 h-4 ml-1 transition-transform duration-200 ${openDropdown === 'blogs' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openDropdown === 'blogs' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                  <Link 
                    href="/blogs/ai-in-manufacturing" 
                    className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200"
                    onClick={() => setOpenDropdown(null)}
                  >
                    AI in Manufacturing
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/contact" className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105 transition-all duration-300">
              Register
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
              <Link href="/team" className="text-gray-700 font-medium hover:text-purple-600 hover:bg-purple-50 transition py-3 px-4 rounded-lg">Team</Link>
              
              {/* Mobile Ulster University Dropdown */}
              <div>
                <button 
                  onClick={() => toggleDropdown('ulster-mobile')}
                  className={`w-full flex items-center justify-between font-medium transition py-3 px-4 rounded-lg ${openDropdown === 'ulster-mobile' ? 'text-purple-600 bg-purple-50' : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'}`}
                >
                  Ulster University
                  <svg className={`w-4 h-4 transition-transform duration-200 ${openDropdown === 'ulster-mobile' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === 'ulster-mobile' && (
                  <div className="pl-6 space-y-1 mt-1">
                    <Link href="/ulster-university/workshop-1" className="block text-gray-600 font-medium hover:text-purple-600 hover:bg-purple-50 transition py-2 px-4 rounded-lg" onClick={() => setIsMenuOpen(false)}>
                      Adaptive Manufacturing Workshop
                    </Link>
                    <Link href="/ulster-university/workshop-2" className="block text-gray-600 font-medium hover:text-purple-600 hover:bg-purple-50 transition py-2 px-4 rounded-lg" onClick={() => setIsMenuOpen(false)}>
                      Technical Symposium in Adaptive Manufacturing
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile MIT-ADT Dropdown */}
              <div>
                <button 
                  onClick={() => toggleDropdown('mit-adt-mobile')}
                  className={`w-full flex items-center justify-between font-medium transition py-3 px-4 rounded-lg ${openDropdown === 'mit-adt-mobile' ? 'text-purple-600 bg-purple-50' : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'}`}
                >
                  MIT-ADT
                  <svg className={`w-4 h-4 transition-transform duration-200 ${openDropdown === 'mit-adt-mobile' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === 'mit-adt-mobile' && (
                  <div className="pl-6 space-y-1 mt-1">
                    <Link href="/mit-adt/value-added-courses" className="block text-gray-600 font-medium hover:text-purple-600 hover:bg-purple-50 transition py-2 px-4 rounded-lg" onClick={() => setIsMenuOpen(false)}>
                      Value Added Courses
                    </Link>
                    <Link href="/mit-adt/industry-academia-networking" className="block text-gray-600 font-medium hover:text-purple-600 hover:bg-purple-50 transition py-2 px-4 rounded-lg" onClick={() => setIsMenuOpen(false)}>
                      Industry Academia Networking Event
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile SSIGMA Dropdown */}
              <div>
                <button 
                  onClick={() => toggleDropdown('ssigma-mobile')}
                  className={`w-full flex items-center justify-between font-medium transition py-3 px-4 rounded-lg ${openDropdown === 'ssigma-mobile' ? 'text-purple-600 bg-purple-50' : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'}`}
                >
                  SSIGMA
                  <svg className={`w-4 h-4 transition-transform duration-200 ${openDropdown === 'ssigma-mobile' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === 'ssigma-mobile' && (
                  <div className="pl-6 space-y-1 mt-1">
                    <Link href="/ssigma/workshop-1" className="block text-gray-600 font-medium hover:text-purple-600 hover:bg-purple-50 transition py-2 px-4 rounded-lg" onClick={() => setIsMenuOpen(false)}>
                      Industry Level Training Workshop
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Blogs Dropdown */}
              <div>
                <button 
                  onClick={() => toggleDropdown('blogs-mobile')}
                  className={`w-full flex items-center justify-between font-medium transition py-3 px-4 rounded-lg ${openDropdown === 'blogs-mobile' ? 'text-purple-600 bg-purple-50' : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'}`}
                >
                  Blogs
                  <svg className={`w-4 h-4 transition-transform duration-200 ${openDropdown === 'blogs-mobile' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === 'blogs-mobile' && (
                  <div className="pl-6 space-y-1 mt-1">
                    <Link href="/blogs/ai-in-manufacturing" className="block text-gray-600 font-medium hover:text-purple-600 hover:bg-purple-50 transition py-2 px-4 rounded-lg" onClick={() => setIsMenuOpen(false)}>
                      AI in Manufacturing
                    </Link>
                  </div>
                )}
              </div>
              <Link href="/contact" className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-full font-semibold text-center mt-4">Register</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
