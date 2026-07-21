'use client'

import { ReactNode } from 'react'
import Image from 'next/image'

interface FeatureCardProps {
  icon?: ReactNode
  iconUrl?: string
  title: string
  description: string
  accent?: 'orange' | 'yellow' | 'blue'
}

export function FeatureCard({ icon, iconUrl, title, description, accent = 'blue' }: FeatureCardProps) {
  const accentColors = {
    orange: 'text-orange-500',
    yellow: 'text-yellow-500',
    blue: 'text-blue-500',
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="mb-4 h-16 flex items-center">
        {iconUrl ? (
          <Image
            src={iconUrl}
            alt={title}
            width={64}
            height={64}
            className="w-16 h-16 object-contain"
          />
        ) : (
          <div className={`${accentColors[accent]} text-3xl`}>{icon}</div>
        )}
      </div>
      <h3 className="text-xl font-medium text-foreground mb-3 font-geist">{title}</h3>
      <p className="text-gray-600 font-inter">{description}</p>
    </div>
  )
}
