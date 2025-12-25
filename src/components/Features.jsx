import React from 'react'
import incartImage from '../assets/incart.png'

const Projects = () => {
  const project = {
    title: 'InCart',
    category: 'Mobile App Development',
    description: 'InCart is a modern e-commerce mobile application designed for fast, simple, and secure online shopping. The app features intuitive navigation, optimized product listings, and a smooth checkout experience to enhance user engagement and conversions.',
    image: incartImage,
    color: 'from-blue-300 to-blue-400'
  }

  return (
    <section id="projects" className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-3">
            <span className="px-3 py-1 text-gray-600 text-xs font-semibold">
              Project
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            What We've Built
          </h2>
        </div>

        {/* Single Project */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div className={`bg-gradient-to-br ${project.color} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300`}>
            <img 
              src={project.image} 
              alt="InCart App" 
              className="w-full h-auto rounded-xl"
            />
          </div>

          {/* Content Section */}
          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold text-blue-600 mb-2">{project.category}</p>
              <h3 className="text-3xl font-bold text-slate-900 mb-3">{project.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {project.description}
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg text-sm">
                View Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
