'use client'

import { useEffect, useState } from 'react'
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts'

const rawData = [
  { name: 'Developers & Real Estate', value: 300 },
  { name: 'Commercial Buildings', value: 95 },
  { name: 'Banking & Financial Services', value: 98 },
  { name: 'Institutional', value: 100 },
]

const COLORS = ['#FF3F14', '#4997F5', '#F2DB13', '#49CF3A']

// Calculate total and add percentage to each data point
const total = rawData.reduce((sum, item) => sum + item.value, 0)
const data = rawData.map((item) => ({
  ...item,
  percentage: ((item.value / total) * 100).toFixed(2),
}))

export function SuccessPieChart() {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    setIsAnimating(true)
  }, [])

  return (
    <div
      className={`w-full transition-all duration-1500 ${isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Roboto:wght@400;500;600&display=swap');
        
        .recharts-wrapper {
          overflow: visible !important;
        }
        
        .recharts-label {
          font-size: 13px !important;
          font-weight: 600 !important;
          fill: #1f2937 !important;
          font-family: "Roboto", sans-serif !important;
        }
        
        .recharts-label-line {
          stroke: #9ca3af !important;
          stroke-width: 1 !important;
        }
        
        .recharts-legend-wrapper {
          padding-top: 24px !important;
        }

        .recharts-default-legend {
          font-family: "Geist", sans-serif !important;
          font-size: 18px !important;
        }

        .recharts-default-legend li {
          font-family: "Geist", sans-serif !important;
          font-size: 18px !important;
        }

        .recharts-wrapper svg text {
          font-family: "Roboto", sans-serif !important;
        }

        .recharts-pie text {
          font-family: "Roboto", sans-serif !important;
          font-weight: 500 !important;
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
            label={({ percentage }) => `${percentage}%`}
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
