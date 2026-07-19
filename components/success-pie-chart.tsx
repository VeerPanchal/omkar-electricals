'use client'

import { useEffect, useState } from 'react'
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Projects Completed', value: 300 },
  { name: 'Client Satisfaction', value: 95 },
  { name: 'On-Time Delivery', value: 98 },
  { name: 'Safety Compliance', value: 100 },
]

const COLORS = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4']

export function SuccessPieChart() {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    setIsAnimating(true)
  }, [])

  return (
    <div
      className={`w-full transition-all duration-1500 ${
        isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      <style>{`
        .recharts-wrapper {
          overflow: visible !important;
        }
        
        .recharts-label {
          font-size: 13px !important;
          font-weight: 600 !important;
          fill: #1f2937 !important;
        }
        
        .recharts-label-line {
          stroke: #9ca3af !important;
          stroke-width: 1 !important;
        }
        
        .recharts-legend-wrapper {
          padding-top: 24px !important;
        }
      `}</style>

      <ResponsiveContainer width="100%" height={500}>
        <PieChart margin={{ top: 20, right: 80, left: 80, bottom: 80 }}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={120}
            paddingAngle={2}
            dataKey="value"
            label
            labelLine={true}
            animationBegin={0}
            animationDuration={1500}
            animationEasing="ease-out"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: '#ffffff',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              padding: '10px 14px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            }}
            formatter={(value) => `${value}%`}
          />
          <Legend
            verticalAlign="bottom"
            height={36}
            wrapperStyle={{
              paddingTop: '24px',
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '24px',
            }}
            iconType="circle"
            formatter={(value) => <span className="text-sm text-foreground font-geist">{value}</span>}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
