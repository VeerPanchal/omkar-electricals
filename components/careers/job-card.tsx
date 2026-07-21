'use client'

import Link from 'next/link'

interface JobCardProps {
  id: string
  title: string
  department: string
  location: string
  experience: string
  type: 'Full-Time' | 'Part-Time' | 'Internship'
  description: string
}

export function JobCard({ id, title, department, location, experience, type, description }: JobCardProps) {
  const typeColors = {
    'Full-Time': 'bg-blue-100 text-blue-700',
    'Part-Time': 'bg-yellow-100 text-yellow-700',
    'Internship': 'bg-orange-100 text-orange-700',
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold text-foreground font-geist mb-1">{title}</h3>
          <p className="text-sm text-gray-500 font-inter">{department}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${typeColors[type]}`}>
          {type}
        </span>
      </div>

      <p className="text-gray-600 mb-4 font-inter line-clamp-2">{description}</p>

      <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 font-inter">
        <div>
          <span className="font-medium text-foreground">Location:</span> {location}
        </div>
        <div>
          <span className="font-medium text-foreground">Experience:</span> {experience}
        </div>
      </div>

      <Link
        href={`/careers/${id}`}
        className="inline-block bg-blue-500 text-white px-6 py-2 rounded font-medium hover:bg-blue-600 transition font-inter"
      >
        View Details
      </Link>
    </div>
  )
}
