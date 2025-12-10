export default function Schedule() {
  const days = [
    {
      date: "January 25, 2025",
      day: "Day 1",
      events: [
        {
          time: "9:00 AM",
          title: "Registration & Welcome Coffee",
          speaker: "",
          location: "Main Lobby",
          type: "general",
        },
        {
          time: "10:00 AM",
          title: "Opening Ceremony & Keynote",
          speaker: "Dr. Sagar Nikam",
          location: "Main Hall",
          type: "keynote",
        },
        {
          time: "12:00 PM",
          title: "Lunch Break",
          speaker: "",
          location: "Dining Hall",
          type: "break",
        },
        {
          time: "2:00 PM",
          title: "AI & Future Technology Panel",
          speaker: "Multiple Speakers",
          location: "Conference Room A",
          type: "panel",
        },
        {
          time: "4:30 PM",
          title: "Networking Session",
          speaker: "",
          location: "Lounge Area",
          type: "general",
        },
      ],
    },
    {
      date: "January 26, 2025",
      day: "Day 2",
      events: [
        {
          time: "9:00 AM",
          title: "Morning Coffee",
          speaker: "",
          location: "Main Lobby",
          type: "break",
        },
        {
          time: "10:00 AM",
          title: "Workshop: Web Development Trends",
          speaker: "Dr Yasir Ali",
          location: "Workshop Hall A",
          type: "workshop",
        },
        {
          time: "10:00 AM",
          title: "Workshop: Mobile App Design",
          speaker: "Dr Aqib Javed",
          speaker: "",
          location: "Workshop Hall B",
          type: "workshop",
        },
        {
          time: "1:00 PM",
          title: "Lunch Break",
          speaker: "",
          location: "Dining Hall",
          type: "break",
        },
        {
          time: "3:00 PM",
          title: "Innovation Showcase",
          speaker: "Startup Founders",
          location: "Exhibition Hall",
          type: "panel",
        },
      ],
    },
    {
      date: "January 27, 2025",
      day: "Day 3",
      events: [
        {
          time: "9:00 AM",
          title: "Morning Coffee",
          speaker: "",
          location: "Main Lobby",
          type: "break",
        },
        {
          time: "10:00 AM",
          title: "Future of Work Panel",
          speaker: "Industry Leaders",
          location: "Main Hall",
          type: "panel",
        },
        {
          time: "12:30 PM",
          title: "Lunch Break",
          speaker: "",
          location: "Dining Hall",
          type: "break",
        },
        {
          time: "2:00 PM",
          title: "Closing Keynote",
          speaker: "Dr Deepika Nikam",
          location: "Main Hall",
          type: "keynote",
        },
        {
          time: "6:00 PM",
          title: "Networking & Closing Party",
          speaker: "Dr Sagar Nikam",
          location: "Rooftop Lounge",
          type: "general",
        },
      ],
    },
  ];

  const getTypeStyle = (type: string) => {
    switch (type) {
      case "keynote":
        return "bg-gradient-to-r from-purple-500 to-pink-500 text-white";
      case "workshop":
        return "bg-gradient-to-r from-orange-400 to-yellow-400 text-gray-900";
      case "panel":
        return "bg-gradient-to-r from-blue-500 to-cyan-500 text-white";
      case "break":
        return "bg-gray-200 text-gray-600";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-pink-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white/90 text-sm font-medium mb-6">
            3 Days of Innovation
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Event Schedule
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Plan your conference experience with our detailed schedule of keynotes, workshops, and networking events.
          </p>
        </div>
      </section>

      {/* Schedule Content */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Legend */}
          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <span className="text-sm text-gray-600">Keynote</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-gradient-to-r from-orange-400 to-yellow-400"></div>
              <span className="text-sm text-gray-600">Workshop</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              <span className="text-sm text-gray-600">Panel</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-gray-200"></div>
              <span className="text-sm text-gray-600">Break</span>
            </div>
          </div>

          {/* Days */}
          <div className="space-y-12">
            {days.map((day, dayIndex) => (
              <div key={dayIndex}>
                {/* Day Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-br from-purple-600 to-pink-500 rounded-2xl px-6 py-4 text-white">
                    <div className="text-2xl font-bold">{day.day}</div>
                    <div className="text-sm opacity-80">{day.date}</div>
                  </div>
                  <div className="flex-1 h-px bg-gradient-to-r from-purple-300 to-transparent"></div>
                </div>

                {/* Events */}
                <div className="space-y-4">
                  {day.events.map((event, eventIndex) => (
                    <div
                      key={eventIndex}
                      className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col md:flex-row md:items-center gap-4"
                    >
                      {/* Time */}
                      <div className="md:w-28 flex-shrink-0">
                        <span className="text-lg font-bold text-gray-900">{event.time}</span>
                      </div>

                      {/* Event Details */}
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 text-lg">{event.title}</h3>
                        {event.speaker && (
                          <p className="text-purple-600 text-sm mt-1">{event.speaker}</p>
                        )}
                      </div>

                      {/* Location & Type */}
                      <div className="flex items-center gap-3 flex-shrink-0">
                        <div className="flex items-center text-gray-500 text-sm">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {event.location}
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeStyle(event.type)}`}>
                          {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-br from-purple-900 via-purple-800 to-pink-700 rounded-3xl p-10">
              <h3 className="text-2xl font-bold text-white mb-3">Ready to Join?</h3>
              <p className="text-white/80 mb-6">Secure your spot at the biggest digital conference of the year.</p>
              <a href="/contact" className="inline-flex items-center bg-gradient-to-r from-pink-500 to-orange-400 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all duration-300">
                Register Now
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}