'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Basic validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.subject ||
      !formData.message
    ) {
      setSubmitStatus('error')
      setSubmitMessage('Please fill in all fields')
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus('error')
      setSubmitMessage('Please enter a valid email address')
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate form submission
      // In a real application, you would send this to your backend
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Log form data (in production, send to your backend)
      console.log('[v0] Contact form submitted:', formData)

      setSubmitStatus('success')
      setSubmitMessage('Thank you! We will get back to you soon.')
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
        setSubmitMessage('')
      }, 5000)
    } catch (error) {
      console.error('[v0] Form submission error:', error)
      setSubmitStatus('error')
      setSubmitMessage('An error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-background py-12 md:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <p className="text-accent font-bold text-sm md:text-base mb-4 font-geist">WHO WE ARE?</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-geist">
              You Have a <span className="text-accent">Question?</span>
            </h1>
            <p className="text-2xl md:text-3xl text-foreground font-semibold font-geist">Let us Answer it.</p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 md:py-24 px-4 font-geist">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Head Office */}
              <div className="bg-white p-8 rounded-lg shadow-sm border border-border text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-secondary p-4 rounded-lg">
                    <MapPin className="text-accent" size={32} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Head Office</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Janwadkar complex lower ground (LG-2),
                  <br />
                  Panchaganga hospital, Kolhapur,
                  <br />
                  Maharashtra 416002
                </p>
              </div>

              {/* Branch Office */}
              <div className="bg-white p-8 rounded-lg shadow-sm border border-border text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-secondary p-4 rounded-lg">
                    <MapPin className="text-accent" size={32} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Branch Office</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Shop no.23, New Shopping Centre,
                  <br />
                  Near Rajdhani Bakery, Government Colony,
                  <br />
                  Bandra East, Mumbai,
                  <br />
                  Maharashtra 400051 India.
                </p>
              </div>

              {/* Connect Us */}
              <div className="bg-white p-8 rounded-lg shadow-sm border border-border">
                <div className="text-center mb-6">
                  <div className="flex justify-center mb-4">
                    <div className="bg-secondary p-4 rounded-lg">
                      <Phone className="text-accent" size={32} />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Connect us</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-600 text-sm font-semibold mb-1">Email</p>
                    <a
                      href="mailto:omkar@electricals.com"
                      className="text-accent hover:underline font-semibold"
                    >
                      omkar@electricals.com
                    </a>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm font-semibold mb-1">Phone</p>
                    <a
                      href="tel:+919876543210"
                      className="text-accent hover:underline font-semibold"
                    >
                      (+91) 9876543210
                    </a>
                    <br />
                    <a
                      href="tel:+918452040929"
                      className="text-accent hover:underline font-semibold"
                    >
                      (+91) 8452040929
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="bg-secondary py-16 md:py-24 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Tell us About Yourself
            </h2>

            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-sm">
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded text-green-800">
                  {submitMessage}
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded text-red-800">
                  {submitMessage}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-foreground font-semibold mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-input border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-foreground font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-input border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-foreground font-semibold mb-2">
                    Contact Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(+91) XXXXXXXXXX"
                    className="w-full px-4 py-3 bg-input border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-foreground font-semibold mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What is this about?"
                    className="w-full px-4 py-3 bg-input border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                  />
                </div>
              </div>

              {/* Message */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-foreground font-semibold mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your message here..."
                  rows={6}
                  className="w-full px-4 py-3 bg-input border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="text-right">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-accent text-accent-foreground px-8 py-3 rounded font-bold hover:opacity-90 transition disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
