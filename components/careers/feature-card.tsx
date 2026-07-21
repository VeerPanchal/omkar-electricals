'use client'

import { ReactNode } from 'react'

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  accent?: 'orange' | 'yellow' | 'blue'
}

export function FeatureCard({ icon, title, description, accent = 'blue' }: FeatureCardProps) {
  const accentColors = {
    orange: 'text-orange-500',
    yellow: 'text-yellow-500',
    blue: 'text-blue-500',
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className={`${accentColors[accent]} mb-4 text-5xl`}>{icon}</div>
      <h3 className="text-xl font-medium text-foreground mb-3 font-geist">{title}</h3>
      <p className="text-gray-600 font-inter">{description}</p>
    </div>
  )
}
