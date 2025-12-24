import Image from "next/image";

export default function Solutions() {
  const solutions = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      title: "Vision-Based Inspection",
      description: "AI-powered defect detection with 99.9% accuracy for quality assurance.",
      features: ["Real-time analysis", "Multi-spectrum imaging"],
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      title: "Adaptive Assembly",
      description: "Flexible robotic assembly that adjusts to product variations automatically.",
      features: ["Self-calibrating", "Multi-product lines"],
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Predictive Maintenance",
      description: "ML algorithms that predict equipment failures before they happen.",
      features: ["24/7 monitoring", "Reduce downtime 60%"],
      color: "from-orange-400 to-orange-500",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
        </svg>
      ),
      title: "Vision-Guided Picking",
      description: "Intelligent bin picking and sorting with 3D vision guidance.",
      features: ["Random bin picking", "High-speed sorting"],
      color: "from-yellow-400 to-yellow-500",
    },
  ];

  const collaborators = [
    {
      name: "Ulster University",
      image: "/img/uu.png",
    },
    // Add more collaborators here later
    // {
    //   name: "Collaborator 2",
    //   image: "/img/collaborator2.png",
    // },
    // {
    //   name: "Collaborator 3",
    //   image: "/img/collaborator3.png",
    // },
  ];

  return (
    <section className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <span className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-3">
              Our Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Intelligent Manufacturing Solutions
            </h2>
          </div>
          <a href="/solutions" className="mt-4 md:mt-0 inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold transition">
            View All Solutions
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 hover:bg-gray-800 transition-all duration-300 group cursor-pointer"
            >
              {/* Icon Badge */}
              <div className={`inline-flex items-center justify-center bg-gradient-to-br ${solution.color} rounded-xl p-3 mb-4 text-white`}>
                {solution.icon}
              </div>

              {/* Solution Info */}
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-400 transition">
                {solution.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {solution.description}
              </p>

              {/* Features */}
              <div className="space-y-2">
                {solution.features.map((feature, idx) => (
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
          <p className="text-center text-gray-500 text-sm mb-8 uppercase tracking-wider">Collaborators</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {collaborators.map((collaborator, index) => (
              <div 
                key={index} 
                className="relative h-16 w-40 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
              >
                <Image
                  src={collaborator.image}
                  alt={collaborator.name}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
