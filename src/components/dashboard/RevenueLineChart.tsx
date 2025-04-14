import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { InfoIcon } from 'lucide-react'
const data = [
  {
    name: 'Jan',
    facebook: 100,
    google: 150,
  },
  {
    name: 'Feb',
    facebook: 120,
    google: 170,
  },
  {
    name: 'Mar',
    facebook: 140,
    google: 200,
  },
  {
    name: 'Apr',
    facebook: 180,
    google: 250,
  },
  {
    name: 'May',
    facebook: 200,
    google: 230,
  },
  {
    name: 'Jun',
    facebook: 220,
    google: 300,
  },
  {
    name: 'Jul',
    facebook: 250,
    google: 350,
  },
  {
    name: 'Aug',
    facebook: 280,
    google: 320,
  },
  {
    name: 'Sep',
    facebook: 260,
    google: 380,
  },
  {
    name: 'Oct',
    facebook: 300,
    google: 400,
  },
  {
    name: 'Nov',
    facebook: 320,
    google: 380,
  },
  {
    name: 'Dec',
    facebook: 340,
    google: 450,
  },
]
export function RevenueLineChart() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-sm font-medium text-gray-800">Revenue</h3>
        <button className="text-gray-400">
          <InfoIcon size={18} />
        </button>
      </div>
      <div className="mb-4 flex items-center">
        <div className="flex items-center mr-4">
          <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
          <span className="text-xs text-gray-700">Facebook Ads</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-gray-700 mr-2"></div>
          <span className="text-xs text-gray-700">Google Ads</span>
        </div>
      </div>
      <div className="h-[240px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 20,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="name"
              tick={{
                fontSize: 12,
              }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{
                fontSize: 12,
              }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="facebook"
              stroke="#2196F3"
              strokeWidth={3}
              dot={{
                r: 0,
              }}
              activeDot={{
                r: 6,
              }}
            />
            <Line
              type="monotone"
              dataKey="google"
              stroke="#37474F"
              strokeWidth={3}
              dot={{
                r: 0,
              }}
              activeDot={{
                r: 6,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
