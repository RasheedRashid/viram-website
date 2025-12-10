import Image from "next/image";

export default function Speakers() {
  const speakers = [
    {
      name: "Dr. Deepika Nikam",
      role: "Keynote Speaker",
      expertise: "AI & Machine Learning",
      bio: "Dr. Deepika Nikam is a renowned expert in Artificial Intelligence and Machine Learning with over 15 years of experience in the field. She has published numerous research papers and has been a keynote speaker at international conferences worldwide.",
      image: "/img/deepika.jpg",
      sessions: ["Opening Keynote", "AI & Future Technology Panel"],
    },
    {
      name: "Dr. Sagar Nikam",
      role: "Workshop Lead",
      expertise: "Data Science & Analytics",
      bio: "Dr. Sagar Nikam is a leading authority in Data Science and Analytics. With extensive experience in both academia and industry, he brings practical insights and cutting-edge knowledge to help professionals excel in their data journey.",
      image: "/img/sagar.jpg",
      sessions: ["Data Science Workshop", "Future of Work Panel"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-pink-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white/90 text-sm font-medium mb-6">
            Learn From The Best
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Speakers</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Meet the industry experts and thought leaders who will share their knowledge and insights at our conference.
          </p>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {speakers.map((speaker, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                {/* Top Section with Gradient */}
                <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 p-8 relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

                  <div className="relative flex flex-col sm:flex-row items-center gap-6">
                    {/* Speaker Image */}
                    <div className="w-32 h-32 rounded-2xl overflow-hidden border-4 border-white/30 shadow-lg flex-shrink-0 relative">
                      <Image
                        src={speaker.image}
                        alt={speaker.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Name & Role */}
                    <div className="text-center sm:text-left">
                      <h2 className="text-2xl font-bold text-white mb-1">{speaker.name}</h2>
                      <p className="text-purple-200 font-medium mb-2">{speaker.role}</p>
                      <span className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-1 text-white text-sm">
                        {speaker.expertise}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="p-8">
                  {/* Bio */}
                  <p className="text-gray-600 leading-relaxed mb-6">{speaker.bio}</p>

                  {/* Sessions */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
                      Speaking Sessions
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {speaker.sessions.map((session, idx) => (
                        <span key={idx} className="bg-purple-100 text-purple-700 px-4 py-2 rounded-lg text-sm font-medium">
                          {session}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                    <span className="text-sm text-gray-500">Connect:</span>
                    <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-purple-100 hover:text-purple-600 transition">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-purple-100 hover:text-purple-600 transition">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Become a Speaker CTA */}
          <div className="mt-20">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl"></div>

              <div className="relative">
                <span className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                  Share Your Knowledge
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Want to Become a Speaker?</h3>
                <p className="text-gray-400 max-w-xl mx-auto mb-8">
                  We are always looking for passionate experts to share their insights. Apply now to speak at our next conference.
                </p>
                <a href="/contact" className="inline-flex items-center bg-gradient-to-r from-pink-500 to-orange-400 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl hover:shadow-pink-500/30 hover:scale-105 transition-all duration-300">
                  Apply as Speaker
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
