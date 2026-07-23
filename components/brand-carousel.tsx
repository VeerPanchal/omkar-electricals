'use client'

import Marquee from 'react-fast-marquee'

const brands = [
  {
    name: 'KEI Wires & Cables',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2Y2ql7LPuKNhty5WLG86mYlJwwjrYp.png',
  },
  {
    name: 'Orient Electric',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cR4LxwXYZUcCB1kJD4t83N9ROWN96P.png',
  },
  {
    name: 'Goldmedal',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BK620jflQqQoWNRkmTyHdKll8PBcY6.png',
  },
  {
    name: 'Schneider Electric',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ctkwyT7mu8sATdIql5vZ5o5enT2KdM.png',
  },
  {
    name: 'Bosch',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-iXk29c1OwG8SZ2GOCt3uxGXSO0r1Dp.png',
  },
  {
    name: 'Crompton',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6CAKEkZedje72i61PyT5vJVGOJl2GG.png',
  },
  {
    name: 'Philips',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9Mho0U0Nv1Fk0zbPNBu6nGPtFGdlXW.png',
  },
  {
    name: 'M-Seal',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-c1uSHIa1w9EgdprO6bzb8SnBK01Dan.png',
  },
  {
    name: 'Havells',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zgoIdBJZuHVGJertwSC3QjXXXqIbAD.png',
  },
  {
    name: 'Wipro Lighting',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bmlRBMATpC2COEkZPtLjuba4A9L8eF.png',
  },
  {
    name: 'Polyab',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-UJGCG9rsYHtRkBsQlcV0041g6E35uX.png',
  },
]

export function BrandCarousel() {
  return (
    <div className="w-full bg-background py-12 md:py-16 px-4">
      <div className="max-w-9xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3 font-geist">
            Trusted Brands & Partners
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-geist">
            We proudly partner with leading electrical brands to deliver reliable, high-quality, and
            industry-standard solutions.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full">
          {/* Fade Overlays */}
          <div className="absolute left-0 top-0 w-16 md:w-32 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-16 md:w-32 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Marquee Carousel */}
          <Marquee speed={50} gradient={false} pauseOnHover={true}>
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 mx-4 md:mx-6 flex items-center justify-center bg-white rounded-lg shadow-sm border border-border"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-24 h-24 md:w-32 md:h-32 object-contain"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  )
}
