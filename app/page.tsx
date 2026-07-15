import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function Home() {
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
                  In Maharashtra, most individuals confuse an electrician with an electrical contractor since they do not know the essential distinctions between them. However, both positions are different from one another and might be regarded as electricians employed by electrical contractors in Mumbai. Let&apos;s examine a few of the basic tasks performed by electrical contractors.
                </p>
                <Link
                  href="/about"
                  className="inline-block bg-accent text-accent-foreground px-6 py-3 rounded font-medium hover:opacity-90 transition font-inter"
                >
                  ABOUT US
                </Link>
              </div>

              {/* Right image */}
              <div className="relative">
                <div className="relative h-96 md:h-[500px] w-full">
                  <Image
                    src="/electrician-hero.png"
                    alt="Professional electrician with tools"
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
                  is one of the top Government Electrical Contractors in Maharashtra because we are happy to be connected with some of the most prestigious electrical projects in the state. With a group of highly skilled and knowledgeable experts who are on board and completely comprehend your needs. Electrical cable laying, concealed wiring, casing wiring, industrial wiring, residential wiring, turnkey electrical projects, maintenance and installation, among other electrical services, are just a few of the many electrical services we provide in Mumbai. In Maharashtra, we offer the best solar kits. The electrical contractors we work with in Maharashtra are excellent.
                </p>
                <p className="text-gray-700 leading-relaxed text-justify">
                  For any kind of property, electrical wiring is crucial. You cannot afford to be lax in this situation. To ensure that quality is never compromised, we take all necessary safety precautions. We are one of Mumbai&apos;s most dependable electrical contractors because of this. Our network is incredibly robust and provides power services in Mumbai that are unmatched. So don&apos;t hesitate to look for a contractor who handles jobs like cover wiring, industrial wiring, etc. You are already in the proper location. Mumbai has a large number of electrical contractors, but we stand out from the crowd since we are superior to them.
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
        <section className="bg-secondary py-16 md:py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-center text-foreground mb-4 font-geist">
              Our Services
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto font-inter">
              We provide comprehensive electrical services for residential, commercial, and industrial projects.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 font-geist">
              {[
                {
                  title: 'Residential Wiring',
                  description: 'Complete electrical wiring solutions for homes with safety compliance',
                },
                {
                  title: 'Industrial Installation',
                  description: 'Heavy-duty electrical systems for industrial applications',
                },
                {
                  title: 'Maintenance & Repair',
                  description: 'Professional maintenance and repair of existing electrical systems',
                },
              ].map((service) => (
                <div key={service.title} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/services"
                className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded font-medium hover:opacity-90 transition font-inter"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-foreground text-white py-16 md:py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 font-geist">
              Need Professional Electrical Services?
            </h2>
            <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto font-geist">
              Contact us today for a free quote. Our experienced team is ready to help with any electrical project.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded font-medium hover:opacity-90 transition font-inter"
            >
              Contact Now
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
