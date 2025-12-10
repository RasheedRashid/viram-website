export default function EventHighlights() {
  const events = [
    {
      date: "25",
      month: "JAN",
      title: "Opening Ceremony & Keynote",
      time: "9:00 AM - 11:00 AM",
      location: "Main Hall",
      color: "from-purple-500 to-purple-600",
    },
    {
      date: "25",
      month: "JAN",
      title: "AI & Future Technology Panel",
      time: "2:00 PM - 4:00 PM",
      location: "Conference Room A",
      color: "from-pink-500 to-pink-600",
    },
    {
      date: "26",
      month: "JAN",
      title: "Hands-On Workshop: Web Development",
      time: "10:00 AM - 1:00 PM",
      location: "MS-Building",
      color: "from-orange-400 to-orange-500",
    },
    {
      date: "27",
      month: "JAN",
      title: "Networking & Closing Party",
      time: "6:00 PM - 10:00 PM",
      location: "ROCK-Road Caffee",
      color: "from-yellow-400 to-yellow-500",
    },
  ];

  return (
    <section className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <span className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-3">
              Don&apos;t Miss Out
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Upcoming Events
            </h2>
          </div>
          <a href="/schedule" className="mt-4 md:mt-0 inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold transition">
            View Full Schedule
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 hover:bg-gray-800 transition-all duration-300 group cursor-pointer"
            >
              {/* Date Badge */}
              <div className={`inline-flex flex-col items-center bg-gradient-to-br ${event.color} rounded-xl px-4 py-2 mb-4`}>
                <span className="text-2xl font-bold text-white">{event.date}</span>
                <span className="text-xs font-medium text-white/80">{event.month}</span>
              </div>

              {/* Event Info */}
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-400 transition">
                {event.title}
              </h3>

              <div className="space-y-2">
                <div className="flex items-center text-gray-400 text-sm">
                  <svg className="w-4 h-4 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {event.time}
                </div>
                <div className="flex items-center text-gray-400 text-sm">
                  <svg className="w-4 h-4 mr-2 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {event.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sponsors/Partners Row */}
        <div className="mt-16 pt-12 border-t border-gray-800">
          <p className="text-center text-gray-500 text-sm mb-8 uppercase tracking-wider">Trusted by Industry Leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 hover:opacity-70 transition">
            <div className="text-2xl font-bold text-gray-400">Ulster University</div>
            <div className="text-2xl font-bold text-gray-400">School of Computing & Engineering</div>
            <div className="text-2xl font-bold text-gray-400"></div>
            <div className="text-2xl font-bold text-gray-400">-</div>
            <div className="text-2xl font-bold text-gray-400">-</div>
          </div>
        </div>
      </div>
    </section>
  );
}