import React from 'react'

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      icon: '🌐',
      description: 'Modern, scalable web solutions'
    },
    {
      title: 'Mobile Development',
      icon: '📱',
      description: 'High-performance Android & iOS apps'
    },
    {
      title: 'UI/UX Design',
      icon: '🎨',
      description: 'Intuitive and beautiful interfaces'
    },
    {
      title: 'Web Maintenance',
      icon: '⚙️',
      description: 'Ongoing support and optimization'
    }
  ]

  return (
    <>
      {/* What We Do Section */}
      <section id="service" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <p className="text-gray-500 text-lg md:text-xl font-semibold mb-4">What we do?</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-8">
              We Transform ideas into Digital Reality
            </h2>
            
            <div className="space-y-6 text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              <p>
                At Arutis Technologies Pvt. Ltd., we build modern digital solutions that help businesses grow and succeed online.
              </p>
              <p>
                We develop high-performance websites and reliable Android applications designed for scalability, security, and smooth user experiences.
              </p>
              <p>
                Our UI/UX design focuses on clarity, usability, and visual excellence to create intuitive products aligned with real user needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Content */}
            <div>
              <p className="text-gray-500 text-lg md:text-xl font-semibold mb-4">Our Service</p>
              <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                Our Technology Capabilities
              </h2>
              
              <p className="text-gray-700 text-lg leading-relaxed">
                Arutis Technologies Pvt. Ltd. partners with businesses to build reliable digital products. We focus on crafting high-quality websites, mobile applications, and user-centric UI/UX designs that deliver real value and long-term results.
              </p>
            </div>

            {/* Right Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center group"
                >
                  {/* Icon */}
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* Read More Button */}
                  <button className="px-6 py-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg">
                    Read more
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services

