'use client'

import { useEffect, useState } from 'react'
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Projects Completed', value: 300, color: '#FF6B6B' },
  { name: 'Client Satisfaction', value: 95, color: '#4ECDC4' },
  { name: 'On-Time Delivery', value: 98, color: '#45B7D1' },
  { name: 'Safety Compliance', value: 100, color: '#96CEB4' },
]

const COLORS = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4']

export function SuccessPieChart() {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    setIsAnimating(true)
  }, [])

  return (
    <div
      className={`w-full h-96 flex items-center justify-center transition-all duration-1000 ${
        isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Tooltip 
            contentStyle={{
              backgroundColor: '#fff',
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '8px 12px',
            }}
          />
          <Legend 
            layout="vertical"
            align="right"
            verticalAlign="middle"
            formatter={(value) => <span className="text-sm text-foreground font-geist">{value}</span>}
          />
          <Pie
            data={data}
            cx="40%"
            cy="50%"
            innerRadius={60}
            outerRadius={120}
            paddingAngle={2}
            dataKey="value"
            animationBegin={0}
            animationDuration={1500}
            animationEasing="ease-out"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
