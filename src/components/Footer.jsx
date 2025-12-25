import React from 'react'
import logo from '../assets/arutis-logo.png'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-700 via-blue-800 to-slate-900 text-white py-16 px-6" id="footer">
      <div className="max-w-7xl mx-auto">
        {/* Logo at Top Center */}
        <div className="flex justify-center mb-16">
          <div className="text-center">
            <img 
              src={logo}
              alt="ARUTIS" 
              className="h-20 w-auto mx-auto mb-2"
            />
            <p className="text-sm text-blue-100 font-light tracking-widest">
              ARUTIS<br/>
              TECHNOLOGIES PVT. LTD.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-b border-blue-500/30 mb-12"></div>

        {/* Footer Grid - 4 Columns */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Our Vision */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Vision</h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              Our vision is to empower businesses with innovative, reliable, and user-focused digital solutions that drive long-term growth and success.
            </p>
          </div>

          {/* Column 2: Contact Us */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact us</h3>
            <div className="space-y-4 text-sm">
              {/* Phone */}
              <a href="tel:+919876543210" className="flex items-center gap-3 text-blue-100 hover:text-white transition-colors group">
                <i className="fas fa-phone text-blue-300"></i>
                <span className="underline decoration-blue-300">Get in Touch</span>
              </a>

              {/* Email */}
              <a href="mailto:hello@arutis.com" className="flex items-center gap-3 text-blue-100 hover:text-white transition-colors group">
                <i className="fas fa-envelope text-blue-300"></i>
                <span className="underline decoration-blue-300">Mail us</span>
              </a>

              {/* Address */}
              <div className="flex gap-3 text-blue-100">
                <i className="fas fa-map-marker-alt text-blue-300 mt-0.5 flex-shrink-0"></i>
                <div>
                  <p>Address- 1702, A Wing,</p>
                  <p>Parinee Crescenzo, G</p>
                  <p>Block, Bandra Kurla</p>
                  <p>Complex, Bandra East,</p>
                  <p>Mumbai,MH 400051</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Company (Left) */}
          <div>
            <h3 className="text-xl font-bold mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-blue-100 hover:text-white transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-blue-100 hover:text-white transition-colors text-sm">
                  About us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-blue-100 hover:text-white transition-colors text-sm">
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Company (Right) */}
          <div>
            <h3 className="text-xl font-bold mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors text-sm">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors text-sm">
                  Cancellation and Refund
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors text-sm">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="border-t border-blue-500/30 pt-8">
          <p className="text-center text-blue-100 text-xs font-light">
            © 2025 ARUTIS Technology Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
