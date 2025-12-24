import Image from "next/image";

export default function EventHighlights() {
  const workshops = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "AI & Machine Learning",
      description: "Hands-on training in artificial intelligence and machine learning fundamentals.",
      features: ["Practical projects", "Expert instructors"],
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      title: "Robotics & Automation",
      description: "Learn to design, build, and program autonomous robotic systems.",
      features: ["Hands-on labs", "Industry tools"],
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      title: "Computer Vision",
      description: "Master image processing and vision-based inspection techniques.",
      features: ["Real-world datasets", "Project-based learning"],
      color: "from-orange-400 to-orange-500",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: "Data Science & Analytics",
      description: "Transform data into actionable insights with modern analytics tools.",
      features: ["Python & R", "Real case studies"],
      color: "from-yellow-400 to-yellow-500",
    },
  ];

  const collaborators = [
    {
      name: "Ulster University",
      image: "/img/uu.png",
    },
    // Add more collaborators here later
     {
       name: "British Council",
       image: "/img/BC.png",
     },
     {
       name: "MIT-ADT",
       image: "/img/mit65.png",
     },
	  {
       name: "MIT-ADT",
       image: "/img/mit65.png",
     },
  ];

  return (
    <section className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <span className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-3">
              Workshops & Training
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Hands-On Learning Programs
            </h2>
          </div>
          <a href="/contact" className="mt-4 md:mt-0 inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold transition">
            Register Now
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Workshops Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workshops.map((workshop, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 hover:bg-gray-800 transition-all duration-300 group cursor-pointer"
            >
              {/* Icon Badge */}
              <div className={`inline-flex items-center justify-center bg-gradient-to-br ${workshop.color} rounded-xl p-3 mb-4 text-white`}>
                {workshop.icon}
              </div>

              {/* Workshop Info */}
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-400 transition">
                {workshop.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {workshop.description}
              </p>

              {/* Features */}
              <div className="space-y-2">
                {workshop.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-gray-400 text-sm">
                    <svg className="w-4 h-4 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Collaborators Row */}
        <div className="mt-16 pt-12 border-t border-gray-800">
          <p className="text-center text-purple-400 text-sm mb-8 uppercase tracking-wider font-semibold">Collaborators</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {collaborators.map((collaborator, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 hover:bg-gray-800 transition-all duration-300 group cursor-pointer flex items-center justify-center"
              >
                <div className="relative h-16 w-full">
                  <Image
                    src={collaborator.image}
                    alt={collaborator.name}
                    fill
                    className="object-contain brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}