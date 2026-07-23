'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function Home() {
  const handleBrochureDownload = async () => {
    try {
      const response = await fetch('https://blobs.vusercontent.net/blob/Omkar%20Electricals%20Brochure_compressed-dAbswxQUlz4XCuR8RahBpfp7IddDlf.pdf')
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'Omkar_Electricals_Brochure.pdf'
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)
    } catch (error) {
      console.error('Failed to download brochure:', error)
    }
  }
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-background">
          <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left content */}
              <div>
                <p className="text-accent font-bold text-sm md:text-base mb-4 font-inter">
                  WELCOME TO OMKAR ELECTRICALS
                </p>
                <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-6 leading-tight font-inter">
                  Government Licensed Electrical Contractors
                </h1>
                <p className="text-gray-600 text-base leading-relaxed mb-8 text-justify font-geist">
                  In Maharashtra, most individuals confuse an electrician with an electrical contractor since they do not know the essential distinctions between them. However, both positions are different from one another and might be regarded as electricians employed by electrical contractors in Maharashtra.
                </p>
                <Link
                  href="/about"
                  className="inline-block bg-accent text-accent-foreground px-6 py-3 rounded font-medium hover:opacity-90 transition font-inter text-sm"
                >
                  ABOUT US
                </Link>
              </div>

              {/* Right image */}
              <div className="relative">
                <div className="relative h-96 md:h-[500px] w-full">
                  <Image
                    src="/contractor-working.jpeg"
                    alt="Professional electrician working on electrical panel"
                    fill
                    className="object-cover rounded-lg"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left text */}
              <div className="font-geist">
                <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6 font-geist">
                  <span className="text-accent">Omkar</span> Electricals
                </h2>
                <p className="text-gray-700 mb-4 leading-relaxed text-justify">
                  is one of the top Government License Electrical Contractor and Electrical Service Provider in Maharashtra since 2001 because we are happy to be connected with some of the most prestigious electrical projects in the state. With a group of highly skilled and knowledgeable experts who are on board and completely comprehend your needs. Electrical cable laying, concealed wiring, casing wiring, industrial wiring, residential wiring, turnkey electrical projects, maintenance and installation, among other electrical services, are just a few of the many electrical services we provide in Maharashtra.
                </p>
                <p className="text-gray-700 leading-relaxed text-justify">
                  For any kind of property, electrical wiring is crucial. You cannot afford to be lax in this situation. To ensure that quality is never compromised, we take all necessary safety precautions. We are one of Maharashtra&apos;s most dependable electrical contractors because of this. Our network is incredibly robust and provides power services in Maharashtra that are unmatched. So don&apos;t hesitate to look for a contractor who handles jobs like cover wiring, industrial wiring, etc. You are already in the proper location. Maharashtra has a large number of electrical contractors, but we stand out from the crowd since we are superior to them.
                </p>
              </div>

              {/* Right image */}
              <div className="relative h-96 md:h-[500px] w-full rounded-lg overflow-hidden">
                <Image
                  src="/electrical-work.png"
                  alt="Electrical panel installation work"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="bg-secondary px-4" style={{ paddingTop: '76px', paddingBottom: '96px' }}>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-center text-foreground mb-4 font-geist">
              Our Services
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto font-inter">
              We provide comprehensive electrical services for residential, commercial, government and industrial projects.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 font-geist">
              {[
                {
                  title: 'Electrical Panel Installation',
                  description: 'Professional installation and maintenance of electrical distribution panels',
                  image: '/electrical-panel-work.png',
                },
                {
                  title: 'Circuit Breaker Installation',
                  description: 'Expert circuit breaker and safety switch installation and maintenance',
                  image: '/circuit-breaker-install.png',
                },
                {
                  title: 'Inspection & Compliance',
                  description: 'Comprehensive electrical system inspection and compliance verification',
                  image: '/electrical-inspection.png',
                },
              ].map((service) => (
                <div key={service.title} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition">
                  <div className="w-110 h-80 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/contact"
                className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded font-medium hover:opacity-90 transition font-inter"
              >
                Contact Now
              </Link>
            </div>
          </div>
        </section>

        {/* Electrical Services List */}
        <section className="px-4 bg-background" style={{ paddingTop: '66px', paddingBottom: '96px' }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="font-normal text-foreground mb-12 font-geist text-center" style={{ fontSize: '30px' }}>
              We carry out Electrical services like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8" style={{ fontFamily: '"Geist", sans-serif', fontSize: '18px', textTransform: 'capitalize' }}>
              <div className="flex items-start gap-3">
                <span className="text-accent font-bold text-lg flex-shrink-0">•</span>
                <p className="text-gray-700 font-geist">Panel Testing</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent font-bold text-lg flex-shrink-0">•</span>
                <p className="text-gray-700 font-geist">Fault Finding in a circuit</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent font-bold text-lg flex-shrink-0">•</span>
                <p className="text-gray-700 font-geist">Electrical Power Harmonic testing</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent font-bold text-lg flex-shrink-0">•</span>
                <p className="text-gray-700 font-geist">Transformer Testing</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent font-bold text-lg flex-shrink-0">•</span>
                <p className="text-gray-700 font-geist">Identifying quality of power</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent font-bold text-lg flex-shrink-0">•</span>
                <p className="text-gray-700 font-geist">DG Efficiency and consumption calculations</p>
              </div>
            </div>
            <div className="text-center">
              <Link
                href="/contact"
                className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded font-medium hover:opacity-90 transition font-inter"
              >
                Contact Now
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-foreground text-white py-16 md:py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-medium mb-6 font-geist">
              Need Professional Electrical Services?
            </h2>
            <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto font-geist">
              Download our brochure to explore our electrical solutions, industry experience, and successful project portfolio.
            </p>
            <button
              onClick={handleBrochureDownload}
              className="inline-flex items-center gap-3 px-8 py-3 rounded font-medium hover:opacity-90 transition font-inter cursor-pointer text-white"
              style={{ backgroundColor: '#e81717' }}
            >
              Download Brochure
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview%20%2820%29-O93XTCqx94FrgBLROhZZAeM2mTPMj7.png"
                alt="Download icon"
                style={{ width: '18px', height: '18px' }}
              />
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
