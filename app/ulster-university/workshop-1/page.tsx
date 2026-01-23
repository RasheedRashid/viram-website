export default function Workshop() {
  const workshopDetails = {
    title: "Adaptive Manufacturing Workshop",
    subtitle: "Hybrid Mode",
    date: "2nd March 2026",
    time: "9:00 AM - Onwards",
    locationInPerson: "Ulster University, Derry~Londonderry Campus",
    locationOnline: "Microsoft Teams",
    registrationDeadline: "24th February 2026",
    isFree: true,
    description: `This workshop is focused on understanding challenges and recent trends in adaptive manufacturing. It is part of the British Council Funded project on "Intelligent Vision-Based Robotics for Adaptive Manufacturing". Key expert speakers will deliver talks and case studies on Robotics, AI, Machine Learning and Digital Twin in Manufacturing.`,
    topics: [
      "Robotics",
      "Artificial Intelligence",
      "Machine Learning",
      "Digital Twin in Manufacturing",
      "Computer Vision",
      "Real-Time Monitoring",
    ],
    partners: [
      { name: "British Council", type: "Funder" },
      { name: "Ulster University", type: "Partner" },
      { name: "MIT-ADT University", type: "Partner" },
      { name: "SSIGMA", type: "Partner" },
    ],
  };

  const speakers = [
    {
      name: "Professor Charlie Wang",
      title: "Professor of Smart Manufacturing",
      role: "Department Head of Research | EPSRC Fellowship on Field Based Computation for Vector 3D Printing",
      affiliation: "Department of Mechanical and Aerospace Engineering, The University of Manchester, UK",
      talkTitle: "Geometry-Driven Intelligence: Reshaping Manufacturing through AI-Driven Design and Process Planning",
      image: "/img/uuws/charlie-wang.jpg", // Add your image filename here
    },
    {
      name: "Dr. Marion McAfee",
      title: "Senior Lecturer in Systems and Control Engineering",
      role: "Funded Investigator, I-Form - Research Ireland Centre for Advanced Manufacturing",
      affiliation: "Department of Mechatronic and Electronic Engineering, Atlantic Technological University",
      talkTitle: "Bayesian Optimisation and Digital Twin Strategies for Adaptive Manufacturing in Materials Processing for Drug Delivery Devices",
      image: "/img/uuws/marion-mcafee.jpg", // Add your image filename here
    },
    {
      name: "Dr. Eoin Hinchy",
      title: "Associate Professor in Automated Manufacturing and Control",
      role: "School of Engineering, Faculty of Science and Engineering",
      affiliation: "University of Limerick & Bernal Institute, University of Limerick",
      talkTitle: "Advancing Manufacturing: Digital Twins and Machine Learning for Alloy and Composite Processing",
      image: "/img/uuws/eoin-hinchy.jpg", // Add your image filename here
    },
    {
      name: "Dr. Mayur Sawant",
      title: "Assistant Professor in Mechanical Engineering",
      role: "",
      affiliation: "MIT-ADT University, Pune, India",
      talkTitle: "TBC",
      image: "/img/uuws/mayur-sawant.jpg", // Add your image filename here
    },
  ];

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
            Gain practical skills with our interactive workshops led by industry experts.
          </p>
        </div>
      </section>

      {/* Main Workshop Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Workshop Card */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            {/* Header with Gradient */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-8 md:p-10">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-medium">
                  {workshopDetails.subtitle}
                </span>
                {workshopDetails.isFree && (
                  <span className="bg-green-400 text-green-900 px-4 py-1 rounded-full text-sm font-bold">
                    FREE Registration
                  </span>
                )}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                {workshopDetails.title}
              </h2>
              <p className="text-white/80 text-lg max-w-3xl">
                {workshopDetails.description}
              </p>
            </div>

            {/* Content */}
            <div className="p-8 md:p-10">
              {/* Key Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                {/* Date */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-5 border border-purple-100">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-xs text-purple-600 uppercase tracking-wider font-semibold mb-1">Date</p>
                  <p className="font-bold text-gray-900 text-lg">{workshopDetails.date}</p>
                </div>

                {/* Time */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-5 border border-purple-100">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-xs text-pink-600 uppercase tracking-wider font-semibold mb-1">Time</p>
                  <p className="font-bold text-gray-900 text-lg">{workshopDetails.time}</p>
                </div>

                {/* In-Person Location */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-5 border border-purple-100">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <p className="text-xs text-purple-600 uppercase tracking-wider font-semibold mb-1">In-Person</p>
                  <p className="font-bold text-gray-900">{workshopDetails.locationInPerson}</p>
                </div>

                {/* Online Location */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-5 border border-purple-100">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-xs text-pink-600 uppercase tracking-wider font-semibold mb-1">Online</p>
                  <p className="font-bold text-gray-900">{workshopDetails.locationOnline}</p>
                </div>
              </div>

              {/* Topics Covered */}
              <div className="mb-10">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Topics Covered</h3>
                <div className="flex flex-wrap gap-3">
                  {workshopDetails.topics.map((topic, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium border border-purple-200"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Registration Deadline Banner */}
              <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-6 mb-10 text-white">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/80 text-sm">Registration Deadline</p>
                      <p className="text-2xl font-bold">{workshopDetails.registrationDeadline}</p>
                    </div>
                  </div>
                  <a
                    href="/contact"
                    className="bg-white text-orange-600 px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all hover:scale-105"
                  >
                    Register Now
                  </a>
                </div>
              </div>

              {/* Partners */}
              <div className="border-t border-gray-100 pt-8">
                <h3 className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-4 text-center">
                  Organised in collaboration with
                </h3>
                <div className="flex flex-wrap justify-center items-center gap-8">
                  {workshopDetails.partners.map((partner, index) => (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-gray-400 text-xs font-bold">{partner.name.split(' ').map(w => w[0]).join('')}</span>
                      </div>
                      <p className="text-sm font-medium text-gray-700">{partner.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Speakers Section */}
          <div className="mt-16">
            <div className="text-center mb-10">
              <span className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Expert Speakers
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Learn from Industry Leaders
              </h2>
              <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                Our workshop features distinguished speakers from leading universities and research institutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {speakers.map((speaker, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      {/* Avatar */}
                      {speaker.image ? (
                        <img
                          src={speaker.image}
                          alt={speaker.name}
                          className="w-20 h-20 rounded-2xl object-cover flex-shrink-0"
                        />
                      ) : (
                        <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-2xl font-bold">
                            {speaker.name.split(' ').slice(-1)[0][0]}
                          </span>
                        </div>
                      )}
                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-gray-900">{speaker.name}</h3>
                        <p className="text-purple-600 font-medium text-sm">{speaker.title}</p>
                        {speaker.role && (
                          <p className="text-gray-500 text-sm mt-1">{speaker.role}</p>
                        )}
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-gray-600 text-sm mb-3">
                        <span className="font-semibold">Affiliation:</span> {speaker.affiliation}
                      </p>
                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-100">
                        <p className="text-xs text-purple-600 uppercase tracking-wider font-semibold mb-1">
                          Talk Title
                        </p>
                        <p className="text-gray-900 font-medium">
                          {speaker.talkTitle === "TBC" ? (
                            <span className="text-gray-400 italic">To be confirmed</span>
                          ) : (
                            speaker.talkTitle
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* More Speakers Coming */}
            <div className="mt-8 bg-purple-50 border border-purple-100 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <p className="text-purple-700 font-medium">
                More expert speakers will be announced soon. Stay tuned!
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-purple-600 to-pink-500 rounded-3xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Join the Workshop?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Register now to secure your spot. Whether you prefer to attend in person at Ulster University or join online via Teams, we welcome you to be part of this learning experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all hover:scale-105"
              >
                Register Now — It's Free!
              </a>
              <a
                href="https://viram.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Contact Info Box */}
          <div className="mt-12 bg-white border border-gray-200 rounded-2xl p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Have questions about the workshop?</h3>
                <p className="text-gray-600 mb-4">
                  For more information about the workshop, visit{" "}
                  <a href="https://viram.uk" className="text-purple-600 font-semibold hover:underline">
                    https://viram.uk
                  </a>{" "}
                  or contact us directly.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow"
                >
                  Contact Us
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
