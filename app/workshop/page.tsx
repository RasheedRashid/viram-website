export default function Workshop() {
  const workshops = [
    {
      title: "Web Development Masterclass",
      instructor: "Dr. Deepika Nikam",
      date: "January 26, 2025",
      time: "10:00 AM - 1:00 PM",
      location: "Workshop Hall A",
      capacity: "30 seats",
      level: "Intermediate",
      description: "Learn modern web development techniques including React, Next.js, and Tailwind CSS. Build a complete project from scratch.",
      topics: ["React Fundamentals", "Next.js App Router", "Tailwind CSS", "Deployment"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Data Science & Analytics",
      instructor: "Dr. Sagar Nikam",
      date: "January 26, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Workshop Hall B",
      capacity: "25 seats",
      level: "Beginner",
      description: "Introduction to data science concepts, Python programming, and data visualization techniques for beginners.",
      topics: ["Python Basics", "Pandas & NumPy", "Data Visualization", "Machine Learning Intro"],
      color: "from-orange-400 to-yellow-400",
    },
    {
      title: "AI & Machine Learning",
      instructor: "Dr. Deepika Nikam",
      date: "January 27, 2025",
      time: "10:00 AM - 1:00 PM",
      location: "Workshop Hall A",
      capacity: "30 seats",
      level: "Advanced",
      description: "Deep dive into machine learning algorithms, neural networks, and practical AI applications for real-world problems.",
      topics: ["Neural Networks", "Deep Learning", "TensorFlow", "AI Ethics"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Cloud Computing Essentials",
      instructor: "Dr. Sagar Nikam",
      date: "January 27, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Workshop Hall B",
      capacity: "25 seats",
      level: "Intermediate",
      description: "Learn cloud infrastructure, deployment strategies, and best practices for scalable applications.",
      topics: ["AWS Basics", "Docker & Containers", "CI/CD Pipelines", "Serverless"],
      color: "from-green-500 to-teal-500",
    },
  ];

  const getLevelStyle = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-100 text-green-700";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-700";
      case "Advanced":
        return "bg-red-100 text-red-700";
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
            Hands-On Learning
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Workshops</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Gain practical skills with our interactive workshops led by industry experts. Limited seats available!
          </p>
        </div>
      </section>

      {/* Workshops Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tags */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">Beginner Friendly</span>
            <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium">Intermediate</span>
            <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium">Advanced</span>
          </div>

          {/* Workshops Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {workshops.map((workshop, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Header with Gradient */}
                <div className={`bg-gradient-to-r ${workshop.color} p-6`}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{workshop.title}</h3>
                      <p className="text-white/80 text-sm">by {workshop.instructor}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getLevelStyle(workshop.level)}`}>
                      {workshop.level}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Info Row */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-gray-600 text-sm">
                      <svg className="w-4 h-4 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {workshop.date}
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <svg className="w-4 h-4 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {workshop.time}
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <svg className="w-4 h-4 mr-2 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {workshop.location}
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <svg className="w-4 h-4 mr-2 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {workshop.capacity}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-6">{workshop.description}</p>

                  {/* Topics */}
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What You Will Learn</h4>
                    <div className="flex flex-wrap gap-2">
                      {workshop.topics.map((topic, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Register Button */}
                  <a href="/contact" className={`block w-full text-center bg-gradient-to-r ${workshop.color} text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-shadow`}>
                    Register Now
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Info Box */}
          <div className="mt-16 bg-purple-50 border border-purple-100 rounded-2xl p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Workshop Information</h3>
                <p className="text-gray-600">
                  All workshops include materials, hands-on exercises, and a certificate of completion. 
                  Please bring your laptop with the required software installed. Setup instructions will be sent after registration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}