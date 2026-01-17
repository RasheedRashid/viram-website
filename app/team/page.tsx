import Image from "next/image";

export default function Team() {
  const ulsterTeam = [
    {
      name: "Dr. Deepika Nikam",
      role: "Lecturer",
      image: "/img/ulsterteam/deepika.png",
      linkedin: "#",
    },
    {
      name: "Dr. Sagar Nikam",
      role: "Lecturer",
      image: "/img/ulsterteam/sagar.jpg",
      linkedin: "#",
    },
  ];

  const mitTeam = [
    {
      name: "Dr. Mayur Sawant",
      role: "Assistant Professor",
      image: "/img/MIT/mayur.png",
      linkedin: "#",
    },
    {
      name: "Dr. Tejaswini Bhosale",
      role: "Assistant Professor",
      image: "/img/MIT/tejaswani.png",
      linkedin: "#",
    },
    {
      name: "Mr. Pratik Joshi",
      role: "Assistant Professor",
      image: "/img/MIT/pratik.png",
      linkedin: "#",
    },
    {
      name: "Mr. Ashish Umbarkar",
      role: "Assistant Professor",
      image: "/img/MIT/ashish.png",
      linkedin: "#",
    },
    {
      name: "Mr. Ashwinkumar Mahindrakar",
      role: "Assistant Professor",
      image: "/img/MIT/ashwin.png",
      linkedin: "#",
    },
  ];

  const sigmaTeam = [
    {
      name: "Mr. Sudarshan Lathkar",
      role: "CEO, SSIG Manufacturing Advancements Pvt. Ltd.",
      image: "/img/sigma/sudarshan.png",
      linkedin: "#",
    },
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
          <span className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 text-white/90 text-sm font-medium mb-6">
            The People Behind VIRAM
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400">Team</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            A collaborative partnership bringing together experts from Ulster University, MIT-ADT University, and SSIG Manufacturing Advancements.
          </p>
        </div>
      </section>

      {/* Ulster University Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              United Kingdom
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ulster University
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Leading academics from Ulster University driving innovation in AI and robotics education.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {ulsterTeam.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 group"
              >
                <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 p-8 relative">
                  {/* Decorative */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>

                  <div className="relative flex flex-col items-center">
                    {/* Image */}
                    <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white/30 shadow-lg relative mb-4 group-hover:scale-105 transition-transform duration-300">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Info */}
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                      <p className="text-purple-200 font-medium">{member.role}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 flex justify-center">
                  <a
                    href={member.linkedin}
                    className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-full hover:bg-purple-100 hover:text-purple-600 transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MIT-ADT University Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              India
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              MIT-ADT University, Pune
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Expert faculty members from MIT-ADT University contributing to cutting-edge research and education.
            </p>
          </div>

          {/* Team Grid */}
          <div className="flex flex-wrap justify-center gap-8">
            {mitTeam.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group w-full sm:w-80"
              >
                <div className="bg-gradient-to-br from-pink-500 via-pink-600 to-purple-600 p-6 relative">
                  {/* Decorative */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>

                  <div className="relative flex flex-col items-center">
                    {/* Image */}
                    <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white/30 shadow-lg relative mb-3 group-hover:scale-105 transition-transform duration-300">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Info */}
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                      <p className="text-pink-200 font-medium text-sm">{member.role}</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 flex justify-center">
                  <a
                    href={member.linkedin}
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <span className="text-sm font-medium">LinkedIn</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SSIG Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Industry Partner
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              SSIG Manufacturing Advancements
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Industry expertise driving practical applications in smart manufacturing and automation.
            </p>
          </div>

          {/* Team Grid */}
          <div className="flex justify-center">
            {sigmaTeam.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 group max-w-md w-full"
              >
                <div className="bg-gradient-to-br from-orange-500 via-orange-600 to-pink-600 p-8 relative">
                  {/* Decorative */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>

                  <div className="relative flex flex-col items-center">
                    {/* Image */}
                    <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white/30 shadow-lg relative mb-4 group-hover:scale-105 transition-transform duration-300">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Info */}
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                      <p className="text-orange-200 font-medium text-sm">{member.role}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 flex justify-center">
                  <a
                    href={member.linkedin}
                    className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-full hover:bg-orange-100 hover:text-orange-600 transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
