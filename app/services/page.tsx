import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { BrandCarousel } from '@/components/brand-carousel'

export const metadata = {
  title: 'Our Electrical Services - Omkar Electricals',
  description: 'Explore our comprehensive range of electrical services including residential wiring, industrial installation, maintenance, and more.',
}

const services = [
  {
    title: 'Residential Wiring',
    description: 'Complete electrical wiring solutions for residential properties with safety compliance and energy efficiency.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rnKj9rabCjzGR23dUL3ObWLvzOhJYp.png',
    details: [
      'Internal wiring systems',
      'Safety installations',
      'Energy-efficient solutions',
      'Emergency repairs',
    ],
  },
  {
    title: 'Commercial Installation',
    description: 'Professional electrical installation for commercial and office spaces with minimal disruption.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yM7hpvqiOeOtvzCC8prcRoP6sKOI9P.png',
    details: [
      'Office lighting systems',
      'Power distribution',
      'Fire safety systems',
      'Smart building solutions',
    ],
  },
  {
    title: 'Industrial Electrical Work',
    description: 'Heavy-duty electrical systems and infrastructure for industrial applications.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-levoq9Jx1uGLsRFZ7HtDL5b0I6XeLG.png',
    details: [
      'Large scale installations',
      'Motor control systems',
      'Industrial automation',
      'Power backup systems',
    ],
  },
  {
    title: 'Maintenance & Repair',
    description: 'Professional maintenance and repair services to keep your electrical systems running smoothly.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SDaKRqCMcXTkpFVVFDWW7dkJ1NXUi1.png',
    details: [
      'Regular maintenance',
      'Emergency repairs',
      'System diagnostics',
      'Preventive care',
    ],
  },
  {
    title: 'Turnkey Projects',
    description: 'Complete electrical project execution from design to installation and commissioning.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FRJ7GvdlD3SRKwVCRq5TBUCtCE86MA.png',
    details: [
      'Project management',
      'Complete installation',
      'Quality assurance',
      'Post-installation support',
    ],
  },
  {
    title: 'Safety Compliance',
    description: 'Ensure your electrical systems meet all safety standards and regulations.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-37HJ96LwKYeu6n8DzBpXGkHcnGQeTm.png',
    details: [
      'Safety audits',
      'Compliance checks',
      'Certification',
      'Standard implementation',
    ],
  },
]

export default function Services() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-background py-12 md:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-6 font-geist">
              Our Electrical Services
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl font-geist">
              Omkar Electricals provides comprehensive electrical services for residential, commercial, governments, institutional and industrial projects. Our experienced team is equipped to handle any electrical challenge.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-geist">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition border border-border overflow-hidden"
                >
                  {service.image && (
                    <div className="w-full">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-auto"
                      />
                    </div>
                  )}
                  <div className="p-8">
                    <h3 className="text-xl font-semibold text-foreground mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.details.map((detail) => (
                        <li key={detail} className="flex gap-2 text-sm text-gray-700">
                          <span className="text-accent font-bold">✓</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="bg-secondary py-16 md:py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-8 font-geist">
              Additional Services We Offer
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-geist">
              {[
                {
                  title: 'Electrical Cable Laying',
                  description: 'Professional cable installation and routing for optimal safety and performance.',
                },
                {
                  title: 'Concealed Wiring',
                  description: 'Hidden wiring solutions that maintain aesthetic appeal while ensuring safety.',
                },
                {
                  title: 'Solar Installation',
                  description: 'Renewable energy solutions with professional solar panel installation and setup.',
                },
                {
                  title: 'Lighting Design',
                  description: 'Comprehensive lighting solutions tailored to your space and requirements.',
                },
              ].map((item) => (
                <div key={item.title} className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trusted Brands & Partners */}
        <BrandCarousel />

        {/* Why Choose Us */}
        <section className="py-16 md:py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-12 text-center font-geist">
              Why Choose Omkar Electricals?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-geist">
              {[
                {
                  title: 'Expert Team',
                  description: 'Highly skilled and 30+ years of experienced electrical professionals.',
                },
                {
                  title: 'Quality Assurance',
                  description: 'Strict quality control and safety compliance in all projects.',
                },
                {
                  title: 'Fast Service',
                  description: 'Quick response time and efficient project execution.',
                },
                {
                  title: 'Affordable Pricing',
                  description: 'Competitive rates without compromising on quality.',
                },
              ].map((item) => (
                <div key={item.title} className="border-l-4 border-accent pl-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-foreground text-white py-16 md:py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 font-geist">
              Ready to Get Started?
            </h2>
            <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto font-geist">
              Contact us today for a consultation and quotation for your electrical project.
            </p>
            <a
              href="/contact"
              className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded font-bold hover:opacity-90 transition font-inter"
            >
              Contact
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
