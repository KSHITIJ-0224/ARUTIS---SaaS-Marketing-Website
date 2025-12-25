import React, { useState } from 'react'
import logo from '../assets/arutis-logo.png'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [contactModalOpen, setContactModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  const openContactModal = () => {
    setContactModalOpen(true)
    closeMobileMenu()
  }

  const closeContactModal = () => {
    setContactModalOpen(false)
    setFormData({ name: '', email: '', phone: '', company: '', message: '' })
    setSuccessMessage('')
    setErrorMessage('')
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setErrorMessage('')
    setSuccessMessage('')

    try {
      const response = await fetch('http://localhost:5000/api/contact/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        setSuccessMessage(data.message)
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
        })
        setTimeout(() => closeContactModal(), 2000)
      } else {
        setErrorMessage(data.message || 'Something went wrong')
      }
    } catch (err) {
      setErrorMessage('Error submitting form: ' + err.message)
    } finally {
      setLoading(false)
    }
  }

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Our service', href: '#service' },
    { label: 'About us', href: '#about' },
    { label: 'Career', href: '#careers' }
  ]

  return (
    <>
      <nav className="fixed w-full bg-white shadow-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={logo}
              alt="ARUTIS TECHNOLOGIES PVT. LTD." 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-16 items-center flex-1 ml-20">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-700 font-medium text-base relative transition-colors duration-300 hover:text-gray-900"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Contact & Phone Button */}
          <div className="hidden md:flex gap-4 items-center">
            {/* Phone Icon Button */}
            <button className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors duration-300">
              <i className="fas fa-phone text-lg text-gray-800"></i>
            </button>

            {/* Contact Us Button */}
            <button 
              onClick={openContactModal}
              className="px-6 py-2.5 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-all duration-300 hover:shadow-md"
            >
              Contact us
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <button className="md:hidden" onClick={toggleMobileMenu}>
            <i className="fas fa-bars text-2xl text-gray-900"></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-700 font-medium hover:text-gray-900 transition-colors"
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </a>
              ))}
              
              <div className="flex gap-3 mt-4">
                <button className="flex items-center justify-center flex-1 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <i className="fas fa-phone text-lg text-gray-800"></i>
                </button>
                <button 
                  onClick={openContactModal}
                  className="flex-1 px-6 py-2.5 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-all"
                >
                  Contact us
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Contact Modal */}
      {contactModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto p-8 relative">
            {/* Close Button */}
            <button 
              onClick={closeContactModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <i className="fas fa-times text-2xl"></i>
            </button>

            {/* Logo */}
            <div className="flex justify-center mb-6">
              <img 
                src={logo}
                alt="ARUTIS" 
                className="h-12 w-auto"
              />
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">Get in Touch</h2>

            {/* Success Message */}
            {successMessage && (
              <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 font-medium">✅ {successMessage}</p>
              </div>
            )}

            {/* Error Message */}
            {errorMessage && (
              <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 font-medium">❌ {errorMessage}</p>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-b border-gray-300 placeholder-gray-400 text-gray-700 focus:outline-none focus:border-blue-600 transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-b border-gray-300 placeholder-gray-400 text-gray-700 focus:outline-none focus:border-blue-600 transition-colors"
                />
              </div>

              {/* Phone */}
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Contact Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-b border-gray-300 placeholder-gray-400 text-gray-700 focus:outline-none focus:border-blue-600 transition-colors"
                />
              </div>

              {/* Company */}
              <div>
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-b border-gray-300 placeholder-gray-400 text-gray-700 focus:outline-none focus:border-blue-600 transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="3"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg placeholder-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full mt-6 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
