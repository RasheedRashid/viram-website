import Image from "next/image";

export default function About() {
  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: "Hands-On Learning",
      description: "Practical workshops with real-world projects, ensuring you gain skills that can be immediately applied in your career.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Networking",
      description: "Connect with like-minded professionals, researchers, and industry leaders to expand your professional network.",
    },
  ];

  const programs = [
    {
      title: "AI & Machine Learning",
      description: "Build intelligent systems that learn and adapt",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Robotics & Automation",
      description: "Design and program autonomous systems",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      color: "from-pink-500 to-pink-600",
    },
    {
      title: "Computer Vision",
      description: "Enable machines to interpret visual data",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      color: "from-orange-400 to-orange-500",
    },
    {
      title: "Data Science & Analytics",
      description: "Transform data into actionable insights",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: "from-cyan-500 to-cyan-600",
    },
    {
      title: "Deep Learning",
      description: "Master neural networks and advanced AI",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      color: "from-violet-500 to-violet-600",
    },
    {
      title: "Python Programming",
      description: "Build powerful applications with Python",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      color: "from-emerald-500 to-emerald-600",
    },
  ];

  const visionPoints = [
    "Establish a globally aligned UK–India TNE framework that embeds AI, computer vision, and robotics at the core of intelligent and adaptive manufacturing education.",
    "Integrate industry-grade vision-based inspection, defect detection, and adaptive control concepts into curriculum design, ensuring strong alignment between academic learning and real manufacturing systems.",
    "Enable quality-assured dual-site delivery through shared teaching resources, harmonised assessment, and transnational academic governance mechanisms.",
    "Create a scalable and replicable technical education model that builds sustained faculty expertise and supports future expansion of AI-driven manufacturing curricula across STEM disciplines.",
  ];

  const missionPoints = [
    "Translate advanced research in AI, computer vision, and robotics into applied teaching, laboratories, and assessments that develop practical, system-level manufacturing competencies.",
    "Equip academics and learners with the capability to design, deploy, and evaluate intelligent manufacturing systems, including vision-based inspection and adaptive process control.",
    "Embed inclusion and gender equity as operational principles, ensuring meaningful participation and leadership opportunities for women in manufacturing and STEM through targeted training, mentoring, and industry engagement.",
    "Create durable UK–India pathways for skills, mobility, and innovation, enabling sustained academic–industry collaboration and continuous upskilling in high-value manufacturing technologies.",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-pink-700 py-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400">VIRAM</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Adaptive Manufacturing with Autonomous Robotics — We provide world-class workshops and training programs in AI, Robotics, and emerging technologies.
          </p>
        </div>
      </section>

      {/* Project Summary Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Project Overview
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Project Summary
              </h2>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 border border-purple-100">
              <p className="text-gray-700 text-lg leading-relaxed">
                Funded by the <span className="font-semibold text-purple-700">British Council Going Global Partnerships: Industry–Academia TNE Grant 2025</span>, this UK–India project establishes a scalable transnational education (TNE) partnership between <span className="font-semibold">Ulster University</span> and <span className="font-semibold">MIT-ADT University, Pune</span> and <span className="font-semibold">SSIG Manufacturing Advancements Pvt. Ltd, India</span>. The project focuses on co-developing an industry-validated STEM module in intelligent vision-based robotics and adaptive manufacturing.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mt-6">
                Through joint curriculum design, faculty development, industry-led training, and dual-site delivery, it addresses critical AI-manufacturing skills gaps aligned with <span className="font-semibold text-purple-700">Industry 4.0</span> priorities. The initiative strengthens academic–industry collaboration by embedding AI-driven computer vision, robotics, and adaptive manufacturing workflows into curriculum co-design, faculty training, and industry-validated laboratories, delivering a scalable and replicable TNE framework that equips graduates with industry-ready competencies in intelligent inspection, defect detection, and smart manufacturing systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-700 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 text-white/90 text-sm font-medium mb-6">
              Our Vision
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Shaping the Future of Manufacturing Education
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {visionPoints.map((point, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-orange-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <p className="text-white/90 leading-relaxed">{point}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Our Mission
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Driving Innovation Through Education
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {missionPoints.map((point, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{point}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-2 rounded-full text-sm font-semibold mb-4">
              Our Programs
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Training Areas
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive training programs designed to equip you with cutting-edge skills in emerging technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {programs.map((program, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-200 overflow-hidden"
              >
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative flex items-start gap-4">
                  {/* Icon */}
                  <div className={`w-14 h-14 bg-gradient-to-br ${program.color} rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {program.icon}
                  </div>
                  
                  {/* Text */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-purple-700 transition-colors duration-300">
                      {program.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className={`absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br ${program.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-300`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Sets VIRAM Apart
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our training programs are built on foundational pillars that ensure quality learning and career growth.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-700 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Advance Your Knowledge in Vision-Based Robotics
          </h2>
          <p className="text-xl text-white/80 leading-relaxed mb-8">
            Join our workshops and training programs to explore AI-driven manufacturing, computer vision, and adaptive robotics.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="inline-flex items-center bg-gradient-to-r from-pink-500 to-orange-400 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl hover:shadow-pink-500/30 hover:scale-105 transition-all duration-300">
              Register With Us
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="/" className="inline-flex items-center border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all duration-300">
              Workshops
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
