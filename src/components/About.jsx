import React from 'react'

const About = () => {
  const stats = [
    { number: '50+', label: 'Projects Delivered' },
    { number: '30+', label: 'Happy Clients' },
    { number: '15+', label: 'Team Members' }
  ]

  return (
    <section id="about" className="section py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">About ARUTIS</h2>
            <p className="text-lg text-slate-600 mb-4">
              ARUTIS TECHNOLOGY PRIVATE LIMITED is a leading provider of comprehensive digital solutions, specializing in transforming businesses through innovative technology and strategic digital marketing.
            </p>
            <p className="text-lg text-slate-600 mb-6">
              With a team of experienced professionals, we deliver cutting-edge solutions that drive growth, enhance user experience, and create lasting value for our clients.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div key={index}>
                  <p className="text-3xl font-bold text-blue-600">{stat.number}</p>
                  <p className="text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Mission Box */}
          <div className="bg-gradient-to-br from-blue-500 to-blue-800 rounded-2xl p-12 text-white text-center">
            <i className="fas fa-lightbulb text-6xl mb-6 opacity-80"></i>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-blue-100">
              To empower businesses with innovative technology solutions that drive growth, enhance efficiency, and create competitive advantages in the digital landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
