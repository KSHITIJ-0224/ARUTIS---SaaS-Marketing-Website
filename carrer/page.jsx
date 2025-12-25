import React, { useState } from 'react'

const Careers = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    course: '',
    passingYear: '',
    passportPhoto: null,
    resume: null,
    majorSkill: ''
  })

  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const skills = [
    'Web Development',
    'Mobile Development',
    'UI/UX Design',
    'Digital Marketing',
    'Cloud Services',
    'Data Analysis',
    'DevOps',
    'Quality Assurance'
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFileChange = (e) => {
    const { name, files } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: files[0]
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      const formPayload = new FormData()
      formPayload.append('name', formData.name)
      formPayload.append('email', formData.email)
      formPayload.append('contactNumber', formData.contactNumber)
      formPayload.append('course', formData.course)
      formPayload.append('passingYear', formData.passingYear)
      formPayload.append('majorSkill', formData.majorSkill)
      
      if (formData.passportPhoto) {
        formPayload.append('passportPhoto', formData.passportPhoto)
      }
      if (formData.resume) {
        formPayload.append('resume', formData.resume)
      }

      const response = await fetch('http://localhost:5000/api/careers/apply', {
        method: 'POST',
        body: formPayload
      })

      console.log('Response status:', response.status)
      console.log('Response headers:', response.headers)

      let result
      const responseText = await response.text()
      console.log('Response text:', responseText)
      
      // Check if response is JSON or HTML
      if (responseText.includes('<!DOCTYPE') || responseText.includes('<html')) {
        console.error('Server returned HTML error page')
        setMessage('Server Error: ' + response.status + ' - Check server is running and all routes are configured')
        setLoading(false)
        return
      }

      try {
        if (!responseText) {
          throw new Error('Empty response from server')
        }
        result = JSON.parse(responseText)
      } catch (jsonError) {
        console.error('JSON parse error:', jsonError)
        console.error('Response was:', responseText)
        result = { message: 'Server error: ' + jsonError.message }
      }

      if (response.ok) {
        setMessage('Application submitted successfully!')
        setFormData({
          name: '',
          email: '',
          contactNumber: '',
          course: '',
          passingYear: '',
          passportPhoto: null,
          resume: null,
          majorSkill: ''
        })
        document.getElementById('passportPhoto').value = ''
        document.getElementById('resume').value = ''
      } else {
        setMessage(result.message || 'Error submitting application')
      }
    } catch (error) {
      console.error('Fetch error:', error)
      setMessage('Error submitting application: ' + error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="careers" className="min-h-screen bg-cover bg-center bg-fixed py-20 px-4" style={{ backgroundImage: 'url(/assets/careers-bg.jpg)' }}>
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="relative max-w-2xl mx-auto">
        <div className="text-center text-white mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Careers</h1>
          <p className="text-xl mb-2">Join Arutis Technologies</p>
          <p className="text-gray-200">submit your details to apply for open positions</p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-blue-600 mb-2">Apply Now</h2>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Start your Career with US</h3>
            <p className="text-slate-600 text-sm">
              Fill out the form below and attach the required documents to apply for a Position at Arutis Technologies
            </p>
          </div>

          {message && (
            <div className={`mb-6 p-4 rounded-lg text-center font-semibold ${
              message.includes('successfully') 
                ? 'bg-green-100 text-green-700' 
                : 'bg-red-100 text-red-700'
            }`}>
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border-b border-gray-300 focus:border-blue-600 focus:outline-none text-slate-700 placeholder-gray-400"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="contactNumber"
                  placeholder="Contact Number"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border-b border-gray-300 focus:border-blue-600 focus:outline-none text-slate-700 placeholder-gray-400"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border-b border-gray-300 focus:border-blue-600 focus:outline-none text-slate-700 placeholder-gray-400"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="course"
                  placeholder="Enter Course"
                  value={formData.course}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border-b border-gray-300 focus:border-blue-600 focus:outline-none text-slate-700 placeholder-gray-400"
                />
              </div>
            </div>

            <div>
              <input
                type="text"
                name="passingYear"
                placeholder="Enter Passing year"
                value={formData.passingYear}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border-b border-gray-300 focus:border-blue-600 focus:outline-none text-slate-700 placeholder-gray-400"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  passport size Photo <span className="text-red-500">*</span>
                </label>
                <input
                  id="passportPhoto"
                  type="file"
                  name="passportPhoto"
                  accept="image/*"
                  onChange={handleFileChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-slate-700 focus:outline-none focus:border-blue-600"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Resume (PDF Only) <span className="text-red-500">*</span>
                </label>
                <input
                  id="resume"
                  type="file"
                  name="resume"
                  accept=".pdf"
                  onChange={handleFileChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-slate-700 focus:outline-none focus:border-blue-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">
                Major Skill <span className="text-red-500">*</span>
              </label>
              <select
                name="majorSkill"
                value={formData.majorSkill}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-slate-700 focus:outline-none focus:border-blue-600"
              >
                <option value="">Select Skill</option>
                {skills.map(skill => (
                  <option key={skill} value={skill}>{skill}</option>
                ))}
              </select>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 disabled:opacity-50"
              >
                {loading ? 'Submitting...' : 'Submit Application'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Careers
