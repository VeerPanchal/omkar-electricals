'use client'

interface TimelineStepProps {
  number: number
  title: string
  description: string
  isLast?: boolean
}

export function TimelineStep({ number, title, description, isLast = false }: TimelineStepProps) {
  return (
    <div className="flex gap-6">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center font-normal font-geist text-lg">
          {number}
        </div>
        {!isLast && <div className="w-1 h-16 bg-gray-300 mt-2"></div>}
      </div>
      <div className="pb-8">
        <h3 className="text-lg font-semibold text-foreground mb-2 font-geist">{title}</h3>
        <p className="text-gray-600 font-inter" style={{ textAlign: 'justify' }}>{description}</p>
      </div>
    </div>
  )
}
