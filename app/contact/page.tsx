'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { MapPin } from 'lucide-react'

export default function Contact() {

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-background py-12 md:py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <p className="text-accent font-bold text-sm md:text-base mb-4 font-geist">WHO WE ARE?</p>
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-6 font-geist">
              You Have a <span className="text-accent">Question?</span>
            </h1>
            <p className="text-2xl md:text-3xl text-foreground font-normal font-geist">Let us Answer it.</p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 md:py-24 px-4 font-geist">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Head Office */}
              <div className="bg-white p-8 rounded-lg shadow-sm border border-border text-center font-roboto">
                <div className="flex justify-center mb-4">
                  <img
                    src="/google-maps-pin.png"
                    alt="Location"
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Head Office</h3>
                <p className="text-gray-700 text-base leading-relaxed font-roboto">
                  Janwadkar complex lower ground (LG-2), Panchaganga hospital,
                  <br />
                  2116 Shukrawar peth, Kolhapur (416002),
                  <br />
                  Maharashtra
                </p>
              </div>

              {/* Quick Contact */}
              <div className="bg-white p-8 rounded-lg shadow-sm border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-6 text-center font-roboto">Quick Contact</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-geist">
                  <a
                    href="tel:+917721027474"
                    className="bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 px-6 rounded text-center transition"
                  >
                    CALL NOW
                  </a>
                  <a
                    href="https://wa.me/919209254245"
                    className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded text-center transition"
                  >
                    WHATSAPP
                  </a>
                </div>
              </div>
            </div>

            {/* Get Directions */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-border">
              <div className="flex items-center justify-center gap-3 mb-4 font-roboto text-center">
                <span className="text-foreground font-bold text-lg">GET DIRECTIONS</span>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview%20%2811%29-21TzetIXpvya2Yzvvn2OzcYiXmIQeH.png"
                  alt="Arrow"
                  className="w-6 h-6 object-contain"
                />
              </div>
              <p className="text-gray-700 text-base mb-6 font-geist text-center">
                Click the button below to open our location in Google Maps and get turn-by-turn directions to Omkar Electricals.
              </p>
              <a
                href="https://maps.app.goo.gl/4Qx4ZTJsPG36AUD57"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 px-6 rounded text-center transition font-geist"
              >
                OPEN IN GOOGLE MAPS
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
