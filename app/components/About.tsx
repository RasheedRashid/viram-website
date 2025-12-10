import Image from "next/image";

export default function About() {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            About The Event
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Researcher Network Coffee Morning: AI Across Disciplines
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join us for an unforgettable experience where technology meets creativity, and innovation shapes the future.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left - Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/img/a5.jpg"
                    alt="Conference"
                    fill
                    className="object-cover hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/img/ws1.png"
                    alt="Workshop"
                    fill
                    className="object-cover hover:scale-110 transition duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/img/slide3.jpg"
                    alt="Speakers"
                    fill
                    className="object-cover hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <div className="text-4xl font-bold">10+</div>
                    <div className="text-sm">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white shadow-xl rounded-2xl p-4 flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-gray-900">Trusted by 10,000+</div>
                <div className="text-gray-500 text-sm">Attendees worldwide</div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="lg:pl-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Three Days of Innovation, Learning, and Networking
            </h3>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Welcome to the most anticipated tech conference of the year! Whether you are a seasoned professional or just starting your journey, this event offers something for everyone.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Connect with industry leaders, participate in hands-on workshops, and discover the latest trends shaping our digital future. Nothing substitutes real interaction - and we believe in the power of face-to-face connections.
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Inspiring Keynotes</h4>
                  <p className="text-gray-600 text-sm">Learn from world-renowned speakers and thought leaders.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Networking Opportunities</h4>
                  <p className="text-gray-600 text-sm">Connect with professionals and expand your network.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Hands-on Workshops</h4>
                  <p className="text-gray-600 text-sm">Gain practical skills in interactive sessions.</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <a href="/schedule" className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl hover:shadow-purple-500/30 hover:scale-105 transition-all duration-300">
              View Full Schedule
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}