'use client'

import { useState } from 'react'

export function ApplicationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.fullName && formData.email && formData.phone && formData.position) {
      setSubmitted(true)
      setFormData({ fullName: '', email: '', phone: '', position: '', experience: '', message: '' })
      setTimeout(() => setSubmitted(false), 5000)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 shadow-md max-w-2xl mx-auto">
      {submitted && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded text-green-700 font-inter">
          Thank you for your application! We&apos;ll review it and get back to you soon.
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2 font-geist">Full Name *</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded font-inter focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2 font-geist">Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded font-inter focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2 font-geist">Phone Number *</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded font-inter focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="+91 98765 43210"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2 font-geist">Position *</label>
          <select
            name="position"
            value={formData.position}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded font-inter focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a position</option>
            <option value="Senior Electrician">Senior Electrician</option>
            <option value="Junior Electrician">Junior Electrician</option>
            <option value="Electrical Engineer">Electrical Engineer</option>
            <option value="Project Manager">Project Manager</option>
            <option value="Apprentice">Apprentice</option>
          </select>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-semibold text-foreground mb-2 font-geist">Years of Experience</label>
        <select
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded font-inter focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select experience level</option>
          <option value="Fresher">Fresher</option>
          <option value="1-3 years">1-3 years</option>
          <option value="3-5 years">3-5 years</option>
          <option value="5+ years">5+ years</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-semibold text-foreground mb-2 font-geist">Why do you want to join us?</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded font-inter focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
          placeholder="Tell us about your interest in joining Omkar Electricals..."
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white px-6 py-3 rounded font-medium hover:bg-blue-600 transition font-inter"
      >
        Submit Application
      </button>
    </form>
  )
}
