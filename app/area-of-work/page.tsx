'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function AreaOfWork() {
  const sectors = [
    {
      name: 'Institutional',
      description: 'We have successfully executed electrical projects for educational institutions, delivering safe, reliable, and energy-efficient electrical systems for schools, colleges, universities, and training campuses. Our solutions ensure uninterrupted power supply, modern infrastructure, and compliance with the highest safety standards, creating secure and efficient learning environments.',
      logos: [
        {
          name: 'KICTE',
          url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9XCEUiq237FFgC4n8OqhbMFawq99UN.png',
        },
        {
          name: 'Vidyapith College',
          url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LzxSLR0tYhH2BTwvkDmfu7rpE4biot.png',
        },
      ],
    },
    {
      name: 'Banking',
      description: 'We have successfully executed electrical projects for leading banks and financial institutions, delivering reliable power distribution systems, backup power solutions, and energy-efficient electrical infrastructure. Our services ensure uninterrupted operations, enhanced safety, and compliance with the highest industry standards.',
      logos: [
        {
          name: 'Bank of Baroda',
          url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-AcEludOrAZheFdeUAsjbMxNJ20yI3E.png',
        },
        {
          name: 'Bank of Maharashtra',
          url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6ZeZTj3qaxUXk35BupGyhg54TzFE2B.png',
        },
      ],
    },
    {
      name: 'Developers & Real Estate',
      description: 'We collaborate with leading builders and developers to provide turnkey electrical solutions for residential, commercial, and integrated township projects. From electrical planning and installation to testing and commissioning, we deliver reliable, energy-efficient, and future-ready infrastructure tailored to every development.',
      logos: [
        {
          name: 'SAI Developers & Builders',
          url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8W9gGytMvU0yDOQokfjzxY4eNWpUQq.png',
        },
        {
          name: 'Vishwakarma Builders',
          url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EYFIy2IPmy8b4qfWjdjRVWrwun4Qf0.png',
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-background py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-6 font-geist">
              Area of <span className="text-accent">Work</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl font-geist">
              Our expertise spans across a wide range of sectors, where we have successfully completed numerous electrical projects for industrial facilities, banking institutions, commercial buildings, residential developments, hospitals, educational institutions, hospitality establishments, and real estate projects. We are committed to delivering safe, reliable, and high-quality electrical solutions that meet the highest industry standards.
            </p>
          </div>
        </section>

        {/* Sectors Section */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-7xl mx-auto">
            {sectors.map((sector) => (
              <div key={sector.name} className="mb-16 md:mb-24">
                <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4 font-geist">
                  {sector.name}
                </h2>
                <p className="text-lg text-gray-700 mb-12 max-w-3xl font-geist">
                  {sector.description}
                </p>

                {/* Logos Display */}
                <div className="flex flex-wrap gap-8">
                  {sector.logos.map((logo) => (
                    <div
                      key={logo.name}
                      className="flex-1 min-w-64 bg-white p-8 rounded-lg shadow-sm border border-border flex items-center justify-center hover:shadow-md transition h-40"
                    >
                      <img
                        src={logo.url}
                        alt={logo.name}
                        className="max-h-32 max-w-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-12 md:py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-accent rounded-3xl px-8 md:px-12 py-16 md:py-20">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
                {/* Stat 1 */}
                <div className="text-center">
                  <h3 className="text-5xl md:text-6xl font-bold text-white mb-2 font-geist">500+</h3>
                  <p className="text-lg md:text-xl text-white font-geist">Happy Clients</p>
                </div>

                {/* Stat 2 */}
                <div className="text-center">
                  <h3 className="text-5xl md:text-6xl font-bold text-white mb-2 font-geist">40+</h3>
                  <p className="text-lg md:text-xl text-white font-geist">Locations</p>
                </div>

                {/* Stat 3 */}
                <div className="text-center">
                  <h3 className="text-5xl md:text-6xl font-bold text-white mb-2 font-geist">300+</h3>
                  <p className="text-lg md:text-xl text-white font-geist">Projects</p>
                </div>

                {/* Stat 4 */}
                <div className="text-center">
                  <h3 className="text-5xl md:text-6xl font-bold text-white mb-2 font-geist">40+</h3>
                  <p className="text-lg md:text-xl text-white font-geist">Professionals</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-accent text-white py-12 md:py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 font-geist">
              Ready to Work With Us?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto font-geist">
              Join the trusted organizations that rely on Omkar Electricals for their electrical infrastructure needs.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-accent px-8 py-3 rounded font-medium hover:bg-gray-100 transition font-geist"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
