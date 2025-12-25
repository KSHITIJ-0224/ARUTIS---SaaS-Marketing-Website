import React from 'react'
import heroImage from '../assets/1.png'

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-[330px] md:h-[394px] lg:h-[510px] bg-cover bg-center text-white overflow-visible rounded-t-3xl rounded-b-3xl" style={{ backgroundImage: `url(${heroImage})`, backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60 z-10"></div>

      {/* Content */}
      <div className="relative w-full h-full flex items-center justify-center z-20">
        <div className="w-full max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center space-y-8">
            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight drop-shadow-lg">
                Where Innovation Meets
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200">
                  Business Excellence
                </span>
              </h1>
            </div>

            {/* Subheading */}
            <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-md">
              Custom software, web, and mobile solutions designed to solve real business challenges.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="px-8 md:px-12 py-3 md:py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold text-lg rounded-lg transition-all duration-300 transform hover:shadow-2xl hover:scale-105 active:scale-95 drop-shadow-lg">
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg className="w-6 h-6 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      {/* Styles */}
      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  )
}

export default Hero
