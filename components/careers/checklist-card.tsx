'use client'

interface ChecklistCardProps {
  items: string[]
  title: string
}

export function ChecklistCard({ items, title }: ChecklistCardProps) {
  return (
    <div className="bg-white rounded-lg p-8 shadow-md">
      <h3 className="text-xl font-semibold text-foreground mb-6 font-geist">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3 text-gray-700 font-inter">
            <span className="text-blue-500 font-bold mt-0.5">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
